import Button from '../../ui/Button'
import { formatCurrency } from '../../utils/helpers'

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza


  function handeleAddToCart() {
    console.log(id)
  }


  return (
    <li className='flex gap-4 py-2'>

      <img src={imageUrl} alt={name} className={`h-24 ${soldOut ? 'greyscale opacity-70' : ''}`} />

      <div className='flex flex-col grow pt-0.5 '>
        <p className='font-medium'>{name}</p>
        <p className='text-sm italic text-stone-500'>{ingredients.join(', ')}</p>

        <div className='mt-auto flex flex-grow items-center justify-between'>
          {!soldOut ? <p className='text-sm'>{formatCurrency(unitPrice)}</p> : <p className='text-sm uppercase font-medium text-stone-500'>Sold out</p>}

          {!soldOut && <Button onClick={handeleAddToCart} type='small' >Add to Cart</Button>}

        </div>

      </div>

    </li>
  )
}

export default MenuItem
