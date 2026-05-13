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
Features: [
"1.8mm thin band perfect for ring stacking",
"14K gold plated over 925 sterling silver",
"AAAAA cubic zirconia stones sparkle brightly",
"Hypoallergenic safe for sensitive skin",
"Lightweight design comfortable for daily wear",
"Available in sizes 4 through 10",
"Elegant minimalist style matches every outfit",
"Perfect for weddings gifts and everyday fashion"
],

Materials: [
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
Features: [
"10.1 inch IPS HD touch screen display",
"Instantly share photos and videos via Frameo app",
"32GB built in memory stores thousands of memories",
"Auto rotate supports portrait and landscape mode",
"WiFi connected for sharing from anywhere",
"Easy setup perfect for all ages",
"Display weather clock and custom captions",
"Perfect gift for moms family and loved ones"
],

Materials: [
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
Features: [
"10.1 inch IPS HD touch screen display",
"Instantly share photos and videos via Frameo app",
"32GB built in memory stores thousands of memories",
"Auto rotate supports portrait and landscape mode",
"WiFi connected for sharing from anywhere",
"Easy setup perfect for all ages",
"Display weather clock and custom captions",
"Perfect gift for moms family and loved ones"
],

Materials: [
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
Features: [
"Salon quality semi-transparent French tip finish",
"Short almond shape for elegant modern style",
"Quick easy at-home application in minutes",
"Durable gel press-on nails with comfortable fit",
"Long-lasting wear resistant to chipping",
"Reusable design for multiple wears",
"Includes 24 nails in 12 inclusive sizes",
"Perfect for prom weddings parties and daily glam"
],

Materials: [
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
Features: [
"36 vibrant gel nail polish colors for endless nail art styles",
"Includes glossy matte and holographic glitter top coats",
"Long-lasting salon-quality gel formula up to 28+ days",
"Highly pigmented colors with smooth easy application",
"Perfect for DIY nail designs at home or salon use",
"Includes nail file buffer clipper and cuticle stick tools",
"Works with UV LED nail lamps for durable glossy results",
"Great gift idea for women nail lovers and beauty enthusiasts"
],

Materials: [
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
Features: [
"6 pastel cat eye gel nail polish colors with velvet shimmer effect",
"Magnetic cat eye formula creates unique dazzling nail art styles",
"Long-lasting chip-resistant wear up to 28+ days with glossy shine",
"Includes pink red blue orange green and purple pastel shades",
"Highly pigmented smooth gel formula for easy even application",
"Works with UV LED nail lamps for durable salon-quality results",
"Perfect for DIY nail art home manicure and professional salon use",
"Elegant beauty gift set for women nail lovers and special occasions"
],

Materials: [
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
Features: [
"216 pre-shaped medium almond nail tips for salon-quality nail extensions",
"Includes 12 different sizes for comfortable custom nail fitting",
"Clear full cover gelly tips perfect for gel x and acrylic nail designs",
"Lightweight flexible nail tips designed for natural comfortable wear",
"Strong durable press on nail tips resistant to cracking and breaking",
"Perfect for colorful nail art French manicure and trendy almond nails",
"Easy application suitable for DIY home manicure and professional salons",
"Works perfectly with gel polish chrome cat eye and glitter nail designs"
],

Materials: [
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
Features: [
"Educational splash pad with colorful alphabet and animal learning design",
"Refreshing sprinkler fountain keeps toddlers cool during hot summer days",
"Extra large splash play area perfect for babies toddlers kids and pets",
"Non-slip shallow water surface designed for safe outdoor water play",
"BPA and phthalate free splash pad safe for children 12 months and older",
"Learning through play concept encourages early childhood development",
"Easy backyard setup connects quickly to standard garden water hose",
"Perfect summer outdoor toy for family activities water games and parties"
],

Materials: [
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

const selectedId = parseInt(params.get("product"))

const selectedIds = params.get("products")
? params.get("products").split(",").map(id => parseInt(id))
: null

let html = ""

// ================= MULTIPLE PRODUCTS =================

if(selectedIds){

const selectedProducts = products.filter(p =>
selectedIds.includes(p.id)
)

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
