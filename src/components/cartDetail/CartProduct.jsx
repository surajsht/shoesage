import { useCon } from "../../context/Context";

const CartProduct = () => {
  let { cart, setCart } = useCon();

  let deleteCartProduct = (id) => {
    let filterData = cart.filter((item, idx) => item.id !== id);
    setCart(filterData);
  };

  let cartIncOrDec = (id, command) => {
    let updateCart = cart.map((item) => {
      if (item.id === id) {
        if (command === "increase") {
          return { ...item, productQuantity: Number(item.productQuantity) + 1 };
        } else if (command === "decrease") {
          return { ...item, productQuantity: Number(item.productQuantity) - 1 };
        }
      }
      return item;
    });

    setCart(updateCart);
  };

  return (
    <>
      <div className="cart-product-header">
        <div> Product </div>
        <div> Price </div>
        <div> Quantity </div>
        <div> Total </div>
        <div></div>
      </div>

      <div className="product-details-container">
        {cart.map((item) => {
          let { id, title, img, productQuantity, price, category } = item;

          return (
            <div key={id} className="cart-product-item">
              <div className="cart-product-detail">
                <img src={img} alt="product-item" />
                <div className="cart-product-content">
                  <h2> {title} </h2>
                  <span> {category} </span>
                </div>
              </div>

              <div className="cart-product-price">Rs{price}</div>
              <div className="cart-product-quantity">
                <button onClick={() => cartIncOrDec(id, "increase")}>+</button>
                <p>{productQuantity}</p>
                <button
                  onClick={() => cartIncOrDec(id, "decrease")}
                  disabled={productQuantity <= 1}
                >
                  -
                </button>
              </div>
              <div className="cart-product-total-price">
                Rs.{productQuantity * price}
              </div>
              <div className="cart-product-delete">
                <button onClick={() => deleteCartProduct(id)}>x</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CartProduct;
