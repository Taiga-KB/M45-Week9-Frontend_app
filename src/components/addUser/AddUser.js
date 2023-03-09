import React from "react";
import "./AddUser.css";

const AddUser = () => {
    return (
        <div className="adduser-wrapper">
            <form className="add-user-form">
                <label>
                    Username:
                    <input placeholder="username"></input>
                </label>
                <label>
                    Email:
                    <input placeholder="email"></input>
                </label>
                <label>
                    Password:
                    <input placeholder="password"></input>
                </label>
                <button>Register</button>
            </form>
        </div>
    );
};

export default AddUser;