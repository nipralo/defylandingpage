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
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12 text-primary ">
            HOW IT <span className="text-outline-primary">WORKS</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-4 md:gap-8 mx-auto">
            {howItWorksData.map((step) => (
              <div
                key={step.step}
                className="flex gap-4 bg-white p-4 lg:p-6 rounded-xl"
              >
                <div
                  className={`aspect-[1/1] text-xl px-4 py-2 h-fit w-fit rounded-full font-bold ${step.color.bg} ${step.color.text}`}
                >
                  {step.step}
                </div>
                <div className="">
                  <p className="font-stretch-expanded font-semibold mb-1 text-primary">
                    {step.title}
                  </p>
                  <p className="italic text-accent-green-text">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
