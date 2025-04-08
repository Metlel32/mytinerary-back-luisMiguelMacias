import 'dotenv/config.js'
import '../../config/database.js'
import Itinerary from '../Itinerary.js';



const itineraries = [
    // New York
    {
      name: "Helicopter Tour Over NYC",
      imageItinerary: "https://image.nuevayork.com/wp-content/uploads/2020/03/New-York-Helicopter-Tour-2.eric_both.bottom_right.jpg",
      imageProfile: "https://randomuser.me/api/portraits/men/45.jpg",
      price: 2,
      nameProfile: "John Carter",
      hashtags: ["#helicopter", "#nyc", "#tour", "#skyview"],
      duration: 60,
      likes: 0
    },
    {
      name: "Central Park Walking Tour",
      imageItinerary: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlzgyxfXaYuRygzFDUwXSfEIeevz3eKwMdWQ&s",
      imageProfile: "https://randomuser.me/api/portraits/women/68.jpg",
      price: 3,
      nameProfile: "Emily Rose",
      hashtags: ["#centralpark", "#nature", "#walking", "#ny"],
      duration: 90,
      likes: 0
    },
    {
      name: "Brooklyn Street Food Experience",
      imageItinerary: "https://media.tacdn.com/media/attractions-splice-spp-360x240/14/e4/e9/aa.jpg",
      imageProfile: "https://randomuser.me/api/portraits/men/33.jpg",
      price: 5,
      nameProfile: "Marco Lee",
      hashtags: ["#foodie", "#brooklyn", "#streetfood", "#localvibes"],
      duration: 120,
      likes: 0
    },
  
    // Paris
    {
      name: "Romantic Seine River Cruise",
      imageItinerary: "https://cdn.pariscityvision.com/library/image/5145.jpg",
      imageProfile: "https://randomuser.me/api/portraits/women/47.jpg",
      price: 4,
      nameProfile: "Claire Dubois",
      hashtags: ["#seine", "#romantic", "#pariscruise", "#eiffeltower"],
      duration: 75,
      likes: 0
    },
    {
      name: "Louvre Museum Express Tour",
      imageItinerary: "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/71/2f/5a.jpg",
      imageProfile: "https://randomuser.me/api/portraits/men/21.jpg",
      price: 3,
      nameProfile: "Louis Martin",
      hashtags: ["#louvre", "#monaLisa", "#art", "#paris"],
      duration: 60,
      likes: 0
    },
  
    // Tokyo
    {
      name: "Anime & Electronics Akihabara Tour",
      imageItinerary: "https://cdn.getyourguide.com/img/tour/b80c09a2feb690999fc3f2fafa447bce917d0704c2311821487c08aa0c972281.jpg/146.jpg",
      imageProfile: "https://randomuser.me/api/portraits/men/76.jpg",
      price: 4,
      nameProfile: "Takashi Yamamoto",
      hashtags: ["#akihabara", "#anime", "#electronics", "#tokyo"],
      duration: 90,
      likes: 0
    },
    {
      name: "Cherry Blossom Spring Walk",
      imageItinerary: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVml3vgIDnKsc529bRYpUT6Z0im5UcIZuC0w&s",
      imageProfile: "https://randomuser.me/api/portraits/women/30.jpg",
      price: 2,
      nameProfile: "Yumi Tanaka",
      hashtags: ["#sakura", "#hanami", "#spring", "#tokyowalk"],
      duration: 120,
      likes: 0
    },
  
    // London
    {
      name: "Thames River Night Cruise",
      imageItinerary: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgGIQsSa6Hyo6OiPiTHABx2rKl9-El8k4qOA&s",
      imageProfile: "https://randomuser.me/api/portraits/men/39.jpg",
      price: 6,
      nameProfile: "Oliver Smith",
      hashtags: ["#thames", "#nightcruise", "#london", "#lights"],
      duration: 90,
      likes: 0
    },
    {
      name: "Harry Potter Warner Bros Studio Tour",
      imageItinerary: "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/72/f2/80.jpg",
      imageProfile: "https://randomuser.me/api/portraits/women/61.jpg",
      price: 9,
      nameProfile: "Sophie Clarke",
      hashtags: ["#harrypotter", "#london", "#magic", "#hogwarts"],
      duration: 180,
      likes: 0
    },
    {
      name: "Camden Town Street Art Tour",
      imageItinerary: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgM2uNdg3jq0tAw3uxBMJjYXqN_f75tvuAEA&s",
      imageProfile: "https://randomuser.me/api/portraits/men/18.jpg",
      price: 2,
      nameProfile: "David Thompson",
      hashtags: ["#camden", "#streetart", "#londonvibes", "#localculture"],
      duration: 60,
      likes: 0
    },
  
    // Sydney 
    {
      name: "Sydney Opera House Guided Tour",
      imageItinerary: "https://www.sydneyoperahouse.com/sites/default/files/styles/16x9__375w/public/collaborodam_assets/tours-japanese-web-16-9.jpg.webp?itok=E5xIJ3Ak",
      imageProfile: "https://randomuser.me/api/portraits/women/50.jpg",
      price: 7,
      nameProfile: "Chloe Williams",
      hashtags: ["#sydney", "#operahouse", "#architecture", "#australia"],
      duration: 90,
      likes: 0
    },
    //Rio de janeiro
    {
        name: "Cristo Redentor Sunrise Tour",
        imageItinerary: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0a/91/b7/58.jpg",
        imageProfile: "https://randomuser.me/api/portraits/men/25.jpg",
        price: 4,
        nameProfile: "Lucas Silva",
        hashtags: ["#cristo", "#riodejaneiro", "#sunrise", "#brazil"],
        duration: 120,
        likes: 0
      },
      {
        name: "Lapa by Night: Samba Experience",
        imageItinerary: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGvZDZpbMSgoxCY-d-LOn1hdbSxLwddRLw3g&s",
        imageProfile: "https://randomuser.me/api/portraits/women/44.jpg",
        price: 3,
        nameProfile: "Fernanda Costa",
        hashtags: ["#lapa", "#samba", "#nightlife", "#localmusic"],
        duration: 180,
        likes: 0
      },
      //cape town
      {
        name: "Table Mountain Cable Car Adventure",
        imageItinerary: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1OmhqZhYrt0nfG4mJpeMBFVEMK-eY751Bhw&s",
        imageProfile: "https://randomuser.me/api/portraits/men/30.jpg",
        price: 5,
        nameProfile: "Thabo Mokoena",
        hashtags: ["#tablemountain", "#capetown", "#nature", "#views"],
        duration: 90,
        likes: 0
      },
      //moscow
      {
        name: "Red Square & Kremlin Guided Walk",
        imageItinerary: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/06/6a/e1/a3.jpg",
        imageProfile: "https://randomuser.me/api/portraits/women/32.jpg",
        price: 4,
        nameProfile: "Anastasia Petrova",
        hashtags: ["#kremlin", "#redsquare", "#moscow", "#russia"],
        duration: 120,
        likes: 0
      },
      // Beijing
      {
        name: "Forbidden City Historical Walk",
        imageItinerary: "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_863/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/vq9zhhfgenfsynro6egl/ForbiddenCity4-HourSmallGroupTour.jpg",
        imageProfile: "https://randomuser.me/api/portraits/men/41.jpg",
        price: 3,
        nameProfile: "Li Wei",
        hashtags: ["#beijing", "#forbiddencity", "#history", "#china"],
        duration: 150,
        likes: 0
      },
      {
        name: "Great Wall Hike at Mutianyu",
        imageItinerary: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/e4/10/e4/it-was-an-amazing-experience.jpg?w=900&h=-1&s=1",
        imageProfile: "https://randomuser.me/api/portraits/women/46.jpg",
        price: 6,
        nameProfile: "Chen Yu",
        hashtags: ["#greatwall", "#china", "#hiking", "#landmark"],
        duration: 180,
        likes: 0
      },
      //Mumbai
      {
        name: "Elephanta Caves Excursion",
        imageItinerary: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/12/1f/a0/df.jpg",
        imageProfile: "https://randomuser.me/api/portraits/men/34.jpg",
        price: 2,
        nameProfile: "Rajiv Sharma",
        hashtags: ["#mumbai", "#elephantacaves", "#unesco", "#india"],
        duration: 120,
        likes: 0
      },
      {
        name: "Mumbai Street Food Tour",
        imageItinerary: "https://cdn.getyourguide.com/img/tour/63f8880a60901.jpeg/146.jpg",
        imageProfile: "https://randomuser.me/api/portraits/women/49.jpg",
        price: 2,
        nameProfile: "Priya Desai",
        hashtags: ["#mumbai", "#streetfood", "#flavors", "#india"],
        duration: 90,
        likes: 0
      },

      //mexico City
      {
        name: "Teotihuacán Pyramids Day Trip",
        imageItinerary: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRInoyrwqlKB_ZpF4uiJ6Po2eHwscg6c2_f-A&s",
        imageProfile: "https://randomuser.me/api/portraits/men/38.jpg",
        price: 5,
        nameProfile: "Carlos Méndez",
        hashtags: ["#mexicocity", "#teotihuacan", "#pyramids", "#culture"],
        duration: 180,
        likes: 0
      },
      {
        name: "Frida Kahlo Museum Visit",
        imageItinerary: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3_sm9sYGOO1lFe1Fm0a9i3NfKf3PgCeYQ6g&s",
        imageProfile: "https://randomuser.me/api/portraits/women/52.jpg",
        price: 1,
        nameProfile: "Lucía García",
        hashtags: ["#fridakahlo", "#mexico", "#art", "#cdmx"],
        duration: 60,
        likes: 0
      },
      //Cairo
      {
          name: "Giza Pyramids and Sphinx Tour",
          imageItinerary: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_TOb5JwyDS5Tts6v_EN6CE05XPWvm4--bwQ&s",
          imageProfile: "https://randomuser.me/api/portraits/men/51.jpg",
          price: 4,
          nameProfile: "Omar Hassan",
          hashtags: ["#giza", "#pyramids", "#cairo", "#egypt"],
          duration: 150,
          likes: 0
        },
        {
          name: "Nile River Dinner Cruise",
          imageItinerary: "https://cdn.getyourguide.com/img/tour/590814c098c30063cc29de83e2e1224fc67e5bf14f1c1a1906e9f5fdbe0dcfab.jpg/146.jpg",
          imageProfile: "https://randomuser.me/api/portraits/women/55.jpg",
          price: 5,
          nameProfile: "Layla Fathi",
          hashtags: ["#nile", "#cruise", "#cairo", "#dinner"],
          duration: 120,
          likes: 0
        },
        //Bangkok
        {
          name: "Wat Arun & Grand Palace Tour",
          imageItinerary: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRahfCVdgfVS5cup0uM-uMV7A_Dh6ZG3eGRIQ&s",
          imageProfile: "https://randomuser.me/api/portraits/men/60.jpg",
          price: 3,
          nameProfile: "Somsak Chai",
          hashtags: ["#bangkok", "#temples", "#thailand", "#grandpalace"],
          duration: 120,
          likes: 0
        },
        {
          name: "Bangkok Floating Market Experience",
          imageItinerary: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/27/6c/1d.jpg",
          imageProfile: "https://randomuser.me/api/portraits/women/62.jpg",
          price: 2,
          nameProfile: "Nok Supansa",
          hashtags: ["#floatingmarket", "#bangkok", "#food", "#culture"],
          duration: 90,
          likes: 0
        },
        // instanbul
        {
          name: "Hagia Sophia & Blue Mosque Tour",
          imageItinerary: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0c/f7/cc/de.jpg",
          imageProfile: "https://randomuser.me/api/portraits/men/63.jpg",
          price: 3,
          nameProfile: "Ahmet Demir",
          hashtags: ["#istanbul", "#hagiasophia", "#bluemosque", "#turkey"],
          duration: 120,
          likes: 0
        },
        {
          name: "Bosphorus Sunset Cruise",
          imageItinerary: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/ca/b0/dd/caption.jpg?w=1200&h=-1&s=1",
          imageProfile: "https://randomuser.me/api/portraits/women/65.jpg",
          price: 4,
          nameProfile: "Elif Kaya",
          hashtags: ["#bosphorus", "#sunset", "#istanbul", "#cruise"],
          duration: 90,
          likes: 0
        },
  
        //toronto
        {
          name: "CN Tower EdgeWalk Experience",
          imageItinerary: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/81/98/e4/edgewalk.jpg?w=1200&h=-1&s=1",
          imageProfile: "https://randomuser.me/api/portraits/men/70.jpg",
          price: 2,
          nameProfile: "Liam Wilson",
          hashtags: ["#toronto", "#cntower", "#edgewalk", "#canada"],
          duration: 90,
          likes: 0
        },
        {
          name: "Toronto Islands Bike Tour",
          imageItinerary: "https://cdn.crowdriff.com/in-use/9e9f8393-963d-035e-fc08-cf744c657002/750.jpg",
          imageProfile: "https://randomuser.me/api/portraits/women/67.jpg",
          price: 3,
          nameProfile: "Emma Taylor",
          hashtags: ["#toronto", "#biketour", "#islands", "#outdoors"],
          duration: 120,
          likes: 0
        },
        //Dubai
        {
          name: "Burj Khalifa At The Top Tour",
          imageItinerary: "https://i.ytimg.com/vi/po4Y7mX8P2A/maxresdefault.jpg",
          imageProfile: "https://randomuser.me/api/portraits/men/71.jpg",
          price: 4,
          nameProfile: "Mohammed Al Farsi",
          hashtags: ["#dubai", "#burjkhalifa", "#view", "#uae"],
          duration: 60,
          likes: 0
        },
        {
          name: "Desert Safari with Camel Ride",
          imageItinerary: "https://cdn-imgix.headout.com/media/images/cf5dc2945eaf0460d7338f6bf3728599-23340-abu-dhabi-abu-dhabi-evening-desert-safari-with-bbq-dinner--camel-ride-and-entertainments-05.jpg?auto=format&w=1222.3999999999999&h=687.6&q=90&fit=crop&ar=16%3A9&crop=faces",
          imageProfile: "https://randomuser.me/api/portraits/women/74.jpg",
          price: 5,
          nameProfile: "Fatima Noor",
          hashtags: ["#desert", "#safari", "#dubai", "#camelride"],
          duration: 180,
          likes: 0
        },
  
        //singapore
  
        {
          name: "Gardens by the Bay Light Show",
          imageItinerary: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMvWO3tJSHYyGX-jVwm0fpkAKicuVDjEkOXw&s",
          imageProfile: "https://randomuser.me/api/portraits/men/73.jpg",
          price: 2,
          nameProfile: "Daniel Tan",
          hashtags: ["#singapore", "#gardensbythebay", "#lightshow", "#asia"],
          duration: 60,
          likes: 0
        },
        {
          name: "Marina Bay Sands SkyPark Visit",
          imageItinerary: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStSBgwxO9XQKG1586fjzc5TqtsTlOQfd7LuQ&s",
          imageProfile: "https://randomuser.me/api/portraits/women/76.jpg",
          price: 3,
          nameProfile: "Amanda Lim",
          hashtags: ["#marinabaysands", "#singapore", "#view", "#skyline"],
          duration: 90,
          likes: 0
        },
  
        //buenos Aires
        {
          name: "La Boca Walking Tour",
          imageItinerary: "https://mediaim.expedia.com/localexpert/2805805/818a3548-e1da-4ef1-b7ed-8e52d106d9c9.jpg?impolicy=resizecrop&rw=1005&rh=565",
          imageProfile: "https://randomuser.me/api/portraits/men/80.jpg",
          price: 1,
          nameProfile: "Martín Pérez",
          hashtags: ["#laboca", "#buenosaires", "#argentina", "#culture"],
          duration: 90,
          likes: 0
        },
        {
          name: "Tango Dinner Show",
          imageItinerary: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTqPCROlY2WU8OUNNKGxwJbf-8VnM6Cf3ztg&s",
          imageProfile: "https://randomuser.me/api/portraits/women/81.jpg",
          price: 4,
          nameProfile: "Sofía González",
          hashtags: ["#tango", "#buenosaires", "#nightlife", "#argentina"],
          duration: 120,
          likes: 0
        },
        //barcelona
        {
          name: "Sagrada Familia Guided Visit",
          imageItinerary: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJNccK-BF6x3te7E7iuEzgbfJnUcTIn_RvvA&s",
          imageProfile: "https://randomuser.me/api/portraits/men/85.jpg",
          price: 3,
          nameProfile: "Jordi Martí",
          hashtags: ["#barcelona", "#sagradafamilia", "#gaudi", "#spain"],
          duration: 90,
          likes: 0
        },
        {
          name: "Tapas Tasting Tour in El Born",
          imageItinerary: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/13/2a/93/c1.jpg",
          imageProfile: "https://randomuser.me/api/portraits/women/84.jpg",
          price: 3,
          nameProfile: "Ana Ruiz",
          hashtags: ["#barcelona", "#tapas", "#foodie", "#localflavors"],
          duration: 90,
          likes: 0
        },
        //Seoul
        {
          name: "Gyeongbokgung Palace & Hanbok Experience",
          imageItinerary: "https://cdn.getyourguide.com/img/tour/ecfd36c419cf03cc2627066c963776eea24c862ea5c38a8976f7ba0db221e8f4.jpg/146.jpg",
          imageProfile: "https://randomuser.me/api/portraits/women/90.jpg",
          price: 5,
          nameProfile: "Minji Park",
          hashtags: ["#seoul", "#gyeongbokgung", "#hanbok", "#korea"],
          duration: 120,
          likes: 0
        },
        {
          name: "Night Market Food Crawl",
          imageItinerary: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/09/ac/a0/f9.jpg",
          imageProfile: "https://randomuser.me/api/portraits/men/91.jpg",
          price: 2,
          nameProfile: "Jisoo Lee",
          hashtags: ["#seoul", "#streetfood", "#nightmarket", "#korea"],
          duration: 90,
          likes: 0
        }
  ]



Itinerary.insertMany(itineraries)