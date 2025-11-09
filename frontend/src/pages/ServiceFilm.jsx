import React from "react";
import ServiceLayout from "./ServiceLayout";
import filmDetail from "../images/Film_1.png";

export default function ServiceFilm(){
  return (
    <ServiceLayout
      title="Film Production"
      quote={'"Filmmaking is a chance to live many lifetimes." – Robert Altman'}
      image={filmDetail}
      bullets={["Documentaries","Corporate Videos","2D Animation Videos","3D Animation Videos"]}
    />
  );
}
