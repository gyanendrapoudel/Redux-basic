import { useSelector } from "react-redux"


const Navbar = () => {
  const {amount} = useSelector((store)=>store.cart)
  return (
    <div>
        <h3>Redux toolkit</h3>
        <p>icon</p>
        <div className="">
            <p>{amount}</p>
        </div>
    </div>
  )
}
export default Navbar