// W funkcji pokazano przypadek dla 3 róznych tablic:
//  oddNumber - w tej tablicy znajdują się wszystkie elementy parzyste i jedna nieparzysta
//  evenNumber - tutaj szukaną liczbą jest liczba parzysta, wszystkie inne to nieparzyste
//  shortArr - pokazuje przypadek co by było gdyby tablica miała mniej niż 3 elementy

function search() {
	const oddNumber = [22, 42, 41, 18];
	const evenNumber = [13, 21, 33, 60, 71, 97];
	const shortArr = [5, 7];

	// Wykorzystana zostałą funckja strzałkowa z dwoma argumentami. Pierwszy odpowiada wybranej tablicy, drugi zaś za wynik modulo przez 2 czyli 0 lub 1.
	const search = (arr, mod) => {
		if (arr.length < 3) {
			return `Tablica ma mniej niż 3 elementy`;
		} else {
			return arr.find((el) => el % 2 === mod);
		}
	};
	//  W konsoli otrzymamy wartość nieparzystą = 41. Reszta z dzielenia jest równa 1
	console.log(search(oddNumber, 1));

	//  W konsoli otrzymamy wynik parzysty = 60. Reszta z dzielenia jest równa 0
	console.log(search(evenNumber, 0));

	//  W konsoli otrzymamy komunikat "Tablica ma mniej niż 3 elementy "
	console.log(search(shortArr, 0));
}

// Wykonujemy funkcje
search();
