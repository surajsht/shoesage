import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const FeaturedList = () => {
  let [featuredData, setFeaturedData] = useState([]);

  let fetchFeaturedData = async () => {
    try {
      let fetchData = await fetch("/api/featured-products");
      let response = await fetchData.json();
      setFeaturedData(response.products);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchFeaturedData();
  }, []);

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
            <span className="featured-item-price"> Rs.{price} </span>
          </div>
        );
      })}
    </div>
  );
};

export default FeaturedList;
