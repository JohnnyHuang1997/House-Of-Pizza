import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Loading from './Loading';
import {AiOutlineHome} from 'react-icons/ai'

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
				<h2><Loading/></h2>
			) : (
				<div className='flex flex-col justify-center items-center h-screen leading-10'>
					<h2 className='uppercase text-2xl'>Your confirmation</h2>
					<div className=' p-5 bg-gray-900 text-white'>
						<h2 className='uppercase'>
							Name: {orderData.fname}&nbsp;{orderData.lname}<br/>
							Email: {orderData.email}<br/>
							Phone: {orderData.phone}<br/>
							Address: {orderData.address}<br/>
							Pizza: {orderData.pizza} <span className='text-sky-500 border-2 border-solid border-sky-500'>{orderData.price}</span><br/>
							Confirmation id: <span className='text-sky-500'>{orderData.id}</span>
						</h2>
					</div>
          <div className=' text-white bg-gray-900 my-5 p-3 rounded-md hover:text-sky-500'>
            <Link to="/"><AiOutlineHome style={{width:"30px", height:"30px"}}/></Link>
          </div>
				</div>
			)}
		</>
	);
};

export default ConfirmationPage;
