import { ThemeToggle } from "@/components/Theme/ThemeToggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen text-text bg-background">
        <header className="w-full flex justify-end p-4 border-b border-accent bg-background">
          <ThemeToggle />
        </header>

        <main className="flex flex-col gap-8 items-center sm:items-start p-8">
          <div className="p-8 rounded-lg border border-accent">
            <h1 className="text-4xl font-montserrat font-bold mb-4">
              Digital Brew LLC
            </h1>
            <p className="font-open-sans">
              Building amazing digital experiences
            </p>
          </div>
        </main>

        <footer className="w-full border-t border-accent p-6 bg-background">
          <div className="flex gap-6 flex-wrap items-center justify-center">
            <a
              className="flex items-center gap-2 hover:text-accent transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              href="#"
            >
              Donate 🍵
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
