import React from "react";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
import CategorySingle from "../../components/category-single";

const MainPage = () => {
  const categoryState = useSelector((state) => state.categoryState);

  return (
    <div>
      {" "}
      <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
        <h1 className="display-4 fw-normal text-body-emphasis">
          Welcome To Service Finder Project
        </h1>
        <p className="fs-5 text-body-secondary"></p>
      </div>
      <h1 className="display-4 text-center mb-5">Category List</h1>
      <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
        {categoryState.categories.map((category) => {
          return <CategorySingle category={category} />;
        })}
      </div>
    </div>
  );
};

export default MainPage;
