import React, { useState } from "react";
import axios from "axios";
import endpoints from "../../endpoints";
import { useHistory } from "react-router";
const SignUp = ({ setUsers }) => {
  const [first_name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      first_name,
      email,
      password,
    };
    axios
      .post(endpoints.register, data)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        axios
          .post(endpoints.userdetails, {
            Token: `${localStorage.getItem("token")}`,
          })
          .then((response) => {
            setUsers(response.data.user);
          });
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <form className="mt-8 space-y-6" onSubmit={(e) => handleSubmit(e)}>
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Sign up</h1>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="first_name"
              placeholder="Full Name"
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
            >
              Create Account
            </button>
          </div>

          <div className="text-grey-dark mt-6">
            Already have an account?
            <a
              className="no-underline border-b border-blue text-blue"
              href="../login/"
            >
              Log in
            </a>
            .
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
