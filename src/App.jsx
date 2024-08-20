
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import CartContainer from './components/CartContainer'
import Navbar from './components/Navbar'
import { useEffect } from 'react'
import { calculateTotal } from './features/cart/cartSlice'

function App() {
  const {cartItems} = useSelector((store)=>store.cart)
  const dispatch = useDispatch()
  useEffect(()=>{
  dispatch(calculateTotal())
  },[cartItems])
  return <div className=''>
  <Navbar/>
  <CartContainer/>
  </div>
}
export default App