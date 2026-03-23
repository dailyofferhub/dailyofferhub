// ================= PRODUCT DATA =================

const products = [
{
id: 1,
name: "Amazon Echo Dot (Latest Model) Smart Speaker with Alexa | Rich Sound | Compact Design for Home, Bedroom & Office | Glacier White",
originalPrice: 99.99,  // ✅ USD
price: 74.00,         // ✅ USD
description: "Upgrade your home with the Amazon Echo Dot, a compact smart speaker designed to deliver clear vocals and balanced sound. Powered by Alexa, it helps you control smart home devices, play music, set reminders, and get instant information using just your voice.Its sleek and modern design fits perfectly in bedrooms, living rooms, and office spaces. Whether you want to stream music, manage your daily routine, or enhance your smart home experience, the Echo Dot is a reliable and user-friendly choice.",
image: "https://github.com/Aadhi6374/image/blob/main/SMART%20HOME%20DEVICE%20CONTROL%20YOUR%20HOME%20WITH%20VOICE.jpg?raw=true",
amazon: "https://www.amazon.com/dp/B09B94RL1R?tag=aadhithyan637-20"
},
  {
id: 2,
name: "BL Vibe Beam True Wireless Earbuds | Deep Bass Sound, 32H Battery, Bluetooth 5.2, IP54 Water Resistant",
originalPrice: 49.95,  // ✅ USD
price: 29,         // ✅ USD
description: "Experience powerful JBL Deep Bass with the JBL Vibe Beam earbuds. Enjoy up to 32 hours of battery life, crystal-clear calls with VoiceAware, and a secure, comfortable fit. Perfect for music, calls, and workouts with IP54 water & dust resistance.",
image: "https://github.com/Aadhi6374/image/blob/main/%E2%80%9CDeep%20Bass%20Sound%20for%2032H%20Playback%20Earbud.jpg?raw=true",
amazon: "https://www.amazon.com/dp/B09B94RL1R?tag=aadhithyan637-20"
},
  {
id: 3,
name: "Pocket Cinema Anywhere",
originalPrice: 79.99,  // ✅ USD
price: 59,         // ✅ USD
description: "👉 Watch movies anywhere on a big screen — just connect your phone and enjoy 🎬",
image: "https://github.com/Aadhi6374/image/blob/main/Portable%20Home%20Theater%20%F0%9F%8E%AC.jpg?raw=true",
amazon: "https://www.amazon.com/dp/B099N4NSSD?tag=aadhithyan637-20"
}
]

// ================= FORMAT FUNCTIONS =================

function formatUSD(amount){
return "$" + amount.toFixed(2) // ✅ NO conversion
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

<!-- IMAGE -->
<div style="
width:100%;
height:auto;
display:flex;
justify-content:center;
align-items:center;
padding:10px 0;
background:#fff;
overflow:hidden;
">

<img src="${product.image}"
onmousemove="zoomImage(event,this)"
onmouseleave="hideZoom(this)"
style="
width:auto;
max-width:100%;
height:auto;
max-height:380px;
display:block;
image-rendering:high-quality;
transition:transform 0.25s ease;
will-change:transform;
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
img.style.transform = "scale(2.3)"
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
