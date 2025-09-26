import CurriculumMaster from "@/component/curriculum/CurriculumMaster";
import FaqMaster from "@/component/faq/FaqMaster";
import CTAFooter from "@/component/footer/CTAFooter";
import RegistrationForm from "@/component/form/RegistrationForm";
import HeroMaster from "@/component/hero/HeroMaster";
import StickyNav from "@/component/hero/StickyNav";
import LocationMaster from "@/component/location/LocationMaster";
import NotificationMaster from "@/component/notification/NotificationMaster";
import OfferMaster from "@/component/offers/OfferMaster";
import TestimonialMaster from "@/component/testimonial/TestimonialMaster";
import DroneTraining from "@/component/training/DroneTraining";
import WhyDefyMaster from "@/component/work/WhyDefyMaster";
import WorkMaster from "@/component/work/WorkMaster";
export default function Home() {
  return (
    <>
      <HeroMaster />
      <StickyNav />
      <DroneTraining />
      <OfferMaster />
      <WorkMaster />
      <WhyDefyMaster />
      <RegistrationForm />
      <NotificationMaster />
      <TestimonialMaster />
      <CurriculumMaster />
      <FaqMaster />
      <LocationMaster />
      <RegistrationForm
        variant="dark"
        subHeading="We'll help you get certified and start your aviation career"
        secondaryHeading="REGISTER"
        secondarySubtext="Next batch starts in 7 days. Don't miss out!"
      />
      <CTAFooter />
    </>
  );
}
