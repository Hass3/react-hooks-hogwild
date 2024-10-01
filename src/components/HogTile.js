import React, {useState} from "react";
import HogTileDetails from "./HogTileDetails";
import hogs from "../porkers_data";

function HogTile({theHogs, clickedHog, selected}){


function handleClick(hog){
    clickedHog(hog)
}


return(
  
         <div className="ui grid container">
        {theHogs.map((hog)=>
            <div key={hog.name} className="ui eight wide column"> 
                <div onClick={()=>handleClick(hog)} className="pigTile">
                <h3>{hog.name}</h3>
                <img className="minPigTile "src={hog.image} alt={hog.name}/>
                </div>
            </div>
        )}
        {selected&& (
            <HogTileDetails 
            specialty={selected.specialty}
            weight={selected.weight}
            greased={selected.weight}
            highestMedal={selected["highest medal achieved"]}
            />
        )}
        </div>
// specialty, weight, greased, and highest medal achieved
 
    
   


)


}


export default HogTile