import React from "react";
import classes from "./NavigationItem";

const navigationItem = (props) => (
  <li>
    <a href={props.link} className={props.active ? classes.active : null}>
      {props.children}
    </a>
  </li>
);

export default navigationItem;
