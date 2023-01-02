import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Loading from './Loading';

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
				<h2><Loading/></h2>
			) : (
				<div className='bg-gray-800 flex flex-col justify-center items-center h-screen '>
					<div className='border-2 border-solid border-sky-500 '>
						<div className='flex flex-col justify-center items-center '>
							<img
								className=' my-5 w-6/12	rounded-xl'
								src={pizza.src}
								alt='pizza'
							/>
							<div className='text-white uppercase p-5'>
								<p className='text-center'>
									<span className='text-2xl text-sky-500 font-bold'>
										{pizza.name}
									</span>
									<br />
									{pizza.description}
									<br />
									{pizza.toppings}
								</p>
							</div>
						</div>

						<div className=' flex flex-row justify-evenly items-center bg-sky-500 text-gray-900 font-bold uppercase p-5'>
							<p>Small:&nbsp;{pizza.price['Small']}</p>
							<p>Medium:&nbsp;{pizza.price['Medium']}</p>
							<p>Large:&nbsp;{pizza.price['Large']}</p>
							<p>X-Large:&nbsp;{pizza.price['X-Large']}</p>
						</div>
					</div>
					<div className='border-2 border-solid border-sky-500 text-white p-4  hover:text-sky-500 flex flex-row gap-3 my-6'>
						<Link to='/order'>Order now</Link>
						<AiOutlineShoppingCart style={{ width: '30px', height: '30px' }} />
					</div>
				</div>
			)}
		</>
	);
};

export default Pizza;
