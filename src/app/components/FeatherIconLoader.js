"use client";

import { useEffect } from "react";

const FeatherIconLoader = () => {
  useEffect(() => {
    const loadFeatherIcons = async () => {
      if (typeof window !== "undefined" && typeof feather !== "undefined") {
        feather.replace();
      } else {
        // Load the Feather script if it isn't loaded
        const script = document.createElement("script");
        script.src = "/js/feather.min.js";
        script.async = true;
        script.onload = () => {
          if (typeof feather !== "undefined") {
            feather.replace();
          }
        };
        document.body.appendChild(script);
      }
    };

    loadFeatherIcons();
  }, []); // Run once when the component mounts

  return null;
};

export default FeatherIconLoader;
