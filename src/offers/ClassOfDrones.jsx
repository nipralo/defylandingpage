export default function ClassOfDrones() {
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
    <div className="text-center mb-16 over">
      <h2 className="md:mb-12 mb-8">
        <span className="text-primary">CLASS OF</span>
        <span className="text-outline-primary"> DRONES</span>
      </h2>

      <div className="flex gap-8 max-w-[950px] overflow-x-auto min-h-fit py-10  mx-auto">
        {classOptions.map((cls, idx) => (
          <div
            key={idx}
            className={`rounded-3xl p-8 pt-14 min-w-[280px] bg-accent-orange-base ${
              idx === 1 && "scale-110"
            } relative flex flex-col justify-start`}
          >
            {cls.badge && (
              <div className="absolute -top-3 right-0 left-0">
                <span className="bg-accent-gold text-black/70 px-4 py-2 rounded-full font-stretch-condensed">
                  {cls.badge}
                </span>
              </div>
            )}
            <div>
              <h3 className="text-accent-orange-dark font-extrabold mb-3">
                {cls.title}
              </h3>
              <p className="title-2 font-bold text-primary/80 mb-6 font-stretch-expanded text-nowrap">
                {cls.price} + GST
              </p>
            </div>

            <div className="space-y-3 text-left">
              {cls.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-2">
                  <img
                    src={"/svg/tick.svg"}
                    className="w-4 text-green-500 mt-1 flex-shrink-0"
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
