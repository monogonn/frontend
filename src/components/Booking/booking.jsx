import axios from "axios";
import React, { useState } from "react";
import endpoints from "../../endpoints";

function Booking(props) {
  // console.log(props);
  const ticketDetails = props.location.state.state;
  const [quantity, setQuantity] = useState(1);
  const [ticket, setTicket] = useState(ticketDetails.id);
  // console.log(ticket);
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      ticket,
      quantity,
    };
    console.log(`Token ${localStorage.getItem("token")}`);
    axios
      .post(endpoints.booking, `Token ${localStorage.getItem("token")}`)
      .then((res) => {
        // console.log(res);
        setQuantity(res.data);
        setTicket(ticket);
      })
      .catch(function (error) {});
  };
  return (
    <div>
      <h1>{ticketDetails.title}</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="integer"
          className="block border border-grey-light w-full p-3 rounded mb-4"
          name="quantity"
          placeholder="quantity"
          onChange={(e) => setQuantity(e.target.value)}
        />

        <button
          type="submit"
          className="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Booking;
