// Валидация инпута
//if ( document.querySelector(".carfax") ) {
	// const carfaxFormInput = document.querySelector(".form-control");
	// const carfaxErrorMessage = document.querySelector(".carfax__validation-message");
	// // Вывод сообщения о неправильно введенном коде
	// carfaxFormInput.addEventListener("input", () => {
	// 	const clearCarfaxNumberArr = [];
	// 	const carfaxFormInputValue = carfaxFormInput.value.split("");
	// 	let filteredCarfaxArray = carfaxFormInputValue.filter(item => !isNaN(item));
	// 	if ( filteredCarfaxArray.length != 17 ) {
	// 		carfaxErrorMessage.classList.remove("_hidden");
	// 	} else {
	// 		carfaxErrorMessage.classList.add("_hidden");
	// 	}
	// 	let counter = 0;
	// 	for ( let i = 0; i < carfaxFormInputValue.length; i++ ) {
	// 		let carfaxRegex = /^[0-9]$/;
	// 		if ( !carfaxRegex.test(carfaxFormInputValue[i]) ) {
	// 			counter++;
	// 		}
	// 	}
	// 	if ( counter > 0 ) {
	// 		carfaxErrorMessage.classList.remove("_hidden");
	// 	}
	// })

	// Отключение кнопки в фонрме при неправильном коде
	// const carfaxSubmitButton = document.querySelector(".carfax__form-submit");
	// document.addEventListener("keyup", () => {
	// 	if ( !carfaxErrorMessage.classList.contains("_hidden") ) {
	// 		carfaxSubmitButton.setAttribute('disabled', 'disabled');
	// 		carfaxSubmitButton.style.opacity = "0.5"
	// 	} else {
	// 		carfaxSubmitButton.removeAttribute("disabled");
	// 		carfaxSubmitButton.style.opacity = "1"
	// 	}
	// })

	// Установка высоты окна со списком карфаксов
	// const carfaxes = document.querySelector(".carfaxes");
	// const carfaxesList = document.querySelector(".carfaxes__list");
	// const carfaxListElementsArr = carfaxesList.children;
	
	// function resizeListHeight() {
	// 	const carfaxesListTitle = document.querySelector(".carfaxes__title");
	// 	const windowHeight = document.documentElement.clientHeight;
	// 	let contanerHeight = windowHeight * 0.63;
	// 	let listHeight = contanerHeight - (carfaxesListTitle.offsetHeight + 30);
	// 	carfaxesList.style.height = `${listHeight}px`;
	// }
	// document.addEventListener("DOMContentLoaded", () => {
	// 	if ( carfaxListElementsArr.length > 22 ) {
	// 		resizeListHeight()
	// 	}
	// })
	// window.addEventListener("resize", () => {
	// 		resizeListHeight()
	// })
//}