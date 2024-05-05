import React from "react";
import './app.scss';
import { Header } from "./header/Header.jsx";
import { Main } from "./main/Main.jsx";
import { Footer } from "./footer/Footer.jsx"


export const App = () => (
	<div className="app">
		<Header />
		<Main />
		<Footer />
	</div>
);

