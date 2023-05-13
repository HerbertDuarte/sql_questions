import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="fixed z-10 top-0 w-full flex items-center justify-between sm:justify-around bg-blue-500 p-2 text-white/80">
      <span className="font-mono">SQL_Questions</span>
      <nav>
        <ul className="flex items-center justify-center gap-4">
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/createquestion'>Create</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}