import React from "react";
import { Carousel } from "react-responsive-carousel";
import "./exploreDetail.css";

function ExploreDetail(props) {
  console.log(props);
  const propDetails = props.location.state.state;
  console.log(propDetails);

  return (
    <div className="exploreDetailContainer">
      <div className="exploreDetails">
        <h1>{propDetails.title}</h1>
        <Carousel
          thumbWidth="0"
          showThumbs="false"
          infiniteLoop="true"
          autoPlay="true"
          stopOnHover="false"
          emulateTouch="true"
          interval="2000"
          dynamicHeight="true"
        >
          {propDetails.img_link.map((images, idx) => (
            <div>
              <img src={images} key={images} />
            </div>
          ))}
        </Carousel>

        <div>
          <p>{propDetails.body}</p>
        </div>
      </div>
    </div>
  );
}

export default ExploreDetail;
