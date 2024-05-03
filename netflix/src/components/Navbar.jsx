import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContextProvider";

function Navbar() {
	const { user, logOut } = UserAuth();
	const navigate = useNavigate();

	 const handleLogout=async ()=>{
	 try{
		logOut();
		navigate("/")
	 }
	 catch(err){
		console.log(err)
	 }
	 }
	return (
		<div className=" absolute w-full p-4 flex items-center justify-between z-50">
			<Link to="/">
				<h1 className=" text-3xl uppercase text-red-600 text font-bold">
					NETFLIX
				</h1>
			</Link>
			{user?.email ? (
				<div>
					<Link to="/profile">
						<button className="bg-red-600 py-1 px-3 mr-2 capitalize">
							Profile
						</button>
					</Link>
					<button
						onClick={() => handleLogout()}
						className=" bg-white text-red-600 font-semibold py-1 px-3 mr-2 capitalize rounded"
					>
						Logout
					</button>
				</div>
			) : (
				<div>
					<Link to="/login">
						<button className=" bg-white text-red-600 font-semibold py-1 px-3 mr-2 capitalize rounded">
							Login
						</button>
					</Link>
					<Link to="/signup">
						<button className=" bg-red-600 py-1 px-3 mr-2 capitalize rounded font-semibold">
							Signup
						</button>
					</Link>
					{/* <Link to="/profile"><button className="bg-red-600 py-1 px-3 mr-2 capitalize">Profile</button></Link> */}
				</div>
			)}
		</div>
	);
}

export default Navbar;
