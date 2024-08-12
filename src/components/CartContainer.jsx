import { useSelector } from "react-redux"
import CartItem from "./CartItem"

const CartContainer = () => {
   const {amount, cartItems,} =  useSelector((store)=>store.cart)
  console.log(amount)
  if(amount <1){
    return <div className="container mt-5">
    <h2 className="text-center">Your bag</h2>
    <div className="text-center">
        is Empty
    </div>
    </div>
  }
  return (
    <div className="container mt-5">
      <h2 className="text-center"> Your bag</h2>
      {cartItems.map((item) => {
        return <CartItem key={item.id} {...item} />
      })}
      <footer>
        <hr />
        <div className="d-flex justify-content-between">
          <div className="fs-4">Total </div>
          <div className="fs-4">${amount.toFixed(2)}</div>
        </div>
        <div className="text-center mt-1 ">
            <button className="btn btn-outline-danger px-4 py-2 border border-2 border-danger fs-5  ">Clear Cart</button>
        </div>
      </footer>
    </div>
  )
}
export default CartContainer