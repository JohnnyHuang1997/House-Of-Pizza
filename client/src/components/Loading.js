// import styled from 'styled-components';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const Loading = () => {
	return (
		<>
			<div className='flex justify-center items-center h-screen animate-spin'>
				<AiOutlineLoading3Quarters
        className='animate-spin'
					style={{ width: '200px', height: '200px' }}
				/>
			</div>
		</>
	);
};

export default Loading;
