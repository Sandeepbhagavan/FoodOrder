import { CDN_URL } from "../utils/constants";
const ResCard=({res})=>{
    return(
      <div id="main">
        <div id="sub1">
          <img className="phot"src={CDN_URL+res.info.cloudinaryImageId} alt="hello"/>
        </div>
        <div><h4>{res.info.name}</h4></div>
        <div><h4>{res.info.cuisines.join(",")}</h4></div>
        <div><h4>{res.info.deliveryTime}</h4></div>
        <div><h4>{res.info.avgRating}</h4></div>
        <div><h4>{res.info.costForTwo}</h4></div>
      </div>
  
    )
  }

  export default ResCard;