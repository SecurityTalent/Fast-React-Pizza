import { Outlet } from 'react-router'
import { useNavigation } from 'react-router'

import CartOverview from '../features/cart/CartOverview'
import Header from './Header'
import Loader from './Loader'
import CreateUser from '../features/user/CreateUser'

function AppLayout() {
  const navigation = useNavigation()
  const isLoading = navigation.state === 'loading'

  // console.log(navigation)

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]  bg-cyan-800 ">
      {isLoading && <Loader />}

      <Header />

      <main className='overflow-scroll'>
        <Outlet />

        <CreateUser />
      </main>

      <CartOverview />
    </div>
  )
}

export default AppLayout
