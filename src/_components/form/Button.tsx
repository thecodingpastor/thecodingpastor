import Link from "next/link";
import classes from "./Button.module.scss";

interface ButtonProps {
  text: string;
  type?: "button" | "submit";
  className?: string;
  style?: object;
  href?: string;
  onClick?: () => void;
  target?: "_blank" | "";
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  type = "button",
  style = {},
  target = "",
  href,
  onClick,
  disabled = false,
}) => {
  let content: React.ReactNode;

  if (href) {
    content = (
      <Link
        href={href}
        className={classes.Button + " font-kumbh"}
        target={target}
      >
        {text}
      </Link>
    );
  } else {
    content = (
      <button
        type={type}
        onClick={onClick ? onClick : () => {}}
        className={classes.Button + " font-kumbh"}
        disabled={disabled}
      >
        {text}
      </button>
    );
  }
  return (
    <div style={style || {}} className={classes.Container}>
      {content}
    </div>
  );
};

export default Button;
