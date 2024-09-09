import React, { useState, useEffect } from "react";
import { createImageUrl } from "../services/movieServices";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { PiPlayBold } from "react-icons/pi";
import { arrayUnion, arrayRemove, doc, updateDoc, getDoc } from "firebase/firestore";
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
	}, [movie]);

	const markFavShow = async () => {
		const userEmail = user?.email;
		if (!userEmail) {
			alert("Login to save");
			return;
		}
		const userDoc = doc(db, "users", userEmail);
		try {
			await updateDoc(userDoc, {
				favs: arrayUnion({ ...movie }),
			});
			setLike(true);
		} catch (error) {
			console.error("Error updating favorite movie:", error);
		}
	};

	const removeFavShow = async () => {
		const userEmail = user?.email;
		if (!userEmail) {
			alert("Login to remove");
			return;
		}
		const userDoc = doc(db, "users", userEmail);
		try {
			await updateDoc(userDoc, {
				favs: arrayRemove({ ...movie }),
			});
			setLike(false);
		} catch (error) {
			console.error("Error removing favorite movie:", error);
		}
	};

	const isFav = async (movie) => {
		const userEmail = user?.email;
		try {
			if (userEmail) {
				const userDoc = doc(db, "users", userEmail);
				const userSnap = await getDoc(userDoc);
				if (userSnap.exists()) {
					const userData = userSnap.data();
					if (userData.favs) {
						return userData.favs.some((fav) => fav.title === movie.title);
					}
				}
			}
		} catch (err) {
			console.error(err);
		}
		return false;
	};

	return (
		<div className="relative flex flex-none flex-col rounded group overflow-hidden">
			<div className="relative w-72 h-40">
				<img
					className="w-full h-full object-cover  group-hover:scale-110"
					src={createImageUrl(movie.backdrop_path, "original")}
					alt={movie.title}
				/>
				<p className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-25 group-hover:opacity-100">
					<PiPlayBold size={32} color="white" />
				</p>
			</div>
			<div className="p-2">
				<h1 className="font-semibold text-center">{movie.title}</h1>
			</div>
			<p
				onClick={like ? removeFavShow : markFavShow}
				className="absolute top-2 right-2 cursor-pointer opacity-0 group-hover:opacity-100"
			>
				{like ? (
					<FaHeart size={24} color="red" />
				) : (
					<FaRegHeart size={24} />
				)}
			</p>
		</div>
	);
}

export default MovieItem;
