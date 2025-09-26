import Wrapper from "@/ui/Wrapper";
import Batches from "./Batches";
import ClassOfDrones from "./ClassOfDrones";

export default function OfferMaster() {
  return (
    <section id="batches" className="bg-accent-orange-light">
      <Wrapper>
        <ClassOfDrones />
        <Batches />
      </Wrapper>
    </section>
  );
}
