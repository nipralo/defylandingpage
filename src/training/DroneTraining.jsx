import Wrapper from "@/ui/Wrapper";

const trainingItems = [
  {
    icon: "/svg/drone_flying.svg",
    text: "Control drone from ground.",
    customClass: "w-12", // default size
  },
  {
    icon: "/svg/two_drone.svg",
    text: "Fly commercial drones: Small (< 25kg) & Medium (> 25 kg)",
    customClass: "w-22", // larger icon
  },
  {
    icon: "/svg/stop.svg",
    text: "Flying drones over 2 kg without a license is illegal",
    customClass: "w-10", // smaller icon
  },
  {
    icon: "/svg/doc.svg",
    text: "DGCA license mandatory for commercial drones.",
    customClass: "w-8", // medium size
  },
];

export default function DroneTraining() {
  return (
    <section className="">
      <Wrapper className="!pt-0 overflow-hidden">
        <div className="bg-primary-light rounded-[44px] py-8 px-2 md:py-16">
          {/* Title */}
          <h2 className="text-center mb-12 text-balance">
            <span className="text-accent-gold">KNOW </span>
            <span className="text-primary">
              ABOUT DGCA
              <br /> DRONE TRAINING
            </span>
          </h2>

          {/* Grid of items */}
          <div className="grid grid-cols-2 content-center max-w-3xl mx-auto">
            {trainingItems.map((item, idx) => (
              <div
                key={idx}
                className={`flex flex-col gap-4 items-center justify-center text-center my-10 px-4 ${
                  idx % 2 ? "" : "border-r-2 border-accent-gold/40"
                }`}
              >
                <img
                  src={item.icon}
                  alt=""
                  className={`${item.customClass} text-slate-600 inline-block`}
                />
                <p className="text-primary max-w-[250px]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
