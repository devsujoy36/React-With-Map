import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Creators from './Components/Creators/Creators.jsx'
import Map from './Components/Map/Map.jsx'
import Creator from './Components/Creators/Creator.jsx'
const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/creators",
        element:<Creators/>,
        loader: () => fetch("../creator.json") 
      },
      {
        path:"/creator",
        element:<Creator/>,
        loader: () => fetch("../creator.json") 
      },
      {
        path:"/map",
        element:<Map/>,
      },
    ]
  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
