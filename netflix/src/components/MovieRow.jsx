import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieItem from "./MovieItem";

function MovieRow({ title, url }) {
	const [movies, setMovies] = useState([]);
	useEffect(() => {
		axios.get(url).then((response) => setMovies(response.data.results));
	}, [url]);
	console.log(movies, "Hi");
	return (
		<div>
			<h1 className="capitalize font-bold text-lg p-4">{title}</h1>
			<div className=" flex  flex-none  overflow-x-scroll space-x-2 py-4 scrollbar-hide px-4">
				{movies.map((movie) => {
					return <MovieItem key={movie.id} movie={movie} />;
				})}
			</div>
		</div>
	);
}

export default MovieRow;
