import React from "react";
import "./chatsHistory.scss";

// Підключаємо компоненти
import { ChatsHistoryHeader } from "./ChatsHistoryHeader/ChatsHistoryHeader.jsx";
import { ChatsHistoryContent } from "./ChatsHistoryContent/ChatsHistoryContent.jsx";

export const ChatsHistory = () => {
	return (
		<div className="chats-history">
			<ChatsHistoryHeader/>
			< ChatsHistoryContent/>
		</div>
	)
}