import Layout from './Components/Layout/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Cards from './Components/Cards/Cards'

function App() {
  const router = createBrowserRouter([
    {path:'',element:<Layout />,children:[
      {index:true,element:<Home/>},
      {path:'about',element:<About/>},
      {path:'cards',element:<Cards/>},
    ]},
    
  ])

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
