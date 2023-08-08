import React from "react";

const ServiceSingle = (props) => {
  return (
    <div className="col-md-3">
      <div className="card mb-4 rounded-3 shadow-sm border-success">
        <div className="card-header py-3 text-bg-success border-success">
          <h4 className="my-0 fw-normal" style={{ height: "100px" }}>
            {props.service.name}
          </h4>
        </div>
        <div className="card-body">
          <img
            src={props.service.image}
            style={{ width: "100%", margin: "10px", aspectRatio: 1 }}
          />
          <a
            href={`category/${props.service.slug}`}
            type="button"
            className="w-100 btn btn-lg btn-success"
          >
            Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceSingle;
