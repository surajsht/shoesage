import { useState, useEffect, useRef } from "react";
import { CiGrid2H } from "react-icons/ci";
import { TfiLayoutGrid2 } from "react-icons/tfi";
import { IoIosArrowDown } from "react-icons/io";
import { useCon } from "../../context/Context";
import "./shopSort.css";

const ShopSort = () => {
  let [sortOption, setSortOption] = useState(false);
  let sortOptionRef = useRef(null);
  let [sortOptionLabel, setOptionLabel] = useState("Select");

  let { setGridOption, gridOption, apiData, setApiData } = useCon();

  let handleIconClick = (gridLabel) => {
    setGridOption(gridLabel);
  };

  let handleClickOutsideGrid = (e) => {
    if (sortOptionRef.current && !sortOptionRef.current.contains(e.target)) {
      setSortOption(false);
    }
  };

  useEffect(() => {
    if (sortOption) {
      document.addEventListener("mousedown", handleClickOutsideGrid);
    } else {
      document.removeEventListener("mousedown", handleClickOutsideGrid);
    }

    return () =>
      document.removeEventListener("mousedown", handleClickOutsideGrid);
  }, [sortOption]);

  const handleSort = (e) => {
    const targetClassName = e.target.className;

    const sortedData = [...apiData].sort((a, b) => {
      if (targetClassName.includes("a-z")) {
        return a.title.localeCompare(b.title);
      } else if (targetClassName.includes("z-a")) {
        return b.title.localeCompare(a.title);
      } else if (targetClassName.includes("low-to-high")) {
        return a.price - b.price;
      } else if (targetClassName.includes("high-to-low")) {
        return b.price - a.price;
      } else {
        return 0;
      }
    });

    setApiData(sortedData);
    setOptionLabel(e.target.textContent);
  };

  return (
    <div className="sort-container">
      <div className="view-as">
        <span className="sort-title"> View As </span>

        <div className="view-as-icon-container">
          <CiGrid2H
            onClick={() => handleIconClick("single-layout-grid")}
            className={`${gridOption === "single-layout-grid" ? "active" : ""}`}
          />
          <TfiLayoutGrid2
            onClick={() => handleIconClick("double-layout-grid")}
            className={`${gridOption === "double-layout-grid" ? "active" : ""}`}
          />
        </div>
      </div>

      <div className="sort-by">
        <span className="sort-title"> Sort By </span>
        <div
          className="sort-by-detail"
          onClick={() => {
            setSortOption(true);
          }}
          ref={sortOptionRef}
        >
          <span> {sortOptionLabel} </span>
          <IoIosArrowDown />

          <ul
            className={`sort-by-options ${sortOption ? "active" : ""}`}
            onClick={(e) => handleSort(e)}
          >
            <li className="a-z"> Alphabetically (A - Z) </li>
            <li className="z-a"> Alphabetically (Z - A) </li>
            <li className="low-to-high"> Price, low to high </li>
            <li className="high-to-low"> Price, hight to low </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ShopSort;
