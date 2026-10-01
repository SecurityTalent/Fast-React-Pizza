import { Link } from 'react-router'
import SearchOrder from '../features/order/SearchOrder'
import UserName from '../features/user/UserName'

function Header() {
  return (
    <header className='bg-yellow-500 px-4 py-3 uppercase border-stone-200 sm:px-6'>
      <Link to="/">Fast react Pizza co.</Link>

      <SearchOrder />

      <UserName />
    </header>
  )
}

export default Header
