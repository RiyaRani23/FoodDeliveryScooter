import React from "react";
import ReactDOM from "react-dom/client";
import 

const RestaurantCard = (props) => {
    const {resData} = props;

    const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
      sla: { deliveryTime },
    } = resData?.card.card.info;

    return (
        <div className="res-card" style={{backgroundColor:"#f0ebebff"}}>
            <img 
            className={"res-logo"+"Food"}
             src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/" +
                  resData.card.card.info.cloudinaryImageId
                }
             alt="Res-Logo" />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4> {costForTwo / 100} for two</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    );
};

const resList = [
{
"card": {
"card": {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "229",
"name": "Meghana Foods",
"city": "1",
"slugs": {
"restaurant": "meghana-foods-5th-block-koramangala",
"city": "bangalore"
},
"cloudinaryImageId": "xqwpuhgnsaf18te7zvtv",
"address": "124, 1st A Cross Rd, Near Jyoti Nivas College Road, Khb Colony, 5Th Block, Koramangala, Bengaluru, Karnataka 560095",
"locality": "Koramangala",
"areaName": "Koramangala",
"costForTwo": "50000",
"costForTwoMessage": "₹500 FOR TWO",
"cuisines": [
"Biryani",
"Andhra",
"South Indian",
"Chinese",
"Seafood"
],
"avgRating": 4.6,
"feeDetails": {},
"parentId": "635",
"avgRatingString": "4.6",
"totalRatingsString": "194K+",
"promoted": true,
"adTrackingId": "cid=7755cb3e-edc4-4923-ab24-d4b8b3bf8c01~p=0~adgrpid=7755cb3e-edc4-4923-ab24-d4b8b3bf8c01#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=229~plpr=SEARCH#RESTAURANT~st=meghana~eid=88a53435-d001-4a5b-bee7-5a639034f172~srvts=1766674416131",
"sla": {
"deliveryTime": 18,
"minDeliveryTime": 15,
"maxDeliveryTime": 20,
"lastMileTravel": 1.4,
"serviceability": "SERVICEABLE",
"rainMode": "RAIN_MODE_NONE",
"slaString": "15-20 MINS",
"lastMileTravelString": "1.4 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"opened": true,
"restaurantClosedMeta": {}
},
"aggregatedDiscountInfo": {
"visible": true
},
"badges": {
"imageBadges": [
{
"imageId": "Rxawards/_CATEGORY-Biryani.png",
"description": "Delivery!"
}
]
},
"aggregatedDiscountInfoV2": {
"visible": true
},
"ratingSlab": "RATING_SLAB_5",
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {},
"commsStyling": {}
},
"cartOrderabilityNudgeBanner": {
"parameters": {},
"presentation": {}
},
"externalRatings": {
"aggregatedRating": {
"rating": "4.3",
"ratingCount": "21K+"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
"featuredSectionInfo": {
"sectionTitle": "More"
},
"campaignId": "7755cb3e-edc4-4923-ab24-d4b8b3bf8c01",
"showEoOffer": true
},
"analytics": {
"screenName": "explore",
"context": "{\"tid\":\"8e74616c-357e-7769-08c8-058e15057e9d\",\"grid\":\"8eecdd4c-a906-46d6-ade1-d8391563bb68\",\"queryUniqueId\":\"c6164729-94ad-8084-3c9b-6ffd35028586\",\"query\":\"meghana\",\"adTrackingId\":\"cid=7755cb3e-edc4-4923-ab24-d4b8b3bf8c01~p=0~adgrpid=7755cb3e-edc4-4923-ab24-d4b8b3bf8c01#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=229~plpr=SEARCH#RESTAURANT~st=meghana~eid=88a53435-d001-4a5b-bee7-5a639034f172~srvts=1766674416131\"}",
"objectValue": "229",
"impressionObjectName": "impression-restaurant-ad",
"clickObjectName": "click-restaurant-ad"
},
"ctaWithParams": {
"link": "swiggy://menu",
"type": "DEEPLINK",
"params": {
"query": "meghana",
"sourceSessionId": "or79314a-f39e-42ec-acdf-5efe8352f643",
"source": "SEARCH",
"isSld": "false",
"sourceRequestId": "694d4fef6885278343bc06e3884fd22c",
"qrEnabled": "false",
"restaurant_id": "229"
}
}
}
}
},
{
"card": {
"card": {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "1276969",
"name": "Meghana biryani",
"city": "1",
"slugs": {
"restaurant": "meghana-biryani-btm-btm-4",
"city": "bangalore"
},
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/3/77fd8001-f817-42cd-9aec-bcfa8b3d9f4c_1276969.jpg",
"address": "Shop No : 15 , Floor : 1st , Madiwala , Nile residency- madiwala, 4th Main Road, behind aiyappa temple, Madiwala New Extension, Madiwala, 1st Stage, BTM Layout, Bengaluru, Karnataka, India",
"locality": "BTM",
"areaName": "BTM",
"costForTwo": "39900",
"costForTwoMessage": "₹399 FOR TWO",
"cuisines": [
"Chinese",
"Andhra",
"Biryani",
"Hyderabadi",
"North Indian"
],
"avgRating": 2.7,
"feeDetails": {},
"parentId": "134885",
"avgRatingString": "2.7",
"totalRatingsString": "14",
"sla": {
"deliveryTime": 28,
"minDeliveryTime": 25,
"maxDeliveryTime": 30,
"lastMileTravel": 1.9,
"serviceability": "SERVICEABLE",
"rainMode": "RAIN_MODE_NONE",
"slaString": "25-30 MINS",
"lastMileTravelString": "1.9 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"opened": true,
"restaurantClosedMeta": {}
},
"badges": {},
"aggregatedDiscountInfoV3": {
"header": "10% OFF",
"subHeader": "UPTO ₹100",
"logoCtx": {
"text": "BENEFITS"
}
},
"ratingSlab": "RATING_SLAB_3",
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {},
"commsStyling": {}
},
"cartOrderabilityNudgeBanner": {
"parameters": {},
"presentation": {}
},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
"featuredSectionInfo": {
"sectionTitle": "More"
},
"showEoOffer": true
},
"analytics": {
"screenName": "explore",
"context": "{\"tid\":\"8e74616c-357e-7769-08c8-058e15057e9d\",\"grid\":\"8eecdd4c-a906-46d6-ade1-d8391563bb68\",\"queryUniqueId\":\"c6164729-94ad-8084-3c9b-6ffd35028586\",\"query\":\"meghana\"}",
"objectValue": "1276969",
"impressionObjectName": "impression-restaurant",
"clickObjectName": "click-restaurant"
},
"ctaWithParams": {
"link": "swiggy://menu",
"type": "DEEPLINK",
"params": {
"query": "meghana",
"sourceSessionId": "or79314a-f39e-42ec-acdf-5efe8352f643",
"source": "SEARCH",
"isSld": "false",
"sourceRequestId": "694d4fef6885278343bc06e3884fd22c",
"qrEnabled": "false",
"restaurant_id": "1276969"
}
}
}
}
},
{
"card": {
"card": {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "37596",
"name": "Bhojohori Manna",
"city": "1",
"slugs": {
"restaurant": "bhojohori-manna-koramangala-6th-block-koramangala",
"city": "bangalore"
},
"cloudinaryImageId": "eveqgvdewaqfer0soufd",
"address": "668/B, 6Th Cross, 6Th Block, Koramangala Club Road, Bangaluru 560095",
"locality": "Koramangala",
"areaName": "Koramangala",
"costForTwo": "60000",
"costForTwoMessage": "₹600 FOR TWO",
"cuisines": [
"Bengali",
"Mughlai"
],
"avgRating": 4.4,
"feeDetails": {},
"parentId": "113",
"avgRatingString": "4.4",
"totalRatingsString": "9.0K+",
"sla": {
"deliveryTime": 19,
"minDeliveryTime": 15,
"maxDeliveryTime": 20,
"lastMileTravel": 0.4,
"serviceability": "SERVICEABLE",
"rainMode": "RAIN_MODE_NONE",
"slaString": "15-20 MINS",
"lastMileTravelString": "0.4 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"opened": true,
"restaurantClosedMeta": {}
},
"badges": {},
"aggregatedDiscountInfoV3": {
"header": "10% OFF",
"subHeader": "UPTO ₹40",
"logoCtx": {
"text": "BENEFITS"
}
},
"ratingSlab": "RATING_SLAB_5",
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {},
"commsStyling": {}
},
"cartOrderabilityNudgeBanner": {
"parameters": {},
"presentation": {}
},
"externalRatings": {
"aggregatedRating": {
"rating": "3.8",
"ratingCount": "4.5K+"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
"featuredSectionInfo": {
"sectionTitle": "More"
},
"showEoOffer": true
},
"analytics": {
"screenName": "explore",
"context": "{\"tid\":\"8e74616c-357e-7769-08c8-058e15057e9d\",\"grid\":\"8eecdd4c-a906-46d6-ade1-d8391563bb68\",\"queryUniqueId\":\"c6164729-94ad-8084-3c9b-6ffd35028586\",\"query\":\"meghana\"}",
"objectValue": "37596",
"impressionObjectName": "impression-restaurant",
"clickObjectName": "click-restaurant"
},
"ctaWithParams": {
"link": "swiggy://menu",
"type": "DEEPLINK",
"params": {
"restaurant_id": "37596",
"query": "meghana",
"sourceSessionId": "or79314a-f39e-42ec-acdf-5efe8352f643",
"source": "SEARCH",
"isSld": "false",
"sourceRequestId": "694d4fef6885278343bc06e3884fd22c",
"qrEnabled": "false"
}
}
}
}
},
{
"card": {
"card": {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "5882",
"name": "Oh! Calcutta",
"city": "1",
"slugs": {
"restaurant": "oh-calcutta-central-bangalore",
"city": "bangalore"
},
"cloudinaryImageId": "xpvmxef4yl7umhclwojl",
"address": "No.14, Church Street , Opposite Karnataka State Pollution Board , Bangalore",
"locality": "State Pollution Board",
"areaName": "Church Street",
"costForTwo": "80000",
"costForTwoMessage": "₹800 FOR TWO",
"cuisines": [
"Bengali"
],
"avgRating": 4.6,
"feeDetails": {},
"parentId": "672",
"avgRatingString": "4.6",
"totalRatingsString": "5.4K+",
"sla": {
"deliveryTime": 60,
"minDeliveryTime": 55,
"maxDeliveryTime": 65,
"lastMileTravel": 7.3,
"serviceability": "SERVICEABLE",
"rainMode": "RAIN_MODE_NONE",
"slaString": "55-65 MINS",
"lastMileTravelString": "7.3 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"opened": true,
"restaurantClosedMeta": {}
},
"badges": {
"imageBadges": [
{
"imageId": "newg.png",
"description": "Gourmet"
}
]
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹345",
"logoCtx": {
"text": "BENEFITS"
}
},
"ratingSlab": "RATING_SLAB_5",
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {},
"commsStyling": {}
},
"cartOrderabilityNudgeBanner": {
"parameters": {},
"presentation": {}
},
"externalRatings": {
"aggregatedRating": {
"rating": "4.2",
"ratingCount": "91"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
"featuredSectionInfo": {
"sectionTitle": "More"
},
"showEoOffer": true
},
"analytics": {
"screenName": "explore",
"context": "{\"tid\":\"8e74616c-357e-7769-08c8-058e15057e9d\",\"grid\":\"8eecdd4c-a906-46d6-ade1-d8391563bb68\",\"queryUniqueId\":\"c6164729-94ad-8084-3c9b-6ffd35028586\",\"query\":\"meghana\"}",
"objectValue": "5882",
"impressionObjectName": "impression-restaurant",
"clickObjectName": "click-restaurant"
},
"ctaWithParams": {
"link": "swiggy://menu",
"type": "DEEPLINK",
"params": {
"restaurant_id": "5882",
"query": "meghana",
"sourceSessionId": "or79314a-f39e-42ec-acdf-5efe8352f643",
"source": "SEARCH",
"isSld": "false",
"sourceRequestId": "694d4fef6885278343bc06e3884fd22c",
"qrEnabled": "false"
}
}
}
}
},
{
"card": {
"card": {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "1009311",
"name": "Meghanasbiryani",
"city": "1",
"slugs": {
"restaurant": "meghanasbiryani-btm-btm",
"city": "bangalore"
},
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/15/d608970a-1ea2-4057-b8fa-e868299f19dd_1009311.JPG",
"address": "22,munireddy layout, Madiwala, BTM 1st stage ,Tavarekere,Bangalore South,Bangalore Urban,Karnataka-560068",
"locality": "Munireddy Layout",
"areaName": "BTM",
"costForTwo": "30000",
"costForTwoMessage": "₹300 FOR TWO",
"cuisines": [
"South Indian",
"Indian"
],
"feeDetails": {},
"parentId": "588034",
"avgRatingString": "--",
"sla": {
"deliveryTime": 26,
"minDeliveryTime": 25,
"maxDeliveryTime": 30,
"lastMileTravel": 1.7,
"serviceability": "SERVICEABLE",
"rainMode": "RAIN_MODE_NONE",
"slaString": "25-30 MINS",
"lastMileTravelString": "1.7 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"opened": true,
"restaurantClosedMeta": {}
},
"badges": {},
"aggregatedDiscountInfoV3": {
"header": "40% OFF",
"subHeader": "UPTO ₹80",
"logoCtx": {
"text": "BENEFITS"
}
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {},
"commsStyling": {}
},
"cartOrderabilityNudgeBanner": {
"parameters": {},
"presentation": {}
},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
"featuredSectionInfo": {
"sectionTitle": "More"
},
"showEoOffer": true
},
"analytics": {
"screenName": "explore",
"context": "{\"tid\":\"8e74616c-357e-7769-08c8-058e15057e9d\",\"grid\":\"8eecdd4c-a906-46d6-ade1-d8391563bb68\",\"queryUniqueId\":\"c6164729-94ad-8084-3c9b-6ffd35028586\",\"query\":\"meghana\"}",
"objectValue": "1009311",
"impressionObjectName": "impression-restaurant",
"clickObjectName": "click-restaurant"
},
"ctaWithParams": {
"link": "swiggy://menu",
"type": "DEEPLINK",
"params": {
"sourceSessionId": "or79314a-f39e-42ec-acdf-5efe8352f643",
"source": "SEARCH",
"isSld": "false",
"sourceRequestId": "694d4fef6885278343bc06e3884fd22c",
"qrEnabled": "false",
"restaurant_id": "1009311",
"query": "meghana"
}
}
}
}
},
{
"card": {
"card": {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "944013",
"name": "Megana Kitchen",
"city": "1",
"slugs": {
"restaurant": "megana-kitchen-mahadevpura-mahadevpura",
"city": "bangalore"
},
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/19/09e6671d-3e3f-4337-a731-2f7dc9bd7841_944013.jpg",
"address": "Shop No : #65 , Floor : 0 , Megana Kitchen , ",
"locality": "Mahadevpura",
"areaName": "Mahadevpura",
"costForTwo": "35000",
"costForTwoMessage": "₹350 FOR TWO",
"cuisines": [
"Chinese",
"Biryani",
"South Indian"
],
"avgRating": 2.8,
"feeDetails": {},
"parentId": "553346",
"avgRatingString": "2.8",
"totalRatingsString": "13",
"sla": {
"deliveryTime": 72,
"minDeliveryTime": 70,
"maxDeliveryTime": 80,
"lastMileTravel": 13.4,
"serviceability": "SERVICEABLE",
"rainMode": "RAIN_MODE_NONE",
"slaString": "70-80 MINS",
"lastMileTravelString": "13.4 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"opened": true,
"restaurantClosedMeta": {}
},
"badges": {},
"sld": true,
"aggregatedDiscountInfoV3": {
"header": "10% OFF",
"subHeader": "UPTO ₹40",
"logoCtx": {
"text": "BENEFITS"
}
},
"ratingSlab": "RATING_SLAB_3",
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {},
"commsStyling": {}
},
"cartOrderabilityNudgeBanner": {
"parameters": {},
"presentation": {}
},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
"featuredSectionInfo": {
"sectionTitle": "More"
},
"showEoOffer": true
},
"analytics": {
"screenName": "explore",
"context": "{\"tid\":\"8e74616c-357e-7769-08c8-058e15057e9d\",\"grid\":\"8eecdd4c-a906-46d6-ade1-d8391563bb68\",\"queryUniqueId\":\"c6164729-94ad-8084-3c9b-6ffd35028586\",\"query\":\"meghana\"}",
"objectValue": "944013",
"impressionObjectName": "impression-restaurant-sld",
"clickObjectName": "click-restaurant-sld"
},
"ctaWithParams": {
"link": "swiggy://menu",
"type": "DEEPLINK",
"params": {
"sourceRequestId": "694d4fef6885278343bc06e3884fd22c",
"qrEnabled": "false",
"restaurant_id": "944013",
"query": "meghana",
"sourceSessionId": "or79314a-f39e-42ec-acdf-5efe8352f643",
"source": "SEARCH",
"isSld": "true"
}
}
}
}
},
{
"card": {
"card": {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "1218241",
"name": "Kshatriya Royal Foods",
"city": "1",
"slugs": {
"restaurant": "kshatriya-royal-foods-indiranagar-indiranagar",
"city": "bangalore"
},
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/26/0bdca6d4-a80c-4e07-a1a4-f73d536f988b_1218241.jpg",
"address": "Shop No : 14/1-2, , Floor : 0 , no 14, jogu palya, appareddy palya indranagar , ",
"locality": "Indiranagar",
"areaName": "Indiranagar",
"costForTwo": "30000",
"costForTwoMessage": "₹300 FOR TWO",
"cuisines": [
"Biryani"
],
"feeDetails": {},
"parentId": "695776",
"avgRatingString": "NEW",
"sla": {
"deliveryTime": 44,
"minDeliveryTime": 40,
"maxDeliveryTime": 45,
"lastMileTravel": 5.8,
"serviceability": "SERVICEABLE",
"rainMode": "RAIN_MODE_NONE",
"slaString": "40-45 MINS",
"lastMileTravelString": "5.8 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"opened": true,
"restaurantClosedMeta": {}
},
"aggregatedDiscountInfo": {
"visible": true
},
"badges": {},
"sld": true,
"aggregatedDiscountInfoV2": {
"visible": true
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {},
"commsStyling": {}
},
"cartOrderabilityNudgeBanner": {
"parameters": {},
"presentation": {}
},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
"featuredSectionInfo": {
"sectionTitle": "More"
},
"showEoOffer": true
},
"analytics": {
"screenName": "explore",
"context": "{\"tid\":\"8e74616c-357e-7769-08c8-058e15057e9d\",\"grid\":\"8eecdd4c-a906-46d6-ade1-d8391563bb68\",\"queryUniqueId\":\"c6164729-94ad-8084-3c9b-6ffd35028586\",\"query\":\"meghana\"}",
"objectValue": "1218241",
"impressionObjectName": "impression-restaurant-sld",
"clickObjectName": "click-restaurant-sld"
},
"ctaWithParams": {
"link": "swiggy://menu",
"type": "DEEPLINK",
"params": {
"query": "meghana",
"sourceSessionId": "or79314a-f39e-42ec-acdf-5efe8352f643",
"source": "SEARCH",
"isSld": "true",
"sourceRequestId": "694d4fef6885278343bc06e3884fd22c",
"qrEnabled": "false",
"restaurant_id": "1218241"
}
}
}
}
},
{
"card": {
"card": {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "1259855",
"name": "Meghana Bites",
"city": "1",
"slugs": {
"restaurant": "meghana-bites-bellandur-sarjapur-bellandur-sarjapur",
"city": "bangalore"
},
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/11/12/7e2748e5-1652-4caf-87b9-4f48c5ef13db_1259855.jpg",
"address": "Shop No : NO 33/3 , Floor : G , Bellandur Village Varthur Hobli Bangalore , ",
"locality": "Bellandur Sarjapur",
"areaName": "Bellandur Sarjapur",
"costForTwo": "40000",
"costForTwoMessage": "₹400 FOR TWO",
"cuisines": [
"Chinese",
"Snacks",
"Burgers"
],
"feeDetails": {},
"parentId": "722513",
"avgRatingString": "NEW",
"sla": {
"deliveryTime": 45,
"minDeliveryTime": 40,
"maxDeliveryTime": 45,
"lastMileTravel": 7.4,
"serviceability": "SERVICEABLE",
"rainMode": "RAIN_MODE_NONE",
"slaString": "40-45 MINS",
"lastMileTravelString": "7.4 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"opened": true,
"restaurantClosedMeta": {}
},
"aggregatedDiscountInfo": {
"visible": true
},
"badges": {},
"aggregatedDiscountInfoV2": {
"visible": true
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {},
"commsStyling": {}
},
"cartOrderabilityNudgeBanner": {
"parameters": {},
"presentation": {}
},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
"featuredSectionInfo": {
"sectionTitle": "More"
},
"showEoOffer": true
},
"analytics": {
"screenName": "explore",
"context": "{\"tid\":\"8e74616c-357e-7769-08c8-058e15057e9d\",\"grid\":\"8eecdd4c-a906-46d6-ade1-d8391563bb68\",\"queryUniqueId\":\"c6164729-94ad-8084-3c9b-6ffd35028586\",\"query\":\"meghana\"}",
"objectValue": "1259855",
"impressionObjectName": "impression-restaurant",
"clickObjectName": "click-restaurant"
},
"ctaWithParams": {
"link": "swiggy://menu",
"type": "DEEPLINK",
"params": {
"sourceSessionId": "or79314a-f39e-42ec-acdf-5efe8352f643",
"source": "SEARCH",
"isSld": "false",
"sourceRequestId": "694d4fef6885278343bc06e3884fd22c",
"qrEnabled": "false",
"restaurant_id": "1259855",
"query": "meghana"
}
}
}
}
},
{
"card": {
"card": {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "1001839",
"name": "New Meghana Biriyani",
"city": "1",
"slugs": {
"restaurant": "new-meghana-biriyani-marathahalli-marathahalli",
"city": "bangalore"
},
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/2/1460343b-65e2-485e-bc16-7178907e3e15_1001839.jpg",
"address": "SHOP N0.13, KANNELLI ROAD NEAR EMBASSY TECH VILLAGE BACK GATE PANATHUR ROAD BHOGANAHALLI BANGALORE ,,Mahadevapura,B.B.M.P East,Karnataka-560037\t",
"locality": "Marathahalli",
"areaName": "Marathahalli",
"costForTwo": "60000",
"costForTwoMessage": "₹600 FOR TWO",
"cuisines": [
"Biryani",
"South Indian",
"North Indian"
],
"avgRating": 3.7,
"feeDetails": {},
"parentId": "584007",
"avgRatingString": "3.7",
"totalRatingsString": "4",
"sla": {
"deliveryTime": 51,
"minDeliveryTime": 50,
"maxDeliveryTime": 60,
"lastMileTravel": 9.8,
"serviceability": "SERVICEABLE_WITH_BANNER",
"rainMode": "RAIN_MODE_NONE",
"slaString": "50-60 MINS",
"lastMileTravelString": "9.8 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"opened": true,
"restaurantClosedMeta": {
"title": "UNAVAILABLE",
"subtitle": "AT THE MOMENT"
}
},
"aggregatedDiscountInfo": {
"visible": true
},
"badges": {},
"unorderableMessage": "Currently not taking orders for this location",
"aggregatedDiscountInfoV2": {
"visible": true
},
"ratingSlab": "RATING_SLAB_4",
"availabilityServiceabilityMessage": "Currently not accepting orders from your location for this outlet",
"orderabilityCommunication": {
"title": {
"text": "CURRENTLY"
},
"subTitle": {
"text": "UNAVAILABLE"
},
"message": {
"text": "Currently not accepting orders in your location",
"textColour": "primary"
},
"customIcon": {
"bgGradientColorStart": "#EB8322",
"bgGradientColorEnd": "#EE5803"
},
"commsStyling": {}
},
"cartOrderabilityNudgeBanner": {
"parameters": {},
"presentation": {}
},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
"featuredSectionInfo": {
"sectionTitle": "More"
},
"showEoOffer": true
},
"analytics": {
"screenName": "explore",
"context": "{\"tid\":\"8e74616c-357e-7769-08c8-058e15057e9d\",\"grid\":\"8eecdd4c-a906-46d6-ade1-d8391563bb68\",\"queryUniqueId\":\"c6164729-94ad-8084-3c9b-6ffd35028586\",\"query\":\"meghana\"}",
"objectValue": "1001839",
"impressionObjectName": "impression-restaurant",
"clickObjectName": "click-restaurant"
},
"ctaWithParams": {
"link": "swiggy://menu",
"type": "DEEPLINK",
"params": {
"query": "meghana",
"sourceSessionId": "or79314a-f39e-42ec-acdf-5efe8352f643",
"source": "SEARCH",
"isSld": "false",
"sourceRequestId": "694d4fef6885278343bc06e3884fd22c",
"qrEnabled": "false",
"restaurant_id": "1001839"
}
}
}
}
},
{
"card": {
"card": {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "1055850",
"name": "Mani Dum Biryani House",
"city": "1",
"slugs": {
"restaurant": "mani-dum-biryani-house-kammanahalli/kalyan-nagar-kammanahalli/kalyan-nagar-2",
"city": "bangalore"
},
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/11/137d38d3-86e9-44af-bfeb-e2c25f0e1433_1055850.jpg",
"address": "bearing No. 22 situated at chick Bazar Chandini chowk near shivaji nagar bus stop Bangalore 560051 ,Lingarajapura,Bangalore North,Bangalore Urban,Karnataka-560051",
"locality": "Lingarajapura",
"areaName": "shivaji nagar",
"costForTwo": "45000",
"costForTwoMessage": "₹450 FOR TWO",
"cuisines": [
"Andhra",
"Biryani",
"Hyderabadi",
"Indian",
"North Indian"
],
"avgRating": 3.2,
"feeDetails": {},
"parentId": "613382",
"avgRatingString": "3.2",
"totalRatingsString": "13",
"sla": {
"deliveryTime": 63,
"minDeliveryTime": 60,
"maxDeliveryTime": 70,
"lastMileTravel": 8.1,
"serviceability": "SERVICEABLE_WITH_BANNER",
"rainMode": "RAIN_MODE_NONE",
"slaString": "60-70 MINS",
"lastMileTravelString": "8.1 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"opened": true,
"restaurantClosedMeta": {
"title": "UNAVAILABLE",
"subtitle": "AT THE MOMENT"
}
},
"aggregatedDiscountInfo": {
"visible": true
},
"badges": {},
"unorderableMessage": "Currently not taking orders for this location",
"aggregatedDiscountInfoV2": {
"visible": true
},
"ratingSlab": "RATING_SLAB_4",
"availabilityServiceabilityMessage": "Currently not accepting orders from your location for this outlet",
"orderabilityCommunication": {
"title": {
"text": "CURRENTLY"
},
"subTitle": {
"text": "UNAVAILABLE"
},
"message": {
"text": "Currently not accepting orders in your location",
"textColour": "primary"
},
"customIcon": {
"bgGradientColorStart": "#EB8322",
"bgGradientColorEnd": "#EE5803"
},
"commsStyling": {}
},
"cartOrderabilityNudgeBanner": {
"parameters": {},
"presentation": {}
},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
"featuredSectionInfo": {
"sectionTitle": "More"
},
"showEoOffer": true
},
"analytics": {
"screenName": "explore",
"context": "{\"tid\":\"8e74616c-357e-7769-08c8-058e15057e9d\",\"grid\":\"8eecdd4c-a906-46d6-ade1-d8391563bb68\",\"queryUniqueId\":\"c6164729-94ad-8084-3c9b-6ffd35028586\",\"query\":\"meghana\"}",
"objectValue": "1055850",
"impressionObjectName": "impression-restaurant",
"clickObjectName": "click-restaurant"
},
"ctaWithParams": {
"link": "swiggy://menu",
"type": "DEEPLINK",
"params": {
"restaurant_id": "1055850",
"query": "meghana",
"sourceSessionId": "or79314a-f39e-42ec-acdf-5efe8352f643",
"source": "SEARCH",
"isSld": "false",
"sourceRequestId": "694d4fef6885278343bc06e3884fd22c",
"qrEnabled": "false"
}
}
}
}
},
{
"card": {
"card": {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "1277717",
"name": "Meghanas Biryani",
"city": "1",
"slugs": {
"restaurant": "meghanas-biryani-bellandur-sarjapur-bellandur-sarjapur",
"city": "bangalore"
},
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/4/30efd822-038a-4e9c-98b0-fa2517962145_1277717.jpg",
"address": "Shop No : 1 , Floor : Ground , Devarabisanahalli , Devarabisanahalli, Bellandur, Bengaluru, Karnataka 560103, India 560103",
"locality": "Bellandur Sarjapur",
"areaName": "Bellandur Sarjapur",
"costForTwo": "39900",
"costForTwoMessage": "₹399 FOR TWO",
"cuisines": [
"Andhra",
"Biryani",
"Hyderabadi"
],
"avgRating": 2.2,
"feeDetails": {},
"parentId": "286158",
"avgRatingString": "2.2",
"totalRatingsString": "<3",
"sla": {
"deliveryTime": 57,
"minDeliveryTime": 55,
"maxDeliveryTime": 65,
"lastMileTravel": 9.5,
"serviceability": "SERVICEABLE",
"rainMode": "RAIN_MODE_NONE",
"slaString": "55-65 MINS",
"lastMileTravelString": "9.5 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextOpenTimeMessage": "Opens next at 12 noon, tomorrow",
"restaurantClosedMeta": {
"title": "CLOSED",
"subtitle": "FOR TODAY"
}
},
"aggregatedDiscountInfo": {
"visible": true
},
"badges": {},
"unorderableMessage": "Opens next at 12 noon, tomorrow",
"aggregatedDiscountInfoV2": {
"visible": true
},
"ratingSlab": "RATING_SLAB_3",
"availabilityServiceabilityMessage": "Currently closed for delivery. Opens next at 12 noon, tomorrow",
"orderabilityCommunication": {
"title": {
"text": "CURRENTLY"
},
"subTitle": {
"text": "CLOSED"
},
"message": {
"text": "Opens tomorrow at 12:00 PM",
"textColour": "primary"
},
"customIcon": {
"bgGradientColorStart": "#EB8322",
"bgGradientColorEnd": "#EE5803"
},
"commsStyling": {}
},
"cartOrderabilityNudgeBanner": {
"parameters": {},
"presentation": {}
},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
"featuredSectionInfo": {
"sectionTitle": "More"
},
"showEoOffer": true
},
"analytics": {
"screenName": "explore",
"context": "{\"tid\":\"8e74616c-357e-7769-08c8-058e15057e9d\",\"grid\":\"8eecdd4c-a906-46d6-ade1-d8391563bb68\",\"queryUniqueId\":\"c6164729-94ad-8084-3c9b-6ffd35028586\",\"query\":\"meghana\"}",
"objectValue": "1277717",
"impressionObjectName": "impression-restaurant",
"clickObjectName": "click-restaurant"
},
"ctaWithParams": {
"link": "swiggy://menu",
"type": "DEEPLINK",
"params": {
"query": "meghana",
"sourceSessionId": "or79314a-f39e-42ec-acdf-5efe8352f643",
"source": "SEARCH",
"isSld": "false",
"sourceRequestId": "694d4fef6885278343bc06e3884fd22c",
"qrEnabled": "false",
"restaurant_id": "1277717"
}
}
}
}
}
];




const Body =() => {
    return (
    <div className="body">
     <div className="search">Search</div>
     <div className="res-container">
       {
        resList.map((restaurant) => (
          <RestaurantCard
           key={restaurant.card.card.info.id} // always use unique key while using map function
           resData={restaurant}
  />
  // not using keys {not acceptable} <<<<<< index as key <<<<<<<<<<<<<<<<<<<unique id as key
))
}
     </div>
   </div>)
}

const AppLayout = () =>{
    return(
        <div className='app'>
            <Header/>
            <Body/>
            
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);