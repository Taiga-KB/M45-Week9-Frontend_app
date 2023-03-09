import React from "react";
import "./LoginUser.css";

const LoginUser = () => {
    return  (
        <div className="loginuser-wrapper">
        <form className="login-user-form">
            <label>
                Username:
                <input placeholder="username"></input>
            </label>
            <label>
                Password:
                <input placeholder="password"></input>
            </label>
            <button>login</button>
        </form>
    </div>
    )
};

export default LoginUser;