import type { Metadata } from "next";
import { Montserrat, Open_Sans, Source_Code_Pro } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/Theme/ThemeProvider";
import Nav from "@/components/Layout/Nav";
import Footer from "@/components/Layout/Footer";

//headings
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

//body text
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

//accent text - code and links
const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-source-code-pro",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Digital Brew",
  description: "Digital Brew",
  icons: {
    icon: "/TeaCup.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${openSans.variable} ${sourceCodePro.variable}`}
      >
        <ThemeProvider>
          <Nav />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
