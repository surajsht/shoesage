import { Link, NavLink } from "react-router-dom";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { HiBars3BottomLeft } from "react-icons/hi2";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="wrapper">
        <div className="nav-content">
          <HiBars3BottomLeft />

          <div className="logo">
            <h1>
              <Link to="/"> Home </Link>
            </h1>
          </div>

          <div className="nav-items-container">
            <div className="nav-links-container">
              <ul className="nav-links">
                <li>
                  <NavLink to="/"> Home </NavLink>
                </li>
                <li>
                  <NavLink to="/shop"> Shop </NavLink>
                </li>
              </ul>
            </div>

            <div className="nav-icon-group">
              <div className="wishlist">
                <FaHeart />
                <span className="wishlist-count">0</span>
              </div>

              <div className="cart">
                <FaShoppingCart />
                <div className="cart-count">0</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
