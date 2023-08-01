import './App.css';
import { Routes, Route } from 'react-router-dom';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import '/node_modules/primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import PrimeReact from 'primereact/api';
import LandingPage from './pages/LandingPage';
import { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import DashboardPage from './pages/DashboardPage';
import ScanSoldStockPage from './pages/ScanSoldStockPage';

function App() {
	PrimeReact.ripple = true;
	const { user, isLoading } = useAuth0();
	const [userID, setUserID] = useState('');

	try {
		useEffect(() => {
			if (isLoading) {
				console.log('User Loading');
			} else if (!isLoading && user) {
				const { sub } = user;
				setUserID(sub);
			}
		});
	} catch {
		console.log('Error, no user found');
	}

	return (
		<div className="App flex-column max-w-100">
			<Routes>
				<Route
					path="/"
					element={<LandingPage userID={userID} />}
				/>
				<Route
					path="/dashboard"
					element={<DashboardPage />}
				/>
				<Route
					path="/scanStockOut"
					element={<ScanSoldStockPage />}
				/>
			</Routes>
		</div>
	);
}

export default App;
