"use client";

import ReactDOM from "react-dom";
import { VscCloseAll } from "react-icons/vsc";

import { ToastType } from "@/app/store/types";

import Toast from "./Toast";

import classes from "./ToastContainer.module.scss";
import useBoundStore from "@/app/store";

type Position =
  | "top-right"
  | "top-left"
  | "bottom-right"
  | "bottom-left"
  | "top-center"
  | "bottom-center";

interface IProps {
  position?: Position;
  alertMessages: ToastType[];
}

const ToastContainer = () => {
  // const ToastContainer: React.FC<IProps> = () => {
  // const ToastContainer: React.FC<IProps> = ({ position = "top-right" }) => {
  const clearAllToasts = useBoundStore((state) => state.clearAllToasts);
  const removeToast = useBoundStore((state) => state.removeToast);
  const toastArray = useBoundStore((state) => state.toastArray);
  console.log({ toastArray });

  return (
    <div className={classes.Container} data-position="top-right">
      {toastArray.length > 1 && (
        <span className={classes.CloseAll} onClick={clearAllToasts}>
          Close All
        </span>
        // <span>
        //   <VscCloseAll className={classes.CloseAll} onClick={clearAllToasts} />
        // </span>
      )}
      {toastArray.map((toast) => {
        console.log({ toast });
        return (
          <Toast
            key={toast.id}
            IsError={toast.type === "error"}
            content={toast.message}
            onClose={() => removeToast(toast.id)}
            closeAfter={toast.type === "error" ? 30000 : 7000}
          />
        );
      })}
    </div>
  );
};

export default ToastContainer;
