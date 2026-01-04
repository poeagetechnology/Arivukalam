import React from "react";

export default function Learn() {
  return (
    <div className="w-full bg-white">

      {/* HERO */}
      <section className="bg-sky-100">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            Learn with ArivuKalam
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Learn beyond textbooks. Build skills, innovate with purpose,
            and gain real-world experience through guided learning.
          </p>
        </div>
      </section>

      {/* WHY LEARN */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-3 gap-10">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">
            Industry-Oriented Learning
          </h3>
          <p className="mt-3 text-gray-600">
            Our learning approach is aligned with industry needs, focusing on
            practical skills, tools, and technologies used in real projects.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-900">
            Project-Based Approach
          </h3>
          <p className="mt-3 text-gray-600">
            Learn by doing. Every concept is reinforced through hands-on
            projects, case studies, and innovation challenges.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-900">
            Expert Mentorship
          </h3>
          <p className="mt-3 text-gray-600">
            Get guided by experienced mentors who help you transform ideas
            into impactful solutions.
          </p>
        </div>
      </section>

      {/* LEARNING DOMAINS */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-center text-gray-900">
            Learning Domains
          </h2>

          <div className="mt-12 grid lg:grid-cols-4 md:grid-cols-2 gap-6">

            {[
              {
                title: "Mechanical & EV Engineering",
                desc: "Electric vehicles, thermal systems, powertrain design, and sustainable mobility.",
              },
              {
                title: "Agri-Tech & Sustainability",
                desc: "Smart farming, automation, waste management, and eco-friendly technologies.",
              },
              {
                title: "Innovation & Product Design",
                desc: "Design thinking, prototyping, problem solving, and real-world innovation.",
              },
              {
                title: "Smart Systems & Automation",
                desc: "IoT, automation, intelligent systems, and next-gen infrastructure.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border hover:shadow-md transition"
              >
                <h4 className="font-semibold text-gray-800">{item.title}</h4>
                <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center text-gray-900">
          How Learning Works
        </h2>

        <div className="mt-12 grid lg:grid-cols-4 gap-8 text-center">
          {[
            {
              step: "01",
              title: "Choose Your Domain",
              desc: "Select a learning path aligned with your interest and goals.",
            },
            {
              step: "02",
              title: "Learn the Fundamentals",
              desc: "Build strong basics with guided lessons and real examples.",
            },
            {
              step: "03",
              title: "Work on Projects",
              desc: "Apply knowledge through industry-relevant projects.",
            },
            {
              step: "04",
              title: "Showcase & Grow",
              desc: "Present your work, gain confidence, and move towards careers or startups.",
            },
          ].map((step, i) => (
            <div key={i}>
              <div className="text-4xl font-bold text-sky-700">
                {step.step}
              </div>
              <h4 className="mt-4 font-semibold text-gray-900">
                {step.title}
              </h4>
              <p className="mt-2 text-sm text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHO CAN LEARN */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Who Can Learn at ArivuKalam
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Our learning ecosystem is designed for anyone who wants to grow,
            innovate, and create impact.
          </p>

          <div className="mt-10 grid lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border">
              <h4 className="font-semibold text-gray-800">Students</h4>
              <p className="mt-2 text-sm text-gray-600">
                School, diploma, and engineering students looking for
                project-based learning.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border">
              <h4 className="font-semibold text-gray-800">Professionals</h4>
              <p className="mt-2 text-sm text-gray-600">
                Working professionals upgrading skills for industry relevance.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border">
              <h4 className="font-semibold text-gray-800">Innovators</h4>
              <p className="mt-2 text-sm text-gray-600">
                Entrepreneurs and creators building future-ready solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center text-white">
          <h2 className="text-3xl font-bold">
            Start Learning with Purpose
          </h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Join ArivuKalam and transform learning into innovation,
            skills into solutions, and ideas into impact.
          </p>

          <button className="mt-8 px-8 py-3 bg-white text-slate-900 rounded-md font-semibold hover:bg-gray-200 transition">
            Explore Learning Paths
          </button>
        </div>
      </section>

    </div>
  );
}
