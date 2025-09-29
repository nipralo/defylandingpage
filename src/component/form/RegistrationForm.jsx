"use client";

import Button from "@/ui/Button";
import Wrapper from "@/ui/Wrapper";
import validateField from "@/utils/validateField";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import FormFields from "./FormFields";

/** Initial form state */
const initialFormData = {
  name: "",
  phone: "",
  email: "",
  city: "",
  month: "",
  form_type: "",
  utm_source: "",
  utm_medium: "",
  utm_campaign: "",
};

export default function RegistrationForm({
  variant = "light",
  topHeading = "REGISTER YOUR",
  highlightHeading = "INTEREST",
  subHeading = "",
  secondaryHeading = "",
  secondarySubtext = "",
}) {
  const isDark = variant === "dark";
  const router = useRouter();

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    const errorMsg = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };

  const handleCitySelect = (cityName) => {
    // Reuse handleChange logic by simulating an event-like object
    handleChange({ target: { name: "city", value: cityName } });
  };

  // Full form validation
  const validateForm = (data) => {
    const errors = {};
    Object.keys(data).forEach((key) => {
      const errorMsg = validateField(key, data[key]);
      if (errorMsg) errors[key] = errorMsg;
    });
    return errors;
  };

  // Reset form to initial state
  const resetForm = () => {
    setFormData({
      ...formData,
      name: "",
      phone: "",
      email: "",
      city: "",
      month: "",
    });
    setErrors({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validateForm(formData);
    setErrors(newErrors);

    if (Object.keys(newErrors).length) {
      toast.error("Please fix the errors before submitting.");
      return;
    }

    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL;
      const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

      const response = await fetch(`${API_URL}/api/landing-page-enquiries`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: formData }),
      });

      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      await response.json();
      toast.success("Form submitted successfully!");
      resetForm();

      const queryParams = new URLSearchParams(formData).toString();
      router.push(`/thank-you?${queryParams}`);
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong! Please try again.");
      resetForm();
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);

      const firstVisitUrl = localStorage.getItem("firstVisitUrl") || "";

      // Optional: you can parse utmParams from localStorage too
      const utmParams = JSON.parse(localStorage.getItem("utmParams") || "{}");

      setFormData((prev) => ({
        ...prev,
        form_type: variant === "light" ? "form 1" : "form 2",
        utm_source: firstVisitUrl,
        utm_medium: firstVisitUrl,
        utm_campaign: firstVisitUrl,
      }));
    }
    // console.log(firstVisitUrl, "firstVisitUrl");
  }, []);

  return (
    <section
      id={isDark ? "form-2" : "form-1"}
      className={`${
        isDark ? "bg-primary-dark text-white" : "bg-[#dae0df]"
      } hide-cta`}
    >
      <Wrapper>
        <div className="max-w-[680px] mx-auto">
          <h2
            className={`font-bold text-center ${
              isDark ? "text-white" : "text-primary"
            }`}
          >
            {topHeading}{" "}
            <span
              className={isDark ? "text-accent-gold" : "text-outline-primary"}
            >
              {highlightHeading}
            </span>
          </h2>
          {subHeading && (
            <p
              className={`text-center ${
                isDark ? "text-white/80" : "text-black/70"
              }`}
            >
              {subHeading}
            </p>
          )}

          <div className="flex gap-2 md:gap-4 mb-heading mt-4 justify-center">
            <button className="bg-accent-green-dark text-[#EDE876] p-2 py-0 md:px-10 md:py-6 rounded-primary font-medium text-xs md:text-xl w-full text-nowrap">
              No Payment Required Now
            </button>
            <button className="w-full bg-accent-gold text-accent-green-text font-bold p-4 md:px-10 md:py-6 rounded-primary text-xs md:text-xl text-nowrap">
              Free Consultation
            </button>
          </div>

          {secondaryHeading && (
            <div className="mb-heading">
              <h2
                className={`font-bold text-center mb-2 ${
                  isDark ? "text-white" : "text-primary"
                }`}
              >
                {secondaryHeading}{" "}
                <span
                  className={
                    isDark ? "text-outline-white" : "text-outline-primary"
                  }
                >
                  NOW
                </span>
              </h2>
              {secondarySubtext && (
                <p
                  className={`text-center ${
                    isDark
                      ? "text-accent-gold font-semibold"
                      : "text-accent-green-text font-semibold"
                  }`}
                >
                  {secondarySubtext}
                </p>
              )}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-3 max-w-md mx-auto">
            <FormFields
              formData={formData}
              errors={errors}
              handleChange={handleChange}
              handleCitySelect={handleCitySelect}
            />
            <Button type="submit" className="my-2 !w-full">
              GET FREE CONSULTATION
            </Button>
          </form>

          <p
            className={`lg:mt-4 mt-2 italic ${
              isDark ? "text-white/60" : "text-accent-green-text"
            }`}
          >
            Once you submit, our team will call to explain course dates,
            locations, and certification process. Your info is secure with us
            and will never be shared.
          </p>
        </div>
      </Wrapper>
    </section>
  );
}
