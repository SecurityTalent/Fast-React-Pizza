import { useState } from 'react'
import Button from '../../ui/Button'

function CreateUser() {
  const [username, setUsername] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <form className='text-center' onSubmit={handleSubmit}>
      <p className='mb-4 text-sm text-stone-600 md:text-base '>👋 Welcome! Please start by telling us your name:</p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className='w-72 bg-white mb-8'
      />

      {username !== '' && (
        <div>
          <Button>Start ordering</Button>
        </div>
      )}
    </form>
  )
}

export default CreateUser
