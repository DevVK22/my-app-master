import React from 'react';
import { useDispatch } from 'react-redux';
import { setOrderBy } from '../actions/actions';
import './OrderingSelect.css';

const OrderingSelect = () => {
	const dispatch = useDispatch();

	const handleChange = (e) => {
		dispatch(setOrderBy(e.target.value));
	};

	return (
		<div className='ordering-select'>
			<select onChange={handleChange}>
				<option value='year'>Order by Year</option>
				<option value='episode_id'>Order by Episode</option>
			</select>
		</div>
	);
};

export default OrderingSelect;
