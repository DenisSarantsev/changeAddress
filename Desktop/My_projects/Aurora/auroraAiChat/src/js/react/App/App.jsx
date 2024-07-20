import React from "react";
import "./app.scss";

// Підключаємо компоненти
import { ChatLogin } from "./ChatLogin/ChatLogin.jsx";
import { ChatWrapper } from "./ChatWrapper/ChatWrapper.jsx";

export const App = () => (
	<div className="app">
		<ChatLogin/>
		<ChatWrapper/>
	</div>
);