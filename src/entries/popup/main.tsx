import React from "react";
import ReactDOM from "react-dom/client";
import "../enableDevHmr";
import App from "./App";
import "./globals.css";
ReactDOM.createRoot(document.getElementById("app") as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
