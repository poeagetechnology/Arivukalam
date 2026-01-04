import React, { useState } from "react";
import Logo from "../Picks/logo.png";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur bg-white/80 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <img
            src={Logo}
            alt="ArivuKalam"
            className="h-10 w-auto object-contain"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10 text-sm font-semibold text-gray-700">
          {["About", "Learn", "Services", "Our Team"].map((item) => (
            <a
              key={item}
              href={`/${item.toLowerCase().replace(" ", "")}`}
              className="relative group"
            >
              <span className="transition group-hover:text-gray-900">
                {item}
              </span>
              {/* underline */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-sky-600 transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="/contact"
            className="px-5 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
          >
            Contact
          </a>
          <a
            href="/services"
            className="px-6 py-2 text-sm font-semibold text-white bg-black rounded-lg hover:bg-black/80 transition shadow-sm"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 rounded-lg border border-gray-300 text-xl text-gray-700"
          aria-label="Toggle Menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-[500px] border-t" : "max-h-0"
        } bg-white`}
      >
        <div className="px-6 py-6 space-y-4 text-sm font-medium text-gray-700">
          {["About", "Learn", "Services", "Our Team"].map((item) => (
            <a
              key={item}
              href={`/${item.toLowerCase().replace(" ", "")}`}
              className="block hover:text-sky-700 transition"
            >
              {item}
            </a>
          ))}

          <div className="pt-6 space-y-3">
            <a
              href="/contact"
              className="block w-full text-center py-2 border border-gray-300 rounded-lg"
            >
              Contact
            </a>
            <a
              href="/services"
              className="block w-full text-center py-2 bg-white text-black rounded-lg"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
