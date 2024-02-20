import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMovies } from './actions/actions';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import OrderingSelect from './components/OrderingSelect';
import FilteringInput from './components/FilteringInput';

const App = () => {
	const dispatch = useDispatch();
	const movies = useSelector((state) => state.movies);

	useEffect(() => {
		fetch('https://swapi.dev/api/films/?format=json')
			.then((response) => response.json())
			.then((data) => {
				dispatch(setMovies(data.results));
			})
			.catch((error) =>
				console.log('Error fetching movies:', error)
			);
	}, [dispatch]);

	return (
		<div className='app'>
			<OrderingSelect />
			<FilteringInput />
			<MovieList movies={movies} />
			<MovieDetails />
		</div>
	);
};

export default App;
