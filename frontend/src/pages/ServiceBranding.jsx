import React from "react";
import ServiceLayout from "./ServiceLayout";
import brandingDetail from "../images/Branding_1.png";

export default function ServiceBranding(){
  return (
    <ServiceLayout
      title="Branding"
      quote={'"A brand is a voice, and a product is a souvenir." – Lisa Gansky'}
      image={brandingDetail}
      bullets={["Branding & Communication","Market Mapping","Content Management","Social Media Management","Rebranding"]}
    />
  );
}
