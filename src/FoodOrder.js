import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";

//header,body,footer

// const Header = () => {
//   return (
//     <div id="head">
//         <div id="logo">
//             <img className="photo"src="https://graphicsfamily.com/wp-content/uploads/edd/2021/06/Food-Logo-Design.jpg"/>
//         </div>
//         <div id="list">
//             <ul>
//                 <li>home</li>
//                 <li>contact us</li>
//                 <li>about us</li>
//                 <li>cart</li>
//             </ul>
//         </div>
      
//     </div>
//   )
// }
// const Details=[
//   {
//       "info": {
//           "id": "347476",
//           "name": "Nandhana Palace",
//           "cloudinaryImageId": "195876a3181ef63f76e45e3a7b49b585",
//           "locality": "Egattur",
//           "areaName": "Egattur",
//           "costForTwo": "₹500 for two",
//           "cuisines": [
//               "Biryani",
//               "Andhra",
//               "South Indian",
//               "North Indian"
//           ],
//           "avgRating": 4.2,
//           "parentId": "2120",
//           "avgRatingString": "4.2",
//           "totalRatingsString": "10K+",
//           "sla": {
//               "deliveryTime": 34,
//               "lastMileTravel": 8.5,
//               "serviceability": "SERVICEABLE",
//               "slaString": "34 mins",
//               "lastMileTravelString": "8.5 km",
//               "iconType": "ICON_TYPE_EMPTY"
//           },
//           "availability": {
//               "nextCloseTime": "2024-02-11 01:00:00",
//               "opened": true
//           },
//           "badges": {},
//           "isOpen": true,
//           "type": "F",
//           "badgesV2": {
//               "entityBadges": {
//                   "imageBased": {},
//                   "textBased": {},
//                   "textExtendedBadges": {}
//               }
//           },
//           "aggregatedDiscountInfoV3": {
//               "header": "₹125 OFF",
//               "subHeader": "ABOVE ₹399",
//               "discountTag": "FLAT DEAL"
//           },
//           "orderabilityCommunication": {
//               "title": {},
//               "subTitle": {},
//               "message": {},
//               "customIcon": {}
//           },
//           "differentiatedUi": {
//               "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//               "differentiatedUiMediaDetails": {
//                   "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                   "lottie": {},
//                   "video": {}
//               }
//           },
//           "reviewsSummary": {},
//           "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//           "restaurantOfferPresentationInfo": {}
//       },
//       "analytics": {
//           "context": "seo-data-d7cf340e-78ee-4700-8eec-fec0ec163826"
//       },
//       "cta": {
//           "link": "https://www.swiggy.com/restaurants/nandhana-palace-egattur-chennai-347476",
//           "text": "RESTAURANT_MENU",
//           "type": "WEBLINK"
//       },
//       "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//   },
//   {
//       "info": {
//           "id": "485445",
//           "name": "Chinese Wok",
//           "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
//           "locality": "Old Mahabalipuram Road OMR",
//           "areaName": "Old Mahabalipuram Road OMR",
//           "costForTwo": "₹250 for two",
//           "cuisines": [
//               "Chinese",
//               "Asian",
//               "Tibetan",
//               "Desserts"
//           ],
//           "avgRating": 3.9,
//           "parentId": "61955",
//           "avgRatingString": "3.9",
//           "totalRatingsString": "1K+",
//           "sla": {
//               "deliveryTime": 28,
//               "lastMileTravel": 4.2,
//               "serviceability": "SERVICEABLE",
//               "slaString": "28 mins",
//               "lastMileTravelString": "4.2 km",
//               "iconType": "ICON_TYPE_EMPTY"
//           },
//           "availability": {
//               "nextCloseTime": "2024-02-11 02:00:00",
//               "opened": true
//           },
//           "badges": {},
//           "isOpen": true,
//           "type": "F",
//           "badgesV2": {
//               "entityBadges": {
//                   "imageBased": {},
//                   "textBased": {},
//                   "textExtendedBadges": {}
//               }
//           },
//           "aggregatedDiscountInfoV3": {
//               "header": "50% OFF",
//               "subHeader": "UPTO ₹100"
//           },
//           "orderabilityCommunication": {
//               "title": {},
//               "subTitle": {},
//               "message": {},
//               "customIcon": {}
//           },
//           "differentiatedUi": {
//               "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//               "differentiatedUiMediaDetails": {
//                   "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                   "lottie": {},
//                   "video": {}
//               }
//           },
//           "reviewsSummary": {},
//           "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//           "restaurantOfferPresentationInfo": {}
//       },
//       "analytics": {
//           "context": "seo-data-d7cf340e-78ee-4700-8eec-fec0ec163826"
//       },
//       "cta": {
//           "link": "https://www.swiggy.com/restaurants/chinese-wok-old-mahabalipuram-road-omr-chennai-485445",
//           "text": "RESTAURANT_MENU",
//           "type": "WEBLINK"
//       },
//       "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//   },
//   {
//       "info": {
//           "id": "65303",
//           "name": "The Red Box",
//           "cloudinaryImageId": "e30g5rut9b9vvwjjveds",
//           "locality": "Karapakkam",
//           "areaName": "Karapakkam",
//           "costForTwo": "₹400 for two",
//           "cuisines": [
//               "Chinese"
//           ],
//           "avgRating": 3.9,
//           "parentId": "1636",
//           "avgRatingString": "3.9",
//           "totalRatingsString": "10K+",
//           "sla": {
//               "deliveryTime": 24,
//               "lastMileTravel": 2.3,
//               "serviceability": "SERVICEABLE",
//               "slaString": "24 mins",
//               "lastMileTravelString": "2.3 km",
//               "iconType": "ICON_TYPE_EMPTY"
//           },
//           "availability": {
//               "nextCloseTime": "2024-02-11 00:00:00",
//               "opened": true
//           },
//           "badges": {},
//           "isOpen": true,
//           "type": "F",
//           "badgesV2": {
//               "entityBadges": {
//                   "imageBased": {},
//                   "textBased": {},
//                   "textExtendedBadges": {}
//               }
//           },
//           "aggregatedDiscountInfoV3": {
//               "header": "40% OFF",
//               "subHeader": "UPTO ₹80"
//           },
//           "orderabilityCommunication": {
//               "title": {},
//               "subTitle": {},
//               "message": {},
//               "customIcon": {}
//           },
//           "differentiatedUi": {
//               "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//               "differentiatedUiMediaDetails": {
//                   "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                   "lottie": {},
//                   "video": {}
//               }
//           },
//           "reviewsSummary": {},
//           "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//           "restaurantOfferPresentationInfo": {}
//       },
//       "analytics": {
//           "context": "seo-data-d7cf340e-78ee-4700-8eec-fec0ec163826"
//       },
//       "cta": {
//           "link": "https://www.swiggy.com/restaurants/the-red-box-karapakkam-chennai-65303",
//           "text": "RESTAURANT_MENU",
//           "type": "WEBLINK"
//       },
//       "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//   },
//   {
//       "info": {
//           "id": "808105",
//           "name": "Burger King",
//           "cloudinaryImageId": "aa77cb6fce4d94f3ad4b4e7fb42782db",
//           "locality": "Nehru Nagar",
//           "areaName": "OMR Thoraipakam",
//           "costForTwo": "₹350 for two",
//           "cuisines": [
//               "Burgers",
//               "American"
//           ],
//           "avgRating": 4.3,
//           "parentId": "166",
//           "avgRatingString": "4.3",
//           "totalRatingsString": "100+",
//           "sla": {
//               "deliveryTime": 28,
//               "lastMileTravel": 3.5,
//               "serviceability": "SERVICEABLE",
//               "slaString": "28 mins",
//               "lastMileTravelString": "3.5 km",
//               "iconType": "ICON_TYPE_EMPTY"
//           },
//           "availability": {
//               "nextCloseTime": "2024-02-11 01:00:00",
//               "opened": true
//           },
//           "badges": {},
//           "isOpen": true,
//           "type": "F",
//           "badgesV2": {
//               "entityBadges": {
//                   "imageBased": {},
//                   "textBased": {},
//                   "textExtendedBadges": {}
//               }
//           },
//           "aggregatedDiscountInfoV3": {
//               "header": "60% OFF",
//               "subHeader": "UPTO ₹120"
//           },
//           "orderabilityCommunication": {
//               "title": {},
//               "subTitle": {},
//               "message": {},
//               "customIcon": {}
//           },
//           "differentiatedUi": {
//               "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//               "differentiatedUiMediaDetails": {
//                   "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                   "lottie": {},
//                   "video": {}
//               }
//           },
//           "reviewsSummary": {},
//           "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//           "isNewlyOnboarded": true,
//           "restaurantOfferPresentationInfo": {}
//       },
//       "analytics": {
//           "context": "seo-data-d7cf340e-78ee-4700-8eec-fec0ec163826"
//       },
//       "cta": {
//           "link": "https://www.swiggy.com/restaurants/burger-king-nehru-nagar-omr-thoraipakam-chennai-808105",
//           "text": "RESTAURANT_MENU",
//           "type": "WEBLINK"
//       },
//       "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//   },
//   {
//       "info": {
//           "id": "25881",
//           "name": "Subway",
//           "cloudinaryImageId": "63178e3e64d503a479f2a2048a474552",
//           "locality": "Shollinganalur",
//           "areaName": "Sholinganallur",
//           "costForTwo": "₹350 for two",
//           "cuisines": [
//               "Salads",
//               "Snacks",
//               "Desserts",
//               "Beverages"
//           ],
//           "avgRating": 4.3,
//           "parentId": "2",
//           "avgRatingString": "4.3",
//           "totalRatingsString": "10K+",
//           "sla": {
//               "deliveryTime": 20,
//               "lastMileTravel": 0.9,
//               "serviceability": "SERVICEABLE",
//               "slaString": "20 mins",
//               "lastMileTravelString": "0.9 km",
//               "iconType": "ICON_TYPE_EMPTY"
//           },
//           "availability": {
//               "nextCloseTime": "2024-02-10 23:57:00",
//               "opened": true
//           },
//           "badges": {
//               "textExtendedBadges": [
//                   {
//                       "iconId": "guiltfree/GF_Logo_android_3x",
//                       "shortDescription": "options available",
//                       "fontColor": "#7E808C"
//                   }
//               ]
//           },
//           "isOpen": true,
//           "aggregatedDiscountInfoV2": {},
//           "type": "F",
//           "badgesV2": {
//               "entityBadges": {
//                   "imageBased": {},
//                   "textBased": {},
//                   "textExtendedBadges": {
//                       "badgeObject": [
//                           {
//                               "attributes": {
//                                   "description": "",
//                                   "fontColor": "#7E808C",
//                                   "iconId": "guiltfree/GF_Logo_android_3x",
//                                   "shortDescription": "options available"
//                               }
//                           }
//                       ]
//                   }
//               }
//           },
//           "orderabilityCommunication": {
//               "title": {},
//               "subTitle": {},
//               "message": {},
//               "customIcon": {}
//           },
//           "differentiatedUi": {
//               "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//               "differentiatedUiMediaDetails": {
//                   "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                   "lottie": {},
//                   "video": {}
//               }
//           },
//           "reviewsSummary": {},
//           "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//           "restaurantOfferPresentationInfo": {}
//       },
//       "analytics": {
//           "context": "seo-data-d7cf340e-78ee-4700-8eec-fec0ec163826"
//       },
//       "cta": {
//           "link": "https://www.swiggy.com/restaurants/subway-shollinganalur-sholinganallur-chennai-25881",
//           "text": "RESTAURANT_MENU",
//           "type": "WEBLINK"
//       },
//       "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//   },
//   {
//       "info": {
//           "id": "612030",
//           "name": "La Pino'z Pizza",
//           "cloudinaryImageId": "bruvs5fgiwda0vfs75sj",
//           "locality": "Sholinganallur",
//           "areaName": "Sholinganallur",
//           "costForTwo": "₹400 for two",
//           "cuisines": [
//               "Pizzas",
//               "Pastas",
//               "Italian",
//               "Desserts",
//               "Beverages"
//           ],
//           "avgRating": 4,
//           "parentId": "4961",
//           "avgRatingString": "4.0",
//           "totalRatingsString": "1K+",
//           "sla": {
//               "deliveryTime": 31,
//               "lastMileTravel": 3.5,
//               "serviceability": "SERVICEABLE",
//               "slaString": "31 mins",
//               "lastMileTravelString": "3.5 km",
//               "iconType": "ICON_TYPE_EMPTY"
//           },
//           "availability": {
//               "nextCloseTime": "2024-02-11 00:00:00",
//               "opened": true
//           },
//           "badges": {},
//           "isOpen": true,
//           "type": "F",
//           "badgesV2": {
//               "entityBadges": {
//                   "imageBased": {},
//                   "textBased": {},
//                   "textExtendedBadges": {}
//               }
//           },
//           "aggregatedDiscountInfoV3": {
//               "header": "60% OFF",
//               "subHeader": "UPTO ₹120"
//           },
//           "orderabilityCommunication": {
//               "title": {},
//               "subTitle": {},
//               "message": {},
//               "customIcon": {}
//           },
//           "differentiatedUi": {
//               "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//               "differentiatedUiMediaDetails": {
//                   "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                   "lottie": {},
//                   "video": {}
//               }
//           },
//           "reviewsSummary": {},
//           "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//           "restaurantOfferPresentationInfo": {}
//       },
//       "analytics": {
//           "context": "seo-data-d7cf340e-78ee-4700-8eec-fec0ec163826"
//       },
//       "cta": {
//           "link": "https://www.swiggy.com/restaurants/la-pinoz-pizza-sholinganallur-chennai-612030",
//           "text": "RESTAURANT_MENU",
//           "type": "WEBLINK"
//       },
//       "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//   },
//   {
//       "info": {
//           "id": "564242",
//           "name": "KFC",
//           "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
//           "locality": "Rajiv Gandhi Salai",
//           "areaName": "Sholinganallur",
//           "costForTwo": "₹400 for two",
//           "cuisines": [
//               "Burgers",
//               "Biryani",
//               "American",
//               "Snacks",
//               "Fast Food"
//           ],
//           "avgRating": 4.2,
//           "parentId": "547",
//           "avgRatingString": "4.2",
//           "totalRatingsString": "1K+",
//           "sla": {
//               "deliveryTime": 22,
//               "lastMileTravel": 2.6,
//               "serviceability": "SERVICEABLE",
//               "slaString": "22 mins",
//               "lastMileTravelString": "2.6 km",
//               "iconType": "ICON_TYPE_EMPTY"
//           },
//           "availability": {
//               "nextCloseTime": "2024-02-11 00:00:00",
//               "opened": true
//           },
//           "badges": {},
//           "isOpen": true,
//           "aggregatedDiscountInfoV2": {},
//           "type": "F",
//           "badgesV2": {
//               "entityBadges": {
//                   "imageBased": {},
//                   "textBased": {},
//                   "textExtendedBadges": {}
//               }
//           },
//           "orderabilityCommunication": {
//               "title": {},
//               "subTitle": {},
//               "message": {},
//               "customIcon": {}
//           },
//           "differentiatedUi": {
//               "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//               "differentiatedUiMediaDetails": {
//                   "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                   "lottie": {},
//                   "video": {}
//               }
//           },
//           "reviewsSummary": {},
//           "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//           "restaurantOfferPresentationInfo": {}
//       },
//       "analytics": {
//           "context": "seo-data-d7cf340e-78ee-4700-8eec-fec0ec163826"
//       },
//       "cta": {
//           "link": "https://www.swiggy.com/restaurants/kfc-rajiv-gandhi-salai-sholinganallur-chennai-564242",
//           "text": "RESTAURANT_MENU",
//           "type": "WEBLINK"
//       },
//       "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//   },
//   {
//       "info": {
//           "id": "64700",
//           "name": "Ambur Star Briyani",
//           "cloudinaryImageId": "83650e6ca1465c58063a70ad22be4f28",
//           "locality": "Sholinganallur",
//           "areaName": "Sholinganallur",
//           "costForTwo": "₹500 for two",
//           "cuisines": [
//               "Indian",
//               "Chinese",
//               "Arabian",
//               "Continental"
//           ],
//           "avgRating": 4.3,
//           "parentId": "5455",
//           "avgRatingString": "4.3",
//           "totalRatingsString": "10K+",
//           "sla": {
//               "deliveryTime": 21,
//               "lastMileTravel": 2.5,
//               "serviceability": "SERVICEABLE",
//               "slaString": "21 mins",
//               "lastMileTravelString": "2.5 km",
//               "iconType": "ICON_TYPE_EMPTY"
//           },
//           "availability": {
//               "nextCloseTime": "2024-02-10 23:00:00",
//               "opened": true
//           },
//           "badges": {},
//           "isOpen": true,
//           "type": "F",
//           "badgesV2": {
//               "entityBadges": {
//                   "imageBased": {},
//                   "textBased": {},
//                   "textExtendedBadges": {}
//               }
//           },
//           "aggregatedDiscountInfoV3": {
//               "header": "40% OFF",
//               "subHeader": "UPTO ₹80"
//           },
//           "orderabilityCommunication": {
//               "title": {},
//               "subTitle": {},
//               "message": {},
//               "customIcon": {}
//           },
//           "differentiatedUi": {
//               "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//               "differentiatedUiMediaDetails": {
//                   "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                   "lottie": {},
//                   "video": {}
//               }
//           },
//           "reviewsSummary": {},
//           "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//           "restaurantOfferPresentationInfo": {}
//       },
//       "analytics": {
//           "context": "seo-data-d7cf340e-78ee-4700-8eec-fec0ec163826"
//       },
//       "cta": {
//           "link": "https://www.swiggy.com/restaurants/ambur-star-briyani-sholinganallur-chennai-64700",
//           "text": "RESTAURANT_MENU",
//           "type": "WEBLINK"
//       },
//       "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//   },
//   {
//       "info": {
//           "id": "104680",
//           "name": "Domino's Pizza",
//           "cloudinaryImageId": "terdirvzcbmbwok1bwsu",
//           "locality": "KAILASH OMR SHOLINAGANALLUR CHENNAI",
//           "areaName": "Sholinganallur",
//           "costForTwo": "₹400 for two",
//           "cuisines": [
//               "Pizzas",
//               "Italian",
//               "Pastas",
//               "Desserts"
//           ],
//           "avgRating": 4.3,
//           "parentId": "2456",
//           "avgRatingString": "4.3",
//           "totalRatingsString": "5K+",
//           "sla": {
//               "deliveryTime": 25,
//               "serviceability": "SERVICEABLE",
//               "slaString": "25 mins",
//               "iconType": "ICON_TYPE_EMPTY"
//           },
//           "availability": {
//               "nextCloseTime": "2024-02-10 22:59:00",
//               "opened": true
//           },
//           "badges": {},
//           "isOpen": true,
//           "type": "F",
//           "badgesV2": {
//               "entityBadges": {
//                   "imageBased": {},
//                   "textBased": {},
//                   "textExtendedBadges": {}
//               }
//           },
//           "aggregatedDiscountInfoV3": {
//               "header": "₹150 OFF",
//               "subHeader": "ABOVE ₹299",
//               "discountTag": "FLAT DEAL"
//           },
//           "orderabilityCommunication": {
//               "title": {},
//               "subTitle": {},
//               "message": {},
//               "customIcon": {}
//           },
//           "differentiatedUi": {
//               "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//               "differentiatedUiMediaDetails": {
//                   "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                   "lottie": {},
//                   "video": {}
//               }
//           },
//           "reviewsSummary": {},
//           "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//           "restaurantOfferPresentationInfo": {}
//       },
//       "analytics": {
//           "context": "seo-data-d7cf340e-78ee-4700-8eec-fec0ec163826"
//       },
//       "cta": {
//           "link": "https://www.swiggy.com/restaurants/dominos-pizza-kailash-omr-sholinaganallur-sholinganallur-chennai-104680",
//           "text": "RESTAURANT_MENU",
//           "type": "WEBLINK"
//       },
//       "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//   }
// ]
// const Body =()=>{
//   return(
//     <div id="searc">
//       <h5>search</h5>
//       <div id="search">
//       {
//         Details.map((resturant)=>(<ResCard key={resturant.info.id} res={resturant}/>))

//       }
//       </div>

//     </div>
//   )
// }
// const ResCard=({res})=>{
//   return(
//     <div id="main">
//       <div id="sub1">
//         <img className="phot"src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+res.info.cloudinaryImageId}/>
//       </div>
//       <div><h4>{res.info.name}</h4></div>
//       <div><h4>{res.info.cuisines.join(",")}</h4></div>
//       <div><h4>{res.info.deliveryTime}</h4></div>
//       <div><h4>{res.info.avgRating}</h4></div>
//       <div><h4>{res.info.costForTwo}</h4></div>
//     </div>

//   )
// }



const FoodOrder = () => {
  return (
    <div>
      <Header/>
      <Body/>
    </div>
  )
}

export default FoodOrder
