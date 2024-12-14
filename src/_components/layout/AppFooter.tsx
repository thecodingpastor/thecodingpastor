"use client";

import { usePathname } from "next/navigation";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

import classes from "./AppFooter.module.scss";
import { Link } from "../Link";

const socials = [
  {
    id: "1",
    icon: <FaGithub className="text-2xl" />,
    link: "https://github.com/thecodingpastor",
  },
  {
    id: "2",
    icon: <FaLinkedin className="text-2xl" />,
    link: "https://linkedin.com/in/michael-ayeni",
  },
  {
    id: "3",
    icon: <FaXTwitter className="text-2xl" />,
    link: "https://twitter.com/thecodingpastor",
  },
  {
    id: "4",
    icon: <SiGmail className="text-2xl" />,
    link: "mailto:thecodingpastor@gmail.com",
  },
];
const AppFooter = () => {
  const pathname = usePathname();

  const isDark = ["/", "/about"].includes(pathname);
  const textColor = isDark ? "white" : "#422848";

  return (
    <footer className={classes.Container}>
      <div
        className="flex flex-col justify-between items-center md:items-stretch md:flex-row py-4 md:py-0 md:px-16"
        style={{
          color: textColor,
          justifyContent: "space-between", //justify-between in class not working
        }}
      >
        <div className={classes.Contact}>
          Contact me on:{" "}
          {socials.map((item) => (
            <Link key={item.id} href={item.link} target="_blank">
              {item.icon}
            </Link>
          ))}
        </div>
        <p>
          TheCodingPastor © {new Date().getFullYear()}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default AppFooter;
