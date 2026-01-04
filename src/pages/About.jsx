import React from "react";

export default function About() {
  return (
    <div className="w-full bg-white">

      {/* INTRO */}
      <section className="max-w-7xl mx-auto px-6 bg-sky-100 py-20 text-center">
        <h1 className="text-4xl font-bold text-gray-900">
          Arivu Kalam: <span className="text-sky-700">Igniting Minds</span>
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Welcome to <strong>Arivu Kalam</strong>, a dynamic startup dedicated to
          fostering innovation and knowledge. Our mission is to empower
          individuals and organizations through cutting-edge solutions and
          transformative learning experiences.
        </p>
      </section>

      {/* VISION */}
      <section className="bg-sky-50">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              To build a future where every student becomes a creator, every
              idea has a purpose, and every project shapes the world.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              At Arivu Kalam, we envision a generation that learns not just to
              complete, but to lead, innovate, and inspire. We are here to
              transform academic minds into tomorrow’s changemakers.
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop"
            alt="Student innovation and future learning"
            className="rounded-xl shadow-md border"
          />
        </div>
      </section>

      {/* MISSION */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">

          <img
            src="https://penverproducts.com/wp-content/uploads/2017/12/vision2.jpg"
            alt="Engineering mentorship and project development"
            className="rounded-xl shadow-md border"
          />

          <div>
            <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our mission is to empower students by turning imagination into
              innovation through expert mentorship, technical excellence, and
              real-world application.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We strive to make every final year project a stepping stone to
              industry, entrepreneurship, or research. With Arivu Kalam,
              learning goes beyond classrooms — it becomes a movement of
              transformation.
            </p>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-center text-gray-900">
            Our Core Values
          </h2>

          <div className="mt-12 grid lg:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-white rounded-xl border">
              <h4 className="font-semibold text-gray-800">Creativity</h4>
              <p className="mt-2 text-sm text-gray-600">
                Encouraging original thinking and innovative problem solving.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl border">
              <h4 className="font-semibold text-gray-800">Collaboration</h4>
              <p className="mt-2 text-sm text-gray-600">
                Learning and growing together with mentors and peers.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl border">
              <h4 className="font-semibold text-gray-800">Excellence</h4>
              <p className="mt-2 text-sm text-gray-600">
                Commitment to quality, integrity, and continuous growth.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
