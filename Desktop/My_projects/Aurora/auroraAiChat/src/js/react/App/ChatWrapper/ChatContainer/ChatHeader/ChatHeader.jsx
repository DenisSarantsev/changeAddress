import React from "react";
import "./chatHeader.scss";

export const ChatHeader = () => {
	return (
		<div className="chat-header">
			<img src="@img/logo.svg" className="chat-header__logo-image" alt="logo aurora"/>
			<div className="chat-header__user-info">
				<div className="chat-header__user-name">
					Денис
				</div>
				<img src="@img/icons/user.png" alt="user icon" className="chat-header__user-icon"/>
			</div>
		</div>
	)
}