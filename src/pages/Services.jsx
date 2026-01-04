import React from "react";
import {
  FaLeaf,
  FaSeedling,
  FaCarBattery,
  FaRecycle,
  FaRobot,
  FaShieldAlt,
  FaBolt,
  FaCity,
  FaLightbulb,
  FaPlane,      
} from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: FaLeaf,
      title: "Eco & Environment",
      items: [
        "Zero Waste Solutions",
        "CO₂ Emission Control",
        "E-waste Management",
        "Grass Cutting & Lake Cutters",
        "Surveillance Rentable",
        "Banana Plant Wind Protection",
        "QR Scanning in Products",
      ],
    },
    {
      icon: FaSeedling,
      title: "Agri-Tech Solutions",
      items: [
        "Automatic Soil Testing & Irrigation",
        "Smart Farming Management",
        "Plant Disease Detection",
        "Coconut Waste to Straw",
      ],
    },
    {
      icon: FaCarBattery,
      title: "EV & Mobility",
      items: [
        "Wireless EV Charging",
        "Bus Tap and Pay System",
        "Hydrogen Vehicle (IIT PALS)",
        "Ergonomic Design in EV",
        "On-Hill Braking Support",
        "Hydrogen Recycling Station",
      ],
    },
    {
      icon: FaRecycle,
      title: "Waste to Energy",
      items: [
        "Food Collection & Donation",
        "Thermal Power Plant Heat Recovery",
        "Plastic to Building Bricks",
        "Recycling Hydro Power Plant",
      ],
    },
    {
      icon: FaRobot,
      title: "Smart Systems & Tech",
      items: [
        "Advanced Feedback System",
        "Street Light Automation",
        "Coolant Counting Method",
        "Engine Heat Power Recovery",
      ],
    },
    {
      icon: FaShieldAlt,
      title: "Safety & Surveillance",
      items: [
        "Woman Safety Kit with Camera",
        "Smart Copy Alert System",
        "Oil Skimmer Technology",
        "Innovation Idea Hub",
        "Surveillance Rentable Units",
      ],
    },
    {
      icon: FaBolt,
      title: "Power Systems",
      items: [
        "Hydrogen Recycling Station",
        "Thermal Waste Recovery",
        "Recycling Hydro Power Plant",
        "Coolant-Based Recovery",
      ],
    },
    {
      icon: FaCity,
      title: "Public Infrastructure",
      items: [
        "Smart Toilet Systems",
        "Streetlight Automation",
        "Battery Thermal Management",
        "Plastic Waste Interlock Bricks",
      ],
    },
    {
      icon: FaLightbulb,
      title: "Innovation & R&D",
      items: [
        "Innovation Idea Hub",
        "Learn with Purpose",
        "Student Project Incubator",
        "Project Portal Platform",
      ],
    },
    {
      icon: FaPlane,
      title: "Aero & Drone Tech",
      items: [
        "Solar Drone Surveillance",
        "Agricultural Drone Solutions",
      ],
    },
  ];

  return (
    <div className="w-full bg-white">

      {/* HERO */}
      <section className="bg-sky-100">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-900">Our Services</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of innovative solutions designed
            to transform industries and create a sustainable future.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="relative bg-white border border-gray-200 rounded-xl p-6
                           hover:shadow-xl transition duration-300"
              >
                {/* Accent bar */}
                <div className="absolute left-0 top-0 h-full w-1 bg-sky-600 rounded-l-xl" />

                <div className="flex items-center gap-4 mb-4">
                  <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-sky-100 text-sky-700 text-xl">
                    <Icon />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {service.title}
                  </h3>
                </div>

                <ul className="space-y-2 text-sm text-gray-600">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-1 w-1.5 h-1.5 bg-sky-600 rounded-full" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center text-white">
          <h2 className="text-3xl font-bold">
            Let’s Build Sustainable & Smart Solutions Together
          </h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Partner with Arivu Kalam to innovate, implement, and impact
            industries through technology-driven solutions.
          </p>

          <button className="mt-8 px-8 py-3 bg-white text-slate-900 rounded-md font-semibold hover:bg-gray-200 transition">
            Contact Us
          </button>
        </div>
      </section>

    </div>
  );
}
