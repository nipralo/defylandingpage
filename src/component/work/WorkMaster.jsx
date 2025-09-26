import Wrapper from "@/ui/Wrapper";

const howItWorksData = [
  {
    step: 1,
    title: "Fill Your Details",
    description: "Takes less than 30 seconds",
    color: {
      bg: "bg-primary-light",
      text: "text-primary",
    },
  },
  {
    step: 2,
    title: "We Call You",
    description: "Within 12 hours with batch details",
    color: {
      bg: "bg-accent-green-light",
      text: "text-accent-green-dark",
    },
  },
  {
    step: 3,
    title: "Get Certified",
    description: "In just 5 days",
    color: {
      bg: "bg-accent-orange-base",
      text: "text-accent-orange-dark",
    },
  },
];

export default function WorkMaster() {
  return (
    <section className="bg-primary-light">
      <Wrapper>
        <h2 className="text-center mb-heading text-primary">
          HOW IT <span className="text-outline-primary">WORKS</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-3 lg:gap-8 mx-auto">
          {howItWorksData.map((step) => (
            <div
              key={step.step}
              className="flex gap-4 bg-white p-4 lg:p-6 rounded-xl"
            >
              <div
                className={`aspect-[1/1]  text-lg px-3 lg:px-4 py-1 lg:py-2 h-fit w-fit rounded-full font-bold ${step.color.bg} ${step.color.text}`}
              >
                {step.step}
              </div>
              <div className="">
                <p className="font-stretch-expanded font-semibold text-primary">
                  {step.title}
                </p>
                <p className="italic text-accent-green-text">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
