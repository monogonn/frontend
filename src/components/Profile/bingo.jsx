import React, { useEffect, useState } from "react";
import endpoints from "../../endpoints";
import axios from "axios";
function BingoCard({ place }) {
  const [selected, setSelected] = useState(place.done);
  return (
    <div
      style={{
        filter: selected ? "" : "grayscale(1)",
        boxShadow: selected ? "0px 0px 20px 0.1px rgba(0, 0, 0, 0.25)" : "",
      }}
      onClick={() => {
        axios
          .put(
            endpoints.places + place.id,
            { ...place, done: !selected },
            {
              headers: {
                Authorization: `Token ${localStorage.getItem("token")}`,
              },
            }
          )
          .then((res) => {
            setSelected(!selected);
          });
      }}
    >
      <img src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Jal_Mahal_in_Man_Sagar_Lake.jpg" />
      {place.place}
    </div>
  );
}

function Bingo() {
  const [places, setPlaces] = useState([]);

  useEffect(
    () =>
      axios
        .get(endpoints.places, {
          headers: { Authorization: `Token ${localStorage.getItem("token")}` },
        })
        .then((res) => {
          console.log(res.data);
          setPlaces(res.data);
        }),
    []
  );
  const PlaceUpdate = (id) => {
    const newPlace = places.find((place) => place.id === id);
    newPlace.done = !newPlace.done;
    axios
      .put(endpoints.places + id, newPlace, {
        headers: { Authorization: `Token ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        const newPlaces = [...places];
        console.log(newPlaces);
        setPlaces(newPlaces);
      });
  };
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <div>
        {/* <h1>Not Donee</h1>
        {places
          .filter((place) => !place.done)
          .map((place, id) => (
            <div
              onClick={() => {
                PlaceUpdate(place.id);
              }}
            >
              {place.place}
            </div>
          ))}
      </div>
      <div>
        <h1>Done</h1>
        {places
          .filter((place) => place.done)
          .map((place, id) => (
            <div
              onClick={() => {
                PlaceUpdate(place.id);
              }}
            >
              {place.place}
            </div>
          ))} */}
        <div className="grid grid-flow-col grid-cols-4 grid-rows-1 gap-4">
          {places.map((place) => (
            <BingoCard place={place} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Bingo;
