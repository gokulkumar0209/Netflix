import axios from "axios";
import React, { useEffect, useState } from "react";
import endpoints, { createImageUrl } from "../services/movieServices";

function Hero() {
	const [movie1, setMovie1] = useState({});
	const [movie2, setMovie2] = useState({});
	useEffect(() => {
		axios.get(endpoints.popular).then((response) => {
			const movies = response.data.results;
			const randomMovie1 = movies[Math.floor(Math.random() * movies.length)];
			const randomMovie2 = movies[Math.floor(Math.random() * movies.length)];
			console.log(randomMovie1);
			setMovie1(randomMovie1);
			setMovie2(randomMovie2);
		});
	}, []);
	if (!movie1) {
		return (
			<>
				<p>Fetching Movie</p>
			</>
		);
	}

	return (
		<div className="relative w-full h-[550px] lg:h-[850px]">
			<div className="w-full h-full relative">
				<div className="absolute inset-0 bg-gradient-to-r from-black">
					<img
						className="w-full h-full object-cover object-top"
						src={createImageUrl(movie1.backdrop_path, "original")}
						alt={movie1.title}
					></img>
					<div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
						<h1 className="text-3xl lg:text-5xl font-bold mb-4">
							{movie1.title}
						</h1>
						<div className="flex justify-center mb-6">
							<button className="mr-4 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
								Play
							</button>
							<button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">
								Watch Later
							</button>
						</div>
						<p className="text-sm mb-2">{movie1.release_date}</p>
						<p className="text-sm max-w-md mx-auto">{movie1.overview}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
