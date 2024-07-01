import { Link, useParams } from "react-router-dom";
import "./breadcrumb.css";
import { useEffect, useState } from "react";

const Breadcrumb = () => {
  let [loading, setLoading] = useState(true);
  let [productDetail, setProductDetail] = useState([]);

  let { productid } = useParams();

  let findProduct = async () => {
    setLoading(true);
    try {
      let fetchData = await fetch("/api/products");
      let response = await fetchData.json();
      let findProduct = response.products.find(
        (item) => item.id === Number(productid)
      );
      setProductDetail(findProduct);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    findProduct();
  }, [productid]);

  if (loading) return;

  let { category, title } = productDetail;

  return (
    <section className="breadcrumb-container">
      <div className="wrapper wrapper-small">
        <div className="breadcrumb-details">
          <span>
            <Link to="/"> Home </Link>
          </span>
          <span>{category}</span>
          <span>{title}</span>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
