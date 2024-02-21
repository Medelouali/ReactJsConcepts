import { Link, useLocation } from "react-router-dom"
import "./todo.css";


const Header=()=>{
  const { search }=useLocation();
  return (
    <div className="header">
        <h2>You Got A Note, We Got You Covered, Jet Down Ur Ideas;)</h2>
        <nav className="header__links">
          <span className={"header__link" + (search==="/games" ? " current__tab": "")}>
            <Link to={"/"}>Home</Link>
          </span>
          <span className={"header__link" + (search==="/" ? " current__tab": "")}>
            <Link to={"/games"}>Games</Link>
          </span>
        </nav>
    </div>
  )
}

export default Header