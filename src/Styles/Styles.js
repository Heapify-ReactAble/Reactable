import React from "react";
import "./styles.css";
import Styles2 from "./Styles2";
import styles from "./myStyles.module.css";

const Styles = () => {
  const myStyle = {
    color: "red",
    backgroundColor: "lightgray",
    width: "50%",
    height: 100,
  };

  return (
    <div>
      <h1 className={styles.header}>Header</h1>
      <div className={styles.heading}>Heading</div>
      <Styles2 />
      <span style={myStyle}>First Child</span> {/* class */}
      <br />
      <span>Second Child</span>
    </div>
  );
};

export default Styles;
