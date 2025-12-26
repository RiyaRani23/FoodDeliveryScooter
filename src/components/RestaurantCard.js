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

export default RestaurantCard;
