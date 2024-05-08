import React, { useState } from "react";
import { createImageUrl } from "../services/movieServices";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { PiPlay, PiPlayBold } from "react-icons/pi";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../services/firebase";
import { UserAuth } from "../context/AuthContextProvider";

function MovieItem({ movie }) {
	const [like, setLike] = useState(false);
	const { title, backdrop_path } = movie;
	const { user } = UserAuth();
	const markFavShow = async () => {
		const userEmail = user?.email;
		if (userEmail) {
			const userDoc = doc(db, "users", userEmail);
			setLike(!like);
			await updateDoc(userDoc, {
				favs: arrayUnion({ ...movie }),
			});
		} else {
			alert("Login to save");
		}
	};

	return (
		<>
			<div className=" relative  flex flex-none flex-col rounded">
				<div className="">
					<img
						className=" w-72 rounded mb-2 "
						src={createImageUrl(backdrop_path, "original")}
						alt={title}
					></img>
					<p className="absolute left-32 top-16 opacity-25 hover:opacity-100">
						<PiPlayBold size={32} color="white" className="" />
					</p>
				</div>
				<div className=" ">
					<h1 className=" font-semibold">{movie.title}</h1>
				</div>
				<p
					onClick={markFavShow}
					className=" absolute top-0 right-0 mr-2 mt-2  "
				>
					{like ? (
						<FaHeart
							onClick={() => setLike(false)}
							className=" opacity-0 hover:text-xl hover:opacity-100"
						/>
					) : (
						<FaRegHeart
							onClick={() => setLike(true)}
							className=" opacity-0 hover:text-xl hover:opacity-100"
						/>
					)}
				</p>
			</div>
		</>
	);
}

export default MovieItem;
