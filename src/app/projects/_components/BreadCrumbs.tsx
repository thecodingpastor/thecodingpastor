import { Link } from "@/_components/Link";

const BreadCrumbs = ({ name }: { name: string }) => {
  return (
    <div className="flex flex-wrap gap-3 items-center text-lg text-purple-light mt-10 font-semibold mb-10">
      <Link
        href="/"
        className="border-b-2 hover:border-b-purple-light border-b-transparent transition duration-300 py-1 inline-block"
      >
        Home
      </Link>
      <span>{">"}</span>
      <Link
        href="/projects"
        className="border-b-2 hover:border-b-purple-light border-b-transparent transition duration-300 py-1 inline-block"
      >
        Projects
      </Link>
      <span>{">"}</span>
      <div className="border-b-2  border-b-purple-light py-1 inline-block">
        {name}
      </div>
    </div>
  );
};

export default BreadCrumbs;
