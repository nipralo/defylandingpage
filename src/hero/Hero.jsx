import Button from "@/ui/Button";
import Wrapper from "@/ui/Wrapper";

export default function Hero() {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat min-h-[calc(100dvh-148px)] flex flex-col justify-end text-white"
      style={{
        backgroundImage: "url('/images/hero_banner.webp')",
      }}
    >
      <Wrapper className="!pb-24">
        {/* Content */}
        <div className="relative z-10">
          <div className="">
            <h1 className="font-bold text-white mb-4">
              BECOME A <span className="text-accent-gold">CERTIFIED</span>
              <br />
              <span className="text-accent-gold">DRONE PILOT</span> IN JUST 5
              DAYS.
            </h1>

            <p className="mb-8 max-w-xl font-light tracking-wider">
              No Tech Background Needed. From Zero to Sky in One Week.
            </p>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-3 md:gap-6 mb-8 bg-white/10 p-4 rounded-xl max-w-fit backdrop-blur-xl">
            <div className="flex-1 flex flex-col items-center  pr-3 md:pr-6 border-2 border-transparent !border-r-white">
              <div className="flex items-start gap-1 md:gap-2">
                <img src="/svg/star.svg" className="w-3 h-3 md:w-7 md:h-7" />
                <span className="title-short text-white">4.9</span>
              </div>
              <span className="title-short font-light text-nowrap tracking-wide">
                Rated out of 5
              </span>
            </div>

            <div className="flex w-[60%]">
              <div className="flex items-start gap-1 md:gap-4">
                <img src="/svg/people.svg" className="w-4 h-4 md:w-9 md:h-9" />
                <div className="flex flex-col">
                  <span className="title-short text-white">150+ Batches</span>
                  <span className="title-short font-light text-nowrap tracking-wide">
                    Trained & Supported
                  </span>
                </div>
              </div>
            </div>
          </div>
          <Button className="">GET FREE CONSULTATION</Button>
        </div>
      </Wrapper>
    </div>
  );
}
