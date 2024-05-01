import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Navbar></Navbar>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/login" element={<Login />}></Route>
				<Route path="/signup" element={<Signup />}></Route>
				<Route path="/profile" element={<Profile />}></Route>
			</Routes>
		</>
	);
}

export default App;
