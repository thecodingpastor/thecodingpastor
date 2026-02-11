import { Metadata } from "next";
import ProjectList from "./_components/ProjectList";
import AnimatedInView from "@/_components/animations";

export const metadata: Metadata = {
  title: "My Projects",
  description:
    "Michael Ayeni's projects. This showcases the projects of the coding pastor (thecodingpastor)",
};

const ProjectsPage = () => {
  return (
    <div className="pt-28">
      <div className="max-w-[1100px] px-4 mx-auto">
        <h2 className="text-5xl lg:text-[64px] text-purple-light font-normal px-4 head-animate">
          The Works of &apos;The Coding Pastor&apos;
        </h2>
        <AnimatedInView opacity={0} y={20}>
          Explore my portfolio to see a blend of creativity and technical
          expertise, where each project is a story of challenges met and
          innovations realized. From intuitive user interfaces to efficient,
          scalable backend systems, my work embodies a commitment to excellence
          and a relentless pursuit of perfection.
        </AnimatedInView>
        <ProjectList />
      </div>
    </div>
  );
};

export default ProjectsPage;
