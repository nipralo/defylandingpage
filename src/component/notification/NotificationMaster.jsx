"use client";

import Wrapper from "@/ui/Wrapper";
import { useEffect, useState } from "react";

const notifications = [
  {
    name: "Vikash T",
    message: "just registered",
    time: "15 mins ago",
    city: "Chennai",
  },
  {
    name: "Priya S",
    message: "just registered",
    time: "8 mins ago",
    city: "Mumbai",
  },
  {
    name: "Arjun K",
    message: "just registered",
    time: "22 mins ago",
    city: "Delhi",
  },
];

export default function NotificationMaster() {
  const [currentNotification, setCurrentNotification] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNotification((prev) => (prev + 1) % notifications.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const { name, message, time, city } = notifications[currentNotification];

  return (
    <section className="">
      <Wrapper className="">
        <div className="bg-primary-light w-fit mx-auto p-2 rounded-primary">
          <div className="flex items-center gap-2 w-fit mx-auto p-2 md:p-4 ">
            <img src="/svg/person.svg" alt="person" className="w-4 h-4" />
            <p className="text-accent-green-text">
              <span className="font-bold mr-2">{name}</span>
              <span className="italic">
                from {city} {message}
              </span>
            </p>
          </div>
          <p className="block font-medium text-center text-accent-green-text/80 italic">
            {time}
          </p>
        </div>
      </Wrapper>
    </section>
  );
}
