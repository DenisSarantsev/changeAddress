if ( document.querySelector(".faq") ) {
	const questionsArray = document.querySelectorAll(".faq-question");
	for ( let i = 0; i < questionsArray.length; i++ ) {
		// Додаємо id до input
		let inputElement = questionsArray[i].querySelector(".panel");
		inputElement.setAttribute("id", `q${i}`);
		// Додаємо for до label
		let labelElement = questionsArray[i].querySelector(".panel-title");
		labelElement.setAttribute("for", `q${i}`);
	}
}


