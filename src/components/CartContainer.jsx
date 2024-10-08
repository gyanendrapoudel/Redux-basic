import { useDispatch, useSelector } from "react-redux"
import CartItem from "./CartItem"

import { calculateTotal } from "../features/cart/cartSlice"
import { confirmClicked } from "../features/modal/modalSlice"

const CartContainer = () => {
  const dispatch = useDispatch()
  const {total} = useSelector((store)=>store.cart)
   const {amount, cartItems,} =  useSelector((store)=>store.cart)
  console.log(amount)
  if(amount <1){
    return <div className="container my-5">
    <h2 className="text-center">Your bag</h2>
    <div className="text-center">
        is Empty
    </div>
    </div>
  }
  return (
    <div className="container my-5">
      <h2 className="text-center mb-3"> Your bag</h2>
      {cartItems.map((item) => {
        return <CartItem key={item.id} {...item} />
      })}
      {cartItems.length>0 &&
      <footer>
        <hr />
        <div className="d-flex justify-content-between">
          <div className="fs-4">Total </div>
          <div className="fs-4">${total.toFixed(2)}</div>
        </div>
        <div className="text-center mt-1 ">
            <button className="btn btn-outline-danger px-4 py-2 border border-2 border-danger fs-5  " onClick={()=>dispatch(confirmClicked())}>Clear Cart</button>
        </div>
      </footer>
        }
      
    </div>
  )
}
export default CartContainer