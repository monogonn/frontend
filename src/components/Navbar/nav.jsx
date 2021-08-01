import axios from "axios";
import React, { useEffect, useState } from "react";
import { TailwindNavbar } from "tailwind-navbar-react";
import endpoints from "../../endpoints";
import "./navbar.css";
import { BrowserRouter as Link } from "react-router-dom";
// import "./tailwind.output.css";
function NavbarNew({ users }) {
  console.log(users, "users");
  return (
    <div className="navbarStyle">
      <TailwindNavbar
        brand={
          <img
            src="https://docs.google.com/uc?id=1kgZaS2jovV6CS11nS0c7WkNKwTLcedva"
            width="100"
            height="100"
            alt="Brand logo"
          />
        }
        className="py-1 navbarStyle"
      >
        <nav>
          <ul className="items-center justify-between pt-4 text-base lg:flex lg:pt-0 fontStyling">
            <li>
              <a
                className="block px-0 py-3 border-b-2 border-transparent lg:p-4 hover:border-indigo-400"
                href="/blog"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                className="block px-0 py-3 border-b-2 border-transparent lg:p-4 hover:border-indigo-400"
                href="/explore"
              >
                Explore
              </a>
            </li>
            <li>
              <a
                className="block px-0 py-3 border-b-2 border-transparent lg:p-4 hover:border-indigo-400"
                href="/about"
              >
                About
              </a>
            </li>
            {users ? (
              <li>
                <a
                  className="block px-0 py-3 border-b-2 border-transparent lg:p-4 hover:border-indigo-400"
                  href="/login"
                >
                  Hey {users}
                </a>
              </li>
            ) : (
              <li>
                <a
                  className="block px-0 py-3 border-b-2 border-transparent lg:p-4 hover:border-indigo-400"
                  href="/login"
                >
                  Account
                </a>
              </li>
            )}
          </ul>
        </nav>
      </TailwindNavbar>
      {console.log(users)}
    </div>
  );
}

export default NavbarNew;
