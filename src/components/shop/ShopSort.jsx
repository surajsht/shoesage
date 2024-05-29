import { CiGrid2H } from "react-icons/ci";
import { TfiLayoutGrid2 } from "react-icons/tfi";

const ShopSort = () => {
  return (
    <div className="sort-container">
      <div className="view-as">
        <span> View As </span>

        <div>
          <CiGrid2H />
          <TfiLayoutGrid2 />
        </div>
      </div>
    </div>
  );
};

export default ShopSort;
