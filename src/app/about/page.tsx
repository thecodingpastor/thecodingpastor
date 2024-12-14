import { LessThan, Mike } from "@/assets";
import Button from "@/_components/form/Button";
import Image from "next/image";
import { Metadata } from "next";
import AnimatedInView from "@/_components/animations";

const journey = [
  {
    header: "Professional Journey",
    items: [
      "My foray into the world of technology began six years ago. Self-taught and driven by an insatiable curiosity about the intricacies of computer applications, I embarked on a journey that started with Vanilla PHP. This 18-month immersion laid the groundwork for my transition into the expansive universe of JavaScript.",
      "Today, I am proficient in a suite of cutting-edge technologies, including NodeJS, Express JS, NextJS, TypeScript, TailwindCSS, Zustand, Redux Toolkit, React Query, ReactJS, MongoDB and MySQL. My expertise extends to front-end aesthetics and back-end functionality, ensuring a seamless user experience. Committed to staying at the forefront of technology, I am currently exploring AWS, Docker, Kubernetes, and React Native.",
    ],
  },
  {
    header: "Current Endeavours",
    items: [
      "As a freelance developer, my goal is to contribute to transformative projects within a leading tech organization. I am keen on roles that challenge me and allow me to leverage my full stack development skills to create impactful solutions.",
      "As of March 2024, I work in a team of 5 engineers on a part-time basis to build a cutting-edge start-up.",
    ],
  },
  {
    header: "Community Engagement",
    items: [
      "I believe in sharing knowledge and empowering others. To this end, I am active on social media, particularly on Twitter (@thecodingpastor), where I engage with the tech community. My upcoming YouTube channel aims to mentor aspiring developers, guiding them through the complexities of web development.",
    ],
  },
];

export const metadata: Metadata = {
  title: "About",
};
const AboutPage = () => {
  return (
    <div className="pt-20 relative">
      <div className="flex pt-10 flex-col md:flex-row">
        <div className="sm:flex-[5] lg:flex-[4]">
          <div className="max-w-[550px] md:max-w-[400px] mx-auto flex flex-col gap-4 mb-96 sm:mb-40 lg:mb-0">
            <h2 className="text-5xl lg:text-[64px] text-purple-light font-normal px-4 ">
              Meet Mike!
            </h2>
            <AnimatedInView x={-50} className="px-4">
              I am Michael Ayeni, <br /> a dedicated full stack web developer
              from Lagos Nigeria, with a profound commitment to crafting
              exceptional digital experiences. My professional ethos is deeply
              rooted in both my faith and my love for innovative technology.
            </AnimatedInView>
            <div className="mt-12 px-4 z-20">
              <Button text="See My Works" href="/projects" />
            </div>
            <AnimatedInView
              scale={0.8}
              repeat
              threshold={0.45}
              className="absolute mt-[400px] max-w-full w-[100vw] right-0 md:-ml-10 xl:ml-0 h-[600px] py-20 md:w-[600px] md:h-[600px] lg:w-[700px] lg:h-[670px] md:-left-16 md:-bottom-[60px] md:z-10"
            >
              <Image
                src={Mike}
                alt="Michael Ayeni"
                fill
                priority
                sizes="200vw"
              />
            </AnimatedInView>
          </div>
        </div>
        <section className="flex-[6] sm:mt-[420px] rounded-tl-[42px] md:rounded-none bg-purple-dark mt-64 pb-[250px] md:pb-40 text-white md:-mt-32 -mb-[120px] md:-mb-[60px] md:pt-28 px-6  leading-6 relative overflow-x-hidden">
          <div className="max-w-[600px] mx-auto z-10 text-center md:text-left pt-10 md:pt-0">
            {journey.map((j, i) => (
              <AnimatedInView delay={i * 0.2} y={20} opacity={0.5} key={i}>
                <h4 className="font-kumbh font-normal mb-6">{j.header}</h4>
                {j.items.map((inner, index) => (
                  <p key={index} className="mb-4 last-of-type:mb-8">
                    {inner}
                  </p>
                ))}
              </AnimatedInView>
            ))}
          </div>
          <figure className="absolute w-[150px] h-[200px] -right-2 bottom-20">
            <Image src={LessThan} alt="" fill />
          </figure>
          <div className="flex justify-center mt-20">
            <Button href="#" text="View My Resume" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
