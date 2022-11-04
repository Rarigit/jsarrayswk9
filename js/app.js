let itemNames = ["Chairs", "Tables", "Desks"];
let itemPrices = [20, 100, 80];
let inStock = [true, false, undefined];

console.log(`FirstItemName: ${itemNames[0]}. FirstItemPrice: ${itemPrices[0]}. FirstinStock: ${inStock[0]}`);

itemNames.push("Cutlery");
itemPrices.push(10);
inStock.push(true);

let lastItemName = itemNames.pop();

console.log(lastItemName);

let lastItemPrice = itemPrices.pop();

console.log(lastItemPrice);

let lastItemStock = inStock.pop();

console.log(lastItemStock);
