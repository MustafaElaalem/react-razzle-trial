import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
function HomePageContent() {
  return (
    <div className="container">
      <main className="page-content lines paper">
        <div>
          <div className="head-content">
            <h3>Luqatah</h3>
            <p className="header-text-home-page">
              Where you can announce and search
            </p>
            <p>for lost and found properties</p>
          </div>
          <div className="main">
            <div className="col side-card lost-card">
              <h4>
                <strong>Lost Something ?</strong>
              </h4>
              <div className="row lost-part">
                <div className="announcement-card btn btn-primary">
                  <h5>Make</h5>
                  <p>
                    <strong>a loss announcement</strong>
                  </p>
                </div>
                <div className="announcement-card btn btn-primary">
                  <h5>Search</h5>
                  <p>
                    <strong>in found properties</strong>
                  </p>
                </div>
              </div>
            </div>
            <div className="col side-card found-card">
              <h4>
                <strong>Found Something ?</strong>
              </h4>
              <div className="row found-part">
                <Link to="/foundForm">
                  <div className="announcement-card btn btn-primary">
                    <h5>Make</h5>
                    <p>
                      <strong>a finding announcement</strong>
                    </p>
                  </div>
                </Link>
                <div className="announcement-card btn btn-primary">
                  <h5>Search</h5>
                  <p>
                    <strong>in lost properties</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p>&copy; 2021 Luqatah. All rights reserved</p>
        </div>
      </main>
    </div>
  );
}

export default HomePageContent;
