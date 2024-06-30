import { useState, useEffect } from "react";
import { useCon } from "../../context/Context";
import "./categoryFilter.css";
import CategoryLoader from "../loader/categoryLoader/CategoryLoader";

const CategoryFilter = () => {
  let [categoriesList, setCategoriesList] = useState([]);
  let [currentCategory, setCurrentCategory] = useState("all");
  let { setApiData, apiData, backUpApiData, loading } = useCon();

  useEffect(() => {
    let uniqueCategory = backUpApiData.reduce(
      (acc, curr) => {
        if (!acc.includes(curr.category)) {
          acc = [...acc, curr.category];
        }
        return acc;
      },
      ["all"]
    );
    setCategoriesList(uniqueCategory);
  }, [apiData]);

  let filterProducts = (cat) => {
    setCurrentCategory(cat);

    if (cat === "all") {
      setApiData(backUpApiData);
    } else {
      let filterProductByCategory = backUpApiData.filter(
        (item) => item.category === cat
      );
      setApiData(filterProductByCategory);
    }
  };

  return (
    <>
      {loading ? (
        <CategoryLoader />
      ) : (
        <div className="category-filter-container">
          <h2 className="category-filter-title">Categories</h2>

          <div className="categories-list-container">
            {categoriesList.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className={`${item} ${
                    item === currentCategory ? "active" : ""
                  }`}
                  onClick={() => filterProducts(item)}
                >
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default CategoryFilter;
