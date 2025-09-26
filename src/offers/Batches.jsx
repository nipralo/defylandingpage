import getNextDate from "@/utils/getNextDate";
import getSpotsRemaining from "@/utils/getSpotsRemaining";

// utils function to get next Wednesday
export default function Batches() {
  const nextBatchDate = getNextDate(3);

  const batchOptions = [
    {
      title: "Small",
      date: nextBatchDate,
      location: "Bangalore",
      spots: getSpotsRemaining(nextBatchDate, "small", 9),
    },
    {
      title: "Combo",
      date: nextBatchDate,
      location: "Bangalore",
      spots: getSpotsRemaining(nextBatchDate, "combo", 6),
    },
    {
      title: "Medium",
      date: nextBatchDate,
      location: "Bangalore",
      spots: getSpotsRemaining(nextBatchDate, "medium", 7),
    },
  ];

  return (
    <div className="text-center md:pt-8">
      <h2 className="font-bold mb-2 md:mb-4">
        <span className="text-outline-primary">UPCOMING</span>{" "}
        <span className="text-primary">BATCHES</span>
      </h2>
      <p className="text-primary/90 font-bold mb-12 font-stretch-expanded">
        Next Batch Starting Soon!
      </p>

      <div className="flex gap-4 max-w-3xl overflow-x-auto mx-auto text-primary">
        {batchOptions.map((batch, idx) => (
          <div
            key={idx}
            className="rounded-primary min-w-[200px] p-6 bg-[#f6f1e2]"
          >
            <h3 className="text-left font-bold mb-6">{batch.title}</h3>

            <div className="space-y-4 text-left text-primary">
              <div className="flex items-center gap-3">
                <img src={"/svg/calender.svg"} className="w-5 h-5" />
                <p>
                  {batch.date.toLocaleDateString("en-GB").replace(",", "'")}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <img src="/svg/location.svg" className="w-5 h-5" />
                <p>{batch.location}</p>
              </div>
              <span className="text-accent-orange-dark italic font-bold">
                Only {batch.spots} spots remaining
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
