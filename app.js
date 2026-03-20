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
<div class="image-container" style="position:relative;overflow:hidden;">

<img src="${product.image}"
onmousemove="zoomImage(event,this)"
onmouseleave="hideZoom(this)"
style="max-height:260px;display:block;margin:auto;transition:opacity 0.2s;">

<div class="zoom-view" style="
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
background-repeat:no-repeat;
background-size:800px;
display:none;
z-index:10;
"></div>

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

<p class="text-xl font-bold">
${formatUSD(product.price)}
</p>

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

// ================= ZOOM FUNCTION (FIXED) =================

function zoomImage(e,img){

const container = img.parentElement
const zoom = container.querySelector(".zoom-view")

zoom.style.display = "block"
zoom.style.backgroundImage = `url(${img.src})`

const rect = img.getBoundingClientRect()

const x = ((e.clientX - rect.left) / rect.width) * 100
const y = ((e.clientY - rect.top) / rect.height) * 100

zoom.style.backgroundPosition = `${x}% ${y}%`

img.style.opacity = "0"
}

function hideZoom(img){
const zoom = img.parentElement.querySelector(".zoom-view")
zoom.style.display = "none"
img.style.opacity = "1"
}

// ================= ABOUT US (AUTO ADD) =================

function addAboutSection(){

const aboutHTML = `
<section style="background:#fff;padding:40px;margin-top:40px;text-align:center;">
<h2 style="font-size:28px;font-weight:bold;margin-bottom:10px;">About Daily Offer Hub</h2>
<p style="color:#555;max-width:700px;margin:auto;">
Daily Offer Hub helps you discover the best deals on premium products.
We select high-quality and trending items from Amazon so you can buy with confidence.
Our goal is to save your time and money by showing only the best offers available online.
</p>
<p style="margin-top:15px;color:#777;">
✔ Trusted Products • ✔ Best Deals • ✔ Direct Amazon Links • ✔ Daily Updates
</p>
</section>
`

document.body.insertAdjacentHTML("beforeend", aboutHTML)
}

// ================= START =================

document.addEventListener("DOMContentLoaded", () => {
renderProducts()
addAboutSection()
})
