//ref: https://codesandbox.io/s/bootstrap-navbar-to-react-hx5cx?file=/src/Header.js
//https://codesandbox.io/s/customizable-bootstrap-navbar-b1xix?file=/src/components/Customizable.js

import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

function NavBar() {
  const headerNavRef = useRef();
  const [state, setState] = useState({
    menu: false,
    isOpen: false,
    homeLinkClass: "nav-item nav-link",
    aboutLinkClass: "nav-item nav-link",
    menuClass: "",
  });

  const toggleMenu = () => {
    setState({
      ...state,
      menu: !state.menu,
    });
  };

  const showHeader = (e) => {
    if (headerNavRef.current.classList.contains("show"))
      headerNavRef.current.classList.remove("show");
    else headerNavRef.current.classList.add("show");
  };
  const show = state.menu ? "show" : "";

  return (
    <header>
      <div className="bg-dark collapse" id="navbarHeader" ref={headerNavRef}>
        <div className="container">
          <div className="row" style={{justifyContent:'space-around'}}>
            <div className="col-sm-7 col-md-5 py-4">
              <h4 className="text-white">About</h4>
              <p className="text-muted">
             <strong> Luqatah</strong> Where you can announce and search for lost and found properties
              </p>
            </div>
            <div className="col-sm-2 offset-md-1 py-4">
              <h4 className="text-white">Contact</h4>
              <ul className="list-unstyled">
                <li>
                  <Link to="#" className="text-white">
                    Follow on Twitter
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-white">
                    Like on Facebook
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-white">
                    Email me
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-sm-3 offset-md-1 py-4">
              <h4 className="text-white">Our Features</h4>
              <ul className="list-unstyled">
                <li>
                  <Link to="#" className="text-white">
                    Found Announcements
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-white">
                    Lost Announcements
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-white">
                    Search for founds/your lost
                  </Link>
                </li>
              </ul>
            </div>
        
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          <img src="/OurLogo.png" alt="logo" className="logo-image-nav-bar" />
        </Link>
        <button className="navbar-toggler" type="button" onClick={toggleMenu}>
          {/* <span className="navbar-toggler-icon" /> */}
          <i className="fas fa-angle-double-down"></i>
        </button>
        <div className={"collapse navbar-collapse " + show}>
          <div className="navbar-nav ml-auto">
            <Link to="/RegisterLogin" className="nav-item nav-link btn btn-secondary mr-2">
              Register/Login
            </Link>
            <Link to="#" className="nav-item nav-link btn btn-info mr-2">
              عربي
            </Link>
            <button
              className="navbar-toggler collapsed mr-2"
              style={{ display: "flex" }}
              onClick={showHeader}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarHeader"
              aria-controls="navbarHeader"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </nav>
    </header>

    //     <header>
    //   <div className="bg-dark collapse" id="navbarHeader">
    //     <div className="container">
    //       <div className="row">
    //         <div className="col-sm-8 col-md-7 py-4">
    //           <h4 className="text-white">About</h4>
    //           <p className="text-muted">Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.</p>
    //         </div>
    //         <div className="col-sm-4 offset-md-1 py-4">
    //           <h4 className="text-white">Contact</h4>
    //           <ul className="list-unstyled">
    //             <li><a href="#" className="text-white">Follow on Twitter</a></li>
    //             <li><a href="#" className="text-white">Like on Facebook</a></li>
    //             <li><a href="#" className="text-white">Email me</a></li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="navbar navbar-dark bg-dark shadow-sm">
    //     <div className="container">
    //       <a href="#" className="navbar-brand d-flex align-items-center">
    //         {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true" className="me-2" viewBox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg> */}
    //         <strong>Album</strong>
    //       </a>
    //       <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
    //         <span className="navbar-toggler-icon"></span>
    //       </button>
    //     </div>
    //   </div>
    // </header>
  );
}

export default NavBar;
