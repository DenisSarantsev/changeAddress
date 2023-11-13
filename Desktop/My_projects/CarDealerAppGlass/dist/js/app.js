(() => {
    "use strict";
    const modules_flsModules = {};
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(webP.height == 2);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = support === true ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let bodyLockStatus = true;
    let bodyLockToggle = (delay = 500) => {
        if (document.documentElement.classList.contains("lock")) bodyUnlock(delay); else bodyLock(delay);
    };
    let bodyUnlock = (delay = 500) => {
        let body = document.querySelector("body");
        if (bodyLockStatus) {
            let lock_padding = document.querySelectorAll("[data-lp]");
            setTimeout((() => {
                for (let index = 0; index < lock_padding.length; index++) {
                    const el = lock_padding[index];
                    el.style.paddingRight = "0px";
                }
                body.style.paddingRight = "0px";
                document.documentElement.classList.remove("lock");
            }), delay);
            bodyLockStatus = false;
            setTimeout((function() {
                bodyLockStatus = true;
            }), delay);
        }
    };
    let bodyLock = (delay = 500) => {
        let body = document.querySelector("body");
        if (bodyLockStatus) {
            let lock_padding = document.querySelectorAll("[data-lp]");
            for (let index = 0; index < lock_padding.length; index++) {
                const el = lock_padding[index];
                el.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
            }
            body.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
            document.documentElement.classList.add("lock");
            bodyLockStatus = false;
            setTimeout((function() {
                bodyLockStatus = true;
            }), delay);
        }
    };
    function menuInit() {
        if (document.querySelector(".icon-menu")) document.addEventListener("click", (function(e) {
            if (bodyLockStatus && e.target.closest(".icon-menu")) {
                bodyLockToggle();
                document.documentElement.classList.toggle("menu-open");
            }
        }));
    }
    function functions_FLS(message) {
        setTimeout((() => {
            if (window.FLS) console.log(message);
        }), 0);
    }
    class MousePRLX {
        constructor(props, data = null) {
            let defaultConfig = {
                init: true,
                logging: true
            };
            this.config = Object.assign(defaultConfig, props);
            if (this.config.init) {
                const paralaxMouse = document.querySelectorAll("[data-prlx-mouse]");
                if (paralaxMouse.length) {
                    this.paralaxMouseInit(paralaxMouse);
                    this.setLogging(`Прокинувся, стежу за об'єктами: (${paralaxMouse.length})`);
                } else this.setLogging("Немає жодного обєкта. Сплю...");
            }
        }
        paralaxMouseInit(paralaxMouse) {
            paralaxMouse.forEach((el => {
                const paralaxMouseWrapper = el.closest("[data-prlx-mouse-wrapper]");
                const paramСoefficientX = el.dataset.prlxCx ? +el.dataset.prlxCx : 100;
                const paramСoefficientY = el.dataset.prlxCy ? +el.dataset.prlxCy : 100;
                const directionX = el.hasAttribute("data-prlx-dxr") ? -1 : 1;
                const directionY = el.hasAttribute("data-prlx-dyr") ? -1 : 1;
                const paramAnimation = el.dataset.prlxA ? +el.dataset.prlxA : 50;
                let positionX = 0, positionY = 0;
                let coordXprocent = 0, coordYprocent = 0;
                setMouseParallaxStyle();
                if (paralaxMouseWrapper) mouseMoveParalax(paralaxMouseWrapper); else mouseMoveParalax();
                function setMouseParallaxStyle() {
                    const distX = coordXprocent - positionX;
                    const distY = coordYprocent - positionY;
                    positionX += distX * paramAnimation / 1e3;
                    positionY += distY * paramAnimation / 1e3;
                    el.style.cssText = `transform: translate3D(${directionX * positionX / (paramСoefficientX / 10)}%,${directionY * positionY / (paramСoefficientY / 10)}%,0) rotate(0.02deg);`;
                    requestAnimationFrame(setMouseParallaxStyle);
                }
                function mouseMoveParalax(wrapper = window) {
                    wrapper.addEventListener("mousemove", (function(e) {
                        const offsetTop = el.getBoundingClientRect().top + window.scrollY;
                        if (offsetTop >= window.scrollY || offsetTop + el.offsetHeight >= window.scrollY) {
                            const parallaxWidth = window.innerWidth;
                            const parallaxHeight = window.innerHeight;
                            const coordX = e.clientX - parallaxWidth / 2;
                            const coordY = e.clientY - parallaxHeight / 2;
                            coordXprocent = coordX / parallaxWidth * 100;
                            coordYprocent = coordY / parallaxHeight * 100;
                        }
                    }));
                }
            }));
        }
        setLogging(message) {
            this.config.logging ? functions_FLS(`[PRLX Mouse]: ${message}`) : null;
        }
    }
    modules_flsModules.mousePrlx = new MousePRLX({});
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    if (document.querySelector(".calculator")) {
        document.querySelector(".auction-copart-button");
        document.querySelector(".auction-iaai-button");
        document.querySelector(".engine-gasoline-button");
        document.querySelector(".engine-diesel-button");
        document.querySelector(".engine-hybrid-button");
        document.querySelector(".engine-electic-button");
        document.querySelector(".body-passenger-button");
        document.querySelector(".body-suv-button");
        document.querySelector(".body-off-road-button");
        document.querySelector(".body-moto-button");
        const yearInput = document.querySelector(".year-input");
        const priceLotInput = document.querySelector(".lot-price-input");
        const volumeEngineInput = document.querySelector(".volume-input");
        const brokerInput = document.querySelector(".broker-input");
        const expeditionInput = document.querySelector(".expedition-input");
        const companyServicesInput = document.querySelector(".company-services");
        const repairPriceInput = document.querySelector(".repair-price-input");
        let selectedEngineVolume;
        let selectedEngineType = 0;
        let currentYear;
        let carAge;
        function userSelectedData() {
            selectedEngineVolume = volumeEngineInput.value;
            for (let item of document.querySelectorAll(".engine__button")) if (item.classList.contains("selected-engine")) selectedEngineType = item.getAttribute("data-engine");
            const today = new Date;
            currentYear = today.getFullYear();
            if (yearInput.value.length === 4) if (currentYear - yearInput.value < 15) carAge = currentYear - yearInput.value; else carAge = 15;
        }
        const auctionButtonsArray = document.querySelectorAll(".auction__button");
        const engineButtonsArray = document.querySelectorAll(".engine__button");
        const bodyButtonsArray = document.querySelectorAll(".body__button");
        function addOrangeBackground(item, array) {
            if (!item.classList.contains("orange-button-style")) {
                for (let elem of array) elem.classList.remove("orange-button-style");
                item.classList.add("orange-button-style");
            }
        }
        function addSelectedAuctionClass(item, array) {
            if (!item.classList.contains("selected-auction")) {
                for (let elem of array) elem.classList.remove("selected-auction");
                item.classList.add("selected-auction");
            }
        }
        function addSelectedEngineClass(item, array) {
            if (!item.classList.contains("selected-engine")) {
                for (let elem of array) elem.classList.remove("selected-engine");
                item.classList.add("selected-engine");
            }
        }
        function addSelectedBodyClass(item, array) {
            if (!item.classList.contains("selected-body")) {
                for (let elem of array) elem.classList.remove("selected-body");
                item.classList.add("selected-body");
            }
        }
        for (let item of auctionButtonsArray) item.addEventListener("click", (() => {
            addOrangeBackground(item, auctionButtonsArray);
            addSelectedAuctionClass(item, auctionButtonsArray);
        }));
        for (let item of engineButtonsArray) item.addEventListener("click", (() => {
            addOrangeBackground(item, engineButtonsArray);
            addSelectedEngineClass(item, engineButtonsArray);
        }));
        for (let item of bodyButtonsArray) item.addEventListener("click", (() => {
            addOrangeBackground(item, bodyButtonsArray);
            addSelectedBodyClass(item, bodyButtonsArray);
        }));
        const lotPriceResult = document.querySelector(".result-lot-price");
        document.querySelector(".result-auction-price");
        document.querySelector(".result-us-delivery");
        document.querySelector(".result-sea");
        const exciseTaxResult = document.querySelector(".result-excise-tax");
        const customsDutyResult = document.querySelector(".result-customs-duty");
        const pdvDutyResult = document.querySelector(".result-pdv-duty");
        const fullCustomsDutyResult = document.querySelector(".result-full-customs-duty");
        document.querySelector(".result-insurance");
        const companyService = document.querySelector(".result-company-service");
        document.querySelector(".result-certificate");
        const expeditionResult = document.querySelector(".result-expedition");
        const brokerResult = document.querySelector(".result-broker");
        document.querySelector(".result-delivery-from-port");
        document.querySelector(".result-registration");
        const repairResult = document.querySelector(".result-repair");
        const fullPriceResult = document.querySelector(".result-full-price");
        document.addEventListener("keyup", (() => {
            callAllFunctions();
        }));
        const allButtonsArray = document.querySelectorAll(".calculate-button");
        for (let item of allButtonsArray) item.addEventListener("click", (() => {
            callAllFunctions();
        }));
        document.addEventListener("DOMContentLoaded", (() => {
            callAllFunctions();
        }));
        function callAllFunctions() {
            userSelectedData();
            lotPriceResult.textContent = priceLotInput.value;
            examRequiredFields();
            calculateTaxes();
            calculateBrokerService();
            calculateExpeditionPrice();
            calculateCompanyService();
            calculateRepairPrice();
            calculateFullPrice();
            setEngineVolumeTitle();
        }
        let requiredInputsData;
        function examRequiredFields() {
            const reqFieldsArray = document.querySelectorAll(".required-field");
            for (let item of reqFieldsArray) {
                console.log(item.value);
                if (item.value === "") item.classList.add("red-border"); else item.classList.remove("red-border");
                requiredInputsData++;
            }
        }
        function setEngineVolumeTitle() {
            const titleEngineVolume = document.querySelector(".input-title-engine-volume");
            if (selectedEngineType === "electro") {
                titleEngineVolume.textContent = "*Ємність АКБ кВт*г:";
                volumeEngineInput.removeAttribute("disabled");
                titleEngineVolume.classList.remove("transparent-style");
                volumeEngineInput.classList.remove("transparent-style");
            } else if (selectedEngineType === "hybrid") {
                volumeEngineInput.setAttribute("disabled", "disabled");
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
        let allTaxes;
        function calculateTaxes() {
            let actualRate;
            let exciseResult;
            const euroToDollarCoef = 1.07;
            let exciseResultDollar;
            if (selectedEngineType === 0 || !yearInput.value || !volumeEngineInput.value) exciseResultDollar = ""; else if (selectedEngineType === "gasoline") {
                actualRate = selectedEngineVolume < 3e3 ? 50 : 100;
                exciseResult = actualRate * (selectedEngineVolume / 1e3) * carAge;
                exciseResultDollar = exciseResult * euroToDollarCoef;
            } else if (selectedEngineType === "diesel") {
                actualRate = selectedEngineVolume < 3500 ? 75 : 100;
                exciseResult = actualRate * (selectedEngineVolume / 1e3) * carAge;
                exciseResultDollar = exciseResult * euroToDollarCoef;
            } else if (selectedEngineType === "hybrid") {
                actualRate = 100;
                exciseResult = actualRate;
                exciseResultDollar = exciseResult * euroToDollarCoef;
            } else if (selectedEngineType === "electro") {
                actualRate = +selectedEngineVolume;
                exciseResult = actualRate;
                exciseResultDollar = exciseResult * euroToDollarCoef;
            }
            exciseTaxResult.textContent = Math.round(exciseResultDollar);
            let importTax = 0;
            if (selectedEngineType === 0 || !customsDutyResult.value && selectedEngineType === "electro") importTax = 0; else if (selectedEngineType === 0 || !customsDutyResult.value && selectedEngineType !== "electro") importTax = priceLotInput.value / 10;
            customsDutyResult.textContent = Math.round(importTax);
            let MPETax = (+priceLotInput.value + +exciseResultDollar + +importTax) / 5;
            pdvDutyResult.textContent = Math.round(MPETax);
            allTaxes = +exciseResultDollar + +importTax + +MPETax;
            fullCustomsDutyResult.textContent = Math.round(allTaxes);
        }
        let brokerService = 0;
        function calculateBrokerService() {
            brokerService = +brokerInput.value;
            brokerResult.textContent = brokerService;
        }
        let expeditionPrice = 0;
        function calculateExpeditionPrice() {
            expeditionPrice = +expeditionInput.value;
            expeditionResult.textContent = expeditionPrice;
        }
        let companyServicePrice = 0;
        function calculateCompanyService() {
            companyServicePrice = +companyServicesInput.value;
            companyService.textContent = companyServicePrice;
        }
        let repairPrice = 0;
        function calculateRepairPrice() {
            repairPrice = +repairPriceInput.value;
            repairResult.textContent = +repairPrice;
        }
        document.querySelectorAll(".result__price");
        function calculateFullPrice() {
            fullPriceResult.textContent = 0;
            if (priceLotInput.value === "") lotPriceResult.textContent = 0;
            let fullPrice = 0;
            fullPrice = +priceLotInput.value + +allTaxes + +brokerService + +expeditionPrice + +companyServicePrice + +repairPrice;
            if (fullPrice === 0) fullPriceResult.textContent = 0; else fullPriceResult.textContent = Math.round(fullPrice);
        }
    }
    window["FLS"] = true;
    isWebp();
    menuInit();
})();