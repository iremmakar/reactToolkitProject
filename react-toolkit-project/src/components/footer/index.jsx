import React, { useContext } from "react";
import LinksContainer from "./components/links-container";
import { useSelector } from "react-redux";

import { Button } from "react-bootstrap";
import { ThemeContext } from "../../context/theme-context";

const Footer = () => {
  const categoryState = useSelector((state) => state.categoryState);

  const themeContextValue = useContext(ThemeContext);

  return (
    <div>
      <footer class="pt-4 my-md-5 pt-md-5 border-top">
        <div className="row">
          <div className="col-12 col-md">
            <small className="d-block mb-3 text-body-secondary">
              &copy; 2017–2023
            </small>
          </div>

          <LinksContainer
            title="Categories"
            links={categoryState.categories.slice(0, 5).map((category) => ({
              url: `/category/${category.slug}`,
              title: category.name,
            }))}
          />
          <LinksContainer
            title="About US"
            links={[
              { title: "Örnek link 1", url: "test" },
              { title: "Örnek link 1", url: "test" },
            ]}
          />

          <div className="col-6 col-md">
            Theme Color:
            <br></br>
            <Button
              variant="light"
              onClick={() => themeContextValue.setTheme("light")}
            >
              Light
            </Button>{" "}
            &nbsp;
            <Button
              variant="dark"
              onClick={() => themeContextValue.setTheme("dark")}
            >
              Dark
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
