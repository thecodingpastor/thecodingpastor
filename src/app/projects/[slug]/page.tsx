import { Metadata } from "next";
// import { cache } from "react";
import Image from "next/image";

import { Projects } from "../_components/data";
import BreadCrumbs from "../_components/BreadCrumbs";
import { notFound } from "next/navigation";
import Button from "@/_components/form/Button";
import AnimatedInView from "@/_components/animations";

// This prebuild the slug data to enable immediate fetch
// You can splice the number of Ids/slugs returned to enhance performance
export async function generateStaticParams() {
  // const data = Projects.find((project) => project.slug === slug);

  return Projects.map((project) => project.slug);
}

// If you are using an ORM to call DB, this prevents duplication of calls, but using fetchAPI does not require this
// const getData = cache(
//   async ({ params: { slug } }: { params: { slug: string } }) => {
//     const data = Projects.find((project) => project.slug === slug);
//   }
// );

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const data = Projects.find((project) => project.slug === slug);

  if (data) {
    return {
      title: data?.name,
      description: data?.desc,
      // This is the difference between next13 and next 14, the openGraph part
      openGraph: {
        // had to do ?.src cos it's StaticImageData for now
        images: [{ url: data?.image?.src }],
      },
      // twitter: {
      //   card: "summary_large_image",
      //   title: data?.name,
      //   description: data?.desc,
      //   images: [data?.image?.src],
      //   creator: "@thecodingpastor - Michael Ayeni",
      // },
      alternates: {
        // no need for full path cos of metadataBase in layout
        // canonical: "https://michaelayeni.com/projects/" + data?.slug,
        canonical: "/projects/" + data?.slug,
      },
    };
  }
  return {
    title: "Not Found",
    description: "The project you are looking for was not found",
  };
}

const SingleProjectPage = ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const data = Projects.find((project) => project.slug === slug);

  if (!data) {
    return notFound();
  }
  return (
    <div className="py-28">
      <h2 className="px-4 text-[36px] sm:text-[48px] text-purple-light text-center font-normal my-10 head-animate">
        {data.name}
      </h2>
      <figure className="w-[100vw] h-80 relative mt-14 block border-t border-b border-slate-100">
        <Image src={data.image} alt={data.name} fill sizes="500vw" priority />
      </figure>
      <div className="max-w-5xl mx-auto px-4">
        <AnimatedInView y={20}>
          <BreadCrumbs name={data.name} />
          <p>{data.desc}</p>
        </AnimatedInView>
        <AnimatedInView y={20}>
          <h4 className="font-kumbh text-[36px] font-semibold my-10">
            Tech Stack
          </h4>
          <ul className="bg-[#5F3967] text-white py-10 px-8 flex gap-6 flex-wrap font-medium">
            {data.stack.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </AnimatedInView>
        <AnimatedInView y={20}>
          <h4 className="font-kumbh text-[36px] font-semibold my-10">
            More About the Project
          </h4>
          <div className="flex gap-4">
            <ul className="flex gap-6 flex-wrap">
              {data.more.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <Image
              src={data.logo}
              width={100}
              height={100}
              alt=""
              className="shrink-0 w-[200px] bg-slate-100 hidden md:block"
              sizes="100vw"
              style={{ objectFit: "contain" }}
            />
          </div>
        </AnimatedInView>
        <div className="flex flex-col gap-10 items-center md:flex-row md:gap-0 md:items-stretch justify-between mt-20">
          <Button text="Back" href="/projects" />
          {data.github && (
            <Button target="__blank" text="Github Repo" href={data.github} />
          )}
          <Button text="View Live Site" href={data.liveSite} target="__blank" />
        </div>
      </div>
    </div>
  );
};

export default SingleProjectPage;
