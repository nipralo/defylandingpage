"use client";
import getNextDate from "@/utils/getNextDate";
import getSpotsRemaining from "@/utils/getSpotsRemaining";
import { useEffect, useRef } from "react";

// utils function to get next Wednesday
export default function Batches() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.scrollLeft = el.scrollWidth / 2 - el.clientWidth / 2;
    }
  }, []);
  const nextBatchDate = getNextDate(3);

  const batchOptions = [
    {
      title: "Small",
      date: nextBatchDate,
      location: "Bangalore",
      spots: getSpotsRemaining(nextBatchDate, "small", 5),
    },
    {
      title: "Combo",
      date: nextBatchDate,
      location: "Bangalore",
      spots: getSpotsRemaining(nextBatchDate, "combo", 2),
    },
    {
      title: "Medium",
      date: nextBatchDate,
      location: "Bangalore",
      spots: getSpotsRemaining(nextBatchDate, "medium", 3),
    },
  ];

  const getDateFormat = (date) => {
    // Get day and month
    const options = { day: "2-digit", month: "long" };
    const dayMonth = date.toLocaleDateString("en-GB", options); // "01 October"

    // Get last 2 digits of year
    const year = date.getFullYear().toString().slice(-2); // "25"

    return `${dayMonth}’${year}`; // "01 October’25"
  };

  return (
    <div className="text-center md:pt-8">
      <div className="mb-heading">
        <h2 className="font-bold">
          <span className="text-outline-primary">UPCOMING</span>{" "}
          <span className="text-primary">BATCHES</span>
        </h2>
        <p className="text-primary/90 font-bold font-stretch-expanded">
          Next Batch Starting Soon!
        </p>
      </div>

      <div
        className="flex gap-4 max-w-3xl overflow-x-auto mx-auto text-primary pb-2"
        ref={scrollRef}
      >
        {batchOptions.map((batch, idx) => (
          <div
            key={idx}
            className="rounded-primary min-w-[200px] p-4 lg:p-6 bg-[#f6f1e2]"
          >
            <h3 className="text-left font-bold mb-4">{batch.title}</h3>

            <div className="space-y-3 text-left text-primary">
              <div className="flex items-center gap-3">
                <img src={"/svg/calender.svg"} className="w-5 h-5" />
                <p>{getDateFormat(batch.date)}</p>
              </div>
              <div className="flex items-center gap-3">
                <img src="/svg/location.svg" className="w-5 h-5" />
                <p>{batch.location}</p>
              </div>
              <p className="text-accent-orange-dark italic font-bold">
                Only {batch.spots} spots remaining
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
