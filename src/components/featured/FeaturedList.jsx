import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductsLoader from "../loader/productsLoader/ProductsLoader";

const FeaturedList = () => {
  let [featuredData, setFeaturedData] = useState([]);
  let [loading, setLoading] = useState(true);

  let fetchFeaturedData = async () => {
    try {
      let fetchData = await fetch("/api/featured-products");
      let response = await fetchData.json();
      setFeaturedData(response.products);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchFeaturedData();
  }, []);

  if (loading) return <ProductsLoader />;

  return (
    <div className="featured-list">
      {featuredData.map((item) => {
        let { id, img, title, price } = item;

        return (
          <div key={id} className="featured-list-item">
            <img src={img} alt="product-item" />
            <Link to={`/product/${id}`} className="featured-item-title">
              {title}
            </Link>
            <span className="product-price"> Rs.{price} </span>
          </div>
        );
      })}
    </div>
  );
};

export default FeaturedList;
