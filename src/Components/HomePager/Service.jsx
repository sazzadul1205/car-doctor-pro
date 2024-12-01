import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { getAllServices } from "@/Services/getServices";

const Service = async () => {
  const Services = await getAllServices();
  const serviceData = Services.services;

  return (
    <div className="max-w-[1200px] mx-auto text-black">
      {/* Section Header */}
      <div className="w-[700px] text-center pt-28 mx-auto">
        <p className="text-primary text-xl font-semibold py-4">Service</p>
        <p className="text-4xl font-semibold">Our Service Area</p>
        <p className="pt-3 text-gray-500 leading-6">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-10">
        {serviceData?.map((service, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-md p-5 shadow-sm hover:shadow-lg transition-shadow"
          >
            <Image
              src={service?.img}
              alt={service?.title}
              className="mx-auto rounded-xl"
              width={310}
              height={120}
            />
            <p className="pt-5 text-xl font-semibold">{service?.title}</p>
            <Link
              href={`/Services/${service?._id}`}
              className="flex justify-between text-primary items-center pt-3"
            >
              <p className="text-lg font-semibold">
                Price: $ <span>{service?.price}</span>
              </p>
              <FaArrowRight />
            </Link>
          </div>
        ))}
      </div>

      <div className="py-10 flex justify-center">
        <button className="px-7 py-3 border border-primary text-primary rounded-md hover:bg-primary hover:text-white font-semibold">
          More Services
        </button>
      </div>
    </div>
  );
};

export default Service;
