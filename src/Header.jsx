import React from "react";

const Header = (props) => {
    return (
    <header>
        <h1>Counter App</h1>
        <h1>{props.name}</h1>
    </header>
    );
};

export default Header;