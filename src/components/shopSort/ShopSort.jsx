import { CiGrid2H } from "react-icons/ci";
import { TfiLayoutGrid2 } from "react-icons/tfi";
import { IoIosArrowDown } from "react-icons/io";
import "./shopSort.css";

const ShopSort = () => {
  return (
    <div className="sort-container">
      <div className="view-as">
        <span className="sort-title"> View As </span>

        <div className="view-as-icon-container">
          <CiGrid2H />
          <TfiLayoutGrid2 />
        </div>
      </div>

      <div className="sort-by">
        <span className="sort-title"> Sort By </span>
        <div className="sort-by-detail">
          <span> demo select </span>
          <IoIosArrowDown />
        </div>

        <ul className="sort-by-options">
          <li> Alphabetically (A - Z) </li>
          <li> Alphabetically (Z - A) </li>
          <li> Price, low to high </li>
          <li> Price, hight to low </li>
        </ul>
      </div>
    </div>
  );
};

export default ShopSort;
