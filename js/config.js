// array of Monitor-specific API keys or Main API key to list all monitors
var __apiKeys = [
	'm776858319-7c829d2c3e250f85776f588e', //BBS
	'm776858325-1ddf7c7e98ce56609325db3b', //Doku
	'm776858327-19b31e671f6b217b8ded96c6', //Me
	'm776858320-7b44f9ac136f69ac3e356e8e', //Auth A
	'm776858321-486827042ed7a7f7b8952a05', //Auth B
	'm776858322-0e2c3f842139c06f56f7f56a', //Auth C
	'm776858323-0bdafb9e9a71e3305c27c1af', //Auth D
	'm776353091-03c4431c6f0b92d9732c3971','m776352715-f59b385fc00684c5a4b73d6f','m776359676-5e0337ed69528ebab2ceb20c', 'm776555155-7660d00cb6cfb9abaa1f17c9', 'm776698091-5be29ebc997adacb6a39e1ff', 
];

// refresh interval (in seconds)
var __refresh = 300;

// the default language
// set false to disable language support and show only english,
// or set null to use visitor's browser language
var __language = 'zh';
