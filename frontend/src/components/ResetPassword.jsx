import { useState } from "react";

function ResetPassword(){

const [password,setPassword] = useState("");
const [confirm,setConfirm] = useState("");

const handleSubmit = (e)=>{
  e.preventDefault();

  if(password !== confirm){
    alert("Passwords do not match");
    return;
  }

  console.log("New Password:", password);

  alert("Password reset successful (dummy)");
};

return(

<div className="flex justify-center items-center h-screen bg-gray-100">

<form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80">

<h2 className="text-2xl font-bold mb-4">Reset Password</h2>

<input
type="password"
placeholder="New password"
className="border p-2 w-full mb-3"
onChange={(e)=>setPassword(e.target.value)}
/>

<input
type="password"
placeholder="Confirm password"
className="border p-2 w-full mb-3"
onChange={(e)=>setConfirm(e.target.value)}
/>

<button className="bg-green-500 text-white px-4 py-2 w-full">
Reset Password
</button>

</form>

</div>

)

}

export default ResetPassword;