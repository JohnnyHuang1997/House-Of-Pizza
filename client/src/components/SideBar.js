import { AiOutlineHome, AiOutlineShoppingCart } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import styled from "styled-components";

const SideBar = () => {
	return (
		<div className='fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg justify-center items-center gap-7'>
			<Link to='/'>
				<AiOutlineHome style={{ width: '50px', height: '50px' }} />
			</Link>
			<Link to='/order'>
				<AiOutlineShoppingCart style={{ width: '50px', height: '50px' }} />
			</Link>
		</div>
	);
};

export default SideBar;

const Link = styled(NavLink)`
&:hover  {
  background-color: lightgreen;
  border-radius: 15px;
  width: fit-content;
}
`;