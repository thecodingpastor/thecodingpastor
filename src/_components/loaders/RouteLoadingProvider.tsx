"use client";

import RouteLoading from "./RouteLoading";
import useBoundStore from "@/app/store";

const RouteLoadingProvider = ({ children }: { children: React.ReactNode }) => {
  const routeLoading = useBoundStore((state) => state.routeLoading);
  return (
    <>
      {routeLoading && <RouteLoading />}
      {children}
    </>
  );
};

export default RouteLoadingProvider;
