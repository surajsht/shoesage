import { useState, useEffect } from "react";
import { useCon } from "../../context/Context";

const CategoryFilter = () => {
  let [categoriesList, setCategoriesList] = useState([]);
  let { apiData } = useCon();

  useEffect(() => {
    let uniqueCategories = apiData.reduce(
      (acc, curr) => {
        if (!acc.includes(curr.category)) {
          acc = [...acc, curr.category];
        }

        return acc;
      },
      ["all"]
    );
    setCategoriesList(uniqueCategories);
  }, [apiData]);

  return (
    <div className="category-filter-container">
      <h2 className="category-filter-title">Categories</h2>

      <div className="categories-list-container">
        {categoriesList.map((item, idx) => {
          return <div key={idx}>{item}</div>;
        })}
      </div>
    </div>
  );
};

export default CategoryFilter;
