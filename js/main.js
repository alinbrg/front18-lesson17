const countries = [
	{
		name: "Georgia",
		currencies: {
			GEL: {
				name: "lari",
				symbol: "₾",
			},
		},
		capital: ["Tbilisi"],
		flag: "https://flagcdn.com/w320/ge.png",
		map: "https://goo.gl/maps/bvCaGBePR1ZEDK5cA",
	},
	{
		name: "Federal Republic of Germany",
		currencies: {
			EUR: {
				name: "Euro",
				symbol: "€",
			},
		},
		capital: ["Berlin"],
		flag: "https://flagcdn.com/w320/de.png",
		map: "https://goo.gl/maps/mD9FBMq1nvXUBrkv6",
	},
	{
		name: "Ukraine",
		currencies: {
			UAH: {
				name: "Ukrainian hryvnia",
				symbol: "₴",
			},
		},
		capital: ["Kyiv"],
		flag: "https://flagcdn.com/w320/ua.png",
		map: "https://goo.gl/maps/DvgJMiPJ7aozKFZv7",
	},
	{
		name: "United Kingdom of Great Britain and Northern Ireland",
		currencies: {
			GBP: {
				name: "British pound",
				symbol: "£",
			},
		},
		capital: ["London"],
		flag: "https://flagcdn.com/w320/gb.png",
		map: "https://goo.gl/maps/FoDtc3UKMkFsXAjHA",
	},
];

const header = document.getElementById("header");
const navbar = header.querySelector(".navbar");

const navbarATag = document.querySelector("nav a");
const navbarliTags = document.querySelectorAll("nav li");

const newParagraph = document.createElement("p");
const newParagraph2 = document.createElement("p");

newParagraph.innerText = "text from js";
newParagraph2.innerHTML = "<span>text</span> from js";

// header.appendChild(newParagraph);

header.append(newParagraph, newParagraph2);

newParagraph2.remove();
// console.log(newParagraph);
// header.style.backgroundColor = "red"

// header.classList.add("header");
// header.classList.remove("header");
// header.classList.toggle("header");

// console.log(navbarATag.getAttribute('href'))
// navbarATag.setAttribute('href', '#')

const button = document.querySelector("button");
const section = document.querySelector("section");

function handleClick(e) {
	// console.log(e.target);
	e.stopPropagation();
	navbarliTags.forEach((li) => {
		li.classList.toggle("navbar-li");
	});

	e.target.innerText = "button clicked";
}

button.addEventListener("click", handleClick);

section.addEventListener("click", (e) => {
	// console.log(e.target);
	section.classList.toggle("section-bg");
});

navbarATag.addEventListener("click", (e) => {
	e.preventDefault();
	navbarATag.setAttribute("href", "random text");
	console.log(e.target);
});

const countriesSection = document.querySelector(".countries");

function renderCountries(arr) {
	console.log(arr);

	const arrHTML = arr
		.map((el) => {
			return `
			<div class="card">
				<img  src="${el.flag}" alt="${el.name}">
			</div>
		`;
		})
		.join("");

	console.log(arrHTML);

	countriesSection.innerHTML = arrHTML;
}

renderCountries(countries);
