import React from "react";
import BN from "../Picks/Gemini_Generated_Image_1u41o01u41o01u41.png";

export default function Home() {
  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <section className="bg-sky-100">
        <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Empowering Knowledge, <br />
              <span className="text-sky-700">Shaping the Future</span>
            </h1>

            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              ArivuKalam is a modern learning and EV development platform
              designed to build skills, confidence, and real-world expertise
              through structured knowledge and innovation.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="px-6 py-3 bg-slate-900 text-white rounded-md font-medium hover:bg-slate-800 transition">
                Get Started
              </button>
              <button className="px-6 py-3 border border-gray-300 rounded-md font-medium hover:bg-gray-100 transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden lg:flex justify-center">
            <img
              src={BN}
              alt="Mechanical Engineering Learning"
              className="w-full h-80 object-cover rounded-xl shadow-md border"
            />
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-3 gap-10">
          {[
            {
              title: "Structured Learning",
              desc: "Carefully designed programs that guide learners from basics to advanced mastery.",
            },
            {
              title: "Industry Relevant",
              desc: "Content aligned with real-world requirements, skills, and trends.",
            },
            {
              title: "Growth Focused",
              desc: "Designed to improve thinking, confidence, and long-term success.",
            },
          ].map((item, i) => (
            <div key={i}>
              <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-3 text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-center text-gray-900">
            What We Offer
          </h2>

          <div className="mt-12 grid lg:grid-cols-4 gap-6">
            {[
              "Learning Programs",
              "Skill Development",
              "Career Guidance",
              "Corporate Training",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border hover:shadow-md transition"
              >
                <h4 className="font-semibold text-gray-800">{item}</h4>
                <p className="mt-2 text-sm text-gray-600">
                  High-quality structured solutions tailored for growth and excellence.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LATEST HAPPENINGS */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-center text-gray-900">
            Latest Happenings
          </h2>

          <div className="mt-12 grid lg:grid-cols-2 gap-6">
            {[
              {
                title: "Grand Inauguration",
                date: "August 5, 2025",
                desc: "Join us for the momentous launch of Arivu Kalam and meet our expert mentors shaping tomorrow’s innovators.",
              },
              {
                title: "SAE Workshop",
                date: "August 9–10, 2025",
                desc: "Two-day intensive workshop on automotive engineering, design, simulation, and sustainable mobility.",
              },
              {
                title: "AutoCAD Webinar",
                date: "August 14–15, 2025",
                desc: "Comprehensive AutoCAD webinar covering basics to advanced professional drafting techniques.",
              },
              {
                title: "Group Meeting",
                date: "August 13, 2025",
                desc: "Community gathering to network, collaborate, and explore upcoming innovation initiatives.",
              },
            ].map((event, i) => (
              <div
                key={i}
                className="p-6 border rounded-xl hover:shadow-md transition"
              >
                <h4 className="font-semibold text-gray-900">{event.title}</h4>
                <p className="text-sm text-sky-700 mt-1">{event.date}</p>
                <p className="mt-2 text-sm text-gray-600">{event.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-3 gap-8 text-center">
          {[
            { value: "150%", label: "Growth Accelerated" },
            { value: "99%", label: "Client Satisfaction" },
            { value: "100+", label: "Innovation Driven" },
          ].map((stat, i) => (
            <div key={i}>
              <h3 className="text-4xl font-bold text-slate-900">{stat.value}</h3>
              <p className="mt-2 text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center text-white">
          <h2 className="text-3xl font-bold">
            Begin Your Journey with ArivuKalam
          </h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Join a platform built on clarity, quality, and purpose.
            Learn smarter. Grow stronger.
          </p>

          <button className="mt-8 px-8 py-3 bg-white text-slate-900 rounded-md font-semibold hover:bg-gray-200 transition">
            Get Started Today
          </button>
        </div>
      </section>

    </div>
  );
}
