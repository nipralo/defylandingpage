"use client";

import Wrapper from "@/ui/Wrapper";

const curriculumData = [
  {
    day: 1,
    title: "Drone Basics & Safety",
    icon: "/svg/teacher.svg",
  },
  {
    day: 2,
    title: "Learn DGCA Regulations",
    icon: "/svg/doc_search.svg",
  },
  {
    day: 3,
    title: "Flight Planning and route optimization",
    icon: "/svg/drone_single.svg",
  },
  {
    day: 4,
    title: "Hands-on flying experience with instructor guidance",
    icon: "/svg/drone_man.svg",
  },
  {
    day: 5,
    title: "Written and practical assessment for DGCA certification",
    icon: "/svg/edit.svg",
  },
];

export default function CurriculumMaster() {
  return (
    <section className="bg-[#f6f6eb]">
      <Wrapper>
        <h2 className="font-bold text-center mb-heading text-primary">
          WHAT HAPPENS IN <span className="text-outline-primary">5 DAYS?</span>
        </h2>

        <div className="max-w-4xl mx-auto space-y-3">
          {curriculumData.map((day) => (
            <div
              key={day.day}
              className="bg-white rounded-primary p-4 shadow-sm "
            >
              <div className="flex items-center gap-4">
                <img src={day.icon} alt={day.title} className="md:w-12 w-10" />
                <div>
                  <p className="font-bold text-primary font-stretch-expanded ">
                    Day {day.day}
                  </p>
                  <p className="text-accent-green-text italic">{day.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
