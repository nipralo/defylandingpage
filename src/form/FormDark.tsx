"use client";

import Button from "@/ui/Button";
import Wrapper from "@/ui/Wrapper";

const formFields = [
  { name: "fullName", placeholder: "Full Name", type: "text" },
  { name: "phone", placeholder: "Phone Number", type: "tel" },
  { name: "email", placeholder: "Email", type: "email" },
  { name: "city", placeholder: "Your City", type: "text" },
  {
    name: "trainingMonth",
    placeholder: "Preferred Training Month",
    type: "text",
  },
];

export default function FormDark() {
  return (
    <section className="bg-primary-dark text-white hide-cta">
      <Wrapper>
        <div className="max-w-2xl mx-auto">
          <h2 className="font-bold text-center mb-2 text-white">
            REGISTER YOUR <span className="text-accent-gold">INTEREST</span>
          </h2>
          <p className="font-light text-center">
            We'll help you get certified and start your aviation career
          </p>
          <div className="flex gap-2 md:gap-4 my-8 md:my-14 justify-center">
            <button className="bg-accent-green-dark text-[#EDE876] p-2 py-0 md:px-10 md:py-6 rounded-primary font-medium text-xs md:text-xl w-full text-nowrap">
              No Payment Required Now
            </button>
            <button className="w-full bg-accent-gold text-accent-green-text font-bold p-4 md:px-10 md:py-6 rounded-primary text-xs md:text-xl text-nowrap">
              Free Consultation
            </button>
          </div>
          <div className="mb-10">
            <h2 className="font-bold text-center mb-2 text-white">
              REGISTER <span className="text-outline-white">NOW</span>
            </h2>
            <p className="font-semibold text-center text-accent-gold font-stretch-expanded">
              Next batch starts in 7 days. Don't miss out!
            </p>
          </div>
          <form
            id="registration-form-dark"
            className="space-y-4 max-w-md mx-auto"
          >
            {formFields.map((field) => (
              <input
                key={field.name}
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                className="w-full px-4 py-3 border border-white bg-white rounded-sm focus:outline-none text-black"
                required
              />
            ))}

            <Button className="mt-4">GET FREE CONSULTATION</Button>
          </form>

          <p className="mt-4 text-white/60 italic">
            Once you submit, our team will call to explain course dates,
            locations, and certification process. Your info is secure with us
            and will never be shared.
          </p>
        </div>
      </Wrapper>
    </section>
  );
}
