import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './ui/Home'
import Menu, { Loader as menuLoader } from './features/Menu/Menu'
import Cart from './features/cart/Cart'
import CreateOrder, { Action as createOrderAction } from './features/order/CreateOrder'
import Order, { Loader as orderLoader } from './features/order/Order'
import './App.css'
import AppLayout from './ui/AppLayout'
import Error from './ui/Error'

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/order/new',
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: '/order/:orderId',
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
      },
    ],
  },
])
// 00:00:00 Min

function App() {
  return <RouterProvider router={router} />
}

export default App
