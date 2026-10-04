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
    <div className="grid h-screen grid-rows-[auto_1fr_auto]  bg-blue-200 ">
      {isLoading && <Loader />}

      <Header />

      <div className='overflow-scroll my-10'>
        <main className=' max-w-3xl mx-auto'>
          <Outlet />

          <CreateUser />
        </main>
      </div>

      <CartOverview />
    </div>
  )
}

export default AppLayout
