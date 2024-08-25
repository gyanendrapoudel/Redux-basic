
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import CartContainer from './components/CartContainer'
import Navbar from './components/Navbar'
import { useEffect } from 'react'
import { calculateTotal, fetchCartItems } from './features/cart/cartSlice'
import Modal from './components/Modal'


function App() {
  const {cartItems, isLoading} = useSelector((store)=>store.cart)
  const {isClearBtnClicked} = useSelector((store)=>store.modal)
  console.log(isClearBtnClicked)
  const dispatch = useDispatch()

  useEffect(()=>{
  dispatch(fetchCartItems())
  },[])
  useEffect(()=>{
  dispatch(calculateTotal())

  },[cartItems])
  if(isLoading){
    return (
      <div className="spinner">
        <div className="spinner-border text-primary main ">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }
  return <div className='main'>
 
   {isClearBtnClicked && <Modal/>}
  <Navbar/>
  <CartContainer/>
  </div>
}
export default App