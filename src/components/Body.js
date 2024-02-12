import ResCard from "./ResCard"
import Details from "../utils/mockdata"
import {useState} from "react"
// import {useEffect} from "react"

const Body =()=>{
    const [listOfResturants,setListOfResturants]=useState(Details)
    // useEffect(()=>{fetchData()
    // },[])
    // const fetchData=async()=>{
    //     const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89960&lng=80.22090&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    //     const Json= await data.json();
    //     console.log(Json);
    // }
    return(
      <div id="searc">
        <div id="button">
        <button onClick={
            ()=>{
            const filteredList = listOfResturants.filter((res)=>res.info.avgRating < 4);
            setListOfResturants(filteredList);
            }
        }>Top rated resturants</button>
        </div>
        <div id="search">
        {
          Details.map((resturant)=>(<ResCard key={resturant.info.id} res={resturant}/>))
  
        }
        </div>
  
      </div>
    )
  }
  export default Body