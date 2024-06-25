import { useRef, useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { GrFormClose } from "react-icons/gr";
import { useCon } from "../../context/Context";
import "./navbar.css";
import CartPopup from "../cartPopup/CartPopup";
import WishListPopup from "../wishListPopup/WishListPopup";

const Navbar = () => {
  let [offcanvas, setOffcanvas] = useState(false);
  let navLinkRefContainer = useRef(null);
  let navLinkRef = useRef(null);
  let cartRef = useRef(null);
  let wishListRef = useRef(null);

  let { cart, wishList, setOpenCart, openCart, setOpenWishList, openWishList } =
    useCon();

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

  let handleClickOutside = (e) => {
    if (cartRef.current && !cartRef.current.contains(e.target)) {
      setOpenCart(false);
    }
  };

  useEffect(() => {
    if (openCart) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openCart]);

  let handleClickOutsideWishList = (e) => {
    if (wishListRef.current && !wishListRef.current.contains(e.target)) {
      setOpenWishList(false);
    }
  };

  useEffect(() => {
    if (openWishList) {
      document.addEventListener("mousedown", handleClickOutsideWishList);
    } else {
      document.removeEventListener("mousedown", handleClickOutsideWishList);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideWishList);
    };
  }, [openWishList]);

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
              <div className="wishlist" ref={wishListRef}>
                <FaHeart onClick={() => setOpenWishList(!openWishList)} />
                {wishList.length > 0 && (
                  <span className="wishlist-count">{wishList.length}</span>
                )}
                <WishListPopup />
              </div>

              <div className="cart" ref={cartRef}>
                <FaShoppingCart onClick={() => setOpenCart(!openCart)} />
                {cart.length > 0 && (
                  <span className="cart-count">{cart.length}</span>
                )}
                <CartPopup />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
