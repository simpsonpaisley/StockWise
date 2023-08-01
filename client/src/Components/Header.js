import logo from '../images/logo.svg';
import LogInButton from './LogInButton';
import LogOut from './LogOut';
import SignUpButton from './SignUpButton';
import { Button } from 'primereact/button';
import { useAuth0 } from '@auth0/auth0-react';
import { useState, useEffect } from 'react';

function Header() {
	const { isAuthenticated } = useAuth0();
	const [scroll, setScroll] = useState(false);

	function handleScroll() {
		const scrolled = window.scrollY > 0;
		setScroll(scrolled);
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	useEffect(() => {
		if (window.scrollY < 1) {
			setScroll(false);
		}
	}, [scroll]);

	return (
		<div
			className={`bg-white min-w-screen flex justify-content-between align-items-center h-6rem p-3 sticky top-0 transition-all transition-duration-200 transition-ease-in  ${
				scroll ? 'shadow-3' : ''
			}`}>
			<a
				href="/"
				className="no-underline">
				<div className="flex justify-content-center align-items-center">
					<img
						src={logo}
						className="w-3rem h-3rem m-2"
						alt=""
						aria-disabled
					/>
					<h1 className="text-primary flex align-items-start">StockWise</h1>
				</div>
			</a>
			{!isAuthenticated && (
				<div className="flex justify-content-center align-items-center mr-1">
					<LogInButton />
					<SignUpButton />
				</div>
			)}
			{isAuthenticated && (
				<div className="flex align-items-center gap-1">
					<a href="/dashboard">
						<Button
							raised
							label="Dashboard"
							aria-label="Dashboard"
							className="hover:shadow-none transition-all transition-duration-500 transition-ease-in ml-1"
						/>
					</a>
					<LogOut />
				</div>
			)}
		</div>
	);
}

export default Header;
