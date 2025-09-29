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
  return (
    <>
      {/* Full Name */}
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Full Name"
        className="w-full px-4 py-3 border border-white rounded-sm focus:outline-none bg-white text-black"
        required
      />
      {errors.name && (
        <p className="text-sm text-red-500">{errors.name}</p>
      )}

      {/* Phone */}
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone Number"
        className="w-full px-4 py-3 border border-white rounded-sm focus:outline-none bg-white text-black"
        required
      />
      {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}

      {/* Email */}
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        className="w-full px-4 py-3 border border-white rounded-sm focus:outline-none bg-white text-black"
        required
      />
      {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}

      {/* City Field */}
      <div>
        <GooglePlacesAutocomplete
          key="city-field"
          onSelectCity={handleCitySelect}
        />
        {errors.city && <p className="text-sm text-red-500">{errors.city}</p>}
      </div>

      {/* Month Dropdown */}
      <select
        name="month"
        value={formData.month}
        onChange={handleChange}
        className="w-full px-2 py-3 border border-white rounded-sm bg-white text-black focus:outline-0"
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
    </>
  );
}
