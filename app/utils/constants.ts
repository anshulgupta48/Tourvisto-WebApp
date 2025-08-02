import { FeaturedTripBanner1, FeaturedTripBanner2, FeaturedTripBanner3, FeaturedTripBanner4, FeaturedTripBanner5, FeaturedTripBanner6, HandpickedTripBanner1, HandpickedTripBanner2, HandpickedTripBanner3, HandpickedTripBanner4, HandpickedTripBanner5, HandpickedTripBanner6, HandpickedTripBanner7, HandpickedTripBanner8 } from '~/assets/export';

// <======== Exporting Constants for Home-Page ========>
export const featuredTripsDefaultData = [
    { title: 'Barcelona Days', banner: FeaturedTripBanner1, totalActivities: 142, rating: 4.3 },
    { title: 'London Calling', banner: FeaturedTripBanner2, totalActivities: 198, rating: 4.2 },
    { title: 'Aussie Escape', banner: FeaturedTripBanner3, totalActivities: 121, rating: 4.5 },
    { title: 'Italy Vibes', banner: FeaturedTripBanner4, totalActivities: 176, rating: 4.7 },
    { title: 'Mexico Magic', banner: FeaturedTripBanner5, totalActivities: 163, rating: 4.1 },
    { title: 'Japan Trails', banner: FeaturedTripBanner6, totalActivities: 189, rating: 4.8 },
];

export const handpickedTripsDefaultData = [
    {
        tripId: 103421,
        title: 'Banff National Park',
        location: 'Alberta, Canada',
        country: 'Canada',
        price: 950,
        tags: ['Mountains', 'Adventure'],
        banner: HandpickedTripBanner1,
        tripDetails: {
            title: '7-Day Canadian Rockies Expedition',
            days: 7,
            location: 'Banff, Alberta, Canada',
            country: 'Canada',
            tags: ['Adventure', 'Mountains', 'Lakes', 'Wildlife'],
            rating: 4.6,
            price: 950,
            heading: 'Majestic Peaks & Turquoise Lakes',
            subHeading: 'Explore the heart of the Rockies',
            description: 'Embark on a breathtaking 7-day journey through Banff National Park, a UNESCO World Heritage site in the Canadian Rockies. This trip is designed for nature enthusiasts and adventure seekers, offering stunning vistas of snow-capped mountains, emerald lakes, and abundant wildlife. Enjoy hiking, canoeing, and exploring charming mountain towns, with ample opportunities for photography.',
            subDescription: 'Hike iconic trails, paddle turquoise lakes, and spot diverse wildlife amidst stunning mountain backdrops.',
            activities: [
                { title: 'Arrival in Calgary & Transfer to Banff', description: ['Meet guide, scenic drive to Banff.', 'Check into mountain lodge.', 'Explore Banff Avenue and local shops.', 'Welcome dinner with mountain views.'] },
                { title: 'Lake Louise & Moraine Lake', description: ['Visit iconic Lake Louise for canoeing.', 'Explore stunning Moraine Lake (seasonal access).', 'Short hike around Plain of Six Glaciers.', 'Evening at leisure in Banff.'] },
                { title: 'Icefields Parkway & Columbia Icefield', description: ['Drive the scenic Icefields Parkway.', 'Glacier Skywalk experience.', 'Explore Athabasca Falls.', 'Overnight in Jasper or nearby lodge.'] },
                { title: 'Jasper National Park Highlights', description: ['Maligne Canyon ice walk (winter) or hiking (summer).', 'Spirit Island boat cruise (seasonal).', 'Wildlife spotting opportunities.', 'Return to Banff.'] },
                { title: 'Johnston Canyon & Ink Pots', description: ['Hike to Lower and Upper Falls at Johnston Canyon.', 'Discover the vibrant Ink Pots.', 'Optional: Via Ferrata experience.', 'Relaxation at Banff Upper Hot Springs.'] },
                { title: 'Free Day or Optional Activities', description: ['Choose from horseback riding, rafting, or gondola ride.', 'Explore Cave and Basin National Historic Site.', 'Souvenir shopping.', 'Farewell dinner.'] },
                { title: 'Departure from Banff', description: ['Breakfast at hotel.', 'Transfer back to Calgary International Airport.', 'Final mountain views on departure.'] }
            ],
            bestTimeToVisit: [
                '☀️ June-September: Ideal for hiking, canoeing, and lake visits.',
                '❄️ December-March: Perfect for skiing, snowboarding, and ice skating.',
                '🍂 October: Beautiful fall colors, fewer crowds.',
                '🌸 May: Spring blooms, wildlife emerging.'
            ],
            weatherInfo: [
                'Summer: 10°C – 25°C (50°F – 77°F)',
                'Winter: -5°C – -20°C (23°F – -4°F)',
                'Spring/Autumn: 0°C – 15°C (32°F – 59°F)',
                'Variable mountain weather, be prepared for anything.'
            ]
        }
    },
    {
        tripId: 108742,
        title: 'Roraima Tepui',
        location: 'Canaima Park, Venezuela',
        country: 'Venezuela',
        price: 790,
        tags: ['Solo travel', 'Budget'],
        banner: HandpickedTripBanner2,
        tripDetails: {
            title: '6-Day Roraima Plateau Adventure',
            days: 6,
            location: 'Canaima Park, Venezuela',
            country: 'Venezuela',
            tags: ['Adventurous', 'Mountains', 'Solo travel', 'Budget'],
            rating: 4.4,
            price: 790,
            heading: 'Trek to the Lost World',
            subHeading: 'Ancient plateaus, misty heights',
            description: 'Embark on an extraordinary 6-day expedition to the mythical Roraima Tepui in Venezuela’s Canaima National Park. This challenging adventure takes you through diverse landscapes, from savannahs and dense rainforests to the unique ecosystem atop the plateau. Experience exhilarating hikes, stunning waterfalls, and nights under a canopy of countless stars. This journey offers a rare chance to connect with one of Earth\'s most pristine and isolated natural wonders, ideal for thrill-seekers and nature lovers.',
            subDescription: 'Guided treks through prehistoric landscapes and rare ecosystems, ideal for thrill-seekers and nature lovers.',
            activities: [
                {
                    title: 'Trek Launch and Base Camp Setup',
                    description: [
                        'Briefing with expert trek leaders.',
                        'Scenic drive through savannah to trailhead.',
                        '4-hour hike to base camp.',
                        'Dinner under the stars.'
                    ]
                },
                {
                    title: 'Climbing the Tepui Face',
                    description: [
                        'Challenging ascent along forested ridges.',
                        'Viewpoints over endless rainforest.',
                        'River crossings and rope-aided trails.',
                        'Camp just below summit cliffs.'
                    ]
                },
                {
                    title: 'Exploring the Summit',
                    description: [
                        'Panoramic views from the tabletop summit.',
                        'Crystal valleys and surreal rock formations.',
                        'Visit to the triple border marker.',
                        'Document flora only found here.'
                    ]
                },
                {
                    title: 'Hidden Pools and Stargazing',
                    description: [
                        'Swim in natural mountaintop pools.',
                        'Photograph dramatic tepui weather shifts.',
                        'Campfire dinner and stargazing session.',
                        'Night storytelling by local guide.'
                    ]
                },
                {
                    title: 'Descent to Valley Floor',
                    description: [
                        'Careful descent with photo breaks.',
                        'Jungle detour to visit unique flora.',
                        'Cool off in river stream.',
                        'Return to base camp.'
                    ]
                },
                {
                    title: 'Farewell and Departure',
                    description: [
                        'Wrap-up breakfast with guides.',
                        'Final walkout through the grasslands.',
                        'Depart to airport via community stop.',
                        'Takeaway traditional craft souvenirs.'
                    ]
                }
            ],
            bestTimeToVisit: [
                '☀️ Dry Season (Dec–Mar): Best visibility and safe trail conditions.',
                '🌦️ April–May: Lush greenery with light mist.',
                '🌀 Avoid wet season (Aug–Nov) due to slippery trails.',
                '🍃 Early June: Dramatic cloudscapes and fewer trekkers.'
            ],
            weatherInfo: [
                'Summit: 8°C – 18°C (46°F – 64°F)',
                'Base: 22°C – 29°C (72°F – 84°F)',
                'Humidity: 80–90%',
                'Night temps can drop below 10°C (50°F)'
            ]
        }
    },
    {
        tripId: 115834,
        title: 'Socotra Island',
        location: 'Yemen',
        country: 'Yemen',
        price: 870,
        tags: ['Luxury', 'Beach'],
        banner: HandpickedTripBanner3,
        tripDetails: {
            title: '7-Day Socotra Island Discovery',
            days: 7,
            location: 'Socotra Island, Yemen',
            country: 'Yemen',
            tags: ['Luxury', 'Beach', 'Nature', 'Adventure'],
            rating: 4.6,
            price: 870,
            heading: 'Untouched Paradise',
            subHeading: 'Dragons, dunes & crystal waters',
            description: 'Journey to Socotra Island, a truly extraordinary and isolated gem in the Indian Ocean, known for its unparalleled biodiversity and surreal, otherworldly landscapes. Discover endemic species like the iconic Dragon Blood Tree, explore pristine, deserted beaches with powdery white sands, dramatic towering sand dunes, and deep, ancient canyons. Immerse yourself in the island\'s raw beauty, swim in crystal-clear turquoise lagoons, and witness vibrant marine life, promising a profound sense of discovery and tranquility.',
            subDescription: 'Explore caves, climb sand dunes, and camp under starry skies beside dragon blood trees on this extraordinary island adventure.',
            activities: [
                {
                    title: 'Arrival and Hadibo Introduction',
                    description: [
                        'Meet your guide and explore the capital town.',
                        'Visit local markets for fresh seafood and crafts.',
                        'Orientation walk along the Socotra coastline.',
                        'Settle in at eco-lodge with sunset dinner.'
                    ]
                },
                {
                    title: 'Dragon Blood Tree Forest',
                    description: [
                        'Drive to Diksam Plateau.',
                        'Trek among bizarre dragon blood trees.',
                        'Learn about Socotra’s endemic species.',
                        'Camp with panoramic mountain views.'
                    ]
                },
                {
                    title: 'Wadi Dirhur Canyon',
                    description: [
                        'Morning canyon hike and river crossing.',
                        'Swim in natural rock pools.',
                        'Lunch picnic beside waterfalls.',
                        'Sunset photography of limestone cliffs.'
                    ]
                },
                {
                    title: 'Detwah Lagoon & Fishing Village',
                    description: [
                        'Visit traditional fishermen at Qalansiya.',
                        'Kayak through the turquoise lagoon.',
                        'Explore coral-rich shallows barefoot.',
                        'Enjoy grilled catch of the day on the beach.'
                    ]
                },
                {
                    title: 'Shuaab Beach & Dolphin Watching',
                    description: [
                        'Boat ride to remote Shuaab beach.',
                        'Dolphin and bird watching.',
                        'Snorkeling in coral gardens.',
                        'Afternoon beach games and shell collecting.'
                    ]
                },
                {
                    title: 'Hoq Cave and Ancient Carvings',
                    description: [
                        'Climb into Hoq Cave with lanterns.',
                        'Admire 7km-long stalactite systems.',
                        'Discover inscriptions from ancient sailors.',
                        'Evening storytelling by your Socotri guide.'
                    ]
                },
                {
                    title: 'Departure & Cultural Farewell',
                    description: [
                        'Pack and visit village cooperatives.',
                        'Enjoy farewell brunch with Socotri hosts.',
                        'Capture last island views from Hadibo hill.',
                        'Transfer to airport for departure.'
                    ]
                }
            ],
            bestTimeToVisit: [
                '🌞 February–April: Ideal for beach visits and safe sea conditions.',
                '🍃 October–November: Green season, fewer tourists.',
                '🌤️ January: Cool and calm island breezes.',
                '🚫 Avoid May–September: High winds and rough seas.'
            ],
            weatherInfo: [
                'Summer: 25°C – 35°C (77°F – 95°F)',
                'Winter: 20°C – 28°C (68°F – 82°F)',
                'Humidity: 60%–75%',
                'Sea temps remain around 26°C (79°F)'
            ]
        }
    },
    {
        tripId: 122990,
        title: 'Machu Picchu & Sacred Valley',
        location: 'Cusco, Peru',
        country: 'Peru',
        price: 1200,
        tags: ['Mountains', 'History'],
        banner: HandpickedTripBanner4,
        tripDetails: {
            title: '8-Day Ancient Inca Trails & Machu Picchu',
            days: 8,
            location: 'Cusco, Peru',
            country: 'Peru',
            tags: ['History', 'Culture', 'Mountains', 'Archaeology'],
            rating: 4.8,
            price: 1200,
            heading: 'Journey to the Lost City',
            subHeading: 'Unraveling the mysteries of the Incas',
            description: 'Immerse yourself in the ancient wonders of Peru with an 8-day expedition through the Sacred Valley and to the majestic Machu Picchu. Explore vibrant markets, ancient Inca ruins, and experience the rich cultural heritage of the Andes. This journey combines stunning landscapes with profound historical insights, culminating in the awe-inspiring citadel of Machu Picchu.',
            subDescription: 'Trek through stunning Andean landscapes, explore vibrant local markets, and discover ancient Inca citadels.',
            activities: [
                { title: 'Arrival in Cusco & City Tour', description: ['Welcome at Cusco Airport and transfer to hotel.', 'Acclimatization time.', 'Afternoon city tour: Plaza de Armas, Coricancha Temple.', 'Traditional Peruvian dinner.'] },
                { title: 'Sacred Valley Exploration', description: ['Visit Pisac market and ruins.', 'Explore Ollantaytambo fortress and village.', 'Lunch at a local Andean restaurant.', 'Overnight in Sacred Valley.'] },
                { title: 'Moray & Maras Salt Mines', description: ['Discover the agricultural terraces of Moray.', 'Visit the ancient Maras Salt Mines.', 'Optional: ATV tour in Sacred Valley.', 'Cooking class on Peruvian cuisine.'] },
                { title: 'Journey to Machu Picchu', description: ['Train ride to Aguas Calientes.', 'Bus to Machu Picchu citadel.', 'Guided tour of Machu Picchu.', 'Free time to explore or hike Huayna Picchu (permit dependent).'] },
                { title: 'Second Visit to Machu Picchu (Optional) & Return to Cusco', description: ['Optional sunrise return to Machu Picchu.', 'Further exploration or specific hikes.', 'Train back to Ollantaytambo or Poroy.', 'Transfer to Cusco.'] },
                { title: 'Rainbow Mountain Trek (Optional)', description: ['Early morning start for Rainbow Mountain trek.', 'Witness the vibrant geological formations.', 'Return to Cusco.', 'Farewell dinner.'] },
                { title: 'Cusco Free Day or Optional Activities', description: ['Explore San Blas neighborhood.', 'Visit museums or art galleries.', 'Shopping for souvenirs.', 'Optional: Cooking class or textile workshop.'] },
                { title: 'Departure from Cusco', description: ['Breakfast at hotel.', 'Transfer to Cusco Airport for departure.'] }
            ],
            bestTimeToVisit: [
                '☀️ May-October: Dry season, best for trekking and clear skies.',
                '🌧️ November-April: Wet season, greener landscapes but more rain.',
                '🍃 June-August: Peak season, book well in advance.',
                '🌸 March-May: Shoulder season, pleasant weather, fewer crowds.'
            ],
            weatherInfo: [
                'Cusco/Sacred Valley: 5°C – 20°C (41°F – 68°F)',
                'Machu Picchu: 10°C – 25°C (50°F – 77°F)',
                'Nights can be cold, especially at higher altitudes.',
                'Rain is more frequent during wet season.'
            ]
        }
    },
    {
        tripId: 134221,
        title: 'Giza Pyramids & Nile Cruise',
        location: 'Cairo, Egypt',
        country: 'Egypt',
        price: 1100,
        tags: ['History', 'Culture'],
        banner: HandpickedTripBanner5,
        tripDetails: {
            title: '9-Day Ancient Egypt & Nile Odyssey',
            days: 9,
            location: 'Cairo, Egypt',
            country: 'Egypt',
            tags: ['Ancient Civilizations', 'Nile', 'Desert', 'Culture'],
            rating: 4.7,
            price: 1100,
            heading: 'Timeless Wonders of the Nile',
            subHeading: 'Journey through millennia of history',
            description: 'Uncover the mysteries of ancient Egypt on a 9-day journey that combines the iconic landmarks of Cairo with a serene cruise down the Nile River. Witness the majestic Pyramids of Giza, explore the treasures of the Egyptian Museum, and sail past ancient temples and tombs from Luxor to Aswan, gaining deep insights into one of the world\'s oldest civilizations.',
            subDescription: 'Explore iconic pyramids, vibrant markets, and sail the legendary Nile, discovering temples and tombs along the way.',
            activities: [
                { title: 'Arrival in Cairo & Pyramids of Giza', description: ['Meet and greet at Cairo Airport.', 'Check into hotel near Pyramids.', 'Visit the Great Pyramids of Giza & Sphinx.', 'Sound and Light Show at Pyramids (optional).'] },
                { title: 'Egyptian Museum & Khan el-Khalili', description: ['Explore the Egyptian Museum (Grand Egyptian Museum when open).', 'Visit Citadel of Salah al-Din & Alabaster Mosque.', 'Shopping and exploration at Khan el-Khalili bazaar.', 'Dinner in Old Cairo.'] },
                { title: 'Flight to Luxor & Nile Cruise Embarkation', description: ['Morning flight to Luxor.', 'Check into Nile Cruise boat.', 'Visit Karnak Temple & Luxor Temple.', 'Overnight on cruise in Luxor.'] },
                { title: 'West Bank Exploration', description: ['Visit Valley of the Kings and Hatshepsut Temple.', 'Colossi of Memnon photo stop.', 'Lunch on board.', 'Sail towards Edfu.'] },
                { title: 'Edfu & Kom Ombo Temples', description: ['Visit Edfu Temple of Horus by horse carriage.', 'Sail to Kom Ombo and visit the unique double temple.', 'Galabeya Party on board.', 'Sail to Aswan.'] },
                { title: 'Aswan Highlights', description: ['Visit High Dam, Unfinished Obelisk, and Philae Temple.', 'Felucca ride on the Nile.', 'Optional: Abu Simbel excursion.', 'Overnight on cruise in Aswan.'] },
                { title: 'Disembarkation & Flight to Cairo', description: ['Disembark after breakfast.', 'Flight back to Cairo.', 'Free afternoon for leisure or final souvenir shopping.', 'Farewell dinner.'] },
                { title: 'Departure from Cairo', description: ['Breakfast at hotel.', 'Transfer to Cairo International Airport for departure.'] }
            ],
            bestTimeToVisit: [
                '☀️ October-April: Cooler and more pleasant weather for sightseeing.',
                '🍃 May & September: Shoulder seasons, fewer crowds but hotter.',
                '🚫 Avoid June-August: Very hot temperatures, especially in Upper Egypt.'
            ],
            weatherInfo: [
                'Cairo: 15°C – 30°C (59°F – 86°F) in winter, 25°C – 40°C (77°F – 104°F) in summer.',
                'Luxor/Aswan: Warmer than Cairo, especially in summer.',
                'Dry desert climate, low humidity.',
                'Nights can be cool in winter.'
            ]
        }
    },
    {
        tripId: 148990,
        title: 'Anse Source d\'Argent',
        location: 'Aysén Region',
        country: 'Chile',
        price: 682,
        tags: ['Sports', 'Budget'],
        banner: HandpickedTripBanner6,
        tripDetails: {
            title: '6-Day Patagonian Fjords & Glaciers',
            days: 6,
            location: 'Aysén Region, Chile',
            country: 'Chile',
            tags: ['Budget', 'Adventurous', 'Mountains', 'Sports'],
            rating: 4.3,
            price: 682,
            heading: 'Wild Chilean Patagonia',
            subHeading: 'Glaciers, Rivers & Ice Caves',
            description: 'Unravel the natural wonders of Chilean Patagonia\'s Aysén Region, one of the continent\'s least-touched wildernesses. This adventure is for those who crave active exploration amidst dramatic mountains, expansive glaciers, and intricate turquoise fjords. Paddle through icy blue fjords, discover the otherworldly Marble Caves, and feel the thrill of rafting down glacier-fed rivers, making for an immersive and unforgettable experience.',
            subDescription: 'Camp beneath glaciers, taste mountain herbs, and raft glacier-fed rivers through Chile’s forgotten frontier.',
            activities: [
                {
                    title: 'Arrival in Coyhaique & Orientation',
                    description: [
                        'Flight into Balmaceda and shuttle to Coyhaique.',
                        'Explore artisan markets and mountain cafés.',
                        'Gear up with local outfitters.',
                        'Dinner with traditional Patagonian lamb barbecue.'
                    ]
                },
                {
                    title: 'Fjord Kayaking in Puerto Aysén',
                    description: [
                        'Paddle through icy blue fjords with a local guide.',
                        'Visit a sea lion colony on Isla Magdalena.',
                        'Picnic lunch at secluded pebble beach.',
                        'Camp setup beside Río Simpson.'
                    ]
                },
                {
                    title: 'Marble Caves Expedition',
                    description: [
                        'Boat ride across Lago General Carrera.',
                        'Enter crystal marble caverns by kayak.',
                        'Photography session inside turquoise domes.',
                        'Return to shore for hot cocoa and rest.'
                    ]
                },
                {
                    title: 'Hiking Queulat National Park',
                    description: [
                        'Trek to the hanging glacier (Ventisquero Colgante).',
                        'Spot condors & native lenga trees.',
                        'Swim in glacial river pools (optional).',
                        'Campfire dinner with mountain tea.'
                    ]
                },
                {
                    title: 'Rafting Rio Baker',
                    description: [
                        'White-water rafting with expert guides.',
                        'Stop at confluence viewpoint of two rivers.',
                        'Learn about hydropower resistance history.',
                        'Group celebration dinner in Cochrane.'
                    ]
                },
                {
                    title: 'Farewell and Departure',
                    description: [
                        'Morning nature walk near Coyhaique.',
                        'Pack and transfer to airport.',
                        'Stop for local sweets & cheese en route.',
                        'Goodbye hugs and glacier views from the air.'
                    ]
                }
            ],
            bestTimeToVisit: [
                '🌤️ December–March: Patagonian summer, best for hiking.',
                '🌬️ October: Windy, but great for rafting.',
                '🍂 April: Autumn colors and cooler temps.',
                '🚫 Avoid June–August: Most parks closed due to snow.'
            ],
            weatherInfo: [
                'Summer: 9°C – 22°C (48°F – 72°F)',
                'Nighttime lows: 3°C – 7°C (37°F – 45°F)',
                'Snow possible in early spring',
                'Rain common year-round—bring a poncho!'
            ]
        }
    },
    {
        tripId: 152341,
        title: 'Taman Negara',
        location: 'Peninsular Malaysia',
        country: 'Malaysia',
        price: 386,
        tags: ['Mountains', 'Adventurous'],
        banner: HandpickedTripBanner7,
        tripDetails: {
            title: '4-Day Jungle Expedition in Taman Negara',
            days: 4,
            location: 'Peninsular Malaysia',
            country: 'Malaysia',
            tags: ['Jungle', 'Adventure', 'Wildlife', 'Budget'],
            rating: 4.4,
            price: 386,
            heading: 'Malaysia’s Rainforest Heart',
            subHeading: 'Canopy walks & river trails',
            description: 'Dive deep into the heart of Peninsular Malaysia with a thrilling 4-day jungle expedition into Taman Negara, one of the world\'s oldest rainforests. Experience the famous Canopy Walkway, trek through dense trails, and discover unique flora and fauna. This immersive adventure offers opportunities for wildlife spotting, river cruises, and connecting with indigenous communities, providing a truly unforgettable wilderness journey.',
            subDescription: 'Hike dense trails, float down rapids, and spot nocturnal wildlife on a once-in-a-lifetime jungle journey.',
            activities: [
                {
                    title: 'Arrival and Canopy Walk',
                    description: [
                        'Transfer from Kuala Lumpur via Jerantut.',
                        'Check into riverside jungle lodge.',
                        'Climb to 45-meter canopy walkway.',
                        'Sunset dinner listening to gibbon calls.'
                    ]
                },
                {
                    title: 'Jungle Trek & Waterfall Swim',
                    description: [
                        'Hike to Bukit Teresek with panoramic rainforest views.',
                        'Cool off at Lata Berkoh waterfall.',
                        'River lunch on floating raft.',
                        'Optional night safari into jungle.'
                    ]
                },
                {
                    title: 'Rapids Shooting and Tribal Visit',
                    description: [
                        'Thrilling boat ride through river rapids.',
                        'Meet Batek tribe & learn blowpipe skills.',
                        'Join for storytelling and traditional songs.',
                        'Campfire feast with local herbs & rice.'
                    ]
                },
                {
                    title: 'Return Trek and Departure',
                    description: [
                        'Morning birdwatching walk.',
                        'Pack and boat transfer back to jetty.',
                        'Snack stop for fried bananas.',
                        'Return to Kuala Lumpur with memories in tow.'
                    ]
                }
            ],
            bestTimeToVisit: [
                '🌧️ February–September: Dryer months, safer trails.',
                '🌿 April: Lush foliage, fewer leeches.',
                '🦋 May: Insect & wildlife peak.',
                '🚫 Avoid November–January: Heavy monsoon rains.'
            ],
            weatherInfo: [
                'Daytime: 24°C – 32°C (75°F – 90°F)',
                'Humidity: 90%+ most days',
                'Frequent afternoon rainstorms',
                'River temps warm enough to swim'
            ]
        }
    },
    {
        tripId: 161119,
        title: 'Zhangye Landform',
        location: 'Gansu, China',
        country: 'China',
        price: 582,
        tags: ['Solo travel', 'City'],
        banner: HandpickedTripBanner8,
        tripDetails: {
            title: '3-Day Zhangye Rainbow Mountains Tour',
            days: 3,
            location: 'Gansu Province, China',
            country: 'China',
            tags: ['Nature', 'Photography', 'Adventure', 'Solo travel'],
            rating: 4.4,
            price: 582,
            heading: 'Painted Peaks & Silk Road Echoes',
            subHeading: 'A visual spectacle among desert ranges',
            description: 'Travel to western China to witness the kaleidoscopic landforms of Zhangye Danxia National Geopark, famously known as the "Rainbow Mountains." This geological wonder, sculpted over millennia, presents vibrant, otherworldly colors. Beyond the stunning natural artistry, explore the rich history of the ancient Silk Road in Zhangye city, visiting Buddhist grottoes and ancient temples. This trip offers a unique blend of natural beauty and historical intrigue, perfect for solo adventurers and photography enthusiasts.',
            subDescription: 'From sunrise viewpoints to Buddhist grottoes, experience an ancient trade route infused with vibrant natural artistry.',
            activities: [
                {
                    title: 'Arrival & Zhangye Exploration',
                    description: [
                        'Fly into Zhangye Ganzhou Airport.',
                        'Check-in at a local boutique hotel.',
                        'Evening stroll along the Silk Road street market.',
                        'Dinner with Gansu-style hand-pulled noodles.'
                    ]
                },
                {
                    title: 'Rainbow Mountain Hiking & Grotto Visit',
                    description: [
                        'Early sunrise hike through Danxia formations.',
                        'Guided photography workshop on viewpoints.',
                        'Visit Mati Temple Grottoes carved into cliffs.',
                        'Camel ride across nearby dunes (optional).'
                    ]
                },
                {
                    title: 'Cultural Immersion & Departure',
                    description: [
                        'Explore Buddhist relics at Dafo Temple.',
                        'Try local breakfast pastries and milk tea.',
                        'Visit a farmer’s museum & souvenir stop.',
                        'Afternoon flight departure.'
                    ]
                }
            ],
            bestTimeToVisit: [
                '☀️ June–September: Colors at their peak.',
                '🌤️ May: Best for mild weather and fewer tourists.',
                '🍁 October: Cooler days, colorful desert plants.',
                '🚫 Avoid January–March: Cold and snow cover the hues.'
            ],
            weatherInfo: [
                'Summer: 17°C – 30°C (63°F – 86°F)',
                'Autumn: 8°C – 22°C (46°F – 72°F)',
                'Desert dryness: Carry water at all times',
                'UV index high — sunscreen recommended'
            ]
        }
    },
];


// <======== Exporting Constants for PaymentSuccess-Page ========>
const confettiSettings = {
    particleCount: 200,
    spread: 60,
    colors: ["#FF0", "#FF7F00", "#FF0044", "#4C94F4", "#F4F4F4"],
    decay: 0.95,
};

export const leftConfetti = {
    ...confettiSettings,
    angle: 45,
    origin: { x: 0, y: 1 },
};

export const rightConfetti = {
    ...confettiSettings,
    angle: 135,
    origin: { x: 1, y: 1 },
};