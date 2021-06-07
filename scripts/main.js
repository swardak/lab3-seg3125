function dietarySelections() {

	var ele = document.getElementsByName("dietarySelection");
	var dietaryPrefs = [];

	// build list of selected item
	for (i = 0; i < ele.length; i++) {
		if (ele[i].checked) {
			dietaryPrefs.push(ele[i].value);
		}
	}

	var insert = document.getElementById('displayProduct');

	insert.innerHTML = "";

	var productOptions = restrictListProducts(products, dietaryPrefs);

	for (i = 0; i < productOptions.length; i++) {

		var productName = productOptions[i].name;
		var productPrice = productOptions[i].price;

		// create the card and add in HTML DOM
		var prodCard = document.createElement("div");
		prodCard.className = "productCard";
		insert.appendChild(prodCard);

		var prodImg = document.createElement("img");
		prodImg.src = ("./assets/").concat(productName, ".jpg");
		prodCard.appendChild(prodImg);

		var linebr = document.createElement("br");
		prodCard.appendChild(linebr);

		//create content inside card
		var nameSpan = document.createElement('p');
		nameSpan.textContent = productName;
		nameSpan.className = "nameProd";
		prodCard.appendChild(nameSpan);


		var priceSpan = document.createElement('p');
		priceSpan.textContent = "$" + productPrice;
		priceSpan.className = "priceProd";
		prodCard.appendChild(priceSpan);

		prodCard.appendChild(linebr);

		var addButt = document.createElement('button');
		addButt.textContent = "Add to Cart";
		addButt.setAttribute('onclick', 'addToCart("'.concat(productName, '")'));
		prodCard.appendChild(addButt);

		insert.appendChild(prodCard);
	}
}

var chosenProducts = [];

function addToCart(productName) {
	if (chosenProducts.includes(productName) == false) {
		chosenProducts.push(productName);
		var ul = document.getElementById('cartItems');
		var productPrice = (products.filter(x => x.name == productName))[0].price;

		//create content inside label
		var nameSpan = document.createElement('span');
		nameSpan.textContent = productName;
		nameSpan.className = "nameCart";

		var priceSpan = document.createElement('span');
		priceSpan.textContent = "$" + productPrice;
		priceSpan.className = "priceCart";

		var li = document.createElement('li');
		li.appendChild(nameSpan);
		li.appendChild(priceSpan);
		ul.appendChild(li);

		var priceBox = document.getElementById('price');
		priceBox.innerHTML = "$" + getTotalPrice(chosenProducts);
	}
}