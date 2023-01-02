import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ConfirmationPage = () => {
	const [orderData, setOrderData] = useState(null);

	const { orderId } = useParams();

	useEffect(() => {
		fetch(`/orders/${orderId}`)
			.then((res) => res.json())
			.then((data) => {
				setOrderData(data.data);
			});
	}, []);

	return (
		<>
			{!orderData ? (
				<h2>Loading</h2>
			) : (
				<div>
					<h2>Your confirmation</h2>
					<div>
						<h2>
							Name: {orderData.name}
							Email: {orderData.email}
							Phone: {orderData.phone}
							Address: {orderData.address}
							<div>
								<h2>
									{orderData.pizza} {orderData.price}
								</h2>
								<h2>Confirmation id: {orderData.id}</h2>
							</div>
						</h2>
					</div>
				</div>
			)}
		</>
	);
};

export default ConfirmationPage;
