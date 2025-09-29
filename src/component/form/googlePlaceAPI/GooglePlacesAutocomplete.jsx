"use client";
import { Autocomplete, LoadScript } from "@react-google-maps/api";
import { useState } from "react";

const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
const LIBRARIES = ["places"];

const GooglePlacesAutocomplete = ({ value, onSelectCity, isPopup = false }) => {
  const [autocomplete, setAutocomplete] = useState(null);

  const handlePlaceSelect = () => {
    if (autocomplete) {
      const place = autocomplete.getPlace();
      if (place && place.formatted_address) {
        onSelectCity(place.formatted_address);
      }
    }
  };

  return (
    <LoadScript googleMapsApiKey={GOOGLE_API_KEY} libraries={LIBRARIES}>
      <Autocomplete
        onLoad={(autoC) => setAutocomplete(autoC)}
        onPlaceChanged={handlePlaceSelect}
      >
        <input
          type="text"
          placeholder="City"
          value={value || ""}
          onChange={(e) => onSelectCity(e.target.value)}
          className={`z-[1002] w-full py-3 px-4 rounded-sm outline-none form-input bg-white placeholder:text-black/50 text-black ${
            isPopup ? "bg-[#f1f1f1] border-none" : "border-black/15"
          }`}
        />
      </Autocomplete>
    </LoadScript>
  );
};

export default GooglePlacesAutocomplete;
