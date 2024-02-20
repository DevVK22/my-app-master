export const SET_MOVIES = 'SET_MOVIES';
export const SELECT_MOVIE = 'SELECT_MOVIE';
export const SET_ORDER_BY = 'SET_ORDER_BY';
export const SET_FILTER = 'SET_FILTER';

export const setMovies = (movies) => ({
	type: SET_MOVIES,
	payload: movies,
});

export const selectMovie = (movie) => ({
	type: SELECT_MOVIE,
	payload: movie,
});

export const setOrderBy = (orderBy) => ({
	type: SET_ORDER_BY,
	payload: orderBy,
});

export const setFilter = (filter) => ({
	type: SET_FILTER,
	payload: filter,
});
