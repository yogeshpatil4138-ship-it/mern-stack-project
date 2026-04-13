import { useState } from "react";

function ForgotPassword(){

const [email,setEmail] = useState("");

const handleSubmit = (e)=>{
  e.preventDefault();

  console.log("Email:", email);

  alert("Reset link sent (dummy)");
};

return(

<div className="flex justify-center items-center h-screen bg-gray-100">

<form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80">

<h2 className="text-2xl font-bold mb-4">Forgot Password</h2>

<input
type="email"
placeholder="Enter email"
className="border p-2 w-full mb-3"
onChange={(e)=>setEmail(e.target.value)}
/>

<button className="bg-blue-500 text-white px-4 py-2 w-full">
Send Reset Link
</button>

</form>

</div>

)

}

export default ForgotPassword;