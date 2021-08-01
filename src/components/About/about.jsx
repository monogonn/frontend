import React from "react";
import "./about.css";

const About = () => {
  return (
    <div>
      <div className="grid grid-cols-1 grid-rows-1 gap-2 my-24 about">
        <div>
          <h1 className="JU">JaipurUncharted</h1>
        </div>
        <div className="subtitle">
          <p>
            ..is a brainchild of two people – born and brought up in the city of
            Jaipur, Rajasthan. We’re architects, one trained as a Conservation
            Architect and the other as an urban Planner.
          </p>
          <p>
            While we might be over-enthusiastic in our endeavour to rediscover
            and explore the city and wax eloquent about its architectural
            heritage and legacy, bear with us..we promise to curate the best
            possible content and show you the uncharted parts of Jaipur!
          </p>
        </div>
      </div>
      <h1 className="my-20 title">About the Owners</h1>
      <div className="grid grid-cols-2 grid-rows-1 gap-2 sm:grid-rows-0">
        <div>
          <h1 className="name">Chandni Chowdhary</h1>
          <p>
            Chandni Chowdhary is an architect with a postgraduate degree in
            Architecture and Settlement Conservation with an expertise in
            Heritage-based Urban Development, currently pursuing her PhD in
            Architecture and Planning from Malaviya National Institute of
            Technology Jaipur. She serves as the Heritage and Conservation
            Consultant for the Heritage Cell, Jaipur Municipal Corporation, runs
            her architectural practice in the city and freelances as a
            consultant towards preparing DPRs for Urban Revitalisation and
            Development projects.
          </p>
        </div>
        <div>
          <h1 className="name">Ankit Kashmiri Gupta</h1>
          <p>
            Ankit Kashmiri Gupta is an Architect and Urban Planner, with a keen
            interest in the successive layers of urban growth and evolution of
            settlements, catalysts for development and their manifestations in
            the physical realm. He is engaged at the Aayojan School of
            Architecture Jaipur as an Assistant Professor, while also pursuing
            his PhD from the Malaviya National Institute of Technology Jaipur.
            Supplementing a very fulfilling academic career, Ankit is an active
            practitioner in the field of architecture and construction, with
            executed projects in the hospitality, health care and residential
            sector.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
