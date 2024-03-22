"use client";
import React, { useState } from "react";
import Hamburger from "../icon/Hamburger";
import Store from "../icon/Store";
import User from "../icon/User";
import Search from "../icon/Search";
import "@/app/styles/Navbar/navbar.css";
import Link from "next/link";
import Image from "next/image";
import Logo from "../icon/Logo";

const Navbar = () => {
  const [toggleSlider, setToggleSlider] = useState(false);
  return (
    <>
      <nav
        className={`bg-[rgba(253,253,253,0.2)] ${
          toggleSlider ? "blur-sm" : "blur-0"
        }`}
      >
        <div className="my_container  flex items-center justify-between py-3 px-5">
          <Hamburger
            width="20"
            className="cursor-pointer"
            onClick={() => setToggleSlider(!toggleSlider)} // Toggling slider
          />
          <h2 className="uppercase tracking-wider font-bold ">
            Real
            <Logo width="50" className="inline"/>
            World
          </h2>
          <ul className="flex items-center gap-5">
            <li className="ms-4">
              <Search width="20" />
            </li>
            <li className="ms-4">
              <User width="20" />
            </li>
            <li className="ms-4">
              <Store width="20" />
            </li>
          </ul>
        </div>
      </nav>
      <SliderBar toggle={toggleSlider} setToggle={setToggleSlider} />{" "}
      {/* Always render SliderBar */}
    </>
  );
};

const SliderBar = ({ toggle, setToggle }) => {
  return (
    <div
      className={`bg-green-300 px-5 fixed h-[100vh] w-[20%] duration-150 top-0 left-0 z-50 transform transition-transform ${
        toggle
          ? "translate-x-0"
          : "-translate-x-full" /* Using transform instead of translate-x to enable smooth animation */
      }
      }`}
    >
      <p
        className="text-[2rem] text-right transition-all duration-75 cursor-pointer hover:text-red-50"
        onClick={() => setToggle(false)}
      >
        x
      </p>
      <div className="">
      <h2 className="uppercase tracking-wider font-bold ">
            Real
            <Logo width="50" className="inline"/>
            World
          </h2>
        <ul className="flex flex-col gap-3 mt-5">
          <div className="flex items-center gap-3">
            <User width="20" />
            <Link
              href={"#"}
              className="text-[1.2rem] duration-200 hover:text-white"
            >
              Login / Signup
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <Store width="30" />
            <Link
              href={"#"}
              className="text-[1.2rem] duration-200 hover:text-white"
            >
              Store
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
