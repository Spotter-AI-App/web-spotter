import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";

export default function Header() {
  return (
    <header className="bg-white dark:bg-black shadow-sm dark:border-b dark:border-gray-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a className="flex items-center" href="/">
          <span className="text-xl dark:text-gray-100">Spotter AI</span>
          <img src="/icon_transparent.png" alt="logo" className="w-12 h-12" />
        </a>
        <nav className="flex items-center">
          <ul className="flex space-x-2 mr-2">
            <li>
              <Link
                href="/contact"
                className="text-sm text-gray-800 dark:text-white px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/policy"
                className="text-sm text-gray-800 dark:text-white px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
