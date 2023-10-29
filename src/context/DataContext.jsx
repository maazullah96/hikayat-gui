import { collection, getDocs } from 'firebase/firestore'
import {
  createContext,
  useEffect,
  useState,
  useReducer,
  useContext
} from 'react'
import { db } from '../firebase/config'

const DataContext = createContext()

const initialDataState = {
  authors: [],
  books: [],
  categories: [],
  keywords: [],
  stories: []
}

const dataReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_DATA':
      const { collectionName, data } = action.payload
      return {
        ...state,
        [collectionName]: data
      }
    case 'SET_DATA':
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}

// Function to fetch data from the database
const fetchData = async (db) => {
  try {
    const authorsCollection = collection(db, 'author')
    const booksCollection = collection(db, 'book')
    const categoriesCollection = collection(db, 'category')
    const keywordsCollection = collection(db, 'keyword')
    const storiesCollection = collection(db, 'story')

    const authorsSnapshot = await getDocs(authorsCollection)
    const booksSnapshot = await getDocs(booksCollection)
    const categoriesSnapshot = await getDocs(categoriesCollection)
    const keywordsSnapshot = await getDocs(keywordsCollection)
    const storiesSnapshot = await getDocs(storiesCollection)

    // const authorsData = authorsSnapshot.docs.map((doc) => doc.data())
    // const booksData = booksSnapshot.docs.map((doc) => doc.data())
    // const categoriesData = categoriesSnapshot.docs.map((doc) => doc.data())
    // const keywordsData = keywordsSnapshot.docs.map((doc) => doc.data())

    const authorsData = authorsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }))

    const booksData = booksSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }))

    const categoriesData = categoriesSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }))

    const keywordsData = keywordsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }))

    const storiesData = storiesSnapshot.docs.map((doc) => {
      const data = doc.data()
      const id = doc.id
      const author = authorsData.find((author) => author.id === data.author)
      const book = booksData.find((book) => book.id === data.book)
      const category = categoriesData.find(
        (category) => category.id === data.category
      )
      const keywords = data.keywords.map((keywordId) =>
        keywordsData.find((keyword) => keyword.id === keywordId)
      )

      return {
        id,
        ...data,
        author,
        book,
        category,
        keywords
      }
    })

    return {
      authors: authorsData,
      books: booksData,
      categories: categoriesData,
      keywords: keywordsData,
      stories: storiesData
    }
  } catch (error) {
    console.error('Error fetching data:', error)
    return null
  }
}

// Function to set data using dispatch
const setData = (dispatch, fetchedData) => {
  dispatch({ type: 'SET_DATA', payload: fetchedData })
}

// Function to add data using dispatch
const addData = (dispatch, collectionName, data) => {
  dispatch({ type: 'ADD_DATA', payload: { collectionName, data } })
}

// Custom hook for data fetching and management
const useDataFetch = () => {
  const [data, dispatch] = useReducer(dataReducer, initialDataState)
  const [isDataLoaded, setIsDataLoaded] = useState(false) // Flag to track if data has been loaded

  useEffect(() => {
    const fetchDataAndSetData = async () => {
      if (!isDataLoaded) {
        const fetchedData = await fetchData(db)
        if (fetchedData) {
          setData(dispatch, fetchedData)
          setIsDataLoaded(true) // Set the flag to true after data is loaded
        }
      }
    }

    fetchDataAndSetData()
  }, [])

  return { data, addData }
}

const DataProvider = ({ children }) => {
  const { data, addData } = useDataFetch()

  return (
    <DataContext.Provider value={{ data, addData }}>
      {children}
    </DataContext.Provider>
  )
}

export const useDataContext = () => {
  const context = useContext(DataContext)
  if (context === undefined) {
    throw new Error('useDataContext must be used within DataContextProvider')
  }
  return context
}

export { DataContext, DataProvider }
