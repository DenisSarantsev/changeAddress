import React from "react";
import "./chatWrapper.scss";
import { ChatsHistory } from "./ChatsHistory/ChatsHistory.jsx";
import { ChatContainer } from "./ChatContainer/ChatContainer.jsx";

export const ChatWrapper = () => {
	return (
		<div className="chat-wrapper">
			<button className="chat-wrapper__sidebar-button sidebar-button button-background-hover button-style">
				<img src="@img/icons/arrow.png" className="sidebar-button__image" alt="arrow open sidebar button"/>
			</button>
			<ChatsHistory/>
			<ChatContainer/>
		</div>
	)
}