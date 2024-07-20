import React from "react";
import "./chatBody.scss";

export const ChatBody = () => {

/*
	Новые сообщения вставлять сверху, так как они отобажаются реверсивно
*/


	return (
		<div className="chat-body">
			<div className="chat-body__wrapper">

				<div className="chat-body__message-container user-message-container">
					<div className="user-message-container__user-message">
						Текст повідомлення юзера Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
						Quaerat, veritatis quia dicta aliquid autem repudiandae totam amet. 
						Sunt, ipsum reprehenderit? Totam beatae, ipsum assumenda dicta placeat dignissimos 
						neque obcaecati aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
						Animi tenetur temporibus cumque aliquid aut quidem vel praesentium illo in adipisci 
						molestias ad, tempora magni eveniet rerum, repudiandae voluptatum sint ipsa.
					</div>
				</div>

				<div className="chat-body__message-container ai-message-container">
					<div className="ai-message-container__avatar-container">
						<img src="@img/ai-avatar.png" alt="ai avatar image" className="ai-message-container__avatar-image"/>
					</div>
					<div className="ai-message-container__ai-message">
						Текст повідомлення CPU Lorem ipsum dolor sit amet consectetur adipisicing elit. 
						Recusandae quasi numquam rem consequuntur temporibus voluptatibus animi, nostrum, 
						assumenda iusto dolorem quisquam cupiditate at ipsam iste non. Itaque voluptatem nemo natus.
						Lorem ipsum dolor sit amet consectetur adipisicing elit. 
						Recusandae quasi numquam rem consequuntur temporibus voluptatibus animi, nostrum, 
						assumenda iusto dolorem quisquam cupiditate at ipsam iste non. Itaque voluptatem nemo natus.
					</div>
				</div>

				<div className="chat-body__message-container user-message-container">
					<div className="user-message-container__user-message">
						Текст повідомлення юзера Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
						Quaerat, veritatis quia dicta aliquid autem repudiandae totam amet. 
						Sunt, ipsum reprehenderit? Totam beatae, ipsum assumenda dicta placeat dignissimos 
						neque obcaecati aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
						Animi tenetur temporibus cumque aliquid aut quidem vel praesentium illo in adipisci 
						molestias ad, tempora magni eveniet rerum, repudiandae voluptatum sint ipsa.
					</div>
				</div>

				<div className="chat-body__message-container ai-message-container">
					<div className="ai-message-container__avatar-container">
						<img src="@img/ai-avatar.png" alt="ai avatar image" className="ai-message-container__avatar-image"/>
					</div>
					<div className="ai-message-container__ai-message">
						Текст повідомлення CPU Lorem ipsum dolor sit amet consectetur adipisicing elit. 
						Recusandae quasi numquam rem consequuntur temporibus voluptatibus animi, nostrum, 
						assumenda iusto dolorem quisquam cupiditate at ipsam iste non. Itaque voluptatem nemo natus.
						Lorem ipsum dolor sit amet consectetur adipisicing elit. 
						Recusandae quasi numquam rem consequuntur temporibus voluptatibus animi, nostrum, 
						assumenda iusto dolorem quisquam cupiditate at ipsam iste non. Itaque voluptatem nemo natus.
					</div>
				</div>

				<div className="chat-body__message-container user-message-container">
					<div className="user-message-container__user-message">
						Текст повідомлення юзера Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
						Quaerat, veritatis quia dicta aliquid autem repudiandae totam amet. 
						Sunt, ipsum reprehenderit? Totam beatae, ipsum assumenda dicta placeat dignissimos 
						neque obcaecati aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
						Animi tenetur temporibus cumque aliquid aut quidem vel praesentium illo in adipisci 
						molestias ad, tempora magni eveniet rerum, repudiandae voluptatum sint ipsa.
					</div>
				</div>

				<div className="chat-body__message-container ai-message-container">
					<div className="ai-message-container__avatar-container">
						<img src="@img/ai-avatar.png" alt="ai avatar image" className="ai-message-container__avatar-image"/>
					</div>
					<div className="ai-message-container__ai-message">
						Текст повідомлення CPU Lorem ipsum dolor sit amet consectetur adipisicing elit. 
						Recusandae quasi numquam rem consequuntur temporibus voluptatibus animi, nostrum, 
						assumenda iusto dolorem quisquam cupiditate at ipsam iste non. Itaque voluptatem nemo natus.
						Lorem ipsum dolor sit amet consectetur adipisicing elit. 
						Recusandae quasi numquam rem consequuntur temporibus voluptatibus animi, nostrum, 
						assumenda iusto dolorem quisquam cupiditate at ipsam iste non. Itaque voluptatem nemo natus.
					</div>
				</div>

				<div className="chat-body__message-container user-message-container">
					<div className="user-message-container__user-message">
						Текст повідомлення юзера Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
						Quaerat, veritatis quia dicta aliquid autem repudiandae totam amet. 
						Sunt, ipsum reprehenderit? Totam beatae, ipsum assumenda dicta placeat dignissimos 
						neque obcaecati aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
						Animi tenetur temporibus cumque aliquid aut quidem vel praesentium illo in adipisci 
						molestias ad, tempora magni eveniet rerum, repudiandae voluptatum sint ipsa.
					</div>
				</div>

			</div>
		</div>
	)
}