import {
  Form,
  redirect,
  useActionData,
  useNavigate,
  useNavigation,
  useSubmit,
} from 'react-router'
import { createOrder } from '../../services/apiRestaurant'

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  )

const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
]

function CreateOrder() {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'

  const formErrors = useActionData()

  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart

  return (
    <div>
      <h2>Ready to order? Let's go!</h2>

      {/* <Form method="POST" action="/order/new"> */}
      <Form method="POST">
        <div>
          <label>First Name</label>
          <input className='bg-white rounded-full border border-stone-200 px-4 py-2 text-sm trannsition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-400 w-full md:px-6 md:py-3' type="text" name="customer" required />
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input className='bg-white rounded-full border border-stone-200 px-4 py-2 text-sm trannsition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-400 w-full md:px-6 md:py-3' type="tel" name="phone" required />
          </div>
          {formErrors?.phone && <p>{formErrors.phone}</p>}
        </div>

        <div>
          <label>Address</label>
          <div>
            <input className='bg-white rounded-full border border-stone-200 px-4 py-2 text-sm trannsition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-400 w-full md:px-6 md:py-3' type="text" name="address" required />
          </div>
        </div>

        <div>
          <input
            className='h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2'
            type="checkbox"
            name="priority"
            id="priority"
          // value={withPriority}
          // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <button disabled={isSubmitting} className='bg-yellow-400  uppercase text-stone-800 px-4 py-3 font-semibold tracking-wide rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-slate-600 '>
            {isSubmitting ? 'placing order...' : 'Order now'}
          </button>
        </div>
      </Form>
    </div>
  )
}

export async function Action({ request }) {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)

  // console.log(data)

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === 'on',
  }
  // console.log(order)

  const error = {}
  if (!isValidPhone(order.phone)) error.phone = 'Give me correct Phone Number'
  if (Object.keys(error).length > 0) return error



  // const newOrder = await createOrder(order)
  // return redirect(`/order/${newOrder.id}`)

  // const customer = formData.get("customer");
  // const phone = formData.get("phone");
  // const address = formData.get("address");
  // const priority = formData.get("priority");

  // console.log(customer);
  // console.log(phone);
  // console.log(address);
  // console.log(priority);

  return null;

}

export default CreateOrder
