// ================= PRODUCT DATA =================

const products = [

{
id: 1,
name: "Amazon Echo Dot (Latest Model) Smart Speaker with Alexa | Rich Sound | Compact Design for Home, Bedroom & Office | Glacier White",
amazon: "https://www.amazon.com/dp/B09B94RL1R?tag=aadhithyan637-20",
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
image: "https://github.com/Aadhi6374/image/blob/main/amazon%20echot%20dot.png?raw=true"

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
materials: [
"LED projection system",
"Cooling fan technology",
"Durable casing"
],
image: "https://github.com/Aadhi6374/image/blob/main/projector.jpg?raw=true",
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
materials: [
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
materials: [
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
materials: [
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
materials: [
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
materials: ["Lithium battery","Charging chipset","Protective casing"],
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
materials: ["Durable body","Quiet motor","Safe materials"],
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
materials: [
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
materials: [
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
materials: [
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
materials: [
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
materials: [
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
materials: [
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
materials: [
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
materials: [
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
materials: [
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
materials: [
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
},

{
id: 26,
name: "Mighty Patch Original Patch from Hero Cosmetics - #1 Hydrocolloid Acne Pimple Patches for Face, Shrinking Zits & Whiteheads in 1 Use, Nighttime Spot Pimple Stickers for Face, 36 Count",
price: 59,
rating: 4.6,
reviews: 182872,
description: "Struggling with sudden pimples or whiteheads? ✨These hydrocolloid acne patches help absorb pimple gunk overnight, reduce redness, and give you clearer skin by morning!",
features: [
"Hydrocolloid technology that absorbs pimple gunk effectively",
"Reduces whiteheads and active acne overnight",
"Visible results in as little as 6 hours",
"Invisible and ultra-thin design for day & night use",
"Protects skin from picking and external bacteria",
"Gentle, non-drying formula suitable for sensitive skin",
"Strong adhesion that stays in place while you sleep",
"Easy peel-and-stick application for quick treatment"
],
ingredients: [
"Hydrocolloid dressing to absorb pus, oil, and impurities",
"Cellulose gum for moisture absorption and healing support",
"Pectin to form a protective gel barrier on acne",
"Polyisobutene for flexible and secure adhesion",
"Non-medicated formula (drug-free and safe for regular use)",
"Latex-free material to prevent skin irritation",
"Vegan-friendly ingredients with no animal-derived components",
"Skin-safe adhesive suitable for sensitive skin types"
],
image: "https://github.com/Aadhi6374/image/blob/main/pimples.png?raw=true",
amazon: "https://www.amazon.com/dp/B074PVTPBW?th=1&linkCode=ll2&tag=aadhithyan637-20&linkId=26b16516fe984160f971d57b991733bd&language=en_US&ref_=as_li_ss_tl"
},

{
id: 27,
name: "Cocorrína Reed Diffuser Set, Clean Linen 6.7 fl oz Scented Diffuser with Sticks Home Fragrance Reed Diffuser for Bathroom Shelf Decor",
price: 59,
rating: 4.4,
reviews: 3909,
description: "Transform your living space into a calm, refreshing sanctuary with the Cocorrína Reed Diffuser. Infused with a clean linen fragrance blended with delicate floral notes, this elegant diffuser delivers a continuous, long-lasting scent that uplifts your mood and enhances your environment. Designed with premium-quality reeds and a stylish glass bottle, it not only fills your room with freshness but also adds a touch of modern luxury to your décor. Perfect for homes, offices, bedrooms, and bathrooms, this diffuser creates a welcoming atmosphere effortlessly—no flames, no electricity, just pure relaxation.",
features: [
"Long-lasting fragrance that keeps your space fresh for up to 90 days",
"Clean linen scent blended with soft floral notes for a calming atmosphere",
"Adjustable aroma intensity by adding or removing reed sticks",
"Flame-free and safe alternative to candles and sprays",
"Elegant glass bottle design that enhances home décor",
"Continuous scent diffusion without electricity or heat",
"Perfect for any room including bedroom, bathroom, office, and living space",
"Ideal gift option for birthdays, housewarmings, and special occasions"
],
ingredients: [
"Premium fragrance oils for a clean, fresh, and long-lasting scent",
"Essential oil blend with floral and linen-inspired notes",
"Alcohol-based solvent for effective scent diffusion",
"Natural rattan reed sticks for consistent fragrance release",
"Non-toxic formula safe for everyday indoor use",
"Low-evaporation base for extended fragrance life",
"IFRA-compliant fragrance ingredients for safety standards",
"Free from harsh chemicals and heavy smoke residue"
],
image: "https://github.com/Aadhi6374/image/blob/main/stick%20home%20frangrance.png?raw=true",
amazon: "https://www.amazon.com/Cocorr%C3%ADna-Diffuser-Fragrance-Essential-Bathroom/dp/B0B24QJ217?crid=SKK53A2UD7MO&dib=eyJ2IjoiMSJ9.V-Utlk2p0VtenakG4Xv7GHXzQknu9Dse5G_lR7AoqI1YkZPV1mWZU62biB47-2yRxEMUYHiWQwy0eED10kD1dDoi33nVzdnOlhCFVwOQPCaAoZsTbjkCiasG5BbsZdDfTiGchhI_Ls2Vy3K4Ezrz0EoOrU7Hc8chNN1gzXBPJL3Frw63_SvtBDYYnkVYzhNUChXs5zpkZIEoUZEsTPRuAtx3o7_rwodaqd4IM1yaRnXr3gRcKgGTLgo40I4ByPcSl5joNQZmnmDyWYqK1gDqxyexrs2J1FFDcfeNZyK5o4s.lJnuUlBgA5oshwe3nWQOE156ZaoHFiNlAeuo-vpYXME&dib_tag=se&keywords=home%2Bdecor%2Bliving%2Broom%2Bmore%2Brating&qid=1777127168&refinements=p_36%3A-3500&rnid=386465011&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=home%2Bdecor%2Bliving%2Broom%2Bmore%2Brating%2Caps%2C416&sr=8-4-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&linkCode=ll2&tag=aadhithyan637-20&linkId=ca9762ae8a193dbd3bba07e1142a012e&language=en_US&ref_=as_li_ss_tl"
},

{
id: 28,
name: "Clean Skin Club Clean Towels XL®, 100% USDA Biobased Face Towel, Disposable Face Towelette, Eczema Association Accepted, Makeup Remover Dry Wipes, Ultra Soft, 1 Pack, 50 Ct",
price: 59,
rating: 4.8,
reviews: 43121,
description: "Upgrade your skincare routine with Clean Towels—the hygienic alternative to traditional face towels. Designed to reduce acne-causing bacteria, these ultra-soft, disposable face towels provide a fresh, clean surface every time you cleanse your skin. Unlike regular towels that trap dirt and germs, Clean Towels help protect your skin, leaving it clearer, healthier, and irritation-free.Made with eco-friendly, biodegradable materials, these towels are gentle enough for sensitive skin while being strong and durable for everyday use. Perfect for makeup removal, face drying, and daily skincare routines, they offer a convenient, travel-friendly solution for maintaining clean and healthy skin wherever you go.Switch to a smarter, cleaner skincare habit—because your skin deserves better than reused towels.",
features: [
"Single-use face towels that prevent bacteria buildup from regular towels",
"Helps reduce acne, irritation, and redness for clearer, healthier skin",
"Dermatologist tested and approved for safe daily skincare use",
"Ultra-soft and gentle texture suitable for all skin types including sensitive skin",
"Made with advanced cellulose fiber technology to support skin barrier health",
"Strong, durable, and lint-free material for effective face drying and cleansing",
"Perfect for makeup removal, skincare routines, and daily face care",
"Travel-friendly and hygienic solution for on-the-go skincare"
],

image: "https://github.com/Aadhi6374/image/blob/main/new%20towels.png?raw=true",
amazon: "https://www.amazon.com/Clean-Skin-Club-Disposable-Sensitive/dp/B07PBXXNCY?crid=2M2XYE16S7138&keywords=trending%2Bproduct%2Bwith%2Bhigh%2Brating&qid=1777201342&rdc=1&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=trending%2Bproduct%2Bwith%2Bhigh%2Brating%2Caps%2C742&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&linkCode=ll2&tag=aadhithyan637-20&linkId=7d6cb3f62cd78e8a7dfb615e452ead43&language=en_US&ref_=as_li_ss_tl"
},

{
id: 29,
name: "OLANLY Area Rugs for Living Room Bedroom, Machine Washable 4x5.9 ft Soft Fluffy Shaggy Bedside Rug, Indoor Floor Carpet for Kids Girls and Boys, Dorms, Nursery Rooms, Home Decor Aesthetic, Grey",
price: 59,
rating: 4.4,
reviews: 9487,
description: "Transform your space instantly with the OLANLY Area Rug, designed to bring warmth, comfort, and modern style to any room. Crafted with ultra-soft high-density fibers, this plush shaggy rug delivers a luxurious underfoot feel while enhancing your home décor effortlessly.Perfect for bedrooms, living rooms, nurseries, and dorms, this rug combines style, comfort, and practicality. Its non-slip backing ensures safety on all floor types, while the machine-washable design makes maintenance simple and stress-free.Whether you're upgrading your home or creating a cozy vibe, this rug is the perfect blend of function and aesthetic appeal.",
features: [
"Ultra-soft shaggy texture that provides a cozy and luxurious feel underfoot",
"High-density plush fibers designed for maximum comfort and warmth",
"Non-slip backing with anti-slip PVC dots for enhanced floor grip and safety",
"Machine washable design for easy cleaning and long-term maintenance",
"Kid and pet friendly material that is gentle, safe, and durable",
"No shedding fibers to maintain a clean and neat appearance over time",
"Versatile design suitable for bedroom, living room, nursery, and dorm spaces",
"Lightweight yet durable construction for everyday home use"
],
materials: [
"Surface made from 100% polyester for a soft and fluffy texture",
"Middle layer with high-density sponge for added cushioning and comfort",
"Backing made with PVC anti-slip dots to prevent sliding",
"Eco-friendly fabric safe for kids and pets",
"Durable tufted weave construction for long-lasting use",
"Breathable material that maintains softness over time",
"Lightweight yet strong fiber composition for easy handling",
"Non-shedding fabric designed for a clean and tidy look"
],
image: "https://github.com/Aadhi6374/image/blob/main/baby%20soft%20towels.jpg?raw=true",
amazon: "https://www.amazon.com/OLANLY-Bedroom-Machine-Washable-Aesthetic/dp/B0DF37Z63N?crid=3Q2QGVFK2O1TK&dib=eyJ2IjoiMSJ9.dlxviZ3evuyOX9UfTcuzIi93o0X7jEe12rRPv1M2LC4JqgzA0FuZRPuIpMHm4P8hfi5cpRU7KwpJ_-qIuQQWcahYrWzCUAwo-tiwc9eD8Es4merxsEbqcAGn0NFsQZmDSqV9a21g12Q0pKmNa-FYVAvY9GieuwqhKf5i82_gvAcpsibChidf1s5g_lkrfmXl-ZZae3iEIErmzPyTJZkuguUU1oMKGvDNL-mM0u-xbWLLYdw6nbOcj96YyhSYK5dCiQyqHhvFmSn4jBrvaNOTag59nrn5-TtprIGd4RXYTMM.KVJofuy4gxwavNPYvOqqSE1eBxTlPI6xFdvAvK4aSgY&dib_tag=se&keywords=dorms%2Brugs&qid=1777356048&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=dorms%2Brug%2Caps%2C505&sr=8-6&th=1&linkCode=ll2&tag=aadhithyan637-20&linkId=2241e7757774cf16eb451b38265f827f&language=en_US&ref_=as_li_ss_tl"
},

{
id: 30,
name: "Premium Vegetable Chopper and Mandoline Slicer - Food Chopper and Spiralizer with Container, Julienne Slicer, Fruit Slicer, Veggie Cutter, Kitchen Gadgets & Gift for Mom (14 in 1, Steel)",
price: 59,
rating: 4.5,
reviews: 128163,
description: "Upgrade your kitchen experience with the versatile and time-saving 14-in-1 Vegetable Chopper & Mandoline Slicer from Fullstar. Designed for modern cooking, this all-in-one kitchen tool simplifies meal preparation by allowing you to chop, slice, dice, julienne, and spiralize with precision and ease.Built with high-quality stainless steel blades, this chopper delivers consistent, uniform cuts in seconds—saving you valuable time in the kitchen. Whether you're preparing fresh salads, slicing fruits, or creating low-carb veggie noodles, this tool ensures efficiency without compromising safety.The large-capacity container reduces mess while keeping your workspace clean, and its ergonomic, non-slip design offers maximum stability during use. Easy to assemble, compact to store, and dishwasher safe, this is the perfect everyday kitchen companion for beginners and experienced cooks alike.Ideal as a thoughtful gift for moms, home chefs, or anyone who loves cooking smarter—not harder.",
features:
[
"14-in-1 multifunctional tool for chopping, slicing, dicing, and spiralizing",
"Sharp stainless steel blades for fast, uniform cutting",
"Large built-in container to reduce mess and save time",
"Non-slip base and ergonomic handle for safe use",
"Compact design for easy storage in any kitchen",
"Dishwasher-safe parts for quick cleaning",
"Durable and rust-resistant for long-term use",
"Ideal for vegetables, fruits, cheese, and more"
],
materials:[
"Blades made from high-quality stainless steel for sharpness and durability",
"Body made with BPA-free food-grade plastic",
"Non-slip rubber base for added stability",
"Soft-grip handle with TPU material for comfort",
"Durable plastic container for food collection",
"Rust-resistant components for long-lasting performance",
"Food-safe and eco-friendly materials",
"Lightweight yet sturdy construction for daily use"
],
image: "https://github.com/Aadhi6374/image/blob/main/vegetables%20cutter.png?raw=true",
amazon: "https://www.amazon.com/Vegetable-Chopper-Spiralizer-Slicer-Choppers/dp/B0DNZRSCMS?pf_rd_p=718c1da1-42c4-4685-8bb2-fe64d1f8eb6e&pf_rd_r=SEPGRYYX61GJC8407NHM&sr=1-4-1c57df5f-ed25-4473-b6f8-01ef03749560&th=1&linkCode=ll2&tag=aadhithyan637-20&linkId=d3ffe9250d673948c61820b1cbe01cb7&language=en_US&ref_=as_li_ss_tl"
},

{
id: 31,
name: "Scalloped Multipurpose Hyacinth Storage Basket, Plant Décor, Handwoven Organizer Tote for Bedroom, Living Room, Nursey, w/Lid - Chestnut",
price: 59,
rating: 5.0,
reviews: 53,
description: "Upgrade your space with this beautifully handwoven water hyacinth basket. Designed with a stylish scalloped edge and a functional lid, it keeps clutter hidden while adding a warm, natural touch to any room. Strong, spacious, and eco-friendly — perfect for organizing blankets, toys, laundry, or everyday essentials.",
features:
[
"Decorative scalloped edge for a stylish, elevated look",
"Multipurpose storage for blankets, toys, laundry, and essentials",
"Lidded design to keep clutter hidden and organized",
"Sturdy metal-reinforced frame maintains shape",
"Spacious interior for everyday storage needs",
"Lightweight and easy to move around",
"Perfect for bedroom, living room, nursery, or entryway",
"Handwoven craftsmanship adds unique texture and charm"
],

materials:[
"Made from 100% natural water hyacinth",
"Handwoven design for durability and uniqueness",
"Metal-reinforced frame for added strength",
"Eco-friendly and sustainable material",
"Non-toxic and safe for home use",
"Natural fibers with breathable structure",
"Durable construction for long-term use",
"Earthy finish with slight natural variations"
],
image: "https://github.com/Aadhi6374/image/blob/main/home%20deccor.png?raw=true",
amazon: "https://www.amazon.com/Best-Choice-Products-Scalloped-Multipurpose/dp/B0G4SXD85S?pf_rd_p=58d0d07c-19a2-48bf-b106-f08b769f96ba&pf_rd_r=RATD1VZERV7N3D3ECF53&sr=1-1-6d81af39-5812-404c-adc3-70f9fbd0894a&th=1&linkCode=ll2&tag=aadhithyan637-20&linkId=3ff23d95689eb71d85643371e4693c9f&language=en_US&ref_=as_li_ss_tl"
},

{
id: 32,
name: "FUTIMELY Boho Retro Stackable Rings Sets for Women Knuckle Joint Finger Knuckle Nail Ring Sets Moon Stars Stack Preppy Statement Rings Cute Trendy Stuff Jewelry",
price: 59,
rating: 4.0,
reviews: 6534,
description: "Elevate your everyday style with this stunning boho retro stackable rings set designed for women and teen girls who love trendy, aesthetic jewelry. Featuring delicate moon, star, and minimalist designs, these rings can be mixed, matched, and stacked to create your own unique look for any occasion. Whether you're dressing up for a casual day out or adding a touch of charm to your outfit, these lightweight and adjustable rings offer both comfort and versatility. Perfect as a thoughtful gift or a stylish addition to your jewelry collection, this set brings a modern, fashionable vibe inspired by Pinterest trends.",
features:
[
"Adjustable ring sizes to fit different fingers comfortably",
"Multiple styles including moon, star, and minimalist designs",
"Perfect for stacking, layering, or wearing individually",
"Lightweight and comfortable for all-day wear",
"Trendy boho aesthetic inspired by Pinterest fashion",
"Suitable for daily wear, parties, and special occasions",
"Versatile use as knuckle rings, midi rings, or statement rings",
"Ideal gift choice for women, teens, and girls"
],

materials:[
"Made from high-quality alloy material",
"Gold and silver plated finish for a stylish look",
"Lead-free and nickel-free for skin safety",
"Highly polished surface for a smooth feel",
"Durable construction for long-lasting use",
"Fade-resistant coating to maintain shine",
"Skin-friendly material suitable for daily wear",
"Lightweight metal design for comfort"
],
image: "https://github.com/Aadhi6374/image/blob/main/ring%20for%20women.png?raw=true",
amazon: "https://www.amazon.com/FUTIMELY-Stackable-Rhinestone-Knuckle-Kunckle/dp/B0CP5N9KL5?crid=2B3ROHN1K88NA&dib=eyJ2IjoiMSJ9.7E806oqp-Mh2HUeJqsW_4OWpY9t_SuoCYyVa9WFcIK7cgWpuDLJ3s_d_fcPudMKYDzRCgHK8Psa4Ia--xV2Hzavn7mKDyo6s61siFp2jqW92NGrxguMcvk9d9lg6MkazBeBYP0c8eS4USwZLvBU1ceXS0uDVm2IwKM2p289QuS1R7EiADfIurJxls2RDTbIblC3qpST8Dw8zOad3eqmuur7G5-7otpjcUdSMPKgWFiKHBT-aNlau_hqkoEx-dwUBaBltLzroEsk_msjHFxZ5k3ZOouza3M3xRUAvvBaWmYA.LXMb0I44dDFjDVc5i2otLQCToSuEbzZOE4B8WJJLvtY&dib_tag=se&keywords=knuckle%2Brings%2Bfor%2Bwomen%2Bin%2Bhigh%2Brating&qid=1777957370&sprefix=knuckle%2Brings%2Bfor%2Bwomen%2Bin%2Bhigh%2Brating%2Caps%2C490&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&linkCode=ll2&tag=aadhithyan637-20&linkId=a86d36e588006230cee4c786ff24fc2c&language=en_US&ref_=as_li_ss_tl"
},

{
id: 33,
name: "Der Rose 4 Pack Black Bathroom Decor Fake Plants Mini Artificial Greenery Potted Plants for Halloween Decor Indoor Office Table Room Farmhouse Decor",
price: 59,
rating: 4.6,
reviews: 8290,
description: "Upgrade your space instantly with the Der Rose black faux eucalyptus plant set, designed to bring a modern and aesthetic touch to any room. These realistic artificial plants offer the perfect balance of style and convenience, making them ideal for home, office, or bathroom decor. With no watering or maintenance required, they stay fresh all year round. Their compact size fits perfectly on desks, shelves, or tables, while the adjustable leaves allow you to customize the look for a fuller appearance. A perfect choice for minimal, gothic, or contemporary interiors.",
features: [
"Realistic eucalyptus leaves look natural",
"Set of 4 mini plants for decor styling",
"Perfect size for desk and small spaces",
"No watering or maintenance required",
"Modern black pot suits any interiors",
"Adjustable leaves for fuller appearance",
"Ideal for home office bathroom decor",
"Lightweight design easy to move around"
],

materials: [
"Made with high quality durable plastic",
"Non toxic material safe for daily use",
"Fade resistant finish for long lasting",
"Sturdy base pot for stable placement",
"Eco friendly plastic build lightweight",
"Smooth texture with realistic detailing",
"Weather resistant indoor decor material",
"Strong construction prevents easy damage"
],
image: "https://github.com/Aadhi6374/image/blob/main/Plant%20decor.png?raw=true",
amazon: "https://www.amazon.com/Rose-Artificial-Greenery-Bathroom-Farmhouse/dp/B0F4KHZS6T?crid=2H25XSQFDOD5K&dib=eyJ2IjoiMSJ9.6GLOIPn5Q5mwM9iohc-GTVshr4M4eiqHgY8mVggUapm_FAKS7yFjriD6OTj4ZdKnu7wQQGfQGvHAAsDNjlmXCVOcGXsSReW-jsTFuDfPiwzC6U64K_p4714Uamvm9rV2Opls2EVDkAIfh6d49kj_C1eYWKWE7u7oqymC8C6UXPt7TUunF3Bvvl4eumeh4hklWsP4b4mhZMmqGpLHx1wf1I5Ob3UlQOVa7vU5pPb7IkkieSS8XlnvcZllj_5lzOjkULjRfcbAv048ecFuH8AMWlnlcsAkPyQik_u-BWk6edU.9bOQlj1xyJwfbD2fF021TIZrdwxrsRf-tDO2fTx8OHQ&dib_tag=se&keywords=fake%2Bplants%2Bindoor%2Brealistic%2Bsmall&qid=1778074876&sprefix=fake%2Bplants%2Bindoor%2Brealistic%2Bsmall%2Caps%2C480&sr=8-7&th=1&linkCode=ll2&tag=aadhithyan637-20&linkId=cf71e0267384b99e70f28d44e61cb070&language=en_US&ref_=as_li_ss_tl"
},

{
id: 34,
name: "ASAKUKI Essential Oil Diffuser for Home, 500ML Aromatherapy Diffuser Humidifier with Remote Control, 7 Color LED Lights, Quiet Cool Mist Diffuser for Bedroom, Office, Gift for Mom (Yellow)",
price: 59,
rating: 4.4,
reviews: 70306,
description: "Transform your home into a relaxing and cozy space with the ASAKUKI 500ML Aromatherapy Diffuser. Designed with a modern wood-grain finish and soft LED lighting, this stylish diffuser adds both comfort and elegance to any bedroom, office, or living room. It releases a cool, soothing mist that helps create a calm atmosphere while supporting relaxation and stress relief. With whisper-quiet operation, multiple timer settings, remote control convenience, and 7 color-changing LED lights, it’s perfect for daily self-care, better sleep, yoga sessions, or creating a peaceful home vibe. Its large 500ML capacity provides long-lasting fragrance and moisture without frequent refills, making it a practical and aesthetic addition to any space.",
features: [
"500ML tank supports long mist runtime",
"7 LED colors create cozy room vibes",
"Ultra quiet fan for peaceful relaxing",
"Remote control works from long distance",
"Multiple mist modes for custom comfort",
"Auto shut off prevents overheating risk",
"Perfect for bedroom office yoga spaces",
"Modern design suits aesthetic interiors"
],

materials: [
"Made with durable premium PP material",
"BPA free build safe for daily use",
"ABS plastic body for strong durability",
"Smooth finish with modern wood design",
"High quality ultrasonic mist technology",
"Heat resistant material for safe usage",
"Lightweight build easy to place around",
"Strong construction for long term use"
],
image: "https://github.com/Aadhi6374/image/blob/main/Humidifier%20trendding.png?raw=true",
amazon: "https://www.amazon.com/ASAKUKI-Essential-Ultrasonic-Aromatherapy-Humidifier/dp/B01MR4Y0CZ?crid=2WAYZGIL5H136&dib=eyJ2IjoiMSJ9.5PyweMsrY_e9GHJi310DBv0Tdskk3dRmpRy5lJZuir-krK6CNUGXdCsmb9y9BYgcoW6m8mLoh4_-EqUiedUjXy5Qj1EqSOVZIpr1Dst_OzMzC6g7EVHp2LyAt0r5e89AyZH6p7-2Y2rm8REqnAXGa7Qzu5vexoPi6wz2G4mA6Soohzb74_13NFgHNmnC2KqTy0huUUD0-j89gKLaUrz62fo4YTOV47L15SgHu5eiZc74IfeR0V5wGlfIi3P0YBbG_zHkytbJP9LuGVG8SLfFJp5JK9DMzJzsv4VNdiQJzVg.boiW3OFqxdH7F9pfUj__endsC0HF_DRMFls5XyjBnq4&dib_tag=se&keywords=Safety%2B1st%2BFilter%2BFree%2BCool%2BMist%2BHumidifier%2C%2BPink%2C%2BPink&nsdOptOutParam=true&qid=1778161835&sprefix=safety%2B1st%2Bfilter%2Bfree%2Bcool%2Bmist%2Bhumidifier%2C%2Bpink%2C%2Bpink%2Caps%2C530&sr=8-3-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&linkCode=ll2&tag=aadhithyan637-20&linkId=cbce4b969c77b3572f793fa5b593b6d3&language=en_US&ref_=as_li_ss_tl"
},

{
id: 35,
name: "PAVOI 14K Gold Plated Solid 925 Sterling Silver CZ Simulated Diamond Stackable Ring Eternity Bands for Women",
price: 59,
rating: 4.4,
reviews: 27535,
description: "Elegant 14K gold plated stackable ring with sparkling CZ stones perfect for everyday luxury and minimalist jewelry lovers.",
features: [
"1.8mm thin band perfect for ring stacking",
"14K gold plated over 925 sterling silver",
"AAAAA cubic zirconia stones sparkle brightly",
"Hypoallergenic safe for sensitive skin",
"Lightweight design comfortable for daily wear",
"Available in sizes 4 through 10",
"Elegant minimalist style matches every outfit",
"Perfect for weddings gifts and everyday fashion"
],

materials: [
"Made with premium 925 sterling silver",
"Finished with durable 14K gold plating",
"High quality AAAAA cubic zirconia stones",
"Nickel free lead free cadmium free",
"Skin friendly hypoallergenic materials used",
"Polished smooth finish for luxury feel",
"Strong durable build for long term wear",
"Crafted with recycled sustainable materials"
],
image: "https://github.com/Aadhi6374/image/blob/main/Ring%20for%20woman%201.png?raw=true",
amazon: "https://www.amazon.com/PAVOI-Yellow-Zirconia-Stackable-Eternity/dp/B01MFF1DEY?crid=3T8Y2P3J242YF&dib=eyJ2IjoiMSJ9.E_eoiWuPERtO6vraw-HegVCRywjvujiqxTAd5xDeiELfxleBb4FK-qVFx031KZkuWRstmW_FCY8_2PNDVXGJ0dLUm5lTHfwiaaoKabQOi3P-eFHI0mLYDidCgcPQi-JDSRLLDf6bxqWNYhn3Shj5VzfLqZlB5BwBMopMMP73SxkfjnzBqQbBT6MyvfSHiJ6aggDJQZxGN31wEjXBeDE46DRtGW64sA5LbPtceiGLCBmdbkQ4fSBkX-e8zsMQmlL8m6clQTY5zG-0rA4BLx9q9NSd0ekQZ4s4sKeZsQLvvAI.bxtYAQco2cs_PHMHtyhKJotDzCWI-iX8mGvYlEEaIJI&dib_tag=se&keywords=knuckle%2Brings%2Bfor%2Bwomen&qid=1778252619&sprefix=knuc%2Caps%2C558&sr=8-3-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&psc=1&linkCode=ll2&tag=aadhithyan637-20&linkId=7d82c91e20ca71e35176af0bacb963c7&language=en_US&ref_=as_li_ss_tl"
},

{
id: 36,
name: "32GB FRAMEO 10.1 Inch Smart WiFi Digital Photo Frame 1280x800 IPS LCD Touch Screen, Auto-Rotate Portrait and Landscape, Built in 32GB Memory, Share Moments Instantly via Frameo App from Anywhere",
price: 59,
rating: 4.5,
reviews: 10258,
description: "A beautiful smart digital photo frame that keeps families connected through memories. Instantly send photos and short videos from anywhere using the Frameo app. Perfect for Mother’s Day, birthdays, weddings, and long-distance loved ones. A heartfelt gift that brings smiles every single day.",
features: [
"10.1 inch IPS HD touch screen display",
"Instantly share photos and videos via Frameo app",
"32GB built in memory stores thousands of memories",
"Auto rotate supports portrait and landscape mode",
"WiFi connected for sharing from anywhere",
"Easy setup perfect for all ages",
"Display weather clock and custom captions",
"Perfect gift for moms family and loved ones"
],

materials: [
"Premium IPS LCD touch screen display",
"Durable black modern frame design",
"High resolution 1280 x 800 display",
"Built with user friendly touch controls",
"Compatible with iOS and Android devices",
"Secure private photo sharing technology",
"Strong stable detachable frame stand",
"Designed for long lasting everyday use"
],
image: "https://github.com/Aadhi6374/image/blob/main/Digital%20Photo%20frame.png?raw=true",
amazon: "https://www.amazon.com/Akimart-Digital-Auto-Rotate-Anywhere-Android/dp/B083SH697H?crid=3IOXQ4NFWCB03&dib=eyJ2IjoiMSJ9.RwPuA70uL1ZQJ-nFYqyoDysekWLiQJ8h1HfV1ym-9W_rkiD_yY0cnHD-k959bL-bwp8Ya5m3CH3tD7FhDwNZycGZJwbiWdh1u8idZxNMXOA9OsC-sd9BeNVJhq2gmYJbjfVxlaSUTedtZH55I1xEulCtKDEzc_D15eaVb76IDRy_uTz_w7jGTvzFskXb8J1u1Yp0Rq2gv7_J6e2T0X5QGT3W4pTx0ez7ExXy3gFMio2mhe_qQRvWMa3TTCAfEOZ-3B7VjM0x-fp7DEl3ITg4xmowDiwB6VZk4Kf0fj6rEFs.N20t2aSEmOKWNUQ6RbzYn0EBFsrkMHd4eamSJf1-fGw&dib_tag=se&keywords=Personalized%2Bphoto%2Bgifts&qid=1778339692&sprefix=personalized%2Bphoto%2Bgifts%2Caps%2C500&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&linkCode=ll2&tag=aadhithyan637-20&linkId=edd6e4f33b7e2d608e6be24ceed08f3c&language=en_US&ref_=as_li_ss_tl"
},

{
id: 36,
name: "32GB FRAMEO 10.1 Inch Smart WiFi Digital Photo Frame 1280x800 IPS LCD Touch Screen, Auto-Rotate Portrait and Landscape, Built in 32GB Memory, Share Moments Instantly via Frameo App from Anywhere",
price: 59,
rating: 4.5,
reviews: 10258,
description: "A beautiful smart digital photo frame that keeps families connected through memories. Instantly send photos and short videos from anywhere using the Frameo app. Perfect for Mother’s Day, birthdays, weddings, and long-distance loved ones. A heartfelt gift that brings smiles every single day.",
features: [
"10.1 inch IPS HD touch screen display",
"Instantly share photos and videos via Frameo app",
"32GB built in memory stores thousands of memories",
"Auto rotate supports portrait and landscape mode",
"WiFi connected for sharing from anywhere",
"Easy setup perfect for all ages",
"Display weather clock and custom captions",
"Perfect gift for moms family and loved ones"
],

materials: [
"Premium IPS LCD touch screen display",
"Durable black modern frame design",
"High resolution 1280 x 800 display",
"Built with user friendly touch controls",
"Compatible with iOS and Android devices",
"Secure private photo sharing technology",
"Strong stable detachable frame stand",
"Designed for long lasting everyday use"
],
image: "https://github.com/Aadhi6374/image/blob/main/Digital%20Photo%20frame.png?raw=true",
amazon: "https://www.amazon.com/Akimart-Digital-Auto-Rotate-Anywhere-Android/dp/B083SH697H?crid=3IOXQ4NFWCB03&dib=eyJ2IjoiMSJ9.RwPuA70uL1ZQJ-nFYqyoDysekWLiQJ8h1HfV1ym-9W_rkiD_yY0cnHD-k959bL-bwp8Ya5m3CH3tD7FhDwNZycGZJwbiWdh1u8idZxNMXOA9OsC-sd9BeNVJhq2gmYJbjfVxlaSUTedtZH55I1xEulCtKDEzc_D15eaVb76IDRy_uTz_w7jGTvzFskXb8J1u1Yp0Rq2gv7_J6e2T0X5QGT3W4pTx0ez7ExXy3gFMio2mhe_qQRvWMa3TTCAfEOZ-3B7VjM0x-fp7DEl3ITg4xmowDiwB6VZk4Kf0fj6rEFs.N20t2aSEmOKWNUQ6RbzYn0EBFsrkMHd4eamSJf1-fGw&dib_tag=se&keywords=Personalized%2Bphoto%2Bgifts&qid=1778339692&sprefix=personalized%2Bphoto%2Bgifts%2Caps%2C500&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&linkCode=ll2&tag=aadhithyan637-20&linkId=edd6e4f33b7e2d608e6be24ceed08f3c&language=en_US&ref_=as_li_ss_tl"
},

{
id: 37,
name: "Glamnetic Press On Nails - MaDamn | French Tip UV Finish Short Pointed Almond Fake Nails, Salon Quality Semi-Transparent Nails in 12 Sizes - 24 Nail Kit with Glue",
price: 59,
rating: 4.1,
reviews: 12833,
description: "Experience salon-quality nails at home with the Glamnetic Ma Damn Press-On Nails. Designed with a trendy short almond shape and elegant semi-transparent French tip finish, these reusable gel nails deliver a luxurious professional look in minutes. The durable full-cover design offers comfortable wear, long-lasting hold, and effortless application, making them perfect for everyday glam, special occasions, prom nights, weddings, and modern beauty lovers who want stylish nails without expensive salon visits.",
features: [
"Salon quality semi-transparent French tip finish",
"Short almond shape for elegant modern style",
"Quick easy at-home application in minutes",
"Durable gel press-on nails with comfortable fit",
"Long-lasting wear resistant to chipping",
"Reusable design for multiple wears",
"Includes 24 nails in 12 inclusive sizes",
"Perfect for prom weddings parties and daily glam"
],

materials: [
"Premium quality reusable gel press-on nails",
"Glossy semi-transparent French tip coating",
"Durable lightweight full-cover nail design",
"Comfortable flexible almond-shaped tips",
"High-shine salon-inspired finish",
"Strong adhesive compatible nail surface",
"Designed for smooth secure application",
"Made for long-lasting everyday beauty wear"
],
image: "https://github.com/Aadhi6374/image/blob/main/Prom%20nails.png?raw=true",
amazon: "https://www.amazon.com/Glamnetic-Press-Nails-Reusable-Semi-Transparent/dp/B099FK66CL?crid=3OCPUXFA2KPC7&dib=eyJ2IjoiMSJ9.rLxvfaLHrgrtvFWe9qM_SA7fZtMjuvBC5LBjMmLdE6fBYI4aQvgrQ7vsiVosXTRXJSBEcR7hkWLebPCZUlT7rPUkWzDhotIvWkCvMvAdS9ttDydexY9lZeL14AkWZT3qKoMAfkdlp4q5vnkCK9RMQG9K3iGP3brA8RvF1Vw48HO2k8MbAWq7as0LESZbSw1m-alXNr37ipkSaERU_dRtFfO02_2mCblOtfJAcsUY5bMyWoot_du4meTTqvB7dpTHPz7V0GvdBSsa8D_c3CSO3YF-4rt415SOwSBLI4hzWqo.nyRuiJv_K1lX1fa02CQFDVSiJsXw6BNM0YHiBUs3XJc&dib_tag=se&keywords=Glam%2B%26%2BReusable%2BPress-On%2BNails&qid=1778410585&sprefix=glam%2B%26%2Breusable%2Bpress-on%2Bnails%2Caps%2C508&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&linkCode=ll2&tag=aadhithyan637-20&linkId=e9944c11999721971abc3f73f494b7df&language=en_US&ref_=as_li_ss_tl"
},

{
id: 38,
name: "Beetles 44pcs Gel Nail Polish Set - 36 Colors Colorful Muse Gel Polish Kit Pink Nude Red Yellow Green Black White Glitter Nail Kit Base Top Coat UV LED Needed Salon DIY Home Gift for Women",
price: 59,
rating: 4.5,
reviews: 27114,
description: "Bring salon-quality nail art home with the colorful and trending beetles 44pcs Gel Nail Polish Set. This viral gel nail kit includes 36 vibrant shades with glossy, matte, and glitter finishes perfect for creating endless nail designs. Designed for beginners and nail lovers, the long-lasting UV gel formula delivers a smooth, high-shine manicure that stays beautiful for weeks. Perfect for DIY nail art, seasonal looks, gifts, and everyday glam.",
features: [
"36 vibrant gel nail polish colors for endless nail art styles",
"Includes glossy matte and holographic glitter top coats",
"Long-lasting salon-quality gel formula up to 28+ days",
"Highly pigmented colors with smooth easy application",
"Perfect for DIY nail designs at home or salon use",
"Includes nail file buffer clipper and cuticle stick tools",
"Works with UV LED nail lamps for durable glossy results",
"Great gift idea for women nail lovers and beauty enthusiasts"
],

materials: [
"Premium soak-off UV LED gel nail polish formula",
"High-pigment colorful gel polish collection",
"Glossy matte and holographic glitter top coat formulas",
"Durable chip-resistant salon-quality finish",
"Smooth self-leveling gel consistency for easy application",
"Low-odor nail gel designed for comfortable use",
"Long-lasting shine with professional-quality wear",
"Includes manicure accessories for complete nail care setup"
],
image: "https://github.com/Aadhi6374/image/blob/main/colour%20ful%20nails.png?raw=true",
amazon: "https://www.amazon.com/Beetles-Color-Gel-Nail-Polish/dp/B0CGZBNB24?content-id=amzn1.sym.ba6f9003-79bb-4913-9b6a-a21346304dcb%3Aamzn1.sym.ba6f9003-79bb-4913-9b6a-a21346304dcb&crid=R7RYZ5FDZAH9&cv_ct_cx=colourful%2Bnail%2Bdesign&keywords=colourful%2Bnail%2Bdesign&pd_rd_i=B0CGZBNB24&pd_rd_r=6d581638-b270-4a05-b3be-bd289a2ea510&pd_rd_w=jNrBt&pd_rd_wg=UZel8&pf_rd_p=ba6f9003-79bb-4913-9b6a-a21346304dcb&pf_rd_r=6NVCQ8EHE5AQC3AZGFZX&qid=1778514205&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=colourful%2Bnail%2Bdesign%2Caps%2C411&sr=1-4-2c727eeb-987f-452f-86bd-c2978cc9d8b9-spons&aref=wfvIdwlJc5&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM&th=1&linkCode=ll2&tag=aadhithyan637-20&linkId=7f11d063968fe939eb7c7421c5a1c4a3&language=en_US&ref_=as_li_ss_tl"
},

{
id: 39,
name: "Beetles Cat Eye Gel Nail Polish Set, 6 Colors Fairy Garden Pastel Spring Shimmer Glitter Gel Polish Kit Pink Red Blue Orange Green Purple Velvet Gel Soak Off UV Magnet Nail Art DIY Gift for Women",
price: 59,
rating: 4.5,
reviews: 20164,
description: "Beetles Fairy Garden Cat Eye Gel Nail Polish Set features 6 dreamy pastel shimmer shades with a stunning velvet cat eye effect for salon-quality nails at home. This magnetic gel polish collection includes pink, red, blue, orange, green, and purple shades designed to create elegant glossy nail art for every season. The long-lasting chip-resistant formula delivers up to 28+ days of shine when cured with a UV/LED lamp. Perfect for beginners and nail lovers, the included magnetic tool helps create dazzling cat eye designs with ease. Ideal for DIY manicures, special occasions, and beauty gifts for women who love trendy nail art styles.",
features: [
"6 pastel cat eye gel nail polish colors with velvet shimmer effect",
"Magnetic cat eye formula creates unique dazzling nail art styles",
"Long-lasting chip-resistant wear up to 28+ days with glossy shine",
"Includes pink red blue orange green and purple pastel shades",
"Highly pigmented smooth gel formula for easy even application",
"Works with UV LED nail lamps for durable salon-quality results",
"Perfect for DIY nail art home manicure and professional salon use",
"Elegant beauty gift set for women nail lovers and special occasions"
],

materials: [
"Premium soak-off UV LED gel nail polish formula",
"Magnetic shimmer pigments for velvet cat eye effects",
"High-pigment pastel color gel polish collection",
"Glossy long-lasting chip-resistant salon-quality finish",
"Smooth self-leveling gel consistency for effortless application",
"Durable flexible gel formula with strong nail adhesion",
"Professional-quality shimmer glitter nail polish pigments",
"Compact portable nail polish bottles perfect for travel and gifting"
],
image: "https://github.com/Aadhi6374/image/blob/main/nails%20neww.png?raw=true",
amazon: "https://www.amazon.com/beetles-Gel-Polish-Beetles-nailpolish/dp/B0D2LFLL98?crid=JK9RNI9RWVUA&dib=eyJ2IjoiMSJ9.qWduQaYJJ_ZzMunqEOngmaMuCAmlqvaHicyx4B5tlPiXX-ZbM9ODVW44J5Znw2oyoD9_KAXSarOJ9Fl4IBhZU9X8Hn1ya7--JiKk946JD8WtiyNZc2HRbqxPgTGOMnRsrEhee4Rt0l45edejMLAiavehnZxEdAd4H86ywnKthbN41YX2AmyN3AaLKGjz1_SBRKMMsmXEuXEpLM2pOTSVHQuyjJWjnOIQ1VmeOiudqAZYn7NZq7sDgAkXEwzvzBHfcHSX4DwQI6Eom7i_Obeu0Qffwj_dNOeHlBJepZEKY1o.KO2VFUS98evhRJPM6e6JiAL5kmCz3CMIR_JiA9xFi3Q&dib_tag=se&keywords=cat%2Beye%2Bnail&qid=1778597960&refinements=p_36%3A-2000&rnid=386662011&s=beauty&sprefix=cat%2Beye%2Bnail%2Cbeauty%2C510&sr=1-3-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&linkCode=ll2&tag=aadhithyan637-20&linkId=db77e0d53b91d2b6c7feb5a94d68e319&language=en_US&ref_=as_li_ss_tl"
},

{
id: 40,
name: "UNA GELLA Almond Nail Tips 216pcs Medium Almond Press on Nails Pre-shape Gel Fake Nails for Full Cover Acrylic French False Nails For Nail Extension, DIY Salon 12 Sizes Gelly Tips",
price: 59,
rating: 4.4,
reviews: 24373,
description: "UNA GELLA Almond Nail Tips are designed to create salon-quality gel x nail extensions at home with a professional natural finish. This set includes 216 pre-shaped medium almond press on nail tips in 12 sizes for easy customized fitting. The clear full cover gelly tips are lightweight, durable, and flexible, making them perfect for colorful nail designs, acrylic nail looks, French manicures, and trendy DIY salon nails. Ideal for beginners and nail lovers, these nail extension tips work perfectly with gel polish, cat eye nails, chrome nails, and modern Pinterest-inspired nail art styles.",
features: [
"216 pre-shaped medium almond nail tips for salon-quality nail extensions",
"Includes 12 different sizes for comfortable custom nail fitting",
"Clear full cover gelly tips perfect for gel x and acrylic nail designs",
"Lightweight flexible nail tips designed for natural comfortable wear",
"Strong durable press on nail tips resistant to cracking and breaking",
"Perfect for colorful nail art French manicure and trendy almond nails",
"Easy application suitable for DIY home manicure and professional salons",
"Works perfectly with gel polish chrome cat eye and glitter nail designs"
],

materials: [
"Premium soft gel full cover nail tip material",
"Clear lightweight flexible gelly nail extension tips",
"Durable break-resistant press on nail structure",
"Smooth pre-shaped almond nail tip design",
"Professional salon-quality nail extension material",
"Natural-looking transparent nail tips for custom nail art",
"Easy-to-file and easy-to-paint gel nail surface",
"Long-lasting reusable nail tips for DIY manicure applications"
],
image: "https://github.com/Aadhi6374/image/blob/main/una%20gella%20product.png?raw=true",
amazon: "https://www.amazon.com/UNA-GELLA-Pre-Shape-Acrylic-Extension/dp/B0916DV6VH?crid=2VHE88QWJ0HLP&dib=eyJ2IjoiMSJ9.FCWM6bagHQ7cdKVr3wFgIbw9xwhmMF0k1wY-Ze5jiPCvdFDd80vBz8XXRSe3uhgo4XM9JlRbljIKKZLS8oEpOglJCeM2tO0mWdzdJnTRtwBOFdaipdlDkXwszJ6CMkjaORXSLXylVP_SugTtTQrjM71ATWGWi3Jm3pT9SsnSY6WJUWiT2QjEJwDHO2PSIOpllrx8URkjhDdmLVkrxqyOUltP8SBRsLPAFZekFRwryUqSe3kAQXZuFfvDYYWgtdzJ3PNytsKaOE79gSRM737-7PH1T0kjmIdh5NU1V6PwmPw.8M65V3NWSEtGwRVmjV9PyIIMdPWRUW1-xP0AZZzLi5s&dib_tag=se&keywords=different%2Bcoloured%2Bnails&qid=1778646938&s=beauty&sprefix=different%2Bcoloured%2Bnails%2Cbeauty%2C503&sr=1-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&linkCode=ll2&tag=aadhithyan637-20&linkId=38fda357df95eaca146f681d793dd2ff&language=en_US&ref_=as_li_ss_tl"
},

{
id: 41,
name: "SplashEZ 3-in-1 Splash Pad, Sprinkler for Kids & Baby Pool for Learning – Toddler Sprinkler Pool, 60’’ Outside Water Toys – “from A to Z” Outdoor Play Mat for Babies & Toddlers",
price: 59,
rating: 4.4,
reviews: 28516,
description: "Bring home endless summer fun with the SplashEZ 3-in-1 Splash Pad for Kids & Toddlers — the perfect outdoor water toy that combines learning, play, and cooling fun in one exciting splash pool. Designed with colorful alphabet and animal learning graphics, this educational splash pad helps toddlers learn while they play under refreshing sprinkler fountains. Made with BPA-free, non-slip, child-safe materials, SplashEZ creates safe backyard adventures for babies, toddlers, kids, and even pets. Perfect for summer outdoor activities, toddler learning games, backyard water parties, and family fun.",
features: [
"Educational splash pad with colorful alphabet and animal learning design",
"Refreshing sprinkler fountain keeps toddlers cool during hot summer days",
"Extra large splash play area perfect for babies toddlers kids and pets",
"Non-slip shallow water surface designed for safe outdoor water play",
"BPA and phthalate free splash pad safe for children 12 months and older",
"Learning through play concept encourages early childhood development",
"Easy backyard setup connects quickly to standard garden water hose",
"Perfect summer outdoor toy for family activities water games and parties"
],

materials: [
"Premium BPA-free child-safe splash pad material",
"Durable heavy-duty PVC outdoor water play construction",
"Soft non-slip splash surface for safe toddler activities",
"Leak-resistant reinforced sprinkler edge design",
"Eco-friendly phthalate-free kiddie pool material",
"Flexible foldable portable backyard splash pad structure",
"Water-resistant outdoor durable printed learning mat surface",
"Long-lasting weather-resistant summer sprinkler pool material"
],
image: "https://github.com/Aadhi6374/image/blob/main/summer%20pool.png?raw=true",
amazon: "https://www.amazon.com/SplashEZ-Sprinkler-Splash-Wading-Learning/dp/B07MNMT3M7?dib=eyJ2IjoiMSJ9.fE8vMBLps3WIoqu-7x2UaR13GT36wqXFS1ejVkyZK6n6NX-35-Bnc9mhXwzzZlOYlEqduU4tyNzHIgzpldb2ApOWybiSf97XFKxhQ7seEYzgPYHhdN0jHOUAo7Y_TMzks0HjuUr6DejRThpzZv22vKrkGagFYxgCi2KgIMzzzxKFXiF4sxrBSbWTfhLLDcTsJ1FGtGynlPer8n9YUFm9SZ3pqlfQ3Dbn1DAhKoeoZaArAyU7krM5OHd_9FXW0u5OTFnUrQW0CAqlWGu3Fn83JhUDLun-P58xKUjXkMgvEQg.8kd1JCx_dTA1vCCUjU6uJLN_BTSHhyddDQvO_cK_3vQ&dib_tag=se&keywords=wengty%2Bsplash%2Bpad&qid=1778680218&sr=8-7&th=1&linkCode=ll2&tag=aadhithyan637-20&linkId=940724541f199ff40db3e8ff85a2b604&language=en_US&ref_=as_li_ss_tl"
},

{
id: 42,
name: "Hydro Flask Water Bottle - Insulated Stainless Steel - Wide Straw Lid, Non Spill, Leakproof in 40 Oz Wide Mouth Flex Straw Cap Seacliff",
price: 59,
rating: 4.8,
reviews: 32096,
description: "Stay hydrated in style with the Hydro Flask 40 Oz Wide Mouth Water Bottle with Flex Straw Cap — the perfect insulated stainless steel bottle designed for all-day cold refreshment and leakproof portability. Featuring TempShield double-wall vacuum insulation, this durable Hydro Flask keeps drinks ice cold for hours while maintaining a sleek modern design. The wide mouth opening with flexible straw lid offers easy sipping and quick filling, making it perfect for gym workouts, office use, outdoor adventures, travel, hiking, and everyday hydration. Built with premium BPA-free stainless steel and a non-slip powder-coated finish, this reusable water bottle combines durability, convenience, and stylish performance.",
features: [
"TempShield double-wall vacuum insulation keeps drinks cold for hours",
"Wide mouth flex straw cap designed for easy sipping and quick hydration",
"Leakproof and non-spill lid perfect for travel gym and outdoor activities",
"Large 40 oz capacity ideal for all-day hydration and active lifestyles",
"Premium stainless steel construction resists flavor transfer and odors",
"Durable powder-coated exterior provides a secure non-slip grip",
"BPA-free reusable water bottle safe for everyday drinking use",
"Perfect for hiking camping office workouts road trips and daily hydration"
],
materials: [
"Premium 18/8 pro-grade stainless steel bottle construction",
"Double-wall vacuum insulated TempShield technology interior",
"Durable powder-coated sweat-free exterior finish",
"BPA-free food-grade reusable water bottle materials",
"Leak-resistant flexible straw cap sealing components",
"Wide mouth stainless steel hydration bottle structure",
"Rust-resistant odor-resistant premium metal construction",
"Eco-friendly reusable insulated drinkware material"
],
image: "https://github.com/Aadhi6374/image/blob/main/bottleee.png?raw=true",
amazon: "https://www.amazon.com/Hydro-Flask-Water-Bottle-Insulated/dp/B0D8K4GQN5?crid=UPKQR8NZH38V&dib=eyJ2IjoiMSJ9.dTV0ObA149SgmUF5UH_v-CnkB3ZMS-VrsmJ2keZL_D3dySMkjXQbMNW34j36m-kxQ3vZgn-wGoluWb813l5AB9EGfVyEhlBxduuXCQnq4yuOXtEdajGluiW_A4ulVoJrRJggoKAjVqy7ekHW292W7ao5vIVV0Xn0zKCr_ufuTEPTVMlAm3wCIPI-pWWUxhQP0sxZIrLGHfq5ieth2tJd8JoukizxMKH765pAkmoNVmnXVDVO3dXkp2PHDFITBWcAY_vbWcN8Mf6i33rkhzNsnYNBPPbBDjFgNiNzllXG3KI.MaMoLK2bme4HTW90bNWa_wUKnyVrD_5UvyBCePg7ue0&dib_tag=se&keywords=Hydro%2BFlask%2BWater%2BBottle%2B-%2BInsulated%2BStainless%2BSteel%2B-%2BWide%2BStraw%2BLid%2C%2BNon%2BSpill%2C%2BLeakproof%2Bin%2B40%2BOz%2BWide%2BMouth%2BFlex%2BStraw%2BCap%2BSeacliff&nsdOptOutParam=true&qid=1778856057&sprefix=hydro%2Bflask%2Bwater%2Bbottle%2B-%2Binsulated%2Bstainless%2Bsteel%2B-%2Bwide%2Bstraw%2Blid%2C%2Bnon%2Bspill%2C%2Bleakproof%2Bin%2B40%2Boz%2Bwide%2Bmouth%2Bflex%2Bstraw%2Bcap%2Bseacliff%2Caps%2C685&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&linkCode=ll2&tag=aadhithyan637-20&linkId=ad660e4033f3257c32393d19a50efba9&language=en_US&ref_=as_li_ss_tl"
},

{
id: 43,
name: "MIYCOO Lunch Bag Lunch Box Women - Leakproof Insulated Lunch Cooler Bag for Women - Large Lunch Tote Bags Adults, Purple",
price: 59,
rating: 4.7,
reviews: 4471,
description: "Stylish insulated lunch tote bag designed for women who want a fashionable and practical solution for carrying meals to work travel gym or outdoor activities. The leakproof multi-compartment design keeps food fresh organized and easy to carry throughout the day.",
features: [
"Triple insulated lunch bag keeps food cold warm and fresh for hours",
"Leakproof waterproof interior lining prevents spills and easy mess cleanup",
"Large 18L capacity fits lunch boxes drinks fruits snacks and utensils",
"Multiple compartments help organize meals bottles phone and accessories",
"Premium nylon exterior resists scratches dirt and light rain exposure",
"Lightweight reusable lunch tote perfect for office travel gym and picnics",
"Adjustable shoulder strap offers handbag shoulder bag and tote carrying styles",
"Stylish purple aesthetic design ideal for women work and everyday use"
],
materials: [
"Premium durable nylon exterior fabric construction",
"Waterproof leakproof EVA insulated interior lining",
"Thick pearl cotton thermal insulation padding",
"Scratch-resistant and water-resistant outer material",
"Food-safe reusable lunch storage interior materials",
"Reinforced carry handles with durable stitching support",
"High-quality zipper and metal hardware components",
"Lightweight insulated multi-layer lunch tote structure"
],
image: "https://github.com/Aadhi6374/image/blob/main/hand%20bagg.png?raw=true",
amazon: "https://www.amazon.com/MIYCOO-Lunch-Bag-Box-Women/dp/B0C2YW1TCK?dib=eyJ2IjoiMSJ9.ZcOXDP90XPdocqF2XIa8coz8yD7_LbRc-Nzav_lirBMOwOXPjxaPLkxME6Z-J3WLBLqacQ2CKwkecnHiCdXvDq-LUL4UQy_qSGsl6zmzIm3oyRuD0-XxcEjwXxq53f4jJpNmKvxbCoh5pqgQjdhlFwzIv15MNgwAcTGwgsi_Vcdtt1t50lRnKYvsPXRSBcsZwMjseFL72GoKdaTcvC0muJhYXf_sGuc4wZR3XRmSV5nloaVb81YoTi-ABfiDnC24TC51URgtftLHbcN7fPUGDiBZFhURdeM62tWZJwYs5tw.dulCemXkuYmnqTjqO-LcJzueWo_CCBPU1K3pgPtjRro&dib_tag=se&keywords=stylish%2Blunch%2Bbags%2Bfor%2Bwomen%2Bhigh%2Brating&qid=1778909488&sr=8-8&th=1&linkCode=ll2&tag=aadhithyan637-20&linkId=eeae6bd180cb914ef20fe98c4d67531f&language=en_US&ref_=as_li_ss_tl"
},

{
id: 44,
name: "HydroJug Traveler - 40 oz Water Bottle with Handle & Flip Straw - Fits in Cup Holder, Leak Resistant Tumbler-Reusable Insulated Stainless Steel & Rubber Base - Gifts for Women & Men, Cream",
price: 59,
rating: 4.6,
reviews: 19130,
description: "Elegant 40 oz insulated tumbler designed for women who want a stylish and functional hydration companion for work gym travel office car rides and everyday routines. The leak-resistant HydroJug Traveler keeps drinks cold or hot for hours while offering a modern cream aesthetic that fits perfectly into an active lifestyle.",
features: [
"Triple-wall vacuum insulation keeps drinks cold for 24 hours and hot for 12 hours",
"Leak-resistant flip straw lid helps prevent spills during travel and daily use",
"Large 40 oz capacity supports all-day hydration with fewer refills needed",
"Cup holder friendly tapered base fits most car cup holders easily",
"Comfort-grip ergonomic handle provides easy carrying throughout the day",
"Premium stainless steel construction offers long-lasting durability and performance",
"Dishwasher safe tumbler and detachable straw allow effortless cleaning",
"Stylish cream aesthetic design perfect for women office gym and lifestyle content"
],
materials: [
"Premium food-grade stainless steel tumbler body construction",
"Triple-wall vacuum insulated stainless steel interior technology",
"BPA-free reusable plastic flip straw lid components",
"Durable leak-resistant silicone sealing system materials",
"Non-slip protective rubber base for added stability support",
"Scratch-resistant powder-coated cream exterior finish",
"Comfortable ergonomic integrated handle construction",
"Dishwasher-safe reusable hydration tumbler materials"
],
image: "https://github.com/Aadhi6374/image/blob/main/Hydrojug.png?raw=true",
amazon: "https://www.amazon.com/HydroJug-Traveler-Resistant-Tumbler-Reusable-Insulated/dp/B0CQVWW5QK?crid=1SF651KXDFFAX&dib=eyJ2IjoiMSJ9.vfeZtHWq6tbOazQ06aU7-mAvYq719m7_tNfIIOJRuqGwrxb3s-iA4hjdIPvID4I5yI5bM7cOF529cCN-GiEV-wZMZPjn1Dg63KmMKFcN7277MzRsBrnWsxRYG28wbzmzth8AiYpGawn2b5LNnc-pWYyxNKPBerYTss4JX6Bk0AZZu34LskDJiwqT9SXeqc5xOU0pp5YOO2doAEC2IHqyT0gvN4G0NLqrXCF-qldWenE.uOuCN6vAwBpvezS9tXgXAqXlJsQVomCLOclt4uPIt4c&dib_tag=se&keywords=If%2Byou%2Bwant%3A%2Bmost%2Bpeople%E2%80%99s%2Bchoice%2B%E2%86%92%2BStanley%2B40%2Boz%2Bbest%2Bpractical%2Bdaily%2Buse%2B%E2%86%92%2BHydroJug%2B40%2Boz%2BFor%2Baffiliate%2Bmarketing%2Band%2BPinterest%2Bviral%2Bcontent%2C%2Bthe%2B40%2Boz%2BStanley%2Bis%2Bstill%2Bthe%2Bstrongest%2Bchoice%2Bright%2Bnow.%2BHydraJug%2BHydroJug%2BTraveler%2B40%2Boz%2BWater%2BBottle&nsdOptOutParam=true&qid=1779015456&sprefix=if%2Byou%2Bwant%2Bmost%2Bpeople%2Bs%2Bchoice%2Bstanley%2B40%2Boz%2Bbest%2Bpractical%2Bdaily%2Buse%2Bhydrojug%2B40%2Boz%2Bfor%2Baffiliate%2Bmarketing%2Band%2Bpinterest%2Bviral%2Bcontent%2C%2Bthe%2B40%2Boz%2Bstanley%2Bis%2Bstill%2Bthe%2Bstrongest%2Bchoice%2Bright%2Bnow.%2Bhydrajug%2Bhydrojug%2Btraveler%2B40%2Boz%2Bwater%2Bbottle%2Caps%2C398&sr=8-1&th=1&linkCode=ll2&tag=aadhithyan637-20&linkId=af25cb24c0b760501fb98eda25ab7be7&language=en_US&ref_=as_li_ss_tl"
},

{
id: 45,
name: "Govee RGBIC LED Strip Lights 32.8ft with Covers, Smart Lights Work with Alexa and Google Assistant, LED Diffuser Channel with LED Lights for Bedroom, Skirting Lines, Studio, Cabinet",
price: 59,
rating: 4.2,
reviews: 1002,
description: "Transform your space with these viral RGBIC LED strip lights perfect for cozy bedroom decor, aesthetic apartment ideas, smart home lighting, and modern room setups. Create a warm ambient glow with customizable colors, music sync, Alexa voice control, and soft lighting effects. Ideal for Pinterest-inspired home decor, cozy room makeovers, desk setups, studio lighting, and relaxing night vibes.",
features: [
"RGBIC technology delivers multiple vibrant colors simultaneously for dynamic lighting effects",
"60 LEDs per meter create soft uniform and spot-free ambient illumination throughout spaces",
"Smart voice control works seamlessly with Alexa and Google Assistant for hands-free operation",
"Govee Home App allows customization of brightness timers scene modes and color settings",
"50 customizable lighting segments enable personalized multicolor combinations and creative effects",
"64 preset scene modes enhance bedrooms studios gaming rooms and party environments",
"Music sync feature reacts to audio beats creating immersive entertainment lighting experiences",
"LED diffuser channel design provides smooth premium lighting accents for modern interiors",
"Flexible installation supports skirting lines ceilings cabinets walls and corner applications",
"Cuttable LED strip design allows customized lengths for personalized lighting setups",
"Wi-Fi and Bluetooth connectivity offer stable smart control and easy device pairing",
"Modern RGBIC lighting style enhances home decor gaming setups and studio aesthetics"
],
materials: [
"Flexible RGBIC LED strip lighting with integrated smart LED technology",
"Premium LED diffuser channel covers for softer and uniform light distribution",
"Durable adhesive backing designed for smooth clean and dry indoor surfaces",
"High-density 60 LEDs per meter lighting strip construction materials",
"Integrated Wi-Fi and Bluetooth smart connectivity control components",
"AC powered energy-efficient LED lighting system construction",
"Flexible cuttable circuit strip materials for custom installation adjustments",
"Inside and outside corner connector pieces for seamless corner lighting installation"
],
image: "https://github.com/Aadhi6374/image/blob/main/lightt.jpg?raw=true",
amazon: "https://www.amazon.com/Govee-Assistant-Diffuser-Channel-Skirting/dp/B0D736VXNX?crid=1Q0VONO1YQVNU&dib=eyJ2IjoiMSJ9.M7bUWlhuHrHUvdcteCQhTCgHPXFVRpcNsD2mvx8zLTfMFFVwfh19ceuUdVn2w4v7iGbn2DXl1q9nzajHBAbGRjuQeKyiMJWk6wH69B406L3GpygA9J23SQe3IWWaKWGuVD9ctJgoVGYYvyIqLtkOheicsnVP0KY0-KtbtFZ9CXXTD-Eq-N703e_uE4udWstqI_CCaBRJ8CdW4Bcw9v-3En4saPxfUsXNsT5TL6o0VMFkDy1oVxLR2LvVRhqn7M07-aCvyTsWdEwt4zcl0LPGFJ2v-bmCWJ6LlcL2nY_67tg.5p7gz9bDCEsVkXMO_UTjvWEeRNahbO1ZaBuEGh7NQpQ&dib_tag=se&keywords=Govee%2BRGBIC%2BLED%2BStrip%2BLights%2B32.8ft%2Bwith%2BCovers%2C%2BSmart%2BLights%2BWork%2Bwith%2BAlexa%2Band%2BGoogle%2BAssistant%2C%2BLED%2BDiffuser%2BChannel%2Bwith%2BLED%2BLights%2Bfor%2BBedroom%2C%2BSkirting%2BLines%2C%2BStudio%2C%2BCabinet&nsdOptOutParam=true&qid=1779457791&sprefix=govee%2Brgbic%2Bled%2Bstrip%2Blights%2B32.8ft%2Bwith%2Bcovers%2C%2Bsmart%2Blights%2Bwork%2Bwith%2Balexa%2Band%2Bgoogle%2Bassistant%2C%2Bled%2Bdiffuser%2Bchannel%2Bwith%2Bled%2Blights%2Bfor%2Bbedroom%2C%2Bskirting%2Blines%2C%2Bstudio%2C%2Bcabinet%2Caps%2C415&sr=8-1&th=1&linkCode=ll2&tag=aadhithyan637-20&linkId=5a9051c77ce2a67ee53cb59f5c429a94&language=en_US&ref_=as_li_ss_tl"
},

{
id: 46,
name: "Grace & Stella Award Winning Under Eye Mask - Gel Eye Patches for Dark Circles, Puffy Eyes, Undereye Bags - Vegan Self Care (24 Pairs, Gold)",
price: 59,
rating: 4.4,
reviews: 46660,
description:"Refresh tired-looking eyes with these award-winning gold under eye patches designed to reduce puffiness, dark circles, under eye bags, and dryness while delivering a cooling spa-like self-care experience at home. Infused with hydrating and brightening ingredients, these vegan eye masks help smooth the appearance of fine lines and wrinkles while leaving under eyes looking refreshed, awakened, youthful, and radiant. Perfect for morning skincare routines, self-care nights, travel recovery, pre-makeup prep, and beauty gifting for women who love luxurious skincare essentials.",
features: [
"Cooling hydrogel eye patches help reduce puffiness swelling and under eye bags instantly",
"Brightening formula improves the appearance of dark circles and tired under eyes",
"Hydrating under eye masks deeply moisturize dry delicate under eye skin for smoother texture",
"Niacinamide-infused formula helps illuminate dull under eyes and promote radiant skin appearance",
"Helps soften the visibility of fine lines wrinkles and signs of fatigue around the eyes",
"Vegan cruelty-free skincare formula made without parabens sulfates or phthalates",
"Sensitive-skin-friendly ingredients provide gentle soothing care for daily skincare routines",
"Gold eye patch design delivers a luxurious spa-inspired self-care experience at home",
"Perfect for morning depuffing before makeup application and late-night recovery skincare",
"Lightweight gel sheet masks comfortably fit under eyes without slipping during use",
"Popular beauty self-care gift idea for birthdays holidays bridesmaids and wellness gift boxes",
"Travel-friendly skincare patches ideal for flights work stress and tired puffy eyes recovery"
],
materials: [
"Hydrogel sheet mask material designed for cooling soothing under eye application",
"Vegan skincare formulation free from animal-derived ingredients and cruelty testing",
"Paraben-free ingredients formulated for gentler under eye skincare routines",
"Sulfate-free skincare blend suitable for sensitive delicate skin types",
"Phthalate-free beauty formula focused on cleaner skincare experiences",
"Niacinamide-infused essence designed to brighten and refresh dull under eye areas",
"Hydrating serum blend that helps maintain moisture balance and smoother skin texture",
"Soft flexible gel patch construction for comfortable secure under eye placement"
],
image: "https://github.com/Aadhi6374/image/blob/main/Face%20pack.png?raw=true",
amazon: "https://www.amazon.com/Under-Eye-Patches-Gold-24-Pairs/dp/B014E2D6BY?crid=YUFRGDYFZX08&dib=eyJ2IjoiMSJ9.MGOxfQjgdDtxn6tiZGi4hML81gxy4D5Qo2UmT8H2-DGtx2y0b0ehITeupFKj_6E-LKZLkLz29jakXqFIcY5DD6lIVwUFNv2gvLD6tS_GpVCxVLwd71KJhzcdBEgHRMsFoEh1zDJEWSDGp4Cowf8ZzZor8KJet0N3tSG5cN2PYEsPqZ0oSg8aGThr_T79dWkHKhFi1FxSPmEcqG5HAiUtX5ZkKxjHDJf-w5HRzygX1RgeGaZ6I96WPL757ClDvfOKheaZyHZfI2IXLAGaOApTTRZpV-nNFvFcc8sOPla3x9o.CqmIFbfxr-BpMaOCSl5nbBTOZNCHqJWYoyIkJ_ftC3A&dib_tag=se&keywords=premium%2Bbeauty%2Bpicks&qid=1779511788&sprefix=premimum%2Bbeauty%2Bpick%2Caps%2C474&sr=8-5-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&linkCode=ll2&tag=aadhithyan637-20&linkId=d0e59d3c1a270a00297fb6ba0d64bfb8&language=en_US&ref_=as_li_ss_tl"
},

{
id: 47,
name: "CleverMade Tahoe Collapsible Cooler Bag – Medium Portable Foldable Insulated Cooler for Beach, Travel & Road Trips",
price: 59,
rating: 4.5,
reviews: 9523,
description:"Keep drinks, snacks, and food cold for hours with this CleverMade Tahoe Collapsible Cooler Bag designed for beach trips, camping, picnics, tailgates, grocery runs, and outdoor adventures. This leakproof insulated cooler holds up to 30 cans plus ice while remaining lightweight, portable, and easy to carry. Unlike bulky hard coolers, the foldable design collapses nearly flat for compact storage in your trunk, closet, RV, or luggage. Built with durable recycled polyester fabric, reinforced structure, adjustable shoulder strap, and convenient bottle opener, this travel-friendly soft cooler combines cooling performance, portability, and smart storage for everyday outdoor use.",
features: [
"Holds up to 30 cans plus ice making it perfect for beach trips picnics camping and tailgates",
"Collapsible cooler design folds nearly flat in seconds for compact storage after travel",
"Insulated leakproof liner helps keep drinks food and snacks cold for hours outdoors",
"Soft portable cooler bag is lightweight easy to carry and ideal for road trips travel and parks",
"Structured wire frame keeps the cooler upright for easier loading unloading and organization",
"Reinforced base provides extra durability and stability during outdoor activities",
"Durable recycled polyester exterior designed for long-lasting travel and outdoor performance",
"Adjustable shoulder strap offers comfortable hands-free carrying during trips and events",
"Front storage pocket provides space for napkins utensils keys phones and accessories",
"Built-in bottle opener adds convenient functionality for beach camping and tailgate use",
"Compact foldable construction saves storage space in cars closets RVs and luggage",
"Perfect portable cooler solution for family outings grocery runs fishing hiking and travel adventures"
],
materials: [
"Durable recycled polyester fabric exterior designed for outdoor and travel use",
"Leak-resistant PEVA insulated liner helps maintain cold temperatures for extended periods",
"Structured wire frame construction supports upright loading and cooler stability",
"Reinforced base material improves durability while carrying heavy drinks and ice",
"Soft insulated layered padding enhances temperature retention for food and beverages",
"Heavy-duty carry handles designed for comfortable portable transport",
"Adjustable shoulder strap material built for convenient travel carrying support",
"Foldable compact construction engineered for easy flat storage and portability"
],
image: "https://github.com/Aadhi6374/image/blob/main/bagg.png?raw=true",
amazon: "https://www.amazon.com/CleverMade-Collapsible-Folding-Shoulder-Midnight/dp/B0CZSD8HWS?crid=SFESDXOWT6OB&dib=eyJ2IjoiMSJ9.ycRhIvgo3pt0fzvBOejrLHzLOB8GIFl9SaD5AO6grD9Jn2Ew5nj0y4eDWE5RoERPQaHLOuM6Ux_cq7qSyJ0x9uEEjbdbFUtglZefFuN5zy8B2dUqy3Z-z-XfoWnudpHwem8PP1GsGwqt3TSeJCEZuWkunmvtBxOkBVLJ-oea4RxX2D3vxyYYhg5pZjr1jXfYP1ZV_GfKpXCMwIDBNCO4nI2SQyO9B6dwrFsvz9nkErA0I6w7YjrlLaLgDREfQLpN-5ILHEf2tH9KoHY6hIMccmAEtkPy63WMUJ3_GHC7p5o.8-cc8Ru8K5JFkiiuOLSlwytfOWFHacuDYXrupEolXew&dib_tag=se&keywords=4%2BCans%2F3.1qt%2BSoft%2BSided%2BPersonal%2BCooler%2BBlue%2B-%2BSun%2BSquad%E2%84%A2&nsdOptOutParam=true&qid=1779545850&sprefix=4%2Bcans%2F3.1qt%2Bsoft%2Bsided%2Bpersonal%2Bcooler%2Bblue%2B-%2Bsun%2Bsquad%2B%2Caps%2C510&sr=8-11&th=1&linkCode=ll2&tag=aadhithyan637-20&linkId=223e0a88078a8726e0349fa7c1e794db&language=en_US&ref_=as_li_ss_tl"
},

{id: 48,
name: "LAURA GELLER NEW YORK Best of the Best Baked Palette – 7-in-1 Full Face Palette – Bronzer, Blush, 2 Highlighters & 3 Eyeshadows – Crease-Proof, Handmade in Italy – Travel-Friendly",
price: 59,
rating: 4.5,
reviews: 9470,
description:"Create a complete glowing makeup look with the LAURA GELLER NEW YORK Best of the Best Baked Palette featuring bronzer, blush, highlighters, and versatile eyeshadows in one luxury travel-friendly compact. Handmade in Italy using baked makeup technology, this full face palette delivers smooth blendable color with lightweight crease-proof wear that flatters multiple skin tones. Designed for quick everyday glam and effortless beauty routines, the palette combines luminous finishes and natural-looking pigments to help achieve radiant skin, sculpted cheeks, and soft glam eye looks without carrying multiple products.",
features: [
"7-in-1 full face makeup palette includes bronzer blush highlighters and eyeshadows in one compact",
"Handmade baked makeup formula in Italy delivers smooth blendable and lightweight application",
"Travel-friendly palette design fits easily inside handbags makeup bags and luggage for on-the-go beauty",
"Crease-proof long-lasting formula helps maintain fresh makeup looks throughout the day",
"Soft luminous finishes create natural radiant glowing skin with minimal effort",
"Versatile neutral shades work beautifully for everyday makeup and soft glam looks",
"Highly pigmented baked powders blend evenly without looking cakey or heavy on skin",
"Multi-use face palette helps simplify makeup routines and reduce carrying multiple products",
"Suitable for multiple skin tones with buildable shades for customizable coverage and intensity",
"Lightweight silky texture applies smoothly with brushes or fingertips for quick makeup application",
"Perfect all-in-one makeup solution for travel vacations work events and daily beauty routines",
"Luxury rose-gold inspired packaging adds an elegant professional makeup aesthetic"
],
materials: [
"Baked powder makeup formula crafted using traditional Italian baking techniques",
"Mineral-inspired pressed pigments designed for smooth lightweight makeup application",
"Silky blendable powder texture helps create natural-looking radiant finishes",
"Long-wear crease-resistant ingredients support lasting makeup performance throughout the day",
"Finely milled shimmer pigments provide soft luminous highlighting effects",
"Skin-friendly cosmetic powders formulated for comfortable everyday wear",
"Compact mirrored palette packaging designed for portable travel convenience",
"Cruelty-free makeup formulation created without animal testing"
],
image: "https://github.com/Aadhi6374/image/blob/main/beauty%20pack.png?raw=true",
amazon: "https://www.amazon.com/LAURA-GELLER-NEW-YORK-Best/dp/B0BBH8FRYL?content-id=amzn1.sym.0a3d7af1-408b-4d97-8532-5af55b19637b%3Aamzn1.sym.0a3d7af1-408b-4d97-8532-5af55b19637b&crid=W1A9SPA7XOJS&cv_ct_cx=premium+beauty+products+blushers+and+bronzers&keywords=premium+beauty+products+blushers+and+bronzers&pd_rd_i=B0BBH8FRYL&pd_rd_r=07342552-6843-40b4-a5e9-a9e6b55e20db&pd_rd_w=TkGOZ&pd_rd_wg=X5Ogm&pf_rd_p=0a3d7af1-408b-4d97-8532-5af55b19637b&pf_rd_r=RCR6D2P2FWGAAHK16315&qid=1779689668&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=premium+beauty+products+blushers+and+bronzers%2Caps%2C1523&sr=1-3-6e60e730-e094-43e9-99e8-1a4854cd27ff-spons&aref=3m1ImUEHv6&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM&psc=1&linkCode=ll2&tag=aadhithyan637-20&linkId=49299492385ee3baf7bfdd2bac8b59a8&language=en_US&ref_=as_li_ss_tl"
},

{
 id: 49,
name: "MIYCOO Cooler Backpack – 40 Cans Insulated Leakproof Backpack Cooler for Beach Travel Camping Hiking Picnic BBQ",
price: 39,
rating: 4.6,
reviews: 2065,
description: "Stay refreshed during beach trips, camping adventures, road trips, hiking, and outdoor gatherings with the MIYCOO Cooler Backpack featuring a spacious 40-can capacity and dual insulated compartments for organized cold storage. Designed with leakproof insulation technology and comfortable backpack-style portability, this cooler keeps drinks and snacks chilled for hours while allowing hands-free travel convenience. The stylish outdoor design combines functionality and durability with multiple storage pockets, waterproof lining, and ergonomic shoulder straps, making it perfect for beach days, picnics, fishing trips, tailgating, lunch carrying, and summer travel essentials.",
features: [
    "Large 40-can storage capacity provides enough space for drinks snacks fruits and ice packs during outdoor trips",
    "Dual insulated compartments help separate cold beverages from dry foods and delicate items",
    "Leakproof cooler backpack design helps prevent spills and keeps contents secure during travel",
    "High-density insulation technology keeps drinks and food cold for extended outdoor use",
    "Comfortable padded shoulder straps support easy carrying during hiking beach trips and camping",
    "Backpack-style portable design allows hands-free movement while traveling or walking outdoors",
    "Multiple storage pockets offer convenient organization for phones utensils napkins and accessories",
    "Water-resistant exterior fabric enhances durability for beach camping fishing and picnic environments",
    "Front bungee cord system provides additional storage for towels lightweight gear or accessories",
    "Side mesh pockets securely hold water bottles wine bottles or outdoor essentials",
    "Stylish modern outdoor aesthetic fits travel beach vacation camping and adventure lifestyles",
    "Heavy-duty zipper construction improves durability and smooth opening during frequent use"
  ],
  materials:
   [
    "High-density insulated foam lining designed for long-lasting temperature retention",
    "Food-grade PEVA waterproof interior helps maintain leakproof cold storage performance",
    "Durable Oxford fabric exterior supports outdoor travel and heavy daily use",
    "Reinforced polyester stitching enhances structural strength and long-term durability",
    "Soft padded breathable mesh back panel improves carrying comfort during extended use",
    "Adjustable ergonomic shoulder straps designed for balanced weight distribution",
    "Water-resistant outer shell helps protect contents from splashes and outdoor conditions",
    "Premium zipper hardware provides secure closure and smooth everyday functionality"
  ],
image: "https://github.com/Aadhi6374/image/blob/main/backkpackk.png?raw=true",
amazon: "https://www.amazon.com/Cooler-Backpack-2pc-Ice-Packs/dp/B0D5MFG5RF?crid=2NYZV2E1X55PJ&dib=eyJ2IjoiMSJ9.z0eWDp6_P0ra-dEzr2xKQ4ABDJucGCmsmNc7XklzixHNjNEtakeGhYpnBLhxcc_WC4Ox_MjEKa-Ydmr3FHFEgH7DOfZp311_bVxhzJNPOu9kD5K7H42794agk4MTCGhTmHo_W0Gryz3-1A6TOw_YWFJn-baynPpUdkttrDbkxESlzLBMf6UJRa0_f2OEaslkSgtqsqGDkFscIvVCBU89RVUUwWevjTT1IpxAyJ3jjjqPMO_3mfAZMDY06gpoyhz3IiCR4Fe4s319HXkx1226U-lsmPOjMxILvR1r4GyLVXM.iIDXxmpZr-kU_gfx93WGFQgRRaVpKDSeUIh5mwlr_co&dib_tag=se&keywords=REI%2BREI%2BCo-op%2BCampwell%2B8%2BL%2BFolding%2BCooler%2BEmber%2BOrange&nsdOptOutParam=true&qid=1779725690&sprefix=premium%2Bbeauty%2Bproducts%2Bblushers%2Band%2Bbronzers%2Caps%2C503&sr=8-7&th=1&psc=1&linkCode=ll2&tag=aadhithyan637-20&linkId=16184644ac3b51a75c2d25347ae09625&language=en_US&ref_=as_li_ss_tl"
},

{
  "id": 50,
  "name": "Hearth & Hand with Magnolia Soft Sided Cooler Bag – Sour Cream/Toffee Stripe Portable Picnic Cooler",
  "price": 35,
  "rating": 4.7,
  "reviews": 480,
  "description": "Enjoy stylish outdoor adventures with the Hearth & Hand with Magnolia Soft Sided Cooler Bag featuring a trendy sour cream and toffee striped design perfect for beach days picnics road trips camping and summer gatherings. Designed with insulated leak-resistant storage this portable cooler helps keep beverages snacks fruits and picnic essentials chilled for hours while adding an aesthetic lifestyle touch to every outing. The spacious interior and comfortable carrying handles make it ideal for travel outdoor brunches tailgating park visits boating and vacation use. Its fashionable neutral striped appearance blends modern farmhouse aesthetics with practical functionality making it a perfect Pinterest-worthy summer essential.",
  "features": [
    "Insulated soft sided cooler design helps maintain cold temperatures for drinks snacks and picnic foods",
    "Spacious interior storage accommodates beverages fruits sandwiches ice packs and outdoor essentials",
    "Stylish sour cream and toffee stripe pattern creates an aesthetic summer picnic and beach vibe",
    "Comfortable dual carry handles provide easy transport during travel beach trips and outdoor activities",
    "Adjustable shoulder strap supports convenient hands-free carrying while walking or traveling",
    "Leak-resistant interior lining helps reduce spills and supports clean storage performance",
    "Lightweight portable construction makes it easy to carry for picnics camping and road trips",
    "Wide zip-top opening allows quick access to drinks snacks and chilled food items",
    "Front exterior pocket offers extra storage space for sunglasses napkins phones or accessories",
    "Modern farmhouse inspired aesthetic complements beach picnic and outdoor entertaining lifestyles",
    "Durable zipper closure helps secure contents during transportation and outdoor adventures",
    "Versatile cooler bag works well for beach vacations boating sports events and summer gatherings"
  ],
  "materials": [
    "Durable polyester fabric exterior designed for outdoor use and long-lasting performance",
    "Insulated foam interior lining helps preserve cold temperatures for food and beverages",
    "Leak-resistant inner material supports secure storage and minimizes moisture leakage",
    "Reinforced stitching construction improves durability during frequent travel and carrying",
    "Soft woven carrying handles provide comfortable grip and easy portability",
    "Adjustable woven shoulder strap designed for convenient crossbody carrying support",
    "Premium zipper hardware ensures smooth opening and secure closure functionality",
    "Structured soft-shell construction maintains shape while remaining lightweight and flexible"
  ],
image: "https://github.com/Aadhi6374/image/blob/main/neww%20bag.png?raw=true",
amazon: "https://www.amazon.com/Hearth-Sided-Cooler-Toffee-Stripe/dp/B0H1Y9XB2J?crid=195QOOJNMGC9Q&dib=eyJ2IjoiMSJ9.HDBiRObP56HGAArBxfBslpKH9KGjXx8ZgIKbndEdEbGJxCy47TYRveNe2F2CsXa6uWxhPDyRl9NoH0scrIUE7A.lO_UnhEtxEc-_lKOz5oSvBRa7keP89NnmTI5SxqCIoQ&dib_tag=se&keywords=Soft+Sided+Cooler+Sour+Cream%2FToffee+Stripe+-+Hearth+%26+Hand%E2%84%A2+with+Magnolia&nsdOptOutParam=true&qid=1779789230&sprefix=soft+sided+cooler+sour+cream%2Ftoffee+stripe+-+hearth+%26+hand+with+magnolia%2Caps%2C438&sr=8-1&linkCode=ll2&tag=aadhithyan637-20&linkId=3b6f3bf981d0b0e8e8cb17ee04ff6a39&language=en_US&ref_=as_li_ss_tl"
},

 {
  "id": 51,
  "name": "Milani Baked Blush, Updated Powder Blush for Cheeks, Cruelty Free Makeup - Shape, Contour & Highlight Face for a Shimmery or Matte Finish - Pink Panna Cotta",
  "price": 59,
  "rating": 4.6,
  "reviews": 30547,
  "description": "Create a soft radiant glow with the Milani Baked Blush in Pink Panna Cotta featuring a luminous pink shade designed to enhance cheeks with a natural healthy flush. This cruelty free baked powder blush delivers a smooth blendable formula perfect for shaping contouring highlighting and adding buildable color to everyday makeup looks. The lightweight silky texture melts beautifully into the skin while the subtle shimmer finish creates a clean girl aesthetic ideal for Pinterest inspired beauty trends. Suitable for multiple skin tones this versatile blush works well for soft glam no-makeup makeup Korean beauty inspired looks bridal makeup and daily wear while offering a luxury looking finish at an affordable drugstore price.",
  "features": [
    "Baked powder blush formula provides smooth blendable application for natural looking cheeks",
    "Pink Panna Cotta shade delivers a soft pink glow with luminous healthy skin effect",
    "Buildable pigmentation allows light daytime makeup or bold glamorous blush looks",
    "Lightweight silky texture blends evenly without patchiness or heavy cakey appearance",
    "Subtle shimmer finish enhances cheeks with radiant glowing makeup effect",
    "Cruelty free makeup formula supports ethical beauty and conscious cosmetic shopping",
    "Versatile blush can be used for shaping contouring highlighting and cheek color enhancement",
    "Suitable for clean girl makeup soft glam Korean inspired beauty and everyday makeup styles",
    "Compact portable packaging fits easily inside purses makeup bags and travel kits",
    "Long lasting color helps maintain fresh radiant cheeks throughout daily wear",
    "Works beautifully across fair medium and deeper skin tones for versatile use",
    "Affordable luxury style blush offers high end appearance at drugstore beauty pricing"
  ],
 ingredients: [
    "Baked powder pigment formula designed for smooth blendable cheek application",
    "Cruelty free cosmetic ingredients support ethical makeup production standards",
    "Finely milled shimmer particles provide luminous radiant skin finish",
    "Soft pressed powder texture allows lightweight comfortable daily wear",
    "Protective compact case helps maintain product cleanliness and portability",
    "Durable plastic packaging supports travel friendly everyday makeup storage",
    "Skin smoothing ingredients help improve even blush distribution on cheeks",
    "Light reflective mineral pigments enhance glowing healthy skin appearance"
  ],
  image: "https://github.com/Aadhi6374/image/blob/main/beautyyyyy.png?raw=true",
  amazon: "https://www.amazon.com/Milani-Updated-Powder-Cheeks-Cruelty/dp/B0G59LVZN9?crid=ZT42SIK9EFBY&dib=eyJ2IjoiMSJ9.g5auC-PMA7OC5hdKqMktiX-BOsXkeI8-nmQA609KgQqCqTTcKRbcytvCaZ4853DaZBduDkTG8xDWbdVNGBRiR82Zlf9axkzF_PwQ77cgMpKh4CcZreBdkJ-k_KLZAlSmX0e9TtapfzrHuWK_c9Nm00_k03DTiLmtxxvuls50UOmgraBBGsc0xMgu9_IVjQZ9QtSgcsdz8G2yQTM8ILpbCmS3tjofhRK4Zarrriak1cyfcwek87o-LJ1LWJ28n7jfM9V7LludnMbAftRLK4Pi5xDnjgcbEaXIYjShQ8XA5eo.BRMTjOTIHEU-7p7o5Uvf2FQ3WsmOkYfa0tx1njcn_IQ&dib_tag=se&keywords=MAKEUP%2BBY%2BMARIO%2BSoft%2BPop%2BPlumping%2BCream%2BBlush%2BVeil%2BPinch%2BMe%2BPink%2B.17%2Boz%2B%2F%2B5%2Bg&nsdOptOutParam=true&qid=1779858029&sprefix=makeup%2Bby%2Bmario%2Bsoft%2Bpop%2Bplumping%2Bcream%2Bblush%2Bveil%2Bpinch%2Bme%2Bpink%2B.17%2Boz%2B%2F%2B5%2Bg%2Caps%2C525&sr=8-6&th=1&linkCode=ll2&tag=aadhithyan637-20&linkId=8f7dd9c7571d4e8bf6bc25ccf4ac93a0&language=en_US&ref_=as_li_ss_tl"
},

{
  "id": 52,
  "name": "Miss Mouth's Messy Eater Stain Treater Spray - Fast Acting Baby Clothes & Laundry Stain Remover",
  "price": 24,
  "rating": 4.4,
  "reviews": 91751,
  "description": "Remove tough baby food and everyday fabric stains quickly with Miss Mouth's Messy Eater Stain Treater Spray, a powerful fast acting laundry stain remover designed for parents families and busy households. This EPA Safer Choice certified unscented stain remover spray works effectively on baby clothes carpets upholstery underwear bibs and fabric while helping eliminate fresh and set-in stains from formula ketchup grease coffee fruit juice blood and food spills without harsh fragrances or heavy chemicals. The lightweight easy to use spray formula is gentle for family use yet strong on stains making it a must have newborn and toddler essential for modern laundry care routines. Perfect for Pinterest inspired mom hacks cleaning routines laundry organization content and viral Amazon home essentials.",
  "features": [
    "Fast acting stain remover spray helps break down tough stains within seconds",
    "Effective on baby clothes bibs upholstery carpets laundry fabric and underwear",
    "Works on food stains grease coffee ketchup formula fruit juice and blood spots",
    "Suitable for fresh stains and older set-in fabric stains for versatile cleaning use",
    "EPA Safer Choice certified formula supports safer family friendly cleaning routines",
    "Unscented formula contains no added fragrance for sensitive households",
    "Easy spray application allows quick stain treatment before regular washing",
    "Great for newborn baby toddler kids and adult clothing stain removal needs",
    "Portable spray bottle design supports convenient home travel and diaper bag use",
    "Helps reduce the need for dry cleaning and expensive fabric treatments",
    "Multi surface stain remover works on clothes upholstery carpets and soft fabrics",
    "Pinterest friendly cleaning product ideal for laundry hacks mom essentials and Amazon finds content"
  ],
  ingredients: [
    "Unscented water based cleaning formula designed for fabric stain removal",
    "Fragrance free ingredients help support sensitive skin and family safe cleaning",
    "EPA Safer Choice certified cleaning ingredients meet safety focused standards",
    "Spray bottle packaging allows easy direct stain targeting application",
    "Durable plastic trigger bottle supports repeated household cleaning use",
    "Lightweight liquid stain remover formula spreads evenly across fabrics",
    "Multi fabric compatible cleaning solution suitable for clothes upholstery and carpets",
    "Non dry cleaning stain treatment formula supports everyday laundry care"
  ],
image: "https://github.com/Aadhi6374/image/blob/main/stainn.png?raw=true",
amazon: "https://www.amazon.com/Miss-Mouths-Messy-Eater-Treater/dp/B0BVXQQNBB?crid=1J5O6663CA6F5&dib=eyJ2IjoiMSJ9.DlaEgUGJ_8mrxn5jib7V_R8Xz-axqRJbzFfQE3BzAScBUNYIagn3R_3ElxQpmaVKFGwF59i-qu3MDEC5xgzI7-3UuxnJJ-YEkYOVBbTv8iHn1Q26a7fUDRrQJgtLWH12tWCnwtfs89LF9-m4EEKoZ_Y3HFeVHz9IsgIyNuoy3nDWu4xw9fKfHB8RR7rD_vUc1UCvgXGBrkw4Svwgp5p5BDt7KDpUDO5y4ggVgfiq9MXvLNNnPf5acgi-CJplItJ7S5Z3RHexJi1KwVyI1YtfrSnFkR_2FxV06iQ0ycT7usM.VzuC-128bF5LAoaKSFzIigtdVUit6FNg0TkOrMe6Xjs&dib_tag=se&keywords=trending%2Bsummer%2Bproducts%2B2026&qid=1779877449&sprefix=trending%2Bproduct%2Bfor%2Bsummer%2B%2Caps%2C1998&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&linkCode=ll2&tag=aadhithyan637-20&linkId=228f7ab5ac62c442dd2b2d77baf6609a&language=en_US&ref_=as_li_ss_tl"
},

{
  "id": 53,
  "name": "Amepay Butterfly Floral Insulated Lunch Bag - Cute Aesthetic Lunch Tote for Women Teens & School",
  "price": 19,
  "rating": 4.2,
  "reviews": 4,
  "description": "Carry your meals in style with the Amepay Butterfly Floral Insulated Lunch Bag, a cute aesthetic lunch tote designed for women teens students and office workers who love fashionable everyday essentials. Made with durable Oxford cloth polyester and insulated PEVA lining, this lightweight reusable lunch bag helps keep food warm or drinks cool for hours while offering spacious storage for lunch boxes snacks beverages and daily accessories. Featuring a beautiful butterfly and flower bloom design, this trendy lunch bag blends practicality with Pinterest inspired soft girl aesthetic style, making it perfect for school work travel picnics gym sessions and daily commuting. The multi compartment portable design includes secure zipper pockets mesh bottle holder and comfortable carrying handle for convenient everyday organization.",
  "features": [
    "Insulated PEVA lining helps maintain food temperature for warm meals and cold drinks",
    "Durable Oxford cloth polyester material supports long lasting everyday use",
    "Lightweight portable design makes carrying lunches comfortable and convenient",
    "Spacious main compartment fits lunch boxes snacks fruits drinks and containers",
    "Front zipper pocket provides extra storage for utensils napkins and small essentials",
    "Inner zipper mesh pocket helps organize compact accessories securely",
    "Side mesh pocket holds water bottles umbrellas or tumblers for travel convenience",
    "Stylish butterfly floral print creates a trendy feminine aesthetic appearance",
    "Comfortable top handle strap supports easy grab and go carrying",
    "Secure buckle closure helps keep lunch items protected during transport",
    "Suitable for school office travel picnic gym and outdoor activities",
    "Pinterest friendly cute lunch accessory ideal for aesthetic lifestyle and Amazon finds content"
  ],
  "materials": [
    "Oxford cloth polyester exterior designed for durability and lightweight comfort",
    "Soft cotton padding adds structure and extra protection for daily carrying",
    "PEVA insulated lining helps preserve food freshness and temperature retention",
    "Mesh side pocket material supports flexible bottle or accessory storage",
    "Smooth zipper closures designed for repeated daily opening and closing",
    "Portable woven carrying handle offers comfortable grip and easy transportation",
    "Reusable eco friendly lunch tote construction suitable for long term use",
    "Easy hand wash care material supports simple everyday cleaning maintenance"
  ],
image: "https://github.com/Aadhi6374/image/blob/main/Butterfly%20bagg.png?raw=true",
amazon: "https://www.amazon.com/amepay-Butterfly-Polyester-Insulated-Butterflies/dp/B0DDH9H5J2?crid=4XARU87JSNYK&dib=eyJ2IjoiMSJ9.I4bu9_1uj_CRB869tpY9fGChJOQy4Dz57pSOKgKW4maR9bN0xrjaQ3atnpOgr0kKtZ0VEKVv_f-88ZLvMnMro-XRYQbNEQCwn-13fGH0FqYpFeSYpNtmQk5V1VJ_HqeTKo-mRO-DURuQN3J5fmKAjwLaEabr7exQRyz2YL_7Udn1jyaaUFOdnIEX6vnn6NEJpkNS-OSgNJj2hDcr2aAdhwCTrfCbq5iy8HoJ9lyW71MmDk-ojiUwjlYNnY1Et8u1svGIOCHie2Cn-obQYVfSnPXwCmR7aO6QvLfJgBzPBBQ.yfIZgosxvfEEIjjDdK6GapexMQm-on3LUy-9AI2EgEs&dib_tag=se&keywords=Puffy%2BLunch%2BBag%2B-%2BButterflies%2B-%2BButterflies%2B%2F%2BOS&nsdOptOutParam=true&qid=1779983928&sprefix=puffy%2Blunch%2Bbag%2B-%2Bbutterflies%2B-%2Bbutterflies%2B%2F%2Bos%2Caps%2C972&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&linkCode=ll2&tag=aadhithyan637-20&linkId=4993060e187b34a172a84f257d3a5134&language=en_US&ref_=as_li_ss_tl"
},

{
  "id": 54,
  "name": "Dash Rapid Egg Cooker - 7 Egg Capacity Electric Boiler, Poacher & Omelet Maker (Cream)",
  "price": 20,
  "rating": 4.6,
  "reviews": 135568,
  "description": "Make breakfast faster and easier with the Dash Rapid Egg Cooker, a compact electric egg cooker designed to prepare hard-boiled, soft-boiled, poached, scrambled eggs, and individual omelets in just minutes. Featuring a built-in precision thermal sensor, this versatile kitchen appliance delivers consistent cooking results without guesswork. Its space-saving design includes conveniently stored accessories, while dishwasher-safe removable parts make cleanup quick and effortless. Perfect for busy mornings, healthy meal prep, family breakfasts, college dorms, apartments, and small kitchens, this highly rated cooker helps create perfectly cooked eggs every time with minimal effort.",
  "features": [
    "Cooks up to 7 eggs at once for quick family breakfasts and meal prep",
    "Prepares hard-boiled, soft-boiled, poached, scrambled eggs and omelets",
    "Built-in precision thermal sensor helps prevent overcooking",
    "One-touch operation provides simple and convenient cooking",
    "Consistent cooking results for perfectly cooked eggs every time",
    "Compact countertop design saves valuable kitchen space",
    "Accessories store inside the appliance for organized storage",
    "Dishwasher-safe removable parts simplify cleanup",
    "Ideal for busy mornings, healthy eating and weekly meal preparation",
    "Suitable for apartments, dorm rooms, RVs and small kitchens",
    "Fast cooking performance reduces breakfast preparation time",
    "Popular Amazon kitchen gadget with thousands of positive customer reviews"
  ],
  "materials": [
    "Durable BPA-free plastic exterior construction",
    "Transparent plastic lid for monitoring cooking progress",
    "Heat-resistant plastic cooking tray and accessories",
    "Stainless steel heating plate for efficient cooking performance",
    "Non-electric removable components designed for dishwasher-safe cleaning",
    "Food-safe materials suitable for daily kitchen use",
    "Lightweight plastic housing for easy portability and storage",
    "Long-lasting kitchen appliance construction designed for everyday use"
  ],
 image: "https://github.com/Aadhi6374/image/blob/main/eggggg%20maker.png?raw=true",
 amazon: "https://www.amazon.com/DASH-Rapid-Egg-Cooker-Scrambled/dp/B0D3WNQGJC?crid=2Q7B6NW7GQNEC&dib=eyJ2IjoiMSJ9.n8ebzC9HGvXi6TBy1XZ70ZH_ttLgzop4Ls_6-EwAo0m9PmGXpm4PuVRfpe9gqJoz13wBU2jNMmdwj93CHePA6GNFo94YuwXaq9RglZnlIZQolItIALW_oyxI2WBaX9t2yW70-TRERpD3XS7FZo8USGDJvMduglxIZbZCWN2qt7K0CQHIiEw3L67m61PmXJYOZdwlmZldgYmrSkHzF0bydNFlQSM7elFvEn1_AW5PlPM.S1AyAs0KuWe3SL3f3Y24TsYVXI4YlOy5LInuGmxUiF0&dib_tag=se&keywords=Multifunctional%2BElectric%2BEgg%2BCooker%2B%E2%80%93%2BFast%2C%2BEfficient%2C%2BAnd%2BEasy%2BTo%2BUse%2BFor%2BPerfect%2BSoft-Boiled%2C%2BHard-Boiled%2BEggs%2B%26%2BSmooth%2BEgg%2BCustard.%2BCompact%2BDesign%2BIdeal%2BFor%2BHome%2C%2BKitchen%2C%2BAnd%2BDaily%2BHealthy%2BBreakfast&nsdOptOutParam=true&qid=1780066221&sprefix=multifunctional%2Belectric%2Begg%2Bcooker%2Bfast%2C%2Befficient%2C%2Band%2Beasy%2Bto%2Buse%2Bfor%2Bperfect%2Bsoft-boiled%2C%2Bhard-boiled%2Beggs%2B%26%2Bsmooth%2Begg%2Bcustard.%2Bcompact%2Bdesign%2Bideal%2Bfor%2Bhome%2C%2Bkitchen%2C%2Band%2Bdaily%2Bhealthy%2Bbreakfast%2Caps%2C941&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&linkCode=ll2&tag=aadhithyan637-20&linkId=0d18b54d2604b07da4de47da375d67c5&language=en_US&ref_=as_li_ss_tl"
},

{
  "id": 55,
  "name": "Vichy Mineral 89 Booster, Pure Hyaluronic Acid Serum for Face with Polyglutamic Acid for Skin Barrier Repair, Plumps & Hydrates, Lightweight Hydrating Serum, Oil-Free, Non-Sticky",
  "price": 30,
  "rating": 4.6,
  "reviews": 46667,
  "description": "Vichy Minéral 89 is a lightweight, fragrance-free hydrating face serum designed to instantly boost moisture, strengthen the skin barrier, and improve overall skin health. Powered by Hyaluronic Acid, Polyglutamic Acid, and Vichy Volcanic Mineral-Rich Water, this fast-absorbing gel serum helps plump the skin, lock in hydration, support skin repair, and promote a healthy radiant glow. Suitable for all skin types, including sensitive skin, it can be used daily on the face and neck as part of both morning and evening skincare routines. Its non-sticky texture layers easily under moisturizers, sunscreen, and makeup, making it an ideal addition to any skincare regimen focused on hydration, barrier support, and glass skin results.",
  "features": [
    "Provides instant and long-lasting hydration for visibly healthier skin",
    "Powered by Hyaluronic Acid to attract and retain moisture",
    "Contains Polyglutamic Acid to help lock hydration into the skin",
    "Fortified with Vichy Volcanic Mineral-Rich Water for barrier support",
    "Helps strengthen and protect the skin's moisture barrier",
    "Promotes plumper, smoother, and more radiant-looking skin",
    "Lightweight gel texture absorbs quickly without feeling greasy",
    "Non-sticky formula layers well under makeup and sunscreen",
    "Suitable for all skin types including sensitive skin",
    "Fragrance-free formula minimizes irritation risk",
    "Can be used on both face and neck for daily hydration",
    "Dermatologist-tested and accepted by the National Eczema Association"
  ],
 ingredients: [
    "Hyaluronic Acid",
    "Polyglutamic Acid",
    "Vichy Volcanic Mineral-Rich Water",
    "Fragrance-Free Formula",
    "Oil-Free Gel Base",
    "Fast-Absorbing Hydrating Complex",
    "Skin Barrier Support Ingredients",
    "Dermatologist-Tested Sensitive Skin Formula"
  ],
 image: "https://github.com/Aadhi6374/image/blob/main/serummmm.png?raw=true",
 amazon: "https://www.amazon.com/Fortifying-Hydrating-Hyaluronic-Lightweight-Moisturizing/dp/B06XC5PQGL?crid=1D4JDJ3T3TWJB&dib=eyJ2IjoiMSJ9.8CCNmr1H1UwB0zuN-f1ECySUeaaAUJsGTJ7Us-iz9TdXwM2tFQE4YR07eVeNx7GI6KxhiCYNPmZ9RmdmyjQyE2pEesUKB63OpPIRqTcvkYh2JV5LcvoHpK1XL3P0NWyl2JKhXbKW_BBiig0T-bqMNrbvtEJb4_c7XoxsG7NMUgmxkAtiXMHEO8U2gM6qAGmJi2ssF-G6MuI2wz3oUJ852mikpWsKyklmpvIF9uHuqqaE8C-FOtUtjtkAL-eccyhG9uLNX-IdounxZD6xovQyOVR299c7Ge9GrPW0EvMQbTg.0yFUxop2xrledW17vTm2iosEPYXIQYquqLrG_CQSEeQ&dib_tag=se&keywords=premium%2Bskin%2Bcare%2Bproducts&qid=1780135294&rdc=1&sprefix=premium%2Bskin%2Bcare%2Bproducts%2Caps%2C541&sr=8-21-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9tdGY&th=1&linkCode=ll2&tag=aadhithyan637-20&linkId=a860af2f2818db333bfb58ea677429bf&language=en_US&ref_=as_li_ss_tl"
},

{
  "id": 56,
  "name": "La Roche-Posay Toleriane Double Repair Face Moisturizer, Daily Moisturizer with Ceramide-3 & Niacinamide for Barrier Repair and 48-Hour Hydration",
  "price": 24,
  "rating": 4.6,
  "reviews": 49345,
  "description": "La Roche-Posay Toleriane Double Repair Face Moisturizer is a lightweight, oil-free daily face cream designed to restore the skin barrier, deliver long-lasting hydration, and improve overall skin comfort. Formulated with Ceramide-3, Niacinamide, Glycerin, and Microbiome-Balancing Prebiotics, this fast-absorbing moisturizer helps repair the skin's natural protective barrier in as little as one hour while providing up to 48 hours of hydration. Suitable for all skin types, including sensitive and acne-prone skin, its fragrance-free, non-comedogenic formula delivers immediate comfort without clogging pores. The lightweight texture layers easily under sunscreen and makeup, making it ideal for both morning and evening skincare routines.",
  "features": [
    "Provides up to 48 hours of long-lasting hydration",
    "Helps restore the skin's natural protective barrier in just 1 hour",
    "Formulated with Ceramide-3 to strengthen and maintain the skin barrier",
    "Contains Niacinamide to soothe skin and improve moisture retention",
    "Enriched with Glycerin for deep hydration and moisture replenishment",
    "Microbiome-balancing prebiotics help support healthy skin",
    "Lightweight cream texture absorbs quickly without feeling greasy",
    "Oil-free and non-comedogenic formula won't clog pores",
    "Suitable for all skin types including sensitive skin",
    "Fragrance-free, paraben-free formula minimizes irritation risk",
    "Provides immediate comfort and soothing hydration",
    "Dermatologist-tested and safe for daily face and neck use"
  ],
  ingredients:[
    "Ceramide-3",
    "Niacinamide",
    "Glycerin",
    "Microbiome-Balancing Prebiotics",
    "La Roche-Posay Thermal Spring Water",
    "Fragrance-Free Formula",
    "Oil-Free Cream Base",
    "Non-Comedogenic Hydration Complex"
  ],
 image: "https://github.com/Aadhi6374/image/blob/main/moisture.png?raw=true",
 amazon: "https://www.amazon.com/Roche-Posay-Toleriane-Double-Repair-Moisturizer/dp/B01N9SPQHQ?crid=16YSJ7GT95STI&dib=eyJ2IjoiMSJ9.viy2HWSX4dd1utvgf_OwoWVJ-VhfCilkJ86mFNtl6IecMNqCjj1vsDdhdkg-HDtq1mo-xz2T2VpdzVVIGxE1BLn84v5fCTQ7Ke0UdW6d27DViepLKn7Q1bfsEksBkc1yU5455FmmF4VjLIYKgiVvBqwyily7vWGC9L6x6wvgvXzQkyFfPfWp1ZhaZICxF5T7AcfUK-Mj0yO8BHSVFuOUIP0WwlvvltPN3GkChAx3LPLTjXL4rNv63RvEOwiODG5Fr9cDpcpYjcCj0WsxOfmfyOEQUs44RUcsC1muCV55IeE.nLxs8utIgovZOsIEw24UaqwhVO8O7kwk6vKU2yZ5B08&dib_tag=se&keywords=La%2BRoche-Posay%2BToleriane%2BDouble%2BRepair%2BFace%2BMoisturizer&qid=1780142208&refinements=p_36%3A1253950011&rnid=386662011&s=beauty&sprefix=la%2Broche-posay%2Btoleriane%2Bdouble%2Brepair%2Bface%2Bmoisturizer%2Cbeauty%2C514&sr=1-2&th=1&linkCode=ll2&tag=aadhithyan637-20&linkId=824c0493fc29362c8bd6f3d39aced998&language=en_US&ref_=as_li_ss_tl"
},

{
  "id": 57,
  "name": "La Roche-Posay Anthelios Clear Skin Oil-Free Sunscreen SPF 60, Matte Finish Face Sunscreen for Oily & Acne-Prone Skin",
  "price": 20,
  "rating": 4.4,
  "reviews": 22774,
  "description": "La Roche-Posay Anthelios Clear Skin Oil-Free Sunscreen SPF 60 is a lightweight daily facial sunscreen specially formulated for oily, acne-prone, and sensitive skin. Powered by Cell-Ox Shield technology, it delivers advanced broad-spectrum UVA/UVB protection while helping absorb excess oil and reduce unwanted shine throughout the day. This fast-absorbing sunscreen leaves a clean matte finish without clogging pores, making it ideal for individuals prone to breakouts. Its oil-free, fragrance-free, non-comedogenic formula is rigorously tested for sensitive skin and remains comfortable even in heat and humidity. Free from oxybenzone, octinoxate, and parabens, it provides reliable sun protection while supporting a clearer, healthier-looking complexion.",
  "features": [
    "Broad-spectrum SPF 60 protection against UVA and UVB rays",
    "Powered by Cell-Ox Shield antioxidant technology",
    "Helps absorb excess oil and control shine throughout the day",
    "Leaves a clean, matte finish without a greasy feel",
    "Non-comedogenic formula won't clog pores or trigger breakouts",
    "Ideal for oily, acne-prone, and sensitive skin types",
    "Oil-free lightweight texture absorbs quickly",
    "Provides comfortable wear even in heat and humidity",
    "Fragrance-free and allergy-tested for sensitive skin",
    "Oxybenzone-free and Octinoxate-free formula",
    "Paraben-free sunscreen suitable for daily use",
    "Can be worn alone or under makeup for everyday protection"
  ],
  ingredients: [
    "Cell-Ox Shield Technology",
    "Broad Spectrum UVA/UVB Filters",
    "Antioxidant Complex",
    "Oil-Absorbing Silica",
    "Fragrance-Free Formula",
    "Oil-Free Cream Base",
    "Non-Comedogenic Ingredients",
    "Paraben-Free Formula",
    "Oxybenzone-Free UV Filters",
    "Octinoxate-Free UV Filters"
  ],
 image: "https://github.com/Aadhi6374/image/blob/main/suncreen.png?raw=true",
 amazon: "https://www.amazon.com/Roche-Posay-Anthelios-Clear-Skin-Sunscreen/dp/B01A0NT3D6?dib=eyJ2IjoiMSJ9.Ac0JrViB-83fpStNhA85E8tDE3LM65raw9nDOdGZAcE3b9Qt5fPdygA2vXZBd4-enfzm_VmnYvGqVgSg4MZYjzD6YWlvOqXCWdKhOZZ_m1uEmzZHYkhvS-t4qdv_bmjNBhPk98PPZeycztFC4j1S6LjcwJEGotBVhlugLgIKJwP1gAh9QCagy0_edChzMIB5JlQ8xwjORF9EDJ0FzrQicHWn-UMbkTUacfKWiNQSgKu4EL9aHLDpI6CXCAhTL_75294IBchZ0MBGS_01aFjC6KzqYOCcQ6vTN3oNy2FVu0g.S_MVg1GdabfHAUUXBh13V7dXUWVDsTfPdQp48uTvkqQ&dib_tag=se&keywords=La%2BRoche-Posay%2BAnthelios%2BUVMune%2B400%2BInvisible%2BFluid%2BSPF50%2B&nsdOptOutParam=true&qid=1780142446&refinements=p_36%3A1253950011&rnid=386662011&s=beauty&sr=1-1&th=1&linkCode=ll2&tag=aadhithyan637-20&linkId=ea03fddea270844f5517389f614ab496&language=en_US&ref_=as_li_ss_tl"
},

{
  "id": 58,
  "name": "La Roche-Posay Toleriane Purifying Foaming Facial Cleanser, Oil-Free Face Wash with Niacinamide & Ceramide-3",
  "price": 18,
  "rating": 4.7,
  "reviews": 48959,
  "description": "La Roche-Posay Toleriane Purifying Foaming Facial Cleanser is a gentle daily face wash designed for normal to oily, sensitive, and acne-prone skin. This soap-free foaming gel cleanser effectively removes dirt, excess oil, makeup, and impurities without disrupting the skin's natural moisture barrier. Enriched with La Roche-Posay Prebiotic Thermal Water, Ceramide-3, Niacinamide, and Glycerin, it helps soothe irritation, support barrier repair, and maintain optimal hydration. The lightweight oil-free formula rinses clean without leaving residue, keeping skin feeling fresh, balanced, and comfortable. Dermatologist-tested, allergy-tested, fragrance-free, sulfate-free, and non-comedogenic, it is suitable for daily use on sensitive skin and helps promote a healthier-looking complexion.",
  "features": [
    "Gently removes dirt, oil, makeup, and daily impurities",
    "Foaming gel texture cleanses without over-drying skin",
    "Maintains the skin's natural protective moisture barrier",
    "Supports healthy skin with Ceramide-3 and Niacinamide",
    "Contains Prebiotic Thermal Water to soothe sensitive skin",
    "Helps balance excess oil without leaving skin tight",
    "Non-comedogenic formula won't clog pores",
    "Oil-free, soap-free, and sulfate-free cleanser",
    "Fragrance-free and allergy-tested for sensitive skin",
    "Dermatologist-tested for daily facial cleansing",
    "Suitable for normal, oily, and sensitive skin types",
    "Leaves skin feeling clean, refreshed, and comfortable"
  ],
  ingredients: [
    "Ceramide-3",
    "Niacinamide",
    "Glycerin",
    "La Roche-Posay Prebiotic Thermal Water",
    "Oil-Free Gel Base",
    "Soap-Free Cleansing Agents",
    "Sulfate-Free Formula",
    "Fragrance-Free Formula",
    "Non-Comedogenic Ingredients",
    "pH-Balanced Cleansing System"
  ],
 image: "https://github.com/Aadhi6374/image/blob/main/facewashhh.jpeg?raw=true",
 amazon: "https://www.amazon.com/Roche-Posay-Toleriane-Cleanser-Purifying-Sensitive/dp/B0835T9PCR?dib=eyJ2IjoiMSJ9.o7LYMS2d-SNSH5fkzKTSHbUQPu2QmKjNcGKqKBPj9tGmG_ixcuxCuvdrGkgieMjq-2oSKRiPMKJL8nw9HN3jSDQcPA6GlU_ZRgWfO4TCEUE1gHeXZTRFmHFMo8WaQo8V7SvY0efmPiUdnL4_7LPR3hzSqsLBjNRHUDb32nWEQFYmdxZBJJHplKYnaBCPNs2iol9ZvX-Ate1yBa6OV-NMKNxlpK_ObWpjYTz0F1FWvku0enmOE8zUaPJOAWB1ZAWgK5p4cQnuuI1mg21mhaKfsxmybinPqkPdT2i5CDT9ZQQ.9_dP8j752VPIC8oP6cuO-wKZNYLuVOFASB9Awb501kE&dib_tag=se&keywords=La%2BRoche-Posay%2BEffaclar%2BPurifying%2BFoaming%2BGel&qid=1780142718&s=beauty&sr=1-8&th=1&linkCode=ll2&tag=aadhithyan637-20&linkId=c4260bc63f774f9b853a35cadbef06ff&language=en_US&ref_=as_li_ss_tl"
},
 {
  "id": 59,
  "name": "VQ Laura Ashley 6.8 Quart Slow Cooker - China Rose",
  "price": 18,
  "rating": 4.4,
  "reviews": 122,
  "description": "The VQ Laura Ashley 6.8 Quart Slow Cooker in the elegant China Rose floral pattern combines stylish kitchen design with practical cooking performance. Featuring a large 6.8-quart capacity, this slow cooker is ideal for preparing hearty family meals, batch cooking, entertaining guests, and meal prepping. Its durable stainless steel construction, removable ceramic cooking pot, and tempered glass lid help retain moisture and flavor while ensuring long-lasting performance. Equipped with three heat settings, including a keep-warm function, it allows users to prepare soups, stews, curries, casseroles, roasts, and other slow-cooked recipes with minimal effort. The dishwasher-safe components simplify cleanup, while the beautiful Laura Ashley floral design makes it an attractive addition to any kitchen countertop. Energy-efficient operation and reliable safety features make this slow cooker a convenient solution for everyday home cooking.",
  "features": [
    "Large 6.8-quart capacity suitable for families and gatherings",
    "Elegant Laura Ashley China Rose floral design",
    "Durable stainless steel exterior construction",
    "Removable ceramic cooking pot for easy serving",
    "Three heat settings including low, high, and keep-warm modes",
    "Tempered glass lid for convenient cooking monitoring",
    "Dishwasher-safe removable components",
    "Ideal for soups, stews, curries, casseroles, and roasts",
    "Energy-efficient cooking compared to conventional ovens",
    "Non-slip feet for added countertop stability",
    "Perfect for meal prepping and batch cooking",
    "Designed for stress-free and convenient home cooking"
  ],
  "materials": [
    "Stainless Steel Housing",
    "Removable Ceramic Cooking Pot",
    "Tempered Glass Lid",
    "Heat-Resistant Plastic Handles",
    "Metal Heating Components",
    "Non-Slip Rubber Feet",
    "Electrical Heating Element",
    "Durable Floral Printed Exterior Finish",
    "Dishwasher-Safe Ceramic Insert",
    "Reinforced Internal Cooking Chamber"
  ],
 image: "https://github.com/Aadhi6374/image/blob/main/cooker.png?raw=true",
 amazon: "https://www.amazon.com/Laura-Ashley-Slow-Cooker-Quart/dp/B0DJDGWFNN?crid=1GJBFZMGB1PME&dib=eyJ2IjoiMSJ9.czysi-DaD29Q8PuBWc7DhlgQemdnvGSbsBA_pee5MA6z-KoQTu1CCsr7q-9SMkzQLZUNVhwSirKVM7KYolHYwi8IBcGNxPXxb87bFYJTqiMy0re80j9z11HKthnkhhsB9aT4yy_-Q7s_7apbsDUNMGsloqPC3ssByQLV3QpFrAfjaowP_aa0AKUxl17KvAquDU_eWtrMRhXlVbVqyyER5O69Y-dXU5Xvys3T0EZjnas.MHjiDNwNrypsUymQZuX7hDxAV9z-dcdjhwGpNJfudbc&dib_tag=se&keywords=slow%2Bcooker%2Brecently%2Bviewed&qid=1780575282&sprefix=slow%2Bcooker%2Brecently%2Bviewed%2Caps%2C399&sr=8-5-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9tdGY&th=1&linkCode=ll2&tag=aadhithyan637-20&linkId=9f71f6fbd5c86748029d2800cced5ebd&language=en_US&ref_=as_li_ss_tl"
},
 {
  "id": 60,
  "name": "Fix-It and Forget-It Big Cookbook: 1400 Best Slow Cooker Recipes",
  "price": 18,
  "rating": 4.6,
  "reviews": 5887,
  "description": "Fix-It and Forget-It Big Cookbook is a bestselling slow cooker recipe collection by Phyllis Good, featuring 1,400 carefully selected recipes from home cooks across America. Designed for busy families, beginners, and anyone looking for convenient meal preparation, this comprehensive cookbook offers easy-to-follow instructions and a wide variety of delicious slow-cooker meals. From hearty soups and stews to casseroles, desserts, and family favorites, the recipes have been tested in real-life kitchens for reliable results. The hardcover edition includes full-color food photography galleries throughout the book and combines the best recipes from the renowned Fix-It and Forget-It series, which has sold over 11 million copies worldwide. Perfect for meal planning, family dinners, entertaining, and effortless home cooking, this cookbook helps readers create flavorful meals with minimal preparation.",
  "features": [
    "Includes 1,400 slow-cooker recipes",
    "Written by bestselling author Phyllis Good",
    "Easy-to-follow instructions suitable for beginners",
    "Recipes collected from experienced home cooks across America",
    "Real-life kitchen tested recipes for reliable results",
    "Covers soups, stews, casseroles, desserts, and main dishes",
    "Ideal for busy families and meal preparation",
    "Hardcover edition with durable construction",
    "Features full-color food photography galleries",
    "Suitable for everyday cooking and special occasions",
    "Part of the bestselling Fix-It and Forget-It cookbook series",
    "Over 1,500 five-star customer reviews"
  ],
  "materials": [
    "Hardcover Binding",
    "Printed Paper Pages",
    "Full-Color Food Photography Pages",
    "Laminated Cover Finish",
    "Ink Printed Content",
    "Durable Cardboard Cover Boards",
    "Glossy Photo Inserts",
    "Recipe Reference Index Pages",
    "Table of Contents Section",
    "Stitched and Glued Book Binding"
  ],
 image: "https://github.com/Aadhi6374/image/blob/main/recepiee.png?raw=true",
 amazon: "https://www.amazon.com/Fix-Forget-Big-Cookbook-Recipes/dp/156148640X?crid=3TB8XY4BWY1JY&dib=eyJ2IjoiMSJ9.iPDBu-ctFmn-pALHlAvBsatI1-YR8lCqOBytoIfG_j6XBWL6NIcZJZAxuk1SUlgootsdMYri5qGob8wuuAO6qQJ9BpuXDlP2iD23EUfxvvauiTRaW-Q3rUtl-W-w1m0S0ygDRmvCMyCHlivf8zRFrYjsgiS33NasvB7P8ESge0fUyAQzayl5T6O4BedU9zwey92QzjTX9lKll81FXm7UNch_PErb4b-IIh0iVv0p5y4.kpj6TPdouK6yeHy7lWuHhF-boexuRAKrK78s80hTLUE&dib_tag=se&keywords=Slow+Cooker+Recipes%3A+60+Delicious%2C+Easy+And+Healthy+Slow+Cooker+Recipes+For...&nsdOptOutParam=true&qid=1780482097&sprefix=quickbite+1.6l+rice+cooker%2C+purple%2Caps%2C806&sr=8-2&linkCode=ll2&tag=aadhithyan637-20&linkId=cafec8100e1dc1edb74e6fd39be7bd3b&language=en_US&ref_=as_li_ss_tl"
},
{
  "id": 61,
  "name": "Molton Brown Rose Dunes Body Wash 10 fl. oz.",
  "price": 35,
  "rating": 4.6,
  "reviews": 539,
  "description": "Molton Brown Rose Dunes Body Wash is a luxurious bath and shower gel inspired by the mysterious beauty of desert landscapes at sunset. This shimmering body wash combines rich floral rose notes with earthy patchouli and tart cassis, creating a sophisticated and long-lasting fragrance experience. Formulated for all skin types, it gently cleanses while leaving skin feeling refreshed, soft, and delicately scented. The fragrance features sustainably sourced patchouli from Sulawesi, Indonesia, known for its exceptional quality and intensity. Made in England, this premium body wash comes in a recyclable bottle made from 50% recycled plastic and is never tested on animals, reflecting Molton Brown's commitment to responsible luxury.",
  "features": [
    "Luxurious bath and shower gel with shimmering formula",
    "Inspired by desert rose landscapes and sunset dunes",
    "Features warm rose, earthy patchouli, and tart cassis notes",
    "Deeply cleanses while leaving skin softly fragranced",
    "Suitable for all skin types",
    "Long-lasting floral and woody scent trail",
    "Contains sustainably sourced patchouli from Sulawesi, Indonesia",
    "Made in England",
    "Cruelty-free and never tested on animals",
    "Recyclable bottle made from 50% recycled plastic",
    "Premium fragrance developed with expert perfumers",
    "Ideal for daily luxury bathing rituals"
  ],
 ingredients: [
    "Patchouli Essential Oil",
    "Rose Fragrance Notes",
    "Cassis Fragrance Notes",
    "Geranium Fragrance Notes",
    "Saffron Fragrance Notes",
    "Gel-Based Cleansing Formula",
    "Cruelty-Free Ingredients",
    "Premium Fragrance Blend"
  ],
  
 image: "https://github.com/Aadhi6374/image/blob/main/bodywashhh.jpg?raw=true",
 amazon: "https://www.amazon.com/Molton-Brown-Rose-Dunes-Shower/dp/B0BY37RFFZ?crid=1MFT45GH61H40&dib=eyJ2IjoiMSJ9.TFrDD-GQ2cwFoXlN2pjJLqA0mR8u_7V8xq25X13nfwBmii_ryoK6OCn1QjG0Slube7eE9gCr4v3jHYgQHAl1syYksFuVOn1wUkzEcD7IwbVJxc2WK7yE3rEeZJA0Jw6JfzSh_GzRqieMW53gar_MQl1bFSvykagBGDE0o54365fVLXIUl_0AH3IGvqJYIYrJWuHWvHN34EVh1cervDfsNB6dVXjrRQgdV6LjFZLCNKJVNfR1mBM70ZdT-JPyhhZVQxnJy7I-UUm3Rq9OXzqWEFt6bj7TaJTILvjbKOB4e5Q.kiaJ7HEvAXDdE9Ym7mMK6rkLOxmh8HpjIayrk1uwhmw&dib_tag=se&keywords=Molton%2BBrown%2BRose%2BDunes%2BBody%2BWash%2B10%2Bfl.%2Boz.&nsdOptOutParam=true&qid=1780668003&sprefix=triple%2Bclear%2Bfloating%2Bbracket%2Bfor%2B10oz%2Bflowers%2Bhold%2Blife%2Caps%2C1894&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&linkCode=ll2&tag=aadhithyan637-20&linkId=e0bf5984ec9118305dc7972055838519&language=en_US&ref_=as_li_ss_tl"
},
{
  "id": 62,
  "name": "The Honest Company Refresh 2-in-1 Shampoo + Body Wash Citrus Vanilla 10 fl. oz.",
  "price": 11.99,
  "rating": 4.7,
  "reviews": 46181,
  "description": "The Honest Company Refresh 2-in-1 Shampoo + Body Wash is a best-selling, tear-free cleanser designed to gently clean both hair and skin in one simple step. Formulated for babies, kids, and adults, this hypoallergenic wash is ideal for sensitive skin and everyday use. Infused with chamomile extract and aloe, it helps leave skin feeling soft, refreshed, and moisturized while keeping hair clean and manageable. The Citrus Vanilla Refresh scent combines naturally derived botanicals and essential oils to create a light, uplifting bathing experience. Made in the USA, this dermatologist-tested formula is free from harsh chemicals such as parabens, sulfates, dyes, silicones, phthalates, synthetic fragrances, and formaldehyde donors, making it a trusted choice for the whole family.",
  "features": [
    "2-in-1 shampoo and body wash for hair and skin",
    "Tear-free formula suitable for babies and children",
    "Gentle enough for sensitive skin",
    "Hypoallergenic and dermatologist-tested",
    "Leaves skin soft, clean, and refreshed",
    "Helps keep hair clean and manageable",
    "Infused with chamomile extract and aloe",
    "Naturally derived Citrus Vanilla Refresh fragrance",
    "Suitable for all hair types and hair colors",
    "Cruelty-free and never tested on animals",
    "Made in the USA",
    "Free from parabens, dyes, silicones, sulfates, phthalates, synthetic fragrances, and formaldehyde donors"
  ],
  "ingredients": [
    "Chamomile Extract",
    "Aloe Vera",
    "Naturally Derived Citrus Vanilla Fragrance",
    "Essential Oils",
    "Purified Water",
    "Plant-Based Cleansing Agents",
    "Hypoallergenic Formula",
    "Naturally Derived Ingredients"
  ],
   image: "https://github.com/Aadhi6374/image/blob/main/bodywash.png?raw=true",
 amazon: "https://www.amazon.com/Company-Cleansing-Naturally-Tear-free-Hypoallergenic/dp/B00EHD9872?crid=XDONEA8P7MZ4&dib=eyJ2IjoiMSJ9.n1PPwHrZPd2ezbviYnuYUEj8yjYn-dCoRITdoseuC5Dacd07px7bsiA7DYlLFCaVrvW1d6VJlWFEEkVQzOyrog3vi-nrjiO_YH6GV2N70HQI5efBYcAjeTtoZEvbaCWQQvsOHsklXb3IPE-qufSWxGalz-JSzTVeg0drwQ-fo8xryVjl7-y_xWQv9gNBK8ld_81wgtj97i5THz4GUw7DyTzOWJGHv4dxdpmVre5M8w9_jpHXa7SLAjM8JKJyzX3v_hHnAvV2viJIK9SUWVmgBMnUIlDeov0hfwoucyCeHhU.Pj7aHs0r6ohKgdsm1igEAFAmxbtnGIOTwNnzwaqxC-Y&dib_tag=se&keywords=The%2BHonest%2BCompany%2BRefresh%2BCitrus%2BVanilla%2BShampoo%2Band%2BBody%2BWash%2B10%2Bfl%2Boz&nsdOptOutParam=true&qid=1780729507&rdc=1&sprefix=the%2Bhonest%2Bcompany%2Brefresh%2Bcitrus%2Bvanilla%2Bshampoo%2Band%2Bbody%2Bwash%2B10%2Bfl%2Boz%2Caps%2C416&sr=8-1&th=1&linkCode=ll2&tag=aadhithyan637-20&linkId=e91fb6bd55a4231752009bc040975fcb&language=en_US&ref_=as_li_ss_tl"
},
{
  "id": 63,
  "name": "L'OCCITANE Cleansing & Softening Almond Shower Oil Body Wash & Shaving Base 16.9 fl. oz.",
  "price": 29.99,
  "rating": 4.4,
  "reviews": 17026,
  "description": "L'OCCITANE Cleansing & Softening Almond Shower Oil is a luxurious body cleanser that transforms into a rich, milky lather upon contact with water. Enriched with sweet almond oil, this nourishing shower oil gently cleanses while helping to maintain the skin's natural moisture barrier. Designed for daily use and suitable for all skin types, it leaves skin feeling soft, smooth, comforted, and delicately scented with a warm almond fragrance. Its unique oil-to-milk texture also makes it an excellent shaving base, helping the razor glide smoothly across the skin while minimizing dryness. This premium body wash provides a spa-like cleansing experience that purifies and softens without stripping moisture, making it a favorite for those seeking hydrated, silky-smooth skin.",
  "features": [
    "Luxurious almond-scented shower oil",
    "Transforms into a silky milky lather on contact with water",
    "Gently cleanses without drying the skin",
    "Leaves skin feeling soft, smooth, and nourished",
    "Suitable for all skin types",
    "Recommended for daily use",
    "Provides long-lasting comfort and hydration",
    "Can be used as a shaving base for a smoother shave",
    "Helps maintain the skin's natural moisture barrier",
    "Delicately perfumes skin with a warm almond fragrance",
    "Rich oil-to-milk texture for a luxurious shower experience",
    "Purifies and softens the skin while cleansing"
  ],
  "ingredients": [
    "Sweet Almond Oil",
    "Grape Seed Oil",
    "Sunflower Seed Oil",
    "Coconut-Derived Cleansing Agents",
    "Glycerin",
    "Vitamin E",
    "Natural Almond Fragrance",
    "Moisturizing Botanical Oils"
  ],
   image: "https://github.com/Aadhi6374/image/blob/main/shower%20oil.png?raw=true",
 amazon: "https://www.amazon.com/LOccitane-Cleansing-Softening-Almond-Shower/dp/B017D5N9W0?crid=14KF26LX0VQ9G&dib=eyJ2IjoiMSJ9.cDZnY_Don494DvUZzvt4lyI0LJG71G4-I84FL-rYBjzEiCcZyYceymweoewrLnWrQ_PiGzfKbcQrm9_0HybivFfu0toQJSZjckCoVCfRvDy8bQ6d-i0z0oOJytb-E5kljikMmvX-FpbtXsFlPtvVCHtn7acPkvrvZr0s5VhB8rYMxPE5HCwCmHJOwvLCmIcSaR6NUktt2TH1O75GThxREe7A156eC1qwTsIf2aVtY-hEc4oGCafgSxG-15qDUDOLKdDO2pduuLQG_TN5jKh577BupOOREHbUcSFDA_NMYhs.jSr0t6RTZbHEQ1Pw6VMUKnpacmD-IDKPgd_qQVURlw4&dib_tag=se&keywords=L%27OCCITANE%2BCleansing%2B%26%2BSoftening%2BAlmond%2BShower%2BOil%2C%2BBody%2BWash%2B%26%2BShaving%2BBase%2BPurifies%2B%26%2BSmooths%2BWithout%2BDrying%2BSkin%2C%2BMilky%2BLather%2C%2BNourishing%2BSkincare&nsdOptOutParam=true&qid=1780736932&sprefix=l%27occitane%2Bcleansing%2B%26%2Bsoftening%2Balmond%2Bshower%2Boil%2C%2Bbody%2Bwash%2B%26%2Bshaving%2Bbase%2Bpurifies%2B%26%2Bsmooths%2Bwithout%2Bdrying%2Bskin%2C%2Bmilky%2Blather%2C%2Bnourishing%2Bskincare%2Caps%2C635&sr=8-7&th=1&linkCode=ll2&tag=aadhithyan637-20&linkId=5b7e38f52874a4756789ffb478243dc9&language=en_US&ref_=as_li_ss_tl"
},
{
  "id": 64,
  "name": "Dermalogica Conditioning Hand + Body Wash (10 Fl Oz)",
  "price": null,
  "rating": 4.6,
  "reviews": 671,
  "description": "Dermalogica Conditioning Hand + Body Wash is a professional-grade moisturizing shower gel designed to gently cleanse, condition, and nourish the skin without disrupting its natural moisture barrier. Inspired by the aromatic bathing rituals of traditional Turkish hammams, this luxurious body wash is infused with invigorating botanical oils including French Rosemary, Chinese Eucalyptus, Tea Tree, and Lemon oils to awaken the senses while cleansing. Its skin-conditioning formula contains Pro-Vitamin B5, Sandalwood, Lavender, and Clary Sage to help maintain skin hydration and lipid barrier health, leaving skin feeling soft, smooth, refreshed, and healthy-looking. Suitable for all skin types and ideal for daily use, this body wash delivers a spa-like shower experience while helping combat dryness and dullness.",
  "features": [
    "Professional-grade conditioning hand and body wash",
    "Gently cleanses without stripping the skin",
    "Suitable for all skin types",
    "Helps maintain lipid barrier health",
    "Provides hydration and nourishment",
    "Inspired by traditional Turkish hammam bathing rituals",
    "Leaves skin soft, smooth, and refreshed",
    "Awakens the senses with aromatic botanical oils",
    "Helps address dryness and dullness",
    "Ideal for daily use",
    "Creates a rich, luxurious lather",
    "Lightly fragrances the skin after cleansing"
  ],
  "ingredients": [
    "French Rosemary Oil",
    "Chinese Eucalyptus Oil",
    "Tea Tree Oil",
    "Lemon Oil",
    "Pro-Vitamin B5 (Panthenol)",
    "Sandalwood",
    "Lavender",
    "Clary Sage"
  ],
   image: "https://github.com/Aadhi6374/image/blob/main/body%20wash%20dermalogica.png?raw=true",
 amazon: "https://www.amazon.com/Dermalogica-Conditioning-Body-Wash-10/dp/B07YYPN8LX?crid=1YZNRRMYALINB&dib=eyJ2IjoiMSJ9.ifl2Bnb3_p0zlo5vdKdrkTkdsSEZpZivhHNp5htaZ28VtLOZl5p5hxQAdTCKyXEyDRatFr1Tz-cUSt3MEfJhYOift7ORkTFHQYyNYevSaGR8zlKgVXznzEZzmBt-vhhDIQv6ULWVbRcA8EwYr7TVmXrMwrUtu1zaYPfWZtyxPxxdbCUoVUyeUjtuxkv2XN6PuOIsv-3wI9BHkmglP277z_YTmJe95Xokr6u959WLcZQPLG19JZKLmtaPvxZgKaZaKLAumX1LKj2iRroo-ewdSNWkIieSSnrludmROX_kfOA.0qA-QVF9mgRFLFZh-Hdn8JvW46rBQa-rlcfhgdwBW34&dib_tag=se&keywords=dermalogica+conditioning+hand+%2B+body+wash&qid=1780827682&sprefix=dermalogica+conditioning+hand+%2B+body+wash%2Caps%2C429&sr=8-1&linkCode=ll2&tag=aadhithyan637-20&linkId=085ba070a1c318b03ae84cdee51a24c1&language=en_US&ref_=as_li_ss_tl"
},
{
  "id": 65,
  "name": "Blackstone Egg & Omelet Ring Kit (7 Piece Set)",
  "price": 37,
  "rating": 4.6,
  "reviews": 1235,
  "description": "Blackstone Egg & Omelet Ring Kit is a versatile breakfast cooking accessory set designed to help create perfectly shaped eggs, omelets, pancakes, sausage patties, hash browns, crab cakes, and breakfast sandwiches. The 7-piece set includes six egg rings (three round and three square) along with one large omelet ring, making it easy to prepare restaurant-style breakfasts at home or on a griddle. Featuring a non-stick design and convenient lift handles, these molds simplify cooking while ensuring consistent shapes and easy food release. Dishwasher-safe and reusable, the kit is ideal for Blackstone griddles, flat-top grills, and traditional cooking surfaces.",
  "features": [
    "7-piece breakfast cooking mold set",
    "Includes 3 round egg rings",
    "Includes 3 square egg rings",
    "Includes 1 large omelet ring",
    "Helps create perfectly shaped eggs and omelets",
    "Non-stick surface for easy food release",
    "Convenient lift handles for safe handling",
    "Easy to use on griddles and flat-top grills",
    "Dishwasher safe for easy cleanup",
    "Reusable and durable construction",
    "Ideal for breakfast sandwiches",
    "Suitable for pancakes, sausage patties, hash browns, and crab cakes",
    "Creates restaurant-style breakfast presentation",
    "Compatible with Blackstone griddles and other cooking surfaces",
    "Easy hand washing with soap and water"
  ],
  "materials": [
    "Food-Grade Non-Stick Silicone",
    "Heat-Resistant Plastic Components"
  ],
   image: "https://github.com/Aadhi6374/image/blob/main/egg%20shaper.png?raw=true",
 amazon: "https://www.amazon.com/Blackstone-5515-Omelet-Ring-Black/dp/B0919BB155?crid=1YVBUYOTF8FQ&dib=eyJ2IjoiMSJ9.DU_GIde4HhpwSI3qa0yXm2gLI3lrkpjgixKCt6vvls6RwcGxWNnasC7mNU4oo1xyvdjSKQnspeFEbY0bXjf6feuIbQ9rSvg-41d1hVWjjAtNZQlPetYKtHpbu0ncvHs32QY45hBfKSTWP0AOHfiPaVt3u_eW-lKXfCnveBeIRgAXvZVtThyZoN9rHyJNuKvdX2Julq7_dzBTEufbtIEDX_7nTA34VEIeeHYWGYnQ24rtkWa4LY97MMn3BogDeq3U8GlbqkovQwnlK2l2xISE5-2ExGInV1OAdR2XnPd2PU8.vmF4-0F_Fg07BTfZTOQGYKZhtybqY81Qe0uUYpfbdBk&dib_tag=se&keywords=Blackstone%2B5-Piece%2BEgg%2B%26%2BOmelet%2BBreakfast%2BKit%2B-%2BEgg%2BTools%2Bin%2BSilver%2B%7C%2BSize%2B12.4%22%2BH%2BX%2B9.2%22%2BW%2BX%2B2.8%22%2BD%2B%7C%2BPerigold&nsdOptOutParam=true&qid=1780840199&sprefix=blackstone%2B5-piece%2Begg%2B%26%2Bomelet%2Bbreakfast%2Bkit%2B-%2Begg%2Btools%2Bin%2Bsilver%2Bsize%2B12.4%2Bh%2Bx%2B9.2%2Bw%2Bx%2B2.8%2Bd%2Bperigold%2Caps%2C720&sr=8-1&th=1&linkCode=ll2&tag=aadhithyan637-20&linkId=aaf81c5be4c321d1fce50921b4ece5fa&language=en_US&ref_=as_li_ss_tl"
},
 {
  "id": 66,
  "name": "The Stay-at-Home Chef Slow Cooker Cookbook: 120 Restaurant-Quality Recipes You Can Easily Make at Home",
  "price": 15,
  "rating": 4.6,
  "reviews": 1276,
  "description": "The Stay-at-Home Chef Slow Cooker Cookbook by Rachel Farnsworth features 120 restaurant-quality recipes that can be easily prepared at home using a slow cooker or Crock-Pot. Designed for busy families and home cooks, the cookbook focuses on simple, budget-friendly meals made with everyday ingredients. It includes recipes for breakfasts, soups, stews, sandwiches, snacks, desserts, and hearty main dishes featuring beef, chicken, pork, pasta, grains, and beans. The book also provides expert slow cooker tips, meal storage guidance, troubleshooting advice, and recipe variations to help readers create delicious meals with confidence.",
  "features": [
    "120 restaurant-quality slow cooker recipes",
    "Created by Rachel Farnsworth, The Stay at Home Chef",
    "Suitable for slow cookers and Crock-Pot appliances",
    "Uses simple everyday ingredients",
    "Budget-friendly home cooking solutions",
    "Breakfast recipes included",
    "Soups and stews section",
    "Sandwich recipes included",
    "Dips and snack recipes",
    "Dessert recipes included",
    "Beef entrée recipes",
    "Chicken entrée recipes",
    "Pork entrée recipes",
    "Pasta, grains, and beans recipes",
    "Slow cooker usage tips and techniques",
    "Food storage and safety guidance",
    "Troubleshooting tips for common slow cooking issues",
    "Recipe variations and customization ideas",
    "Family-friendly meal planning resource",
    "Easy-to-follow instructions for every recipe"
  ],
  "materials": [
    "Paperback Book",
    "Printed Recipe Collection",
    "Cooking Instructions and Meal Planning Content"
  ],
  image: "https://github.com/Aadhi6374/image/blob/main/slow%20cooker%20recepiessss.png?raw=true",
 amazon: "https://www.amazon.com/Stay-at-Home-Chef-Cooker-Cookbook-Restaurant-Quality/dp/074402918X?crid=N0IWZTQFF8A2&dib=eyJ2IjoiMSJ9.eu00igXlAHmhOoiz3UNdCHh2EWNILs_suOtMdBIgvy87pZaiFPGBbT287AYGBPBG89Vq6ZCsONyzA4uEb2Lr-keKhYx06aIy1Z_6NFzCQv8rcP_S6xYNsIv49hPN6QRzSD0D43PGswo77p1a07ahuTrkaYgN_bBPwuBM1xQaamBbWYQHK3xm0S8u-Dkww9W5pRuC9KhEYjiqo3vtuGHFVd5E-COwwGIWccUUH9HKT6A.lxf299htjJsGIneQG6ht8jBDnq2MqfXqpElYHZVf-jM&dib_tag=se&keywords=Kohl%27s+The+Stay-at-Home+Chef+Slow+Cooker+Cookbook%2C+Multi&nsdOptOutParam=true&qid=1780915111&sprefix=kohl%27s+the+stay-at-home+chef+slow+cooker+cookbook%2C+multi%2Caps%2C616&sr=8-2&linkCode=ll2&tag=aadhithyan637-20&linkId=af627a780b97b30a2cca68a1e2c61202&language=en_US&ref_=as_li_ss_tl"
},
{
  "id": 67,
  "name": "Whiskey Smoker Kit with Torch - 6 Flavors Wood Chips, 2 Glasses, 2 Ice Ball Molds - Cocktail Smoker Infuser Kit",
  "price": 40,
  "rating": 4.6,
  "reviews": 5838,
  "description": "The ComboJoy Whiskey Smoker Kit is a premium cocktail smoker set designed to enhance whiskey, bourbon, scotch, and other beverages with rich natural smoky flavors. The complete kit includes an oak wood smoker top, torch lighter (butane not included), six natural wood chip flavors, two whiskey glasses, two ice ball molds, and a stainless steel mesh filter. Designed for both beginners and enthusiasts, the smoker infuses drinks and foods with cold smoke to create a sophisticated tasting experience. It can also be used with meats, cheese, dried fruits, BBQ, and other foods. Packaged in an elegant gift box, it makes an excellent Father's Day, birthday, Christmas, or special occasion gift for whiskey lovers and cocktail enthusiasts.",
  "features": [
    "Premium oak wood cocktail smoker",
    "Includes torch lighter (butane not included)",
    "Six natural wood chip flavors included",
    "Two premium whiskey glasses",
    "Two reusable ice ball molds",
    "Stainless steel mesh filter included",
    "Cold smoke infusion technology",
    "Enhances whiskey, bourbon, scotch, and cocktails",
    "Adds rich natural smoky flavor",
    "Easy-to-use smoking process",
    "Elegant gift box packaging",
    "Ideal Father's Day gift",
    "Suitable for birthdays and Christmas gifts",
    "Perfect for whiskey and bourbon enthusiasts",
    "Can be used for food and beverage smoking",
    "Enhances meats, cheese, and BBQ",
    "Compact and portable design",
    "Suitable for home bars and kitchens",
    "Great for outdoor gatherings and picnics",
    "Luxury cocktail-making experience"
  ],
  "materials": [
    "Oak Wood Smoker Top",
    "Torch Lighter (No Butane Included)",
    "6 Natural Wood Chip Flavors",
    "2 Whiskey Glasses",
    "2 Ice Ball Molds",
    "Stainless Steel Mesh Filter",
    "Gift Box Packaging"
  ],
  image: "https://github.com/Aadhi6374/image/blob/main/fathers%20day.png?raw=true",
 amazon: "https://www.amazon.com/Whiskey-Smoker-Kit-Torch-Fashioned/dp/B0BJV68C17?crid=2EACERWIPM3R1&dib=eyJ2IjoiMSJ9.C_7DgqLTVdxCkYBur1DUkNk3BdKx61SMdNcH8p18WL_8JsyARkUQLSaGA7Kn9_gGApeEDmy1DRJJGarGnXxe8152dwphGrXmKX2YUo5qMCHKMv4x1r35AR_u5XzjE7YNt_llIBKdQOzPYfaA8QwL5dIGzuJFSBKWKIHvzcxaXFQtu2IGmYEO_D8NTBLXSp_0zf4hULuL-dT82c8y2L25kHa8nSrM4Dn6dRNap8j5hXX65MfiypbF9f5n8WQuuY3C0pxtKKqtsHnFj0ICO7xshvWHxGuvv9GEasWGL8pn9xM.GY_W1Vo1z4ADiFKfz5ZCIoFm_-JwNvZRHEgWd_j_Ss4&dib_tag=se&keywords=fathers+day+gifts&qid=1780919114&s=home-garden&sprefix=fatherss%2Cgarden%2C624&sr=1-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1&linkCode=ll2&tag=aadhithyan637-20&linkId=ca433a6c23dc601be1ff77c7a50270a9&language=en_US&ref_=as_li_ss_tl"
},
{
  "id": 68,
  "name": "TESLYAR Wood Phone Docking Station for Men - Desk & Nightstand Organizer (Bourbon Brown)",
  "price": 40,
  "rating": 4.7,
  "reviews": 6984,
  "description": "The TESLYAR Wood Phone Docking Station is a premium multifunctional organizer designed to keep everyday essentials neatly arranged while charging a smartphone. Crafted from high-quality solid wood with a non-toxic protective finish, the docking station features dedicated compartments for phones, watches, wallets, keys, glasses, documents, earbuds, fitness trackers, and other daily accessories. Its sturdy construction, elegant bourbon brown finish, and smart space-saving design make it suitable for both modern and traditional interiors. Compatible with most iPhone and Samsung Galaxy models, the stand arrives in an eco-friendly gift box, making it an ideal gift for husbands, dads, sons, boyfriends, brothers, coworkers, and friends for Father's Day, birthdays, anniversaries, graduations, and Christmas.",
  "features": [
    "Multifunctional phone charging station",
    "Premium solid wood construction",
    "Elegant bourbon brown finish",
    "Handcrafted artisan workmanship",
    "Non-toxic protective coating",
    "Organizes daily essentials in one place",
    "Dedicated smartphone charging holder",
    "Watch storage compartment",
    "Wallet storage compartment",
    "Key holder section",
    "Glasses storage shelf",
    "Space for fitness trackers and bracelets",
    "Storage for documents and stationery",
    "Compatible with most smartphones",
    "Works with iPhone and Samsung Galaxy devices",
    "Strong and durable construction",
    "Smooth polished surface",
    "Suitable for desk or nightstand use",
    "Easy assembly with included instructions",
    "Fits modern and classic home décor styles",
    "Space-saving desktop organizer",
    "Eco-friendly rustic gift box included",
    "Ideal Father's Day gift",
    "Perfect birthday gift for men",
    "Great anniversary gift from wife",
    "Suitable gift for husband, dad, son, or boyfriend",
    "Professional office desk organizer",
    "Convenient bedside organizer",
    "Premium gift-ready packaging",
    "Keeps everyday essentials organized and accessible"
  ],
  "materials": [
    "Solid Wood Docking Station",
    "Phone Charging Stand",
    "Watch Holder",
    "Wallet Storage Compartment",
    "Key Holder Hooks",
    "Glasses Storage Shelf",
    "Accessory Organizer Sections",
    "Assembly Instructions",
    "Eco-Friendly Gift Box Packaging"
  ],
  image: "https://github.com/Aadhi6374/image/blob/main/fathers%20day%201.png?raw=true",
 amazon: "https://www.amazon.com/TESLYAR-Organizer-Anniversary-Nightstand-Graduation/dp/B08YJR9HDL?crid=27SJC36FPX3I6&dib=eyJ2IjoiMSJ9.vAQieDyjCf58pfZi1MkmyBt48Z64eFE-l0wqbXbPwkwY1iWjvXU_VJhCEsXX94gLs3sVKOSyo4TAxoFaOl-PHJqSllcZ10SdprPbMl7q4TOw4ud5JVOqHdn9ehKf34AExK3CMLBwdKtbi10JQ26lnsO7RhEZXV0Llh1XltxmH2QjUeCO_qSfrdk4RDZSgwcMFrmI3Ztb3hdZHCWEfqq-aLuTKNXqSKGRjMXA7T-jGXfHGIYkfsh3e3YZeCH6Z0r_aTXEL3I_c2NSB2Pv-B9xX6fDfygJbT3T8HSzrLeJjZU.jEVyG4ddMah61PysSvxdKaGKY0gHu082XQRZY3LAslQ&dib_tag=se&keywords=Personalized%2BDocking%2BStation&qid=1780934030&s=home-garden&sprefix=fathers%2Bday%2Bgifts%2Cgarden%2C2278&sr=1-4&th=1&linkCode=ll2&tag=aadhithyan637-20&linkId=0fa6d63a022c6b07bf1a3b2c742417bb&language=en_US&ref_=as_li_ss_tl"
},
{
  "id": 69,
  "name": "Salt & Stone Body Wash with Antioxidants for Deep Moisture - Santal & Vetiver (15.2 fl oz)",
  "price": 36,
  "rating": 4.3,
  "reviews": 8186,
  "description": "Salt & Stone Body Wash with Antioxidants for Deep Moisture is a premium skincare-infused body cleanser designed to gently cleanse while hydrating and nourishing the skin. Featuring a rich aromatic gel formula, it creates a luxurious lather that leaves skin feeling soft, smooth, refreshed, and delicately scented. Enriched with prebiotics, seaweed extracts, Vitamin C, and niacinamide, the body wash helps balance the skin microbiome while supporting healthy-looking, hydrated skin. The award-winning formula provides a deep clean without stripping moisture, making it suitable for daily use by both men and women. The signature Santal & Vetiver fragrance combines warm woody notes with creamy undertones, creating a sophisticated luxury shower experience. Made with clean ingredients, this vegan and cruelty-free formula is free from sulfates, parabens, dyes, phthalates, and harsh chemicals.",
  "features": [
    "Deep moisture body wash formula",
    "Rich hydrating gel cleanser",
    "Creates luxurious lather",
    "Leaves skin soft and smooth",
    "Skincare-infused body wash",
    "Contains prebiotics for skin balance",
    "Enriched with seaweed extracts",
    "Contains Vitamin C",
    "Contains niacinamide",
    "Supports healthy hydrated skin",
    "Deep cleans without drying skin",
    "Award-winning body wash formula",
    "Suitable for daily use",
    "Unisex formula for men and women",
    "Warm woody Santal & Vetiver scent",
    "Creamy fragrance profile",
    "Long-lasting fresh scent",
    "Sulfate-free formula",
    "Paraben-free formula",
    "Dye-free formula",
    "Phthalate-free formula",
    "Clean beauty ingredients",
    "Vegan body wash",
    "Cruelty-free formula",
    "Leaping Bunny Certified",
    "Suitable for all skin types",
    "Balances skin microbiome",
    "Refreshing shower experience",
    "Premium luxury body care",
    "15.2 fl oz bottle"
  ],
  "ingredients": [
    "Prebiotics",
    "Seaweed Extracts",
    "Vitamin C",
    "Niacinamide",
    "Antioxidants",
    "Hydrating Cleansing Agents",
    "Santal & Vetiver Fragrance Blend",
    "Purified Water",
    "Skin Conditioning Ingredients",
    "Plant-Based Cleansing Components"
  ],
  image: "https://github.com/Aadhi6374/image/blob/main/body%20washhhhh1.png?raw=true",
 amazon: "https://www.amazon.com/Salt-Stone-Antioxidants-Moisture-Hydrated/dp/B0C23Q2H61?crid=3F51UFWN63RSW&dib=eyJ2IjoiMSJ9.fflePuXVpW24mpG1U57nA5XekQHA_XNueze9hOy25JnUinKAsVA1ZrxQpwmlGVykBVB7p9c10dE8MMpROsMv7pXIcFHzSmwIeKDPcpiXRMsdt789YcqaqqyFipb2v7amsLFGgZ4cNgzqn2EuCwxFWub-7BGhzKIMW9KHLXMLc-FYSRdPmNRAa830emD0v2CusacZNWz4Y3YR12jcffk8lnPOIw9LfMHhH_TckzTm32M4HYKNzTt1Idsf1SG1eLlqpIKdUaza0wv3Yy6oHWmVl7WEaFLgwCP5h8EblHpOeFw.OJkQWG8SwAyyu6fWCwACgJJi-KetMvpYQchRxEU3lrI&dib_tag=se&keywords=Salt%2B%26%2BStone%2BSantal%2B%26%2BVetiver%2BRefillable%2BBody%2BWash%2Bwith%2BNiacinamide%2B%2B%2BProbiotic%2B15.2%2Boz%2F450%2Bml%2B15.2%2Boz%2F450%2Bml%2B%2436.00&nsdOptOutParam=true&qid=1780989118&sprefix=salt%2B%26%2Bstone%2Bsantal%2B%26%2Bvetiver%2Brefillable%2Bbody%2Bwash%2Bwith%2Bniacinamide%2B%2B%2Bprobiotic%2B15.2%2Boz%2F450%2Bml%2B15.2%2Boz%2F450%2Bml%2B%2436.00%2Caps%2C562&sr=8-5&th=1&linkCode=ll2&tag=aadhithyan637-20&linkId=9702f36aae8cbb538f4cc7bb2ea6b746&language=en_US&ref_=as_li_ss_tl"
},
{
  "id": 70,
  "name": "Zojirushi 3 Cup Rice Cooker/Steamer (White)",
  "price": 59,
  "rating": 4.5,
  "reviews": 12178,
  "description": "Zojirushi 3 Cup Rice Cooker/Steamer is a compact and easy-to-use electric rice cooker designed for preparing perfectly cooked rice with minimal effort. Featuring a simple single-switch control system, this cooker is ideal for small households, students, apartments, and everyday meal preparation. The durable nonstick inner cooking pan ensures easy food release and convenient cleaning, while the see-through glass lid allows users to monitor cooking progress without lifting the cover. Stay-cool side handles and lid knob provide safe handling and portability. The cooker can prepare up to 3 cups of uncooked rice, producing fluffy and evenly cooked rice every time. Its lightweight design, reliable performance, and included measuring cup make it a practical kitchen appliance for cooking rice, steaming vegetables, and preparing simple meals.",
  "features": [
    "3-cup uncooked rice capacity",
    "Compact countertop design",
    "Easy-to-use controls",
    "Rice cooker and steamer function",
    "See-through glass lid",
    "Stay-cool lid knob",
    "Stay-cool carrying handles",
    "Durable nonstick inner cooking pan",
    "Easy food release",
    "Simple cleaning process",
    "Even rice cooking performance",
    "Ideal for small households",
    "Suitable for apartments and dorms",
    "Lightweight and portable",
    "Corded electric power source",
    "Consistent cooking results",
    "Convenient everyday meal preparation",
    "Includes plastic measuring cup",
    "Suitable for white rice cooking",
    "Energy-efficient cooking appliance",
    "Space-saving kitchen appliance",
    "Reliable Zojirushi quality",
    "Hand-washable cooking pan",
    "Easy maintenance design",
    "Safe transport handles",
    "Glass lid for cooking visibility",
    "Beginner-friendly rice cooker",
    "White finish design"
  ],
  "materials": [
    "Nonstick Inner Cooking Pan",
    "Tempered Glass Lid",
    "Heat-Resistant Plastic Handles",
    "Stay-Cool Lid Knob",
    "Electrical Heating Element",
    "Metal Cooker Body",
    "Plastic Measuring Cup",
    "Corded Electric Power System"
  ],
  image: "https://github.com/Aadhi6374/image/blob/main/kitchen%20product.png?raw=true",
 amazon: "https://www.amazon.com/Zojirushi-NHS-06-3-Cup-Uncooked-Cooker/dp/B00004S575?crid=11QKR3R04NVCL&dib=eyJ2IjoiMSJ9.iWfnh_c3GcLNhUjzssZc5DEHo0r_Lq-YcHWYwb9TeMcH1SEosMmwSXHtJLeEOpr5CrpSmnb7QlUrb23M_K30fG8h7nMGgo-mr73r5GDlqiXFsbUNflloKcOwa8tVVCzinfRuai9-V_nU6XHF-NM2D_oytpMhT_LH3n3I09-UxfidSl1m3ECapRIEwmupqyqWgTyw7XB46cy7Hkd7ODdfyixVORJsrurcXtUfGkzXINTHEDgAMBp_8LlfA29EvWq-_fEULredBnW3xv8hBLy7ObbZH5bOUyWa6OfwOjjKHN0.mgIeNh_1scRBIWWVBDBBZ1-dTIwCv3_aKZCJBiVJIgU&dib_tag=se&keywords=Eurostar%2BRc603%2B3-Cup%2BRice%2BCooker%2C%2BWhite&qid=1781086610&s=home-garden&sprefix=eurostar%2Brc603%2B3-cup%2Brice%2Bcooker%2C%2Bwhite%2Cgarden%2C666&sr=1-3&th=1&linkCode=ll2&tag=aadhithyan637-20&linkId=e1b8c5e2f1537643480a2f2968b0155c&language=en_US&ref_=as_li_ss_tl"
},
{
  "id": 71,
  "name": "Casafield Half Moon Laundry Hamper with Lid and Removable Liner Bag - Espresso Dark Brown",
  "price": 70,
  "rating": 4.6,
  "reviews": 263,
  "description": "Casafield Half Moon Laundry Hamper with Lid and Removable Liner Bag is a stylish and functional laundry storage solution designed to keep clothes, towels, and household linens neatly organized. Handwoven from sustainable water hyacinth, this large hamper features a unique half-moon shape that fits efficiently against walls while adding a natural farmhouse-inspired accent to any room. The attached hinged lid conceals laundry for a clean, clutter-free appearance, while the removable cloth liner bag makes transporting laundry easy and convenient. Built-in woven carry handles enhance portability, making it simple to move laundry from room to room. Combining decorative appeal with practical storage, this eco-friendly hamper is ideal for bedrooms, bathrooms, laundry rooms, and closets.",
  "features": [
    "Half-moon shaped space-saving design",
    "Handwoven sustainable water hyacinth construction",
    "Attached hinged lid for concealed storage",
    "Removable cloth liner bag included",
    "Hook-and-loop liner attachment system",
    "Large capacity laundry storage",
    "Stores clothes, towels, and linens",
    "Decorative farmhouse-style appearance",
    "Eco-friendly natural materials",
    "Woven handcrafted design",
    "Comfortable built-in carry handles",
    "Portable and lightweight structure",
    "Keeps laundry neatly organized",
    "Reduces visible household clutter",
    "Suitable for bedrooms and bathrooms",
    "Espresso dark brown finish"
  ],
  "materials": [
    "Natural Water Hyacinth",
    "Removable Cloth Liner Bag",
    "Hook-and-Loop Fasteners",
    "Handwoven Carry Handles",
    "Hinged Lid Structure",
    "Internal Support Frame"
  ],
  image: "https://github.com/Aadhi6374/image/blob/main/laundry.png?raw=true",
 amazon: "https://www.amazon.com/Casafield-Laundry-Hamper-Removable-Liner/dp/B0CQKFWLJF?crid=8473LQRUZ8KJ&dib=eyJ2IjoiMSJ9.g_wG1MHjNyF47KpmxcuT2XaIjNDeuky8nr9RBcMRx3HpylgC5gGd9Q_dylF6WNb4ZuWV7BD11TCFi58YKGqT658nOZIm3DgGjM-rwo7j4x7fu8kfo7S6bH3j4j8BtLhNtyRl9Vu98OY6E_RdzxYJzx9hUmW-K60B4kz4sVo7Lu8xFvzsJFB3ktRqpRTe6vjCzSW0_0q9NZgVsYcG9OH3WP97ibMzZHaT3EDncJTNylDVagHF3OXL1M58HqDrS7q83o2J3b733eN9AGew6U4lhdKNU6j0axJNSRXZTy2XUvg.5N7iH6dADnBVeQ67jpnlFYqBFu_5jEEzTAjcAYN7-0k&dib_tag=se&keywords=Casafield%2BHalf%2BMoon%2BLaundry%2BHamper%2Bwith%2BLid%2Band%2BRemovable%2BLiner%2BBag%2B-%2BEspresso%2BDark%2BBrown%2C%2BWoven%2BWater%2BHyacinth%2BLaundry%2BBasket%2Bfor%2BClothes%2Band%2BTowels&nsdOptOutParam=true&qid=1781100733&s=home-garden&sprefix=casafield%2Bhalf%2Bmoon%2Blaundry%2Bhamper%2Bwith%2Blid%2Band%2Bremovable%2Bliner%2Bbag%2B-%2Bespresso%2Bdark%2Bbrown%2C%2Bwoven%2Bwater%2Bhyacinth%2Blaundry%2Bbasket%2Bfor%2Bclothes%2Band%2Btowels%2Cgarden%2C372&sr=1-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&linkCode=ll2&tag=aadhithyan637-20&linkId=7d4f09cf7c604887aa62cdfc470a39b4&language=en_US&ref_=as_li_ss_tl"
},
{
  "id": 72,
  "name": "Elite Gourmet EWMST-325R Triple Slow Cooker Buffet Server, 3 x 2.5 Qt Capacity, Red",
  "price": 65,
  "rating": 4.7,
  "reviews": 2851,
  "description": "Elite Gourmet EWMST-325R Triple Slow Cooker Buffet Server is a versatile kitchen appliance designed for preparing, warming, and serving multiple dishes simultaneously. Featuring three removable 2.5-quart oval stoneware pots, this buffet-style slow cooker allows users to cook different recipes at separate temperatures using individual controls. Ideal for family gatherings, parties, holiday meals, potlucks, and entertaining, the unit includes low, high, and warm settings for each cooker, ensuring optimal cooking flexibility. Integrated lid rests provide a convenient place to hold lids while serving, reducing mess and saving counter space. The removable ceramic pots and tempered glass lids are dishwasher safe for easy cleanup. Finished in a vibrant red color, this multi-cooker combines functionality, convenience, and attractive presentation for everyday cooking and special occasions.",
  "features": [
    "Triple slow cooker buffet server design",
    "Three separate 2.5-quart cooking pots",
    "Total cooking capacity of 7.5 quarts",
    "Independent temperature controls",
    "Low, High, and Warm heat settings",
    "Cook and serve three dishes simultaneously",
    "Removable oval stoneware pots",
    "Dishwasher-safe ceramic pots",
    "Dishwasher-safe tempered glass lids",
    "Built-in lid rests for convenience",
    "Ideal for parties and family gatherings",
    "Buffet-style serving functionality",
    "Keeps food warm for extended periods",
    "Suitable for appetizers, entrees, and side dishes",
    "Easy-to-clean exterior housing",
    "Compact countertop design",
    "420-watt power output",
    "Durable aluminum construction",
    "Red finish for stylish presentation",
    "Includes recipe ideas and cooking inspiration"
  ],
  "materials": [
    "Aluminum Housing",
    "Stoneware Ceramic Pots",
    "Tempered Glass Lids",
    "Plastic Control Knobs",
    "Metal Lid Rests",
    "Electrical Heating Elements"
  ],
  image: "https://github.com/Aadhi6374/image/blob/main/slow%20cookerrrrrrrr.png?raw=true",
 amazon: "https://www.amazon.com/Elite-Platinum-Adjustable-Dishwasher-Safe-Capacity/dp/B07D7MF5HF?crid=1EUEER4HMACWF&dib=eyJ2IjoiMSJ9.oP-yHJRk-cyvca5AImprG8DaW7vGQSnvyeUc54oYWfegpMkT45T3NmdnTzFFj0fR2utdPDB0qnuyHbyRnwQYkQRSF1hQndNWj549Hx1RAsA-rjx2tfm0pnhvXjEokQM2l74kkMzYA1T2VWFBNz8-6A4_mwCoUPZEtgCwvtGWtp_wKNLDNNJUxNgLZLsz3gSS5EUIfPuUKqEI4SxAFUMDDQV_FEh7tJUp0RPom0wUO8xXd1ezlGBk55F4Rt4h_O0dL-B_BKqJc4a7ZeVoe5Zt6H1Pnzwq1ZiI5wmLP9KA7XE.MuOSXYzyvK-982zWdKTAkXXShQGmaV4dTdcUywqGQ5Y&dib_tag=se&keywords=Heynemo%2BTriple%2BSlow%2BCooker%2BBuffet%2BServers%2Band%2BWarmer%2Bwith%2BAdjustable%2BTemp%2C%2BStainless%2BSteel%2BLid%2BRests%2C%2BRemovable%2BCeramic%2BPot%2C%2B4.5%2BQT%2C%2BBlack&nsdOptOutParam=true&qid=1781169297&s=home-garden&sprefix=king%2Bkooker%2Btall%2Bcooker%2Bsingle%2Bburner%2Bhigh%2Bpressure%2Bpropane%2Bjambalaya%2Bkit%2B26.5%2Bh%2Bx%2B20.0%2Bw%2Bx%2B20.0%2Bd%2Bin%2Bblack%2Fgraysteel%2Cgarden%2C926&sr=1-5&th=1&linkCode=ll2&tag=aadhithyan637-20&linkId=8c038f9aa44c43cde0722f5db6d7d82d&language=en_US&ref_=as_li_ss_tl"
},
{
  "id": 73,
  "name": "Tide Laundry Detergent Liquid, Original Scent, 64 Loads, 80 FL OZ",
  "price": 19,
  "rating": 4.8,
  "reviews": 69880,
  "description": "Tide Laundry Detergent Liquid, Original Scent is a powerful concentrated laundry detergent formulated to remove tough stains, grease, and everyday dirt while providing long-lasting freshness. Designed to work on 100% of common stains, this liquid detergent features a 6X boosted cleaning formula with enhanced stain-fighting performance compared to Tide Simply. Suitable for a variety of washing machines, water temperatures, and wash cycles, including cold water washes, it helps keep clothes looking clean and smelling fresh throughout the day. The 80-fluid-ounce bottle delivers up to 64 loads, making it a reliable choice for households seeking effective stain removal and consistent laundry care.",
  "features": [
    "6X boosted cleaning performance",
    "Works on 100% of common stains",
    "10X more grease-fighting ingredients versus leading bargain detergent",
    "Concentrated liquid detergent formula",
    "Provides enhanced stain removal power",
    "Original Tide scent",
    "Long-lasting freshness throughout the day",
    "Suitable for everyday laundry use",
    "Compatible with standard washing machines",
    "Effective in cold water washes",
    "Suitable for multiple water temperatures",
    "Designed for a variety of wash cycles",
    "Removes dirt, stains, and grease effectively",
    "High-efficiency cleaning formula",
    "Easy-pour liquid detergent bottle",
    "Phosphate-free formula",
    "80 fluid ounce bottle",
    "Provides up to 64 loads",
    "Trusted Tide cleaning performance",
    "Ideal for family laundry needs"
  ],
  "ingredients": [
    "Water",
    "Surfactants",
    "Cleaning Agents",
    "Fragrance",
    "Enzymes",
    "Stain-Fighting Additives",
    "Preservatives",
    "Liquid Detergent Base"
  ],
  image: "https://github.com/Aadhi6374/image/blob/main/laundry1.png?raw=true",
 amazon: "https://www.amazon.com/Tide-Laundry-Detergent-Liquid-Original/dp/B085V5PPP8?crid=17XD1HGKRHVDT&dib=eyJ2IjoiMSJ9.U1LofJwRWo_FmjAm2AWL3j7DDUJEMZRKEEZ88YbW4YHEe12lYiaemXAPpKGcxi_8EL8OYSis6e-tXeku54Si0bR2erEnhGOqlyV3yIwsGAGPWWpYbuDAwmHc7qwtzGQV22eUqdZiDMvwsx1SJX68wzB2vMP7WvavTpzDY3ogm3pVRMmknDq1a1x24LAGAC4V8XqbexYhFnJP15B_wX2Ez7j_BLyMyJIE-3I2STMi-PdjvL17gmKoXuT-J2nu2TYr7bfvvETvHnyzhNhQkLctHsUzoWQOAXh05lJcCy1jUFw.c1T8Z217yaVEFtmyNzCd5MPsCN4iZcxVZyanJRHm0sM&dib_tag=se&keywords=Laundry%2BDetergent%2B%7C%2BRosemary%2B%26%2BMint%2B-%2B5%2BGallon%2BEco%2BJug%2Bwith%2BPump&nsdOptOutParam=true&qid=1781244107&sprefix=laundry%2Bdetergent%2Brosemary%2B%26%2Bmint%2B-%2B5%2Bgallon%2Beco%2Bjug%2Bwith%2Bpump%2Caps%2C874&sr=8-23&th=1&linkCode=ll2&tag=aadhithyan637-20&linkId=b71b7fa1ccbb7a18a1a93f2ad5c99f93&language=en_US&ref_=as_li_ss_tl"
} ,
{
  "id": 74,
  "name": "Project Cloud 100% Genuine Leather Flat Sandals for Women 2026 Cork Footbed Memory Foam Arch Support Slides (Venita)",
  "price": 35,
  "rating": 4.4,
  "reviews": 7638,
  "description": "Project Cloud Venita Women's Flat Sandals are crafted from 100% genuine leather and designed to deliver premium comfort, durability, and everyday style. Featuring a plush memory foam insole and natural cork footbed, these sandals provide excellent cushioning, lightweight support, flexibility, and all-day arch support. The adjustable dual-buckle straps allow for a secure and customized fit, while the open-toe slide design keeps feet cool and comfortable during warm weather. Built with a durable EVA outsole for reliable traction and wear resistance, these sandals are ideal for casual outings, vacations, beach trips, walking, and daily wear. Their combination of comfort-focused construction and timeless style makes them a versatile addition to any summer wardrobe.",
  "features": [
    "100% genuine leather upper construction",
    "Premium quality leather for durability",
    "Memory foam cushioned insole",
    "Natural cork footbed for comfort and support",
    "Lightweight and flexible design",
    "All-day arch support",
    "Adjustable dual-buckle straps",
    "Customizable and secure fit",
    "Open-toe slide sandal design",
    "Flat heel for everyday comfort",
    "Durable EVA outsole",
    "Excellent traction and grip",
    "Wear-resistant outsole construction",
    "Suitable for indoor and outdoor use",
    "Slip-on convenience",
    "Water-resistant design",
    "Slip-resistant outsole",
    "Ideal for walking and casual wear",
    "Perfect for beach and vacation use",
    "Stylish everyday summer footwear"
  ],
  "materials": [
    "Genuine Leather Upper",
    "Memory Foam Insole",
    "Natural Cork Footbed",
    "Ethylene Vinyl Acetate (EVA) Outsole",
    "Adjustable Metal Buckles",
    "Synthetic Support Materials"
  ],
  image: "https://github.com/Aadhi6374/image/blob/main/slipper11.png?raw=true",
 amazon: "https://www.amazon.com/Project-Cloud-Comfortable-Essentials-Vacation/dp/B0FW857DCT?crid=QNIAP7D0AHDA&dib=eyJ2IjoiMSJ9.CPqwfMbKBk6Y_y1wQWxMZXvp-5DoyuPJznb2--knJ3i3q57KX72uPHY7KSM5M6x9tyPQr0KG9I4T_kk5RwcOlGdxSY-XGSngCFWBD6gxH-fiQRlAFxJWcSBv0xITMcDu-n5bhPNSbtORgrfMSBhRnX2FXozgw47vtt63V73FPJ-K03tMmvz9ThjvbDMbQWPRQlSuWBF3GODInTX3eIR6DGLv8p4fDnz5gJLusO3jZOH8-xIP7XdEBzYgYjEpYh41h6t7Ai5e9huYKhaGvll2VydYNB-VV9-kHLJhS_ie1Tk.MRqYuexhJ-w7wcH5pNdm_UJxQTtvOwO3zPcn8VRvJpY&dib_tag=se&keywords=top%2Bproducts%2Bon%2Bamazon%2B2026&qid=1781271093&sprefix=top%2Bproduct%2Caps%2C468&sr=8-11&th=1&psc=1&linkCode=ll2&tag=aadhithyan637-20&linkId=29129fbbbc98bc3c90cc4f41035a57a2&language=en_US&ref_=as_li_ss_tl"
},
{
  "id": 75,
  "name": "SINGAYE 6 Shelves Bathroom Organizer and Storage Shelf Wire Closet Metal Pantry Kitchen Small Garage Shelving Unit Black 10\" D x 16\" W x 60\" H",
  "price": 35,
  "rating": 4.4,
  "reviews": 19103,
  "description": "SINGAYE 6-Tier Wire Shelving Unit is a versatile freestanding storage rack designed to maximize organization in narrow spaces and room corners. Constructed with durable stainless steel wire mesh and a rust-resistant coating, this shelving unit provides reliable storage for bathrooms, kitchens, laundry rooms, garages, offices, and pantries. The tightly woven wire shelves help prevent small items from falling through, while the adjustable shelf heights allow users to customize storage according to their needs. Featuring a tool-free assembly design and ground-leveling feet for improved stability, this lightweight yet sturdy organizer supports up to 720 lbs of total weight capacity. Its compact footprint and durable construction make it an ideal storage solution for home and utility spaces.",
  "features": [
    "6-tier wire shelving storage rack",
    "720 lbs total weight capacity",
    "Freestanding storage design",
    "Tool-free assembly",
    "Adjustable shelf heights",
    "Stainless steel wire mesh shelves",
    "Tightly woven shelf construction",
    "Prevents small items from falling through",
    "Rust-resistant protective coating",
    "Corrosion-resistant finish",
    "Ground-leveling feet for stability",
    "Compact narrow-space design",
    "Ideal for room corners",
    "Suitable for bathroom storage",
    "Perfect for kitchen organization",
    "Laundry room storage solution",
    "Garage storage organizer",
    "Pantry shelving unit",
    "Office storage rack",
    "Easy DIY installation"
  ],
  "materials": [
    "Stainless Steel Wire Mesh",
    "Carbon Steel Frame",
    "Rust-Resistant Coating",
    "Metal Support Poles",
    "Adjustable Plastic Connectors",
    "Leveling Feet Components"
  ],
  image: "https://github.com/Aadhi6374/image/blob/main/new%20table.png?raw=true",
 amazon: "https://www.amazon.com/SINGAYE-Bathroom-Organizers-Shelving-Organization/dp/B0DP74GCC8?dib=eyJ2IjoiMSJ9.LFMHZA06RXPZeu5OE178jctXxx_5-aq1C5hIXT_kHYQQE_XAaha0IqvfxJfYg1tbhDaLGbf_Nmotx7uGp0-gzmDzRYQN7Ver7I-oSRRrlHilyk0IASvl2itkpJZKuGtAu-RpSSIwJskaY9VvoajLIhZ-yVVp1qtl5O1IVpoWlOwpYCXpqpy3GnSoivIToe2roY6mdgpGVkr1GDKB7iy0yqLZTk2FRbOU5kpX-ttMAPpmHQHMrnisPk36eZa0tagviMte62U9XAe1YbEeaPWWOQM0G9wsVzN6ba4DJG8FWvQ.c9oKT7flN_FaQUMxROgk8su5eDweTXshtthd_DWqgnU&dib_tag=se&keywords=2-Tier%2BBathroom%2BShelf%2C%2BTowel%2BStorage%2Bfor%2BBathroom%2B-%2BBlack%2B%2F%2B20%2Bx%2B10%2Bx%2B6%2B%23%2B50%2Bx%2B25%2Bx%2B15&nsdOptOutParam=true&qid=1781327720&sr=8-11&th=1&linkCode=ll2&tag=aadhithyan637-20&linkId=cb83bf1f94d41190256656badaed9ba4&language=en_US&ref_=as_li_ss_tl"
},
 {
  "id": 76,
  "name": "17\" Purple Pressed Flower Resin Wind Chime, Handmade Suncatcher Mobile, Boho Hanging Decor, Floral Crystal Window Art",
  "price": 30,
  "rating": 4.7,
  "reviews": 2,
  "description": "This 17-inch Purple Pressed Flower Resin Wind Chime is a handcrafted decorative hanging ornament designed to bring beauty, light, and gentle sound to indoor and outdoor spaces. Featuring real pressed flowers preserved in clear resin, this boho-inspired suncatcher creates colorful reflections while showcasing intricate floral details. The hanging elements produce soft, soothing chime sounds when moved by the breeze, adding a peaceful ambiance to patios, gardens, porches, windows, and living spaces. Built with durable resin components and decorative crystal accents, this wind chime combines artistic craftsmanship with long-lasting durability. Its compact yet eye-catching design makes it a unique decorative accent and a thoughtful gift for flower lovers, boho décor enthusiasts, and anyone who appreciates handcrafted nature-inspired art.",
  "features": [
    "17-inch handcrafted wind chime",
    "Real pressed flowers preserved in resin",
    "Purple floral boho-inspired design",
    "Decorative suncatcher mobile",
    "Soft and soothing chime sounds",
    "Handmade artisan craftsmanship",
    "Crystal accent embellishments",
    "Creates colorful light reflections",
    "Indoor and outdoor décor piece",
    "Suitable for windows and sunlit spaces",
    "Perfect for patios and porches",
    "Garden hanging decoration",
    "Lightweight hanging design",
    "Nature-inspired floral artwork",
    "Durable resin construction",
    "Long-lasting decorative finish",
    "Elegant bohemian home accent",
    "Relaxing ambient sound effect",
    "Unique handcrafted gift idea",
    "Easy hanging installation"
  ],
  "materials": [
    "Pressed Natural Flowers",
    "Clear Resin",
    "Crystal Beads",
    "Metal Hanging Chains",
    "Metal Ring Frame",
    "Decorative Hanging Components"
  ],
 image: "https://github.com/Aadhi6374/image/blob/main/new%20home%20decor.png?raw=true",
 amazon: "https://www.amazon.com/Pressed-Handmade-Suncatcher-Hanging-Ornament/dp/B0H2HKR26Y?crid=3BS416UDU5NIU&dib=eyJ2IjoiMSJ9.BYtJFT87ML5bZda66Wrtfyglojew1Tat3jwZaYm9A7Nygj3sevRlfOibrZc5-weMjmuZqgD-dAD77SpU0BdMLzwAA9kjfYXXq34LZeu1imT4JlcpqLMSPt-MNnIY1aK_wxUphv-8QT060R0aNj9iakdxWc5N5kWrN_dOPYnwsTTeZp7wOSmiVcYIYhI7PRI2-dg29CYzxZK96mC7yWb19WGkQGCZtKep-0WZCBR1eimpzavRJR4o8t9Y1aS-l-hmEY1mVVLba3zBD7tPSxgjPsmmiUgKmkBzT81eMkITePc.0mrmD1UUO7DoRzC8fLjWD3pOlb1XPVxsCMmYk4Je1zo&dib_tag=se&keywords=Pressed+Flower+Resin+Hanging+Mobile+%2F+Floral+Suncatcher&nsdOptOutParam=true&qid=1781364758&sprefix=illumea+floral+feast+diamond+handmade+suncatchers+hanging+pendant%2Caps%2C1569&sr=8-2&linkCode=ll2&tag=aadhithyan637-20&linkId=136fd3faee1d56ce5582c523424a4a72&language=en_US&ref_=as_li_ss_tl"
},
 {
  "id": 77,
  "name": "ROYAL CRAFT WOOD Premium Foldable Bathtub Tray Caddy",
  "price": 40,
  "rating": 4.6,
  "reviews": 24979,
  "description": "ROYAL CRAFT WOOD Premium Foldable Bathtub Tray Caddy is a luxury bamboo bath tray designed to transform ordinary baths into a relaxing spa-like experience. Crafted from high-quality natural bamboo with a protective waterproof lacquer coating, this expandable bathtub caddy adjusts from 29.5 to 43 inches to fit most standard and oversized tubs. The tray features dedicated compartments for bath essentials, including a wine glass holder, phone and tablet stand, book holder, candle holder, and removable accessory trays for snacks, towels, and personal care items. Slip-resistant silicone grips keep the caddy securely positioned while in use. Its foldable design allows for convenient storage when not needed, making it an ideal bathroom accessory for self-care, relaxation, date nights, and thoughtful gift-giving occasions.",
  "features": [
    "Expandable bathtub tray design",
    "Adjusts from 29.5 to 43 inches",
    "Fits most standard bathtubs",
    "Premium natural bamboo construction",
    "Waterproof protective lacquer coating",
    "Luxury spa experience at home",
    "Built-in wine glass holder",
    "Phone and tablet stand",
    "Book holder slot",
    "Dedicated candle holder",
    "Two removable accessory trays",
    "Slip-resistant silicone grips",
    "Foldable space-saving design",
    "Easy to store after use",
    "Durable handcrafted construction",
    "Suitable for solo relaxation",
    "Perfect for romantic bath setups",
    "Holds bath essentials securely",
    "Includes bonus bamboo soap dish",
    "Ideal gift for mothers and homeowners"
  ],
  "materials": [
    "Natural Bamboo Wood",
    "Protective Lacquer Coating",
    "Silicone Grips",
    "Metal Hardware",
    "Bamboo Soap Dish"
  ],
 image: "https://github.com/Aadhi6374/image/blob/main/bath%20tubbb.png?raw=true",
 amazon: "https://www.amazon.com/ROYAL-CRAFT-WOOD-Accessories-Housewarming/dp/B01C4IS4Q2?crid=ECMITVG7Y7MW&dib=eyJ2IjoiMSJ9._Cu2bb-G0dRvagwMRgt4yAEok-blFUYy-KZKHLSOgZIJXACj_2-y46ceYRH2_PMvCsEntEksyOP-Ze0ItAxz_6e1gmvjeecO_MLn6nMlT5udNBWlUS2iAFKtDoFjCVQoHz6pKi4GmxMRap9sdcrFQ4xNSe8-WFCBEpSHU_nV1pgyY3Ey4X4u6uNtBDbqrfdEuJlScscBh0DfsBsGIPJSviOu1cXNmRAGUQF2RlcSIzs8OG4PySjarg_PrTNYVK_nXduoGFe40MtvltHc76p8Ven8cSUUnlPltWwT_yAtFNY.I6YcrPKMiGMtLc7DWW3-MiKxv9rRhKy8AspTZwmhewQ&dib_tag=se&keywords=Royal%2BCraft%2BWood%2BLuxury%2BBamboo%2BBathtub%2BCaddy%2BTray&nsdOptOutParam=true&qid=1781438735&sprefix=royal%2Bcraft%2Bwood%2Bluxury%2Bbamboo%2Bbathtub%2Bcaddy%2Btray%2Caps%2C717&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&linkCode=ll2&tag=aadhithyan637-20&linkId=c77ad811cb0b87af96ccbd1c8dd68446&language=en_US&ref_=as_li_ss_tl"
},
{
  "id": 78,
  "name": "Ukeetap 2 Pack Multi-Purpose Pull-Out Storage Organizers",
  "price": 25,
  "rating": 4.6,
  "reviews": 5865,
  "description": "Ukeetap 2 Pack Multi-Purpose Pull-Out Storage Organizers are versatile storage solutions designed to maximize space and keep household essentials neatly organized. Each organizer measures 15 x 8 x 14.8 inches and is ideal for under-sink cabinets, bathroom storage, kitchen organization, and under-cabinet spaces. Constructed from durable thick plastic and reinforced metal tubes, these organizers provide excellent stability and weight-bearing capacity while resisting deformation over time. The convenient pull-out bottom drawer allows quick access to stored items, making it easier to organize cleaning supplies, toiletries, beauty products, pantry items, and household accessories. Featuring a tool-free assembly design, the organizers can be installed within seconds, providing a practical and efficient storage solution for any home.",
  "features": [
    "2-pack value storage organizer set",
    "15 x 8 x 14.8 inch dimensions",
    "Ideal for under-sink storage",
    "Suitable for bathroom organization",
    "Perfect for kitchen storage",
    "Under-cabinet organizer design",
    "Bottom pull-out drawer system",
    "Easy access to stored items",
    "Premium thick plastic construction",
    "Reinforced metal tube frame",
    "Strong weight-bearing capacity",
    "Resists bending and deformation",
    "Maximizes vertical storage space",
    "Keeps items neatly organized",
    "Tool-free installation",
    "Quick and easy assembly",
    "Space-saving storage solution",
    "Suitable for cleaning supplies",
    "Works for toiletries and cosmetics",
    "Modern white finish"
  ],
  "materials": [
    "Premium Plastic",
    "Metal Tubes",
    "Plastic Drawer Components",
    "Metal Support Frame"
  ],
 image: "https://github.com/Aadhi6374/image/blob/main/newwwww%20sink%20space.png?raw=true",
 amazon: "https://www.amazon.com/Ukeetap-Multi-Purpose-Pull-Out-Organizers-Bathroom/dp/B0DNTM2MK3?crid=2GT8BGN2XDJMT&dib=eyJ2IjoiMSJ9.SOSMkC0i8NJWY9mI6D7IXbH1-PzRrWATNByDMWgjlKI0gwjJbAJmO9Gw4qVBC2XgSV_YslgQQ9WViSdDyI6cKLHK-eMzCquV4XNHeWsmKfPs_C7mLp8oygFfHeghWaHMEST9EnbSlfnwoMMcYx3XMDszTU2JIMKKPM2tpm-8Ucwq5QkX3iPqeidAyWHg4jiH-X8hlIr2hPGXegnSb990O6IL4Q-EoLY0bXXtW0UhPvE_1muwSlEXbudK7p22QpuGn8S4GEDnhgkfPYfZHrcp9_G4LvbutZXiEAFcF1Yq86E._54vpN8k8wIKSZ_WoF2iBBmsQM98ZPyjg_NFkLd9_gc&dib_tag=se&keywords=Under%2BSink%2BOrganizer&qid=1781455103&sprefix=under%2Bsink%2Borganizer%2Caps%2C613&sr=8-9&th=1&linkCode=ll2&tag=aadhithyan637-20&linkId=9243f9fc5cf1247e4436a2a1cb46382b&language=en_US&ref_=as_li_ss_tl"
},
{
  "id": 79,
  "name": "COPREE Bamboo 3-Tier Hanging Plant Stand Planter Shelves Flower Pot Organizer Rack",
  "price": 40,
  "rating": 4.4,
  "reviews": 5859,
  "description": "The COPREE Bamboo 3-Tier Hanging Plant Stand is a stylish and functional plant display shelf designed to showcase indoor and outdoor plants while maximizing vertical space. Crafted from premium Phyllostachys pubescens bamboo, this eco-friendly plant stand offers excellent durability, decay resistance, and long-lasting performance. The elegant hanging rod design provides additional space for hanging planters, while the three-tier shelving structure accommodates flower pots, succulents, herbs, and decorative plants. Featuring adjustable shelf spacing with multiple position holes, users can customize the display layout according to plant sizes. The foldable construction allows convenient storage and portability, making it ideal for patios, balconies, front porches, gardens, living rooms, and indoor décor. Reinforced with thickened feet, steel screws, rounded corners, and a back crossbar design, this plant stand ensures stability, safety, proper ventilation, and efficient water drainage for healthy plant growth.",
  "features": [
    "3-tier bamboo plant stand design",
    "Integrated hanging rod for planters",
    "Elegant decorative plant display",
    "Premium Phyllostachys pubescens bamboo",
    "Eco-friendly natural bamboo construction",
    "High hardness and durability",
    "Excellent decay resistance",
    "Suitable for indoor and outdoor use",
    "Adjustable shelf height positions",
    "Four sets of adjustment holes",
    "9.45-inch adjustable spacing range",
    "Foldable space-saving design",
    "Convenient storage and portability",
    "Strong weight-bearing capacity",
    "Thickened feet for added stability",
    "Reinforced steel screw construction",
    "Back crossbar support system",
    "Rounded corner safety design",
    "Promotes proper ventilation",
    "Allows efficient water drainage"
  ],
  "materials": [
    "Natural Bamboo",
    "Phyllostachys Pubescens Bamboo",
    "Steel Screws",
    "Metal Hardware Components"
  ],
 image: "https://github.com/Aadhi6374/image/blob/main/plant%20decoring.png?raw=true",
 amazon: "https://www.amazon.com/Hanging-Planter-Shelves-Organizer-Shelving/dp/B08XLN49WQ?crid=1RJX4GFMANEQU&dib=eyJ2IjoiMSJ9.mPvAJQv00NyonGU8tBT8n8L1ZSkuzJmPnv4kXlAgfCMAB3Lp8DPB2KI1j1d2vn7Ww5HA4Xiyo5xGhu3EHT2TLYc6HEGm4RP8CgI4PmYvyryY16ByqZGXYqNIGJ0ckPxFVNszABoboLCYgEixyoaX7_ZvAhUmIl-gI7NsPUpvDnnC5StI6Xl5qlSnMd9hYa_qQtA5FOcAbg22wvYH33jwuizOjS-TIOqHuBrQTMl9x-rZqiD_l-ukWT1SE0HYCyuQx7NGu53x7kTCrf3sFQv8MBPShve4sKx1xyDio2nfQgQ.ljnLT-frHY7tyvuqnBd3YKPULthDsz5KHz7SiakQ910&dib_tag=se&keywords=Homero%2B3%2BTier%2BBamboo%2BFolding%2BPlant%2BStand%2Bhigh%2Brating&nsdOptOutParam=true&qid=1781523230&sprefix=homero%2B3%2Btier%2Bbamboo%2Bfolding%2Bplant%2Bstand%2Bhigh%2Brating%2Caps%2C829&sr=8-18&th=1&linkCode=ll2&tag=aadhithyan637-20&linkId=7fa7720e840ea7556fe6ed6b0fb057a8&language=en_US&ref_=as_li_ss_tl"
},
{
  "id": 80,
  "name": "Espoir Glowrizer Face Primer | Hydrating & Moisturizing Makeup Base with Hyaluronic Acid & Niacinamide",
  "brand": "Espoir",
  "price": 31,
  "rating": 4.5,
  "reviews": 114,
  "description": "The Espoir Glowrizer Face Primer is a hydrating Korean makeup base designed to create a smooth, radiant complexion before foundation application. Featuring a unique water-gel formula enriched with pink capsules containing hyaluronic acid, peptides, niacinamide, and vitamin C, this primer helps improve the appearance of dryness and uneven texture while providing long-lasting hydration. The encapsulated technology maintains ingredient freshness and melts effortlessly into the skin for quick absorption and a lightweight feel. Suitable for all skin types, it enhances foundation application, delivers a dewy glow, and helps achieve a flawless, luminous makeup look. The convenient pump packaging ensures easy, controlled dispensing for daily use and travel.",
  "features": [
    "Hydrating face primer for makeup",
    "Smooths skin texture before foundation",
    "Creates a radiant Korean makeup base",
    "Water-gel formula with pink capsules",
    "Infused with hyaluronic acid",
    "Contains niacinamide",
    "Enriched with peptides",
    "Includes vitamin C",
    "Encapsulated ingredient technology",
    "Lightweight and fast-absorbing formula",
    "Helps reduce the appearance of dryness",
    "Promotes even foundation application",
    "Provides long-lasting hydration",
    "Suitable for all skin types",
    "Dewy finish for radiant-looking skin",
    "Rose water scent",
    "Pump dispenser for controlled application",
    "Travel-friendly packaging",
    "Ideal for daily makeup preparation",
    "Suitable for festivals and outdoor events"
  ],
  "ingredients": [
    "Hyaluronic Acid",
    "Niacinamide",
    "Peptides",
    "Vitamin C",
    "Water-Gel Base",
    "Rose Water Extract"
  ],
 image: "https://github.com/Aadhi6374/image/blob/main/new%20beauty%20product%20for%20korean%20skin.png?raw=true",
 amazon: "https://www.amazon.com/Espoir-Glowrizer-Moisturizing-Natural-born-Recommended/dp/B0DBQG9HVP?crid=3I9ZCHUJNVEZR&dib=eyJ2IjoiMSJ9.B0ZbP3tC-VV0SLXaFUqSi67PqE4ItOa5o4v_CjJ0DGWXP__Yv5NW62Ihoe3v7hpjn3HfH2jstfBfkYEnhDNxt2uBD4EudCMmHc-dTWI259-DVkugyD3UR0Q4qc8Y2FRm8G-5p_q70g038sx0UTGriafQE8CkXkb0fiw2oW7LXzsjcmcBr7zK6xS6hcS04cRMczDydg1WfNyisruH8l_ZN9IKbjOrPqAAFxKCBX15p3Trjq8Tb292WGraA9X_OUROZOGAKzfSO3ciqupaIdKv3VlBl3gEBqKFjifYuzlFn-M.Snmlmzo-ra0Tb8r6GUQJci8VUapZVez9xVSR2p2j-z4&dib_tag=se&keywords=Espoir+Glowrizer+Face+Primer+%7C+Hydrating+%26+Moisturizing+Makeup+Base+with+Hyaluronic+Acid+%26+Niacinamide%2C+All+Skin+Types%2C+Perfect+for+Glow+and+Radiant&nsdOptOutParam=true&qid=1781592013&sprefix=espoir+glowrizer+face+primer+hydrating+%26+moisturizing+makeup+base+with+hyaluronic+acid+%26+niacinamide%2C+all+skin+types%2C+perfect+for+glow+and+radiant%2Caps%2C684&sr=8-1&linkCode=ll2&tag=aadhithyan637-20&linkId=5c8912a0b2288be6a32370e31b168270&language=en_US&ref_=as_li_ss_tl"
},{
  "id": 81,
  "name": "GEEBOBO 5 Tiered Tall Plant Stand for Indoor, Wood Plant Shelf Corner Display Rack",
  "price": 30,
  "rating": 4.3,
  "reviews": 4399,
  "description": "The GEEBOBO 5 Tiered Tall Plant Stand is a compact and stylish indoor plant display rack designed to maximize vertical space while showcasing multiple plants. Crafted from durable carbonized pine wood, this multi-tier plant shelf features five display levels and a stable triangular structure for enhanced support. Its natural wood finish complements bedrooms, living rooms, hallways, balconies, patios, and garden spaces. Each tier provides ample room for flower pots while allowing plants to receive balanced sunlight and airflow. Equipped with detachable wheels for easy mobility, the stand can be used as either a stationary or movable plant organizer. The eco-friendly, paint-free construction preserves the natural wood texture and offers resistance to fading, shrinking, warping, and cracking.",
  "features": [
    "5-tier vertical plant stand design",
    "Space-saving corner display rack",
    "Suitable for indoor and outdoor use",
    "Five levels of plant display space",
    "Stable triangular base construction",
    "Made from durable pine wood",
    "High-temperature carbonized wood treatment",
    "Natural wood grain finish",
    "Paint-free eco-friendly design",
    "Resistant to fading and warping",
    "Resistant to shrinking and cracking",
    "Detachable wheels for mobility",
    "Can be used with or without wheels",
    "Ideal for bedrooms and living rooms",
    "Suitable for balconies and patios",
    "Decorative flower pot organizer",
    "Promotes balanced sunlight exposure",
    "Supports proper plant airflow",
    "Easy assembly with included tools",
    "Compact design for small spaces"
  ],
  "materials": [
    "Pine Wood",
    "Carbonized Pine Wood",
    "Metal Hardware Components",
    "Plastic Wheels"
  ],
 image: "https://github.com/Aadhi6374/image/blob/main/home%20decorrrrrrr.png?raw=true",
 amazon: "https://www.amazon.com/GEEBOBO-Outdoor-Display-Multi-tier-Planter/dp/B09GY113GL?crid=1SC38LQ8SALF3&dib=eyJ2IjoiMSJ9.GMQtXDDlopZToy_kEWMgI1l3WaKaW0mP8FxyUjTEmPhNRmave3TU7fo8RdpDVfhMusqU-ZOV1YXdUhQXOJMtdfAe61OKV9QDV5I7X0RnbdCjUO6HcHOXfQe5CQORYIAneqtQjr7FtgMEBOfQaPGrsrKCDCKK-xtMQyJEK2BmQFXd5gLmY4KU7TkBN3Q-RtvKxV6kDMr12j4IdZcWk_gHjGH5PH9MBbwBpmOP8jXLo1417Rt6o1zADdMupmQEPLMIUrBRM-kaCBkjLObSWI5wLBaDMD3K--X59sIFJX-Ki5E.UfwvK7HNqzs46pd3Wt_ehbn4WZuzrD1Q7Zd9d2J2d00&dib_tag=se&keywords=6%2BTier%2BWooden%2BPlant%2BStand%2BIndoor%2Bwith%2BWheels&nsdOptOutParam=true&qid=1781606066&sprefix=6%2Btier%2Bwooden%2Bplant%2Bstand%2Bindoor%2Bwith%2Bwheels%2Caps%2C418&sr=8-10&th=1&linkCode=ll2&tag=aadhithyan637-20&linkId=0f10dd4e46a72a6f55e85d753568043a&language=en_US&ref_=as_li_ss_tl"
},{
  "id": 82,
  "name": "Kalrin Over-The-Toilet Storage Rack, 4-Tier Bathroom Organizer Shelf with Adjustable Shelves and Basket",
  "price": 50,
  "rating": 4.5,
  "reviews": 3842,
  "description": "The Kalrin Over-The-Toilet Storage Rack is a versatile 4-tier bathroom organizer designed to maximize vertical storage space while maintaining a stylish industrial look. Constructed from durable P2 particleboard wood panels and a reinforced metal frame, this freestanding storage shelf features three open shelves, a spacious storage basket, removable hooks, and a toilet paper holder for convenient organization. Adjustable shelf heights allow customization for items of various sizes, while the X-shaped crossbar, anti-tip wall mount, and non-slip feet provide superior stability and safety. Ideal for bathrooms, laundry rooms, kitchens, dormitories, balconies, and apartments, this multifunctional rack offers an efficient storage solution for small spaces while adding rustic charm to any room.",
  "features": [
    "4-tier over-the-toilet storage design",
    "Three open storage shelves",
    "Large storage basket included",
    "Adjustable shelf height positions",
    "Three removable utility hooks",
    "Built-in toilet paper holder",
    "Freestanding space-saving design",
    "Durable metal and wood construction",
    "P2 particleboard wood panels",
    "Heavy-duty metal frame support",
    "Rustic brown industrial finish",
    "X-shaped crossbar reinforcement",
    "Anti-tip wall mounting system",
    "Non-slip protective feet",
    "Anti-fall basket design",
    "Supports up to 120 lbs total weight",
    "30 lbs load capacity per shelf",
    "Easy assembly with included tools",
    "Suitable for bathrooms and laundry rooms",
    "Multi-purpose storage organizer"
  ],
  "materials": [
    "P2 Particleboard Wood",
    "Metal Frame",
    "Steel Hardware",
    "Anti-Slip Foot Pads"
  ],
 image: "https://github.com/Aadhi6374/image/blob/main/toilet%20storage%20ideas.png?raw=true",
 amazon: "https://www.amazon.com/Kalrin-Bathroom-Organizer-Adjustable-Freestanding/dp/B0CYZW6NZJ?crid=2WIR1PZQOKIAW&dib=eyJ2IjoiMSJ9.fkS87wERZEidIMKjcQDZUt5kTqiBe5eCbJTPGkuaQPxxQIGTB6r4xXknjjWk1CxW-lKQ2k3buIskUA75r0HljwPyNBA2M3PBn6VNmYo3X1cHZvQfI8I9g7hWLMljC3uBFmfMmb53P-n8mRxsJxG6w73rtY1MSa2858HbAqrKVqkiJgcJl24pM2nbbZMUIoZMvraZe0m3MWjaNDoeAgz_3t0gj6iEYpZ4HBgJhJcEAZB6pnZP9WXOX9CbbqdX_ptNy892OCJv645ni3_q9atXONyr0EDOGE52wffBiVv1OjI.PB8mAWnMJPB4CAYojAOd2yz7V7l_cqZRsiTvwJxPmtA&dib_tag=se&keywords=Djuize%2BWall%2BShelf%2Bwith%2BWooden%2BTop&qid=1781690062&sprefix=djuize%2Bwall%2Bshelf%2Bwith%2Bwooden%2Btop%2Caps%2C580&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&linkCode=ll2&tag=aadhithyan637-20&linkId=4e85a84e7ac94401388ca06bb4f734ac&language=en_US&ref_=as_li_ss_tl"
},{
  "id": 83,
  "name": "Downy Liquid Fabric Softener, April Fresh 2-in-1 Fresh & Soft, 140 Fl Oz",
  "price": 18,
  "rating": 4.8,
  "reviews": 36434,
  "description": "Downy April Fresh 2-in-1 Liquid Fabric Softener is a premium laundry conditioner designed to provide long-lasting freshness and exceptional softness with every wash. Featuring Downy's signature April Fresh scent, this fabric softener delivers up to three times more freshness while helping clothes feel softer, smoother, and more comfortable. The liquid formula works effectively in all washing machines and can be added directly to the fabric softener dispenser or agitator. Suitable for everyday laundry routines, it enhances fabrics with a fresh scent and soft touch while helping garments maintain their quality wash after wash. The large 140-fluid-ounce bottle provides enough fabric conditioner for up to 190 loads.",
  "features": [
    "2-in-1 softness and freshness formula",
    "Signature April Fresh scent",
    "Provides up to 3X more freshness",
    "Long-lasting fragrance performance",
    "Leaves clothes soft and comfortable",
    "Helps reduce fabric stiffness",
    "Easy-to-use liquid formula",
    "Works in all washing machines",
    "Compatible with HE washers",
    "Can be added to fabric softener drawer",
    "Suitable for direct agitator use",
    "Enhances overall laundry freshness",
    "Helps fabrics feel smoother",
    "Ideal for everyday laundry care",
    "Pairs with any laundry detergent",
    "Large 140 fl oz bottle",
    "Provides up to 190 loads",
    "Convenient pour bottle design",
    "Trusted Downy fabric conditioner",
    "Suitable for most washable fabrics"
  ],
  "ingredients": [
    "Liquid Fabric Conditioner",
    "Freshness Enhancing Agents",
    "Fabric Softening Agents",
    "April Fresh Fragrance"
  ],
 image: "https://github.com/Aadhi6374/image/blob/main/flower%20smell%20laundryy.png?raw=true",
 amazon: "https://www.amazon.com/Downy-Fabric-Softener-April-Fresh/dp/B0C8XBKZYG?crid=35SYIIF3N78UE&dib=eyJ2IjoiMSJ9.tiueCtGpsQ29Nh6FDAIUv26GEu7MlbejwsLYDpKIvsaRsz8XoGI-YcNvohwvJ40H9IADATHLvvOYX2pAUEOTxibwCxGOI0J_iF0LgWgRg2VIN__f4AuwCn8xhdNtMl3coHY2V2ow8Jqfb0gY5mcEhaM0IbyQvThblpkSzbaCluzJ0Sx_cslX_mNoWDEMmb6KTfOEMvdcnr1j7HsWuzeZvKJqHPN85SHSoJU0x0dm1eR2Bd8_POAU-E4mftECx9z1dtkrw1tFP5r15Pa41f6be514rB0UUwLoeXd2qN8pgcE.s9K174HlCx9TfrpY3EXaVmJIT0wSRxLa2Fek8pLS7pI&dib_tag=se&keywords=Ultra%2BApril%2BFresh%2BScent%2BLiquid%2BFabric%2BSoftener%2C%2B190-Loads%2C%2B140%2Bfl.%2Boz.&nsdOptOutParam=true&qid=1781692992&sprefix=revitalize%2Byour%2Bfloral%2Barrangement%2Caps%2C1238&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&linkCode=ll2&tag=aadhithyan637-20&linkId=507af7a5c947e6c867a7ea8b1db57902&language=en_US&ref_=as_li_ss_tl"
},{
  "id": 84,
  "name": "ROMOON Laundry Sorter Hamper with Hanging Bar, 3 Section Rolling Laundry Cart Organizer",
  "price": 40,
  "rating": 4.6,
  "reviews": 11099,
  "description": "The ROMOON Laundry Sorter Hamper with Hanging Bar is a versatile laundry organization solution designed to simplify sorting, storing, and transporting clothes. Featuring three large removable laundry bags with a combined 135L capacity, this rolling laundry cart allows users to separate clothes by color, fabric type, or family member. The integrated hanging bar provides additional space for air-drying garments, organizing outfits, or hanging freshly ironed clothes. Built with a heavy-duty alloy steel frame and waterproof Oxford fabric bags, the sorter supports up to 75 lbs while maintaining stability and durability. Four smooth-rolling wheels, including two lockable casters, ensure effortless mobility and secure positioning. Ideal for apartments, dormitories, laundry rooms, and small living spaces, this modern laundry organizer maximizes storage while keeping clothes neatly organized.",
  "features": [
    "3-section laundry sorting system",
    "Large 135L total capacity",
    "Built-in hanging bar for clothes",
    "Rolling laundry cart design",
    "Four smooth-rolling wheels",
    "Two heavy-duty lockable casters",
    "Easy mobility across floors",
    "Removable laundry bags",
    "Waterproof fabric bag construction",
    "Durable alloy steel frame",
    "Supports up to 75 lbs",
    "Sorts clothes by color or fabric",
    "Suitable for family laundry needs",
    "Ideal for apartments and dorms",
    "Space-saving vertical design",
    "Keeps laundry organized",
    "Portable clothes storage solution",
    "Modern rectangular design",
    "Easy assembly with numbered parts",
    "No tools required for setup"
  ],
  "materials": [
    "Alloy Steel",
    "Oxford Fabric",
    "Plastic Wheels",
    "Metal Hardware Components"
  ],
 image: "https://github.com/Aadhi6374/image/blob/main/new%20home%20decor%20for%20clothessss.png?raw=true",
 amazon: "https://www.amazon.com/ROMOON-Laundry-3-Section-Capacity-Removable/dp/B0G6JJRCWD?crid=4AMVDO0CIM4C&dib=eyJ2IjoiMSJ9.W0ElTMb-JUf7Qt6Iu2oCNvXDrp15_Qw2fLZoIDzVEXK7hn3495zbJcn_boxzx5aLbBw4VBXmiBORcL44savN55HoMO7e6CDOREKWI9uGMrv8UYPRDVhdFXVwQlXMRq3Qv9Ns0YtGbd_PIbQbkY1_8gCiAKMz15tjUfQaw5jbP8nGaUAFwWH56IpPIbNUthsdcwEgv1q3aF51K2TIJSXHmf_x-iauVLFx4kCkzZTi0NdhJxulyrflinykDih7vAYEI8l52wawmiESCz-dTlo_yfzf1FLv8HorB0QTI7H7YsU.I72NjMyS8panzFhcSMneQGdjrGduL_AEBXHFweThSk0&dib_tag=se&keywords=Dark%2BGray%2B36%2Bin.%2Bx%2B17.3%2Bin.%2Bx%2B30.7%2Bin.%2BWood%2B%28Bamboo%29%2B3-Bag%2BLaundry%2BSorter&nsdOptOutParam=true&qid=1781766055&sprefix=dark%2Bgray%2B36%2Bin.%2Bx%2B17.3%2Bin.%2Bx%2B30.7%2Bin.%2Bwood%2Bbamboo%2B3-bag%2Blaundry%2Bsorter%2Caps%2C484&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&linkCode=ll2&tag=aadhithyan637-20&linkId=993923a33b086938ce7d6beb2c097ec8&language=en_US&ref_=as_li_ss_tl"
} ,{
  "id": 85,
  "name": "Ukulork Butterfly Wind Chimes for Outside, Rose Gold Aluminum Tube Garden Decor",
  "price": 20,
  "rating": 4.7,
  "reviews": 2304,
  "description": "The Ukulork Butterfly Wind Chimes are a beautifully handcrafted outdoor decoration designed to bring soothing melodies and elegant charm to patios, porches, gardens, balconies, and backyards. Featuring a large butterfly topper, six decorative butterfly accents, six small bells, four rose gold aluminum tubes, and a brass cap, this wind chime creates a relaxing sound whenever touched by the breeze. Constructed from durable aluminum and weather-resistant nylon cord, it is waterproof, rustproof, and suitable for year-round outdoor use. The modern butterfly-themed design adds a decorative touch to indoor and outdoor spaces while symbolizing love, happiness, blessings, and remembrance. It also makes a thoughtful gift for birthdays, Mother's Day, memorial occasions, housewarmings, and special celebrations.",
  "features": [
    "Handcrafted butterfly wind chime design",
    "Large decorative butterfly topper",
    "Six butterfly accent ornaments",
    "Four rose gold aluminum tubes",
    "Six decorative hanging bells",
    "Produces soft melodic chime sounds",
    "Weather-resistant outdoor construction",
    "Waterproof and rustproof materials",
    "Corrosion-resistant aluminum tubes",
    "Durable nylon hanging cord",
    "Elegant rose gold finish",
    "Includes silver S-shaped hanging hook",
    "Suitable for patios and porches",
    "Ideal for gardens and balconies",
    "Lightweight hanging decoration",
    "Creates a relaxing outdoor atmosphere",
    "Modern butterfly-themed embellishment",
    "Indoor and outdoor decorative use",
    "Meaningful memorial and sympathy gift",
    "Perfect for Mother's Day and housewarming gifts"
  ],
  "materials": [
     "Metal Bells",
    "Brass Cap",
    "Nylon Cord",
   "Aluminum Tubes"
   
  ],
 image: "https://github.com/Aadhi6374/image/blob/main/home%20outside%20decor.png?raw=true",
 amazon: "https://www.amazon.com/Clearance-Butterflies-Aluminum-Windchime-Housewarming/dp/B09PBWLWPK?crid=1HBN9F7DNMQNG&dib=eyJ2IjoiMSJ9.j4A983dMf4pgr-Vtr213MuwlR3sau5Sb2W8S7FU8O0Ek9pof4C9BnevxEZ3FdyO95xGO6rinO9BTOBJK2r3sAt1Kc7UQ5mie_9-gpxez11TjILhyrKHnZYpafWEiD5f4ZIii3v5l8oU0QUzo8BhNrSehMPM_cZfJ38PQxgbvzXTHpY8RSD4lt4rkiE9zmziRrZO988mBhcBHYAcRY1g_1iISeFA7qA-RtY2htQdDSqqpYsWxnqI3i9Lkp-SpBg-moF_K4XklOcgEkX81qESBTlC4-5gr2sPyJhPe8VjoRQY.wTOgxdZDYgr7MKVqmf0QUBGQMICTlO2KxBW-mqYQG7o&dib_tag=se&keywords=Pressed%2BFlower%2BWind%2BChime&qid=1781780264&sprefix=pressed%2Bflower%2Bwind%2Bchime%2Caps%2C495&sr=8-8&th=1&linkCode=ll2&tag=aadhithyan637-20&linkId=3c808bd71e6d2dcfbf12b985afcdcafb&language=en_US&ref_=as_li_ss_tl"
},
 {
  "id": 86,
  "name": "Vtopmart 25 PCS Clear Plastic Drawer Organizers Set, Multi-Size Storage Trays for Bathroom, Vanity, Kitchen & Office",
  "price": 25,
  "rating": 4.7,
  "reviews": 48421,
  "description": "The Vtopmart 25 PCS Clear Plastic Drawer Organizers Set is a versatile storage solution designed to keep drawers neat, organized, and clutter-free throughout the home. Featuring 25 clear storage bins in four different sizes, this organizer set allows for customizable arrangements to fit bathroom vanities, kitchen drawers, office desks, bedroom dressers, craft rooms, and closets. Made from durable transparent plastic, the trays provide easy visibility of stored items while maintaining a clean and modern appearance. Included non-slip silicone pads help keep the organizers securely in place, while the stackable design allows convenient storage when not in use. Ideal for organizing cosmetics, makeup tools, jewelry, office supplies, utensils, and accessories, this organizer set simplifies daily routines and maximizes drawer space.",
  "features": [
    "25-piece drawer organizer set",
    "Includes 4 different tray sizes",
    "Customizable drawer organization",
    "Clear transparent storage bins",
    "Suitable for kitchen utensil storage",
    "Perfect for office supply organization",
    "Organizes cosmetics and makeup tools",
    "Stores jewelry and hair accessories",
    "Works in dressers and closets",
    "Durable plastic construction",
    "Easy visibility of stored items",
    "Includes 100 non-slip silicone pads",
    "Prevents trays from sliding",
    "Stackable space-saving design",
    "Easy to clean with damp cloth",
    "Keeps drawers neat and tidy",
    "No mounting required",
    "Lightweight and versatile storage solution",
    "Suitable for home and office use"
  ],
  "materials": [
    "Clear Plastic",
    "Silicone Pads",
    "Plastic Storage Trays",
    "Transparent Polymer Material"
  ],
 image: "https://github.com/Aadhi6374/image/blob/main/drawer.png?raw=true",
 amazon: "https://www.amazon.com/Vtopmart-Organizers-Versatile-Organizer-Jewelries/dp/B08KXKVT4K?dib=eyJ2IjoiMSJ9.NlQu8OoN6RQtUfE9jLFnXedJ0igM7SLNSrl3nUECVv97TnSnN_hBlx8BHqNtU34wFGuvhbS7c-g2R0OHqkD_ZKiIMetxvevGUnTnoEhTL_fiCXV323xsMKLMoiwiqA42KOtNWS_EQSTCPWPjgZPZ8qRZ3rRtonBf7dUlYndo755otYSdsJnpgCKOjnNBc9yqprfQeqjl2DfrsooRkw5rmiVdi75PLmQJAsff4nz2P0zFTj71T9bHaNYTVaY-8cT2WCy80xOF95Yy4N2j-SAptSuz2gduaCYIoxDySJ2ozxo.DkqSXWaCLcKPzgXvHYj7Oy_pz58lER8MAUFQjX4kD14&dib_tag=se&keywords=Storage%2Borganizers&qid=1781857616&sr=8-10&th=1&linkCode=ll2&tag=aadhithyan637-20&linkId=3f3dd74a85159a665a8ff896b6ba527a&language=en_US&ref_=as_li_ss_tl"
},
{
  "id": 87,
  "name": "JASAI 18Oz Simple Glass Soap Dispenser with Black Rust Proof Pump",
  "price": 15,
  "rating": 4.6,
  "reviews": 26821,
  "description": "The JASAI 18Oz Simple Glass Soap Dispenser is an elegant and functional accessory designed to enhance the appearance of kitchens and bathrooms. Crafted from premium lead-free clear glass with a stylish vertical stripe texture, this dispenser features a durable black 304 stainless steel rust-proof pump for long-lasting performance. With an 18-ounce capacity, it is ideal for dispensing hand soap, dish soap, lotion, shampoo, body wash, and other liquid products. The transparent glass body makes it easy to monitor soap levels and refill when needed. Its timeless design complements modern, farmhouse, rustic, and minimalist home decor styles, making it a practical addition to any sink area and a thoughtful gift for friends and family.",
  "features": [
    "18-ounce large capacity",
    "Premium clear glass construction",
    "Lead-free glass material",
    "Black rust-proof pump",
    "304 stainless steel pump mechanism",
    "Durable and long-lasting construction",
    "Transparent body for easy refill monitoring",
    "Suitable for hand soap dispensing",
    "Ideal for dish soap storage",
    "Compatible with lotion",
    "Can hold shampoo and body wash",
    "Refillable and reusable design",
    "Perfect for bathroom countertops",
    "Great for kitchen sink organization",
    "Includes decorative hanging tag",
    "Suitable as a gift for friends and relatives"
  ],
  "materials": [
    "Lead-Free Glass",
    "304 Stainless Steel",
    "Plastic Internal Pump Components",
    "Natural Twine Tag"
  ],
 image: "https://github.com/Aadhi6374/image/blob/main/new%20product%20for%20kitchen.png?raw=true",
 amazon: "https://www.amazon.com/JASAI-Dispenser-Refillable-Vertical-Bathroom/dp/B0D3F5WDLS?dib=eyJ2IjoiMSJ9.PtlNvx2CXwUJLvOSyZazYecLAx2AuECJO8g4EJPbftVFoQoBK5GAqJItSzuu4T9ploGxEWVTPl8kR6InqGWwpWCt_Apsq51AdRUzv7BEeVgkVopoh0DHhugSNj5wIdRjiBy3h3QvOX-iP57QhHn-yKo1FF7Yi8plLZGhU_YOkfsd84EugXArIPt7D-sRfsUidFfcalERW8jgHYKP6cpas0nTiI7FqAakYBHtO9UCiQ6fCAb5546haSvX-MR0VPfousU_7TcBZcNfkeA2HAN8FBj7iLRow0iRSn_rIjuPHYs.8o8I_oKEAAYobzD0zuHil1o3z4VO7xz-ehRG3omZ0hU&dib_tag=se&keywords=Dispensador%2Bde%2Bjab%C3%B3n%2Bde%2Bvidrio%2Bexclusivo%2B%7C%2BGrabado%2C%2BImpreso%2Bo%2BEtiquetado%2B-%2BDispensador%2Bde%2Bjab%C3%B3n%2Bde%2Bvidrio%2Bexclusivo%2B%7C%2BGrabado%2C%2BImpreso%2Bo%2BEtiquetado&nsdOptOutParam=true&qid=1781934280&sr=8-2&th=1&linkCode=ll2&tag=aadhithyan637-20&linkId=7a45de155a52d5709ac0cdfa2b7048da&language=en_US&ref_=as_li_ss_tl"
} ,
{
  "id": 88,
  "name": "Lynagert Small Heart Hands Sculpture Decor, Modern Love Finger Statue for Living Room, Bedroom, Bookshelf & Coffee Table (Gold)",
  "price": 19,
  "rating": 4.7,
  "reviews": 1296,
  "description": "The Lynagert Small Heart Hands Sculpture is a beautifully crafted decorative accent designed to symbolize love, friendship, and affection. Featuring an elegant heart-shaped hand gesture in a luxurious gold finish, this modern sculpture adds a sophisticated touch to living rooms, bedrooms, offices, bookshelves, coffee tables, and display cabinets. Made from durable high-quality resin with a smooth textured surface, it is easy to clean and maintain. Its compact size makes it a noticeable decorative piece without taking up much space. The versatile design can also be used as a bracelet holder or keepsake display, making it both functional and stylish. Perfect as a thoughtful gift for weddings, anniversaries, Valentine's Day, birthdays, Christmas, Mother's Day, and other special occasions.",
  "features": [
    "Modern heart-shaped hand sculpture design",
    "Symbolizes love, friendship, and affection",
    "Elegant gold finish",
    "Compact and space-saving size",
    "Handcrafted decorative accent",
    "Smooth textured surface",
    "Easy to clean and maintain",
    "Suitable for living room decor",
    "Ideal for bedroom decoration",
    "Perfect for office desk display",
    "Great for bookshelves and coffee tables",
    "Can be used as a bracelet holder",
    "Versatile keepsake display stand",
    "Complements modern and minimalist interiors",
    "Thoughtful gift for special occasions"
  ],
  "materials": [
    "High-Quality Resin",
    "Gold Finish Coating",
    "Handcrafted Decorative Material"
  ],
 image: "https://github.com/Aadhi6374/image/blob/main/love%20product.png?raw=true",
 amazon: "https://www.amazon.com/Heart-Sculpture-Bookshelf-Aesthetic-Christmas/dp/B0DNSYD2V9?crid=12PE3LTVJS548&dib=eyJ2IjoiMSJ9.B7Dj6cEmNeS-Rr0buoaG-PWn7MSHoYSrRS59SROJiTNWKbJXBknMl-nqk6br3sm3nZ3dOPbEZpPrI2MSTiMdd0alwz_CpeRM_--o-Hi4mHzV2qHbQMnWu14dWatao06K-2m0XeXZ1A5YwsQaertvZw7IURp5K_gcYqGxz8RH51mk-dXuYyZ_64N5Kw6TOuhgL3tT1o_Agebg6O3rG5iaPGa8hXrxlS66UBgG2H3I1KiyrWSXy-IhEwPxCPLAw87ZyRk1lc0EK4oAqmmmHVTc6uqPGXwgHWeMwqNztWYc2wo.PMU9mT1ya1Wn8wS2TdCdN5XEzKro1LjizNt5Tz02YtA&dib_tag=se&keywords=home%2Bdecor&qid=1782031285&sprefix=home%2Bdec%2Caps%2C483&sr=8-6&th=1&linkCode=ll2&tag=aadhithyan637-20&linkId=2bcb33d6afc9de693f5c432c1479fc0e&language=en_US&ref_=as_li_ss_tl"
},
{
  "id": 89,
  "name": "Hatch Baby Sound Machine & Night Light, Wi-Fi Sleep Support Device with Time-to-Rise Alarm Clock and White Noise (Putty)",
  "price": 80,
  "rating": 4.8,
  "reviews": 36300,
  "description": "The Hatch Baby Sound Machine and Night Light is an all-in-one sleep support device designed to help infants, babies, toddlers, and parents build healthy sleep routines. Featuring customizable night lights, science-backed sleep sounds, white noise, lullabies, nursery stories, and a Time-to-Rise alarm clock, it creates a soothing sleep environment from newborn stages through toddler years. The companion Hatch Sleep app allows parents to remotely control settings, create schedules, access sleep guides, and even chat with sleep consultants. Its modern nursery-friendly design includes a simple touch interface, adjustable volume controls, LED clock display, and Wi-Fi connectivity for seamless operation. Hatch Baby helps establish consistent bedtime habits while providing comfort and convenience for the entire family.",
  "features": [
    "All-in-one baby sleep support device",
    "Customizable night light colors and brightness",
    "White noise and soothing sleep sounds",
    "Science-backed sleep routines",
    "Time-to-Rise alarm clock for toddlers",
    "Custom sleep schedules through mobile app",
    "Remote control via Wi-Fi connection",
    "LED digital clock display",
    "Sleep consultant chat access",
    "Baby sleep guides and routine support",
    "Nursery stories and bedtime content",
    "Lullabies and calming music",
    "Quick-touch controls on device",
    "Adjustable volume control",
    "Supports infants, babies, and toddlers",
    "Modern nursery-friendly design",
    "Favorite routine presets",
    "Nightlight button for late-night feeding",
    "Routine builder for healthy sleep habits",
    "Works with Hatch Sleep app"
  ],
  "materials": [
    "Plastic Housing",
    "LED Light Components",
    "Electronic Circuit Components"
  ],
 image: "https://github.com/Aadhi6374/image/blob/main/productfor%20baby.png?raw=true",
 amazon: "https://www.amazon.com/Hatch-Baby-Machine-Registry-Essential/dp/B0F7C6XJ3P?crid=12PE3LTVJS548&dib=eyJ2IjoiMSJ9.Em51ZZJujCyoTfnquwDN-AzAsCowhBqJ-sQH7E1INyn_7MlHXx1q_cJZULMS-s0GGFaUgiepSs68yCRzrCaUzDrzHYiOlKoltFcbQljbHJqd4PgkBZzdElk4ceSuOTi92hyPOkQVIligLyzURVJguMEkTr9TUE2rbBiDaaMQ7AAus7J0H-SG5afTthc5flqLh-ZUTpULL5ADQKr916DNjplw8rzu3FTa8TT73DRkj1D9bXYK3bEA78HNXLp6XH0p9O0_SOBR2tECAU0P2Y-1FeqPGXwgHWeMwqNztWYc2wo.JDj4Vp0lCqxleTRsR5Lng7fUiGaiTO6Xogk4fRhMG_I&dib_tag=se&keywords=home%2Bdecor&qid=1782032983&sprefix=home%2Bdec%2Caps%2C483&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&linkCode=ll2&tag=aadhithyan637-20&linkId=576f066c4c51eb1d4bcaaa41fd82a5ef&language=en_US&ref_=as_li_ss_tl"
},
{
  "id": 90,
  "name": "NIMBLOOM Lemon Ceramic Vase, 3D Decorative Tabletop Flower Vase for Home Decor, Yellow",
  "price": 25,
  "rating": 5.0,
  "reviews": 3,
  "description": "The NIMBLOOM Lemon Ceramic Vase is a charming decorative flower vase featuring a vibrant 3D stacked lemon design that instantly adds a fresh Mediterranean-inspired touch to any space. Crafted from high-quality ceramic with a smooth glazed finish, it showcases realistic lemon peel textures and bright yellow colors that complement modern, farmhouse, cottagecore, and summer home decor. Its narrow bottle opening keeps flower arrangements neat and elegant, while the stable flat base ensures secure placement on tables, shelves, countertops, or desks. Perfect for displaying fresh flowers, dried flowers, or artificial stems, this decorative vase enhances living rooms, kitchens, dining tables, bedrooms, offices, and coffee tables. It also makes a thoughtful gift for housewarmings, birthdays, weddings, Mother's Day, and lemon-themed decor enthusiasts.",
  "features": [
    "Unique 3D stacked lemon design",
    "Bright Mediterranean-inspired yellow finish",
    "Made from premium ceramic material",
    "Smooth glazed surface for easy cleaning",
    "Realistic lemon peel texture",
    "Perfect for fresh, dried, or artificial flowers",
    "Narrow bottle opening for tidy flower arrangements",
    "Stable flat base prevents tipping",
    "Great for bedroom and office decor",
    "Modern farmhouse and cottagecore style",
    "Durable ceramic baking finish",
    "Lightweight and easy to display",
    "Excellent housewarming gift",
  ],
  "materials": [
    "Premium Ceramic",
    "Glossy Glazed Ceramic Finish"
  ],
 
 image: "https://github.com/Aadhi6374/image/blob/main/homee.png?raw=true",
 amazon: "https://www.amazon.com/Ceramic-Decorative-Tabletop-Flower-Present/dp/B0G324M8KG?dib=eyJ2IjoiMSJ9.Bp9r0pYNhw3RDBJvawoZQQM4cdoGlY6wzhtqN8ThtBhx1p7Kas6uUzFweg_uMeG6qxhZJPibTJPu6g50tDko1vhH0FMcRwrSIzIKWXzN-wWoqnq8mqDC_GpRkNFOjwRjetF-PA4Vk1YNooREovhXzWzO6qkdiIjyE3dxqSPGmQ0v_bpzSDol5r3eZy76LRa9YT6o85h5oP_XxntPxjqwdgUOtjVNbvzisCYoMyix87XMEw4c13gCedqaPpueWIxeG9lWVxeVMS4Q_cEbj4P-YEfpj2Kf_gFnvzmwfsWq-DY.453F0ZApTQS5cIyk98O8-x7IibROHufhzWlSqs7oHIw&dib_tag=se&keywords=Lemon+Ceramic+Vase%2C+3D+Decorative+Tabletop+Vase%2C+Small+Flower+Vase+for+Home+Decor%2C+Lemon+Themed+Present%2C+7.91+x+4.25+x+3.31+in&nsdOptOutParam=true&qid=1782657047&sr=8-3&linkCode=ll2&tag=aadhithyan637-20&linkId=a6d26cff5de773b091482055175c620c&language=en_US&ref_=as_li_ss_tl"
}
























]

// ================= HELPER =================

// ================= HELPER =================

function formatReviews(num){
return num.toLocaleString() + "+"
}

// ================= RENDER =================

function renderProducts(){

const grid = document.getElementById("product-grid")
const params = new URLSearchParams(window.location.search)

const productParam =
params.get("products") || params.get("product");

const selectedIds =
productParam && productParam.includes(",")
? productParam.split(",").map(id => parseInt(id))
: null;

const selectedId =
productParam && !productParam.includes(",")
? parseInt(productParam)
: null;

let html = ""

// ================= MULTIPLE PRODUCTS =================

if(selectedIds){

const selectedProducts = selectedIds
    .map(id => products.find(p => p.id === id))
    .filter(Boolean);

if(selectedProducts.length === 0){
grid.innerHTML = "<h2>Products not found</h2>"
return
}

grid.className = "w-full"

selectedProducts.forEach(product => {

html += `
<div class="w-full flex flex-col md:flex-row gap-10 p-6 border-b">

<div class="w-full md:w-1/2">
<div class="image-container">
<img src="${product.image}"
onmousemove="zoomImage(event,this)"
onmouseleave="hideZoom(this)">
</div>
</div>

<div class="w-full md:w-1/2">

<!-- TITLE -->
<div class="mb-3">

<h1 class="text-2xl font-bold">
${product.name}
<span class="text-sm text-blue-500 ml-2 font-medium">
(Prices May Change Anytime)
</span>
</h1>

<a href="${product.amazon}" target="_blank" rel="noopener noreferrer"
class="inline-block mt-3 bg-yellow-400 px-6 py-3 rounded font-bold w-fit">
Check Latest Price on Amazon
</a>

</div>

<!-- RATING -->
<div class="flex items-center mb-3 text-yellow-500 text-sm">
${"★".repeat(Math.round(product.rating))}
${"☆".repeat(5 - Math.round(product.rating))}
<span class="text-gray-600 ml-2">
(${product.rating} • ${formatReviews(product.reviews)} reviews)
</span>
</div>

<!-- DESCRIPTION -->
<div class="mb-4">
<h3 class="font-bold text-lg mb-1">Description</h3>
<p class="text-gray-600">${product.description}</p>
</div>

<!-- FEATURES -->
${product.features ? `
<div class="mb-4">
<h3 class="font-bold text-lg mb-1">Key Features</h3>
<ul class="list-disc pl-5 text-gray-700 text-sm">
${product.features.map(f => `<li>${f}</li>`).join("")}
</ul>
</div>
` : ""}

<!-- INGREDIENTS / MATERIAL -->
${product.ingredients || product.materials ? `
<div class="mb-4">
<h3 class="font-bold text-lg mb-1">
${product.materials ? "Material" : "Key Ingredients"}
</h3>

<ul class="list-disc pl-5 text-gray-700 text-sm">
${(product.ingredients || product.materials).map(i => `<li>${i}</li>`).join("")}
</ul>

</div>
` : ""}

</div>
</div>
`

})

}

// ================= SINGLE PRODUCT =================

else if(selectedId){

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

<!-- TITLE -->
<div class="mb-3">

<h1 class="text-2xl font-bold">
${product.name}
<span class="text-sm text-blue-500 ml-2 font-medium">
(Price may change — check on Amazon)
</span>
</h1>

<a href="${product.amazon}" target="_blank" rel="noopener noreferrer"
class="inline-block mt-3 bg-yellow-400 px-6 py-3 rounded font-bold w-fit">
Check Latest Price on Amazon
</a>

</div>

<!-- RATING -->
<div class="flex items-center mb-3 text-yellow-500 text-sm">
${"★".repeat(Math.round(product.rating))}
${"☆".repeat(5 - Math.round(product.rating))}
<span class="text-gray-600 ml-2">
(${product.rating} • ${formatReviews(product.reviews)} reviews)
</span>
</div>

<!-- DESCRIPTION -->
<div class="mb-4">
<h3 class="font-bold text-lg mb-1">Description</h3>
<p class="text-gray-600">${product.description}</p>
</div>

<!-- FEATURES -->
${product.features ? `
<div class="mb-4">
<h3 class="font-bold text-lg mb-1">Key Features</h3>
<ul class="list-disc pl-5 text-gray-700 text-sm">
${product.features.map(f => `<li>${f}</li>`).join("")}
</ul>
</div>
` : ""}

<!-- INGREDIENTS / MATERIAL -->
${product.ingredients || product.materials ? `
<div class="mb-4">
<h3 class="font-bold text-lg mb-1">
${product.materials ? "Material" : "Key Ingredients"}
</h3>

<ul class="list-disc pl-5 text-gray-700 text-sm">
${(product.ingredients || product.materials).map(i => `<li>${i}</li>`).join("")}
</ul>

</div>
` : ""}

</div>
</div>
`
}

// ================= PRODUCT GRID =================

else{

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
${"★".repeat(Math.round(product.rating))}
${"☆".repeat(5 - Math.round(product.rating))}
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

// ================= ZOOM FUNCTIONS =================

function zoomImage(event, img) {

const rect = img.getBoundingClientRect()

const x = event.clientX - rect.left
const y = event.clientY - rect.top

const xPercent = (x / rect.width) * 100
const yPercent = (y / rect.height) * 100

img.style.transformOrigin = `${xPercent}% ${yPercent}%`
img.style.transform = "scale(2)"

}

function hideZoom(img) {

img.style.transform = "scale(1)"
img.style.transformOrigin = "center"

}
const params = new URLSearchParams(window.location.search);

const productsParam =
params.get("products") || params.get("product");

if (
productsParam &&
productsParam.includes(",")
){
const msg = document.getElementById("scrollMessage");
if(msg){
msg.style.display = "block";
}
}
