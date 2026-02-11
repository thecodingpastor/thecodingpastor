import Image from "next/image";

import { BG_Home } from "@/assets";
import Button from "@/_components/form/Button";

import classes from "./Home.module.scss";
import Typewriter from "@/_components/typewriter";

export default function Home() {
  let background: React.ReactNode;

  if (typeof window !== "undefined" && window.navigator.platform === "iPhone") {
    background = (
      <Image
        alt=""
        src={BG_Home}
        width={1000}
        height={1000}
        sizes="500vw"
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: "-1",
        }}
      />
    );
  } else {
    background = (
      <video
        className=""
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: "-1",
        }}
      >
        {/* <source
          src="https://utfs.io/f/92977a7b-c4be-4a5d-b5c8-2f95ac424805-z2yfg9.mp4"
          type="video/mp4"
        /> */}
        <source src="back_vid.mp4" type="video/mp4" />
      </video>
    );
  }

  return (
    <div className={classes.Container}>
      <div className="absolute top-1/2 sm:left-1/2 sm:-translate-x-1/2 -translate-y-1/2 ">
        <h2 className="font-medium text-[50px] sm:text-[64px] md:text-[80px]  text-center head-animate">
          Hi there!
        </h2>

        <div
          style={{
            border: "1px solid rgba(255, 255, 255, 0.20)",
            background: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(11px)",
          }}
          className={
            "w-[100vw] sm:w-auto sm:min-w-[500px] rounded-[30px] px-[20px] py-[30px] text-center " +
            classes.Inner
          }
        >
          <div className="relative py-6">
            <Typewriter
              text="I’m Mike, a passionate Full Stack Web Developer based in Lagos,
              Nigeria, with a flair for creating seamless user experiences and
              robust backend solutions. I specialize in bringing bold ideas to
              life in the digital world."
              as="p"
              className="font-normal"
            />
            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
              <Button href="/about" text="Learn More" />
            </div>
          </div>
        </div>
      </div>
      {background}
    </div>
  );
}
