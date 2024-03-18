import { Metadata } from "next";
// import { cache } from "react";
import Image from "next/image";

import { Projects } from "../_components/data";
import BreadCrumbs from "../_components/BreadCrumbs";
import { notFound } from "next/navigation";
import Button from "@/_components/form/Button";

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
      openGraph: {
        // had to do ?.src cos it's StaticImageData for now
        images: [{ url: data?.image?.src }],
      },
    };
  }
  return {};
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
      <h2 className="px-4 text-[36px] sm:text-[48px] text-purple-light text-center font-normal my-10">
        {data.name}
      </h2>
      <figure className="w-[100vw] h-80 relative mt-14 block border-t border-b border-slate-100">
        <Image src={data.image} alt={data.name} fill sizes="500vw" priority />
      </figure>
      <div className="max-w-5xl mx-auto px-4">
        <BreadCrumbs name={data.name} />
        <p>{data.desc}</p>
        <h4 className="font-kumbh text-[36px] font-semibold my-10">
          Tech Stack
        </h4>

        <ul className="bg-[#5F3967] text-white py-10 px-8 flex gap-6 flex-wrap font-medium">
          {data.stack.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
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
        <div className="flex flex-col gap-10 items-center md:flex-row md:gap-0 md:items-stretch justify-between mt-20">
          <Button text="Back" href="/projects" />
          {data.github && (
            <Button target="_blank" text="Github Repo" href={data.github} />
          )}
          <Button text="View Live Site" href={data.liveSite} target="_blank" />
        </div>
      </div>
    </div>
  );
};

export default SingleProjectPage;
