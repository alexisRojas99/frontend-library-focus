import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginView from "../views/Auth/LoginView";
import LayoutStudent from "../Layouts/LayoutStudent";
import PrivateRoutesUser from "./private/user/PrivateRoutesUser";
import PublicRoutes from "./public/PublicRoutes";
import HomeUser from "../views/User/Home/HomeUserView";
import DetailsView from "../views/User/Details/DetailsView";
import HistoryView from "../views/User/History/HistoryView";
import ProfileView from "../views/User/Profile/ProfileView";

const MainRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<PrivateRoutesUser />}>
					<Route
						index
						element={
							<LayoutStudent>
								<HomeUser />
							</LayoutStudent>
						}
					/>
					<Route
						path="/book/:id"
						element={
							<LayoutStudent>
								<DetailsView />
							</LayoutStudent>
						}
					/>
					<Route
						path="/history"
						element={
							<LayoutStudent>
								<HistoryView />
							</LayoutStudent>
						}
					/>
					<Route
						path="/profile"
						element={
							<LayoutStudent>
								<ProfileView />
							</LayoutStudent>
						}
					/>
				</Route>
				<Route path="/login" element={<PublicRoutes />}>
					<Route index element={<LoginView />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default MainRouter;
