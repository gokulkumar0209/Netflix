import React, { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { UserAuth } from "../context/AuthContextProvider";
import { db } from "../services/firebase";
import { createImageUrl } from "../services/movieServices";
import { arrayRemove, doc, onSnapshot, updateDoc } from "firebase/firestore";
import MovieItem from "../components/MovieItem";
import { PiPlayBold } from "react-icons/pi";

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

	const slide = (offset) => {
		const slider = document.getElementById("slider");
		slider.scrollLeft = slider.scrollLeft + offset;
	};
	const handleUnlike = async (movie) => {
		const userDoc = doc(db, "users", user.email);
		await updateDoc(userDoc, {
			favs: arrayRemove(movie),
		});
	};
	console.log(movies);
	return (
		<>
			<div>
				<div>
					<img
						className="h-3/5 w-3/5 "
						src="https://images7.alphacoders.com/115/1152297.jpg"
						alt=""
					/>
					<div className="bg-black/60 fixed top-0 left-0 w-full h-full"></div>
					<div className="absolute top-[20%] p-4 md-p-8">
						<div className="text-3xl ms:text-5xl font-bold my-2">
							<h1>My Shows</h1>
							<p className="text-lg text-gray-400">{user.email}</p>
						</div>
					</div>
				</div>
				<div className="relative">
					<MdChevronLeft
						onClick={() => slide(-500)}
						className="absolute top-1/2 z-10 -left-4 transform -translate-y-1/2 opacity-20 hover:opacity-90"
						size={100}
					/>
					<div
						className="flex flex-none overflow-x-scroll space-x-2 py-4 scrollbar-hide"
						id="slider"
					>
						{movies.map((movie) => (
							<div
								className="relative flex flex-none flex-col rounded"
								key={movie.title}
							>
								<div>
									<img
										className="w-72 rounded mb-2"
										src={createImageUrl(movie.backdrop_path, "original")}
										alt={movie.title}
									/>
									<p className="absolute left-32 top-16 opacity-25 hover:opacity-100">
										<PiPlayBold size={32} color="white" />
									</p>
									<p className="absolute top-2 right-2">
										<AiOutlineClose
											onClick={() => handleUnlike(movie)}
										></AiOutlineClose>
									</p>
								</div>
								<div>
									<h1 className="font-semibold">{movie.title}</h1>
								</div>
							</div>
						))}
					</div>
					<MdChevronRight
						onClick={() => slide(500)}
						className="absolute top-1/2 z-10 transform -translate-y-1/2 -right-4 opacity-20 hover:opacity-90"
						size={100}
					/>
				</div>
			</div>
		</>
	);
}

export default Profile;
