import type { Metadata } from "next";
import { rozha, kumbh } from "./font";

import AppHeader from "@/_components/layout/nav";
import AppFooter from "@/_components/layout/AppFooter";

import "./globals.css";
import ToastContainer from "@/_components/Toast/ToastContainer";

export const metadata: Metadata = {
  // robots:  {
  //   index: false, // I dont want google to index (show) this page
  //   follow:true, // But I went web crawlers to crawl this page
  //  // this is mostly used for privacy policy pages
  // },
  // to check which pages have been indexed on google site:domainname (without https or www) e.g. site:michaelayeni.com
  title: {
    template: "%s - Michael Ayeni",
    default: "Michael Ayeni",
  },
  description:
    "The official website of Michael Ayeni, a full stack developer. Works with Node, React, React Native, Typescript, MongoDB, MySQL. He is also know as the coding pastor (thecodingpastor)",
  twitter: {
    card: "summary_large_image",
  },
  keywords: [
    "coding pastor",
    "the coding pastor",
    "codingpastor",
    "thecodingpasto",
    "Michael Ayeni",
    "Ayeni Michael",
  ],
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
        <div id="modal"></div>
        <div id="backdrop"></div>
        <ToastContainer />
      </body>
    </html>
  );
}
