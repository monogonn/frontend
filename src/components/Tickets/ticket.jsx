import axios from "axios";
import React, { useEffect, useState } from "react";
import endpoints from "../../endpoints";
import Booking from "../Booking/booking";
import { BrowserRouter as Route, Link, useHistory } from "react-router-dom";

const Ticket = () => {
  const [ticket, setTicket] = useState([]);
  const history = useHistory();
  useEffect(() => {
    axios.get(endpoints.tickets).then((res) => {
      const persons = res.data;
      console.log(persons);
      setTicket(persons);
    });
  }, []);
  return (
    <div>
      {ticket.map((content, id) => {
        return (
          <div
            onClick={() => {
              history.push("/booking", { state: content });
            }}
          >
            {content.title}
          </div>
        );
      })}
    </div>
  );
};

export default Ticket;
