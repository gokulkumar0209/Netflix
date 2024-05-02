import React, { useState } from "react";

function Login() {
	const [rememberLogin, setRememberLogin] = useState(true);
	return (
		<>
			<div className="relative w-full h-screen">
				<img
					className="absolute inset-0 w-full h-full object-cover"
					src="https://assets.nflxext.com/ffe/siteui/vlv3/4d7bb476-6d8b-4c49-a8c3-7739fddd135c/deecf71d-7a47-4739-9e1a-31b6b0d55be7/IN-en-20240429-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
					alt="Background Image"
				/>
				<div className="absolute inset-0 bg-black opacity-70"></div>
				<div
					className="absolute left-1/2 top-1/2 transform 
				-translate-x-1/2 -translate-y-1/2  bg-black bg-opacity-40 p-10 rounded-lg
				 border-white border-2 w-96 h-96"
				>
					<div className="flex items-center justify-center w-32 ">
						<h1 className=" capitalize text-2xl font-bold mb-2 ">Sign In</h1>
					</div>
					<form>
						<div className=" text-center">
							<input
								className=" mb-2 w-64 h-8 rounded items-center justify-center"
								type="email"
							></input>
							<input
								className="mb-2 w-64 h-8 rounded"
								type="password"
								placeholder="Password"
							></input>
						</div>
						<div className="text-center">
							<button className=" bg-red-700 w-64 h-8 rounded mb-2">
								Submit
							</button>
						</div>
						<div className=" ml-6 flex justify-between text-center w-64">
							<p >
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
				</div>
			</div>
		</>
	);
}

export default Login;
