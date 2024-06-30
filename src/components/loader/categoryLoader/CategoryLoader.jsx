import "./categoryLoader.css";

const CategoryLoader = () => {
  return (
    <div className="category-loader-container">
      <div className="loader-animation"></div>

      <div className="loader-category-list-container">
        <div className="loader-animation"></div>
        <div className="loader-animation"></div>
        <div className="loader-animation"></div>
        <div className="loader-animation"></div>
        <div className="loader-animation"></div>
      </div>
    </div>
  );
};

export default CategoryLoader;
