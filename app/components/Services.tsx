"use client";

import { Parallax } from "react-parallax";
import {
  CarTaxiFront,
  Sparkles,
  Wifi,
  WashingMachine,
  Coffee,
  Waves,
} from "lucide-react";

const services = [
  {
    title: "Airport Pick-up Service",
    desc: "Lorem ipsum proin gravida velit auctor sde re sit amet space.",
    Icon: CarTaxiFront,
  },
  {
    title: "Housekeeper Services",
    desc: "Lorem ipsum proin gravida velit auctor sde re sit amet space.",
    Icon: Sparkles,
  },
  {
    title: "Wifi & Internet",
    desc: "Lorem ipsum proin gravida velit auctor sde re sit amet space.",
    Icon: Wifi,
  },
  {
    title: "Laundry Services",
    desc: "Lorem ipsum proin gravida velit auctor sde re sit amet space.",
    Icon: WashingMachine,
  },
  {
    title: "Breakfast in Bed",
    desc: "Lorem ipsum proin gravida velit auctor sde re sit amet space.",
    Icon: Coffee,
  },
  {
    title: "Swimming Pool",
    desc: "Lorem ipsum proin gravida velit auctor sde re sit amet space.",
    Icon: Waves,
  },
];

const TwoColumnSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-white py-20">
      <div className="container mx-auto px-6 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Parallax Image */}
          <div className="order-2 lg:order-1 p-0 ">
            <Parallax
              bgImage="/galle.jpg"
              bgImageAlt="Restaurant interior"
              strength={75}
              className="h-[400px] sm:h-[600px] lg:h-[90dvh] 2xl:h-[700px] w-auto overflow-hidden"
            >
              <div className="h-full flex items-center justify-center" />
            </Parallax>
          </div>

          {/* Right Column - Text Content */}
          <div className="order-1 lg:order-2 space-y-10 py-8 lg:pt-12">
            {/* Small Uppercase Heading */}
            <h3 className="text-sm font-semibold tracking-widest uppercase text-gray-600 text-center lg:text-left">
              Discover the services we offered
            </h3>

            {/* Main Heading */}
            <h2 className="text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl font-marcellus text-gray-900 text-center lg:text-left">
              Cozy and Comfortable Stay
            </h2>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
              {services.map(({ title, desc, Icon }) => (
                <div key={title} className="flex gap-4">
                  <div className="shrink-0 pt-1">
                   <Icon className="h-6 w-6 text-[#b7925a]" />
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-marcellus text-xl text-gray-900">
                      {title}
                    </h4>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

         
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwoColumnSection;
