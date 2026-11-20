import {createBrowserRouter} from "react-router-dom"
import { Layout } from "./components/Layout"
import { Home } from "./pages/Home"
import { Products } from "./pages/Products"
import { Cart } from "./pages/Cart"
import { Details } from "./pages/Details"

const router = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/details:id",
        element: <Details/>
      },
      {
        path: "/products",
        element: <Products/>
      },
      {
        path: "/cart",
        element: <Cart/>
      },
    ]
  }
])

export {router}