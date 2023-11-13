// // ---> Стилізація списка select
// const areaSelect = document.querySelector(".area__list");
// const areaOptionsArr = document.querySelectorAll(".area__list-item");

if ( document.querySelector(".calculator") ) {
// ---------------------------------------> Змінні елементів калькулятора
// ---> Кнопки вибору аукціона
const copartButton = document.querySelector(".auction-copart-button");
const iaaiButton = document.querySelector(".auction-iaai-button");

// ---> Кнопки вибору двигуна
const gasolineButton = document.querySelector(".engine-gasoline-button");
const dieselButton = document.querySelector(".engine-diesel-button");
const hybridButton = document.querySelector(".engine-hybrid-button");
const electricButton = document.querySelector(".engine-electic-button");

// ---> Кнопки вибору кузова
const passengerButton = document.querySelector(".body-passenger-button");
const suvButton = document.querySelector(".body-suv-button");
const offRoadButton = document.querySelector(".body-off-road-button");
const motoButton = document.querySelector(".body-moto-button");

// ---> Поля
const yearInput = document.querySelector(".year-input");
const priceLotInput = document.querySelector(".lot-price-input");
const volumeEngineInput = document.querySelector(".volume-input");
const brokerInput = document.querySelector(".broker-input");
const expeditionInput = document.querySelector(".expedition-input");
const companyServicesInput = document.querySelector(".company-services");
const repairPriceInput = document.querySelector(".repair-price-input");

// ---------------------------------------> Дані для прорахунків
let selectedEngineVolume; // Об'єм двигуна
let selectedEngineType = 0; // Обраний тип двигуна
let currentYear; // Поточний рік
let carAge; // Вік автомобіля

function userSelectedData() {
	// Отримуємо об'єм/потужнітсь двигуна, яку ввів користувач
selectedEngineVolume = volumeEngineInput.value; 
// Отримуємо вибраний тип двигуна
for ( let item of document.querySelectorAll(".engine__button") ) {
	if ( item.classList.contains("selected-engine") ) {
		selectedEngineType = item.getAttribute("data-engine");
	} else {}
}
// Отримуємо поточний рік
const today = new Date();
currentYear = today.getFullYear(); 
// Отримуємо вік автомобіля
if ( yearInput.value.length === 4 ) {
	if ( currentYear - yearInput.value < 15 ) {
		carAge = currentYear - yearInput.value;
	} else {
		carAge = 15;
	}
}
}

// ---------------------------------------> Додавання/прибирання класів при кліку на кнопки
// ---> Масиви з кнопками
const auctionButtonsArray = document.querySelectorAll(".auction__button");
const engineButtonsArray = document.querySelectorAll(".engine__button");
const bodyButtonsArray = document.querySelectorAll(".body__button");

// ---> Функція для зміни кольору
function addOrangeBackground(item, array) {
	if ( !item.classList.contains("orange-button-style") ) {
		for (let elem of array) {
			elem.classList.remove("orange-button-style");
		}
		item.classList.add("orange-button-style");
	}
}

// ---> Функція додавання класу вибраного аукціону
function addSelectedAuctionClass(item, array) {
	if ( !item.classList.contains("selected-auction") ) {
		for (let elem of array) {
			elem.classList.remove("selected-auction");
		}
		item.classList.add("selected-auction");
	}
}

// ---> Функція додавання класу вибраного двигуна
function addSelectedEngineClass(item, array) {
	if ( !item.classList.contains("selected-engine") ) {
		for (let elem of array) {
			elem.classList.remove("selected-engine");
		}
		item.classList.add("selected-engine");
	}
}

// ---> Функція додавання класу вибраного кузова
function addSelectedBodyClass(item, array) {
	if ( !item.classList.contains("selected-body") ) {
		for (let elem of array) {
			elem.classList.remove("selected-body");
		}
		item.classList.add("selected-body");
	}
}

// ---> Цикли з прослуховувачем подій на кожну кнопку
for (let item of auctionButtonsArray) {
	item.addEventListener("click", () => {
		addOrangeBackground(item, auctionButtonsArray);
		addSelectedAuctionClass(item, auctionButtonsArray);
	})
}
for (let item of engineButtonsArray) {
	item.addEventListener("click", () => {
		addOrangeBackground(item, engineButtonsArray);
		addSelectedEngineClass(item, engineButtonsArray);
	})
}
for (let item of bodyButtonsArray) {
	item.addEventListener("click", () => {
		addOrangeBackground(item, bodyButtonsArray);
		addSelectedBodyClass(item, bodyButtonsArray);
	})
}

// ---------------------------------------> Рахуємо результати
// ---> Змінні елементів з результатом
const lotPriceResult = document.querySelector(".result-lot-price"); // Ціна лоту
const auctionPriceResult = document.querySelector(".result-auction-price"); // Аукц.збір
const USDeliveryPriceResult = document.querySelector(".result-us-delivery"); // Вартість доставки(США)
const seaResult = document.querySelector(".result-sea"); // Море
const exciseTaxResult = document.querySelector(".result-excise-tax"); // Акциз
const customsDutyResult = document.querySelector(".result-customs-duty"); // Мито
const pdvDutyResult = document.querySelector(".result-pdv-duty"); // ПДВ
const fullCustomsDutyResult = document.querySelector(".result-full-customs-duty"); // Розмитнення загалом
const insuranceResult = document.querySelector(".result-insurance"); // Страховка
const companyService = document.querySelector(".result-company-service"); // Послуги компанії
const certificateResult = document.querySelector(".result-certificate"); // Сертифікат
const expeditionResult = document.querySelector(".result-expedition"); // Експедиція
const brokerResult = document.querySelector(".result-broker"); // Брокер
const deliveryFromPortResult = document.querySelector(".result-delivery-from-port"); // Доставка з порту
const registrationResult = document.querySelector(".result-registration"); // Постановка на облік
const repairResult = document.querySelector(".result-repair"); // Ремонт
const fullPriceResult = document.querySelector(".result-full-price"); // Всього

// Прослуховувач на весь документ для відслідковування натискань на клавіатуру
document.addEventListener("keyup", ()=> {
	callAllFunctions();
})

// Прослуховувач на всі кнопки
const allButtonsArray = document.querySelectorAll(".calculate-button");
for ( let item of allButtonsArray ) {
	item.addEventListener("click", () => {
		callAllFunctions();
	})
}

// Прослуховувач на завантаження сторінки
document.addEventListener("DOMContentLoaded", () => {
	callAllFunctions();
})

// Функція, що викликає всі функції
function callAllFunctions() {
	userSelectedData();
	lotPriceResult.textContent = priceLotInput.value; // Передаємо вартість лоту у результат
	examRequiredFields(); // Фарбуємо обов'язкові поля у червоний
	calculateTaxes(); // Викликаємо прорахунок податків
	calculateBrokerService(); // Викликаємо прорахунок брокерських послуг
	calculateExpeditionPrice(); // Викликаємо прорахунок експедиції
	calculateCompanyService(); // Викликаємо прорахунок послуг компанії
	calculateRepairPrice(); // Викликаємо вартість ремонту
	calculateFullPrice(); // Додаємо усі результати
	setEngineVolumeTitle(); // Зміна заголовку поля 
}

// ---> Перевіряємо обов'язкові поля на заповненість
let requiredInputsData;
function examRequiredFields() {
	const reqFieldsArray = document.querySelectorAll(".required-field");
	for ( let item of reqFieldsArray ) {
		console.log(item.value)
		if ( item.value === "" ) {
			item.classList.add("red-border");
		} else {
			item.classList.remove("red-border");
		}
		requiredInputsData++
	}
}

// ---> Підставляємо заголовок в поле "об'єм двигуна" в залежності від типу двигуна
function setEngineVolumeTitle() {
	const titleEngineVolume = document.querySelector(".input-title-engine-volume");
	if ( selectedEngineType === "electro" ) {
		titleEngineVolume.textContent = "*Ємність АКБ кВт*г:";
		volumeEngineInput.removeAttribute("disabled");
		titleEngineVolume.classList.remove("transparent-style");
		volumeEngineInput.classList.remove("transparent-style");
	} else if ( selectedEngineType === "hybrid" ) {
		volumeEngineInput.setAttribute('disabled', 'disabled');
		volumeEngineInput.classList.remove("red-border");
		titleEngineVolume.classList.add("transparent-style");
		volumeEngineInput.classList.add("transparent-style");
	} else {
		titleEngineVolume.textContent = "*Об'єм двигуна в куб.см:";
		volumeEngineInput.removeAttribute("disabled");
		titleEngineVolume.classList.remove("transparent-style");
		volumeEngineInput.classList.remove("transparent-style");
	}

}

// ---> Рахуємо акциз, мито, ПДВ
let allTaxes;
function calculateTaxes() {
	// Рахуємо акциз
	let actualRate; // Актуальна ставка
	let exciseResult; // Акциз у євро
	const euroToDollarCoef = 1.07; // Коефіцієнт множення
	let exciseResultDollar; // Акциз у доларах
	if ( selectedEngineType === 0 || !yearInput.value || !volumeEngineInput.value ) {
		exciseResultDollar = ""; // Якщо одне з полей не заповнене, то нічого не відображаємо у результаті
	} else if ( selectedEngineType === "gasoline" ) { 
		actualRate = selectedEngineVolume < 3000 ? 50 : 100;
		exciseResult = actualRate * (selectedEngineVolume/1000) * carAge;
		exciseResultDollar = exciseResult * euroToDollarCoef;
	} else if ( selectedEngineType === "diesel" ) {
		actualRate = selectedEngineVolume < 3500 ? 75 : 100;
		exciseResult = actualRate * (selectedEngineVolume/1000) * carAge;
		exciseResultDollar = exciseResult * euroToDollarCoef;
	} else if ( selectedEngineType === "hybrid" ) {
		actualRate = 100;
		exciseResult = actualRate;
		exciseResultDollar = exciseResult * euroToDollarCoef;
	} else if ( selectedEngineType === "electro" ) {
		actualRate = +selectedEngineVolume;
		exciseResult = actualRate;
		exciseResultDollar = exciseResult * euroToDollarCoef;
	}
	exciseTaxResult.textContent = Math.round(exciseResultDollar); // Фінальний результат акцизу

	// Рахуємо мито
	let importTax = 0; // Мито
	if ( selectedEngineType === 0 || !customsDutyResult.value && selectedEngineType === "electro" ) {
		importTax = 0;
	} else if ( selectedEngineType === 0 || !customsDutyResult.value && selectedEngineType !== "electro" ) {
		importTax = priceLotInput.value / 10;
	}
	customsDutyResult.textContent = Math.round(importTax); // Фінальний результат мита

	// Рахуємо ПДВ
	let MPETax = ( +priceLotInput.value + +exciseResultDollar + +importTax ) / 5;
	pdvDutyResult.textContent = Math.round(MPETax);

	// Рахуємо розмитнення загалом
	allTaxes = +exciseResultDollar + +importTax + +MPETax;
	fullCustomsDutyResult.textContent = Math.round(allTaxes); // Фінальний результат розмитнення загалом
}

// ---> Рахуємо брокерські послуги
let brokerService = 0;
function calculateBrokerService() {
	brokerService = +brokerInput.value
	brokerResult.textContent = brokerService;
}
// ---> Рахуємо вартість експедиції
let expeditionPrice = 0;
function calculateExpeditionPrice() {
	expeditionPrice = +expeditionInput.value
	expeditionResult.textContent = expeditionPrice;
}
// ---> Рахуємо вартість послуг компанії
let companyServicePrice = 0;
function calculateCompanyService() {
	companyServicePrice = +companyServicesInput.value;
	companyService.textContent = companyServicePrice;
}
// ---> Рахуємо вартість ремонту
let repairPrice = 0;
function calculateRepairPrice() {
	repairPrice = +repairPriceInput.value;
	repairResult.textContent = +repairPrice;
}


// ---> Рахуємо фінальну суму
const resultPriceArray = document.querySelectorAll(".result__price");
function calculateFullPrice() {
	// Ставимо нуль за замовчуванням
	fullPriceResult.textContent = 0;
	if ( priceLotInput.value === "" ) {
		lotPriceResult.textContent = 0;
	} else {}
	let fullPrice = 0;

	fullPrice = +priceLotInput.value + 
							+allTaxes +
							+brokerService +
							+expeditionPrice +
							+companyServicePrice +
							+repairPrice;
	if ( fullPrice === 0 ) {
		fullPriceResult.textContent = 0;
	} else {
		fullPriceResult.textContent = Math.round(fullPrice);
	}
}

} else {}












