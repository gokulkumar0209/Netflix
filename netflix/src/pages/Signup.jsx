import React from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import { useState } from "react";

function Signup() {
	const [rememberLogin, setRememberLogin] = useState(true);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleFormSubmit = (e) => {
		e.preventDefault();
		console.log(email);
		console.log(password);
	};
	return (
		<>
			<div className=" w-full h-screen">
				<img
					className="h-full w-full"
					src="https://assets.nflxext.com/ffe/siteui/vlv3/4d7bb476-6d8b-4c49-a8c3-7739fddd135c/deecf71d-7a47-4739-9e1a-31b6b0d55be7/IN-en-20240429-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
				></img>
				<div className=" bg-black/70 fixed w-full h-screen top-0 left-0"></div>
				<div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
					<h1 className=" capitalize mb-2 text-4xl font-bold">
						Unlimited movies, TV shows and more
					</h1>
					<h2 className=" capitalize mb-2 text-2xl font-semibold">
						Watch anywhere. Cancel anytime
					</h2>
					<h3 className="mb-2 text-xl font-semibold">
						Ready to watch? Enter your to create or restart your membership
					</h3>
					<div className=" inline-block ">
						<form onSubmit={handleFormSubmit}>
							<div>
								<input
									className="rounded h-12 bg-black border-white border-2 pl-2 pr-2 pt-2 pb-2 w-72 mb-2"
									type="email"
									placeholder="Email address"
									autoComplete="email"
									value={email}
									onChange={(e) => {
										setEmail(e.target.value);
									}}
								></input>
							</div>
							<div>
								<input
									className=" rounded h-12 bg-black border-white border-2 pl-2 pr-2 pt-2 pb-2 w-72 mb-2"
									type="password"
									placeholder="Password"
									autoComplete="current-password"
									value={password}
									onChange={(e) => {
										setPassword(e.target.value);
									}}
								></input>
							</div>
							<button className=" bg-red-600 px-2 py-1 rounded w-72 h-8 mb-2">
								Get Started
							</button>
							<div className=" flex justify-between mb-2">
								<p>
									<input
										type="checkbox"
										checked={rememberLogin}
										onChange={(e) => {
											setRememberLogin(!rememberLogin);
										}}
									></input>
									Remember me
								</p>
								<p>Need Help?</p>
							</div>
						</form>
						<div className=" w-48">
							<span className="mr-2 text-gray-300 ">Already subscribed?</span>
							<Link className=" font-semibold" to="/login">
								Login
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div>
				<Hero></Hero>
			</div>
		</>
	);
}

export default Signup;
