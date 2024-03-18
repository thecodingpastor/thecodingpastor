"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import SideNav from "./SideNav";
import { usePathname } from "next/navigation";
import navData from "./navData";

import { Logo_Dark, Logo_Light } from "@/assets";

import classes from "./AppHeader.module.scss";

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
        {navData.map((link) => (
          <Link
            href={link.href}
            key={link.id}
            className={ActiveLink.includes(link.href) ? classes.Active : ""}
            onClick={() => setActiveLink(link.href)}
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <SideNav />
    </nav>
  );
};

export default AppHeader;
