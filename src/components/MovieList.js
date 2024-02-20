import { getFilteredMovies } from '../reducers/reducers';
import './MovieList.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectMovie } from '../actions/actions';

const MovieList = () => {
	const dispatch = useDispatch();
	const movies = useSelector(getFilteredMovies);
	const orderBy = useSelector((state) => state.orderBy);

	const handleClick = (movie) => {
		dispatch(selectMovie(movie));
	};

	const sortedMovies = [...movies].sort((a, b) => {
		if (orderBy === 'year') {
			return a.release_date.localeCompare(b.release_date);
		} else if (orderBy === 'episode') {
			return a.episode_id - b.episode_id;
		}
		return 0;
	});

	return (
		<div className='movie-list'>
			{sortedMovies.map((movie) => (
				<div
					key={movie.episode_id}
					className='movie'
					onClick={() => handleClick(movie)}
				>
					{movie.title}
				</div>
			))}
		</div>
	);
};

export default MovieList;
