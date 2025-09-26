import CurriculumMaster from "@/curriculum/CurriculumMaster";
import FaqMaster from "@/faq/FaqMaster";
import CTABanner from "@/footer/CTABanner";
import FormDark from "@/form/FormDark";
import FormLight from "@/form/FormLight";
import HeroMaster from "@/hero/HeroMaster";
import Slugs from "@/hero/Slugs";
import LocationMaster from "@/location/LocationMaster";
import NotificationMaster from "@/notification/NotificationMaster";
import OfferMaster from "@/offers/OfferMaster";
import TestimonialMaster from "@/testimonial/TestimonialMaster";
import DroneTraining from "@/training/DroneTraining";
import WhyDefyMaster from "@/work/WhyDefyMaster";
import WorkMaster from "@/work/WorkMaster";
export default function Home() {
  return (
    <>
      <HeroMaster />
      <Slugs />
      <DroneTraining />
      <OfferMaster />
      <WorkMaster />
      <WhyDefyMaster />
      <FormLight />
      <NotificationMaster />
      <TestimonialMaster />
      <CurriculumMaster />
      <FaqMaster />
      <LocationMaster />
      <FormDark />
      <CTABanner />
    </>
  );
}
