import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="fixed z-10 top-0 w-full flex items-center justify-between sm:justify-around bg-blue-500 p-3 text-white text-lg">
      <span className="font-bold text-xl cursor-default">
        SQ<span className="font-normal">uestions</span>
      </span>
      <nav>
        <ul className="flex items-center justify-center gap-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/createquestion">Create</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
