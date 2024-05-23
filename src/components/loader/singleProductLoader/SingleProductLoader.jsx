import "./singleProductLoader.css";

const SingleProductLoader = () => {
  return (
    <div className="singleProduct-loader-wrapper">
      <div className="wrapper">
        <div className="singleProduct-loader-container">
          <div className="singleProduct-loader-left">
            <div className="singleProduct-loader-item"></div>

            <div className="loader-left-group">
              <div className="singleProduct-loader-item"></div>
              <div className="singleProduct-loader-item"></div>
              <div className="singleProduct-loader-item"></div>
              <div className="singleProduct-loader-item"></div>
            </div>
          </div>

          <div className="singleProduct-loader-right">
            <div className="singleProduct-loader-item"></div>
            <div className="singleProduct-loader-item"></div>
            <div className="singleProduct-loader-item"></div>
            <div className="singleProduct-loader-item"></div>
            <div className="singleProduct-loader-item"></div>
            <div className="singleProduct-loader-item"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductLoader;
