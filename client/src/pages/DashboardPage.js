import { useAuth0 } from '@auth0/auth0-react';
import { set } from 'mongoose';
import { useState } from 'react';
import Sidebar from '../Components/Sidebar';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function DashboardPage() {
	const { user, isAuthenticated, isLoading } = useAuth0();
	const { userName, setUserName } = useState('');

	return (
		<div className="flex flex-column m-0 w-screen ">
			<Header />
			<div className="flex text-primary m-0">
				<Sidebar className="m-0" />
				<div className="flex text-primary align-items-start m-3">
					<h2>Welcome Back,</h2>
					{isAuthenticated && <h2>{user.name}</h2>}
					{isLoading && <h2>Loading...</h2>}
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default DashboardPage;
