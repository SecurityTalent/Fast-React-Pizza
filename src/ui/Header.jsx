import { Link } from 'react-router'
import SearchOrder from '../features/order/SearchOrder'
import UserName from '../features/user/UserName'

function Header() {
  return (
    <header className='border-b border-stone-200 bg-amber-500 px-4 py-3 uppercase sm:px-6 flex justify-between'>

      <Link to="/" className='tracking-widest'>Fast react Pizza co.</Link>

      <SearchOrder />

      <UserName />
    </header>
  )
}

export default Header;

