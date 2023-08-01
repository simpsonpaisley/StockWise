import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'primereact/button';

const SignUpButton = () => {
	const { loginWithRedirect } = useAuth0();

	return (
		<Button
			className="hover:shadow-none transition-all transition-duration-500 transition-ease-in ml-1 "
			label="Sign Up"
			raised
			onClick={() => loginWithRedirect()}
			aria-label="Sign Up"></Button>
	);
};

export default SignUpButton;
