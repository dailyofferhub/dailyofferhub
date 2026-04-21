// ================= PRODUCT DATA =================

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
},
 {
id: 11,
name: "“Unlimited Entertainment Starts Now 🚀”",
price: 59,
rating: 4.7,
reviews: 107057,
description: "Still stuck with slow streaming and boring TV nights? Upgrade instantly and unlock a world of fast, smooth 4K entertainment right from your home. No buffering, no frustration—just endless movies, shows, and apps at your fingertips. It’s designed to give you a premium experience without spending on a new TV. Once you switch, your entire viewing experience feels faster, smarter, and way more enjoyable every single day.",
features: [
"Fast 4K streaming",
"Smooth performance",
"Access to apps & content",
"Easy setup",
"Voice control support"
],
ingredients: [
"Streaming chipset",
"Wi-Fi module",
"HDMI interface",
"Durable casing"
],
image: "https://github.com/Aadhi6374/image/blob/main/pin.png?raw=true",
amazon: "https://www.amazon.com/dp/B0F7Z4QZTT?tag=aadhithyan637-20"
},

{
id: 12,
name: "“iPhone Users Only , Never Lose Your Wallet Again”",
price: 59,
rating: 4.5,
reviews: 4705,
description: "Tired of losing your wallet and stressing every time? This smart solution helps you track your wallet instantly using your phone. No more panic moments or wasted time searching everywhere. Designed for convenience and security, it ensures you always know where your essentials are. Perfect for busy lifestyles, travel, or daily use—once you start using it, you’ll wonder how you ever lived without it.",
features: [
"Real-time tracking",
"Easy phone connection",
"Compact design",
"Secure attachment",
"Long battery support"
],
ingredients: [
"Tracking chip",
"Bluetooth module",
"Durable casing",
"Battery unit"
],
image: "https://github.com/Aadhi6374/image/blob/main/pinnn.png?raw=true",
amazon: "https://www.amazon.com/dp/B0F1TJRS7F?tag=aadhithyan637-20"
},

{
id: 13,
name: "“Stop Buying Cheap Bottles 😳💧 Owala FreeSip 24oz – Sip or Chug, Stays Cold ALL Day!”",
price: 59,
rating: 4.7,
reviews: 116169,
description: "Tired of warm water ruining your day? Upgrade to a bottle that keeps your drinks cold for hours and gives you the flexibility to sip or chug anytime. Designed for convenience and style, it’s perfect for gym, travel, or daily use. No leaks, no hassle—just refreshing hydration whenever you need it. Once you try it, you’ll never go back to cheap bottles again.",
features: [
"Dual sip & chug design",
"Keeps drinks cold all day",
"Leak-proof lid",
"Portable and stylish",
"Easy to carry"
],
ingredients: [
"Stainless steel body",
"Insulated inner layer",
"BPA-free lid",
"Durable seal system"
],
image: "https://github.com/Aadhi6374/image/blob/main/bottle.png?raw=true",
amazon: "https://www.amazon.com/dp/B0C59C39PV?tag=aadhithyan637-20"
},

{
id: 14,
name: "Mini Inkjet Coding Machine for Packaging | Portable QR & Logo Printer",
price: 59,
rating: 4.5,
reviews: 1,
description: "Take your packaging to the next level with this portable inkjet printer. Print QR codes, logos, dates, and more directly onto surfaces with ease. Perfect for small businesses, labeling, and branding, it saves time and boosts professionalism. Compact and easy to use, it helps you create clean, high-quality prints anywhere without complicated setup.",
features: [
"Portable printing",
"Print QR codes & logos",
"Easy operation",
"Multi-surface printing",
"Compact design"
],
ingredients: [
"Inkjet cartridge system",
"Rechargeable battery",
"Digital control panel",
"Durable outer body"
],
image: "https://github.com/Aadhi6374/image/blob/main/printer1.png?raw=true",
amazon: "https://www.amazon.com/dp/B0CJ7F22M9?tag=aadhithyan637-20"
},

{
id: 15,
name: "Aquasonic Black Series Electric Toothbrush (ADA Accepted)",
price: 59,
rating: 4.6,
reviews: 134109,
description: "Upgrade your oral care routine with a powerful electric toothbrush that delivers deep cleaning and healthier gums. Designed for daily use, it removes plaque effectively and improves overall dental hygiene. With multiple modes and a sleek design, it feels like a professional clean every day—without visiting the dentist.",
features: [
"Deep cleaning technology",
"Multiple brushing modes",
"Long battery life",
"ADA accepted",
"Sleek design"
],
ingredients: [
"Sonic motor",
"Rechargeable battery",
"Soft bristle head",
"Water-resistant body"
],
image: "https://github.com/Aadhi6374/image/blob/main/brush.png?raw=true",
amazon: "https://www.amazon.com/dp/B072YVWBXH?tag=aadhithyan637-20"
},

{
id: 16,
name: "Hawaiian Tropic Mineral Powder Sunscreen Brush SPF 30 | Matte Oil Control Travel Sunscreen for Face & Makeup",
price: 59,
rating: 4.2,
reviews: 6350,
description: "Stay protected anywhere with this easy-to-use mineral powder sunscreen. It gives your skin SPF protection while controlling oil and shine, making it perfect for daily use and travel. No mess, no greasy feeling—just smooth, matte skin with quick application anytime you need it.",
features: [
"SPF 30 protection",
"Oil control formula",
"Portable brush design",
"Mess-free application",
"Travel friendly"
],
ingredients: [
"Mineral UV filters",
"Oil-absorbing powder",
"Skin-friendly formula",
"Soft brush applicator"
],
image: "https://github.com/Aadhi6374/image/blob/main/sunscreen.png?raw=true",
amazon: "https://www.amazon.com/dp/B09GXF7KVD?tag=aadhithyan637-20"
},

{
id: 17,
name: "Puttisu Kids Sun Cushion SPF50 PA+++ | Safe Mineral Sunscreen for Kids | UVB & UVA Protection | Easy Cushion Application",
price: 59,
rating: 4.3,
reviews: 40,
description: "Protect your child’s delicate skin with this gentle SPF50+ sunscreen designed specifically for kids. The cushion format makes application quick, mess-free, and fun. It provides strong UV protection while being safe for sensitive skin, ensuring your child stays protected and comfortable all day.",
features: [
"SPF50+ protection",
"Safe for kids",
"Easy cushion application",
"Mess-free use",
"UVB & UVA protection"
],
ingredients: [
"Mineral sunscreen agents",
"Gentle skin formula",
"Soft cushion applicator",
"Non-irritating base"
],
image: "https://github.com/Aadhi6374/image/blob/main/amaz.png?raw=true",
amazon: "https://www.amazon.com/dp/B079DVTX5Z?tag=aadhithyan637-20"
},

{
id: 18,
name: "Tinted Sunscreen SPF 50 That Replaces Foundation 😳 | No Makeup Look for Glowing Skin",
price: 59,
rating: 4.4,
reviews: 3170,
description: "Simplify your routine with this tinted sunscreen that protects and enhances your skin at the same time. It evens out your tone, adds a natural glow, and replaces heavy foundation. Lightweight and breathable, it gives you a fresh look every day while protecting your skin from sun damage.",
features: [
"SPF 50 protection",
"Natural glowing finish",
"Lightweight formula",
"Replaces foundation",
"Daily use friendly"
],
ingredients: [
"UV filters",
"Skin-tone pigments",
"Hydrating base",
"Non-comedogenic formula"
],
image: "https://github.com/Aadhi6374/image/blob/main/1.png?raw=true",
amazon: "https://www.amazon.com/dp/B0CLVM67FV?tag=aadhithyan637-20"
},

{
id: 19,
name: "Stay Powered Anywhere While Traveling 🔋 | Best Power Bank for Camping, Emergency & Outdoor Use (Fast Charging + Wireless)",
price: 59,
rating: 4.3,
reviews: 45784,
description: "Never run out of power when you need it most. This portable charger keeps your devices charged during travel, emergencies, or outdoor trips. With fast charging and wireless support, it’s built for convenience and reliability, ensuring you stay connected anytime, anywhere.",
features: [
"Fast charging",
"Wireless support",
"Portable design",
"Outdoor ready",
"Reliable backup"
],
ingredients: [
"Lithium battery",
"Charging chipset",
"Solar support unit",
"Durable casing"
],
image: "https://github.com/Aadhi6374/image/blob/main/power%20bank.png?raw=true",
amazon: "https://www.amazon.com/dp/B07FDXDB3W?tag=aadhithyan637-20"
},

{
id: 20,
name: "SPF 50 Sunscreen That Doesn’t Feel Greasy ✨ No White Cast | Lightweight Glowing Skin Sunscreen",
price: 59,
rating: 4.3,
reviews: 281,
description: "Say goodbye to sticky, greasy sunscreen and enjoy a lightweight formula that blends easily into your skin. It provides strong SPF protection without leaving a white cast, giving you a natural glow. Perfect for daily use, hot weather, and outdoor activities.",
features: [
"SPF 50 protection",
"Lightweight texture",
"No white cast",
"Non-greasy feel",
"Daily use"
],
ingredients: [
"UV filters",
"Hydrating agents",
"Lightweight base",
"Skin-friendly formula"
],
image: "https://github.com/Aadhi6374/image/blob/main/mermid%20sunscreen1.png?raw=true",
amazon: "https://www.amazon.com/dp/B09QFW9RF3?tag=aadhithyan637-20"
},

{
id: 21,
name: "Best Anti Frizz Hair Spray for Humidity | Get Smooth Glass Hair at Home",
price: 59,
rating: 4.3,
reviews: 107492,
description: "Struggling with frizzy hair in humid weather? This anti-frizz spray helps you achieve smooth, shiny hair that lasts all day. It protects against moisture, reduces flyaways, and gives salon-like results at home. Perfect for daily styling and long-lasting shine.",
features: [
"Anti-frizz control",
"Humidity protection",
"Shiny finish",
"Lightweight formula",
"Long-lasting effect"
],
ingredients: [
"Hair smoothing agents",
"Protective polymers",
"Light conditioning formula",
"Non-greasy base"
],
image: "https://github.com/Aadhi6374/image/blob/main/huminity%20hair.png?raw=true",
amazon: "https://www.amazon.com/Color-Dream-Supernatural-Spray-Unisex/dp/B07FJ783ZG?tag=aadhithyan637-20"
},

{
id: 22,
name: "The Ordinary Glycolic Acid 7% Exfoliating Toner, Brightening and Smoothing Daily Toner for More Even-Looking Skin Tone",
price: 59,
rating: 4.7,
reviews: 47533,
description: "Reveal brighter, smoother skin with this glycolic acid toner. It gently removes dead skin cells, improves texture, and enhances your natural glow. Perfect for regular skincare routines, it helps you achieve a clearer and more even complexion over time.",
features: [
"Exfoliating formula",
"Improves skin texture",
"Brightens complexion",
"Easy application",
"Visible results"
],
ingredients: [
"Glycolic acid",
"AHA solution",
"Skin conditioning agents",
"pH-balanced base"
],
image: "https://github.com/Aadhi6374/image/blob/main/producttt.png?raw=true",
amazon: "https://www.amazon.com/Ordinary-Exfoliating-Brightening-Smoothing-Even-Looking/dp/B0DMTDN158?tag=aadhithyan637-20"
},

{
id: 23,
name: "Flower Pillow Pink Throw Pillow Cute Daisy Decorative Pillow 15.75, Home Decorative Pillows for Bed, Sofa, Couch",
price: 59,
rating: 4.5,
reviews: 1437,
description: "Add comfort and aesthetic style to your space with this cute flower pillow. Soft, plush, and eye-catching, it enhances your room decor while providing cozy support. Perfect for beds, sofas, or gifting, it instantly makes your space feel warm and inviting.",
features: [
"Soft plush feel",
"Cute aesthetic design",
"Comfort support",
"Lightweight",
"Perfect decor"
],
ingredients: [
"Soft fabric",
"Cotton filling",
"Durable stitching",
"Skin-friendly material"
],
image: "https://github.com/Aadhi6374/image/blob/main/pillow.png?raw=true",
amazon: "https://www.amazon.com/dp/B09P9N1Z5R?_encoding=UTF8&th=1&tag=aadhithyan637-20"
},

{
id: 24,
name: "COOFANDY Men's 2 Pieces Cotton Linen Set Henley Shirt Long Sleeve and Casual Beach Pants Summer Yoga Outfits",
price: 59,
rating: 4.1,
reviews: 3485,
description: "Looking for a stylish and comfortable summer outfit for men? This cotton linen 2-piece set is breathable, lightweight, and perfect for beach days, vacations, and casual wear. Available in multiple colors and all sizes, it offers a relaxed fit with effortless style. Ideal for summer fashion, travel outfits, and everyday comfort. Save this pin for your wardrobe upgrade.",
features: [
"Ultra-soft breathable fabric",
"Lightweight summer comfort",
"Relaxed fit for all-day ease",
"Stylish Henley V-neck design",
"Adjustable drawstring waist",
"Perfect for beach, travel & casual wear"
],
ingredients: [
"98% cotton, 2% polyester fabric",
"Soft skin-friendly material",
"Breathable linen blend",
"Durable stitching construction",
"Elastic waistband with drawstring",
"Machine washable fabric"
],
image: "https://github.com/Aadhi6374/image/blob/main/Men%20shirts.png?raw=true",
amazon: "https://www.amazon.com/COOFANDY-Pieces-Cotton-Sleepwear-Pajamas/dp/B089Q385G5?crid=1VJ964IBUAMAS&dib=eyJ2IjoiMSJ9.bkzOLvpGixYc3JDV9GyTFhRk4KzIwnvJYXvZCcBVEsHEatOgnzYTmtGQiCC7g0ztNANStJsjJ6PbNpazCahmQNQtNMZLgmwwIX_UzsCfNA0kyDPeRXbXgMyNBu-Ua6-Ac5VA0yV0yGMSz0gg5232qowjiCnH-Jf099KQvpFn1n3EvoPPLoyJUpnUjGqPwY6Z-LwA5oqBBwPg3dY3y23On9JQjyApk9Uocno6TG1oPwl00EI8Asvp6TpZ2c7F2UF1cOZwilOHyvFhgOS5etK_STnUPDKLS3B_BlFB3Lu8sho.eFxlxwBPfw9b5BzXouXcvHRACueWbHHa7eYHZTwqCn8&dib_tag=se&keywords=COOFANDY%2BMen%27s%2B2%2BPieces%2BCotton%2BLinen%2BSet%2BHenley%2BShirt%2BLong%2BSleeve%2Band%2BCasual%2BBeach%2BPants%2BSummer%2BYoga%2BOutfits&nsdOptOutParam=true&qid=1776691935&sprefix=coofandy%2Bmen%27s%2B2%2Bpieces%2Bcotton%2Blinen%2Bset%2Bhenley%2Bshirt%2Blong%2Bsleeve%2Band%2Bcasual%2Bbeach%2Bpants%2Bsummer%2Byoga%2Boutfits%2Caps%2C566&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&psc=1&linkCode=ll2&tag=aadhithyan637-20&linkId=f1878a13a99dbcb1cf11c6d184a39bb3&language=en_US&ref_=as_li_ss_tl"
},

{
id: 25,
name: "medicube Toner Pads Zero Pore Pad 2.0 | Dual-Textured Facial Pad for Exfoliation and Pore Care with 4.5% AHA Lactic Acid, 0.45% BHA Salicylic Acid | Ideal for All, Korean Skin Care, 70 Pads (1 Pack)",
price: 59,
rating: 4.6,
reviews: 21703,
description: "Tired of visible pores, oily skin, and stubborn blackheads?The Medicube Zero Pore Pad 2.0 is a powerful Korean skincare solution designed to exfoliate, tone, and refine your skin in one simple step.Formulated with AHA (Lactic Acid) and BHA (Salicylic Acid), these dual-textured pads gently remove dead skin cells, unclog pores, and control excess sebum—revealing smoother, clearer, and healthier-looking skin.Whether you're dealing with acne, rough texture, or enlarged pores, this product helps you achieve a clean, glass-skin finish with consistent use.",
features: [
"Dual-textured pads for exfoliation and soothing care",
"Gently removes dead skin cells for smoother skin",
"Unclogs pores and reduces blackheads effectively",
"Controls excess oil (sebum) for a fresh look",
"Helps minimize the appearance of enlarged pores",
"Easy swipe-on toner pad for quick skincare routine"
],
ingredients: [
"AHA (Lactic Acid) for gentle surface exfoliation",
"BHA (Salicylic Acid) to deeply clean pores",
"Citric Acid to brighten and refine skin texture",
"White Willow Bark extract (natural BHA)",
"Lavender extract for calming and soothing effect",
"Sodium Hyaluronate for hydration",
"Panthenol & Allantoin for skin barrier support",
"Skin-friendly formulation suitable for regular use"
],
image: "https://github.com/Aadhi6374/image/blob/main/more%20acid%20beauty%20product.png?raw=true",
amazon: "https://www.amazon.com/dp/B09V7Z4TJG?th=1&linkCode=ll2&tag=aadhithyan637-20&linkId=57b50d176127816bca2d7d68bc7089c4&language=en_US&ref_=as_li_ss_tl"
}




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
