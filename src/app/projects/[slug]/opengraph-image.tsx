import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "About Acme";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  // Font
  // const interSemiBold = fetch(
  //   new URL("./Inter-SemiBold.ttf", import.meta.url)
  // ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        tw="relative flex w-full h-full item-center justify-center"
        // style={{
        //   fontSize: 128,
        //   background: "white",
        //   width: "100%",
        //   height: "100%",
        //   display: "flex",
        //   alignItems: "center",
        //   justifyContent: "center",
        // }}
      >
        <div
          // tw="absolute flex inset-0"
          style={{ position: "absolute", display: "flex", inset: "0px" }}
        >
          <img
            // tw="flex flex-1"
            style={{ display: "flex", flex: "1" }}
            src="/opengraph-image&w=1200&h=630&auto=format&q=75"
            alt="The Coding Pastor"
          />
          <div
            // tw="absolute flex inset-0 bg-black bg-opacity-50 z-10"
            style={{
              position: "absolute",
              display: "flex",
              inset: "0px",
              background: "rgba(0,0,0,0.5)",
              zIndex: "20",
            }}
          />
        </div>
        <div
          // tw="flex flex-col text-neutral-50"
          style={{ display: "flex", flexDirection: "column", color: "gray" }}
        >
          <div
            // tw="text-7xl font-bold"
            style={{ fontSize: "60px", fontWeight: "bold" }}
          >
            Michael Ayeni - The Coding Pastor
          </div>
          <div
            // tw="flex mt-6 flex-wrap space-x-10 items-center text-4xl text-neutral-50"
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              fontSize: "40px",
              color: "gray",
            }}
          >
            The official website of Michael Ayeni, a full stack developer. Works
            with Node, React, Next.js, React Native, Typescript, MongoDB, MySQL.
            He is also know as the coding pastor (thecodingpastor)
          </div>
        </div>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
      // fonts: [
      //   {
      //     name: "Inter",
      //     data: await interSemiBold,
      //     style: "normal",
      //     weight: 400,
      //   },
      // ],
    }
  );

  // return new ImageResponse(
  //   (
  //     // ImageResponse JSX element
  //     <div
  //       tw="relative flex w-full h-full item-center justify-center"
  //       // style={{
  //       //   fontSize: 128,
  //       //   background: "white",
  //       //   width: "100%",
  //       //   height: "100%",
  //       //   display: "flex",
  //       //   alignItems: "center",
  //       //   justifyContent: "center",
  //       // }}
  //     >
  //       <div tw="absolute flex inset-0">
  //         <img
  //           tw="flex flex-1"
  //           src="/opengraph-image&w=1200&h=630&auto=format&q=75"
  //           alt="The Coding Pastor"
  //         />
  //         <div tw="absolute flex inset-0 bg-black bg-opacity-50 z-10" />
  //       </div>
  //       <div tw="flex flex-col text-neutral-50">
  //         <div tw="text-7xl font-bold">Michael Ayeni - The Coding Pastor</div>
  //         <div tw="flex mt-6 flex-wrap space-x-10 items-center text-4xl text-neutral-50">
  //           The official website of Michael Ayeni, a full stack developer. Works
  //           with Node, React, Next.js, React Native, Typescript, MongoDB, MySQL.
  //           He is also know as the coding pastor (thecodingpastor)
  //         </div>
  //       </div>
  //     </div>
  //   ),
  //   // ImageResponse options
  //   {
  //     // For convenience, we can re-use the exported opengraph-image
  //     // size config to also set the ImageResponse's width and height.
  //     ...size,
  //     // fonts: [
  //     //   {
  //     //     name: "Inter",
  //     //     data: await interSemiBold,
  //     //     style: "normal",
  //     //     weight: 400,
  //     //   },
  //     // ],
  //   }
  // );

  // return new ImageResponse(
  //   (
  //     // ImageResponse JSX element
  //     <div
  //       style={{
  //         fontSize: 128,
  //         background: "white",
  //         width: "100%",
  //         height: "100%",
  //         display: "flex",
  //         alignItems: "center",
  //         justifyContent: "center",
  //       }}
  //     >
  //       The Coding Pastor
  //     </div>
  //   ),
  //   // ImageResponse options
  //   {
  //     // For convenience, we can re-use the exported opengraph-image
  //     // size config to also set the ImageResponse's width and height.
  //     ...size,
  //     // fonts: [
  //     //   {
  //     //     name: "Inter",
  //     //     data: await interSemiBold,
  //     //     style: "normal",
  //     //     weight: 400,
  //     //   },
  //     // ],
  //   }
  // );
}
