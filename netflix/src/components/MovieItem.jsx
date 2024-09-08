import React, { useState, useEffect } from "react";
import { createImageUrl } from "../services/movieServices";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { PiPlay, PiPlayBold } from "react-icons/pi";
import { arrayUnion, doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "../services/firebase";
import { UserAuth } from "../context/AuthContextProvider";

function MovieItem({ movie }) {
	const { user } = UserAuth();
	const [like, setLike] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			const isFavourite = await isFav(movie);
			setLike(isFavourite);
		};
		fetchData();
	}, [movie]); // Trigger re-fetch when movie changes

	const markFavShow = async () => {
		const userEmail = user?.email;
		if (!userEmail) {
			alert("Login to save");
			return;
		}
		const userDoc = doc(db, "users", userEmail);
		setLike(!like); // Update state immediately for user feedback
		await updateDoc(userDoc, {
			favs: arrayUnion({ ...movie }),
		});
	};

	const isFav = async (movie) => {
		const userEmail = user?.email;
		try {
			if (userEmail) {
				const userDoc = doc(db, "users", userEmail);
				const userSnap = await getDoc(userDoc);
				if (userSnap.exists) {
					const userData = userSnap.data();
					if (userData.favs) {
						const isFavorite = userData.favs.some(
							(fav) => fav.title === movie.title
						);
						return isFavorite;
					}
				}
			}
		} catch (err) {
			console.error(err);
			return false;
		}
		return false;
	};

	return (
		<>
			<div className=" relative  flex flex-none flex-col rounded">
				<div className="">
					<div className="w-72">
						<img
							className=" w-72 rounded mb-2 object-cover "
							src={createImageUrl(movie.backdrop_path, "original")}
							alt={movie.title}
						></img>
					</div>
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
					{isFav ? (
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
