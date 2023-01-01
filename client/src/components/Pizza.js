import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Pizza = () => {
	const { pizzaId } = useParams();
	const [pizza, setPizza] = useState(null);

	useEffect(() => {
		fetch(`/pizzas/${pizzaId}`)
			.then((res) => res.json())
			.then((data) => {
				setPizza(data.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<>
			{!pizza ? (
				<h2>Loading</h2>
			) : (
				<div className='text-2xl grid h-screen place-items-center'>
					<div className='flex flex-row'>
						<img className='rounded-xl' src={pizza.src} alt='pizza' />
						<div className='flex flex-col justify-evenly items-center rounded-xl bg-gray-900 text-white uppercase'>
							<p>{pizza.name}</p>
							<p>{pizza.description}</p>
							<p>{pizza.toppings}</p>
						</div>
            
					</div>

					<div className='grid grid-cols-2 rounded-xl bg-gray-900 text-white uppercase p-10'>
						<p>Small:&nbsp;{pizza.price['Small']}</p>
						<p>Medium:&nbsp;{pizza.price['Medium']}</p>
						<p>Large:&nbsp;{pizza.price['Large']}</p>
						<p>X-Large:&nbsp;{pizza.price['X-Large']}</p>
					</div>
				</div>
			)}
		</>
	);
};

export default Pizza;
