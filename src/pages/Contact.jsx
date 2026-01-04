import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="w-full bg-gradient-to-b from-sky-50 to-white py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sky-700 font-semibold tracking-wide uppercase">
            Contact ArivuKalam
          </span>

          <h1 className="mt-2 text-4xl md:text-5xl font-extrabold text-gray-900">
            Let’s Connect
          </h1>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Have a question, collaboration idea, or project in mind?  
            We’d love to hear from you.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* Left – Info */}
          <div className="space-y-8">
            <div className="flex gap-4 items-start">
              <span className="w-12 h-12 flex items-center justify-center rounded-xl bg-sky-100 text-sky-700">
                <FaEnvelope />
              </span>
              <div>
                <h3 className="font-semibold text-gray-900">Email</h3>
                <p className="text-gray-600">contact@arivukalam.in</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="w-12 h-12 flex items-center justify-center rounded-xl bg-sky-100 text-sky-700">
                <FaPhoneAlt />
              </span>
              <div>
                <h3 className="font-semibold text-gray-900">Phone</h3>
                <p className="text-gray-600">+91 9XXXXXXXXX</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="w-12 h-12 flex items-center justify-center rounded-xl bg-sky-100 text-sky-700">
                <FaMapMarkerAlt />
              </span>
              <div>
                <h3 className="font-semibold text-gray-900">Location</h3>
                <p className="text-gray-600">
                  Tamil Nadu, India
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-500 pt-4">
              ArivuKalam focuses on education, innovation, and real-world
              solutions through technology and research.
            </p>
          </div>

          {/* Right – Form */}
          <div className="bg-white border rounded-2xl p-8 shadow-sm">
            <form className="space-y-5">

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-200"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-200"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Tell us how we can help you..."
                  className="w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-200 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-sky-700 text-white font-semibold hover:bg-sky-800 transition"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
