// ================= PRODUCT DATA =================

const products = [
{
id: 1,
name: "Amazon Echo Dot (Latest Model) Smart Speaker with Alexa | Rich Sound | Compact Design for Home, Bedroom & Office | Glacier White",
price: 74.00,
rating: 4.7,
reviews: 186872,
description: "Control your home with just your voice and enjoy rich sound every day — once you use it, you won’t go back.",
image: "https://github.com/Aadhi6374/image/blob/main/SMART%20HOME%20DEVICE%20CONTROL%20YOUR%20HOME%20WITH%20VOICE.jpg?raw=true",
amazon: "https://www.amazon.com/dp/B09B94RL1R?tag=aadhithyan637-20"
},
{
id: 2,
name: "Pocket Cinema Anywhere",
price: 59,
rating: 4.3,
reviews: 4801,
description: "Turn any wall into your personal theater and enjoy movies like never before — anytime, anywhere.",
image: "https://github.com/Aadhi6374/image/blob/main/Portable%20Home%20Theater%20%F0%9F%8E%AC1.jpg?raw=true",
amazon: "https://www.amazon.com/dp/B099N4NSSD?tag=aadhithyan637-20"
},
{
id: 3,
name: "Chefman 4QT Air Fryer",
price: 59,
rating: 4.6,
reviews: 2964,
description: "Enjoy crispy, tasty food with little to no oil — eat what you love without the guilt.",
image: "https://github.com/Aadhi6374/image/blob/main/Your%20Kitchen%20needs%20this%20upgrade.jpg?raw=true",
amazon: "https://www.amazon.com/dp/B0CNY1F31S?tag=aadhithyan637-20"
},
{
id: 5,
name: "Fire TV Stick Upgrade",
price: 59,
rating: 4.5,
reviews: 9363,
description: "Instantly upgrade your TV and unlock endless entertainment — no need to buy a new TV.",
image: "https://github.com/Aadhi6374/image/blob/main/%E2%80%9CTurn%20Your%20Old%20TV%20Into%20Smart%20TV%20%F0%9F%93%BA%F0%9F%94%A5.jpg?raw=true",
amazon: "https://www.amazon.com/dp/B0B8C3WDPH?tag=aadhithyan637-20"
},
{
id: 6,
name: "Apple Wired Headphones (USB-C)",
price: 59,
rating: 4.6,
reviews: 11911,
description: "No charging, no waiting — just plug in and enjoy clear, uninterrupted sound instantly.",
image: "https://github.com/Aadhi6374/image/blob/main/%E2%80%9CNo%20Charging%20Needed%20%F0%9F%8E%A7%E2%80%9D.jpg?raw=true",
amazon: "https://www.amazon.com/dp/B0DCH8VDXF?tag=aadhithyan637-20"
},
{
id: 7,
name: "Double Burner Induction Cooktop",
price: 59,
rating: 4.3,
reviews: 295,
description: "Cook faster and save time every day with powerful dual burners — perfect for busy kitchens.",
image: "https://github.com/Aadhi6374/image/blob/main/pinn.png?raw=true",
amazon: "https://www.amazon.com/dp/B09TRGGZZZ?tag=aadhithyan637-20"
},
{
id: 8,
name: "87W Fast Charging Power Bank",
price: 59,
rating: 4.6,
reviews: 12987,
description: "Never run out of battery again — stay powered wherever you go without stress.",
image: "https://github.com/Aadhi6374/image/blob/main/Pin.png?raw=true",
amazon: "https://www.amazon.com/dp/B0CXDXP8VR?tag=aadhithyan637-20"
},
{
id: 9,
name: "Perfect Sleep Starts Here",
price: 59,
rating: 4.5,
reviews: 1077,
description: "Wake up refreshed and energized every morning with deep, peaceful sleep you deserve.",
image: "https://github.com/Aadhi6374/image/blob/main/humdifier.png?raw=true",
amazon: "https://www.amazon.com/dp/B0C9HBKQ5D?tag=aadhithyan637-20"
},
{
id: 10,
name: "MUSICOZY Bluetooth Sleep Mask",
price: 59,
rating: 4.2,
reviews: 10636,
description: "Block out distractions and relax into deep sleep with soothing music right in your ears.",
image: "https://github.com/Aadhi6374/image/blob/main/Mask.png?raw=true",
amazon: "https://www.amazon.com/dp/B0D1Q89VM4?tag=aadhithyan637-20"
},
{
id: 11,
name: "JBL Go 4 Portable Bluetooth Speaker 🔊 Waterproof Mini Speaker with Big Bass | Travel Must-Have Gadget (Pink)",
price: 59,
rating: 4.8,
reviews: 15046,
description: "Small size, powerful sound! 💖 The JBL Go 4 delivers deep bass, waterproof durability, and all-day music—perfect for travel, beach days, and daily vibes. Clip it, carry it, and enjoy music anywhere!.",
image: "https://github.com/Aadhi6374/image/blob/main/jbl%20speaker1.png?raw=true",
amazon: "https://www.amazon.com/dp/B0D1JG8CRC?tag=aadhithyan637-20"
},
{
id: 12,
name: "“Unlimited Entertainment Starts Now 🚀”",
price: 59,
rating: 4.7,
reviews: 107057,
description: "Tired of slow streaming, endless searching, and boring TV nights? 😩Upgrade your experience with fast 4K streaming, voice search using Alexa, and even play games—no console needed. Enjoy smooth performance with Wi-Fi 6 and access to millions of movies, shows, and free live TV. One small device, all your entertainment solved 🎬✨.",
image: "https://github.com/Aadhi6374/image/blob/main/pin.png?raw=true",
amazon: "https://www.amazon.com/dp/B0F7Z4QZTT?tag=aadhithyan637-20"
},
{
id: 13,
name: "“iPhone Users Only , Never Lose Your Wallet Again”",
price: 59,
rating: 4.5,
reviews: 4705,
description: "Tired of losing your wallet, keys, or passport? 😩 This ultra-thin Bluetooth tracker card works exclusively with Apple Find My (iPhone only) to help you locate your essentials in seconds.",
image: "https://github.com/Aadhi6374/image/blob/main/pinnn.png?raw=true",
amazon: "https://www.amazon.com/dp/B0F1TJRS7F?tag=aadhithyan637-20"
},
{
id: 14,
name: "“Stop Buying Cheap Bottles 😳💧 Owala FreeSip 24oz – Sip or Chug, Stays Cold ALL Day!”",
price: 59,
rating: 4.7,
reviews: 116169,
description: "Tired of warm water and boring bottles? Upgrade to the Owala FreeSip 24oz 💧✔️ Sip with straw OR chug – your choice✔️ Keeps drinks cold for hours ❄️✔️ Leak-proof & travel ready✔️ BPA-free & stylish design👉 Perfect for gym, travel & daily use💥 Once you try it, you won’t go back!",
image: "https://github.com/Aadhi6374/image/blob/main/bottle.png?raw=true",
amazon: "https://www.amazon.com/dp/B0C59C39PV?tag=aadhithyan637-20"
},
{
id: 15,
name: "Mini Inkjet Coding Machine for Packaging | Portable QR & Logo Printer for Small Business (12.7mm DPI Adjustable)",
price: 59,
rating: 4.5,
reviews: 1,
description: "Upgrade your packaging with this mini smart inkjet coding machine 💼✨Perfect for small businesses to print logos, QR codes, barcodes, batch numbers, and labels instantly!✔️ Portable & easy to use✔️ High-quality 12.7mm printing (DPI adjustable)✔️ Works on boxes, paper, plastic & more✔️ Type-C fast charging 🔋✔️ Save time & boost your brand professionally💡 Ideal for small business owners Ecommerce sellers Handmade product brands Print your logo in seconds & make your packaging stand out!👉 Tap to explore & upgrade your business today!", 
image: "https://github.com/Aadhi6374/image/blob/main/printer1.png?raw=true",
amazon: "https://www.amazon.com/dp/B0CJ7F22M9?tag=aadhithyan637-20"
},
{
id: 16,
name: "Aquasonic Black Series Electric Toothbrush (ADA Accepted) | 40,000 VPM Sonic Whitening Toothbrush with 8 Brush Heads & Travel Case",
price: 59,
rating: 4.6,
reviews: 134109,
description: "Upgrade your oral care routine with the Aquasonic Black Series Electric Toothbrush featuring a powerful 40,000 VPM sonic motor for deep cleaning, plaque removal, and teeth whitening, ADA accepted for safety and effectiveness, equipped with 4 brushing modes (Clean, Soft, Whiten, Massage) and a smart timer for optimal brushing, includes 8 long-lasting brush heads and a sleek travel case, supports convenient wireless charging, and delivers a premium, dentist-level clean at home or on the go for a healthier, brighter smile.", 
image: "https://github.com/Aadhi6374/image/blob/main/brush.png?raw=true",
amazon: "https://www.amazon.com/dp/B072YVWBXH?tag=aadhithyan637-20"
},
{
id: 17,
name: "Hawaiian Tropic Mineral Powder Sunscreen Brush SPF 30 | Matte Oil Control Travel Sunscreen for Face & Makeup",
price: 59,
rating: 4.2,
reviews: 6350,
description: "Stay protected anywhere ☀️ This lightweight mineral powder sunscreen SPF 30 gives a smooth matte finish, controls oil, and works perfectly over makeup 💄 Travel-friendly, non-comedogenic & beach-ready 🌴", 
image: "https://github.com/Aadhi6374/image/blob/main/sunscreen.png?raw=true",
amazon: "https://www.amazon.com/dp/B09GXF7KVD?tag=aadhithyan637-20"
}

// ================= HELPER =================

function formatReviews(num){
return num.toLocaleString() + "+"
}

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
<div class="w-full flex flex-col md:flex-row gap-10 p-6">

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
<span class="text-gray-600 ml-2">(${product.rating} • ${formatReviews(product.reviews)} reviews)</span>
</div>

<p class="text-gray-600 mb-4">${product.description}</p>

<div class="bg-orange-500 text-white px-3 py-1 inline-block rounded mb-4">
Trending on Amazon
</div>

<a href="${product.amazon}" target="_blank"
class="inline-block bg-yellow-400 px-6 py-3 rounded font-bold">
 Click Here to Check Latest Price on Amazon
</a>

</div>

</div>
`

}else{

grid.className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"

products.forEach(product => {
html += `
<div class="bg-white p-4 rounded shadow">

<div class="image-container">
<img src="${product.image}"
onmousemove="zoomImage(event,this)"
onmouseleave="hideZoom(this)">
</div>

<h3 class="font-bold mt-2">${product.name}</h3>

<div class="text-yellow-500 text-xs mt-1">
${"★".repeat(Math.round(product.rating))}☆
</div>

<p class="text-sm text-gray-600">${product.description}</p>

<a href="?product=${product.id}"
class="block mt-2 bg-yellow-400 text-center p-2 rounded font-bold">
View Product
</a>

</div>
`
})

}

grid.innerHTML = html
}

// ================= ABOUT =================

function showAbout(){
document.getElementById("about-section").classList.toggle("hidden")
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
