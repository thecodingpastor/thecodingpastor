"use client";

import { useState } from "react";
import navData from "./navData";
import classes from "./SideNav.module.scss";
// import HamburgerContainer from "./HamburgerContainer";
import { usePathname } from "next/navigation";
import { Link } from "@/_components/Link";

const SideNav = () => {
  const [Open, setOpen] = useState(false);

  const pathname = usePathname();
  const isDark = pathname === "/";

  return (
    <>
      <div className={classes.Container}>
        <div
          className={`${classes.Hamburger} ${Open ? classes.Open : ""}`}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className={isDark ? classes.isDark : ""}></span>
          <span className={isDark ? classes.isDark : ""}></span>
          <span className={isDark ? classes.isDark : ""}></span>
        </div>
        {/* <HamburgerContainer /> */}

        <ul
          className={`${Open ? classes.Open : ""} ${
            classes.NavItems
          } font-kumbh`}
        >
          {navData.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={classes.Links}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </ul>
      </div>

      {Open && (
        <div
          className={classes.Backdrop}
          onClick={() => {
            setOpen(false);
          }}
        ></div>
      )}
    </>
  );
};

export default SideNav;
