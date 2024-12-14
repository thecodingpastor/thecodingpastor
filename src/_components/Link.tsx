"use client";

import { useEffect, useTransition } from "react";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import useBoundStore from "@/app/store";

export function Link({
  href,
  children,
  replace,
  onClick,
  target,
  ...rest
}: Parameters<typeof NextLink>[0]) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const setRouteLoading = useBoundStore((state) => state.setRouteLoading);

  useEffect(() => {
    setRouteLoading(isPending);
  }, [isPending, setRouteLoading]);

  return (
    <>
      <NextLink
        href={href}
        target={target || "_self"}
        onClick={(e) => {
          e.preventDefault();
          if (onClick) {
            onClick(e);
          }
          startTransition(() => {
            const url = href.toString();
            if (replace) {
              router.replace(url);
            } else {
              router.push(url);
            }
          });
        }}
        {...rest}
      >
        {children}
      </NextLink>
    </>
  );
}
