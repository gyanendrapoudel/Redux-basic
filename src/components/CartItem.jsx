import { BsArrowUpCircleFill } from 'react-icons/bs'
import { BsArrowDownCircleFill } from 'react-icons/bs'
import { removeItem } from '../features/cart/cartSlice'
import { useDispatch } from 'react-redux'

const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch()
  return (
    <div className="my-1">
      <div className="row align-items-center  ">
        <div className="col-10 d-flex align-items-center ">
          <img src={img} alt={title} style={{ height: '150px' }} />
          <div className="text-capitalize">
            <h4>{title}</h4>
            <p className="fs-5">${price}</p>
            <button className="btn btn-danger" onClick={()=>dispatch(removeItem(id))}>remove</button>
          </div>
        </div>
        <div className="col-2 text-center">
          <BsArrowDownCircleFill className="icons fs-3 text-success " />
          <div className="fs-4">{amount}</div>
          <BsArrowUpCircleFill className="icons fs-3 text-success" />
        </div>
      </div>
    </div>
  )
}
export default CartItem
