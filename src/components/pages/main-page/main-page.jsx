import React from "react";
import About from "/src/components/blocks/about/about";
import Features from "/src/components/blocks/features/features";

export default function PageMain({ features }) {
  return (
    <div className="main-page">
      <About />
      <Features features={features} />
    </div>
  );
}
