import { useState, useEffect } from "react";
import { useCon } from "../../context/Context";
import ProductLoader from "../loader/productsLoader/ProductsLoader";
import { Link } from "react-router-dom";

const RecommendedList = () => {
  const [shuffledArray, setShuffledArray] = useState([]);

  let { apiData, loading } = useCon();

  let randomItems = () => {
    if (apiData && apiData.length > 0) {
      let dataCopy = [...apiData];

      for (let i = dataCopy.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [dataCopy[i], dataCopy[j]] = [dataCopy[j], dataCopy[i]];
      }

      let sliceDataCopy = dataCopy.slice(0, 6);
      setShuffledArray(sliceDataCopy);
    }
  };

  useEffect(() => {
    randomItems();
  }, [apiData]);

  if (loading) return <ProductLoader />;

  return (
    <div className="recommended-list">
      {shuffledArray.map((item) => {
        let { id, img, title, price } = item;

        return (
          <div key={id} className="recommended-list-item">
            <img src={img} alt="product-image" />
            <Link to={`/product/${id}`} className="recommended-item-title">
              {title}
            </Link>
            <span className="recommended-item-price"> Rs.{price} </span>
          </div>
        );
      })}
    </div>
  );
};

export default RecommendedList;
