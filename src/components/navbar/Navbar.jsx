import { useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { GrFormClose } from "react-icons/gr";
import { useCon } from "../../context/Context";
import "./navbar.css";

const Navbar = () => {
  let [offcanvas, setOffcanvas] = useState(false);
  let navLinkRefContainer = useRef(null);
  let navLinkRef = useRef(null);

  let openOffcanvasMenu = () => {
    let navLinkHeight = navLinkRef.current.offsetHeight;
    navLinkRefContainer.current.style.height = navLinkHeight + "px";
    navLinkRefContainer.current.style.boxShadow =
      "0 3px 14px 3px rgba(0, 0, 0, 0.14)";
    setOffcanvas(true);
  };

  let closeOffcanvasMenu = () => {
    navLinkRefContainer.current.style.height = 0;
    navLinkRefContainer.current.style.boxShadow = "none";
    setOffcanvas(false);
  };

  let { cart, wishList } = useCon();

  return (
    <nav>
      <div className="wrapper">
        <div className="nav-content">
          {offcanvas ? (
            <GrFormClose onClick={() => closeOffcanvasMenu()} />
          ) : (
            <HiBars3BottomLeft onClick={() => openOffcanvasMenu()} />
          )}

          <div className="logo">
            <h1>
              <Link to="/"> ShopEase </Link>
            </h1>
          </div>

          <div className="nav-items-container">
            <div className="nav-links-container" ref={navLinkRefContainer}>
              <ul className="nav-links" ref={navLinkRef}>
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
                <span className="wishlist-count">{wishList.length}</span>
              </div>

              <div className="cart">
                <FaShoppingCart />
                <div className="cart-count">{cart.length}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
