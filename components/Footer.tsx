import Link from "next/link";
import GithubIcon from "./icons/github.svg";
import LinkedInIcon from "./icons/linkedin.svg";

const linkedInLink = "https://linkedin.com/in/ikembakwem";
const githubLink = "https://github.com/ikembakwem/knewsly";
const newsAPI = "https://newsapi.org";

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center text-center w-full py-8 text-offWhite bg-darkShade gap-2 mt-4 sm:flex-row sm:justify-between sm:pl-8 sm:pr-6 2xl:pl-36 2xl:pr-32">
      <p className="sm:order-2">
        Powered by{" "}
        <Link href={newsAPI} className="underline" target="_blank">
          News API
        </Link>
      </p>
      <div className="flex justify-center gap-4 p-2 sm:order-3 text-white">
        <Link href={linkedInLink} target="_blank">
          <LinkedInIcon className="h-8 w-8" />
        </Link>
        <Link href={githubLink} target="_blank">
          <GithubIcon className="h-8 w-8" />
        </Link>
      </div>
      <div>©{new Date().getFullYear()} ikembakwem</div>
    </footer>
  );
};
