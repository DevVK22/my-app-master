import React from 'react';
import { useSelector } from 'react-redux';

const MovieDetails = () => {
	const selectedMovie = useSelector(
		(state) => state.selectedMovie
	);

	return (
		<div className='movie-details'>
			{selectedMovie ? (
				<>
					<h2>{selectedMovie.title}</h2>
					<p>Episode: {selectedMovie.episode_id}</p>
					<p>Director: {selectedMovie.director}</p>
					<p>Release Date: {selectedMovie.release_date}</p>
					<p>
						Opening Crawl: {selectedMovie.opening_crawl}
					</p>
				</>
			) : (
				<p>Please select a movie</p>
			)}
		</div>
	);
};

export default MovieDetails;
