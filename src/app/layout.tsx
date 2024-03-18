import type { Metadata } from "next";
import { rozha, kumbh } from "./font";

import AppHeader from "@/_components/layout/nav";
import AppFooter from "@/_components/layout/AppFooter";

import "./globals.css";
import ToastContainer from "@/_components/Toast/ToastContainer";

export const metadata: Metadata = {
  title: {
    template: "%s - Michael-Ayeni",
    default: "Michael Ayeni",
  },
  description:
    "The official website of Michael Ayeni, a full stack developer. Works with Node, React, React Native, Typescript, MongoDB, MySQL.",
  openGraph: {
    images: "/opengraph-image.png",
  },
  metadataBase: new URL("https://michaelayeni.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${kumbh} ${rozha} flex flex-col min-h-[100vh] overflow-x-hidden `}
      >
        <AppHeader />
        <main className="grow">{children}</main>
        <AppFooter />
        <ToastContainer />

        <div id="modal"></div>
        <div id="backdrop"></div>
        <div id="Toast"></div>
      </body>
    </html>
  );
}
