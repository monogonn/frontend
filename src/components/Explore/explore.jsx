import React, { useEffect, useState } from "react";
import axios from "axios";
import endpoints from "../../endpoints";
import { useHistory } from "react-router-dom";
import "./explore.css";

const Explore = () => {
  const [explore, setExplore] = useState([]);
  const history = useHistory();
  useEffect(() => {
    axios.get(endpoints.explore, {}).then((res) => {
      const persons = res.data;
      console.log(persons);
      setExplore(persons);
    });
    // .catch(e=>console.log(e))
  }, []);
  return (
    <div className="defaultMargin exploreContainer">
      {explore.map((content, id) => {
        return (
          <div
            className="exploreMainDiv"
            onClick={() => {
              history.push(`explore/${content.title}`, { state: content });
            }}
          >
            <div class="rounded-t-xl rounded-b-xl overflow-hidden bg-gradient-to-r from-indigo-50 to-indigo-100 p-10">
              <h1 key={id} class="exploreHead">
                {content.title}
              </h1>
              <img
                alt="fafae"
                className="float-left mt-2 ml-0 mb-4 mr-10 h-32 exploreImg"
                src={content.img_link[0]}
              />
              <p class="text-indigo-500 font-flow text-justify font-medium exploreFont">
                {content.body.slice(0, window.innerWidth < 900 ? 1000 : 1700)}
                ....
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Explore;
