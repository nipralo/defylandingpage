"use client";

import GooglePlacesAutocomplete from "@/component/form/googlePlaceAPI/GooglePlacesAutocomplete";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function FormFields({
  formData,
  errors,
  handleChange,
  handleCitySelect,
}) {
  const fields = [
    { type: "text", name: "name", placeholder: "Full Name" },
    { type: "tel", name: "phone", placeholder: "Phone Number" },
    { type: "email", name: "email", placeholder: "Email" },
  ];

  return (
    <>
      {fields.map((field) => (
        <div key={field.name} className="mb-3">
          <input
            type={field.type}
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange}
            placeholder={field.placeholder}
            className="w-full px-4 py-3 border border-white rounded-sm focus:outline-none bg-white text-black"
            required
          />
          {errors[field.name] && (
            <p className="text-sm text-red-500">{errors[field.name]}</p>
          )}
        </div>
      ))}

      {/* City Field */}
      <div className="mb-3">
        <GooglePlacesAutocomplete
          value={formData.city}
          onSelectCity={handleCitySelect}
        />

        {errors.city && <p className="text-sm text-red-500">{errors.city}</p>}
      </div>

      {/* Month Dropdown */}
      <div className="mb-3">
        <select
          name="month"
          value={formData.month}
          onChange={handleChange}
          className={`w-full px-2 py-4 border border-white rounded-sm bg-white text-black focus:outline-0 ${
            !formData.month ? "text-black/50" : "text-black"
          }`}
          required
        >
          <option value="" disabled hidden>
            Preferred Training Month
          </option>
          {months.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>

        {errors.month && <p className="text-sm text-red-500">{errors.month}</p>}
      </div>
    </>
  );
}
