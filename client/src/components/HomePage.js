import banner from '../assets/shokugeki.jpeg';
import styled from 'styled-components';

const HomePage = () => {
	return (
		<div className='flex flex-col'>
			<div className='flex justify-center items-center'>
				<Banner src={banner} alt='banner' />
			</div>
		</div>
	);
};

export default HomePage;

const Banner = styled.img`
	object-fit: contain;
	height: 30vh;
	width: 1000px;
`;
