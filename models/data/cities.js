import 'dotenv/config.js'
import '../../config/database.js'
import City from '../City.js'


let cities = [
    {
        name: "Nueva York",
        images: "https://image.nuevayork.com/wp-content/uploads/2020/03/New-York-Helicopter-Tour-2.eric_both.bottom_right.jpg",
        country: "Estados Unidos",
        continent: "América del Norte",
        description: "Conocida como 'La Gran Manzana', es un centro neurálgico de cultura, economía y entretenimiento.",
        currency: "Dólar estadounidense (USD)"
    },
    {
        name: "París",
        images: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/640px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg",
        country: "Francia",
        continent: "Europa",
        description: "La 'Ciudad de la Luz', famosa por su arte, moda y la icónica Torre Eiffel.",
        currency: "Euro (EUR)"
    },
    {
        name: "Tokio",
        images: "https://a.storyblok.com/f/55469/1170x728/686a5d2781/jp_00_tyo_1.jpeg",
        country: "Japón",
        continent: "Asia",
        description: "Una metrópolis vibrante que combina tradición y modernidad, conocida por su tecnología avanzada y cultura pop.",
        currency: "Yen japonés (JPY)"
    },
    {
        name: "Londres",
        images: "https://www.clarin.com/2018/05/05/HJ7fwuhpf_1256x620__1.jpg",
        country: "Reino Unido",
        continent: "Europa",
        description: "Capital histórica con una mezcla de arquitectura antigua y moderna, hogar del Big Ben y el Palacio de Buckingham.",
        currency: "Libra esterlina (GBP)"
    },
    {
        name: "Sídney",
        images: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Sydney_skyline_at_dusk_-_Dec_2008.jpg/600px-Sydney_skyline_at_dusk_-_Dec_2008.jpg",
        country: "Australia",
        continent: "Oceanía",
        description: "Conocida por su icónica Ópera y hermosas playas, es una ciudad vibrante y multicultural.",
        currency: "Dólar australiano (AUD)"
    },
    {
        name: "Río de Janeiro",
        images: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0e/3b/66/8f.jpg",
        country: "Brasil",
        continent: "América del Sur",
        description: "Famosa por sus playas, el Carnaval y el Cristo Redentor, es una ciudad llena de ritmo y color.",
        currency: "Real brasileño (BRL)"    
    },
    {
        name: "Ciudad del Cabo",
        images: "https://i0.wp.com/www.enkosiafrica.com/wp-content/uploads/2017/10/aerial-cape-town.jpg",
        country: "Sudáfrica",
        continent: "África",
        description: "Conocida por su belleza natural, incluyendo la Montaña de la Mesa y su costa escénica.",
        currency: "Rand sudafricano (ZAR)"
    },
    {
        name: "Moscú",
        images: "https://www.shutterstock.com/image-photo/moscow-downtown-summer-russia-aerial-260nw-713117470.jpg",
        country: "Rusia",
        continent: "Europa/Asia",
        description: "Capital histórica con una arquitectura impresionante, incluyendo el Kremlin y la Plaza Roja.",
        currency: "Rublo ruso (RUB)"
    },
    {
        name: "Beijing",
        images: "https://t4.ftcdn.net/jpg/04/02/39/87/360_F_402398790_k3L190ASfWQqrem9f4CNLr8csArUE0dp.jpg",
        country: "China",
        continent: "Asia",
        description: "Capital con una rica historia, hogar de la Gran Muralla y la Ciudad Prohibida.",
        currency: "Yuan chino (CNY)"
    },
    {
        name: "Mumbai",
        images: "https://www.hindustantimes.com/ht-img/img/2024/12/18/550x309/Cities_1_1734524006079_1734524020011.jpg",
        country: "India",
        continent: "Asia",
        description: "Centro financiero y de entretenimiento de India, conocida por Bollywood y su vibrante vida callejera.",
        currency: "Rupia india (INR)"
    },
    {
        name: "Ciudad de México",
        images: "https://www.latamairlines.com/content/dam/latamxp/sites/destinos/mexico/hero/MEX.jpg",
        country: "México",
        continent: "América del Norte",
        description: "Una de las ciudades más grandes del mundo, rica en historia azteca y colonial.",
        currency: "Peso mexicano (MXN)"
    },
    {
        name: "El Cairo",
        images: "https://images.adsttc.com/media/images/64a2/cdae/cb9c/464f/a63a/9764/large_jpg/cairo-architecture-city-guide-exploring-the-unique-architectural-blend-of-historical-and-contemporary-in-egypts-bustling-capital_23.jpg",
        country: "Egipto",
        continent: "África",
        description: "Capital histórica cerca de las pirámides de Giza y el río Nilo.",
        currency: "Libra egipcia (EGP)"
    },
    {
        name: "Bangkok",
        images: "https://www.travelandtourworld.com/wp-content/uploads/2024/12/Somudranil_Sarkar_CREATE_A_CINEMATIC_PHOTO_OF_Bangkok_Crowned_World_dd000350-5b06-4787-b5fc-d2c7317a3cd7-1.png",
        country: "Tailandia",
        continent: "Asia",
        description: "Conocida por sus templos ornamentados y vida nocturna vibrante.",
        currency: "Baht tailandés (THB)"
    },
    {
        name: "Estambul",
        images: "https://www.semana.com/resizer/v2/MF6HYFXPVZHLJN4VX3EXJS7YUA.jpg?auth=6176f342962c25ba3f5ac215affa9e4662ee6a962fda8a4831c5e71332384fe3&smart=true&quality=75&width=1280&height=720",
        country: "Turquía",
        continent: "Europa/Asia",
        description: "Ciudad que conecta dos continentes, rica en historia y cultura.",
        currency: "Lira turca (TRY)"
    },
    {
        name: "Toronto",
        images: "https://content.r9cdn.net/rimg/dimg/3a/ea/b76d27b8-city-11592-163dad74a67.jpg",
        country: "Canadá",
        continent: "América del Norte",
        description: "La ciudad más grande de Canadá, conocida por su diversidad y la Torre CN.",
        currency: "Dólar canadiense (CAD)"
    },
]

City.insertMany(cities)