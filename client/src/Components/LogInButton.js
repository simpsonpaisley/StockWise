import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'primereact/button';

const LogInButton = () => {
	const { loginWithRedirect } = useAuth0();

	return (
		<Button
			label="Log In"
			text
			onClick={() => loginWithRedirect()}
			aria-label="Log In"></Button>
	);
};

export default LogInButton;
