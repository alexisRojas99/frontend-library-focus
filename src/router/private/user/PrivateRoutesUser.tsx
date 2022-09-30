import { Navigate, Outlet } from "react-router-dom";
import SpinnerAnimation from "../../../components/animations/SpinnerAnimation";
import { AuthContext } from "../../../context/AuthContext";
import { useContext } from "react";

const PrivateRoutesUser = () => {
	const { setAuthToken, setIsLoading, authToken, isLoading, user } = useContext(AuthContext);
	const dataUser = user as any;

	return (
		<>
			{isLoading ? (
				<>
					<SpinnerAnimation />
				</>
			) : (
				<>{dataUser?.roles[0] === "ROLE_SUPER_ADMIN" ? <Outlet /> : <Navigate to={"/login"} />}</>
			)}
		</>
	);
};

export default PrivateRoutesUser;
