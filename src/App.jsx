import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import NotFound from './components/NotFound.jsx'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from 'react-router-dom'

import Home from './components/Home.jsx'
// import Dashboard from './components/Dashboard.jsx'
import Authors from './components/Authors.jsx'
import { DataProvider } from './context/DataContext'
import React, { lazy, Suspense } from 'react'
const Books = lazy(() => import('./components/Books'))

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Home />}>
      <Route path='books' element={<Books />} />

      {/* <Route /> */}
      {/* <Route path='/' element={<App />}> */}
    </Route>
  )
)

const App = () => {
  return (
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  )
}
export default App
