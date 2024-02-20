import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../actions/actions';
import './FilteringInput.css';

const FilteringInput = () => {
	const dispatch = useDispatch();

	const handleChange = (e) => {
		dispatch(setFilter(e.target.value));
	};

	return (
		<div className='filtering-input'>
			<input
				type='text'
				placeholder='Filter by name'
				onChange={handleChange}
			/>
		</div>
	);
};

export default FilteringInput;
