import React from "react";
import "./chatsHistoryHeader.scss";

export const ChatsHistoryHeader = () => {
	return (
		<div className="chats-history-header">
			<button className="chats-history-header__new-chat-button button-background-hover button-style">
				<img src="@img/icons/plus.png" alt="" className="chats-history-header__new-chat-icon"/>
			</button>
		</div>
	)
}