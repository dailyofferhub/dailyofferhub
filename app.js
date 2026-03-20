<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Daily Offer Hub</title>
<script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="bg-gray-100">

<!-- HEADER -->
<header class="bg-white shadow p-4 text-center">
<h1 class="text-2xl font-bold">🔥 Daily Offer Hub</h1>
<p class="text-sm text-gray-500">Best Deals • Quality Products • Limited Offers</p>
</header>

<!-- PRODUCT GRID -->
<div id="product-grid" class="grid md:grid-cols-3 gap-6 p-6"></div>

<!-- ABOUT US -->
<section class="bg-white mt-10 p-6 shadow text-center">
<h2 class="text-xl font-bold mb-2">About Us</h2>
<p class="text-gray-600 max-w-2xl mx-auto">
We suggest only high-quality and trending products with the best offers available online.  
Our goal is to help you save money while buying the best products from trusted platforms like Amazon.  
Every product listed here is selected based on quality, price, and customer value.
</p>
</section>

<script>

const products = [

{
"id":1,
"name":"Fire-Boltt Brillia Smartwatch AMOLED Display | Bluetooth Calling Fitness Watch | SpO2 & Heart Rate Tracker | Best Smartwatch 2026)",
"category":"Luxury Gadgets",
"originalPrice":18999,
"price":1699,
"rating":4,
"description":"Upgrade your style and fitness with the Fire-Boltt Brillia Smartwatch. Featuring a stunning 2.02” AMOLED display, Bluetooth calling, and advanced health tracking like SpO2 & heart rate monitoring. Perfect for daily fitness, sports, and smart lifestyle.",
"offerNote":"⚡ Limited Time Deal Best Price on Amazon Stylish + Fitness Combo Grab Now Before Stock Ends!",
"image":"https://m.media-amazon.com/images/I/71PtxgLJltL._SL1500_.jpg",
"amazon":"https://amzn.to/4se9Mzs"
}

]

// INR format
function formatINR(amount){
return "₹" + amount.toLocaleString("en-IN")
}

// USD format
function formatUSD(amount){
const usd = amount / 83
return "$" + usd.toFixed(2)
}

// URL product highlight
function getProductFromURL(){
const params = new URLSearchParams(window.location.search)
const productId = params.get("product")

if(!productId) return

const index = products.findIndex(p => p.id == productId)

if(index > -1){
const selectedProduct = products.splice(index,1)[0]
products.unshift(selectedProduct)
}
}

// Render products
function renderProducts(){

const grid = document.getElementById("product-grid")

if(!grid){
console.error("Grid not found")
return
}

// clear before render
grid.innerHTML = ""

products.forEach(product => {

const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)

grid.innerHTML += `

<div class="bg-white rounded-xl shadow-md border flex flex-col p-4">

<div style="background:#cc0c39;color:white;font-size:12px;padding:6px 10px;border-radius:4px;width:fit-content;margin-bottom:10px;">
Limited time deal
</div>

<div style="height:280px;display:flex;align-items:center;justify-content:center;overflow:hidden;">

<img src="${product.image}"
onmousemove="zoomImage(event,this)"
onmouseleave="resetZoom(this)"
style="max-height:260px;object-fit:contain;transition:transform .15s ease;cursor:zoom-in;">

</div>

<h3 style="font-weight:600;margin-top:10px;">
${product.name}
</h3>

<p style="font-size:13px;color:#555;margin-top:6px;">
${product.description}
</p>

<span style="color:#cc0c39;font-size:18px;font-weight:bold;">
-${discount}%
</span>

<div style="font-size:26px;font-weight:bold;">
${formatUSD(product.price)}
</div>

<div style="font-size:14px;color:#555;">
${formatINR(product.price)}
</div>

<div style="font-size:14px;color:#555;">
M.R.P: <span style="text-decoration:line-through;">${formatINR(product.originalPrice)}</span>
</div>

<p style="color:#dc2626;font-size:13px;margin-top:8px;font-weight:500;">
${product.offerNote}
</p>

<a href="${product.amazon}" target="_blank"
style="margin-top:10px;padding:10px;text-align:center;background:#ffd814;border-radius:6px;text-decoration:none;font-weight:600;">
Buy on Amazon
</a>

</div>

`
})

}

// Zoom effect
function zoomImage(e,img){
const rect = img.getBoundingClientRect()

const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2

img.style.transform = `scale(2) translate(${-x*40}px,${-y*40}px)`
}

function resetZoom(img){
img.style.transform = "scale(1)"
}

// Run after load
document.addEventListener("DOMContentLoaded", () => {
getProductFromURL()
renderProducts()
})

</script>

</body>
</html>
