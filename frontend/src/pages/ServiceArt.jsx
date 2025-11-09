import React from "react";
import ServiceLayout from "./ServiceLayout";
import artDetail from "../images/Art_1.png";

export default function ServiceArt(){
  return (
    <ServiceLayout
      title="Art Curation"
      quote={'"We take art where it belongs, to the people." – Vernita Verma'}
      image={artDetail}
      bullets={["Art Festivals","Live Performances","Community Events","Cultural Storytelling"]}
    />
  );
}
