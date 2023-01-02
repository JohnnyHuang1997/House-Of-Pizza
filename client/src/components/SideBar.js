import { AiOutlineHome, AiOutlineShoppingCart } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import styled from "styled-components";

const SideBar = () => {
	return (
		<div className=' w-screen m-0 h-20 flex flex-row bg-gray-900 text-white shadow-lg justify-center items-center gap-10'>
      
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
  background-color: skyblue;
  border-radius: 15px;
  width: fit-content;
  color: darkblue;
}
`;