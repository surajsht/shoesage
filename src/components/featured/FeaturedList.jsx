import { useState, useEffect } from "react";

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
        let { id, img, title, category, price } = item;

        return (
          <div key={id} className="featured-list-item">
            <img src={img} alt="product-item" />
            <h2 className="featured-item-title"> {title} </h2>
            <span className="featured-item-price"> Rs.{price} </span>
          </div>
        );
      })}
    </div>
  );
};

export default FeaturedList;
