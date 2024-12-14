"use client";

import { useEffect, useState } from "react";

// import style from "./RouteLoading.module.scss";

const RouteLoading = () => {
  const [Progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 5));
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // return (
  //   <div
  //     className="bg-red-300 border-4 border-green-600"
  //     style={{ backgroundColor: "red" }}
  //   >
  //     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus eos
  //     voluptas recusandae! Dolorum sequi quaerat ex nam, recusandae praesentium
  //     facere quia voluptatum dolore voluptas ipsa maiores laboriosam, velit
  //     molestias? Accusantium.
  //   </div>
  // );
  return (
    <div
      className="w-[100vw] fixed z-[50000000] h-[10px] top-0 left-0"
      style={{
        width: "100vw",
        position: "fixed",
        zIndex: "40000",
        height: "4px",
        left: "0",
        top: "0",
      }}
    >
      <div
        style={{
          width: `${Progress}%`,
          height: "100%",
          background: "#ffb801",
        }}
      />
    </div>
  );
};

export default RouteLoading;
