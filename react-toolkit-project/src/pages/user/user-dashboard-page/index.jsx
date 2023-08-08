import React from "react";
import { useSelector } from "react-redux";

import Dropdown from "react-bootstrap/Dropdown";

const UserDashboardPage = () => {
  const authState = useSelector((state) => state.authState);
  return (
    <div>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 bg-light"
        style={{ width: "280px" }}
      >
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="#" className="nav-link active" aria-current="page">
              <svg className="bi me-2" width="16" height="16">
                <use xlink:href="#home" />
              </svg>
              Home
            </a>
          </li>
          <li>
            <a href="#" class="nav-link link-dark">
              <svg className="bi me-2" width="16" height="16">
                <use xlink:href="#speedometer2" />
              </svg>
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-dark">
              <svg className="bi me-2" width="16" height="16">
                <use xlink:href="#table" />
              </svg>
              Orders
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-dark">
              <svg class="bi me-2" width="16" height="16">
                <use xlink:href="#grid" />
              </svg>
              Products
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-dark">
              <svg class="bi me-2" width="16" height="16">
                <use xlink:href="#people-circle" />
              </svg>
              Customers
            </a>
          </li>
        </ul>
        <hr />

        <Dropdown>
          <Dropdown.Toggle
            variant="primary"
            id="dropdown-basic "
            className="d-flex align-items-center text-decoration-none dropdown-toggle w-100"
          >
            <img
              src="https://github.com/mdo.png"
              alt=""
              width="32"
              height="32"
              className="rounded-circle me-2"
            />
            <strong>{authState.user?.fullname}</strong>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Dashborad</Dropdown.Item>
            <Dropdown.Item href="#/action-2">My Project</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Settings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <div class="dropdown">
          <a
            href="#"
            className=""
            id="dropdownUser2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          ></a>
          <ul
            className="dropdown-menu text-small shadow"
            aria-labelledby="dropdownUser2"
          >
            <li>
              <a className="dropdown-item" href="#">
                New project...
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Settings
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Profile
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserDashboardPage;
