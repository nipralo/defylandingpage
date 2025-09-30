"use client";
import { useEffect, useRef } from "react";

export default function ClassOfDrones() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.scrollLeft = el.scrollWidth / 2 - el.clientWidth / 2;
    }
  }, []);

  const classOptions = [
    {
      title: "SMALL",
      price: "₹30,000",
      features: [
        "Fly drones under 25 kg",
        "For surveying, mapping, inspection",
        "Duration: 5 days",
      ],
    },
    {
      title: "COMBO",
      price: "₹65,000",
      features: [
        "Get both licenses in one program",
        "Maximum flexibility for career options",
        "Duration: 8-9 days",
      ],
      badge: "most popular",
    },
    {
      title: "MEDIUM",
      price: "₹45,000",
      features: [
        "Fly drones over 25 kg",
        "For agriculture spraying, heavy industrial ops",
        "Duration: 5 days",
      ],
    },
  ];

  return (
    <div className="text-center mb-heading over">
      <h2 className="mb-heading">
        <span className="text-primary">CLASS OF</span>
        <span className="text-outline-primary"> DRONES</span>
      </h2>

      <div
        className="flex gap-8 max-w-[950px] overflow-x-auto min-h-fit py-10 mx-auto"
        ref={scrollRef}
      >
        {classOptions.map((cls, idx) => (
          <div
            key={idx}
            className={`rounded-primary p-5 pt-5 lg:p-8 lg:pt-10 min-w-[200px] md:min-w-[220px] lg:min-w-[280px] bg-accent-orange-base ${
              idx === 1 && "scale-110"
            } relative flex flex-col justify-start`}
          >
            {cls.badge && (
              <div className="absolute -top-3 right-0 left-0">
                <span className="bg-accent-gold text-black/70 px-4 py-2 rounded-xl font-stretch-condensed">
                  {cls.badge}
                </span>
              </div>
            )}
            <div>
              <h3 className="text-accent-orange-dark font-extrabold">
                {cls.title}
              </h3>
              <p className="title-3 font-bold text-primary/80 mb-3 lg:mb-5 font-stretch-expanded text-nowrap">
                {cls.price} + GST
              </p>
            </div>

            <div className="space-y-2 text-left">
              {cls.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-2">
                  <img
                    src={"/svg/tick.svg"}
                    className="w-3 lg:w-4 text-green-500 mt-1.5 lg:mt-2 flex-shrink-0"
                  />
                  <p className="text-primary">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
