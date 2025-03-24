import 'dotenv/config.js'
import '../../config/database.js'
import City from '../City.js'

const cities = [
    {
        name: "New York",
        images: "https://image.nuevayork.com/wp-content/uploads/2020/03/New-York-Helicopter-Tour-2.eric_both.bottom_right.jpg",
        country: "United States",
        continent: "North America",
        description: "Known as 'The Big Apple', it is a hub of culture, economy, and entertainment.",
        currency: "United States Dollar (USD)"
    },
    {
        name: "Paris",
        images: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/640px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg",
        country: "France",
        continent: "Europe",
        description: "The 'City of Light', famous for its art, fashion, and the iconic Eiffel Tower.",
        currency: "Euro (EUR)"
    },
    {
        name: "Tokyo",
        images: "https://a.storyblok.com/f/55469/1170x728/686a5d2781/jp_00_tyo_1.jpeg",
        country: "Japan",
        continent: "Asia",
        description: "A vibrant metropolis that blends tradition and modernity, known for its advanced technology and pop culture.",
        currency: "Japanese Yen (JPY)"
    },
    {
        name: "London",
        images: "https://www.clarin.com/2018/05/05/HJ7fwuhpf_1256x620__1.jpg",
        country: "United Kingdom",
        continent: "Europe",
        description: "A historic capital with a mix of old and modern architecture, home to Big Ben and Buckingham Palace.",
        currency: "Pound Sterling (GBP)"
    },
    {
        name: "Sydney",
        images: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Sydney_skyline_at_dusk_-_Dec_2008.jpg/600px-Sydney_skyline_at_dusk_-_Dec_2008.jpg",
        country: "Australia",
        continent: "Oceania",
        description: "Known for its iconic Opera House and beautiful beaches, it is a vibrant and multicultural city.",
        currency: "Australian Dollar (AUD)"
    },
    {
        name: "Rio de Janeiro",
        images: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0e/3b/66/8f.jpg",
        country: "Brazil",
        continent: "South America",
        description: "Famous for its beaches, Carnival, and Christ the Redeemer, it is a city full of rhythm and color.",
        currency: "Brazilian Real (BRL)"    
    },
    {
        name: "Cape Town",
        images: "https://i0.wp.com/www.enkosiafrica.com/wp-content/uploads/2017/10/aerial-cape-town.jpg",
        country: "South Africa",
        continent: "Africa",
        description: "Known for its natural beauty, including Table Mountain and its scenic coastline.",
        currency: "South African Rand (ZAR)"
    },
    {
        name: "Moscow",
        images: "https://www.shutterstock.com/image-photo/moscow-downtown-summer-russia-aerial-260nw-713117470.jpg",
        country: "Russia",
        continent: "Europe/Asia",
        description: "A historic capital with impressive architecture, including the Kremlin and Red Square.",
        currency: "Russian Ruble (RUB)"
    },
    {
        name: "Beijing",
        images: "https://t4.ftcdn.net/jpg/04/02/39/87/360_F_402398790_k3L190ASfWQqrem9f4CNLr8csArUE0dp.jpg",
        country: "China",
        continent: "Asia",
        description: "A capital with a rich history, home to the Great Wall and the Forbidden City.",
        currency: "Chinese Yuan (CNY)"
    },
    {
        name: "Mumbai",
        images: "https://www.hindustantimes.com/ht-img/img/2024/12/18/550x309/Cities_1_1734524006079_1734524020011.jpg",
        country: "India",
        continent: "Asia",
        description: "India's financial and entertainment hub, known for Bollywood and its vibrant street life.",
        currency: "Indian Rupee (INR)"
    },
    {
        name: "Mexico City",
        images: "https://www.latamairlines.com/content/dam/latamxp/sites/destinos/mexico/hero/MEX.jpg",
        country: "Mexico",
        continent: "North America",
        description: "One of the largest cities in the world, rich in Aztec and colonial history.",
        currency: "Mexican Peso (MXN)"
    },
    {
        name: "Cairo",
        images: "https://images.adsttc.com/media/images/64a2/cdae/cb9c/464f/a63a/9764/large_jpg/cairo-architecture-city-guide-exploring-the-unique-architectural-blend-of-historical-and-contemporary-in-egypts-bustling-capital_23.jpg",
        country: "Egypt",
        continent: "Africa",
        description: "A historic capital near the Pyramids of Giza and the Nile River.",
        currency: "Egyptian Pound (EGP)"
    },
    {
        name: "Bangkok",
        images: "https://www.travelandtourworld.com/wp-content/uploads/2024/12/Somudranil_Sarkar_CREATE_A_CINEMATIC_PHOTO_OF_Bangkok_Crowned_World_dd000350-5b06-4787-b5fc-d2c7317a3cd7-1.png",
        country: "Thailand",
        continent: "Asia",
        description: "Known for its ornate temples and vibrant nightlife.",
        currency: "Thai Baht (THB)"
    },
    {
        name: "Istanbul",
        images: "https://www.semana.com/resizer/v2/MF6HYFXPVZHLJN4VX3EXJS7YUA.jpg?auth=6176f342962c25ba3f5ac215affa9e4662ee6a962fda8a4831c5e71332384fe3&smart=true&quality=75&width=1280&height=720",
        country: "Turkey",
        continent: "Europe/Asia",
        description: "A city connecting two continents, rich in history and culture.",
        currency: "Turkish Lira (TRY)"
    },
    {
        name: "Toronto",
        images: "https://content.r9cdn.net/rimg/dimg/3a/ea/b76d27b8-city-11592-163dad74a67.jpg",
        country: "Canada",
        continent: "North America",
        description: "The largest city in Canada, known for its diversity and the CN Tower.",
        currency: "Canadian Dollar (CAD)"
    }
]

City.insertMany(cities)