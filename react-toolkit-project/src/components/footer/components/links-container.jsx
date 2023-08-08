import React from "react";

const LinksContainer = (props) => {
  return (
    <div className="col-6 col-md">
      <h5>{props.title}</h5>

      <ul className="list-unstyled text-small">
        {props.links.map((item) => (
          <li className="mb-1">
            <a class="link-secondary text-decoration-none" href={item.url}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LinksContainer;
