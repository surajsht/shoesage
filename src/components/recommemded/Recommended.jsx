import React from "react";
import RecommendedList from "./RecommendedList";
import "./recommended.css";

const Recommended = () => {
  return (
    <section className="recommended-section">
      <div className="recommended-header">
        <h2 className="recommended-title"> Recommended Products </h2>
      </div>

      <RecommendedList />
    </section>
  );
};

export default Recommended;
