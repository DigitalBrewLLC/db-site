import { DigitalBrewLinks } from "@/common/types";
import Divider from "./Divider";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full p-2 bg-background">
      <Divider />
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-10 sm:py-14 lg:px-8">
        <nav
          aria-label="Footer"
          className="mb-10 flex flex-wrap justify-center gap-x-12 gap-y-3 text-md/6"
        >
          {DigitalBrewLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <p
          className="mt-2 text-center text-lg/6"
          aria-label={`Copyright ${currentYear} Digital Brew LLC. All rights reserved.`}
          aria-hidden="true"
        >
          &copy; {currentYear} Digital Brew LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
