import React from "react";

import certificate from "../../assets/SVG/certificate.svg";
import education from "../../assets/SVG/education.svg";
import educator from "../../assets/SVG/educator.svg";

const Feature = React.forwardRef((props, ref) => {
  const { Img, title, description } = props;

  let img = education;
  if (Img === "certificate") {
    img = certificate;
  }
  if (Img === "educator") {
    img = educator;
  }

  return (
    <div className="flex flex-col items-center justify-center p-4" ref={ref}>
      <img src={img} alt="education" className="h-32" />
      <h1 className="text-2xl font-bold mt-4">{title}</h1>
      <p className="text-lg mt-4 opacity-75 w-5/6 text-center">{description}</p>
    </div>
  );
});

export default Feature;
