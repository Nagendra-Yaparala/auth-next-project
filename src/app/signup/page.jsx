'use client'
import Link from "next/link"
import { useState } from "react"
const signup = () => {
    const [user,setUser] = useState();
  return (
    <div className="grid grid-cols-2 mx-auto my-5 p-10 pt-20 ">
       <div className="flex justify-center items-center flex-col">
            <h1 className="text-5xl font-bold text-blue-800  hover:bg-white  hover:text-black hover:rounded-lg hover:p-3">TechFlow</h1>
            <p>You can flow with Tech</p>
       </div>
       <div >
       <form>
  <div className="flex flex-col gap-10  p-10 rounded-sm bg-gray-900 shadow-lg ">
    <div>
    <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-white">
      First Name
    </label>
    <input
      type="text"
      id="firstName"
      name="firstName"
      placeholder="Enter your First Name"
      className="p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent rounded-md placeholder:text-black w-full border border-gray-300 text-black"
      required
    />
    </div>
   <div>
   <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-white">
      Last Name
    </label>
    <input
      type="text"
      id="lastName"
      name="lastName"
      placeholder="Enter your Last Name"
      className="p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent rounded-md placeholder:text-black w-full border border-gray-300 text-black"
      required
    />
   </div>
    <div>
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
      Email
    </label>
    <input
      type="email"
      id="email"
      name="email"
      placeholder="Enter your Email Address"
      className="p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent rounded-md placeholder:text-black w-full border border-gray-300 text-black"
      required
    />
    </div>
   <div>
   <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">
      Password
    </label>
    <input
      type="password"
      id="password"
      name="password"
      placeholder="Enter your Password"
      className="p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent rounded-md placeholder:text-black w-full border border-gray-300 text-black"
      required
    />
   </div>
   <button className="bg-blue-500 p-4 flex justify-center items-center rounded font-bold">SingUp</button>
   <Link href={'/login'}> <span className="text-lg flex justify-center items-center" >Check Login Form</span></Link>
  </div>
  
</form>
       
       </div>
        
        </div>
  )
}

export default signup