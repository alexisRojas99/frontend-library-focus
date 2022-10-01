import { AuthProvider } from "./context/AuthContext";
import MainRouter from "./router/MainRouter";

function App() {
	if (localStorage.getItem("theme-mode") === "light") {
		document.body.style.backgroundColor = "#f9fafb";
	}

	return (
		<div className="App">
			<AuthProvider>
				<MainRouter />
			</AuthProvider>
		</div>
	);
}

export default App;
