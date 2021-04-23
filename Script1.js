// JavaScript source code
const products =[
	{id:1, title: "product 1", price:100000},
	{id:2, title: "product 2", price:100000},
	{id:3, title: "product 3", price:100000},
	{id:4, title: "product 4", price:100000},
];
const: renderProduct=(title,price)=>{ 
	return <div class="product_items">
		<img src="${img}" alt="ImG">
		<div class="proda"
			<h3>${item.title}</h3>
			<p>${item.price}\u28bd</p>
			<button class="button"> Cart</button>
		</div>
	</div>;

const renderProducts =(list)=>{
	const productListHTML = list.map((items=> renderProduct(item.title, item.price));
	document.querySelector(selectors: '.products').innerHTML = productListHTML;

}
renderProducts(products);





