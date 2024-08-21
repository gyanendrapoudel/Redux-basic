import { useDispatch } from 'react-redux'
import { clearCart } from '../features/cart/cartSlice'
import { confirmClicked } from '../features/modal/modalSlice'

const Modal = () => {
    const dispatch = useDispatch()
  return (
    <div className="confirmation d-flex align-items-center justify-content-center ">
      <div className="content p-5  text-center rounded-3">
        <div className="text-light text-center fs-4">
          Do you want to clear cart items?
        </div>
        <button className="btn btn-success m-3" onClick={()=>{dispatch(clearCart()); dispatch(confirmClicked())}
        }>confirm</button>
        <button className="btn btn-danger m-3" onClick={()=>dispatch(confirmClicked())}>cancel</button>
      </div>
    </div>
  )
}
export default Modal
