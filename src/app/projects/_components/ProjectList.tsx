import { Projects } from "./data";
import Image from "next/image";

import classes from "./ProjectList.module.scss";
import Link from "next/link";

const ProjectList = () => {
  return (
    <ul className={classes.Container}>
      {Projects.map((project) => (
        <li key={project.id} className="mb-10 md:mb-0">
          <Link href={"/projects/" + project.slug}>
            <Image
              src={project.image}
              alt={project.name}
              width={400}
              height={400}
              sizes="100vw"
              style={{
                width: "100%",
                height: "150px",
              }}
            />
            <div className="px-5 pt-3 pb-6">
              <div className="flex gap-3 items-center">
                <figure className="w-14 h-14 relative rounded-full shrink-0">
                  <Image
                    src={project.logo}
                    alt=""
                    fill
                    sizes="100vw"
                    style={{
                      borderRadius: "50%",
                      objectFit: "contain",
                      padding: "2px",
                    }}
                  />
                </figure>
                <h4 className="font-kumbh font-semibold text-[18px] leading-5">
                  {project.name}
                </h4>
              </div>
              <p className="font-kumbh mt-2 leading-5 font-extralight text-justify">
                {project.desc}
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ProjectList;
