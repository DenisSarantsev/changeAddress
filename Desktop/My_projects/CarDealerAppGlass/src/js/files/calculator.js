document.addEventListener("DOMContentLoaded", function() {
	if ( document.querySelector(".calculator")  ) {
		// ---------------------------------------> Змінні елементів калькулятора
		// ---> Основні масиви для прорахунку
		// const calculatorArrays = {{ calculatorArrays|tojson|safe }};

		// ---> Приклади масивів
		const arrayLand = [{'Copart': {'place': {'title': 'ABILENE - Texas', 'price': {'легковий': 350, 'мото': 300, 'паркетник': 350, 'позашляховик': 350}, 'port': 'HOUSTON'}}}, {'Copart': {'place': {'title': 'ADELANTO - California', 'price': {'легковий': 300, 'мото': 250, 'паркетник': 300, 'позашляховик': 300}, 'port': 'LOS ANGELES'}}}, {'Copart': {'place': {'title': 'ADP TOWING MAUI - Hawaii', 'price': {'легковий': 2250, 'мото': 2250, 'паркетник': 2250, 'позашляховик': 2250}, 'port': 'LOS ANGELES'}}}, {'Copart': {'place': {'title': 'ALBANY - New York', 'price': {'легковий': 275, 'мото': 225, 'паркетник': 275, 'позашляховик': 275}, 'port': 'NEWARK'}}}, {'Copart': {'place': {'title': 'ALBUQUERQUE - New Mexico', 'price': {'легковий': 600, 'мото': 400, 'паркетник': 600, 'позашляховик': 600}, 'port': 'HOUSTON'}}}, {'Copart': {'place': {'title': 'ALTOONA - Pennsylvania', 'price': {'легковий': 450, 'мото': 325, 'паркетник': 450, 'позашляховик': 450}, 'port': 'NEWARK'}}}, {'Copart': {'place': {'title': 'AMARILLO - Texas', 'price': {'легковий': 525, 'мото': 375, 'паркетник': 525, 'позашляховик': 525}, 'port': 'HOUSTON'}}}, {'Copart': {'place': {'title': 'ANCHORAGE - Alaska', 'price': {'легковий': 'Call for price', 'мото': 'Call for price', 'паркетник': 'Call for price', 'позашляховик': 'Call for price'}, 'port': 'ANCHORAGE'}}}, {'Copart': {'place': {'title': 'ANDREWS - Texas', 'price': {'легковий': 425, 'мото': 350, 'паркетник': 425, 'позашляховик': 425}, 'port': 'HOUSTON'}}}, {'Copart': {'place': {'title': 'ANTELOPE - California', 'price': {'легковий': 400, 'мото': 300, 'паркетник': 400, 'позашляховик': 400}, 'port': 'LOS ANGELES'}}}, {'Copart': {'place': {'title': 'APPLETON - Wisconsin', 'price': {'легковий': 325, 'мото': 275, 'паркетник': 325, 'позашляховик': 325}, 'port': 'CHICAGO'}}}, {'Copart': {'place': {'title': 'ATLANTA EAST - Georgia', 'price': {'легковий': 300, 'мото': 250, 'паркетник': 300, 'позашляховик': 300}, 'port': 'SAVANNAH'}}}, {'Copart': {'place': {'title': 'ATLANTA NORTH - Georgia', 'price': {'легковий': 325, 'мото': 250, 'паркетник': 325, 'позашляховик': 325}, 'port': 'SAVANNAH'}}}, {'Copart': {'place': {'title': 'ATLANTA SOUTH - Georgia', 'price': {'легковий': 300, 'мото': 250, 'паркетник': 300, 'позашляховик': 300}, 'port': 'SAVANNAH'}}}, {'Copart': {'place': {'title': 'ATLANTA WEST - Georgia', 'price': {'легковий': 300, 'мото': 250, 'паркетник': 300, 'позашляховик': 300}, 'port': 'SAVANNAH'}}}, {'Copart': {'place': {'title': 'AUSTIN - Texas', 'price': {'легковий': 250, 'мото': 175, 'паркетник': 250, 'позашляховик': 250}, 'port': 'HOUSTON'}}}, {'Copart': {'place': {'title': 'Augusta - Georgia', 'price': {'легковий': 275, 'мото': 225, 'паркетник': 275, 'позашляховик': 275}, 'port': 'SAVANNAH'}}}, {'Copart': {'place': {'title': 'BAKERSFIELD - California', 'price': {'легковий': 350, 'мото': 250, 'паркетник': 350, 'позашляховик': 350}, 'port': 'LOS ANGELES'}}}, {'Copart': {'place': {'title': 'BALTIMORE - Maryland', 'price': {'легковий': 325, 'мото': 275, 'паркетник': 325, 'позашляховик': 325}, 'port': 'NORFOLK'}}}, {'Copart': {'place': {'title': 'BALTIMORE EAST - Maryland', 'price': {'легковий': 325, 'мото': 275, 'паркетник': 325, 'позашляховик': 325}, 'port': 'NORFOLK'}}}, {'Copart': {'place': {'title': 'BATON ROUGE - Louisiana', 'price': {'легковий': 425, 'мото': 375, 'паркетник': 425, 'позашляховик': 425}, 'port': 'SAVANNAH'}}}, {'Copart': {'place': {'title': 'BILLINGS - Montana', 'price': {'легковий': 850, 'мото': 850, 'паркетник': 850, 'позашляховик': 850}, 'port': 'SEATTLE'}}}, {'Copart': {'place': {'title': 'BIRMINGHAM - Alabama', 'price': {'легковий': 375, 'мото': 325, 'паркетник': 375, 'позашляховик': 375}, 'port': 'SAVANNAH'}}}, {'Copart': {'place': {'title': 'BISMARCK - North Dakota', 'price': {'легковий': 'Call for price', 'мото': 'Call for price', 'паркетник': 'Call for price', 'позашляховик': 'Call for price'}, 'port': 'CHICAGO'}}}, {'Copart': {'place': {'title': 'BOISE - Idaho', 'price': {'легковий': 450, 'мото': 450, 'паркетник': 450, 'позашляховик': 450}, 'port': 'SEATTLE'}}}, {'Copart': {'place': {'title': 'Buffalo - New York', 'price': {'легковий': 500, 'мото': 375, 'паркетник': 500, 'позашляховик': 500}, 'port': 'NEWARK'}}}, {'Copart': {'place': {'title': 'CALGARY - Alberta', 'price': {'легковий': 1450, 'мото': 1325, 'паркетник': 1550, 'позашляховик': 1450}, 'port': 'TORONTO'}}}, {'Copart': {'place': {'title': 'CANDIA - New Hampshire', 'price': {'легковий': 400, 'мото': 300, 'паркетник': 400, 'позашляховик': 400}, 'port': 'NEWARK'}}}, {'Copart': {'place': {'title': 'CARTERSVILLE - Georgia', 'price': {'легковий': 300, 'мото': 250, 'паркетник': 300, 'позашляховик': 300}, 'port': 'SAVANNAH'}}}, {'Copart': {'place': {'title': 'CASPER - Wyoming', 'price': {'легковий': 'Call for price', 'мото': 'Call for price', 'паркетник': 'Call for price', 'позашляховик': 'Call for price'}, 'port': 'CHICAGO'}}}, {'Copart': {'place': {'title': 'CHAMBERSBURG - Pennsylvania', 'price': {'легковий': 350, 'мото': 300, 'паркетник': 350, 'позашляховик': 350}, 'port': 'NEWARK'}}}, {'Copart': {'place': {'title': 'CHARLESTON - West Virginia', 'price': {'легковий': 625, 'мото': 500, 'паркетник': 625, 'позашляховик': 625}, 'port': 'NORFOLK'}}}, {'Copart': {'place': {'title': 'CHICAGO NORTH - Illinois', 'price': {'легковий': 180, 'мото': 180, 'паркетник': 180, 'позашляховик': 180}, 'port': 'CHICAGO'}}}, {'Copart': {'place': {'title': 'CHICAGO SOUTH - Illinois', 'price': {'легковий': 180, 'мото': 180, 'паркетник': 180, 'позашляховик': 180}, 'port': 'CHICAGO'}}}, {'Copart': {'place': {'title': 'CHICAGO SOUTH-Woodmar/Heights sublot - Illinois', 'price': {'легковий': 180, 'мото': 180, 'паркетник': 180, 'позашляховик': 180}, 'port': 'CHICAGO'}}}, {'Copart': {'place': {'title': 'CHINA GROVE - North Carolina', 'price': {'легковий': 300, 'мото': 250, 'паркетник': 300, 'позашляховик': 300}, 'port': 'NORFOLK'}}}, {'Copart': {'place': {'title': 'CICERO - Indiana', 'price': {'легковий': 300, 'мото': 250, 'паркетник': 300, 'позашляховик': 300}, 'port': 'CHICAGO'}}}, {'Copart': {'place': {'title': 'CLEVELAND EAST - Ohio', 'price': {'легковий': 550, 'мото': 400, 'паркетник': 550, 'позашляховик': 550}, 'port': 'NORFOLK'}}}, {'Copart': {'place': {'title': 'CLEVELAND WEST - Ohio', 'price': {'легковий': 550, 'мото': 400, 'паркетник': 550, 'позашляховик': 550}, 'port': 'NORFOLK'}}}, {'Copart': {'place': {'title': 'COLORADO SPRINGS - Colorado', 'price': {'легковий': 650, 'мото': 500, 'паркетник': 650, 'позашляховик': 650}, 'port': 'CHICAGO'}}}, {'Copart': {'place': {'title': 'COLUMBUS - Ohio', 'price': {'легковий': 550, 'мото': 400, 'паркетник': 550, 'позашляховик': 550}, 'port': 'NORFOLK'}}}, {'Copart': {'place': {'title': 'CONCORD - North Carolina', 'price': {'легковий': 300, 'мото': 250, 'паркетник': 300, 'позашляховик': 300}, 'port': 'NORFOLK'}}}, {'Copart': {'place': {'title': 'CORPUS CHRISTI - Texas', 'price': {'легковий': 275, 'мото': 225, 'паркетник': 275, 'позашляховик': 275}, 'port': 'HOUSTON'}}}, {'Copart': {'place': {'title': 'CRASHEDTOYS ATLANTA - Georgia', 'price': {'легковий': 275, 'мото': 250, 'паркетник': 275, 'позашляховик': 275}, 'port': 'SAVANNAH'}}}, {'Copart': {'place': {'title': 'CRASHEDTOYS DALLAS - Texas', 'price': {'легковий': 275, 'мото': 185, 'паркетник': 275, 'позашляховик': 275}, 'port': 'HOUSTON'}}}, {'Copart': {'place': {'title': 'CRASHEDTOYS SACRAMENTO - California', 'price': {'легковий': 'Call for price', 'мото': 300, 'паркетник': 'Call for price', 'позашляховик': 'Call for price'}, 'port': 'LOS ANGELES'}}}, {'Copart': {'place': {'title': 'DALLAS - Texas', 'price': {'легковий': 275, 'мото': 185, 'паркетник': 275, 'позашляховик': 275}, 'port': 'HOUSTON'}}}, {'Copart': {'place': {'title': 'DALLAS SOUTH - Texas', 'price': {'легковий': 275, 'мото': 185, 'паркетник': 275, 'позашляховик': 275}, 'port': 'HOUSTON'}}}, {'Copart': {'place': {'title': 'DANVILLE - Virginia', 'price': {'легковий': 300, 'мото': 250, 'паркетник': 300, 'позашляховик': 300}, 'port': 'NORFOLK'}}}, {'Copart': {'place': {'title': 'DAVENPORT - 169 Davenport sublot - Iowa', 'price': {'легковий': 325, 'мото': 275, 'паркетник': 325, 'позашляховик': 325}, 'port': 'CHICAGO'}}}, {'Copart': {'place': {'title': 'DAVENPORT - Iowa', 'price': {'легковий': 325, 'мото': 275, 'паркетник': 325, 'позашляховик': 325}, 'port': 'CHICAGO'}}}, {'Copart': {'place': {'title': 'DAYTON - Ohio', 'price': {'легковий': 550, 'мото': 400, 'паркетник': 550, 'позашляховик': 550}, 'port': 'NORFOLK'}}}, {'Copart': {'place': {'title': 'DENVER - Colorado', 'price': {'легковий': 650, 'мото': 500, 'паркетник': 650, 'позашляховик': 650}, 'port': 'CHICAGO'}}}, {'Copart': {'place': {'title': 'DENVER CENTRAL - Colorado', 'price': {'легковий': 650, 'мото': 500, 'паркетник': 650, 'позашляховик': 650}, 'port': 'CHICAGO'}}}, {'Copart': {'place': {'title': 'DENVER SOUTH - Colorado', 'price': {'легковий': 650, 'мото': 500, 'паркетник': 650, 'позашляховик': 650}, 'port': 'CHICAGO'}}}, {'Copart': {'place': {'title': 'DES MOINES - Iowa', 'price': {'легковий': 400, 'мото': 300, 'паркетник': 400, 'позашляховик': 400}, 'port': 'CHICAGO'}}}, {'Copart': {'place': {'title': 'DETROIT - Michigan', 'price': {'легковий': 400, 'мото': 300, 'паркетник': 400, 'позашляховик': 400}, 'port': 'CHICAGO'}}}, {'Copart': {'place': {'title': 'DK TOWING KAUAI - Hawaii', 'price': {'легковий': 1750, 'мото': 1750, 'паркетник': 2050, 'позашляховик': 1850}, 'port': 'HONOLULU'}}}, {'Copart': {'place': {'title': 'DK TOWING KAUAI - Hawaii', 'price': {'легковий': 2750, 'мото': 2750, 'паркетник': 3150, 'позашляховик': 2950}, 'port': 'LOS ANGELES'}}}, {'Copart': {'place': {'title': 'DOTHAN - Alabama', 'price': {'легковий': 375, 'мото': 325, 'паркетник': 375, 'позашляховик': 375}, 'port': 'SAVANNAH'}}}, {'Copart': {'place': {'title': 'DYER - Indiana', 'price': {'легковий': 180, 'мото': 180, 'паркетник': 180, 'позашляховик': 180}, 'port': 'CHICAGO'}}}, {'Copart': {'place': {'title': 'EARLINGTON - Kentucky', 'price': {'легковий': 550, 'мото': 375, 'паркетник': 550, 'позашляховик': 550}, 'port': 'SAVANNAH'}}}, {'Copart': {'place': {'title': 'EDMONTON - Alberta', 'price': {'легковий': 1450, 'мото': 1325, 'паркетник': 1650, 'позашляховик': 1450}, 'port': 'TORONTO'}}}, {'Copart': {'place': {'title': 'EL PASO - Texas', 'price': {'легковий': 425, 'мото': 375, 'паркетник': 425, 'позашляховик': 425}, 'port': 'HOUSTON'}}}, {'Copart': {'place': {'title': 'EUGENE - Oregon', 'price': {'легковий': 375, 'мото': 300, 'паркетник': 375, 'позашляховик': 375}, 'port': 'SEATTLE'}}}, {'Copart': {'place': {'title': 'EXETER - Rhode Island', 'price': {'легковий': 350, 'мото': 250, 'паркетник': 350, 'позашляховик': 350}, 'port': 'NEWARK'}}}, {'Copart': {'place': {'title': 'FAIRBURN - Georgia', 'price': {'легковий': 275, 'мото': 250, 'паркетник': 275, 'позашляховик': 275}, 'port': 'SAVANNAH'}}}, {'Copart': {'place': {'title': 'FAYETTEVILLE - Arkansas', 'price': {'легковий': 475, 'мото': 375, 'паркетник': 475, 'позашляховик': 475}, 'port': 'HOUSTON'}}}, {'Copart': {'place': {'title': 'FLINT - Michigan', 'price': {'легковий': 450, 'мото': 325, 'паркетник': 450, 'позашляховик': 450}, 'port': 'CHICAGO'}}}, {'Copart': {'place': {'title': 'FORT WAYNE - Indiana', 'price': {'легковий': 300, 'мото': 250, 'паркетник': 300, 'позашляховик': 300}, 'port': 'CHICAGO'}}}, {'Copart': {'place': {'title': 'FREDERICKSBURG - Virginia', 'price': {'легковий': 250, 'мото': 200, 'паркетник': 250, 'позашляховик': 250}, 'port': 'NORFOLK'}}}, {'Copart': {'place': {'title': 'FREETOWN - Massachusetts', 'price': {'легковий': 375, 'мото': 250, 'паркетник': 375, 'позашляховик': 375}, 'port': 'NEWARK'}}}, {'Copart': {'place': {'title': 'FRESNO - California', 'price': {'легковий': 375, 'мото': 300, 'паркетник': 375, 'позашляховик': 375}, 'port': 'LOS ANGELES'}}}, {'Copart': {'place': {'title': 'FT. PIERCE - Florida', 'price': {'легковий': 200, 'мото': 180, 'паркетник': 200, 'позашляховик': 200}, 'port': 'MIAMI'}}}, {'Copart': {'place': {'title': 'FT. WORTH - Texas', 'price': {'легковий': 275, 'мото': 185, 'паркетник': 275, 'позашляховик': 275}, 'port': 'HOUSTON'}}}, {'Copart': {'place': {'title': 'GASTONIA - North Carolina', 'price': {'легковий': 325, 'мото': 275, 'паркетник': 325, 'позашляховик': 325}, 'port': 'NORFOLK'}}}, {'Copart': {'place': {'title': 'GLASSBORO EAST - New Jersey', 'price': {'легковий': 200, 'мото': 165, 'паркетник': 200, 'позашляховик': 200}, 'port': 'NEWARK'}}}, {'Copart': {'place': {'title': 'GLASSBORO WEST - New Jersey', 'price': {'легковий': 200, 'мото': 165, 'паркетник': 200, 'позашляховик': 200}, 'port': 'NEWARK'}}}, {'Copart': {'place': {'title': 'GRAHAM - Washington', 'price': {'легковий': 150, 'мото': 150, 'паркетник': 150, 'позашляховик': 150}, 'port': 'SEATTLE'}}}, {'Copart': {'place': {'title': 'Grenada - Mississippi', 'price': {'легковий': 425, 'мото': 375, 'паркетник': 425, 'позашляховик': 425}, 'port': 'SAVANNAH'}}}, {'Copart': {'place': {'title': 'HALIFAX - Nova Scotia', 'price': {'легковий': 1200, 'мото': 1150, 'паркетник': 1300, 'позашляховик': 1200}, 'port': 'TORONTO'}}}, {'Copart': {'place': {'title': 'HAMPTON - Virginia', 'price': {'легковий': 150, 'мото': 150, 'паркетник': 150, 'позашляховик': 150}, 'port': 'NORFOLK'}}}, {'Copart': {'place': {'title': 'HARRISBURG - Pennsylvania', 'price': {'легковий': 275, 'мото': 225, 'паркетник': 275, 'позашляховик': 275}, 'port': 'NEWARK'}}}, {'Copart': {'place': {'title': 'HARTFORD - Connecticut', 'price': {'легковий': 225, 'мото': 175, 'паркетник': 225, 'позашляховик': 225}, 'port': 'NEWARK'}}}, {'Copart': {'place': {'title': 'HARTFORD SPRINGFIELD - Connecticut', 'price': {'легковий': 250, 'мото': 200, 'паркетник': 250, 'позашляховик': 250}, 'port': 'NEWARK'}}}, {'Copart': {'place': {'title': 'HAYWARD - California', 'price': {'легковий': 400, 'мото': 300, 'паркетник': 400, 'позашляховик': 400}, 'port': 'LOS ANGELES'}}}, {'Copart': {'place': {'title': 'HELENA - Montana', 'price': {'легковий': 750, 'мото': 750, 'паркетник': 750, 'позашляховик': 750}, 'port': 'SEATTLE'}}}, {'Copart': {'place': {'title': 'HONOLULU - Hawaii', 'price': {'легковий': 120, 'мото': 120, 'паркетник': 120, 'позашляховик': 120}, 'port': 'HONOLULU'}}}, {'Copart': {'place': {'title': 'HOUSTON - Texas', 'price': {'легковий': 180, 'мото': 100, 'паркетник': 180, 'позашляховик': 180}, 'port': 'HOUSTON'}}}, {'Copart': {'place': {'title': 'HOUSTON EAST - Texas', 'price': {'легковий': 180, 'мото': 100, 'паркетник': 180, 'позашляховик': 180}, 'port': 'HOUSTON'}}}, {'Copart': {'place': {'title': 'INDIANAPOLIS - Indiana', 'price': {'легковий': 300, 'мото': 250, 'паркетник': 300, 'позашляховик': 300}, 'port': 'CHICAGO'}}}, {'Copart': {'place': {'title': 'IONIA - Michigan', 'price': {'легковий': 400, 'мото': 300, 'паркетник': 400, 'позашляховик': 400}, 'port': 'CHICAGO'}}}, {'Copart': {'place': {'title': 'JACKSON - Mississippi', 'price': {'легковий': 425, 'мото': 375, 'паркетник': 425, 'позашляховик': 425}, 'port': 'SAVANNAH'}}}, {'Copart': {'place': {'title': 'JACKSONVILLE EAST - Florida', 'price': {'легковий': 225, 'мото': 175, 'паркетник': 225, 'позашляховик': 225}, 'port': 'SAVANNAH'}}}, {'Copart': {'place': {'title': 'JACKSONVILLE NORTH - Florida', 'price': {'легковий': 225, 'мото': 175, 'паркетник': 225, 'позашляховик': 225}, 'port': 'SAVANNAH'}}}, {'Copart': {'place': {'title': 'JACKSONVILLE WEST - Florida', 'price': {'легковий': 225, 'мото': 175, 'паркетник': 225, 'позашляховик': 225}, 'port': 'SAVANNAH'}}}, {'Copart': {'place': {'title': 'KANSAS CITY - Kansas', 'price': {'легковий': 625, 'мото': 450, 'паркетник': 625, 'позашляховик': 625}, 'port': 'SAVANNAH'}}}, {'Copart': {'place': {'title': 'KENS TOWING HILO - Hawaii', 'price': {'легковий': 2100, 'мото': 2100, 'паркетник': 2100, 'позашляховик': 2100}, 'port': 'LOS ANGELES'}}}, {'Copart': {'place': {'title': 'KINCHELOE - Michigan', 'price': {'легковий': 750, 'мото': 650, 'паркетник': 750, 'позашляховик': 750}, 'port': 'CHICAGO'}}}, {'Copart': {'place': {'title': 'KNOXVILLE - Tennessee', 'price': {'легковий': 400, 'мото': 350, 'паркетник': 400, 'позашляховик': 400}, 'port': 'SAVANNAH'}}}, {'Copart': {'place': {'title': 'LANSING - Michigan', 'price': {'легковий': 400, 'мото': 300, 'паркетник': 400, 'позашляховик': 400}, 'port': 'CHICAGO'}}}, {'Copart': {'place': {'title': 'LAS VEGAS - Nevada', 'price': {'легковий': 325, 'мото': 250, 'паркетник': 325, 'позашляховик': 325}, 'port': 'LOS ANGELES'}}}, {'Copart': {'place': {'title': 'LAS VEGAS WEST - Nevada', 'price': {'легковий': 375, 'мото': 300, 'паркетник': 375, 'позашляховик': 375}, 'port': 'LOS ANGELES'}}}, {'Copart': {'place': {'title': 'LEXINGTON EAST - Kentucky', 'price': {'легковий': 550, 'мото': 375, 'паркетник': 550, 'позашляховик': 550}, 'port': 'SAVANNAH'}}}, {'Copart': {'place': {'title': 'LEXINGTON WEST - Kentucky', 'price': {'легковий': 550, 'мото': 375, 'паркетник': 550, 'позашляховик': 550}, 'port': 'SAVANNAH'}}}, {'Copart': {'place': {'title': 'LINCOLN - Nebraska', 'price': {'легковий': 450, 'мото': 350, 'паркетник': 450, 'позашляховик': 450}, 'port': 'CHICAGO'}}}, {'Copart': {'place': {'title': 'LITTLE ROCK - Arkansas', 'price': {'легковий': 450, 'мото': 350, 'паркетник': 450, 'позашляховик': 450}, 'port': 'HOUSTON'}}}, {'Copart': {'place': {'title': 'LONDON - Ontario', 'price': {'легковий': 250, 'мото': 200, 'паркетник': 350, 'позашляховик': 250}, 'port': 'TORONTO'}}}, {'Copart': {'place': {'title': 'LONG BEACH - California', 'price': {'легковий': 150, 'мото': 150, 'паркетник': 150, 'позашляховик': 150}, 'port': 'LOS ANGELES'}}}, {'Copart': {'place': {'title': 'LONG ISLAND - New York', 'price': {'легковий': 250, 'мото': 190, 'паркетник': 250, 'позашляховик': 250}, 'port': 'NEWARK'}}}, {'Copart': {'place': {'title': 'LONGVIEW - Texas', 'price': {'легковий': 275, 'мото': 200, 'паркетник': 275, 'позашляховик': 275}, 'port': 'HOUSTON'}}}, {'Copart': {'place': {'title': 'LOS ANGELES - California', 'price': {'легковий': 160, 'мото': 160, 'паркетник': 160, 'позашляховик': 160}, 'port': 'LOS ANGELES'}}}, {'Copart': {'place': {'title': 'LOUISVILLE - Kentucky', 'price': {'легковий': 550, 'мото': 375, 'паркетник': 550, 'позашляховик': 550}, 'port': 'SAVANNAH'}}}, {'Copart': {'place': {'title': 'LUFKIN - Texas', 'price': {'легковий': 275, 'мото': 200, 'паркетник': 275, 'позашляховик': 275}, 'port': 'HOUSTON'}}}, {'Copart': {'place': {'title': 'LUMBERTON - North Carolina', 'price': {'легковий': 300, 'мото': 250, 'паркетник': 300, 'позашляховик': 300}, 'port': 'NORFOLK'}}}, {'Copart': {'place': {'title': 'LYMAN - Maine', 'price': {'легковий': 475, 'мото': 375, 'паркетник': 475, 'позашляховик': 475}, 'port': 'NEWARK'}}}, {'Copart': {'place': {'title': 'MACON - Georgia', 'price': {'легковий': 250, 'мото': 200, 'паркетник': 250, 'позашляховик': 250}, 'port': 'SAVANNAH'}}}, {'Copart': {'place': {'title': 'MADISON - Wisconsin', 'price': {'легковий': 300, 'мото': 250, 'паркетник': 300, 'позашляховик': 300}, 'port': 'CHICAGO'}}}, {'Copart': {'place': {'title': 'MADISON SOUTH - Wisconsin', 'price': {'легковий': 300, 'мото': 250, 'паркетник': 300, 'позашляховик': 300}, 'port': 'CHICAGO'}}}, {'Copart': {'place': {'title': 'MARTINEZ - California', 'price': {'легковий': 400, 'мото': 300, 'паркетник': 400, 'позашляховик': 400}, 'port': 'LOS ANGELES'}}}, {'Copart': {'place': {'title': 'MCALLEN - Texas', 'price': {'легковий': 350, 'мото': 285, 'паркетник': 350, 'позашляховик': 350}, 'port': 'HOUSTON'}}}, {'Copart': {'place': {'title': 'MEBANE - North Carolina', 'price': {'легковий': 300, 'мото': 250, 'паркетник': 300, 'позашляховик': 300}, 'port': 'NORFOLK'}}}, {'Copart': {'place': {'title': 'MEMPHIS - Tennessee', 'price': {'легковий': 500, 'мото': 425, 'паркетник': 500, 'позашляховик': 500}, 'port': 'SAVANNAH'}}}, {'Copart': {'place': {'title': 'MENTONE - California', 'price': {'легковий': 300, 'мото': 300, 'паркетник': 300, 'позашляховик': 300}, 'port': 'LOS ANGELES'}}}, {'Copart': {'place': {'title': 'MIAMI CENTRAL - Florida', 'price': {'легковий': 125, 'мото': 125, 'паркетник': 125, 'позашляховик': 125}, 'port': 'MIAMI'}}}, {'Copart': {'place': {'title': 'MIAMI NORTH - Florida', 'price': {'легковий': 125, 'мото': 125, 'паркетник': 125, 'позашляховик': 125}, 'port': 'MIAMI'}}}, {'Copart': {'place': {'title': 'MIAMI SOUTH - Florida', 'price': {'легковий': 150, 'мото': 150, 'паркетник': 150, 'позашляховик': 150}, 'port': 'MIAMI'}}}, {'Copart': {'place': {'title': 'MILWAUKEE - Wisconsin', 'price': {'легковий': 225, 'мото': 225, 'паркетник': 225, 'позашляховик': 225}, 'port': 'CHICAGO'}}}, {'Copart': {'place': {'title': 'MILWAUKEE NORTH - Wisconsin', 'price': {'легковий': 225, 'мото': 225, 'паркетник': 225, 'позашляховик': 225}, 'port': 'CHICAGO'}}}, {'Copart': {'place': {'title': 'MILWAUKEE SOUTH - Wisconsin', 'price': {'легковий': 225, 'мото': 225, 'паркетник': 225, 'позашляховик': 225}, 'port': 'CHICAGO'}}}, {'Copart': {'place': {'title': 'MINNEAPOLIS - Minnesota', 'price': {'легковий': 450, 'мото': 350, 'паркетник': 450, 'позашляховик': 450}, 'port': 'CHICAGO'}}}, {'Copart': {'place': {'title': 'MINNEAPOLIS NORTH - Minnesota', 'price': {'легковий': 450, 'мото': 350, 'паркетник': 450, 'позашляховик': 450}, 'port': 'CHICAGO'}}}, {'Copart': {'place': {'title': 'MO - COLUMBIA - Missouri', 'price': {'легковий': 625, 'мото': 425, 'паркетник': 625, 'позашляховик': 625}, 'port': 'SAVANNAH'}}}, {'Copart': {'place': {'title': 'MOBILE - Alabama', 'price': {'легковий': 400, 'мото': 350, 'паркетник': 400, 'позашляховик': 400}, 'port': 'SAVANNAH'}}}, {'Copart': {'place': {'title': 'MOBILE SOUTH - Alabama', 'price': {'легковий': 400, 'мото': 350, 'паркетник': 400, 'позашляховик': 400}, 'port': 'SAVANNAH'}}}, {'Copart': {'place': {'title': 'MOCKSVILLE - North Carolina', 'price': {'легковий': 300, 'мото': 250, 'паркетник': 300, 'позашляховик': 300}, 'port': 'NORFOLK'}}}, {'Copart': {'place': {'title': 'MONCTON - New Brunswick', 'price': {'легковий': 1275, 'мото': 1150, 'паркетник': 1375, 'позашляховик': 1275}, 'port': 'TORONTO'}}}, {'Copart': {'place': {'title': 'MONTGOMERY - Alabama', 'price': {'легковий': 400, 'мото': 350, 'паркетник': 400, 'позашляховик': 400}, 'port': 'SAVANNAH'}}}, {'Copart': {'place': {'title': 'MONTREAL - Quebec', 'price': {'легковий': 500, 'мото': 450, 'паркетник': 600, 'позашляховик': 500}, 'port': 'TORONTO'}}}, {'Copart': {'place': {'title': 'N.Boston-ROWLEY Sublot - Massachusetts', 'price': {'легковий': 450, 'мото': 450, 'паркетник': 450, 'позашляховик': 450}, 'port': 'NEWARK'}}}, {'Copart': {'place': {'title': 'NASHVILLE - Tennessee', 'price': {'легковий': 400, 'мото': 350, 'паркетник': 400, 'позашляховик': 400}, 'port': 'SAVANNAH'}}}, {'Copart': {'place': {'title': 'NEW ORLEANS - Louisiana', 'price': {'легковий': 425, 'мото': 375, 'паркетник': 425, 'позашляховик': 425}, 'port': 'SAVANNAH'}}}, {'Copart': {'place': {'title': 'NEWBURGH - New York', 'price': {'легковий': 225, 'мото': 175, 'паркетник': 225, 'позашляховик': 225}, 'port': 'NEWARK'}}}, {'Copart': {'place': {'title': 'NORTH BOSTON - Massachusetts', 'price': {'легковий': 375, 'мото': 250, 'паркетник': 375, 'позашляховик': 375}, 'port': 'NEWARK'}}}, {'Copart': {'place': {'title': 'NORTH CHARLESTON - South Carolina', 'price': {'легковий': 275, 'мото': 200, 'паркетник': 275, 'позашляховик': 275}, 'port': 'SAVANNAH'}}}, {'Copart': {'place': {'title': 'NORTH SEATTLE - Washington', 'price': {'легковий': 200, 'мото': 200, 'паркетник': 200, 'позашляховик': 200}, 'port': 'SEATTLE'}}}, {'Copart': {'place': {'title': 'OCALA - Florida', 'price': {'легковий': 300, 'мото': 275, 'паркетник': 300, 'позашляховик': 300}, 'port': 'MIAMI'}}}, {'Copart': {'place': {'title': 'OGDEN - Utah', 'price': {'легковий': 550, 'мото': 500, 'паркетник': 550, 'позашляховик': 550}, 'port': 'LOS ANGELES'}}}, {'Copart': {'place': {'title': 'OKLAHOMA CITY - Oklahoma', 'price': {'легковий': 400, 'мото': 300, 'паркетник': 400, 'позашляховик': 400}, 'port': 'HOUSTON'}}}, {'Copart': {'place': {'title': 'ORLANDO - Florida', 'price': {'легковий': 250, 'мото': 225, 'паркетник': 250, 'позашляховик': 250}, 'port': 'MIAMI'}}}, {'Copart': {'place': {'title': 'ORLANDO NORTH - Florida', 'price': {'легковий': 250, 'мото': 225, 'паркетник': 250, 'позашляховик': 250}, 'port': 'MIAMI'}}}, {'Copart': {'place': {'title': 'ORLANDO SOUTH - Florida', 'price': {'легковий': 250, 'мото': 225, 'паркетник': 250, 'позашляховик': 250}, 'port': 'MIAMI'}}}, {'Copart': {'place': {'title': 'OTTAWA - Ontario', 'price': {'легковий': 475, 'мото': 425, 'паркетник': 575, 'позашляховик': 475}, 'port': 'TORONTO'}}}, {'Copart': {'place': {'title': 'PASCO - Washington', 'price': {'легковий': 350, 'мото': 275, 'паркетник': 350, 'позашляховик': 350}, 'port': 'SEATTLE'}}}, {'Copart': {'place': {'title': 'PEORIA - Illinois', 'price': {'легковий': 300, 'мото': 250, 'паркетник': 300, 'позашляховик': 300}, 'port': 'CHICAGO'}}}, {'Copart': {'place': {'title': 'PHILADELPHIA - Pennsylvania', 'price': {'легковий': 200, 'мото': 125, 'паркетник': 200, 'позашляховик': 200}, 'port': 'NEWARK'}}}, {'Copart': {'place': {'title': 'PHILADELPHIA EAST-SUBLOT - Pennsylvania', 'price': {'легковий': 200, 'мото': 125, 'паркетник': 200, 'позашляховик': 200}, 'port': 'NEWARK'}}}, {'Copart': {'place': {'title': 'PHOENIX - Arizona', 'price': {'легковий': 350, 'мото': 300, 'паркетник': 350, 'позашляховик': 350}, 'port': 'LOS ANGELES'}}}, {'Copart': {'place': {'title': 'PITTSBURGH EAST - Pennsylvania', 'price': {'легковий': 400, 'мото': 300, 'паркетник': 400, 'позашляховик': 400}, 'port': 'NEWARK'}}}, {'Copart': {'place': {'title': 'PITTSBURGH NORTH - Pennsylvania', 'price': {'легковий': 450, 'мото': 325, 'паркетник': 450, 'позашляховик': 450}, 'port': 'NEWARK'}}}, {'Copart': {'place': {'title': 'PITTSBURGH SOUTH - Pennsylvania', 'price': {'легковий': 450, 'мото': 325, 'паркетник': 450, 'позашляховик': 450}, 'port': 'NEWARK'}}}, {'Copart': {'place': {'title': 'PITTSBURGH WEST - Pennsylvania', 'price': {'легковий': 450, 'мото': 325, 'паркетник': 450, 'позашляховик': 450}, 'port': 'NEWARK'}}}, {'Copart': {'place': {'title': 'PORTLAND NORTH - Oregon', 'price': {'легковий': 250, 'мото': 250, 'паркетник': 250, 'позашляховик': 250}, 'port': 'SEATTLE'}}}, {'Copart': {'place': {'title': 'PORTLAND SOUTH - Oregon', 'price': {'легковий': 300, 'мото': 275, 'паркетник': 300, 'позашляховик': 300}, 'port': 'SEATTLE'}}}, {'Copart': {'place': {'title': 'PUNTA GORDA - Florida', 'price': {'легковий': 225, 'мото': 200, 'паркетник': 225, 'позашляховик': 225}, 'port': 'MIAMI'}}}, {'Copart': {'place': {'title': 'PUNTA GORDA SOUTH - Florida', 'price': {'легковий': 275, 'мото': 250, 'паркетник': 275, 'позашляховик': 275}, 'port': 'MIAMI'}}}, {'Copart': {'place': {'title': 'RALEIGH - North Carolina', 'price': {'легковий': 300, 'мото': 250, 'паркетник': 300, 'позашляховик': 300}, 'port': 'NORFOLK'}}}, {'Copart': {'place': {'title': 'RANCHO CUCAMONGA - California', 'price': {'легковий': 200, 'мото': 200, 'паркетник': 200, 'позашляховик': 200}, 'port': 'LOS ANGELES'}}}, {'Copart': {'place': {'title': 'RAPID CITY - South Dakota', 'price': {'легковий': 'Call for price', 'мото': 'Call for price', 'паркетник': 'Call for price', 'позашляховик': 'Call for price'}, 'port': 'CHICAGO'}}}, {'Copart': {'place': {'title': 'REDDING - California', 'price': {'легковий': 800, 'мото': 650, 'паркетник': 800, 'позашляховик': 800}, 'port': 'LOS ANGELES'}}}, {'Copart': {'place': {'title': 'RENO - Nevada', 'price': {'легковий': 550, 'мото': 500, 'паркетник': 550, 'позашляховик': 550}, 'port': 'LOS ANGELES'}}}, {'Copart': {'place': {'title': 'RICHMOND - Virginia', 'price': {'легковий': 175, 'мото': 175, 'паркетник': 175, 'позашляховик': 175}, 'port': 'NORFOLK'}}}, {'Copart': {'place': {'title': 'RICHMOND EAST - Virginia', 'price': {'легковий': 175, 'мото': 175, 'паркетник': 175, 'позашляховик': 175}, 'port': 'NORFOLK'}}}, {'Copart': {'place': {'title': 'ROCHESTER - New York', 'price': {'легковий': 450, 'мото': 350, 'паркетник': 450, 'позашляховик': 450}, 'port': 'NEWARK'}}}, {'Copart': {'place': {'title': 'SACRAMENTO - California', 'price': {'легковий': 400, 'мото': 300, 'паркетник': 400, 'позашляховик': 400}, 'port': 'LOS ANGELES'}}}, {'Copart': {'place': {'title': 'SALT LAKE CITY - Utah', 'price': {'легковий': 650, 'мото': 550, 'паркетник': 650, 'позашляховик': 650}, 'port': 'LOS ANGELES'}}}, {'Copart': {'place': {'title': 'SALT LAKE CITY NORTH - Utah', 'price': {'легковий': 550, 'мото': 500, 'паркетник': 550, 'позашляховик': 550}, 'port': 'LOS ANGELES'}}}, {'Copart': {'place': {'title': 'SAN ANTONIO - Texas', 'price': {'легковий': 300, 'мото': 200, 'паркетник': 300, 'позашляховик': 300}, 'port': 'HOUSTON'}}}, {'Copart': {'place': {'title': 'SAN BERNARDINO - California', 'price': {'легковий': 200, 'мото': 200, 'паркетник': 200, 'позашляховик': 200}, 'port': 'LOS ANGELES'}}}, {'Copart': {'place': {'title': 'SAN DIEGO - California', 'price': {'легковий': 300, 'мото': 200, 'паркетник': 300, 'позашляховик': 300}, 'port': 'LOS ANGELES'}}}, {'Copart': {'place': {'title': 'SAN JOSE - California', 'price': {'легковий': 400, 'мото': 300, 'паркетник': 400, 'позашляховик': 400}, 'port': 'LOS ANGELES'}}}, {'Copart': {'place': {'title': 'SAVANNAH - Georgia', 'price': {'легковий': 125, 'мото': 125, 'паркетник': 125, 'позашляховик': 125}, 'port': 'SAVANNAH'}}}, {'Copart': {'place': {'title': 'SAVANNAH / VERTIA SUBLOT-Georgia Copart - Georgia -', 'price': {'легковий': 175, 'мото': 150, 'паркетник': 175, 'позашляховик': 175}, 'port': 'SAVANNAH'}}}, {'Copart': {'place': {'title': 'SC - COLUMBIA - South Carolina', 'price': {'легковий': 275, 'мото': 200, 'паркетник': 275, 'позашляховик': 275}, 'port': 'SAVANNAH'}}}, {'Copart': {'place': {'title': 'SCRANTON - Pennsylvania', 'price': {'легковий': 250, 'мото': 175, 'паркетник': 250, 'позашляховик': 250}, 'port': 'NEWARK'}}}, {'Copart': {'place': {'title': 'SEAFORD - Delaware', 'price': {'легковий': 325, 'мото': 250, 'паркетник': 325, 'позашляховик': 325}, 'port': 'NEWARK'}}}, {'Copart': {'place': {'title': 'SHREVEPORT - Louisiana', 'price': {'легковий': 315, 'мото': 255, 'паркетник': 315, 'позашляховик': 315}, 'port': 'HOUSTON'}}}, {'Copart': {'place': {'title': 'SIKESTON - Missouri', 'price': {'легковий': 475, 'мото': 400, 'паркетник': 475, 'позашляховик': 475}, 'port': 'CHICAGO'}}}, {'Copart': {'place': {'title': 'SO SACRAMENTO - California', 'price': {'легковий': 400, 'мото': 300, 'паркетник': 400, 'позашляховик': 400}, 'port': 'LOS ANGELES'}}}, {'Copart': {'place': {'title': 'SOMERVILLE - New Jersey', 'price': {'легковий': 150, 'мото': 100, 'паркетник': 150, 'позашляховик': 150}, 'port': 'NEWARK'}}}, {'Copart': {'place': {'title': 'SOUTH BOSTON - Massachusetts', 'price': {'легковий': 375, 'мото': 250, 'паркетник': 375, 'позашляховик': 375}, 'port': 'NEWARK'}}}, {'Copart': {'place': {'title': 'SPARTANBURG - South Carolina', 'price': {'легковий': 300, 'мото': 250, 'паркетник': 300, 'позашляховик': 300}, 'port': 'SAVANNAH'}}}, {'Copart': {'place': {'title': 'SPOKANE - Washington', 'price': {'легковий': 350, 'мото': 275, 'паркетник': 350, 'позашляховик': 350}, 'port': 'SEATTLE'}}}, {'Copart': {'place': {'title': 'SPRINGFIELD - Missouri', 'price': {'легковий': 625, 'мото': 425, 'паркетник': 625, 'позашляховик': 625}, 'port': 'SAVANNAH'}}}, {'Copart': {'place': {'title': 'ST. CLOUD - Minnesota', 'price': {'легковий': 500, 'мото': 400, 'паркетник': 500, 'позашляховик': 500}, 'port': 'CHICAGO'}}}, {'Copart': {'place': {'title': "ST. JOHN'S - Newfoundland and Lab", 'price': {'легковий': 1850, 'мото': 1650, 'паркетник': 1950, 'позашляховик': 1850}, 'port': 'TORONTO'}}}, {'Copart': {'place': {'title': 'ST. LOUIS - Missouri', 'price': {'легковий': 575, 'мото': 425, 'паркетник': 575, 'позашляховик': 575}, 'port': 'SAVANNAH'}}}, {'Copart': {'place': {'title': 'SUN VALLEY - California', 'price': {'легковий': 200, 'мото': 200, 'паркетник': 200, 'позашляховик': 200}, 'port': 'LOS ANGELES'}}}, {'Copart': {'place': {'title': 'SYRACUSE - New York', 'price': {'легковий': 325, 'мото': 275, 'паркетник': 325, 'позашляховик': 325}, 'port': 'NEWARK'}}}, {'Copart': {'place': {'title': 'Southern Illinois - Illinois', 'price': {'легковий': 575, 'мото': 425, 'паркетник': 575, 'позашляховик': 575}, 'port': 'SAVANNAH'}}}, {'Copart': {'place': {'title': 'TALLAHASSEE - Florida', 'price': {'легковий': 325, 'мото': 250, 'паркетник': 325, 'позашляховик': 325}, 'port': 'SAVANNAH'}}}, {'Copart': {'place': {'title': 'TAMPA SOUTH - Florida', 'price': {'легковий': 250, 'мото': 225, 'паркетник': 250, 'позашляховик': 250}, 'port': 'MIAMI'}}}, {'Copart': {'place': {'title': 'TAMPA SOUTH - Mulberry Sublot - Florida', 'price': {'легковий': 275, 'мото': 250, 'паркетник': 275, 'позашляховик': 275}, 'port': 'MIAMI'}}}, {'Copart': {'place': {'title': 'TANNER - Alabama', 'price': {'легковий': 425, 'мото': 350, 'паркетник': 425, 'позашляховик': 425}, 'port': 'SAVANNAH'}}}, {'Copart': {'place': {'title': 'TIFTON - Georgia', 'price': {'легковий': 275, 'мото': 225, 'паркетник': 275, 'позашляховик': 275}, 'port': 'SAVANNAH'}}}, {'Copart': {'place': {'title': 'TORONTO - Ontario', 'price': {'легковий': 225, 'мото': 175, 'паркетник': 325, 'позашляховик': 225}, 'port': 'TORONTO'}}}, {'Copart': {'place': {'title': 'TOW GUYS KAMUELA - Hawaii', 'price': {'легковий': 2300, 'мото': 2300, 'паркетник': 2300, 'позашляховик': 2300}, 'port': 'LOS ANGELES'}}}, {'Copart': {'place': {'title': 'TRENTON - New Jersey', 'price': {'легковий': 150, 'мото': 100, 'паркетник': 150, 'позашляховик': 150}, 'port': 'NEWARK'}}}, {'Copart': {'place': {'title': 'TUCSON - Arizona', 'price': {'легковий': 400, 'мото': 350, 'паркетник': 400, 'позашляховик': 400}, 'port': 'LOS ANGELES'}}}, {'Copart': {'place': {'title': 'TULSA - Oklahoma', 'price': {'легковий': 475, 'мото': 375, 'паркетник': 475, 'позашляховик': 475}, 'port': 'HOUSTON'}}}, {'Copart': {'place': {'title': 'VALLEJO - California', 'price': {'легковий': 400, 'мото': 300, 'паркетник': 400, 'позашляховик': 400}, 'port': 'LOS ANGELES'}}}, {'Copart': {'place': {'title': 'VAN NUYS - California', 'price': {'легковий': 200, 'мото': 200, 'паркетник': 200, 'позашляховик': 200}, 'port': 'LOS ANGELES'}}}, {'Copart': {'place': {'title': 'WACO - Texas', 'price': {'легковий': 325, 'мото': 250, 'паркетник': 325, 'позашляховик': 325}, 'port': 'HOUSTON'}}}, {'Copart': {'place': {'title': 'WALTON - Kentucky', 'price': {'легковий': 550, 'мото': 375, 'паркетник': 550, 'позашляховик': 550}, 'port': 'SAVANNAH'}}}, {'Copart': {'place': {'title': 'WASHINGTON DC - Maryland', 'price': {'легковий': 300, 'мото': 250, 'паркетник': 300, 'позашляховик': 300}, 'port': 'NORFOLK'}}}, {'Copart': {'place': {'title': 'WAYLAND - Michigan - Michigan', 'price': {'легковий': 400, 'мото': 300, 'паркетник': 400, 'позашляховик': 400}, 'port': 'CHICAGO'}}}, {'Copart': {'place': {'title': 'WEBSTER - New Hampshire', 'price': {'легковий': 400, 'мото': 300, 'паркетник': 400, 'позашляховик': 400}, 'port': 'NEWARK'}}}, {'Copart': {'place': {'title': 'WEST PALM BEACH - Florida', 'price': {'легковий': 170, 'мото': 170, 'паркетник': 170, 'позашляховик': 170}, 'port': 'MIAMI'}}}, {'Copart': {'place': {'title': 'WEST WARREN - Massachusetts', 'price': {'легковий': 375, 'мото': 250, 'паркетник': 375, 'позашляховик': 375}, 'port': 'NEWARK'}}}, {'Copart': {'place': {'title': 'WHEELING - Illinois', 'price': {'легковий': 180, 'мото': 180, 'паркетник': 180, 'позашляховик': 180}, 'port': 'CHICAGO'}}}, {'Copart': {'place': {'title': 'WICHITA - Kansas', 'price': {'легковий': 550, 'мото': 450, 'паркетник': 550, 'позашляховик': 550}, 'port': 'HOUSTON'}}}, {'Copart': {'place': {'title': 'Windham - Maine', 'price': {'легковий': 475, 'мото': 375, 'паркетник': 475, 'позашляховик': 475}, 'port': 'NEWARK'}}}, {'Copart': {'place': {'title': 'YORK HAVEN - Pennsylvania', 'price': {'легковий': 275, 'мото': 225, 'паркетник': 275, 'позашляховик': 275}, 'port': 'NEWARK'}}}, {'IAAI': {'place': {'title': 'ABILENE - Texas', 'price': {'легковий': 350, 'мото': 300, 'паркетник': 350, 'позашляховик': 350}, 'port': 'HOUSTON'}}}, {'IAAI': {'place': {'title': 'ACE - Carson - California', 'price': {'легковий': 160, 'мото': 160, 'паркетник': 160, 'позашляховик': 160}, 'port': 'LOS ANGELES'}}}, {'IAAI': {'place': {'title': 'ACE - PERRIS 2 - California', 'price': {'легковий': 275, 'мото': 275, 'паркетник': 275, 'позашляховик': 275}, 'port': 'LOS ANGELES'}}}, {'IAAI': {'place': {'title': 'ACE - Perris - California', 'price': {'легковий': 250, 'мото': 250, 'паркетник': 250, 'позашляховик': 250}, 'port': 'LOS ANGELES'}}}, {'IAAI': {'place': {'title': 'AKRON-CANTON - Ohio', 'price': {'легковий': 550, 'мото': 400, 'паркетник': 550, 'позашляховик': 550}, 'port': 'NORFOLK'}}}, {'IAAI': {'place': {'title': 'ALBANY - New York', 'price': {'легковий': 275, 'мото': 225, 'паркетник': 275, 'позашляховик': 275}, 'port': 'NEWARK'}}}, {'IAAI': {'place': {'title': 'ALBUQUERQUE - New Mexico', 'price': {'легковий': 600, 'мото': 400, 'паркетник': 600, 'позашляховик': 600}, 'port': 'HOUSTON'}}}, {'IAAI': {'place': {'title': 'ALTOONA - Pennsylvania', 'price': {'легковий': 450, 'мото': 325, 'паркетник': 450, 'позашляховик': 450}, 'port': 'NEWARK'}}}, {'IAAI': {'place': {'title': 'AMARILLO - Texas', 'price': {'легковий': 525, 'мото': 375, 'паркетник': 525, 'позашляховик': 525}, 'port': 'HOUSTON'}}}, {'IAAI': {'place': {'title': 'ANAHEIM - California', 'price': {'легковий': 200, 'мото': 200, 'паркетник': 200, 'позашляховик': 200}, 'port': 'LOS ANGELES'}}}, {'IAAI': {'place': {'title': 'ANCHORAGE - Alaska', 'price': {'легковий': 'Call for price', 'мото': 'Call for price', 'паркетник': 'Call for price', 'позашляховик': 'Call for price'}, 'port': 'ANCHORAGE'}}}, {'IAAI': {'place': {'title': 'APPLETON - Wisconsin', 'price': {'легковий': 325, 'мото': 275, 'паркетник': 325, 'позашляховик': 325}, 'port': 'CHICAGO'}}}, {'IAAI': {'place': {'title': 'ASHEVILLE - North Carolina', 'price': {'легковий': 400, 'мото': 350, 'паркетник': 400, 'позашляховик': 400}, 'port': 'NORFOLK'}}}, {'IAAI': {'place': {'title': 'ASHLAND - Kentucky', 'price': {'легковий': 'Call for price', 'мото': 'Call for price', 'паркетник': 'Call for price', 'позашляховик': 'Call for price'}, 'port': 'CHICAGO'}}}, {'IAAI': {'place': {'title': 'ATLANTA - Georgia', 'price': {'легковий': 300, 'мото': 250, 'паркетник': 300, 'позашляховик': 300}, 'port': 'SAVANNAH'}}}, {'IAAI': {'place': {'title': 'ATLANTA EAST - Georgia', 'price': {'легковий': 325, 'мото': 275, 'паркетник': 325, 'позашляховик': 325}, 'port': 'SAVANNAH'}}}, {'IAAI': {'place': {'title': 'ATLANTA NORTH - Georgia', 'price': {'легковий': 300, 'мото': 250, 'паркетник': 300, 'позашляховик': 300}, 'port': 'SAVANNAH'}}}, {'IAAI': {'place': {'title': 'ATLANTA SOUTH - Georgia', 'price': {'легковий': 300, 'мото': 250, 'паркетник': 300, 'позашляховик': 300}, 'port': 'SAVANNAH'}}}, {'IAAI': {'place': {'title': 'AUSTIN - Texas', 'price': {'легковий': 250, 'мото': 175, 'паркетник': 250, 'позашляховик': 250}, 'port': 'HOUSTON'}}}, {'IAAI': {'place': {'title': 'AVENEL NEW JERSEY - New Jersey', 'price': {'легковий': 125, 'мото': 75, 'паркетник': 125, 'позашляховик': 125}, 'port': 'NEWARK'}}}, {'IAAI': {'place': {'title': 'BALTIMORE - Maryland', 'price': {'легковий': 350, 'мото': 250, 'паркетник': 350, 'позашляховик': 350}, 'port': 'NORFOLK'}}}, {'IAAI': {'place': {'title': 'BATON ROUGE - Louisiana', 'price': {'легковий': 475, 'мото': 375, 'паркетник': 475, 'позашляховик': 475}, 'port': 'SAVANNAH'}}}, {'IAAI': {'place': {'title': 'BILLINGS - Montana', 'price': {'легковий': 850, 'мото': 850, 'паркетник': 850, 'позашляховик': 850}, 'port': 'SEATTLE'}}}, {'IAAI': {'place': {'title': 'BIRMINGHAM - Alabama', 'price': {'легковий': 375, 'мото': 325, 'паркетник': 375, 'позашляховик': 375}, 'port': 'SAVANNAH'}}}, {'IAAI': {'place': {'title': 'BOISE - Idaho', 'price': {'легковий': 450, 'мото': 450, 'паркетник': 450, 'позашляховик': 450}, 'port': 'SEATTLE'}}}, {'IAAI': {'place': {'title': 'BOSTON - SHIRLEY - Massachusetts', 'price': {'легковий': 375, 'мото': 250, 'паркетник': 375, 'позашляховик': 375}, 'port': 'NEWARK'}}}, {'IAAI': {'place': {'title': 'BOWLING GREEN - Kentucky', 'price': {'легковий': 'Call for price', 'мото': 'Call for price', 'паркетник': 'Call for price', 'позашляховик': 'Call for price'}, 'port': 'CHICAGO'}}}, {'IAAI': {'place': {'title': 'BRIDGEPORT - Pennsylvania', 'price': {'легковий': 200, 'мото': 125, 'паркетник': 200, 'позашляховик': 200}, 'port': 'NEWARK'}}}, {'IAAI': {'place': {'title': 'BUCKHANNON - West Virginia', 'price': {'легковий': 625, 'мото': 500, 'паркетник': 625, 'позашляховик': 625}, 'port': 'NORFOLK'}}}, {'IAAI': {'place': {'title': 'BUFFALO - New York', 'price': {'легковий': 500, 'мото': 375, 'паркетник': 500, 'позашляховик': 500}, 'port': 'NEWARK'}}}, {'IAAI': {'place': {'title': 'BURLINGTON - Vermont', 'price': {'легковий': 500, 'мото': 400, 'паркетник': 500, 'позашляховик': 500}, 'port': 'NEWARK'}}}, {'IAAI': {'place': {'title': 'BZ Trucking - Hawaii', 'price': {'легковий': 2300, 'мото': 2300, 'паркетник': 2300, 'позашляховик': 2300}, 'port': 'LOS ANGELES'}}}, {'IAAI': {'place': {'title': 'CASPER - Wyoming', 'price': {'легковий': 'Call for price', 'мото': 'Call for price', 'паркетник': 'Call for price', 'позашляховик': 'Call for price'}, 'port': 'CHICAGO'}}}, {'IAAI': {'place': {'title': 'CENTRAL NEW JERSEY - New Jersey', 'price': {'легковий': 150, 'мото': 125, 'паркетник': 150, 'позашляховик': 150}, 'port': 'NEWARK'}}}, {'IAAI': {'place': {'title': 'CHARLESTON - South Carolina', 'price': {'легковий': 275, 'мото': 200, 'паркетник': 275, 'позашляховик': 275}, 'port': 'SAVANNAH'}}}, {'IAAI': {'place': {'title': 'CHARLOTTE - North Carolina', 'price': {'легковий': 300, 'мото': 250, 'паркетник': 300, 'позашляховик': 300}, 'port': 'NORFOLK'}}}, {'IAAI': {'place': {'title': 'CHATTANOOGA - Tennessee', 'price': {'легковий': 475, 'мото': 375, 'паркетник': 475, 'позашляховик': 475}, 'port': 'SAVANNAH'}}}, {'IAAI': {'place': {'title': 'CHICAGO-NORTH - Illinois', 'price': {'легковий': 180, 'мото': 180, 'паркетник': 180, 'позашляховик': 180}, 'port': 'CHICAGO'}}}, {'IAAI': {'place': {'title': 'CHICAGO-SOUTH - Illinois', 'price': {'легковий': 180, 'мото': 180, 'паркетник': 180, 'позашляховик': 180}, 'port': 'CHICAGO'}}}, {'IAAI': {'place': {'title': 'CHICAGO-WEST - Illinois', 'price': {'легковий': 180, 'мото': 180, 'паркетник': 180, 'позашляховик': 180}, 'port': 'CHICAGO'}}}, {'IAAI': {'place': {'title': 'CINCINNATI - Ohio', 'price': {'легковий': 550, 'мото': 400, 'паркетник': 550, 'позашляховик': 550}, 'port': 'NORFOLK'}}}, {'IAAI': {'place': {'title': 'CINCINNATI SOUTH - Ohio', 'price': {'легковий': 550, 'мото': 400, 'паркетник': 550, 'позашляховик': 550}, 'port': 'NORFOLK'}}}, {'IAAI': {'place': {'title': 'CLEARWATER - Florida', 'price': {'легковий': 250, 'мото': 225, 'паркетник': 250, 'позашляховик': 250}, 'port': 'MIAMI'}}}, {'IAAI': {'place': {'title': 'CLEVELAND - Ohio', 'price': {'легковий': 550, 'мото': 400, 'паркетник': 550, 'позашляховик': 550}, 'port': 'NORFOLK'}}}, {'IAAI': {'place': {'title': 'COLTON - California', 'price': {'легковий': 200, 'мото': 200, 'паркетник': 200, 'позашляховик': 200}, 'port': 'LOS ANGELES'}}}, {'IAAI': {'place': {'title': 'COLUMBIA - South Carolina', 'price': {'легковий': 275, 'мото': 200, 'паркетник': 275, 'позашляховик': 275}, 'port': 'SAVANNAH'}}}, {'IAAI': {'place': {'title': 'COLUMBUS - Ohio', 'price': {'легковий': 550, 'мото': 400, 'паркетник': 550, 'позашляховик': 550}, 'port': 'NORFOLK'}}}, {'IAAI': {'place': {'title': 'CONCORD - North Carolina', 'price': {'легковий': 300, 'мото': 250, 'паркетник': 300, 'позашляховик': 300}, 'port': 'NORFOLK'}}}, {'IAAI': {'place': {'title': 'CORPUS CHRISTI - Texas', 'price': {'легковий': 275, 'мото': 225, 'паркетник': 275, 'позашляховик': 275}, 'port': 'HOUSTON'}}}, {'IAAI': {'place': {'title': 'CULPEPER - Virginia', 'price': {'легковий': 250, 'мото': 200, 'паркетник': 250, 'позашляховик': 250}, 'port': 'NORFOLK'}}}, {'IAAI': {'place': {'title': 'Colorado Springs - Colorado', 'price': {'легковий': 650, 'мото': 500, 'паркетник': 650, 'позашляховик': 650}, 'port': 'CHICAGO'}}}, {'IAAI': {'place': {'title': 'D&D TOWING INC MAUI - Hawaii', 'price': {'легковий': 2400, 'мото': 2400, 'паркетник': 2400, 'позашляховик': 2400}, 'port': 'LOS ANGELES'}}}, {'IAAI': {'place': {'title': 'DALLAS - Texas', 'price': {'легковий': 275, 'мото': 185, 'паркетник': 275, 'позашляховик': 275}, 'port': 'HOUSTON'}}}, {'IAAI': {'place': {'title': 'DAVENPORT - Iowa', 'price': {'легковий': 325, 'мото': 275, 'паркетник': 325, 'позашляховик': 325}, 'port': 'CHICAGO'}}}, {'IAAI': {'place': {'title': 'DAYTON - Ohio', 'price': {'легковий': 550, 'мото': 400, 'паркетник': 550, 'позашляховик': 550}, 'port': 'NORFOLK'}}}, {'IAAI': {'place': {'title': 'DC TOWING HILO - Hawaii', 'price': {'легковий': 2100, 'мото': 2100, 'паркетник': 2100, 'позашляховик': 2100}, 'port': 'LOS ANGELES'}}}, {'IAAI': {'place': {'title': 'DENVER - Colorado', 'price': {'легковий': 650, 'мото': 500, 'паркетник': 650, 'позашляховик': 650}, 'port': 'CHICAGO'}}}, {'IAAI': {'place': {'title': 'DENVER EAST - Colorado', 'price': {'легковий': 650, 'мото': 500, 'паркетник': 650, 'позашляховик': 650}, 'port': 'CHICAGO'}}}, {'IAAI': {'place': {'title': 'DES MOINES - Iowa', 'price': {'легковий': 400, 'мото': 300, 'паркетник': 400, 'позашляховик': 400}, 'port': 'CHICAGO'}}}, {'IAAI': {'place': {'title': 'DETROIT - Michigan', 'price': {'легковий': 400, 'мото': 300, 'паркетник': 400, 'позашляховик': 400}, 'port': 'CHICAGO'}}}, {'IAAI': {'place': {'title': 'DOTHAN - Alabama', 'price': {'легковий': 375, 'мото': 325, 'паркетник': 375, 'позашляховик': 375}, 'port': 'SAVANNAH'}}}, {'IAAI': {'place': {'title': 'DUNDALK - Maryland', 'price': {'легковий': 300, 'мото': 250, 'паркетник': 300, 'позашляховик': 300}, 'port': 'NORFOLK'}}}, {'IAAI': {'place': {'title': 'Dallas/Ft Worth - Texas', 'price': {'легковий': 275, 'мото': 185, 'паркетник': 275, 'позашляховик': 275}, 'port': 'HOUSTON'}}}, {'IAAI': {'place': {'title': 'EAST BAY - California', 'price': {'легковий': 400, 'мото': 300, 'паркетник': 400, 'позашляховик': 400}, 'port': 'LOS ANGELES'}}}, {'IAAI': {'place': {'title': 'EL PASO - Texas', 'price': {'легковий': 425, 'мото': 375, 'паркетник': 425, 'позашляховик': 425}, 'port': 'HOUSTON'}}}, {'IAAI': {'place': {'title': 'ERIE - Pennsylvania', 'price': {'легковий': 500, 'мото': 350, 'паркетник': 500, 'позашляховик': 500}, 'port': 'NEWARK'}}}, {'IAAI': {'place': {'title': 'EUGENE - Oregon', 'price': {'легковий': 375, 'мото': 300, 'паркетник': 375, 'позашляховик': 375}, 'port': 'SEATTLE'}}}, {'IAAI': {'place': {'title': 'Elkton - Maryland', 'price': {'легковий': 350, 'мото': 300, 'паркетник': 350, 'позашляховик': 350}, 'port': 'NORFOLK'}}}, {'IAAI': {'place': {'title': 'Englishtown - New Jersey', 'price': {'легковий': 150, 'мото': 100, 'паркетник': 150, 'позашляховик': 150}, 'port': 'NEWARK'}}}, {'IAAI': {'place': {'title': 'FARGO - North Dakota', 'price': {'легковий': 650, 'мото': 550, 'паркетник': 650, 'позашляховик': 650}, 'port': 'CHICAGO'}}}, {'IAAI': {'place': {'title': 'FAYETTEVILLE - Arkansas', 'price': {'легковий': 475, 'мото': 375, 'паркетник': 475, 'позашляховик': 475}, 'port': 'HOUSTON'}}}, {'IAAI': {'place': {'title': 'FLINT - Michigan', 'price': {'легковий': 450, 'мото': 325, 'паркетник': 450, 'позашляховик': 450}, 'port': 'CHICAGO'}}}, {'IAAI': {'place': {'title': 'FONTANA - California', 'price': {'легковий': 200, 'мото': 200, 'паркетник': 200, 'позашляховик': 200}, 'port': 'LOS ANGELES'}}}, {'IAAI': {'place': {'title': 'FORT MYERS - Florida', 'price': {'легковий': 250, 'мото': 225, 'паркетник': 250, 'позашляховик': 250}, 'port': 'MIAMI'}}}, {'IAAI': {'place': {'title': 'FORT PIERCE - Florida', 'price': {'легковий': 200, 'мото': 180, 'паркетник': 200, 'позашляховик': 200}, 'port': 'MIAMI'}}}, {'IAAI': {'place': {'title': 'FREMONT - California', 'price': {'легковий': 400, 'мото': 300, 'паркетник': 400, 'позашляховик': 400}, 'port': 'LOS ANGELES'}}}, {'IAAI': {'place': {'title': 'FRESNO - California', 'price': {'легковий': 375, 'мото': 300, 'паркетник': 375, 'позашляховик': 375}, 'port': 'LOS ANGELES'}}}, {'IAAI': {'place': {'title': 'Fort Wayne - Indiana', 'price': {'легковий': 300, 'мото': 250, 'паркетник': 300, 'позашляховик': 300}, 'port': 'CHICAGO'}}}, {'IAAI': {'place': {'title': 'Fort Worth North - Texas', 'price': {'легковий': 275, 'мото': 200, 'паркетник': 275, 'позашляховик': 275}, 'port': 'HOUSTON'}}}, {'IAAI': {'place': {'title': 'Fredericksburg-South - Virginia', 'price': {'легковий': 250, 'мото': 200, 'паркетник': 250, 'позашляховик': 250}, 'port': 'NORFOLK'}}}, {'IAAI': {'place': {'title': 'GRAND RAPIDS - Michigan', 'price': {'легковий': 400, 'мото': 300, 'паркетник': 400, 'позашляховик': 400}, 'port': 'CHICAGO'}}}, {'IAAI': {'place': {'title': 'GREENSBORO - North Carolina', 'price': {'легковий': 300, 'мото': 250, 'паркетник': 300, 'позашляховик': 300}, 'port': 'NORFOLK'}}}, {'IAAI': {'place': {'title': 'GREENVILLE - South Carolina', 'price': {'легковий': 300, 'мото': 275, 'паркетник': 300, 'позашляховик': 300}, 'port': 'SAVANNAH'}}}, {'IAAI': {'place': {'title': 'GRENADA - Mississippi', 'price': {'легковий': 425, 'мото': 375, 'паркетник': 425, 'позашляховик': 425}, 'port': 'SAVANNAH'}}}, {'IAAI': {'place': {'title': 'GULF COAST - Mississippi', 'price': {'легковий': 400, 'мото': 350, 'паркетник': 400, 'позашляховик': 400}, 'port': 'SAVANNAH'}}}, {'IAAI': {'place': {'title': 'HARTFORD - Connecticut', 'price': {'легковий': 225, 'мото': 175, 'паркетник': 225, 'позашляховик': 225}, 'port': 'NEWARK'}}}, {'IAAI': {'place': {'title': 'HARTFORD-SOUTH - Connecticut', 'price': {'легковий': 225, 'мото': 175, 'паркетник': 225, 'позашляховик': 225}, 'port': 'NEWARK'}}}, {'IAAI': {'place': {'title': 'HIGH DESERT - California', 'price': {'легковий': 300, 'мото': 250, 'паркетник': 300, 'позашляховик': 300}, 'port': 'LOS ANGELES'}}}, {'IAAI': {'place': {'title': 'HIGH POINT - North Carolina', 'price': {'легковий': 300, 'мото': 250, 'паркетник': 300, 'позашляховик': 300}, 'port': 'NORFOLK'}}}, {'IAAI': {'place': {'title': 'HONOLULU - Hawaii', 'price': {'легковий': 120, 'мото': 120, 'паркетник': 120, 'позашляховик': 120}, 'port': 'HONOLULU'}}}, {'IAAI': {'place': {'title': 'HOUSTON - Texas', 'price': {'легковий': 180, 'мото': 100, 'паркетник': 180, 'позашляховик': 180}, 'port': 'HOUSTON'}}}, {'IAAI': {'place': {'title': 'HOUSTON SOUTH - Texas', 'price': {'легковий': 180, 'мото': 100, 'паркетник': 180, 'позашляховик': 180}, 'port': 'HOUSTON'}}}, {'IAAI': {'place': {'title': 'HOUSTON-NORTH - Texas', 'price': {'легковий': 165, 'мото': 100, 'паркетник': 165, 'позашляховик': 165}, 'port': 'HOUSTON'}}}, {'IAAI': {'place': {'title': 'HUNTSVILLE - Alabama', 'price': {'легковий': 450, 'мото': 400, 'паркетник': 450, 'позашляховик': 450}, 'port': 'SAVANNAH'}}}, {'IAAI': {'place': {'title': 'INDIANAPOLIS - Indiana', 'price': {'легковий': 300, 'мото': 250, 'паркетник': 300, 'позашляховик': 300}, 'port': 'CHICAGO'}}}, {'IAAI': {'place': {'title': 'Indianapolis South - Indiana', 'price': {'легковий': 600, 'мото': 400, 'паркетник': 600, 'позашляховик': 600}, 'port': 'SAVANNAH'}}}, {'IAAI': {'place': {'title': 'JACKSON - Mississippi', 'price': {'легковий': 425, 'мото': 375, 'паркетник': 425, 'позашляховик': 425}, 'port': 'SAVANNAH'}}}, {'IAAI': {'place': {'title': 'JACKSONVILLE - Florida', 'price': {'легковий': 225, 'мото': 175, 'паркетник': 225, 'позашляховик': 225}, 'port': 'SAVANNAH'}}}, {'IAAI': {'place': {'title': 'KANSAS CITY - Kansas', 'price': {'легковий': 625, 'мото': 450, 'паркетник': 625, 'позашляховик': 625}, 'port': 'SAVANNAH'}}}, {'IAAI': {'place': {'title': 'KNOXVILLE - Tennessee', 'price': {'легковий': 400, 'мото': 350, 'паркетник': 400, 'позашляховик': 400}, 'port': 'SAVANNAH'}}}, {'IAAI': {'place': {'title': 'Kansas City East - Missouri', 'price': {'легковий': 625, 'мото': 450, 'паркетник': 625, 'позашляховик': 625}, 'port': 'SAVANNAH'}}}, {'IAAI': {'place': {'title': 'LAFAYETTE - Louisiana', 'price': {'легковий': 400, 'мото': 375, 'паркетник': 400, 'позашляховик': 400}, 'port': 'SAVANNAH'}}}, {'IAAI': {'place': {'title': 'LAS VEGAS - (OLD) - Nevada', 'price': {'легковий': 325, 'мото': 250, 'паркетник': 325, 'позашляховик': 325}, 'port': 'LOS ANGELES'}}}, {'IAAI': {'place': {'title': 'LAS VEGAS - Nevada', 'price': {'легковий': 375, 'мото': 300, 'паркетник': 375, 'позашляховик': 375}, 'port': 'LOS ANGELES'}}}, {'IAAI': {'place': {'title': 'LAUREL - Maryland', 'price': {'легковий': 300, 'мото': 250, 'паркетник': 300, 'позашляховик': 300}, 'port': 'NORFOLK'}}}, {'IAAI': {'place': {'title': "LEE'S TOWING KAUAI - Hawaii", 'price': {'легковий': 2750, 'мото': 2750, 'паркетник': 3150, 'позашляховик': 2950}, 'port': 'LOS ANGELES'}}}, {'IAAI': {'place': {'title': "LEE'S TOWING KAUAI - Hawaii", 'price': {'легковий': 1750, 'мото': 1750, 'паркетник': 2050, 'позашляховик': 1750}, 'port': 'HONOLULU'}}}, {'IAAI': {'place': {'title': 'LINCOLN - Illinois', 'price': {'легковий': 300, 'мото': 250, 'паркетник': 300, 'позашляховик': 300}, 'port': 'CHICAGO'}}}, {'IAAI': {'place': {'title': 'LITTLE ROCK - Arkansas', 'price': {'легковий': 450, 'мото': 350, 'паркетник': 450, 'позашляховик': 450}, 'port': 'HOUSTON'}}}, {'IAAI': {'place': {'title': 'LONG ISLAND - New York', 'price': {'легковий': 250, 'мото': 190, 'паркетник': 250, 'позашляховик': 250}, 'port': 'NEWARK'}}}, {'IAAI': {'place': {'title': 'LONGVIEW - Texas', 'price': {'легковий': 275, 'мото': 200, 'паркетник': 275, 'позашляховик': 275}, 'port': 'HOUSTON'}}}, {'IAAI': {'place': {'title': 'LOS ANGELES - California', 'price': {'легковий': 160, 'мото': 160, 'паркетник': 160, 'позашляховик': 160}, 'port': 'LOS ANGELES'}}}, {'IAAI': {'place': {'title': 'LOUISVILLE - Kentucky', 'price': {'легковий': 550, 'мото': 375, 'паркетник': 550, 'позашляховик': 550}, 'port': 'SAVANNAH'}}}, {'IAAI': {'place': {'title': 'LOUISVILLE NORTH - Kentucky', 'price': {'легковий': 550, 'мото': 375, 'паркетник': 550, 'позашляховик': 550}, 'port': 'SAVANNAH'}}}, {'IAAI': {'place': {'title': 'LUBBOCK - Texas', 'price': {'легковий': 450, 'мото': 350, 'паркетник': 450, 'позашляховик': 450}, 'port': 'HOUSTON'}}}, {'IAAI': {'place': {'title': 'Lexington - South Carolina', 'price': {'легковий': 250, 'мото': 200, 'паркетник': 250, 'позашляховик': 250}, 'port': 'SAVANNAH'}}}, {'IAAI': {'place': {'title': 'Los Angeles South - California', 'price': {'легковий': 150, 'мото': 150, 'паркетник': 150, 'позашляховик': 150}, 'port': 'LOS ANGELES'}}}, {'IAAI': {'place': {'title': 'MACON - Georgia', 'price': {'легковий': 275, 'мото': 200, 'паркетник': 275, 'позашляховик': 275}, 'port': 'SAVANNAH'}}}, {'IAAI': {'place': {'title': 'MANCHESTER - New Hampshire', 'price': {'легковий': 400, 'мото': 300, 'паркетник': 400, 'позашляховик': 400}, 'port': 'NEWARK'}}}, {'IAAI': {'place': {'title': 'MCALLEN - Texas', 'price': {'легковий': 350, 'мото': 285, 'паркетник': 350, 'позашляховик': 350}, 'port': 'HOUSTON'}}}, {'IAAI': {'place': {'title': 'MEMPHIS - Tennessee', 'price': {'легковий': 500, 'мото': 425, 'паркетник': 500, 'позашляховик': 500}, 'port': 'SAVANNAH'}}}, {'IAAI': {'place': {'title': 'METRO DC - Maryland', 'price': {'легковий': 300, 'мото': 250, 'паркетник': 300, 'позашляховик': 300}, 'port': 'NORFOLK'}}}, {'IAAI': {'place': {'title': 'MIAMI - Florida', 'price': {'легковий': 125, 'мото': 125, 'паркетник': 125, 'позашляховик': 125}, 'port': 'MIAMI'}}}, {'IAAI': {'place': {'title': 'MIAMI-NORTH - Florida', 'price': {'легковий': 150, 'мото': 150, 'паркетник': 150, 'позашляховик': 150}, 'port': 'MIAMI'}}}, {'IAAI': {'place': {'title': 'MILWAUKEE - Wisconsin', 'price': {'легковий': 225, 'мото': 225, 'паркетник': 225, 'позашляховик': 225}, 'port': 'CHICAGO'}}}, {'IAAI': {'place': {'title': 'MINNEAPOLIS/ST. PAUL - Minnesota', 'price': {'легковий': 450, 'мото': 350, 'паркетник': 450, 'позашляховик': 450}, 'port': 'CHICAGO'}}}, {'IAAI': {'place': {'title': 'MISSOULA - Montana', 'price': {'легковий': 600, 'мото': 600, 'паркетник': 600, 'позашляховик': 600}, 'port': 'SEATTLE'}}}, {'IAAI': {'place': {'title': 'Minneapolis South - Minnesota', 'price': {'легковий': 450, 'мото': 350, 'паркетник': 450, 'позашляховик': 450}, 'port': 'CHICAGO'}}}, {'IAAI': {'place': {'title': 'NASHVILLE - Tennessee', 'price': {'легковий': 400, 'мото': 350, 'паркетник': 400, 'позашляховик': 400}, 'port': 'SAVANNAH'}}}, {'IAAI': {'place': {'title': 'NEW CASTLE - Delaware', 'price': {'легковий': 250, 'мото': 225, 'паркетник': 250, 'позашляховик': 250}, 'port': 'NEWARK'}}}, {'IAAI': {'place': {'title': 'NEW ORLEANS - Louisiana', 'price': {'легковий': 425, 'мото': 375, 'паркетник': 425, 'позашляховик': 425}, 'port': 'SAVANNAH'}}}, {'IAAI': {'place': {'title': 'NEW ORLEANS EAST - Louisiana', 'price': {'легковий': 425, 'мото': 375, 'паркетник': 425, 'позашляховик': 425}, 'port': 'SAVANNAH'}}}, {'IAAI': {'place': {'title': 'NEWBURGH - New York', 'price': {'легковий': 225, 'мото': 175, 'паркетник': 225, 'позашляховик': 225}, 'port': 'NEWARK'}}}, {'IAAI': {'place': {'title': 'NORTH HOLLYWOOD - California', 'price': {'легковий': 200, 'мото': 200, 'паркетник': 200, 'позашляховик': 200}, 'port': 'LOS ANGELES'}}}, {'IAAI': {'place': {'title': 'NORTHERN NEW JERSEY - New Jersey', 'price': {'легковий': 125, 'мото': 75, 'паркетник': 125, 'позашляховик': 125}, 'port': 'NEWARK'}}}, {'IAAI': {'place': {'title': 'NORTHERN VIRGINIA - Virginia', 'price': {'легковий': 250, 'мото': 200, 'паркетник': 250, 'позашляховик': 250}, 'port': 'NORFOLK'}}}, {'IAAI': {'place': {'title': 'New Orleans and Louisiana Flood - Louisiana', 'price': {'легковий': 425, 'мото': 375, 'паркетник': 425, 'позашляховик': 425}, 'port': 'SAVANNAH'}}}, {'IAAI': {'place': {'title': 'OKLAHOMA CITY - Oklahoma', 'price': {'легковий': 400, 'мото': 300, 'паркетник': 400, 'позашляховик': 400}, 'port': 'HOUSTON'}}}, {'IAAI': {'place': {'title': 'OMAHA - Nebraska', 'price': {'легковий': 450, 'мото': 350, 'паркетник': 450, 'позашляховик': 450}, 'port': 'CHICAGO'}}}, {'IAAI': {'place': {'title': 'ORLANDO - Florida', 'price': {'легковий': 250, 'мото': 225, 'паркетник': 250, 'позашляховик': 250}, 'port': 'MIAMI'}}}, {'IAAI': {'place': {'title': 'ORLANDO-NORTH - Florida', 'price': {'легковий': 250, 'мото': 225, 'паркетник': 250, 'позашляховик': 250}, 'port': 'MIAMI'}}}, {'IAAI': {'place': {'title': 'PADUCAH - Kentucky', 'price': {'легковий': 'Call for price', 'мото': 'Call for price', 'паркетник': 'Call for price', 'позашляховик': 'Call for price'}, 'port': 'CHICAGO'}}}, {'IAAI': {'place': {'title': 'PENSACOLA - Florida', 'price': {'легковий': 400, 'мото': 375, 'паркетник': 400, 'позашляховик': 400}, 'port': 'MIAMI'}}}, {'IAAI': {'place': {'title': 'PERMIAN BASIN - Texas', 'price': {'легковий': 450, 'мото': 350, 'паркетник': 450, 'позашляховик': 450}, 'port': 'HOUSTON'}}}, {'IAAI': {'place': {'title': 'PHILADELPHIA - Pennsylvania', 'price': {'легковий': 200, 'мото': 125, 'паркетник': 200, 'позашляховик': 200}, 'port': 'NEWARK'}}}, {'IAAI': {'place': {'title': 'PHOENIX - Arizona', 'price': {'легковий': 350, 'мото': 300, 'паркетник': 350, 'позашляховик': 350}, 'port': 'LOS ANGELES'}}}, {'IAAI': {'place': {'title': 'PITTSBURGH - Pennsylvania', 'price': {'легковий': 450, 'мото': 325, 'паркетник': 450, 'позашляховик': 450}, 'port': 'NEWARK'}}}, {'IAAI': {'place': {'title': 'PITTSBURGH-NORTH - Pennsylvania', 'price': {'легковий': 450, 'мото': 325, 'паркетник': 450, 'позашляховик': 450}, 'port': 'NEWARK'}}}, {'IAAI': {'place': {'title': 'PORT MURRAY - New Jersey', 'price': {'легковий': 175, 'мото': 145, 'паркетник': 175, 'позашляховик': 175}, 'port': 'NEWARK'}}}, {'IAAI': {'place': {'title': 'PORTAGE - Wisconsin', 'price': {'легковий': 300, 'мото': 250, 'паркетник': 300, 'позашляховик': 300}, 'port': 'CHICAGO'}}}, {'IAAI': {'place': {'title': 'PORTLAND - GORHAM - Maine', 'price': {'легковий': 475, 'мото': 375, 'паркетник': 475, 'позашляховик': 475}, 'port': 'NEWARK'}}}, {'IAAI': {'place': {'title': 'PORTLAND - Oregon', 'price': {'легковий': 250, 'мото': 250, 'паркетник': 250, 'позашляховик': 250}, 'port': 'SEATTLE'}}}, {'IAAI': {'place': {'title': 'PROVIDENCE - Rhode Island', 'price': {'легковий': 350, 'мото': 250, 'паркетник': 350, 'позашляховик': 350}, 'port': 'NEWARK'}}}, {'IAAI': {'place': {'title': 'PULASKI - Virginia', 'price': {'легковий': 400, 'мото': 375, 'паркетник': 400, 'позашляховик': 400}, 'port': 'NORFOLK'}}}, {'IAAI': {'place': {'title': 'Philadelphia East - Pennsylvania', 'price': {'легковий': 200, 'мото': 125, 'паркетник': 200, 'позашляховик': 200}, 'port': 'NEWARK'}}}, {'IAAI': {'place': {'title': 'Portland West - Oregon', 'price': {'легковий': 250, 'мото': 250, 'паркетник': 250, 'позашляховик': 250}, 'port': 'SEATTLE'}}}, {'IAAI': {'place': {'title': 'RALEIGH - North Carolina', 'price': {'легковий': 300, 'мото': 250, 'паркетник': 300, 'позашляховик': 300}, 'port': 'NORFOLK'}}}, {'IAAI': {'place': {'title': 'RENO - Nevada', 'price': {'легковий': 550, 'мото': 500, 'паркетник': 550, 'позашляховик': 550}, 'port': 'LOS ANGELES'}}}, {'IAAI': {'place': {'title': 'RICHMOND - Virginia', 'price': {'легковий': 200, 'мото': 200, 'паркетник': 200, 'позашляховик': 200}, 'port': 'NORFOLK'}}}, {'IAAI': {'place': {'title': 'ROANOKE - Virginia', 'price': {'легковий': 375, 'мото': 350, 'паркетник': 375, 'позашляховик': 375}, 'port': 'NORFOLK'}}}, {'IAAI': {'place': {'title': 'ROCHESTER - New York', 'price': {'легковий': 450, 'мото': 350, 'паркетник': 450, 'позашляховик': 450}, 'port': 'NEWARK'}}}, {'IAAI': {'place': {'title': 'ROSEDALE - Maryland', 'price': {'легковий': 350, 'мото': 325, 'паркетник': 350, 'позашляховик': 350}, 'port': 'NORFOLK'}}}, {'IAAI': {'place': {'title': 'SACRAMENTO - California', 'price': {'легковий': 400, 'мото': 300, 'паркетник': 400, 'позашляховик': 400}, 'port': 'LOS ANGELES'}}}, {'IAAI': {'place': {'title': 'SALT LAKE CITY - Utah', 'price': {'легковий': 550, 'мото': 500, 'паркетник': 550, 'позашляховик': 550}, 'port': 'LOS ANGELES'}}}, {'IAAI': {'place': {'title': 'SAN ANTONIO - Texas', 'price': {'легковий': 300, 'мото': 200, 'паркетник': 300, 'позашляховик': 300}, 'port': 'HOUSTON'}}}, {'IAAI': {'place': {'title': 'SAN ANTONIO-SOUTH - Texas', 'price': {'легковий': 300, 'мото': 200, 'паркетник': 300, 'позашляховик': 300}, 'port': 'HOUSTON'}}}, {'IAAI': {'place': {'title': 'SAN BERNARDINO - California', 'price': {'легковий': 250, 'мото': 250, 'паркетник': 250, 'позашляховик': 250}, 'port': 'LOS ANGELES'}}}, {'IAAI': {'place': {'title': 'SAN DIEGO - California', 'price': {'легковий': 300, 'мото': 200, 'паркетник': 300, 'позашляховик': 300}, 'port': 'LOS ANGELES'}}}, {'IAAI': {'place': {'title': 'SAVANNAH - Georgia', 'price': {'легковий': 125, 'мото': 125, 'паркетник': 125, 'позашляховик': 125}, 'port': 'SAVANNAH'}}}, {'IAAI': {'place': {'title': 'SCRANTON - Pennsylvania', 'price': {'легковий': 250, 'мото': 175, 'паркетник': 250, 'позашляховик': 250}, 'port': 'NEWARK'}}}, {'IAAI': {'place': {'title': 'SEATTLE - Washington', 'price': {'легковий': 175, 'мото': 175, 'паркетник': 175, 'позашляховик': 175}, 'port': 'SEATTLE'}}}, {'IAAI': {'place': {'title': 'SHADY SPRING - West Virginia', 'price': {'легковий': 625, 'мото': 500, 'паркетник': 625, 'позашляховик': 625}, 'port': 'NORFOLK'}}}, {'IAAI': {'place': {'title': 'SHREVEPORT - Louisiana', 'price': {'легковий': 315, 'мото': 225, 'паркетник': 315, 'позашляховик': 315}, 'port': 'HOUSTON'}}}, {'IAAI': {'place': {'title': 'SIOUX FALLS - South Dakota', 'price': {'легковий': 650, 'мото': 550, 'паркетник': 650, 'позашляховик': 650}, 'port': 'CHICAGO'}}}, {'IAAI': {'place': {'title': 'SOUTH BEND - Indiana', 'price': {'легковий': 250, 'мото': 200, 'паркетник': 250, 'позашляховик': 250}, 'port': 'CHICAGO'}}}, {'IAAI': {'place': {'title': 'SOUTHERN NEW JERSEY - New Jersey', 'price': {'легковий': 200, 'мото': 165, 'паркетник': 200, 'позашляховик': 200}, 'port': 'NEWARK'}}}, {'IAAI': {'place': {'title': 'SPOKANE - Washington', 'price': {'легковий': 350, 'мото': 275, 'паркетник': 350, 'позашляховик': 350}, 'port': 'SEATTLE'}}}, {'IAAI': {'place': {'title': 'SPRINGFIELD - Missouri', 'price': {'легковий': 625, 'мото': 425, 'паркетник': 625, 'позашляховик': 625}, 'port': 'SAVANNAH'}}}, {'IAAI': {'place': {'title': 'ST. LOUIS - Illinois', 'price': {'легковий': 575, 'мото': 425, 'паркетник': 575, 'позашляховик': 575}, 'port': 'SAVANNAH'}}}, {'IAAI': {'place': {'title': 'SYRACUSE - New York', 'price': {'легковий': 325, 'мото': 275, 'паркетник': 325, 'позашляховик': 325}, 'port': 'NEWARK'}}}, {'IAAI': {'place': {'title': 'Sayreville - New Jersey', 'price': {'легковий': 150, 'мото': 100, 'паркетник': 150, 'позашляховик': 150}, 'port': 'NEWARK'}}}, {'IAAI': {'place': {'title': 'Suffolk - Virginia', 'price': {'легковий': 150, 'мото': 150, 'паркетник': 150, 'позашляховик': 150}, 'port': 'NORFOLK'}}}, {'IAAI': {'place': {'title': 'TAMPA - Florida', 'price': {'легковий': 250, 'мото': 225, 'паркетник': 250, 'позашляховик': 250}, 'port': 'MIAMI'}}}, {'IAAI': {'place': {'title': 'TAUNTON - Massachusetts', 'price': {'легковий': 375, 'мото': 250, 'паркетник': 375, 'позашляховик': 375}, 'port': 'NEWARK'}}}, {'IAAI': {'place': {'title': 'TIDEWATER - Virginia', 'price': {'легковий': 150, 'мото': 150, 'паркетник': 150, 'позашляховик': 150}, 'port': 'NORFOLK'}}}, {'IAAI': {'place': {'title': 'TIFTON - Georgia', 'price': {'легковий': 275, 'мото': 225, 'паркетник': 275, 'позашляховик': 275}, 'port': 'SAVANNAH'}}}, {'IAAI': {'place': {'title': 'TUCSON - Arizona', 'price': {'легковий': 400, 'мото': 350, 'паркетник': 400, 'позашляховик': 400}, 'port': 'LOS ANGELES'}}}, {'IAAI': {'place': {'title': 'TULSA - Oklahoma', 'price': {'легковий': 475, 'мото': 375, 'паркетник': 475, 'позашляховик': 475}, 'port': 'HOUSTON'}}}, {'IAAI': {'place': {'title': 'Tampa North - Florida', 'price': {'легковий': 275, 'мото': 250, 'паркетник': 275, 'позашляховик': 275}, 'port': 'MIAMI'}}}, {'IAAI': {'place': {'title': 'Templeton - Massachusetts', 'price': {'легковий': 375, 'мото': 250, 'паркетник': 375, 'позашляховик': 375}, 'port': 'NEWARK'}}}, {'IAAI': {'place': {'title': 'WEST PALM BEACH - Florida', 'price': {'легковий': 180, 'мото': 180, 'паркетник': 180, 'позашляховик': 180}, 'port': 'MIAMI'}}}, {'IAAI': {'place': {'title': 'WESTERN COLORADO - Colorado', 'price': {'легковий': 'Call for price', 'мото': 'Call for price', 'паркетник': 'Call for price', 'позашляховик': 'Call for price'}, 'port': 'CHICAGO'}}}, {'IAAI': {'place': {'title': 'WICHITA - Kansas', 'price': {'легковий': 550, 'мото': 450, 'паркетник': 550, 'позашляховик': 550}, 'port': 'HOUSTON'}}}, {'IAAI': {'place': {'title': 'WILMINGTON - North Carolina', 'price': {'легковий': 375, 'мото': 325, 'паркетник': 375, 'позашляховик': 375}, 'port': 'NORFOLK'}}}, {'IAAI': {'place': {'title': 'YORK SPRINGS - Pennsylvania', 'price': {'легковий': 275, 'мото': 225, 'паркетник': 275, 'позашляховик': 275}, 'port': 'NEWARK'}}}]
		const arraySee = [{'CHICAGO': {'price': {'легковий': 875, 'мото': 350, 'паркетник': 975, 'позашляховик': 1275}}}, {'HOUSTON': {'price': {'легковий': 750, 'мото': 325, 'паркетник': 850, 'позашляховик': 1100}}}, {'JEBEL ALI': {'price': {'легковий': 0, 'мото': 0, 'паркетник': 0, 'позашляховик': 0}}}, {'LOS ANGELES': {'price': {'легковий': 1200, 'мото': 500, 'паркетник': 1450, 'позашляховик': 1700}}}, {'MIAMI': {'price': {'легковий': 750, 'мото': 300, 'паркетник': 850, 'позашляховик': 1100}}}, {'NEWARK': {'price': {'легковий': 700, 'мото': 300, 'паркетник': 800, 'позашляховик': 1050}}}, {'NORFOLK': {'price': {'легковий': 675, 'мото': 300, 'паркетник': 775, 'позашляховик': 1000}}}, {'HONOLULU': {'price': {'легковий': 2100, 'мото': 950, 'паркетник': 2350, 'позашляховик': 3100}}}, {'SAVANNAH': {'price': {'легковий': 675, 'мото': 300, 'паркетник': 775, 'позашляховик': 1000}}}, {'SEATTLE': {'price': {'легковий': 1700, 'мото': 800, 'паркетник': 1900, 'позашляховик': 2300}}}, {'TORONTO': {'price': {'легковий': 800, 'мото': 325, 'паркетник': 900, 'позашляховик': 1200}}}];
		const arrayFeeCopart = [['0-49.99', '1.00'], ['50.00-99.99', '1.00'], ['100.00-199.99', '25.00'], ['200.00-299.99', '60.00'], ['300.00-349.99', '80.00'], ['350.00-399.99', '90.00'], ['400.00-449.99', '120.00'], ['450.00-499.99', '130.00'], ['500.00-549.99', '140.00'], ['550.00-599.99', '150.00'], ['600.00-699.99', '165.00'], ['700.00-799.99', '185.00'], ['800.00-899.99', '200.00'], ['900.00-999.99', '215.00'], ['1000.00-1199.99', '230.00'], ['1200.00-1299.99', '255.00'], ['1300.00-1399.99', '275.00'], ['1400.00-1499.99', '280.00'], ['1500.00-1599.99', '290.00'], ['1600.00-1699.99', '305.00'], ['1700.00-1799.99', '315.00'], ['1800.00-1999.99', '325.00'], ['2000.00-2399.99', '355.00'], ['2400.00-2499.99', '380.00'], ['2500.00-2999.99', '400.00'], ['3000.00-3499.99', '450.00'], ['3500.00-3999.99', '500.00'], ['4000.00-4499.99', '600.00'], ['4500.00-4999.99', '625.00'], ['5000.00-5999.99', '650.00'], ['6000.00-6499.99', '675.00'], ['6500.00-6999.99', '675.00'], ['7000.00-7499.99', '700.00'], ['7500.00-7999.99', '700.00'], ['8000.00-8499.99', '725.00'], ['8500.00-8999.99', '725.00'], ['9000.00-9999.99', '725.00'], ['10000.00-10499.99', '750.00'], ['10500.00-10999.99', '750.00'], ['11000.00-11499.99', '750.00'], ['11500.00-11999.99', '760.00'], ['12000.00-12499.99', '775.00'], ['12500.00-14999.99', '790.00'], ['15000.00+', '6.00%'], ['addSum', '238.00']];
		const arrayFeeIAAI = [['0-99.99', '1'], ['100-199.99', '25'], ['200-299.99', '60'], ['300-349.99', '80'], ['350-399.99', '90'], ['400-449.99', '120'], ['450-499.99', '130'], ['500-599.99', '150'], ['600-699.99', '165'], ['700-799.99', '185'], ['800-899.99', '200'], ['900-999.99', '215'], ['1000-1199.99', '230'], ['1200-1299.99', '255'], ['1300-1399.99', '275'], ['1400-1499.99', '280'], ['1500-1599.99', '290'], ['1600-1699.99', '305'], ['1700-1799.99', '315'], ['1800-1999.00', '325'], ['2000-2399.99', '355'], ['2400-2499.99', '380'], ['2500-2999.99', '400'], ['3000-3499.99', '450'], ['3500-3999.99', '500'], ['4000-4499.99', '600'], ['4500-4999.99', '625'], ['5000-5999.99', '650'], ['6000-6999.99', '675'], ['7000-7999.99', '700'], ['8000-9999.99', '725'], ['10000-11499.99', '750'], ['11500-11999.99', '760'], ['12000-12499.00', '775'], ['12500-14999.99', '790'], ['15000+', '6.00%'], ['addSum', '288']];


		// const arrayLand = calculatorArrays.arrayLand;
		// const arraySee = calculatorArrays.arraySee;
		// const arrayFeeCopart = calculatorArrays.arrayFeeCopart;
		// const arrayFeeIAAI = calculatorArrays.arrayFeeIAAI;
		
		// ---> Стилізація списка select
		const areaSelect = document.querySelector(".area__list");
		const areaSelectContainer = document.querySelector(".area__list-container");
		const searchListItem = document.querySelector(".search-list-item");

		
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
		//const registrationResult = document.querySelector(".result-registration"); // Постановка на облік
		const repairResult = document.querySelector(".result-repair"); // Ремонт
		const fullPriceResult = document.querySelector(".result-full-price"); // Всього
		
	
		
		// ---> Перевіряємо обов'язкові поля на заповненість
		let requiredInputsData;
		function examRequiredFields() {
			const reqFieldsArray = document.querySelectorAll(".required-field");
			for ( let item of reqFieldsArray ) {
				if ( item.value === "" ) {
					item.classList.add("red-border");
				} else {
					item.classList.remove("red-border");
				}
				requiredInputsData++
			}
		}
		
		// ---> Підставляємо заголовок в поле "об'єм двигуна" в залежності від типу двигуна + додаємо повідомлення (гібрид)
		const hybridMessage = document.querySelector(".hybrid-message");
		const hybridMessageText = document.querySelector(".hybrid-message__message");
		const acceptButton = document.querySelector(".hybrid-message__accept");
		let clickCounter = 1;
		acceptButton.addEventListener("click", ()=> {
			if ( clickCounter === 0 ) {
			hybridMessage.style.height = "0px";
			hybridMessageText.style.opacity = "0";
			hybridMessage.classList.add("_hidden");
			} else {}
		})
		
		function setEngineVolumeTitle() {
			const titleEngineVolume = document.querySelector(".input-title-engine-volume");
			if ( selectedEngineType === "electro" ) {
				titleEngineVolume.textContent = "*Ємність АКБ кВт*г:";
				volumeEngineInput.removeAttribute("disabled");
				titleEngineVolume.classList.remove("transparent-style");
				volumeEngineInput.classList.remove("transparent-style");
				if ( clickCounter === 1 ) {
					hybridMessage.style.height = "0px";
					hybridMessageText.style.opacity = "0";
					hybridMessage.classList.add("_hidden");
				} else {}
			} else if ( selectedEngineType === "hybrid" ) {
				volumeEngineInput.setAttribute('disabled', 'disabled');
				volumeEngineInput.classList.remove("red-border");
				titleEngineVolume.classList.add("transparent-style");
				volumeEngineInput.classList.add("transparent-style");
				if ( clickCounter === 1 ) {
				hybridMessage.style.height = "100%";
				hybridMessageText.style.opacity = "1";
				hybridMessage.classList.remove("_hidden");
				clickCounter = 0;
				} else {}
			} else {
				titleEngineVolume.textContent = "*Об'єм двигуна в см3:";
				volumeEngineInput.removeAttribute("disabled");
				titleEngineVolume.classList.remove("transparent-style");
				volumeEngineInput.classList.remove("transparent-style");
				if ( clickCounter === 1 ) {
				hybridMessage.style.height = "0px";
				hybridMessageText.style.opacity = "0";
				hybridMessage.classList.add("_hidden");
				} else {}
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
				let actualAuctionFee = +auctionPriceResult.textContent;
				let actualLotInput = +priceLotInput.value;
				let auctionFeeLotPriceSum = actualAuctionFee + actualLotInput;
				importTax = auctionFeeLotPriceSum / 10;
			}
			customsDutyResult.textContent = Math.round(importTax); // Фінальний результат мита
		
			// Рахуємо ПДВ
			let MPETax = ( +priceLotInput.value + +auctionPriceResult.textContent + +exciseResultDollar + +importTax ) / 5;
			pdvDutyResult.textContent = Math.round(MPETax);
		
			// Рахуємо розмитнення загалом
			allTaxes = +exciseResultDollar + +importTax + +MPETax + 1600;
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
		
		// ---> Додаємо актуальний список в пункт "Майданчики"
		// Запускаємо потрібну функцію в залежності від аукціону
		function selectAuction() {
			areaSelect.innerHTML = "";
			if ( document.querySelector(".selected-auction").classList.contains("auction-copart-button") ) {
				copartPlacesAdd()
			} else if ( document.querySelector(".selected-auction").classList.contains("auction-iaai-button") ) {
				iaaiPlacesAdd()
			}
		}
		copartButton.addEventListener("click", ()=> {
			selectAuction();
			USDeliveryPriceResult.textContent = 0;
		}) 
		iaaiButton.addEventListener("click", ()=> {
			selectAuction();
			USDeliveryPriceResult.textContent = 0;
		})


		let currentPlace = "";
		let currentArray = [];

		// Додаємо в список майданчики Копарт
		function copartPlacesAdd() {
			searchListItem.value = "";
			let counter = 0;
			currentArray = [];
			for (let i = 0; i < arrayLand.length; i++ ) {
				// Визначаємо ім'я першого ключа
				let firstKey = Object.keys(arrayLand[i])[0];
				if ( firstKey === "Copart" ) { counter++; currentPlace = "Copart" }
				if ( firstKey === "Copart" && counter === 1 ) {
				} else if ( firstKey === "Copart" ) {
					currentArray.push(arrayLand[i]["Copart"]["place"]["title"]);
				}
			}
			sortCurrentArray(currentPlace, currentArray)
		}

		// Додаємо в список майданчики IAAI
		function iaaiPlacesAdd() {
			searchListItem.value = "";
			let counter = 0;
			currentArray = [];
			for (let i = 0; i < arrayLand.length; i++ ) {
				// Визначаємо ім'я першого ключа
				let firstKey = Object.keys(arrayLand[i])[0];
				if ( firstKey === "IAAI" ) { counter++; currentPlace = "IAAI" }
				if ( firstKey === "IAAI" && counter === 1 ) {
				} else if ( firstKey === "IAAI" ) {
					currentArray.push(arrayLand[i]["IAAI"]["place"]["title"]);
				}
			}
			sortCurrentArray(currentPlace, currentArray)
		}

		// Сортуємо масив під час пошуку
		function sortCurrentArray(place, array) {
			let sortedCurrentArray = [];
			let currentSearchWord = searchListItem.value;
			let currentSearchWordLength = currentSearchWord.length;

			for (let i = 0; i < array.length; i++) {
				if (array[i].substr(0, currentSearchWordLength) === currentSearchWord.toUpperCase()) {
					sortedCurrentArray.push(array[i]);
				} else if ( currentSearchWord === "" ) {
					sortedCurrentArray = array;
				}
			}

			areaSelect.innerHTML = "";
				for (let i = 0; i < sortedCurrentArray.length; i++ ) {
						areaSelect.insertAdjacentHTML(
							'beforeend',
							`<p><div value="${sortedCurrentArray[i]}" class="area__list-item">${sortedCurrentArray[i]}</div></p>`
					)
				}
			}

		// Викликаємо сортування масиву при вводі даних у пошук
		searchListItem.addEventListener("keyup", () => {
			sortCurrentArray(currentPlace, currentArray);
		})

		function closePlacesList() {
			areaSelect.classList.remove("list-open");
			areaSelect.classList.add("list-close");
			areaSelect.classList.remove("dark-bg-list");
			searchListItem.style.borderRadius = "20px";
			areaSelect.style.borderRadius = "20px"
		}

		function openPlacesList() {
			areaSelect.classList.remove("list-close");
			areaSelect.classList.add("list-open");
			areaSelect.classList.add("dark-bg-list");
			searchListItem.style.borderRadius = "20px 20px 0 0";
			areaSelect.style.borderRadius = "0 0 20px 20px";
		}

		document.addEventListener("click", (event) => {
			if ( event.target.classList.contains("search-list-item") ) {
				openPlacesList();
			} else if ( !event.target.classList.contains("area__list-item") && !event.target.classList.contains("area__list") ) {
				closePlacesList();
			}
		})

		let areaListItems = document.querySelectorAll(".area__list-item");
		for (let item of areaListItems) {
			item.addEventListener("wheel", function(event) {
				event.preventDefault();
		});
		}


		// Актуальний вибраний майданчик - вішаємо прослуховувач на кожний елемент списку
		let areaListPlaceSelect;
		function addCurrentPlaceInSearchInput() {
			const currentItemsArray = document.querySelector(".area__list").children;
			for ( let item of currentItemsArray ) {
				item.addEventListener("click", (event) => {
					closePlacesList();
					searchListItem.value = event.target.textContent;
					areaListPlaceSelect = searchListItem.value;
					calculateLandDelivery();
					calculateSeaDelivery();
					calculateFullPrice();
				})
			}
		}

		searchListItem.addEventListener("click", () => {
			addCurrentPlaceInSearchInput(); 
			calculateLandDelivery();
			calculateSeaDelivery();
			calculateFullPrice();
			areaListPlaceSelect = searchListItem.value;
		})
		searchListItem.addEventListener("keyup", () => {
			addCurrentPlaceInSearchInput(); 
			calculateLandDelivery();
			calculateSeaDelivery();
			calculateFullPrice();
			openPlacesList();
			areaListPlaceSelect = searchListItem.value;
		})
		
		// ---> Рахуємо вартість доставки по суші
		function calculateLandDelivery() {
			USDeliveryPriceResult.textContent = 0;
			const bodiesArray = document.querySelectorAll(".body__button");
			if ( document.querySelector(".selected-auction").classList.contains("auction-copart-button") ) {
				for (let i = 0; i < arrayLand.length; i++ ) {
					// Визначаємо ім'я першого ключа
					let firstKey = Object.keys(arrayLand[i])[0];
					if ( firstKey === "Copart" && arrayLand[i]["Copart"]["place"]["title"] === areaListPlaceSelect ) {
						const currentAreaPrices = arrayLand[i]["Copart"]["place"]["price"];
						for ( let item of bodiesArray ) {
							if ( item.classList.contains("selected-body") ) {
								if ( currentAreaPrices[`${item.value}`] === "Call for price" || currentAreaPrices[`${item.value}`] === "" ) {
									USDeliveryPriceResult.textContent = "Уточнюйте у менеджера"
								} else {
									USDeliveryPriceResult.textContent = currentAreaPrices[`${item.value}`]
								}
							}
						}
					} else {}
				}
			} else if ( document.querySelector(".selected-auction").classList.contains("auction-iaai-button") ) {
				for (let i = 0; i < arrayLand.length; i++ ) {
					// Визначаємо ім'я першого ключа
					let firstKey = Object.keys(arrayLand[i])[0];
					if ( firstKey === "IAAI" && arrayLand[i]["IAAI"]["place"]["title"] === areaListPlaceSelect ) {
						const currentAreaPrices = arrayLand[i]["IAAI"]["place"]["price"];
						for ( let item of bodiesArray ) {
							if ( item.classList.contains("selected-body") ) {
								if ( currentAreaPrices[`${item.value}`] === "Call for price" || currentAreaPrices[`${item.value}`] === "" ) {
									USDeliveryPriceResult.textContent = "Уточнюйте у менеджера"
								} else {
									USDeliveryPriceResult.textContent = currentAreaPrices[`${item.value}`]
								}
							}
						}
					} else {}
				}
			}
		}
		
		// ---> Рахуємо вартість доставки по морю
		function calculateSeaDelivery() {
			seaResult.textContent = "0";
			let currentAuction = "";
			let currentPort = "";
			const bodiesArray = document.querySelectorAll(".body__button");
			let currentBody = "";
			for ( let item of bodiesArray ) {
				if ( item.classList.contains("selected-body") ) {
					currentBody = item.value;
				}
			}
			if ( document.querySelector(".selected-auction").classList.contains("auction-copart-button") ) {
				currentAuction = "Copart";
			} else if ( document.querySelector(".selected-auction").classList.contains("auction-iaai-button") ) {
				currentAuction = "IAAI";
			}
			for (let i = 0; i < arrayLand.length; i++ ) {
				let firstKey = Object.keys(arrayLand[i])[0];
				if ( firstKey === currentAuction && areaListPlaceSelect === arrayLand[i][currentAuction]["place"]["title"] ) {
					currentPort = arrayLand[i][currentAuction]["place"]["port"];
					document.querySelector(".sea-price-port").innerHTML = `(${currentPort} - KLAIPEDA)`;
				}
			}
			for ( let i = 0; i < arraySee.length; i++ ) {
				let firstKey = Object.keys(arraySee[i])[0];
				if ( firstKey === currentPort ) {
					const currentPriceByPort = arraySee[i][currentPort]["price"][currentBody];
					if ( currentPriceByPort === "" || currentPriceByPort === 0 ) {
						seaResult.textContent = "Уточнюйте у менеджера";
					} else {
						seaResult.textContent = currentPriceByPort;
					}
				}
			}
		}
		
		// ---> Розрахунок аукціонного збору
		function treatmentArraFee(array) {
			const actualPrice = priceLotInput.value;
			let actualFee = 0;
			let actualPercentSum = 0;
			let addSum = 0;
			let resultFee;
			for (let i = 0; i < array.length; i++) {
				const priceFork = array[i][0].split('-');
				if ( actualPrice >= +priceFork[0] && actualPrice <= +priceFork[1] ) {
					actualFee = Math.round(array[i][1]);
				}
				if ( array[i][0].indexOf("+") !== -1 ) {
					const actualPercent = +("0.0" + Math.round(array[i][1].replace("%", "")))
					actualPercentSum = actualPrice * actualPercent;
				}
				if ( array[i][0] === "addSum" ) {
					addSum = Math.round(array[i][1]);
				}
			}
			if ( actualPrice === 0 || actualPrice === "" ) {
				resultFee = 0;
			} else if ( actualPrice < 15000 ) {
				resultFee = actualFee + addSum;
			} else if ( actualPrice > 15000 ) {
				resultFee = actualPercentSum + addSum;
			}
			auctionPriceResult.textContent = Math.round(resultFee);
		}
		
		// Передаємо у функцію потрібний аргумент в залежності від обраного аукціону
		function calculateAuctionFee() {
			if ( document.querySelector(".selected-auction").classList.contains("auction-copart-button") ) {
				treatmentArraFee(arrayFeeCopart)
			} else if ( document.querySelector(".selected-auction").classList.contains("auction-iaai-button") ) {
				treatmentArraFee(arrayFeeIAAI)
			}
		}
		
		// ---> Рахуємо страховку
		function calculateInsuranceResult() {
			insuranceResult.textContent = 0;
			const actualPrice = +priceLotInput.value;
			const actualFee = +auctionPriceResult.textContent;
			insuranceResult.textContent = Math.round((actualPrice + actualFee) * 0.015);
		}
		
		// ---> Встановлюємо доставку від порту
		function calculateDeliveryToUkraine() {
			deliveryFromPortResult.textContent = 750;
		}
		
		// ---> Встановлюємо вартість сертифікату
		function calculateCertificatePrice() {
			certificateResult.textContent = 40;
		}
		
		// ---> Рахуємо фінальну суму
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
									+repairPrice +
									+auctionPriceResult.textContent +
									+insuranceResult.textContent +
									+certificateResult.textContent +
									+deliveryFromPortResult.textContent;
			let notFullPrice = 0;
			if ( USDeliveryPriceResult.textContent === "Уточнюйте у менеджера" ) {
				notFullPrice = 1;
			} else {
				fullPrice += +USDeliveryPriceResult.textContent;
			}
			if ( seaResult.textContent === "Уточнюйте у менеджера" ) {
				notFullPrice = 1;
			} else {
				fullPrice += +seaResult.textContent;
			}
		
			if ( notFullPrice === 1 ) {
				let price = Math.round(fullPrice);
				fullPriceResult.textContent = `(Ціна неповна) ${price}`;
			} else {
				fullPriceResult.textContent = Math.round(fullPrice);
			}
			}
			
		// ---> Копіювання в буфер обміну
		
		const copyButton = document.querySelector(".result__copy-button");
		const resultElements = document.querySelectorAll(".result__name");
		const resultPricesArray = [lotPriceResult, auctionPriceResult, USDeliveryPriceResult, seaResult, exciseTaxResult, customsDutyResult, pdvDutyResult, fullCustomsDutyResult, insuranceResult, brokerResult, expeditionResult, companyService, certificateResult,  deliveryFromPortResult, repairResult, fullPriceResult];
		const copyButtonText = document.querySelector(".result__copy-button-text");
		
		
		copyButton.addEventListener("click", ()=> {
			copyResult();
			buttonStyle();
			setTimeout(buttonStyleOld, 2000);
		})
		
		function copyResult() {
			const fullArray = [];
			let tempInput = document.createElement("textarea");
			tempInput.classList.add("_copy-hidden");
			tempInput.value = "";
			for ( let i = 0; i < resultPricesArray.length; i++ ) {
				tempInput.value += resultElements[i].textContent;
				tempInput.value += " - ";
				tempInput.value += resultPricesArray[i].textContent;
				tempInput.value += `;\n`;
			}
			document.body.appendChild(tempInput);
			tempInput.select();
			document.execCommand("copy");
		}
		
		function buttonStyle() {
			copyButtonText.textContent = "Скопійовано";
			copyButton.style.backgroundColor = "rgba(112, 255, 41, 0.15)";
		}
		
		function buttonStyleOld() {
			copyButtonText.textContent = "Скопіювати";
			copyButton.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
		}
	
	
	// Функція, що викликає всі функції
	function callAllFunctions() {
		userSelectedData();
		lotPriceResult.textContent = priceLotInput.value; // Передаємо вартість лоту у результат
		examRequiredFields(); // Фарбуємо обов'язкові поля у червоний
		calculateAuctionFee(); // Прорахунок аукціонного збору
		calculateTaxes(); // Викликаємо прорахунок податків
		calculateBrokerService(); // Викликаємо прорахунок брокерських послуг
		calculateExpeditionPrice(); // Викликаємо прорахунок експедиції
		calculateCompanyService(); // Викликаємо прорахунок послуг компанії
		calculateRepairPrice(); // Викликаємо вартість ремонту
		calculateFullPrice(); // Додаємо усі результати
		setEngineVolumeTitle(); // Зміна заголовку поля 
		calculateLandDelivery(); // Прорахунок вартості доставки в залежності від аукціону, майданчика і виду ТЗ
		calculateSeaDelivery(); // Прорахунок вартості доставки по морю в залежності від порту
		calculateInsuranceResult(); // Прорахунок страховки
		calculateDeliveryToUkraine(); // Вартість доставки Клайпеда - Львів
		calculateCertificatePrice(); // Сертифікат
	}
	
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
	
	callAllFunctions();
	selectAuction(); // Зміна списку майданчиків в залежності від аукціону
	
	} else {}
	})









