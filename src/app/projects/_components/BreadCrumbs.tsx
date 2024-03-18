"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const BreadCrumbs = ({ name }: { name: string }) => {
  // const pathname = usePathname();
  // const [ActiveLink, setActiveLink] = useState("");

  // useEffect(() => {
  //   if (pathname.includes("mentorship"))
  //     setActiveLink("Mentorship for Teachers");
  //   else if (pathname.includes("training"))
  //     setActiveLink("Training and Consultation");
  //   else setActiveLink("Continuous Professional Development");
  // }, [pathname]);

  return (
    <div className="flex flex-wrap gap-3 items-center text-lg text-purple-light h-12 mt-10 ml-4 md:ml-20 font-semibold mb-10">
      <Link
        href="/"
        className="border-b-2 hover:border-b-purple-light border-b-transparent transition duration-300 py-1 inline-block"
      >
        Home
      </Link>
      <span>{">"}</span>
      <Link
        href="/projects"
        className="border-b-2 hover:border-b-purple-light border-b-transparent transition duration-300 py-1 inline-block"
      >
        Projects
      </Link>
      <span>{">"}</span>
      <div className="border-b-2  border-b-purple-light py-1 inline-block">
        {name}
      </div>
    </div>
  );
};

export default BreadCrumbs;
