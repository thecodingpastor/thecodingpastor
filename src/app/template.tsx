"use client";

import { usePathname } from "next/navigation";
import classes from "./template.module.scss";

const Template = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return (
    <div className={classes.Container} key={pathname}>
      {children}
    </div>
  );
};

export default Template;
