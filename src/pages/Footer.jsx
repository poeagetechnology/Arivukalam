import React from "react";
import Logo from "../Picks/logo.png";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 border-t">
      <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-4 md:grid-cols-2 gap-10">

        {/* Brand */}
        <div>
          <img
            src={Logo}
            alt="ArivuKalam"
            className="h-10 w-36 mb-4 object-cover"
          />
          <p className="text-sm leading-relaxed text-gray-600">
            Arivu Kalam is a future-focused learning and innovation platform
            empowering students through knowledge, mentorship, and real-world
            application.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-black font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/about" className="hover:text-black transition">About Us</a></li>
            <li><a href="/learn" className="hover:text-black transition">Learn</a></li>
            <li><a href="/services" className="hover:text-black transition">Services</a></li>
            <li><a href="/ourteam" className="hover:text-black transition">Our Team</a></li>
          </ul>
        </div>

        {/* Focus Areas */}
        <div>
          <h4 className="text-black font-semibold mb-4">Focus Areas</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>Final Year Projects</li>
            <li>Mechanical & EV Training</li>
            <li>Skill Development</li>
            <li>Corporate Learning</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-black font-semibold mb-4">Contact</h4>
          <p className="text-sm text-gray-700">
            📍 India <br />
            📧 info@arivukalam.com <br />
            📞 +91 XXXXXXXXXX
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
          <p>
            © {new Date().getFullYear()} Arivu Kalam. All rights reserved.
          </p>

          <p className="mt-2 md:mt-0 text-xs text-gray-500">
            Crafted by{" "}
            <span className="font-semibold text-gray-700">
              Poeage Technology Private Limited
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
