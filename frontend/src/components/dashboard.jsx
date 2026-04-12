function Dashboard(){

return(

<div className="p-6">

<h1 className="text-3xl font-bold mb-4">
Dashboard
</h1>

<div className="bg-gray-100 p-4 rounded mb-4">
Welcome
</div>

<form className="mb-4">

<input
type="text"
placeholder="name"
className="border p-2 mr-2"
/>

<button className="bg-blue-500 text-white px-4 py-2">
Enter yoyr name
</button>

</form>

<ul>

<li className="border p-2 mb-2 flex justify-between">

First name

<div>

<button className="bg-yellow-400 px-2 mr-2">
Edit
</button>

<button className="bg-red-500 text-white px-2">
Delete
</button>

</div>

</li>

</ul>

</div>

);

}

export default Dashboard;