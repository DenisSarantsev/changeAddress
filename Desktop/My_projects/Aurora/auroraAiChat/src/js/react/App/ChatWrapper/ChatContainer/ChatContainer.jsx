import React from "react";
import "./chatContainer.scss";

// Підключаємо компоненти
import { ChatHeader } from "./ChatHeader/ChatHeader.jsx";
import { ChatBody } from "./ChatBody/ChatBody.jsx";
import { ChatInput } from "./ChatInput/ChatInput.jsx";

export const ChatContainer = () => {
	return (
		<div className="chat-container">
			<ChatHeader/>
			<ChatBody/>
			<ChatInput/>
		</div>
	)
}