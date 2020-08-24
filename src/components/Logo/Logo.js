import React from "react";

// import burger from "../Burger/Burger";
import burgerLogo from "../../assets/images/burger-logo.png";

import classes from "./Logo.module.css";

const logo = (props) => (
  <div className={classes.Logo}>
    <img src={burgerLogo} alt="MyBurger" />
  </div>
);

export default logo;
