"use client";

import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import Backdrop from "./Backdrop";

import classes from "./Modal.module.scss";

const Modal: React.FC<{
  children: React.ReactNode;
  close: () => void;
  // show: boolean;
}> = ({
  children,
  close,
  //  show
}) => {
  const [IsLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    // This handles next server vs client errors, THATS ALL
    setIsLoaded(true);
  }, []);

  if (IsLoaded) {
    return ReactDOM.createPortal(
      <div
        // className={show ? "scale-100" : "scale-0"}
        style={{ transition: "1000ms ease" }}
      >
        <Backdrop close={close} />
        {/* {show && <Backdrop close={close} />} */}
        <div className={classes.Container}>{children}</div>
      </div>,
      document.getElementById("modal")!
    );
  }
};

export default Modal;
