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
import ProfileViewLibrarian from "../views/Librarian/Profile/ProfileView";
import PrivateRoutesLibrarian from "./private/librarian/PrivateRoutesLibrarian";
import HomeLibrarianView from "../views/Librarian/Home/HomeLibrarianView";
import LayoutLibrarian from "../Layouts/LayoutLibrarian";
import NotFoundView from "../views/Auth/NotFoundView";
import RecordsLibrarianView from "../views/Librarian/Records/RecordsLibrarianView";

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
				<Route path="/librarian" element={<PrivateRoutesLibrarian />}>
					<Route
						index
						element={
							<LayoutLibrarian>
								<HomeLibrarianView />
							</LayoutLibrarian>
						}
					/>
					<Route
						path="/librarian/profile"
						element={
							<LayoutLibrarian>
								<ProfileViewLibrarian />
							</LayoutLibrarian>
						}
					/>
					<Route
						path="/librarian/records"
						element={
							<LayoutLibrarian>
								<RecordsLibrarianView />
							</LayoutLibrarian>
						}
					/>
				</Route>
				<Route path="/login" element={<PublicRoutes />}>
					<Route index element={<LoginView />} />
				</Route>
				<Route path="*" element={<NotFoundView />} />
			</Routes>
		</BrowserRouter>
	);
};

export default MainRouter;
