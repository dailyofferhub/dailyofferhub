<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Daily Offer Hub</title>
<script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="bg-gray-100">

<header class="bg-white shadow p-4 text-center">
<h1 class="text-2xl font-bold">🔥 Daily Offer Hub</h1>
<p class="text-sm text-gray-500">Best Deals • Quality Products • Limited Offers</p>
</header>

<div id="product-grid" class="grid md:grid-cols-3 gap-6 p-6"></div>

<section class="bg-white mt-10 p-6 shadow text-center">
<h2 class="text-xl font-bold mb-2">About Us</h2>
<p class="text-gray-600">
We suggest only high-quality and trending products with the best offers.
</p>
</section>

<script>

// ✅ TEST DATA
const products = [
{
id: 1,
name: "Fire-Boltt Brillia Smartwatch",
originalPrice: 18999,
price: 1699,
description: "Best smartwatch with AMOLED display & Bluetooth calling.",
image: "https://m.media-amazon.com/images/I/71PtxgLJltL._SL1500_.jpg",
amazon: "https://amzn.to/4se9Mzs"
}
]

// ✅ FUNCTIONS
function formatINR(amount){
return "₹" + amount.toLocaleString("en-IN")
}

function formatUSD(amount){
return "$" + (amount/83).toFixed(2)
}

// ✅ RENDER FUNCTION
function renderProducts(){

const grid = document.getElementById("product-grid")

// 🔴 IMPORTANT DEBUG
console.log("GRID:", grid)
console.log("PRODUCTS:", products)

if(!grid){
alert("Grid not found ❌")
return
}

let html = ""

products.forEach(product => {

const discount = Math.round(((product.originalPrice-product.price)/product.originalPrice)*100)

html += `
<div class="bg-white p-4 shadow rounded">

<img src="${product.image}" style="height:200px;object-fit:contain;margin:auto">

<h3 class="font-bold mt-3">${product.name}</h3>

<p class="text-sm text-gray-600">${product.description}</p>

<p class="text-red-600 font-bold mt-2">-${discount}%</p>

<p class="text-xl font-bold">${formatUSD(product.price)}</p>

<p class="text-sm text-gray-500">${formatINR(product.price)}</p>

<a href="${product.amazon}" target="_blank"
class="block mt-3 bg-yellow-400 text-center p-2 rounded font-bold">
Buy on Amazon
</a>

</div>
`
})

grid.innerHTML = html
}

// ✅ RUN DIRECTLY (NO DOMContentLoaded ISSUE)
renderProducts()

</script>

</body>
</html>
