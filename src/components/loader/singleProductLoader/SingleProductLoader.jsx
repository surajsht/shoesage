import "./singleProductLoader.css";

const SingleProductLoader = () => {
  return (
    <div className="singleProduct-loader-container">
      <div className="singleProduct-loader-left">
        <div className="loader-left-group">
          <div className="singleProduct-loader-item loader-animation"></div>
          <div className="singleProduct-loader-item loader-animation"></div>
          <div className="singleProduct-loader-item loader-animation"></div>
          <div className="singleProduct-loader-item loader-animation"></div>
        </div>

        <div className="singleProduct-loader-item loader-animation"></div>
      </div>

      <div className="singleProduct-loader-right">
        <div className="singleProduct-loader-item loader-animation"></div>
        <div className="singleProduct-loader-item loader-animation"></div>
        <div className="singleProduct-loader-item loader-animation"></div>
        <div className="singleProduct-loader-item loader-animation"></div>
        <div className="singleProduct-loader-item loader-animation"></div>
        <div className="singleProduct-loader-item loader-animation"></div>
      </div>
    </div>
  );
};

export default SingleProductLoader;
