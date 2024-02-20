import { combineReducers } from 'redux';
import {
	SET_MOVIES,
	SELECT_MOVIE,
	SET_ORDER_BY,
	SET_FILTER,
} from '../actions/actions';

const moviesReducer = (state = [], action) => {
	switch (action.type) {
		case SET_MOVIES:
			return action.payload;
		default:
			return state;
	}
};

const selectedMovieReducer = (state = null, action) => {
	switch (action.type) {
		case SELECT_MOVIE:
			return action.payload;
		default:
			return state;
	}
};

const orderByReducer = (state = 'year', action) => {
	switch (action.type) {
		case SET_ORDER_BY:
			return action.payload;
		default:
			return state;
	}
};

const filterReducer = (state = '', action) => {
	switch (action.type) {
		case SET_FILTER:
			return action.payload;
		default:
			return state;
	}
};

export const rootReducer = combineReducers({
	movies: moviesReducer,
	selectedMovie: selectedMovieReducer,
	orderBy: orderByReducer,
	filter: filterReducer,
});
export const getFilteredMovies = (state) => {
	const { movies, filter } = state;
	if (!filter) {
		return movies;
	}
	return movies.filter((movie) =>
		movie.title.toLowerCase().includes(filter.toLowerCase())
	);
};
export default rootReducer;
