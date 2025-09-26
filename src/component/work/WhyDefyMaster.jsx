import Wrapper from "@/ui/Wrapper";

const whyDefyData = {
  title: "WHY DEFY?",
  image: "/images/drone-training.jpg",
  benefits: [
    {
      icon: { path: "/svg/badge.svg", size: "md:w-14 w-7" },
      title: "Get DGCA Certified",
      description: "Official certification recognized across India",
    },
    {
      icon: { path: "/svg/people_green.svg", size: "md:w-14 w-7" },
      title: "1000+ Students",
      description: "Trained by experts & successfully placed",
    },
    {
      icon: { path: "/svg/bed.svg", size: "md:w-12 w-7" },
      title: "Hostels & Meals",
      description: "Assistance for stay and meals provided",
    },
    {
      icon: { path: "/svg/shield.svg", size: "md:w-12 w-6" },
      title: "Become Job Ready",
      description: "100% Placement Assistance Included",
    },
    {
      icon: { path: "/svg/watsapp.svg", size: "md:w-11 w-6" },
      title: "WhatsApp Job Community",
      description: "Here with you on your drone pilot journey always",
    },
  ],
};

export default function WhyDefyMaster() {
  return (
    <section className="bg-white">
      <Wrapper>
        <div className="grid md:gap-16 items-center">
          <div className="flex flex-col md:flex-row md:gap-10 gap-6 items-center">
            <img
              src="/images/why_defy.webp"
              alt="Drone Training"
              className="md:w-[70%] w-full h-50 md:h-90 max-w-[800px] object-cover rounded-primary shadow-lg"
            />
            <h2 className="flex md:flex-col gap-2 font-bold mb-heading text-primary">
              WHY
              <span className="text-outline-primary">DEFY?</span>
            </h2>
          </div>

          <div>
            <div className="flex gap-4 md:gap-8 flex-wrap">
              {whyDefyData.benefits.map((benefit, index) => {
                return (
                  <div
                    key={index}
                    className="text-center grow-1 w-fit px-4 py-5 md:p-10 flex flex-col md:gap-4 gap-2 items-center border-2 border-gray-200 rounded-primary"
                  >
                    <img
                      src={benefit.icon.path}
                      className={`${benefit.icon.size}`}
                    />
                    <div>
                      <p className="font-bold text-primary title-3">
                        {benefit.title}
                      </p>
                      <p className="text-accent-green-text max-w-[350px] md:text-balance">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
