// if ( document.querySelector(".login") ) {
// 	const loginErrorMessage = document.querySelector(".login__error-message");
// 	const loginPhoneInput = document.querySelector(".login__phone-container").lastElementChild;
// 	loginPhoneInput.addEventListener("change", () => {
// 		const clearNumberArr = [];
// 		const phoneInputValue = loginPhoneInput.value.split("");
// 		let filteredArray = phoneInputValue.filter(item => !isNaN(item));
// 		if ( filteredArray.length < 7 || filteredArray.length > 15 ) {
// 			loginErrorMessage.classList.remove("_hidden");
// 		} else {
// 			loginErrorMessage.classList.add("_hidden");
// 		}
// 		let counter = 0;
// 		for ( let i = 0; i < phoneInputValue.length; i++ ) {
// 			let regex = /^[0-9+()]+$/;
// 			if ( !regex.test(phoneInputValue[i]) ) {
// 				counter++;
// 				console.log(counter)
// 			}
// 		}
// 		if ( counter > 0 ) {
// 			loginErrorMessage.classList.remove("_hidden");
// 		}
// })
// }