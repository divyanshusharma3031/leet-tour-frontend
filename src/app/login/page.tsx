"use client";

import { useActionState } from "react";
import { loginUser } from "@/app/actions";

const initialState = {
  message: "",
};

export default function Signup() {
  const [state, formAction, pending] = useActionState(loginUser, initialState);
  return (
    <div className="text-[#fff] container ">
      <form action={formAction} className="flex justify-center align-middle flex-col">
        <label htmlFor="username">UserName</label>
        <input type="text" id="username" name="username" required />
        <label htmlFor="password">Password</label>
        <input type="text" id="password" name="password" required />
        <p aria-live="polite">{state?.message}</p>
        <button disabled={pending}>Login</button>
      </form>
    </div>
  );
}
