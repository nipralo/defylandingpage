"use client";

import Marquee from "react-fast-marquee";

export default function InfoMarquee() {
  const marqueeItems = [
    { id: 1, text: "EARN UPTO RS. 45,000/MONTH" },
    { id: 2, text: "10 YEARS LICENSE VALIDITY" },
    { id: 3, text: "95% JOB PLACEMENT RATE" },
  ];

  return (
    <div className="bg-primary py-3 md:py-4 text-accent-gold">
      <Marquee speed={50} gradient={false} loop={0}>
        <div className="flex font-semibold">
          {Array(3) // repeat 3 times (you can adjust as needed)
            .fill(marqueeItems)
            .flat()
            .map((item, idx) => (
              <p key={idx} className="flex items-center">
                <span className="mx-2 md:mx-3">{item.text}</span>
                <span className="text-lg md:text-2xl">•</span>
              </p>
            ))}
        </div>
      </Marquee>
    </div>
  );
}
