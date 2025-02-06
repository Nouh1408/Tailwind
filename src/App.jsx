import Layout from './Components/Layout/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home'
import About from './Components/About/About'

function App() {
  const router = createBrowserRouter([
    {path:'',element:<Layout/>,children:[
      {index:true,element:<Home/>},
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
