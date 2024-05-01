import React from "react";
import { createImageUrl } from "../services/movieServices";

function MovieItem({ movie }) {
	return (
		<>
			<div className="  flex flex-none flex-col rounded">
				<img
					className=" w-72 rounded mb-2"
					src={createImageUrl(movie.backdrop_path, "original")}
				></img>

				<div>
					<h1 className=" font-semibold">{movie.title}</h1>
				</div>
			</div>
		</>
	);
}

export default MovieItem;
