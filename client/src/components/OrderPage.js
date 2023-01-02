import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const OrderPage = () => {
	const navigate = useNavigate();

	const [formData, setFormData] = useState({});
	const [order, setOrder] = useState(null);
	const [pizza, setPizza] = useState(null);
	const [pizzaCost, setPizzaCost] = useState(null);

	useEffect(() => {
		fetch('/pizzas')
			.then((res) => res.json())
			.then((data) => {
				setPizza(data.data);
				// console.log(data)
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const handleChange = (key, value) => {
		const selected = pizza.find((obj) => {
			return obj.name === value;
		});
		setPizzaCost(selected);

		setFormData({
			...formData,
			[key]: value,
		});
	};

	const onSubmit = (e) => {
		e.preventDefault();
		fetch('/orders', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ order: formData }),
		})
			.then((res) => res.json())
			.then((order) => {
				setOrder(order.data);
				navigate(`/confirm/${order.data.id}`);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<>
			{!pizza ? (
				<h2>Loading</h2>
			) : (
				<div className='flex flex-col justify-center items-center bg-gray-800 text-white uppercase h-screen'>
					<h2 className='p-5 text-3xl'>Time to order!</h2>
					<form
						className='flex flex-col justify-center items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
						onSubmit={onSubmit}
					>
						<label htmlFor='fname'>First Name: </label>
						<input
							className='px-7'
							type='text'
							id='fname'
							onChange={(e) => handleChange(e.target.id, e.target.value)}
						/>

						<label htmlFor='lname'>Last Name: </label>
						<input
							className='px-7'
							type='text'
							id='lname'
							onChange={(e) => handleChange(e.target.id, e.target.value)}
						/>

						<label htmlFor='email'>Email: </label>
						<input
							className='px-7'
							type='text'
							id='email'
							onChange={(e) => handleChange(e.target.id, e.target.value)}
						/>

						<label htmlFor='address'>Address: </label>
						<input
							className='px-7'
							type='text'
							id='address'
							onChange={(e) => handleChange(e.target.id, e.target.value)}
						/>

						<label htmlFor='phone'>Phone Number: </label>
						<input
							className='px-7'
							type='text'
							id='phone'
							onChange={(e) => handleChange(e.target.id, e.target.value)}
						/>
						<div className='flex flex-col justify-center items-center border-solid border-2 border-white my-5 rounded-md uppercase'>
							<label htmlFor='pizza'>Your pick: </label>
							<select
								className='px-7'
								type='text'
								id='pizza'
								onChange={(e) => handleChange(e.target.id, e.target.value)}
							>
								<option>Pick your poison!</option>
								{pizza.map((item) => {
									return <Option key={item.id}>{item.name}</Option>;
								})}
							</select>

							{pizzaCost && (
								<>
									{Object.keys(pizzaCost.price).map((cost) => {
										return (
											<div
												className='flex flex-row justify-center items-center uppercase text-center'
												key={cost.id}
											>
												<input
													type='radio'
													id='price'
													value={pizzaCost.price[cost]}
													onChange={(e) =>
														handleChange(e.target.id, e.target.value)
													}
												/>
												<label htmlFor='price'>{pizzaCost.price[cost]}</label>
												&nbsp;&nbsp;
												<label>{cost}</label>
											</div>
										);
									})}
								</>
							)}
						</div>
						<div>
							<button
								className='p-2 rounded-md border-solid border-2 border-white uppercase hover:text-sky-500 hover:border-sky-500'
								type='submit'
							>
								buy now
							</button>
						</div>
					</form>
				</div>
			)}
		</>
	);
};

export default OrderPage;

const Option = styled.option`
	background-color: red;
	color: black;
`;
