// ================= PRODUCT DATA =================

const products = [
{
id: 1,
name: "Fire-Boltt Brillia Smartwatch AMOLED Display | Bluetooth Calling Fitness Watch",
originalPrice: 18999,
price: 1699,
description: "Premium smartwatch with AMOLED display, Bluetooth calling, SpO2 & heart rate tracking.",
image: "https://m.media-amazon.com/images/I/71PtxgLJltL._SL1500_.jpg",
amazon: "https://amzn.to/4se9Mzs"
}
]

// ================= FORMAT FUNCTIONS =================

function formatINR(amount){
return "₹" + amount.toLocaleString("en-IN")
}

function formatUSD(amount){
return "$" + (amount / 83).toFixed(2)
}

// ================= RENDER PRODUCTS =================

function renderProducts(){

const grid = document.getElementById("product-grid")

if(!grid){
console.error("❌ product-grid not found")
return
}

let html = ""

products.forEach(product => {

const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)

html += `

<div class="bg-white rounded-xl shadow-md border p-4">

<div style="background:#cc0c39;color:white;font-size:12px;padding:6px 10px;border-radius:4px;width:fit-content;margin-bottom:10px;">
Limited time deal
</div>

<!-- IMAGE WITH ZOOM -->
<div class="image-container">

<img src="${product.image}"
onmousemove="zoomImage(event,this)"
onmouseleave="hideZoom(this)">

<div class="zoom-view"></div>

</div>

<h3 class="font-semibold mt-3 text-sm">
${product.name}
</h3>

<p class="text-xs text-gray-500 mt-1">
${product.description}
</p>

<p class="text-red-600 font-bold mt-2">
-${discount}%
</p>

<!-- USD -->
<p class="text-xl font-bold">
${formatUSD(product.price)}
</p>

<!-- INR -->
<p class="text-sm text-gray-500">
${formatINR(product.price)}
</p>

<p class="text-sm text-gray-500">
M.R.P: <span class="line-through">${formatINR(product.originalPrice)}</span>
</p>

<a href="${product.amazon}" target="_blank"
class="block mt-3 bg-yellow-400 text-center p-2 rounded font-bold">
Buy on Amazon
</a>

</div>

`
})

grid.innerHTML = html
}

// ================= ZOOM FUNCTION =================

function zoomImage(e,img){

const container = img.parentElement
const zoom = container.querySelector(".zoom-view")

zoom.style.display = "block"
zoom.style.backgroundImage = `url(${img.src})`

const rect = img.getBoundingClientRect()

const x = ((e.clientX - rect.left) / rect.width) * 100
const y = ((e.clientY - rect.top) / rect.height) * 100

zoom.style.backgroundPosition = `${x}% ${y}%`
}

function hideZoom(img){
const zoom = img.parentElement.querySelector(".zoom-view")
zoom.style.display = "none"
}

// ================= START =================

document.addEventListener("DOMContentLoaded", () => {
renderProducts()
})
