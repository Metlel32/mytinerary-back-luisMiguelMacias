import 'dotenv/config.js'
import '../../config/database.js'
import City from '../City.js'

const cities = [
    {
        name: "New York",
        images: "https://image.nuevayork.com/wp-content/uploads/2020/03/New-York-Helicopter-Tour-2.eric_both.bottom_right.jpg",
        country: "United States",
        continent: "North America",
        description: "Known as 'The Big Apple', New York City is a global hub of culture, economy, and entertainment. It is home to some of the world's most iconic landmarks, including Times Square, the Statue of Liberty, and the Empire State Building. The city is renowned for its Broadway theater district, Wall Street financial center, and its diverse culinary scene, offering everything from high-end dining to famous street food. With its bustling atmosphere, world-class museums like the Metropolitan Museum of Art, and vibrant neighborhoods such as Brooklyn and Harlem, New York City remains one of the most visited and influential cities in the world.",
        currency: "United States Dollar (USD)"
    },
    {
        name: "Paris",
        images: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/640px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg",
        country: "France",
        continent: "Europe",
        description: "The 'City of Light' is one of the most romantic and artistic destinations in the world. Paris is famous for its iconic landmarks such as the Eiffel Tower, Notre-Dame Cathedral, and the Louvre Museum, which houses the Mona Lisa. As the fashion capital of the world, it boasts luxury boutiques, haute couture fashion houses, and historic shopping districts like the Champs-Élysées. The city's café culture, exquisite cuisine, and picturesque streets make it a dream destination for travelers. Paris is also known for its literary history, with figures like Hemingway and Victor Hugo having lived and written here, making it a center of creativity and inspiration.",
        currency: "Euro (EUR)"
    },
    {
        name: "Tokyo",
        images: "https://a.storyblok.com/f/55469/1170x728/686a5d2781/jp_00_tyo_1.jpeg",
        country: "Japan",
        continent: "Asia",
        description: "Tokyo is a city where tradition meets futuristic innovation. It is famous for its bustling districts such as Shibuya, known for its busy crossing, and Akihabara, the center of anime and electronics culture. The city blends ancient temples like Senso-ji with cutting-edge skyscrapers and high-tech experiences. Tokyo is also a paradise for food lovers, offering everything from sushi and ramen to high-end Michelin-starred restaurants. The city's vibrant nightlife, extensive public transportation system, and cultural festivals make it a fascinating place to explore. With cherry blossoms in spring, fireworks in summer, and warm hospitality, Tokyo remains a must-visit destination.",
        currency: "Japanese Yen (JPY)"
    },
    {
        name: "London",
        images: "https://www.clarin.com/2018/05/05/HJ7fwuhpf_1256x620__1.jpg",
        country: "United Kingdom",
        continent: "Europe",
        description: "London is a city steeped in history yet constantly evolving with modern influences. It is home to famous sites such as Buckingham Palace, the Tower of London, and the British Museum, which holds artifacts from around the world. London's cultural diversity is reflected in its neighborhoods, from the artistic streets of Camden to the upscale elegance of Mayfair. The city is a global center for finance, media, and education, with world-renowned institutions like Oxford and Cambridge nearby. Whether it's enjoying West End theater, experiencing a traditional afternoon tea, or taking a ride on the London Eye, there is always something to discover in this dynamic metropolis.",
        currency: "Pound Sterling (GBP)"
    },
    {
        name: "Sydney",
        images: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Sydney_skyline_at_dusk_-_Dec_2008.jpg/600px-Sydney_skyline_at_dusk_-_Dec_2008.jpg",
        country: "Australia",
        continent: "Oceania",
        description: "Sydney is a vibrant and multicultural city that boasts breathtaking coastal views and world-famous landmarks. The Sydney Opera House, with its sail-like design, is an architectural masterpiece, while the Sydney Harbour Bridge offers thrilling climbing experiences. The city is known for its pristine beaches, such as Bondi and Manly, where locals and tourists alike enjoy surfing and sunbathing. Sydney's diverse neighborhoods offer a mix of nightlife, shopping, and cultural attractions, from the historic Rocks district to the trendy cafes of Newtown. With a thriving arts scene, delicious cuisine, and year-round sunshine, Sydney is a city that captivates visitors from all around the world.",
        currency: "Australian Dollar (AUD)"
    },
    {
        name: "Rio de Janeiro",
        images: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0e/3b/66/8f.jpg",
        country: "Brazil",
        continent: "South America",
        description: "Famous for its stunning beaches like Copacabana and Ipanema, Rio de Janeiro is a vibrant city full of rhythm, culture, and natural beauty. It hosts the world-famous Carnival, an explosion of music, dance, and colorful parades featuring samba schools that attract millions of visitors every year. The city is home to Christ the Redeemer, an iconic statue standing atop Corcovado Mountain, offering breathtaking panoramic views of the landscape. Surrounded by lush forests, mountains, and the deep blue Atlantic Ocean, Rio's lively atmosphere extends to its bustling streets, where street performers, local markets, and music can be found at every corner. Whether exploring Sugarloaf Mountain, enjoying the rich culinary scene, or experiencing the energy of a football match at Maracanã Stadium, Rio offers an unforgettable experience full of passion and excitement.",
        currency: "Brazilian Real (BRL)"
    },
    {
        name: "Cape Town",
        images: "https://i0.wp.com/www.enkosiafrica.com/wp-content/uploads/2017/10/aerial-cape-town.jpg",
        country: "South Africa",
        continent: "Africa",
        description: "Cape Town is a breathtaking coastal city known for its dramatic landscapes, rich history, and diverse culture. Nestled beneath the towering Table Mountain, which offers hiking trails and a famous cable car ride to its flat summit, the city boasts stunning views of the surrounding ocean and land. The nearby Cape of Good Hope and Boulders Beach, home to a colony of African penguins, are must-visit destinations for nature lovers. Cape Town is also famous for its vibrant waterfront, where visitors can explore shops, restaurants, and cultural attractions such as the Zeitz Museum of Contemporary Art Africa. The city's history is deeply tied to Robben Island, where Nelson Mandela was imprisoned, offering a powerful and emotional experience for those interested in South Africa's past. With world-class wineries in the nearby Stellenbosch region and pristine beaches like Camps Bay, Cape Town is a dream destination for adventurers, history enthusiasts, and food lovers alike.",
        currency: "South African Rand (ZAR)"
    },
    {
        name: "Moscow",
        images: "https://www.shutterstock.com/image-photo/moscow-downtown-summer-russia-aerial-260nw-713117470.jpg",
        country: "Russia",
        continent: "Europe/Asia",
        description: "Moscow, the historic and political heart of Russia, is a city where the past and the present merge seamlessly. The iconic Red Square serves as the epicenter of the city, home to St. Basil's Cathedral, famous for its colorful onion-shaped domes, and the imposing Kremlin, which houses the Russian government and a collection of museums. The city's impressive metro system is often called 'the underground palace' due to its ornately decorated stations featuring mosaics, chandeliers, and statues. Moscow's cultural scene is vibrant, with world-renowned ballet and opera performances at the Bolshoi Theatre, as well as a thriving contemporary art scene. The Moscow River winds through the city, offering scenic boat tours past historic landmarks and modern skyscrapers. With its rich literary heritage, grand palaces, bustling nightlife, and an ever-present sense of grandeur, Moscow is a captivating destination that leaves a lasting impression on every visitor.",
        currency: "Russian Ruble (RUB)"
    },
    {
        name: "Beijing",
        images: "https://t4.ftcdn.net/jpg/04/02/39/87/360_F_402398790_k3L190ASfWQqrem9f4CNLr8csArUE0dp.jpg",
        country: "China",
        continent: "Asia",
        description: "As the capital of China, Beijing is a city where ancient traditions and rapid modernization coexist. It is home to some of the world's most significant historical sites, including the Forbidden City, an immense palace complex that once housed Chinese emperors, and the Temple of Heaven, a masterpiece of Ming Dynasty architecture. The Great Wall of China, stretching for thousands of miles, can be accessed from Beijing, offering breathtaking views and a glimpse into China's ancient defense strategies. The city's bustling streets are filled with traditional markets, vibrant hutongs (historic alleyways), and cutting-edge skyscrapers, showcasing its dynamic transformation over the years. Beijing's culinary scene is world-famous, featuring dishes like Peking duck, dumplings, and a variety of regional specialties. With a rich cultural heritage, top-tier museums, and a fast-paced urban lifestyle, Beijing offers an immersive experience that blends history, innovation, and tradition like few other cities in the world.",
        currency: "Chinese Yuan (CNY)"
    },
    {
        name: "Mumbai",
        images: "https://www.hindustantimes.com/ht-img/img/2024/12/18/550x309/Cities_1_1734524006079_1734524020011.jpg",
        country: "India",
        continent: "Asia",
        description: "Mumbai, the financial capital of India, is a city of contrasts where towering skyscrapers stand alongside historic colonial-era buildings. As the heart of Bollywood, Mumbai is a cultural powerhouse, producing some of the world's most famous films and hosting a thriving entertainment industry. The city's streets are alive with energy, from the bustling markets of Colaba to the stunning Marine Drive, known as the 'Queen's Necklace' when lit up at night. Landmarks such as the Gateway of India, Chhatrapati Shivaji Terminus, and Elephanta Caves offer glimpses into Mumbai's rich history and architectural grandeur. The city is also known for its street food, with must-try dishes like vada pav, pav bhaji, and bhel puri available at every corner. Despite its fast-paced lifestyle, Mumbai is home to peaceful escapes like Sanjay Gandhi National Park, where visitors can explore caves and spot wildlife. A melting pot of cultures, traditions, and economic opportunities, Mumbai is a city that never sleeps and never ceases to amaze.",
        currency: "Indian Rupee (INR)"
    },
    {
        name: "Mexico City",
        images: "https://www.latamairlines.com/content/dam/latamxp/sites/destinos/mexico/hero/MEX.jpg",
        country: "Mexico",
        continent: "North America",
        description: "Mexico City, one of the largest and most vibrant cities in the world, is a place where ancient Aztec history blends seamlessly with colonial and modern influences. The historic center, a UNESCO World Heritage Site, is home to the impressive Zócalo, one of the largest public squares in the world, surrounded by the Metropolitan Cathedral and the National Palace. The ruins of Templo Mayor offer a glimpse into the city's pre-Hispanic past, while the Chapultepec Forest, one of the largest city parks globally, houses museums, a zoo, and the impressive Chapultepec Castle. Mexico City is also a culinary paradise, known for its tacos, tamales, and street food culture, while neighborhoods like Roma and Condesa offer trendy cafes and an artistic atmosphere. With world-class museums like the Frida Kahlo Museum and the National Museum of Anthropology, lively markets, and an energetic nightlife, Mexico City is an unforgettable destination full of history, culture, and life.",
        currency: "Mexican Peso (MXN)"
    },
    {
        name: "Cairo",
        images: "https://images.adsttc.com/media/images/64a2/cdae/cb9c/464f/a63a/9764/large_jpg/cairo-architecture-city-guide-exploring-the-unique-architectural-blend-of-historical-and-contemporary-in-egypts-bustling-capital_23.jpg",
        country: "Egypt",
        continent: "Africa",
        description: "Cairo, the capital of Egypt, is a bustling metropolis that serves as a gateway to one of the world's most extraordinary civilizations. Located on the banks of the Nile River, Cairo is famous for its proximity to the Great Pyramids of Giza, one of the Seven Wonders of the Ancient World, and the enigmatic Sphinx. The Egyptian Museum holds an extensive collection of artifacts, including treasures from the tomb of Tutankhamun. The city's Islamic heritage is reflected in its stunning mosques, such as the Sultan Hassan Mosque and the Al-Azhar Mosque, while the historic Khan El Khalili bazaar is a paradise for shoppers looking for spices, textiles, and handcrafted souvenirs. Modern Cairo is also a center of arts, entertainment, and culinary delights, offering everything from traditional Egyptian dishes to fine dining experiences. With its rich history, lively streets, and warm hospitality, Cairo is a captivating destination where the past and present coexist in harmony.",
        currency: "Egyptian Pound (EGP)"
    },
    {
        name: "Bangkok",
        images: "https://www.travelandtourworld.com/wp-content/uploads/2024/12/Somudranil_Sarkar_CREATE_A_CINEMATIC_PHOTO_OF_Bangkok_Crowned_World_dd000350-5b06-4787-b5fc-d2c7317a3cd7-1.png",
        country: "Thailand",
        continent: "Asia",
        description: "Bangkok, the dynamic capital of Thailand, is a city that blends rich cultural heritage with modern urban energy. It is renowned for its dazzling Buddhist temples, such as Wat Arun, Wat Phra Kaew, and the Grand Palace, which showcase the country's artistic and spiritual traditions. The Chao Phraya River flows through the city, offering scenic boat rides that connect visitors to floating markets and riverside landmarks. Bangkok is also famous for its vibrant street life, from bustling night markets filled with street food vendors to the lively entertainment districts of Khao San Road and Sukhumvit. The city's culinary scene is world-class, featuring everything from Michelin-starred restaurants to local dishes like pad thai and mango sticky rice. Shoppers can explore luxury malls like ICONSIAM or traditional markets like Chatuchak. Whether you're seeking history, shopping, relaxation, or adventure, Bangkok's energy and charm make it a must-visit destination.",
        currency: "Thai Baht (THB)"
    },
    {
        name: "Istanbul",
        images: "https://www.semana.com/resizer/v2/MF6HYFXPVZHLJN4VX3EXJS7YUA.jpg?auth=6176f342962c25ba3f5ac215affa9e4662ee6a962fda8a4831c5e71332384fe3&smart=true&quality=75&width=1280&height=720",
        country: "Turkey",
        continent: "Europe/Asia",
        description: "Istanbul, a city that straddles both Europe and Asia, is a melting pot of cultures, history, and breathtaking architecture. As the former capital of the Byzantine and Ottoman Empires, Istanbul is filled with historical treasures such as the Hagia Sophia, a stunning masterpiece that has served as both a church and a mosque, and the Blue Mosque, famous for its intricate blue tiles and towering minarets. The Grand Bazaar, one of the world's oldest and largest covered markets, offers a labyrinth of shops selling spices, carpets, jewelry, and ceramics. Visitors can take a scenic Bosphorus cruise, which offers panoramic views of the city's skyline, palaces, and bridges connecting two continents. The city's rich culinary culture includes Turkish delights such as kebabs, baklava, and traditional tea served in charming cafés. With its unique fusion of old and new, Istanbul is a city that captivates visitors with its vibrant energy, warm hospitality, and deep historical significance.",
        currency: "Turkish Lira (TRY)"
    },
    {
        name: "Toronto",
        images: "https://content.r9cdn.net/rimg/dimg/3a/ea/b76d27b8-city-11592-163dad74a67.jpg",
        country: "Canada",
        continent: "North America",
        description: "Toronto, Canada's largest and most multicultural city, is a thriving metropolis that offers a perfect blend of urban sophistication and natural beauty. The city's skyline is dominated by the CN Tower, one of the tallest freestanding structures in the world, offering panoramic views and a thrilling EdgeWalk experience. Toronto is a city of neighborhoods, from the historic Distillery District with its cobblestone streets and art galleries to the lively Kensington Market, known for its eclectic shops and global cuisine. The city is home to world-class museums, such as the Royal Ontario Museum and the Art Gallery of Ontario, as well as major sports teams and entertainment hubs like Scotiabank Arena. Toronto's waterfront along Lake Ontario features parks, beaches, and ferry rides to the Toronto Islands, providing a serene escape from the city's hustle and bustle. With its rich cultural scene, diverse population, and endless attractions, Toronto is a vibrant and welcoming destination for visitors from all walks of life.",
        currency: "Canadian Dollar (CAD)"
    },
    {
        name: "Dubai",
        images: "https://media.tacdn.com/media/attractions-splice-spp-674x446/10/71/94/a2.jpg",
        country: "United Arab Emirates",
        continent: "Asia",
        description: "Dubai is a futuristic city known for its ultramodern architecture, luxury shopping, and vibrant nightlife. Home to the world's tallest building, the Burj Khalifa, and the extravagant Palm Jumeirah artificial island, Dubai offers a unique blend of innovation and opulence. The city is also a cultural hub, featuring the historic Al Fahidi district and the bustling souks of Deira. Visitors can experience desert safaris, indoor skiing at Ski Dubai, and extravagant dining experiences. With its year-round sunshine, cutting-edge attractions, and lavish lifestyle, Dubai continues to be a top destination for travelers worldwide.",
        currency: "United Arab Emirates Dirham (AED)"
    },
    {
        name: "Singapore",
        images: "https://www.turium.es/wp-content/uploads/sites/4/2024/07/edificios-singapur-scaled.jpg",
        country: "Singapore",
        continent: "Asia",
        description: "Singapore is a dynamic island city-state known for its impressive skyline, efficient infrastructure, and multicultural diversity. Home to Marina Bay Sands, Gardens by the Bay, and Sentosa Island, the city blends nature with urban innovation. Singapore is a food lover's paradise, offering everything from hawker center delights to Michelin-starred dining. The city's blend of Chinese, Malay, Indian, and Western influences creates a unique cultural experience. With its world-class shopping, stunning waterfront, and eco-friendly initiatives, Singapore stands out as a must-visit destination in Southeast Asia.",
        currency: "Singapore Dollar (SGD)"
    },
    {
        name: "Buenos Aires",
        images: "https://toposmagazine.com/wp-content/uploads/2021/10/1-Von-Deensel_Puerto_Madero_Buenos_Aires_40689219792-min-2-aspect-ratio-16-9.jpg",
        country: "Argentina",
        continent: "South America",
        description: "Buenos Aires, the capital of Argentina, is a city that exudes passion, from its tango music to its vibrant nightlife. Known as the 'Paris of South America,' it boasts stunning European-style architecture, bustling cafés, and grand boulevards. The city's diverse neighborhoods, such as the colorful La Boca, the historic San Telmo, and the elegant Recoleta, offer unique experiences. Buenos Aires is also famous for its rich culinary scene, featuring world-class steaks and Malbec wines. With its thriving arts, culture, and football fanaticism, Buenos Aires is a city that captivates visitors with its charm and energy.",
        currency: "Argentine Peso (ARS)"
    },
    {
        name: "Barcelona",
        images: "https://wp.growproexperience.com/wp-content/uploads/2022/06/Que-ver-en-Barcelona.jpg",
        country: "Spain",
        continent: "Europe",
        description: "Barcelona is a Mediterranean city that blends Gothic history with modernist charm. Famous for Antoni Gaudí's masterpieces, including the Sagrada Familia and Park Güell, the city is a paradise for architecture lovers. Barcelona's beaches, vibrant nightlife, and world-renowned football team, FC Barcelona, make it a lively and exciting destination. The historic La Rambla, bustling markets like La Boqueria, and delicious Catalan cuisine add to its charm. Whether exploring its artistic heritage, enjoying tapas, or relaxing by the sea, Barcelona offers a unique and unforgettable experience.",
        currency: "Euro (EUR)"
    },
    {
        name: "Seoul",
        images: "https://urilingo.com/wp-content/uploads/2023/12/01hh6y7ozfk-1024x609.jpg",
        country: "South Korea",
        continent: "Asia",
        description: "Seoul, the capital of South Korea, is a city where ancient traditions meet cutting-edge technology. Landmarks like Gyeongbokgung Palace, Bukchon Hanok Village, and the bustling streets of Myeongdong showcase the city's cultural richness. Seoul is also a global center for K-pop, fashion, and street food, with markets like Gwangjang offering authentic Korean cuisine. The futuristic Dongdaemun Design Plaza and the panoramic views from N Seoul Tower highlight the city's modern side. With its 24-hour energy, world-class shopping, and deep historical roots, Seoul is an exhilarating destination that never sleeps.",
        currency: "South Korean Won (KRW)"
    }  
      
      
      
      
      
      
    
]

City.insertMany(cities)