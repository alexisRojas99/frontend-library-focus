import { useState } from "react";
import { AuthProvider } from "./context/AuthContext";
import MainRouter from "./router/MainRouter";

document.body.style.backgroundColor = "#f9fafb";

function App() {

	return (
		<div className="App">
			<AuthProvider>
				<MainRouter />
			</AuthProvider>
		</div>
	);
}

export default App;
