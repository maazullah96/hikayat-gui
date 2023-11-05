import { createContext, useContext, useReducer } from 'react'
import { DataContext } from './DataContext'

const StyleContext = createContext()

const initialStyleState = {
  fonts: [
    { id: 'raleway-font', label: 'Raleway', value: 'Raleway' },
    { id: 'montserrat-font', label: 'Montserrat', value: 'Montserrat' },
    { id: 'titillium-font', label: 'Titillium Web', value: 'Titillium Web' },
    { id: 'pacifico-font', label: 'Pacifico', value: 'Pacifico' },
    { id: 'josefin-slab-font', label: 'Josefin Slab', value: 'Josefin Slab' },
    { id: 'orbitron-font', label: 'Orbitron', value: 'Orbitron' },
    { id: 'comfortaa-font', label: 'Comfortaa', value: 'Comfortaa' },
    { id: 'courgette-font', label: 'Courgette', value: 'Courgette' },
    { id: 'ubuntu-font', label: 'Ubuntu', value: 'Ubuntu' },
    { id: 'chewy-font', label: 'Chewy', value: 'Chewy' },
    { id: 'lobster-two-font', label: 'Lobster Two', value: 'Lobster Two' },
    {
      id: 'kaushan-script-font',
      label: 'Kaushan Script',
      value: 'Kaushan Script'
    },
    { id: 'economica-font', label: 'Economica', value: 'Economica' },
    { id: 'satisfy-font', label: 'Satisfy', value: 'Satisfy' }
  ],
  fontSizes: ['Small', 'Medium', 'Large'],
  selectedFont: null,
  selectedFontSize: 14
}

// Define your style reducer here if needed
function styleReducer(state, action) {
  // Handle state changes based on action type
  switch (action.type) {
    case 'CHANGE_FONT':
      return { ...state, selectedFont: action.payload }
    case 'CHANGE_FONT_SIZE':
      return { ...state, selectedFontSize: action.payload }
    default:
      return state
  }
}

const StyleProvider = ({ children }) => {
  const [styleState, dispatch] = useReducer(styleReducer, {
    ...initialStyleState,
    selectedFont: initialStyleState.fonts[0],
    selectedFontSize: 14
  })

  return (
    <StyleContext.Provider value={{ styleState, dispatch }}>
      {children}
    </StyleContext.Provider>
  )
}

export const useStyleContext = () => {
  const context = useContext(StyleContext)
  if (!context) {
    throw new Error('useStyleContext must be used within a StyleProvider')
  }
  return context
}

export { StyleContext, StyleProvider }
