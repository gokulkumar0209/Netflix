import React from "react";
import Hero from "../components/Hero";
import MovieRow from "../components/MovieRow";
import endpoints from "../services/movieServices";

function Home() {
	return (
		<div>
			<Hero></Hero>
			<MovieRow title="upcoming" url={endpoints.upcoming}></MovieRow>
			<MovieRow title="trending" url={endpoints.trending}></MovieRow>
			<MovieRow title="popular" url={endpoints.popular}></MovieRow>
			<MovieRow title="comedy" url={endpoints.comedy}></MovieRow>
			<MovieRow title="toprated" url={endpoints.topRated}></MovieRow>
		</div>
	);
}

export default Home;
