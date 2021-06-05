import React, { useState } from "react";
import Login from "./Login";
import Register from './Register';
import "./style.css";

const RegisterLoginContainer = () => {
    const [contentName, setContentName] = useState("register")
    const toggle = (e) => {
        switch (e.target.name) {
            case "register":
                setContentName("register")
                break;
            case "login":
                setContentName("login")
                break;
            default:
                setContentName("register")
                break;
        }
    }
    const component = (name) => {
        switch (name) {
            case "register":
                return <Register />
            case "login":
                return <Login/>
            default:
                return <Register />
        }
    }
    return (
        <div className="RegisterLoginContainer">
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a className={contentName === "register" ? "nav-link active" : "nav-link"} aria-current="page" href="#"
                        onClick={toggle} name="register"
                    >Register</a>
                </li>
                <li className="nav-item">
                    <a className={contentName === "login"? "nav-link active" : "nav-link"} href="#"
                        onClick={toggle} name="login"
                    >Login</a>
                </li>
            </ul>
            {component(contentName)}
        </div>
    );
};

export default RegisterLoginContainer;