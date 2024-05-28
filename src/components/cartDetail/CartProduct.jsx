import { useCon } from "../../context/Context";

const CartProduct = () => {
  let { cart } = useCon();

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
                <div>
                  <h2> {title} </h2>
                  <span> {category} </span>
                </div>
              </div>

              <div>Rs{price}</div>
              <div className="cart-product-quantity">
                <button> + </button>
                <p>{productQuantity}</p>
                <button> - </button>
              </div>
              <div> {productQuantity * price} </div>
              <div className="cart-product-delete">
                <button>x</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CartProduct;
