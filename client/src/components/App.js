import './App.css';
import SideBar from './SideBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import OrderPage from './OrderPage';
import ConfirmationPage from './ConfirmationPage';
import Pizza from './Pizza';

function App() {
	return (
		<BrowserRouter>
			<SideBar />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/order' element={<OrderPage />} />
				<Route path='/pizzas/:pizzaId' element={<Pizza />} />
				<Route path='/confirm/:orderId' element={<ConfirmationPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
