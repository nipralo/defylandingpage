"use client";

import { useEffect } from "react";

export default function FirstVisitTracker() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const existing = localStorage.getItem("firstVisitUrl");
    if (!existing) {
      const url = window.location.href;
      localStorage.setItem("firstVisitUrl", url);

      // Optional: capture UTM parameters
      const params = new URLSearchParams(window.location.search);
      const utmParams = {};
      params.forEach((value, key) => {
        utmParams[key] = value;
      });

      if (Object.keys(utmParams).length > 0) {
        localStorage.setItem("utmParams", JSON.stringify(utmParams));
      }
    }
  }, []);

  return null;
}
