import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Auth0Redirect from './Components/Auth0Redirect';

const root = createRoot(document.getElementById('root'));

root.render(
	<Auth0Provider
		domain="stockwise.uk.auth0.com"
		clientId="iHPe9JXljjxsJwWyRUeCVC3T6NL6T8I9"
		authorizationParams={{
			redirect_uri: window.location.origin,
		}}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Auth0Provider>
);
