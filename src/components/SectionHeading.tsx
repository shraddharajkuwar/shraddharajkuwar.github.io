import React from "react";

interface SectionHeadingProps {
  tagline?: string;
  highlightText: string; // word to highlight
  restText: string; // remaining heading text
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  tagline,
  highlightText,
  restText,
}) => {
  return (
    <div className="section-heading">
      
      {tagline && (
        <span className="section-tagline">{tagline}</span>
      )}

      <h2 className="section-title">
        {restText}
        {" "} <span className="highlight">{highlightText}</span>       
      </h2>

    </div>
  );
};

export default SectionHeading;