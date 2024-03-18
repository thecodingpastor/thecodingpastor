import classes from "./template.module.scss";

const Template = ({ children }: { children: React.ReactNode }) => {
  return <div className={classes.Container}>{children}</div>;
};

export default Template;
