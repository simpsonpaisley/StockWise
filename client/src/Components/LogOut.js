import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'primereact/button';

const LogOut = () => {
	const { logout } = useAuth0();

	return (
		<Button
			className="mr-1"
			label="Log Out"
			text
			onClick={() =>
				logout({ logoutParams: { returnTo: window.location.origin } })
			}
			aria-label="Log Out"></Button>
	);
};

export default LogOut;
