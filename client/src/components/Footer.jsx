import React, { useEffect, useRef } from "react";
import "../styles/Footer.css";
import {
  anchor,
  asianPaints,
  berger,
  elica,
  finolex,
  hettich,
  hindware,
  legrand,
  roca,
} from "../assesets";

const Footer = () => {
  const logos = [
    { src: anchor, alt: "Anchor" },
    { src: asianPaints, alt: "Asian Paints" },
    { src: berger, alt: "Berger" },
    { src: hindware, alt: "Hindware" },
    { src: elica, alt: "Elica" },
    { src: hettich, alt: "Hettich" },
    { src: roca, alt: "Roca" },
    { src: legrand, alt: "legrand" },
    { src: finolex, alt: "finolex" },
  ];

  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let scrollAmount = 0;
    const scrollStep = 4;
    const scrollInterval = setInterval(() => {
      scrollAmount += scrollStep;
      scrollContainer.scrollLeft += scrollStep;
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
        scrollContainer.scrollLeft = 0;
      }
    }, 20);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="footer">
      <div className="brand-partners">
        <h2>Our Brand Partners</h2>
        <p>An elite list of partners who strengthen our brand promise</p>
        <div className="logos-container" ref={scrollContainerRef}>
          {logos.map((logo, index) => (
            <img key={index} src={logo.src} alt={logo.alt} className="logo" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
