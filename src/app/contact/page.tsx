import { Contact, MobileContact } from "@/assets";
import Image from "next/image";
import ContactForm from "./_components/ContactForm";

const ContactPage = () => {
  return (
    <div className="">
      <figure className="sm:hidden relative w-full h-[300px]">
        <Image src={MobileContact} alt="" fill />
      </figure>
      <figure className="hidden sm:block relative w-full h-[250px] sm:h-[350px] lg:h-[450px]">
        <Image src={Contact} alt="" fill />
      </figure>

      <div className="max-w-[500px] md:max-w-3xl mx-auto px-4 mt-20">
        <h2 className=" font-normal text-[64px] text-purple-light">
          Let&apos;s Connect
        </h2>
        <p className="mb-8 mt-16">
          My portfolio, a testament to my professional journey, is accessible on{" "}
          <a
            href="https://linkedin.com/in/michael-ayeni"
            target="_blank"
            className="text-purple-light"
          >
            LinkedIn
          </a>{" "}
          and{" "}
          <a
            href="https://github.com/thecodingpastor"
            target="_blank"
            className="text-purple-light"
          >
            GitHub
          </a>{" "}
          . For potential collaborations, inquiries, or insights into the
          evolving tech landscape, I welcome you to reach out at{" "}
          <a
            href="mailto:thecodingpastor@gmail.com"
            target="_blank"
            className="text-purple-light"
          >
            thecodingpastor@gmail.com
          </a>
        </p>
        <p>
          I look forward to the opportunity to bring innovation and expertise to
          your next project.
        </p>

        <div className="max-w-2xl md:max-w-3xl mx-auto my-20">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
