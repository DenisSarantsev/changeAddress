import React from "react";
import './header.scss';

export const Header = () => {
	return (
		<>
			<header className="header">
				<div className="header__logo logo">
					<img src="@img/header/logo-aurora.svg" alt="logo avrora" className="logo__image" />
				</div>
				<div className="header__navigation navigation">
					<div className="navigation__username">
						Денис
					</div>
					<button className="navigation__exit default-button">
						Вийти
					</button>
				</div>
			</header>
		</>
	)
}
