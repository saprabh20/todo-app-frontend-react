import React from "react";
import "./Header.css"

const Header = () => {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
            }}
        >
            <h1>TODOS APP</h1>
        </div>
    );
};

export default Header;
