import { useSelector } from "react-redux"
import CartItem from "./CartItem"

const CartContainer = () => {
   const {amount, cartItems,} =  useSelector((store)=>store.cart)
  console.log(amount)
  if(amount <1

  ){
    return <div className="container mt-4">
    <h2 className="text-center">Your bag</h2>
    <div className="text-center">
        is Empty
    </div>
    </div>
  }
  return (
    <div className="container mt-3">
        <h2 className="text-center"> Your bag</h2>
        {cartItems.map((item)=>{
            return <CartItem key={item.id} {...item}/>
        })}
    </div>
  )
}
export default CartContainer