import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import SpinnerAnimation from '../../../components/animations/SpinnerAnimation';
import { AuthContext } from '../../../context/AuthContext';

const PrivateRoutesLibrarian = () => {
    const { setAuthToken, setIsLoading, authToken, isLoading, user } = useContext(AuthContext);
	const dataUser = user as any;

	return (
		<>
			{isLoading ? (
				<>
					<SpinnerAnimation />
				</>
			) : (
				<>{dataUser?.roles[0] === "ROLE_LIBRARIAN" ? <Outlet /> : <Navigate to={"/login"} />}</>
			)}
		</>
	);
}

export default PrivateRoutesLibrarian