import { useSelector } from "react-redux"
import { BsBagPlus } from 'react-icons/bs'

const Navbar = () => {
  const {amount} = useSelector((store)=>store.cart)
  return (
    <div className="d-flex justify-content-between px-4 py-3 bg-success   text-light">
      <h3>Redux toolkit</h3>
      <div className="" style={{ position: 'relative' }}>
        <BsBagPlus className="fs-2 " />
        <div className="bg-danger text-light px-2 rounded-4" style={{ position: 'absolute', top:"0", right:"-10px" }}>{amount}</div>
      </div>
    </div>
  )
}
export default Navbar