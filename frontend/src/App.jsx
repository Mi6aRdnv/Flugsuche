import { useState } from "react";
import "./App.css";
import Logo from "./assets/logo.svg?react"; // Testing importing SVG as a React component

function App() {
	console.log(import.meta.env.VITE_TEST_VAR); // This will log the test value from the .env file
	return (
		<>
			<Logo /> {/* Testing displaying the imported SVG as a React component */}
		</>
	);
}

export default App;
