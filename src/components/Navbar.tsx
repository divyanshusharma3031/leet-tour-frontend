import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div
      className="container min-h-screen pt-5 bg-cover bg-center bg-no-repeat bg-[url('/bg-3.jpg')]"
      
    >
      {/* <div className="absolute inset-0 bg-black/10 backdrop-blur-md"></div> */}
      <div className="relative z-10 container w-[1170px] m-auto">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold text-[#fff]">leetForces</h1>
          <div className="flex font-light text-[16px] m-[8px]">
            <div className="">
              <Link href="/login">
                <span className="pt-[8px] pr-[15px] pb-[10px] pl-[15px] text-[#fff] hover:bg-[#fff]  hover:text-[#333] transition ease-out duration-200 rounded-2xl">
                  Login
                </span>
              </Link>
            </div>
            <div className="">
              <Link href="/login">
                <span className="pt-[8px] pr-[15px] pb-[10px] pl-[15px] text-[#fff] hover:bg-[#fff]  hover:text-[#333] transition ease-out duration-200 rounded-2xl">
                  Signup
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
