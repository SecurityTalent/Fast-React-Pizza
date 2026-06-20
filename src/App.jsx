import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router";

import Home from "./ui/Home"
import Error from "./ui/Error"
import Menu, {Loader as MenuLoder} from "./features/menu/Menu"
import Cart from "./features/cart/Cart"
import CreateOrder from "./features/order/CreateOrder"
import Order from "./features/order/Order"
import AppLayout from './ui/AppLayout';



const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: MenuLoder
      },
      {
        path: "/cart",
        element: <Cart />

      },
      {
        path: "/order/new",
        element: <CreateOrder />
      },
      {
        path: "/order/:orderId",
        element: <Order />
      }
    ],
  },


]);


function App() {

  return <RouterProvider router={router} />

}

export default App;



// ! 55:00:00 Min





