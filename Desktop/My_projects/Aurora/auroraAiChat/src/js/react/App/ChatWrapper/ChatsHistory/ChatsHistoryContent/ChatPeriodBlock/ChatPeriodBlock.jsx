import React from "react";
import "./chatPeriodBlock.scss";

export const ChatPeriodBlock = ({ period, chatsData }) => {


/*
	Список выводим циклом (или перебором), куда передаем данные в виде пропсов
	Также нужно оценить, нужен ли вообще компонент ChatByPeiod
*/

	return (
		<div>

			<div className="chat-period-block">
				<div className="chat-period-block__period-title">
					Сьогодні
				</div>
				<ul className="chat-period-block__chats-list">
					<li className="chat-period-block__chats-list-item active-chat-title">
						<div className="chat-period-block__chats-list-item-text">
							Заголовок чату Заголовок чату Заголовок чату
						</div>
					</li>
					<li className="chat-period-block__chats-list-item">
						<div className="chat-period-block__chats-list-item-text">
							Заголовок чату Заголовок чату Заголовок чату
						</div>
					</li>
					<li className="chat-period-block__chats-list-item">
						<div className="chat-period-block__chats-list-item-text">
							Заголовок чату Заголовок чату Заголовок чату
						</div>
					</li>
					<li className="chat-period-block__chats-list-item">
						<div className="chat-period-block__chats-list-item-text">
							Заголовок чату Заголовок чату Заголовок чату
						</div>
					</li>
					<li className="chat-period-block__chats-list-item">
						<div className="chat-period-block__chats-list-item-text">
							Заголовок чату Заголовок чату Заголовок чату
						</div>
					</li>
					<li className="chat-period-block__chats-list-item">
						<div className="chat-period-block__chats-list-item-text">
							Заголовок чату Заголовок чату Заголовок чату
						</div>
					</li>
					<li className="chat-period-block__chats-list-item">
						<div className="chat-period-block__chats-list-item-text">
							Заголовок чату Заголовок чату Заголовок чату
						</div>
					</li>
				</ul>
			</div>

			<div className="chat-period-block">
				<div className="chat-period-block__period-title">
					Вчора
				</div>
				<ul className="chat-period-block__chats-list">
					<li className="chat-period-block__chats-list-item">
						<div className="chat-period-block__chats-list-item-text">
							Заголовок чату Заголовок чату Заголовок чату
						</div>
					</li>
					<li className="chat-period-block__chats-list-item">
						<div className="chat-period-block__chats-list-item-text">
							Заголовок чату Заголовок чату Заголовок чату
						</div>
					</li>
					<li className="chat-period-block__chats-list-item">
						<div className="chat-period-block__chats-list-item-text">
							Заголовок чату Заголовок чату Заголовок чату
						</div>
					</li>
					<li className="chat-period-block__chats-list-item">
						<div className="chat-period-block__chats-list-item-text">
							Заголовок чату Заголовок чату Заголовок чату
						</div>
					</li>
					<li className="chat-period-block__chats-list-item">
						<div className="chat-period-block__chats-list-item-text">
							Заголовок чату Заголовок чату Заголовок чату
						</div>
					</li>
				</ul>
			</div>

			<div className="chat-period-block">
				<div className="chat-period-block__period-title">
					В цьому місяці
				</div>
				<ul className="chat-period-block__chats-list">
					<li className="chat-period-block__chats-list-item">
						<div className="chat-period-block__chats-list-item-text">
							Заголовок чату Заголовок чату Заголовок чату
						</div>
					</li>
					<li className="chat-period-block__chats-list-item">
						<div className="chat-period-block__chats-list-item-text">
							Заголовок чату Заголовок чату Заголовок чату
						</div>
					</li>
					<li className="chat-period-block__chats-list-item">
						<div className="chat-period-block__chats-list-item-text">
							Заголовок чату Заголовок чату Заголовок чату
						</div>
					</li>
					<li className="chat-period-block__chats-list-item">
						<div className="chat-period-block__chats-list-item-text">
							Заголовок чату Заголовок чату Заголовок чату
						</div>
					</li>
					<li className="chat-period-block__chats-list-item">
						<div className="chat-period-block__chats-list-item-text">
							Заголовок чату Заголовок чату Заголовок чату
						</div>
					</li>
					<li className="chat-period-block__chats-list-item">
						<div className="chat-period-block__chats-list-item-text">
							Заголовок чату Заголовок чату Заголовок чату
						</div>
					</li>
					<li className="chat-period-block__chats-list-item">
						<div className="chat-period-block__chats-list-item-text">
							Заголовок чату Заголовок чату Заголовок чату
						</div>
					</li>
					<li className="chat-period-block__chats-list-item">
						<div className="chat-period-block__chats-list-item-text">
							Заголовок чату Заголовок чату Заголовок чату
						</div>
					</li>
					<li className="chat-period-block__chats-list-item">
						<div className="chat-period-block__chats-list-item-text">
							Заголовок чату Заголовок чату Заголовок чату
						</div>
					</li>
					<li className="chat-period-block__chats-list-item">
						<div className="chat-period-block__chats-list-item-text">
							Заголовок чату Заголовок чату Заголовок чату
						</div>
					</li>
				</ul>
			</div>

			<div className="chat-period-block">
				<div className="chat-period-block__period-title">
					Травень
				</div>
				<ul className="chat-period-block__chats-list">
					<li className="chat-period-block__chats-list-item">
						<div className="chat-period-block__chats-list-item-text">
							Заголовок чату Заголовок чату Заголовок чату
						</div>
					</li>
					<li className="chat-period-block__chats-list-item">
						<div className="chat-period-block__chats-list-item-text">
							Заголовок чату Заголовок чату Заголовок чату
						</div>
					</li>
					<li className="chat-period-block__chats-list-item">
						<div className="chat-period-block__chats-list-item-text">
							Заголовок чату Заголовок чату Заголовок чату
						</div>
					</li>
					<li className="chat-period-block__chats-list-item">
						<div className="chat-period-block__chats-list-item-text">
							Заголовок чату Заголовок чату Заголовок чату
						</div>
					</li>
					<li className="chat-period-block__chats-list-item">
						<div className="chat-period-block__chats-list-item-text">
							Заголовок чату Заголовок чату Заголовок чату
						</div>
					</li>
				</ul>
			</div>

			<div className="chat-period-block">
				<div className="chat-period-block__period-title">
					Квітень
				</div>
				<ul className="chat-period-block__chats-list">
					<li className="chat-period-block__chats-list-item">
						<div className="chat-period-block__chats-list-item-text">
							Заголовок чату Заголовок чату Заголовок чату
						</div>
					</li>
					<li className="chat-period-block__chats-list-item">
						<div className="chat-period-block__chats-list-item-text">
							Заголовок чату Заголовок чату Заголовок чату
						</div>
					</li>
					<li className="chat-period-block__chats-list-item">
						<div className="chat-period-block__chats-list-item-text">
							Заголовок чату Заголовок чату Заголовок чату
						</div>
					</li>
					<li className="chat-period-block__chats-list-item">
						<div className="chat-period-block__chats-list-item-text">
							Заголовок чату Заголовок чату Заголовок чату
						</div>
					</li>
					<li className="chat-period-block__chats-list-item">
						<div className="chat-period-block__chats-list-item-text">
							Заголовок чату Заголовок чату Заголовок чату
						</div>
					</li>
					<li className="chat-period-block__chats-list-item">
						<div className="chat-period-block__chats-list-item-text">
							Заголовок чату Заголовок чату Заголовок чату
						</div>
					</li>
					<li className="chat-period-block__chats-list-item">
						<div className="chat-period-block__chats-list-item-text">
							Заголовок чату Заголовок чату Заголовок чату
						</div>
					</li>
					<li className="chat-period-block__chats-list-item">
						<div className="chat-period-block__chats-list-item-text">
							Заголовок чату Заголовок чату Заголовок чату
						</div>
					</li>
					<li className="chat-period-block__chats-list-item">
						<div className="chat-period-block__chats-list-item-text">
							Заголовок чату Заголовок чату Заголовок чату
						</div>
					</li>
					<li className="chat-period-block__chats-list-item">
						<div className="chat-period-block__chats-list-item-text">
							Заголовок чату Заголовок чату Заголовок чату
						</div>
					</li>
				</ul>
			</div>

		</div>
	)
}