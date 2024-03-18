import Image from "next/image";

import { NotFound } from "@/assets";
import Link from "next/link";
import { MdOutlineArrowBack } from "react-icons/md";

const NotFoundPage = () => {
  return (
    <div className="mx-auto px-4 py-20">
      <div className="relative max-w-max mx-auto">
        <Image
          src={NotFound}
          alt=""
          width={500}
          height={400}
          className="z-10"
        />
      </div>
      <div className="flex flex-col gap-6 items-center justify-center max-w-[600px] mx-auto px-4 text-center">
        <h4 className="font-semibold tracking-widest text-xl mt-5 uppercase">
          Oops! It seems you&apos;ve missed your way.
        </h4>
        <p>
          This page seems to be a work of fiction. It might not exist... yet.
          But don&apos;t worry, I&apos;m constantly creating new things. Perhaps
          you&apos;ll find it in the future!
        </p>
        <Link
          href="/"
          className="bg-yellow-500 py-3 px-6 rounded-3xl font-semibold hover:bg-black hover:text-yellow-500 transition flex gap-2 items-center"
          style={{ boxShadow: "0px 4px 28.8px 0px rgba(255, 193, 7, 0.36)" }}
        >
          <MdOutlineArrowBack />
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
