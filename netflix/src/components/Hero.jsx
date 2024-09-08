import axios from "axios";
import React, { useEffect, useState } from "react";
import endpoints, { createImageUrl } from "../services/movieServices";

function Hero() {
    const [movieDetail, setMovieDetail] = useState(null); 
    const [movies, setMovies] = useState([]);

   
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(endpoints.popular);
                const movies = response.data.results;
                setMovies(movies);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

   
    useEffect(() => {
        const setData = () => {
            if (movies.length > 0) {
                const randomMovie = movies[Math.floor(Math.random() * movies.length)];
                setMovieDetail(randomMovie);
            }
        };

        setData(); 

       
        const intervalId = setInterval(setData, 15000);


        return () => clearInterval(intervalId);
    }, [movies]); 

    if (!movieDetail) {
        return (
            <>
                <p>Fetching Movie...</p>
            </>
        );
    }

    return (
        <div className="relative w-full h-[550px] lg:h-[850px]">
            <div className="w-full h-full relative">
                <div className="absolute inset-0 bg-gradient-to-r from-black">
                    <img
                        className="w-full h-full object-cover object-top"
                        src={createImageUrl(movieDetail.backdrop_path, "original")}
                        alt={movieDetail.title}
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
                        <h1 className="text-3xl lg:text-5xl font-bold mb-4">
                            {movieDetail.title}
                        </h1>
                        <div className="flex justify-center mb-6">
                            <button className="mr-4 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                Play
                            </button>
                            <button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">
                                Watch Later
                            </button>
                        </div>
                        <p className="text-sm mb-2">{movieDetail.release_date}</p>
                        <p className="text-sm max-w-md mx-auto">{movieDetail.overview}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
