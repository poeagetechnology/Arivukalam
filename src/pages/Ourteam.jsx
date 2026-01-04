import React from "react";
import { FaLinkedinIn, FaGithub, FaXTwitter } from "react-icons/fa6";
import CEO from "../Picks/ceo.jpeg";
import Director from "../Picks/gokul1.jpg";
import Manager from "../Picks/survesh.jpeg";

export default function Ourteam() {
  const team = [
    {
      name: "Tharaneeshwaran A",
      role: "Founder & CEO",
      image: CEO,
      linkedin: "#",
      github: "#",
      twitter: "#",
      bio: "Founder of ArivuKalam, focused on innovation-driven education, sustainable technology, and real-world impact.",
      quote: "Innovation begins when curiosity meets purpose.",
      focus: ["Vision & Strategy", "Innovation Leadership", "Startup & R&D"],
    },
    {
      name: "Gokul Anand S",
      role: "Director – EV Innovation",
      image: Director,
      linkedin: "#",
      github: "#",
      twitter: "#",
      bio: "Technology leader specializing in system design, automation, and scalable engineering solutions.",
      quote: "Technology should solve real problems.",
      focus: ["Product Architecture", "Emerging Tech", "System Design"],
    },
    {
      name: "Surveshwaran M",
      role: "Operations & Project Manager",
      image: Manager,
      linkedin: "#",
      github: "#",
      twitter: "#",
      bio: "Operations expert ensuring precision execution, delivery excellence, and team coordination.",
      quote: "Execution transforms ideas into reality.",
      focus: ["Project Management", "Operations", "Team Leadership"],
    },
  ];

  return (
    <div className="w-full bg-white">

      {/* HERO */}
      <section className="relative bg-sky-100">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <span className="inline-block mb-3 text-sky-700 font-semibold tracking-wide uppercase">
            ArivuKalam Leadership
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Minds Behind the Mission
          </h1>

          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Visionaries and operators shaping innovation, sustainability,
            and real-world impact at ArivuKalam.
          </p>
        </div>
      </section>

      {/* TEAM */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-3 gap-12">
        {team.map((member, index) => (
          <div
            key={index}
            className="relative group bg-white border rounded-2xl p-8
                       shadow-sm hover:shadow-xl transition-all duration-300"
          >
            {/* subtle brand glow */}
            <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100
                            blur-2xl bg-gradient-to-br from-sky-200/40 to-indigo-200/40
                            rounded-2xl transition" />

            {/* IMAGE */}
            <div className="relative flex justify-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-40 h-40 object-cover rounded-full border-4 border-white shadow-md"
              />

              {/* hover bio */}
              <div
                className="absolute inset-0 flex items-center justify-center
                           bg-white/95 rounded-2xl opacity-0 group-hover:opacity-100
                           transition duration-300 p-5 text-center"
              >
                <p className="text-sm text-gray-700 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>

            {/* INFO */}
            <div className="text-center mt-7">
              <h3 className="text-xl font-semibold text-gray-900">
                {member.name}
              </h3>

              <p className="text-sky-700 font-medium mt-1">
                {member.role}
              </p>

              {/* social */}
              <div className="mt-4 flex justify-center gap-3">
                {[member.linkedin, member.github, member.twitter].map(
                  (link, i) => (
                    <a
                      key={i}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 flex items-center justify-center rounded-full
                                 border text-gray-600 hover:bg-sky-700 hover:text-white
                                 transition"
                    >
                      {i === 0 && <FaLinkedinIn />}
                      {i === 1 && <FaGithub />}
                      {i === 2 && <FaXTwitter />}
                    </a>
                  )
                )}
              </div>

              <p className="mt-4 text-sm text-gray-600 italic">
                “{member.quote}”
              </p>
            </div>

            {/* divider */}
            <div className="my-6 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

            {/* FOCUS */}
            <div>
              <h4 className="text-sm font-semibold text-gray-800 mb-2">
                Focus Areas
              </h4>
              <ul className="text-sm text-gray-600 space-y-1">
                {member.focus.map((item, i) => (
                  <li key={i} className="flex gap-2 items-start">
                    <span className="mt-1 w-1.5 h-1.5 bg-sky-600 rounded-full" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        ))}
      </section>
    </div>
  );
}
