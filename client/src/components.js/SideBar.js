import { AiOutlineHome, AiOutlineShoppingCart } from 'react-icons/ai';

const SideBar = () => {
	return (
		<div className='fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg justify-center items-center gap-7'>
			<AiOutlineHome style={{ width: '50px', height: '50px'}} />
			<AiOutlineShoppingCart style={{ width: '50px', height: '50px' }} />
		</div>
	);
};

export default SideBar;
