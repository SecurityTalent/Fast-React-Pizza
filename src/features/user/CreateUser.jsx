import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import Button from '../../ui/Button'
import { updateName } from './userSlice'

function CreateUser() {
  const [username, setUsername] = useState('')
  const userName = useSelector((state) => state.user.userName)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()

    const name = username.trim()
    if (!name) return

    dispatch(updateName(name))
    navigate('/menu')
  }

  if (userName) return null

  return (
    <form className="mx-auto flex max-w-xl flex-col items-center gap-4 px-4 text-center" onSubmit={handleSubmit}>
      <p className="mb-2 text-sm text-stone-600 md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        type="text"
        name="username"
        autoComplete="name"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-72 rounded-full bg-white px-4 py-3 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-400 md:px-6 md:py-3"
        required
      />

      {username !== '' && (
        <div className="mt-2">
          <Button type="primary" buttonType="submit">
            Start ordering
          </Button>
        </div>
      )}
    </form>
  )
}

export default CreateUser
