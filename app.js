// ================= PRODUCT DATA =================

const products = [
{
id: 1,
name: "Amazon Echo Dot (Latest Model) Smart Speaker with Alexa | Rich Sound | Compact Design for Home, Bedroom & Office | Glacier White",
originalPrice:4590.52 ,
price: 4590.52,
description: "Upgrade your home with the Amazon Echo Dot, a compact smart speaker designed to deliver clear vocals and balanced sound. Powered by Alexa, it helps you control smart home devices, play music, set reminders, and get instant information using just your voice.Its sleek and modern design fits perfectly in bedrooms, living rooms, and office spaces. Whether you want to stream music, manage your daily routine, or enhance your smart home experience, the Echo Dot is a reliable and user-friendly choice.",
image: "https://github.com/Aadhi6374/image/blob/main/SMART%20HOME%20DEVICE%20CONTROL%20YOUR%20HOME%20WITH%20VOICE.jpg?raw=true",
amazon: "https://www.amazon.com/dp/B09B94RL1R?tag=aadhithyan637-20"
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

<!-- ✅ FIXED IMAGE (FULL VIEW + CLEAR DETAILS) -->
<div class="image-container" style="
position:relative;
height:320px;
overflow:hidden;
display:flex;
align-items:center;
justify-content:center;
background:#fff;
">

<img src="${product.image}"
onmousemove="zoomImage(event,this)"
onmouseleave="hideZoom(this)"
style="
max-width:100%;
max-height:100%;
object-fit:contain;
object-position:center;
transition:transform 0.25s ease;
will-change:transform;
image-rendering:-webkit-optimize-contrast;
cursor:zoom-in;
">

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

<!-- ✅ USD PRICE -->
<p class="text-xl font-bold">
${formatUSD(product.price)}
<span class="text-xs text-gray-500">
(${formatINR(product.price)})
</span>
</p>

<!-- MRP -->
<p class="text-sm text-gray-500">
M.R.P: 
<span class="line-through">
${formatUSD(product.originalPrice)}
</span>
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

const rect = img.getBoundingClientRect()

const x = (e.clientX - rect.left) / rect.width
const y = (e.clientY - rect.top) / rect.height

img.style.transformOrigin = `${x*100}% ${y*100}%`
img.style.transform = "scale(2)"
}

function hideZoom(img){
img.style.transform = "scale(1)"
}

// ================= ABOUT BUTTON =================

function showAbout(){

const about = document.getElementById("about-section")

if(!about) return

about.style.display = "block"
about.scrollIntoView({ behavior: "smooth", block: "start" })
}

// ================= START =================

document.addEventListener("DOMContentLoaded", () => {
renderProducts()
})
