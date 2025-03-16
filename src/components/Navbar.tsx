"use client"; // Have to use it as i want to use localStorage
import React, { useEffect, useState } from "react";
import Login from "./Login";
import LogOut from "./LogOut";
function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedLoginStatus = localStorage.getItem("isLoggedIn");
    console.log(storedLoginStatus);
    setIsLoggedIn(storedLoginStatus === "true"); // Ensure it's a boolean
  }, []);
  return (
    <>
      {/* <div className="absolute inset-0 bg-black/10 backdrop-blur-md"></div> */}
      <div className="relative container w-[1170px] m-auto">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold text-[#fff]">LeetForces</h1>
          <div className="flex font-light text-[16px] m-[8px] text-white">
            {isLoggedIn?<LogOut/>:<Login/>}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
