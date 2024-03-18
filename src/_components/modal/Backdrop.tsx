"use client";

import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import classes from "./Backdrop.module.scss";

const Backdrop = ({ close }: { close: () => void }) => {
  const [IsLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (IsLoaded) {
    return ReactDOM.createPortal(
      <div className={classes.Container} onClick={close}></div>,
      document.getElementById("backdrop")!
    );
  }
};

export default Backdrop;
