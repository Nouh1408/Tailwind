import Layout from './Components/Layout/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home'

function App() {
  const router = createBrowserRouter([
    {path:'',element:<Layout/>,children:[
      {path:'home',element:<Home/>},
      {path:'about',element:<About/>},
    ]},
    
  ])

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
