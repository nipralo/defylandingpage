"use client";
import { Autocomplete, LoadScript } from "@react-google-maps/api";
import { useState } from "react";

const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
const LIBRARIES = ["places"]; // ✅ Move libraries to a constant

const GooglePlacesAutocomplete = ({ onSelectCity, isPopup = false }) => {
  const [autocomplete, setAutocomplete] = useState(null);
  const [city, setCity] = useState("");

  const handlePlaceSelect = () => {
    if (autocomplete) {
      const place = autocomplete.getPlace();
      if (place && place.formatted_address) {
        setCity(place.formatted_address);
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
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className={` z-[1002]  w-full p-3 border rounded-md outline-none form-input bg-white placeholder:text-[#0D0D0D63] text-black ${
            isPopup ? "bg-[#f1f1f1] border-none" : "border-black/15"
          }`}
        />
      </Autocomplete>
    </LoadScript>
  );
};

export default GooglePlacesAutocomplete;
