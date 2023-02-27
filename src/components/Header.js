import "./styles.css"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div>
      <span className="header">React Context API Demo</span>
      <ul className="nav">
        <li>
            <Link to="/">Home Page</Link>
        </li>
        <li>
        <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
