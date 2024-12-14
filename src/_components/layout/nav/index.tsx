"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import SideNav from "./SideNav";
import { usePathname } from "next/navigation";
import navData from "./navData";

import { Logo_Dark, Logo_Light } from "@/assets";

import classes from "./AppHeader.module.scss";
import AnimatedInView from "@/_components/animations";
import { Link } from "@/_components/Link";

const AppHeader = () => {
  const [ActiveLink, setActiveLink] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  const isDark = pathname === "/";

  return (
    <nav className={`${classes.Container} ${isDark ? classes.isDark : ""}`}>
      <Link href="/">
        <Image
          src={isDark ? Logo_Dark : Logo_Light}
          alt="Logo"
          width={1000}
          height={500}
          sizes="500vw"
          priority
          style={{ height: "20px" }}
        />
      </Link>
      <ul
        className={
          classes.NavItems + " flex gap-6 items-center font-medium font-kumbh"
        }
      >
        {navData.map((link, index) => (
          <AnimatedInView opacity={0} delay={index * 0.2} key={link.id}>
            <Link
              href={link.href}
              className={ActiveLink.includes(link.href) ? classes.Active : ""}
              onClick={() => setActiveLink(link.href)}
            >
              {link.label}
            </Link>
          </AnimatedInView>
        ))}
      </ul>
      <SideNav />
    </nav>
  );
};

export default AppHeader;
