
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import CartContainer from './components/CartContainer'
import Navbar from './components/Navbar'
import { useEffect } from 'react'
import { calculateTotal } from './features/cart/cartSlice'
import Modal from './components/Modal'

function App() {
  const {cartItems} = useSelector((store)=>store.cart)
  const {isClearBtnClicked} = useSelector((store)=>store.modal)
  console.log(isClearBtnClicked)
  const dispatch = useDispatch()
  useEffect(()=>{
  dispatch(calculateTotal())
  },[cartItems])
  return <div className='main'>
 
   {isClearBtnClicked && <Modal/>}
  <Navbar/>
  <CartContainer/>
  </div>
}
export default App