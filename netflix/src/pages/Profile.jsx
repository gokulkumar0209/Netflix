import React, { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { UserAuth } from "../context/AuthContextProvider";
import { db } from "../services/firebase";
import { createImageUrl } from "../services/movieServices";
import { arrayRemove, doc, onSnapshot, updateDoc } from "firebase/firestore";

function Profile() {
	const [movies, setMovies] = useState([]);
	const { user } = UserAuth();
	useEffect(() => {
		if (user) {
			onSnapshot(doc(db, "users", `${user.email}`), (doc) => {
				if (doc.data()) setMovies(doc.data().favs);
			});
		}
	}, [user?.email]);
	console.log(movies);
	return (
		<>
			<div>
				<div>
					<img
						className=" block h-full w-full object-cover"
						src="https://assets.nflxext.com/ffe/siteui/vlv3/4d7bb476-6d8b-4c49-a8c3-7739fddd135c/deecf71d-7a47-4739-9e1a-31b6b0d55be7/IN-en-20240429-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
					></img>
					<div className=" bg-black/60 fixed top-0 left-0 w-full h-full"></div>
					<div className="absolute top-[20%] p-4 md-p-8">
						<div className="text-3xl ms:text-5xl font-bold my-2">
							<h1>My Sows</h1>
							<p className=" text-lg text-gray-400">{user.email}</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Profile;
