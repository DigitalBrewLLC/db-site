import Divider from "./Divider";

const navigation = {
  links: [
    { name: "About", href: "#" },
    { name: "Projects", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Donate 🍵", href: "#" },
  ],
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full p-2 bg-background">
      <Divider />
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-10 sm:py-14 lg:px-8">
        <nav
          aria-label="Footer"
          className="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6"
        >
          {navigation.links.map((item) => (
            <a key={item.name} href={item.href} className="hover:text-accent">
              {item.name}
            </a>
          ))}
        </nav>
        <div className="mt-16 flex justify-center gap-x-10">
          {navigation.links.map((item) => (
            <a key={item.name} href={item.href} className="hover:text-accent">
              <span className="sr-only">{item.name}</span>
            </a>
          ))}
        </div>
        <p className="mt-2 text-center text-sm/6 ">
          &copy; {currentYear} Digital Brew LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
