import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

interface SunMoonButtonProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export default function SunMoonButton({
  isDarkMode,
  toggleDarkMode,
}: SunMoonButtonProps) {
  return (
    <button
      onClick={toggleDarkMode}
      className="border-2 border-accent bg-background rounded-md p-1"
    >
      {isDarkMode ? (
        <MoonIcon className="w-6 h-6 text-text stroke-text" />
      ) : (
        <SunIcon className="w-6 h-6 text-text stroke-text" />
      )}
    </button>
  );
}
