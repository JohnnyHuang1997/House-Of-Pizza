import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

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
				<div className='bg-gray-800 flex flex-col justify-center items-center h-screen '>
					<div className='flex flex-col justify-center items-center '>
						<img
							className=' my-5 w-6/12	rounded-xl'
							src={pizza.src}
							alt='pizza'
						/>
						<div className='text-white uppercase '>
							<p className='text-center'>
								{pizza.name}
								<br />
								{pizza.description}
								<br />
								{pizza.toppings}
							</p>
						</div>
					</div>

					<div className='border-solid border-2 border-white my-5 grid grid-cols-2 rounded-xl text-white uppercase p-10'>
						<p>Small:&nbsp;{pizza.price['Small']}</p>
						<p>Medium:&nbsp;{pizza.price['Medium']}</p>
						<p>Large:&nbsp;{pizza.price['Large']}</p>
						<p>X-Large:&nbsp;{pizza.price['X-Large']}</p>
					</div>
					<div className=' text-white p-5 rounded-xl hover:text-sky-500 flex flex-row gap-3'>
						<Link to='/order'>Order now</Link>
						<AiOutlineShoppingCart style={{ width: '30px', height: '30px' }} />
					</div>
				</div>
			)}
		</>
	);
};

export default Pizza;
