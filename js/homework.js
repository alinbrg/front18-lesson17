// დავალება:
// 1. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს ერთ მთელ რიცხვს და დააბრუნებს true -ს თუ რიცხვი არის ლუწი ან false -ს თუ რიცხვი არის კენტი.
function isEven(num) {
	// if (num % 2 === 0) {
	// 	return true;
	// } else {
	// 	return false;
	// }

	// return num % 2 === 0 ? true : false;
	return num % 2 === 0;
}

// console.log(isEven(4), isEven(5));
// 2. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს ორ რიცხვს - მართკუთხედის გვერდების ზომებს და დააბრუნებს მართკუთხედის ფართობს.
function getRectangleArea(a, b) {
	return a * b;
}

// console.log(getRectangleArea(2, 4));

// 3. დაწერეთ ფუქცია, რომელიც პარამეტრად მიიღებს ერთ რიცხვს - კვადრატის გვერდის სიგრძეს და დააბრუნებს კვადრატის ფართობს. ფართობის გამოსათვლელად გამოიყენეთ #2 პუნქტში აღწერილი ფუნქცია.
function getSquareArea(c) {
	// return c * c;
	return getRectangleArea(c, c);
}

// console.log(getSquareArea(4));

// 4.
// Math.random() - არის ფუნქცია, რომელიც აბრუნებს შემთხვევით რიცხვს 0-დან 1-მდე.
// Math.floor() - ამრგვალებს რიცხვს ქვემოთ, მაგალითად Math.floor(4.9) აბრუნებს 4-ს.
// Math.round() - ამრგვალებს რიცხვს უახლოეს მთელამდე.  Math.round  (4.9) აბრუნებს 5-ს.
// დაწერეთ ფუნქცია, რომელიც Math.random() ფუნქციის გამოყენებით დააგენერირებს და დააბრუნებს 0-დან 100-მდე შემთხვევით რიცხვს. (google დაგჭირდებათ ^^)

function getRandomNumber() {
	const radnom = Math.random() * 100;
	const roundedRandom = Math.round(radnom);

	// console.log(roundedRandom);

	return roundedRandom;
}

// console.log(getRandomNumber());
// 5. დაწერეთ ფუნქცია, getCurrencySymbolFromCode რომელიც პარამეტრად მიიღებს ვალუტის კოდს (USD ან EUR ან GEL) სტრინგის სახით და დააბრუნებს ამ კოდის შესაბამის სიმბოლოს ($, €, ლ). თუ ისეთი კოდს გადავცემ რომლის სიმბოლოც არ მაქვს დააბრუნოს შესაბამისი შეტყობინება

function getCurrencySymbolFromCode(code) {
	let symbol;

	switch (code) {
		case "USD":
			symbol = "$";
			break;
		case "EUR":
			symbol = "€";
			break;
		case "GEL":
			symbol = "₾";
			break;

		default:
			symbol = "&&";
			break;
	}

	return symbol;
}

console.log(getCurrencySymbolFromCode("EUR"));

// 6*(optional). შექმენით ობიექტების 5 ელემენტიანი მასივი, სადაც თითოეულ ობიექტს გააჩნია name და age ველები. შემდეგ შექმენით ფუნქცია, რომელიც პარამეტრად მიიღებს ამ მასივს და დააბრუნებს ყველაზე ახალგაზრდა ობიექტს (რომლის age ველიც არის უმცირესი).
const users = [
	{ name: "tea", age: 20 },
	{ name: "gio", age: 23 },
	{ name: "lela", age: 24 },
	{ name: "nino", age: 25 },
	{ name: "nika", age: 15 },
];

function getYoungestUser(userArr) {
	let sortedUserArr = userArr.sort((a, b) => {
		return a.age - b.age;
	});
	// console.log(sortedUserArr);
	return sortedUserArr[0];
}

// console.log(getYoungestUser(users));
// შენიშვნა: ფუნქციებს და ცვლადებს დაარქვით სახელები ინგლისურად ისე, რომ სახელი მიუთითებდეს თუ რას აკეთებს ფუნქცია. მაგალითად: getRandomNumber

// p.s. 'დააბრუნებს' გულისხმობს რომ ფუნქციაში უნდა გამოიყენოთ return
