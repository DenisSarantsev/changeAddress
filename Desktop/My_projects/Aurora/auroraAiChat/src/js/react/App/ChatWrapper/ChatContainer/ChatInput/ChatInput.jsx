import React from "react";
import "./chatInput.scss";

export const ChatInput = () => {
	return (
		<div className="chat-input">
			<div className="chat-input__wrapper">
				<input type="text" className="chat-input__input"/>
				<button className="chat-input__send-button">
					<img src="@img/icons/send.png" alt="send icon" className="chat-input__send-icon"/>
				</button>
			</div>
		</div>
	)
}