import { Link } from 'react-router'
import SearchOrder from '../features/order/SearchOrder'

function Header() {
  return (
    <header className='bg-yellow-500 px-4 py-3 uppercase'>
      <Link to="/">Fast react Pizza co.</Link>

      <SearchOrder />

      <p>Mehedi</p>
    </header>
  )
}

export default Header
