import banner from '../assets/shokugeki.jpeg';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

const HomePage = () => {
	const [pizzas, setPizzas] = useState(null);

	useEffect(() => {
		fetch('/pizzas')
			.then((res) => res.json())
			.then((data) => {
				setPizzas(data.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<>
			{!pizzas ? (
				<h1>Loading...</h1>
			) : (
				<div className='flex flex-col justify-center items-center'>
					<div className='flex justify-center items-center flex-col '>
						<Banner src={banner} alt='banner' />
						<h2 className='shadow-lg text-5xl my-3 font-serif text-gray-900 uppercase'>
							House of pizza
						</h2>
						<div className='grid grid-cols-3 justify-center items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10'>
							{pizzas.map((pizzaContent) => {
								return (
									<div
										className='py-5 px-5 flex flex-col justify-center items-center text-center bg-gray-900 rounded-xl'
										key={pizzaContent.id}
									>
										<Image src={pizzaContent.src} alt='pizza content' />
										<p className='text-2xl uppercase text-white'>
											{pizzaContent.name}
											<br />
											{pizzaContent.description}
											<br />
											{pizzaContent.topping}
										</p>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default HomePage;

const Banner = styled.img`
	object-fit: contain;
	height: 30vh;
	width: 100%;
`;

const Image = styled.img`
	width: 800px;
	aspect-ratio: 3/2;
	border-radius: 20px;
`;
