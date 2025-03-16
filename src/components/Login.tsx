import Link from "next/link";
import React from "react";

function Login() {
  return (
    <>
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
    </>
  );
}

export default Login;
