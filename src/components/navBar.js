import React from "react";

function NavBar(props) {
  console.log(props);
  return (
    <div>
      <h1>Navbar: {props.data} </h1>
    </div>
  );
}

export default NavBar;
