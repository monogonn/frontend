import React from "react";
import { Carousel } from "react-responsive-carousel";
import LatestBlog from "../Blog/latest";
const Home = () => {
  return (
    <div>
      <div>
        <Carousel
          infiniteLoop="true"
          autoPlay="true"
          stopOnHover="false"
          emulateTouch="true"
          interval="2000"
        >
          <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Jal_Mahal_in_Man_Sagar_Lake.jpg" />
          </div>
          <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/20191218_Pa%C5%82ac_Wiatr%C3%B3w_w_Jaipurze_1129_9124.jpg/1280px-20191218_Pa%C5%82ac_Wiatr%C3%B3w_w_Jaipurze_1129_9124.jpg" />
          </div>
        </Carousel>
      </div>
      <LatestBlog />
    </div>
  );
};

export default Home;
