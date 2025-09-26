"use client";

import Wrapper from "@/ui/Wrapper";

const locationData = [
  {
    time: "60 mins",
    description: "from Kempegowda Intl. Airport",
    icon: "/svg/aeroplane.svg",
  },
  {
    time: "45 mins",
    description: "from Majestic bus stand",
    icon: "/svg/train.svg",
  },
  {
    time: "8 mins",
    description: "Silk Institute Metro Station",
    icon: "/svg/track.svg",
  },
];

export default function LocationMaster() {
  return (
    <section id="location" className="">
      <Wrapper className="!pt-0">
        <h2 className="font-bold text-center mb-heading text-accent-green-base">
          <span className="text-outline-green">WHERE</span> TO FIND US?
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="mb-heading">
            <img
              src="/images/location_banner.webp"
              alt="DEFY Training Facility"
              className="w-full aspect-[2/1] object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="flex flex-col-reverse md:flex-row gap-4 lg:gap-8">
            <div className="min-h-full w-full md:w-[60%]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.4592472127906!2d72.85314741155614!3d19.131364450155907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c86fa2855555%3A0x10ab5170e76d328a!2sDefy%20Aerospace!5e0!3m2!1sen!2sin!4v1758719257222!5m2!1sen!2sin"
                width="600"
                height="450"
                loading="lazy"
                className="w-full h-full rounded-xl"
              ></iframe>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-1 gap-4 md:gap-8 grid-flow-dense">
              {locationData.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col justify-center gap-2 bg-[#f7f6ec] p-3 md:p-5 rounded-primary ${
                    index === 1 ? "row-span-2" : ""
                  }`}
                >
                  <div>
                    <p className="font-semibold font-stretch-expanded text-accent-green-base">
                      {item.time}
                    </p>
                    <div className="flex items-start gap-2">
                      <img
                        src={item.icon}
                        alt={item.description}
                        className="lg:w-5 w-4 mt-1"
                      />
                      <p className="text-accent-green-text/90">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
