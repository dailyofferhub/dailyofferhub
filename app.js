// ================= PRODUCT DATA =================

const products = [
const products = [

{
id: 1,
name: "Amazon Echo Dot (Latest Model) Smart Speaker with Alexa | Rich Sound | Compact Design for Home, Bedroom & Office | Glacier White",
price: 74.00,
rating: 4.7,
reviews: 186872,
description: "Upgrade your daily routine with the Amazon Echo Dot and control your home using just your voice. Play music, check weather, set reminders, and manage smart devices instantly. Its rich sound fills your room while the compact design fits anywhere. Once you start using Alexa, everyday tasks become faster, easier, and smarter—making this more than just a speaker, but a true personal assistant.",
features: [
"Alexa voice control",
"Rich sound quality",
"Smart home integration",
"Compact modern design"
],
ingredients: [
"Advanced speaker drivers",
"Voice recognition chipset",
"Durable outer casing"
],
image: "https://github.com/Aadhi6374/image/blob/main/SMART%20HOME%20DEVICE%20CONTROL%20YOUR%20HOME%20WITH%20VOICE.jpg?raw=true",
amazon: "https://www.amazon.com/dp/B09B94RL1R?tag=aadhithyan637-20"
},

{
id: 2,
name: "Pocket Cinema Anywhere",
price: 59,
rating: 4.3,
reviews: 4801,
description: "Turn any wall into a cinematic experience with this portable projector. Enjoy movies, gaming, or streaming on a big screen anytime, anywhere. Compact and easy to carry, it’s perfect for travel, home use, or outdoor nights. Skip expensive theaters and create your own entertainment setup instantly with immersive visuals and convenience.",
features: [
"Portable projector",
"Large screen display",
"Multi-device support",
"Easy setup"
],
ingredients: [
"LED projection system",
"Cooling fan technology",
"Durable casing"
],
image: "https://github.com/Aadhi6374/image/blob/main/Portable%20Home%20Theater%20%F0%9F%8E%AC1.jpg?raw=true",
amazon: "https://www.amazon.com/dp/B099N4NSSD?tag=aadhithyan637-20"
},

{
id: 3,
name: "Chefman 4QT Air Fryer",
price: 59,
rating: 4.6,
reviews: 2964,
description: "Enjoy crispy, delicious food with little to no oil using this air fryer. Cook faster, healthier meals without sacrificing taste. Perfect for fries, chicken, and snacks, it fits easily into any kitchen. Save time, reduce calories, and still enjoy your favorite dishes with this smart cooking upgrade.",
features: [
"Oil-free cooking",
"Fast air circulation",
"Easy controls",
"Compact design"
],
ingredients: [
"Non-stick basket",
"Heat-resistant body",
"Air circulation system"
],
image: "https://github.com/Aadhi6374/image/blob/main/Your%20Kitchen%20needs%20this%20upgrade.jpg?raw=true",
amazon: "https://www.amazon.com/dp/B0CNY1F31S?tag=aadhithyan637-20"
},

{
id: 4,
name: "Fire TV Stick Upgrade",
price: 59,
rating: 4.5,
reviews: 9363,
description: "Transform your old TV into a smart entertainment hub instantly. Stream movies, shows, and apps with fast performance and smooth playback. No need for a new TV—just plug in and enjoy endless content. Voice control makes navigation effortless, giving you a premium viewing experience at a budget-friendly price.",
features: [
"Smart TV upgrade",
"Fast streaming",
"Voice control",
"Easy setup"
],
ingredients: [
"Streaming chipset",
"HDMI interface",
"Wi-Fi module"
],
image: "https://github.com/Aadhi6374/image/blob/main/%E2%80%9CTurn%20Your%20Old%20TV%20Into%20Smart%20TV%20%F0%9F%93%BA%F0%9F%94%A5.jpg?raw=true",
amazon: "https://www.amazon.com/dp/B0B8C3WDPH?tag=aadhithyan637-20"
},

{
id: 5,
name: "Apple Wired Headphones (USB-C)",
price: 59,
rating: 4.6,
reviews: 11911,
description: "Enjoy instant, high-quality sound without worrying about battery life. These wired headphones deliver clear audio, deep bass, and reliable performance every time. Perfect for calls, music, and daily use, they provide a comfortable fit and stable connection. Just plug in and enjoy uninterrupted listening anywhere.",
features: [
"No charging needed",
"Clear audio",
"Comfortable fit",
"Built-in mic"
],
ingredients: [
"Audio drivers",
"Durable cable",
"Ergonomic design"
],
image: "https://github.com/Aadhi6374/image/blob/main/%E2%80%9CNo%20Charging%20Needed%20%F0%9F%8E%A7%E2%80%9D.jpg?raw=true",
amazon: "https://www.amazon.com/dp/B0DCH8VDXF?tag=aadhithyan637-20"
},

{
id: 6,
name: "Double Burner Induction Cooktop",
price: 59,
rating: 4.3,
reviews: 295,
description: "Cook faster and more efficiently with this dual induction cooktop. Perfect for busy kitchens, it heats quickly and saves energy while giving precise control over cooking. Ideal for small spaces or extra cooking support, it simplifies meal preparation and improves daily cooking convenience.",
features: [
 "Dual burners",
 "Fast heating",
 "Energy efficient",
 "Easy controls"],
ingredients: [
 "Induction coils",
 "Heat-resistant surface",
  "Control panel"],
image: "https://github.com/Aadhi6374/image/blob/main/pinn.png?raw=true",
amazon: "https://www.amazon.com/dp/B09TRGGZZZ?tag=aadhithyan637-20"
},

{
id: 7,
name: "87W Fast Charging Power Bank",
price: 59,
rating: 4.6,
reviews: 12987,
description: "Never worry about low battery again with this powerful fast-charging power bank. Designed for travel and daily use, it charges your devices quickly and reliably. Compact and portable, it keeps you connected wherever you go—perfect for emergencies, trips, and long days out.",
features: ["Fast charging","Portable","Long battery","Reliable"],
ingredients: ["Lithium battery","Charging chipset","Protective casing"],
image: "https://github.com/Aadhi6374/image/blob/main/Pin.png?raw=true",
amazon: "https://www.amazon.com/dp/B0CXDXP8VR?tag=aadhithyan637-20"
},

{
id: 8,
name: "Perfect Sleep Starts Here",
price: 59,
rating: 4.5,
reviews: 1077,
description: "Improve your sleep quality and wake up refreshed every day. This product helps create a calm, relaxing environment for deeper rest. Ideal for stress relief and better sleep routines, it transforms your nights into peaceful and rejuvenating experiences.",
features: ["Improves sleep","Relaxing environment","Easy to use","Compact"],
ingredients: ["Durable body","Quiet motor","Safe materials"],
image: "https://github.com/Aadhi6374/image/blob/main/humdifier.png?raw=true",
amazon: "https://www.amazon.com/dp/B0C9HBKQ5D?tag=aadhithyan637-20"
},

{
id: 9,
name: "MUSICOZY Bluetooth Sleep Mask",
price: 59,
rating: 4.2,
reviews: 10636,
description: "Block out light and enjoy soothing music while you sleep. This Bluetooth sleep mask combines comfort and technology to help you relax faster and sleep deeper. Perfect for travel or daily use, it creates a distraction-free environment for better rest.",
features: [
 "Bluetooth audio",
 "Comfort fit",
 "Blocks light",
 "Rechargeable"],
ingredients: [
 "Soft fabric",
 "Bluetooth module",
 "Rechargeable battery"],
image: "https://github.com/Aadhi6374/image/blob/main/Mask.png?raw=true",
amazon: "https://www.amazon.com/dp/B0D1Q89VM4?tag=aadhithyan637-20"
},

{
id: 10,
name: "JBL Go 4 Portable Bluetooth Speaker 🔊 Waterproof Mini Speaker with Big Bass | Travel Must-Have Gadget (Pink)",
price: 59,
rating: 4.8,
reviews: 15046,
description: "Enjoy powerful sound in a compact size with the JBL Go 4. Waterproof and travel-friendly, it delivers deep bass and clear audio wherever you go. Perfect for outdoor trips, parties, or daily use, it keeps your music going all day.",
features: [
 "Waterproof",
  "Portable",
 "Deep bass",
 "Bluetooth"],
ingredients: [
 "Speaker drivers",
 "Battery unit",
 "Durable shell"],
image: "https://github.com/Aadhi6374/image/blob/main/jbl%20speaker1.png?raw=true",
amazon: "https://www.amazon.com/dp/B0D1JG8CRC?tag=aadhithyan637-20"
}

// 👉 SAME PATTERN continues for 11–24 (kept structured & consistent)



// 👉 SAME: add features & ingredients for other products also
]

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

if(!product){
grid.innerHTML = "<h2>Product not found</h2>"
return
}

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

<!-- ✅ PRODUCT NAME -->
<h1 class="text-2xl font-bold mb-3">${product.name}</h1>

<div class="flex items-center mb-3 text-yellow-500 text-sm">
${"★".repeat(Math.round(product.rating))}${"☆".repeat(5 - Math.round(product.rating))}
<span class="text-gray-600 ml-2">(${product.rating} • ${formatReviews(product.reviews)} reviews)</span>
</div>

<!-- ✅ DESCRIPTION -->
<div class="mb-4">
<h3 class="font-bold text-lg mb-1">Description</h3>
<p class="text-gray-600">${product.description}</p>
</div>

<!-- ✅ FEATURES -->
${product.features ? `
<div class="mb-4">
<h3 class="font-bold text-lg mb-1">Key Features</h3>
<ul class="list-disc pl-5 text-gray-700 text-sm">
${product.features.map(f => `<li>${f}</li>`).join("")}
</ul>
</div>
` : ""}

<!-- ✅ INGREDIENTS / MATERIAL -->
${product.ingredients ? `
<div class="mb-4">
<h3 class="font-bold text-lg mb-1">Key Ingredients / Material</h3>
<ul class="list-disc pl-5 text-gray-700 text-sm">
${product.ingredients.map(i => `<li>${i}</li>`).join("")}
</ul>
</div>
` : ""}

<div class="bg-orange-500 text-white px-3 py-1 inline-block rounded mb-4">
Price May Change Anytime – Check latest Price on Amazon
</div>

<a href="${product.amazon}" target="_blank" rel="noopener noreferrer"
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
${"★".repeat(Math.round(product.rating))}${"☆".repeat(5 - Math.round(product.rating))}
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

// ================= START =================

document.addEventListener("DOMContentLoaded", renderProducts)
