"use client";

import TeaCupIcon from "@/icons/TeaCupIcon";
import {
  EyeIcon,
  UserGroupIcon,
  GlobeAltIcon,
} from "@heroicons/react/20/solid";

const cards = [
  {
    name: "Web Design and Development",
    description:
      "Professional web design and development services to strengthen your brand identity and increase website traffic.",
    icon: GlobeAltIcon,
  },
  {
    name: "SEO Consulting",
    description:
      "Our SEO consulting services enhance your digital presence, focusing on technical and content SEO to drive more traffic to your website.",
    icon: EyeIcon,
  },
  {
    name: "Web Accessibility Consulting and Auditing",
    description:
      "Expert web accessibility consulting and auditing services to make your website inclusive for all users, including those with disabilities, while ensuring compliance with accessibility standards.",
    icon: UserGroupIcon,
  },
];

const HomeCTA = () => {
  return (
    <main className="relative isolate overflow-hidden bg-background py-24 my-2 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 ">
          <h2 className="text-5xl font-semibold tracking-tight sm:text-7xl flex items-center gap-x-8">
            Digital Brew <TeaCupIcon size={175} />
          </h2>
          <p className="mt-8 text-pretty text-lg font-medium sm:text-xl/8">
            Offering expert SEO consulting, web accessibility, and digital
            solutions to empower businesses with customized, results-driven
            strategies for success in the digital age.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {cards.map((card) => (
            <div
              key={card.name}
              className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset"
            >
              <card.icon aria-hidden="true" className="h-7 w-5 flex-none" />
              <div className="text-base/7">
                <h3 className="font-semibold" aria-label={card.name}>
                  {card.name}
                </h3>
                <p className="mt-2">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default HomeCTA;
