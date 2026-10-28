import { Link } from "react-router"

function Button({ children, disabled, to, type = 'primary', buttonType = 'button' }) {


    const base = 'bg-yellow-400  uppercase text-stone-800 font-semibold tracking-wide rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-slate-600';

    const styles = {
        primary: base + ' px-4 py-3 sm:px-6 sm:py-4',
        small: base + ' px-4 py-2 md:px-5 md:py-2.5 text-xs',

        secondary: 'bg-transparent rounded-full border-2 border-stone-500 uppercase text-stone-800 font-semibold tracking-wide rounded-full hover:bg-yellow-200 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-slate-600 px-4 py-3 sm:px-6 sm:py-4'


    }

    if (to)
        return <Link to={to} className={styles[type]}>{children}</Link>


    return (
        <button type={buttonType} disabled={disabled} className={styles[type]}>
            {disabled ? 'Placing order...' : children}
        </button>
    )
}

export default Button
