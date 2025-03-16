import Link from "next/link";
import React from "react";

function LogOut() {
  return (
    <div className="">
      <Link href="/logout">
        <span className="pt-[8px] pr-[15px] pb-[10px] pl-[15px] text-[#fff] hover:bg-[#fff]  hover:text-[#333] transition ease-out duration-200 rounded-2xl">
          Logout
        </span>
      </Link>
    </div>
  );
}

export default LogOut;
