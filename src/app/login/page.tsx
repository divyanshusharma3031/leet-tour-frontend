'use client'
 
import { useActionState } from 'react'
import { loginUser } from '@/app/actions'
 
const initialState = {
  message: '',
}
 
export default function Signup() {
  const [state, formAction, pending] = useActionState(loginUser, initialState)
  return (
    <form action={formAction}>
      <label htmlFor="username">UserName</label>
      <input type="text" id="username" name="username" required />
      <label htmlFor="password">Password</label>
      <input type="text" id="password" name="password" required />
      <p aria-live="polite">{state?.message}</p>
      <button disabled={pending}>Sign up</button>
    </form>
  )
}