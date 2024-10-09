import Image from "next/image";

import Title from "@/components/ui/Title";
import { restaurantsData } from "@/data";
import React from "react";

const Restaurants = () => {
  return (
    <section id={restaurantsData.id} className="section font-extralight">
      <div className="container flex flex-col justify-center items-center">
        <Title title={restaurantsData.title} />

        <div className="space-y-5 md:space-y-4">
          <div className="flex flex-col md:flex-row items-center lg:flex-row lg:justify-between gap-8 lg:gap-20">
            <div className="w-full relative h-[220px] lg:h-[360px] overflow-hidden md:w-1/2 shadow-lg shadow-slate-600/50">
              <Image
                className="object-cover"
                fill
                src="/restaurants/restaurants-1.jpg"
                alt="Oesters op een schaal"
                sizes="600px"
                priority
              />
            </div>
            <p className="w-full md:w-1/2 font-extralight">
              {restaurantsData.description1.text}
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center lg:flex-row lg:justify-between gap-8 lg:gap-20">
            <p className="w-full md:w-1/2  font-extralight">
              {restaurantsData.description2.text}
            </p>
            <div className="w-full relative h-[220px] lg:h-[360px] overflow-hidden md:w-1/2 shadow-lg shadow-slate-600/50">
              <Image
                className="object-cover"
                fill
                src="/restaurants/restaurants-2.jpg"
                alt="Gebakken kaas"
                sizes="600px"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Restaurants;
