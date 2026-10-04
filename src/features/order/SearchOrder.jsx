import { useState } from 'react'
import { useNavigate } from 'react-router'

function SearchOrder() {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  function handleSUbmit(e) {
    e.preventDefault()
    if (!query) return
    navigate(`/order/${query}`)
    setQuery('')
  }

  return (
    <form onSubmit={handleSUbmit}>
      <input
        type="text"
        placeholder="Search Order"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="bg-white rounded-full px-4 py-2 text-sm placeholder:text-stone-300 sm:w-64 transition-all duration-300 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:focus:w-72"
      />
    </form>
  )
}

export default SearchOrder
