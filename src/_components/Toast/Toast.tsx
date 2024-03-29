import { useState, useEffect } from "react";

import { MdClose } from "react-icons/md";

import Success from "./Success";
import Error from "./Error";

import classes from "./Toast.module.scss";

interface IProps {
  content: React.ReactNode;
  onClose: () => void;
  IsError?: boolean;
  closeAfter?: number;
}

const Toast: React.FC<IProps> = ({
  content,
  onClose,
  closeAfter = 7000,
  IsError = true,
}) => {
  const [Animate, setAnimate] = useState(false);
  const [IsPaused, setIsPaused] = useState(false);
  const [ToastIsVisible, setToastIsVisible] = useState(false);
  const [CountDown, setCountDown] = useState(closeAfter);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (!IsPaused) {
      timer = setInterval(() => {
        Exit();
      }, CountDown);
    }

    return () => clearInterval(timer);
  }, [content, CountDown, IsPaused]);

  const Exit = () => {
    setAnimate(true);
    setTimeout(() => {
      onClose();
      setAnimate(false);
    }, 500);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (!IsPaused && !isHovered) {
      timer = setInterval(() => {
        setCountDown((prev) => {
          if (prev < 2000) setToastIsVisible(false);
          return prev - 1000;
        });
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [IsPaused, isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setToastIsVisible(true);
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsPaused(false);
  };

  return (
    <div
      className={`${classes.Container} ${Animate ? classes.Out : ""} ${
        IsError ? classes.Error : ""
      } ${IsPaused ? classes.IsPaused : ""} ${
        ToastIsVisible ? classes.ToastIsVisible : ""
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {IsError ? <Error /> : <Success />}
      <div className={classes.Content}>{content}</div>

      <MdClose
        onClick={Exit}
        className={`${classes.Close} ${IsError ? classes.Error : ""}`}
      />
    </div>
  );
};

export default Toast;
