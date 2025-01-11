import { StaticImageData } from "next/image";
import SimplySteeped_Logo from "../project-assets/simply-steeped-logo.png";

export interface ProjectInfo {
  tagline: string;
  description: string;
  projectUrl: string;
  image: StaticImageData;
  imageAlt: string;
}

export const extractDomainName = (projectUrl: string) => {
  const url = new URL(projectUrl);
  return url.hostname;
};

export const SimplySteeped: ProjectInfo = {
  tagline: "A tea blog all about tea",
  description:
    "This blog is dedicated to all things tea, including brewing techniques, guides, innovations, trends, and more. Whether you're a seasoned tea connoisseur or just starting your tea journey, this blog aims to provide valuable insights, tips, and engaging content for all tea lovers.",
  projectUrl: "https://simplysteeped.com",
  image: SimplySteeped_Logo,
  imageAlt: "SimplySteeped - Tea Blog all about tea",
};

//create a function that will extract the domain name from the projectUrl

export const projectMap = [SimplySteeped];
