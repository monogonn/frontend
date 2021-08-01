import { LockClosedIcon } from "@heroicons/react/solid";
import axios from "axios";
import endpoints from "../../endpoints";
import { useState } from "react";
import { useHistory } from "react-router";
import React from "react";

const Login = ({ setUsers }) => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isloggedIn, setloggedIn] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      username,
      password,
    };
    axios
      .post(endpoints.login, data)
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
    setloggedIn(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <form className="mt-8 space-y-6" onSubmit={(e) => handleSubmit(e)}>
          <div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
              <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                <h1 className="mb-8 text-3xl text-center">Login</h1>

                <input
                  type="text"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="username"
                  placeholder="Email"
                  onChange={(e) => setUsername(e.target.value)}
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
                  Login
                </button>
              </div>

              <div className="text-grey-dark mt-6">
                New to JaipurUncharted?
                <a
                  className="no-underline border-b border-blue text-blue"
                  href="../register/"
                >
                  Register
                </a>
                .
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
