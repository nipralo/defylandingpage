"use client";

import Marquee from "react-fast-marquee";

export default function InfoMarquee() {
  return (
    <div className="bg-primary  py-4 text-accent-gold">
      <Marquee speed={50} gradient={false} loop={0}>
        <p className="flex gap-4 font-semibold">
          <span>• EARN UPTO RS. 45,000/MONTH</span>
          <span>• 10 YEARS LICENSE VALIDITY</span>
          <span>• 95% JOB PLACEMENT RATE</span>
          <span>• EARN UPTO RS. 45,000/MONTH</span>
          <span>• 10 YEARS LICENSE VALIDITY</span>
          <span>• 95% JOB PLACEMENT RATE</span>
          <span>• EARN UPTO RS. 45,000/MONTH</span>
          <span>• 10 YEARS LICENSE VALIDITY</span>
          <span>• 95% JOB PLACEMENT RATE</span>
        </p>
      </Marquee>
    </div>
  );
}
