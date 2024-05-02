import React, { useState } from "react";
import { createImageUrl } from "../services/movieServices";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { PiPlay, PiPlayBold } from "react-icons/pi";

function MovieItem({ movie }) {
	const [like, setLike] = useState(false);

	return (
		<>
			<div className=" relative  flex flex-none flex-col rounded">
				<div className="">
					<img
						className=" w-72 rounded mb-2 "
						src={createImageUrl(movie.backdrop_path, "original")}
						alt={movie.title}
					></img>
					<p className="absolute left-32 top-16 opacity-25 hover:opacity-100">
						<PiPlayBold size={32} color="white" className="" />
					</p>
				</div>
				<div className=" ">
					<h1 className=" font-semibold">{movie.title}</h1>
				</div>
				<p className=" absolute top-0 right-0 mr-2 mt-2  ">
					{like ? (
						<FaHeart
							onClick={() => setLike(false)}
							className=" hover:text-xl"
						/>
					) : (
						<FaRegHeart
							onClick={() => setLike(true)}
							className="  hover:text-xl"
						/>
					)}
				</p>
			</div>
		</>
	);
}

export default MovieItem;
