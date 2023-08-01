import React, { useEffect } from 'react';
import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Avatar } from 'primereact/avatar';
import defaultProfile from '../images/defaultProfile.svg';
const ProfileInfo = () => {
	const { user, isAuthenticated, isLoading } = useAuth0();
	const [profileImage, setProfileImage] = useState('');

	useEffect(() => {
		if (user.image) {
			setProfileImage(user.Image);
		} else {
			setProfileImage(defaultProfile);
		}
	}, []);

	if (isLoading) {
		return <div>Loading ...</div>;
	}

	return (
		isAuthenticated && (
			<div className="flex justify-content-center align-items-center gap-1 text-xs text-primary">
				<Avatar image={profileImage} />
				<h2>{user.name}</h2>
			</div>
		)
	);
};

export default ProfileInfo;
