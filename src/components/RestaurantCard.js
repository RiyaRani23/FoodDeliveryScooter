import {CDN_URL} from "../utils/constant";

const RestaurantCard = (props) => {
    const {resData} = props;

    const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
      sla: { deliveryTime },
    } = resData?.info;

    return (
        <div className="res-card" style={{backgroundColor:"#f0ebebff"}}>
            <img 
            className={"res-logo"+"Food"}
             src={CDN_URL + resData.info.cloudinaryImageId}
             alt="Res-Logo" />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    );
};

export default RestaurantCard;
