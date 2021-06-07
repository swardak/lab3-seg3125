// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [{
		name: "Broccoli",
		lactose_intolerant: true,
		nut_allergy: true,
		organic: true,
		price: 1.99
	},
	{
		name: "Bread",
		lactose_intolerant: true,
		nut_allergy: false,
		organic: false,
		price: 2.35
	},
	{
		name: "Salmon",
		lactose_intolerant: false,
		nut_allergy: true,
		organic: true,
		price: 10.99
	},
	{
		name: "Almond Milk",
		lactose_intolerant: true,
		nut_allergy: false,
		organic: true,
		price: 7.29
	},
	{
		name: "Eggs",
		lactose_intolerant: true,
		nut_allergy: true,
		organic: false,
		price: 4.99
	},
	{
		name: "Pasta",
		lactose_intolerant: false,
		nut_allergy: true,
		organic: false,
		price: 5.99
	},
	{
		name: "Yogurt",
		lactose_intolerant: false,
		nut_allergy: true,
		organic: false,
		price: 3.59
	},
	{
		name: "Tomatoes",
		lactose_intolerant: true,
		nut_allergy: true,
		organic: true,
		price: 2.25
	},
	{
		name: "Apples",
		lactose_intolerant: true,
		nut_allergy: true,
		organic: false,
		price: 4.75
	},
	{
		name: "Black Beans",
		lactose_intolerant: true,
		nut_allergy: true,
		organic: false,
		price: 2.39
	},


];

// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

// licherally the stinkiest function ever written in js, im deeply sorry 2 whoever has to read this
function restrictListProducts(prods, restrictions) {
	let product_names = [];
	prods.forEach(function (product) {
		var countArr = [];
		for (var itemVal in restrictions) {
			var item = restrictions[itemVal];
			if (product[item]) {
				countArr.push(product.name);
			}
		}
		if (countArr.length == restrictions.length) {
			var obj = {};
			obj.name = product.name;
			obj.price = product.price;
			product_names.push(obj);
		}
	})

	//stack overflow: https://stackoverflow.com/questions/979256/sorting-an-array-of-objects-by-property-values
	product_names.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i = 0; i < products.length; i += 1) {
		if (chosenProducts.indexOf(products[i].name) > -1) {
			totalPrice += products[i].price;
		}
	}
	return totalPrice.toFixed(2);
}