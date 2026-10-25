import { Link } from "react-router"

function Button({ children, disabled, to, type }) {


    const base = 'bg-yellow-400  uppercase text-stone-800 font-semibold tracking-wide rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-slate-600';

    const styles = {
        primary: base + 'px-4 py-3 sm:px-6 sm:py-4',
        small: base + 'px-4 py-2 md:px-5 md:py-2.5 text-xs',


    }

    if (to)
        return <Link to={to} className={styles[type]}>{children}</Link>


    return (
        <button disabled={disabled} className={styles[type]}>
            {disabled ? 'placing order...' : 'Order now'}
        </button>
    )
}

export default Button