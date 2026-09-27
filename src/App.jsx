import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from "./ui/Home"
import Menu, {Loader as menuLoader} from "./features/Menu/Menu"
import Cart from "./features/cart/Cart"
import CreateOrder from "./features/order/CreateOrder"
import Order from "./features/order/Order"
import './App.css'
import AppLayout from './ui/AppLayout'


const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,

      },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/order/new',
        element: <CreateOrder />
      },
      {
        path: '/order/:orderId',
        element: <Order />
      },
    ],
  },



])
// 01:18 Min

function App() {
  return <RouterProvider router={router} />
}

export default App
