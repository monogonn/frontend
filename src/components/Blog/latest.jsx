import axios from "axios";
import React, { useState, useEffect } from "react";
import endpoints from "../../endpoints";
// import Ticket from "../Tickets/ticket";

const LatestBlog = () => {
  const [latest, setLatest] = useState([]);
  useEffect(() => {
    axios.get(endpoints.latest, {}).then((res) => {
      const persons = res.data;
      console.log(persons);
      setLatest(persons);
    });
    // .catch(e=>console.log(e))
  }, []);
  return (
    <div className="latestBlogContainer">
      {/* <Ticket /> */}
      <h6>Recent Blogs</h6>

      {latest.map((content, idx) => {
        return (
          <>
            <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal latestBlog">
              <div className="mb-8">
                <div
                  style={{ color: "#E22658", marginBottom: "16px " }}
                  className="text-black font-bold text-xl mb-2"
                >
                  {content.title}
                </div>
                <p
                  style={{ color: "#6D6D6D" }}
                  className="text-grey-darker text-base"
                >
                  {content.created}
                </p>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default LatestBlog;
