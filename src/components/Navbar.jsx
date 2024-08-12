import { useSelector } from "react-redux"
import { BsBagPlus } from 'react-icons/bs'

const Navbar = () => {
  const {amount} = useSelector((store)=>store.cart)
  return (
    <div className="d-flex justify-content-between px-4 py-3 bg-success   text-light">
        <h3>Redux toolkit</h3>
        < BsBagPlus className="fs-3" />
    </div>
  )
}
export default Navbar