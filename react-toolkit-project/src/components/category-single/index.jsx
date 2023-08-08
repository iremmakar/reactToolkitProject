import React from "react";

import { Link } from "react-router-dom";

const CategorySingle = (props) => {
  return (
    <div className="col-md-3">
      <div className="card mb-4 rounded-3 shadow-sm border-primary">
        <div className="card-header py-3 text-bg-primary border-primary">
          <h4 className="my-0 fw-normal" style={{ height: "100px" }}>
            {props.category.name}
          </h4>
        </div>
        <div className="card-body">
          <img
            src={props.category.image}
            style={{ width: "100%", margin: "10px", aspectRatio: 1 }}
          />
          <a
            href={`category/${props.category.slug}`}
            type="button"
            className="w-100 btn btn-lg btn-primary"
          >
            Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default CategorySingle;
