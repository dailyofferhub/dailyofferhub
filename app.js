// ================= PRODUCT DATA =================

const products = [
{
id: 1,
name: "Amazon Echo Dot (Latest Model) Smart Speaker with Alexa | Rich Sound | Compact Design for Home, Bedroom & Office | Glacier White",
price: 74.00,
rating: 4.6,
reviews: 18324,
description: "Upgrade your home with the Amazon Echo Dot, a compact smart speaker designed to deliver clear vocals and balanced sound. Powered by Alexa, it helps you control smart home devices, play music, set reminders, and get instant information using just your voice.Its sleek and modern design fits perfectly in bedrooms, living rooms, and office spaces.",
image: "https://github.com/Aadhi6374/image/blob/main/SMART%20HOME%20DEVICE%20CONTROL%20YOUR%20HOME%20WITH%20VOICE.jpg?raw=true",
amazon: "https://www.amazon.com/dp/B09B94RL1R?tag=aadhithyan637-20"
},
{
id: 2,
name: "BL Vibe Beam True Wireless Earbuds | Deep Bass Sound, 32H Battery",
price: 29,
rating: 4.4,
reviews: 9621,
description: "Experience powerful JBL Deep Bass with the JBL Vibe Beam earbuds. Enjoy up to 32 hours of battery life and crystal-clear calls.",
image: "https://github.com/Aadhi6374/image/blob/main/%E2%80%9CDeep%20Bass%20Sound%20for%2032H%20Playback%20Earbud.jpg?raw=true",
amazon: "https://www.amazon.com/dp/B09B94RL1R?tag=aadhithyan637-20"
},
{
id: 3,
name: "Pocket Cinema Anywhere",
price: 59,
rating: 4.3,
reviews: 5421,
description: "👉 Watch movies anywhere on a big screen — just connect your phone and enjoy 🎬",
image: "https://github.com/Aadhi6374/image/blob/main/Portable%20Home%20Theater%20%F0%9F%8E%AC1.jpg?raw=true",
amazon: "https://www.amazon.com/dp/B099N4NSSD?tag=aadhithyan637-20"
},
{
id: 4,
name: "Chefman 4QT Air Fryer",
price: 59,
rating: 4.7,
reviews: 11234,
description: "Enjoy crispy, delicious meals without the extra oil ✨ Easy touchscreen controls and quick cooking.",
image: "https://github.com/Aadhi6374/image/blob/main/Your%20Kitchen%20needs%20this%20upgrade.jpg?raw=true",
amazon: "https://www.amazon.com/dp/B0CNY1F31S?tag=aadhithyan637-20"
},
{
id: 5,
name: "Fire TV Stick Upgrade",
price: 59,
rating: 4.6,
reviews: 22145,
description: "Upgrade your TV without buying a new one. Enjoy Netflix, YouTube & live TV easily.",
image: "https://github.com/Aadhi6374/image/blob/main/%E2%80%9CTurn%20Your%20Old%20TV%20Into%20Smart%20TV%20%F0%9F%93%BA%F0%9F%94%A5.jpg?raw=true",
amazon: "https://www.amazon.com/dp/B0B8C3WDPH?tag=aadhithyan637-20"
},
{
id: 6,
name: "Apple Wired Headphones (USB-C)",
price: 59,
rating: 4.5,
reviews: 8342,
description: "Tired of charging earbuds? Switch to Apple wired EarPods for instant sound.",
image: "https://github.com/Aadhi6374/image/blob/main/%E2%80%9CNo%20Charging%20Needed%20%F0%9F%8E%A7%E2%80%9D.jpg?raw=true",
amazon: "https://www.amazon.com/dp/B0DCH8VDXF?tag=aadhithyan637-20"
},
{
id: 7,
name: "Double Burner Induction Cooktop",
price: 59,
rating: 4.4,
reviews: 6453,
description: "Cook two dishes at once with powerful 4000W heating ⚡",
image: "https://github.com/Aadhi6374/image/blob/main/%E2%80%9CGas%20Stove%20Upgrade%20Now.jpg?raw=true",
amazon: "https://www.amazon.com/dp/B09TRGGZZZ?tag=aadhithyan637-20"
},
{
id: 8,
name: "87W Fast Charging Power Bank",
price: 59,
rating: 4.6,
reviews: 12987,
description: "Charge your devices anytime, anywhere with powerful fast charging.",
image: "https://github.com/Aadhi6374/image/blob/main/Pin.png?raw=true",
amazon: "https://www.amazon.com/dp/B0CXDXP8VR?tag=aadhithyan637-20"
},
{
id: 9,
name: "Perfect Sleep Starts Here",
price: 59,
rating: 4.5,
reviews: 10234,
description: "Ultra-quiet mist keeps your air comfortable so you can sleep deeply all night.",
image: "https://github.com/Aadhi6374/image/blob/main/humdifier.png?raw=true",
amazon: "https://www.amazon.com/dp/B0C9HBKQ5D?tag=aadhithyan637-20"
},
{
id: 10,
name: "MUSICOZY Bluetooth Sleep Mask",
price: 59,
rating: 4.5,
reviews: 12634,
description: "Fall asleep faster with the MUSICOZY Sleep Mask. Soft, wireless, and designed for comfort.",
image: "https://github.com/Aadhi6374/image/blob/main/Mask.png?raw=true",
amazon: "https://www.amazon.com/dp/B0D1Q89VM4?tag=aadhithyan637-20"
}
]

// ================= RENDER =================

function renderProducts(){

const grid = document.getElementById("product-grid")
const params = new URLSearchParams(window.location.search)
const selectedId = parseInt(params.get("product"))

let html = ""

if(selectedId){

const product = products.find(p => p.id === selectedId)
grid.className = "w-full"

html = `
<div class="w-full flex flex-col md:flex-row gap-10">

<div class="w-full md:w-1/2">
<div class="image-container">
<img src="${product.image}"
onmousemove="zoomImage(event,this)"
onmouseleave="hideZoom(this)">
</div>
</div>

<div class="w-full md:w-1/2">

<h1 class="text-2xl font-bold mb-3">${product.name}</h1>

<div class="flex items-center mb-3 text-yellow-500 text-sm">
${"★".repeat(Math.round(product.rating))}☆
<span class="text-gray-600 ml-2">(${product.rating} • ${product.reviews.toLocaleString()} reviews)</span>
</div>

<p class="text-gray-600 mb-4">${product.description}</p>

<div style="background:#ff9900;color:white;padding:6px 10px;border-radius:4px;width:fit-content;margin-bottom:15px;font-weight:bold;">
Trending on Amazon
</div>

<a href="${product.amazon}" target="_blank"
class="inline-block bg-yellow-400 px-6 py-3 rounded font-bold text-black">
Click Here to Check Latest Price on Amazon
</a>

</div>

</div>
`

}else{

grid.className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"

products.forEach(product => {
html += `
<div class="bg-white rounded-xl shadow-md border p-4 max-w-sm w-full">

<div style="background:#ff9900;color:white;font-size:12px;padding:6px 10px;border-radius:4px;width:fit-content;margin-bottom:10px;font-weight:bold;">
Trending on Amazon
</div>

<div class="image-container">
<img src="${product.image}"
onmousemove="zoomImage(event,this)"
onmouseleave="hideZoom(this)">
</div>

<h3 class="font-semibold mt-3 text-sm">${product.name}</h3>

<div class="text-yellow-500 text-xs mt-1">
${"★".repeat(Math.round(product.rating))}☆
<span class="text-gray-500">(${product.rating})</span>
</div>

<p class="text-xs text-gray-500 mt-1">${product.description}</p>

<a href="?product=${product.id}"
class="block mt-3 bg-yellow-400 text-center p-2 rounded font-bold">
View Product
</a>

</div>
`
})

}

grid.innerHTML = html
}

// ================= ZOOM =================

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

// ================= START =================

document.addEventListener("DOMContentLoaded", renderProducts)
