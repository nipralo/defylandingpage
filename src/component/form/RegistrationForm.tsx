"use client";

import Button from "@/ui/Button";
import Wrapper from "@/ui/Wrapper";
import validateField from "@/utils/validateField";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import FormFields from "./FormFields";

export default function RegistrationForm({
  variant = "light",
  topHeading = "REGISTER YOUR",
  highlightHeading = "INTEREST",
  subHeading = "",
  secondaryHeading = "",
  secondarySubtext = "",
}) {
  const isDark = variant === "dark";

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    month: "",
    form_type: "",
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
  });

  const [errors, setErrors] = useState({});
  const router = useRouter();
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    // validate on change
    const errorMsg = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };

  const handleCitySelect = (cityName) => {
    setFormData((prev) => ({ ...prev, city: cityName }));

    // validate city on select
    const errorMsg = validateField("city", cityName);
    setErrors((prev) => ({ ...prev, city: errorMsg }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for errors
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const errorMsg = validateField(key, formData[key]);
      if (errorMsg) newErrors[key] = errorMsg;
    });

    setErrors(newErrors);

    // Only submit if no errors
    if (Object.keys(newErrors).length === 0) {
      const payload = {
        data: {
          name: formData.name, // Adjust for Strapi field
          phone: formData.phone,
          email: formData.email,
          city: formData.city,
          preferred_training_month: formData.month, // Map to Strapi's field
          form_type: variant === "light" ? "form 1" : "form 2",
          utm_source: formData.utm_source,
          utm_medium: formData.utm_medium,
          utm_campaign: formData.utm_campaign,
        },
      };

      try {
        const API_URL = process.env.NEXT_PUBLIC_API_URL;
        const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

        const response = await fetch(`${API_URL}/api/landing-page-enquiries`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${API_TOKEN}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log("Form submitted successfully:", result);
        setFormData({
          name: "",
          phone: "",
          email: "",
          city: "",
          month: "",
          form_type: "",
          utm_source: "",
          utm_medium: "",
          utm_campaign: "",
        });
        const queryParams = new URLSearchParams({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          city: formData.city,
          month: formData.month,
          form_type:
            formData.form_type || (variant === "light" ? "form 1" : "form 2"),
        }).toString();

        router.push(`/thank-you?${queryParams}`);
        // Optionally reset form or show success message here
      } catch (error) {
        console.error("Form submission error:", error);
        setFormData({
          name: "",
          phone: "",
          email: "",
          city: "",
          month: "",
          form_type: "",
          utm_source: "",
          utm_medium: "",
          utm_campaign: "",
        });
      }
    } else {
      console.log("Cannot submit, errors exist:", newErrors);
      setFormData({
        name: "",
        phone: "",
        email: "",
        city: "",
        month: "",
        form_type: "",
        utm_source: "",
        utm_medium: "",
        utm_campaign: "",
      });
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
          {/* Headings */}
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

          {/* CTA Buttons */}
          <div className="flex gap-2 md:gap-4 mb-heading mt-4 justify-center">
            <button className="bg-accent-green-dark text-[#EDE876] p-2 py-0 md:px-10 md:py-6 rounded-primary font-medium text-xs md:text-xl w-full text-nowrap">
              No Payment Required Now
            </button>
            <button className="w-full bg-accent-gold text-accent-green-text font-bold p-4 md:px-10 md:py-6 rounded-primary text-xs md:text-xl text-nowrap">
              Free Consultation
            </button>
          </div>

          {/* Secondary Heading */}
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

          {/* ✅ Extracted Form Fields */}
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

          {/* Footer Note */}
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
