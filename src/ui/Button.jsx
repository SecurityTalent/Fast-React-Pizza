import { Link } from "react-router"

function Button({ children, disabled, to }) {

    const className = 'bg-yellow-400  uppercase text-stone-800 px-4 py-3 font-semibold tracking-wide rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-slate-600 md:px-6 md:py-4'

    if (to)
        return <Link to={to} className={className}>{children}</Link>


    return (
        <button disabled={disabled} className={className}>
            {disabled ? 'placing order...' : 'Order now'}
        </button>
    )
}

export default Button