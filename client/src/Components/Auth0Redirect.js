import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Auth0Redirect({ children }) {
	const { isLoading, isAuthenticated } = useAuth0();
	const navigate = useNavigate();

	useEffect(() => {
		if (!isLoading && isAuthenticated) {
			navigate('/dashboard');
		}
	}, [isLoading, isAuthenticated, navigate]);

	return <>{children}</>;
}

export default Auth0Redirect;
