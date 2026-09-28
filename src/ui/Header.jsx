import { Link } from "react-router"
import SearchOrder from "../features/order/SearchOrder"


function Header() {
  return (
    <header>
        <Link to="/">Fast react Pizza co.</Link>

        <SearchOrder />

        <p>Mehedi</p>
    </header>
  )
}

export default Header