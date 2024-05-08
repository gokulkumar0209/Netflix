import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieItem from "./MovieItem";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

function MovieRow({ title, url }) {
	const rowId = Math.floor(Math.random() * 1000);
	const [movies, setMovies] = useState([]);
	useEffect(() => {
		axios.get(url).then((response) => setMovies(response.data.results));
	}, [url]);
	// console.log(movies, "Hi");
	const slide = (offset) => {
		const slider = document.getElementById("slider" + rowId);
		slider.scrollLeft = slider.scrollLeft + offset;
	};
	return (
		<>
			<h1 className="capitalize font-bold text-lg p-4">{title}</h1>
			<div className=" relative">
				<MdChevronLeft
					onClick={() => slide(-500)}
					className=" absolute top-1/2 z-10 -left-4 transform -translate-y-1/2  opacity-20 hover:opacity-90"
					size={100}
				></MdChevronLeft>

				<div
					className=" flex  flex-none  overflow-x-scroll space-x-2 py-4 scrollbar-hide"
					id={"slider" + rowId}
				>
					{movies.map((movie) => {
						return <MovieItem key={movie.id} movie={movie} />;
					})}
				</div>
				<MdChevronRight
					onClick={() => slide(500)}
					className=" absolute top-1/2 z-10  transform -translate-y-1/2  -right-4 opacity-20 hover:opacity-90"
					size={100}
				></MdChevronRight>
			</div>
		</>
	);
}

export default MovieRow;
