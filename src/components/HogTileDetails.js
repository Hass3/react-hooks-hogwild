import React from "react";


function HogTileDetails({specialty,weight,greased,highestMedal}){

return(
    <ul>
    <li>{specialty}</li>
    <li>{weight}</li>
    <li>{greased === true ? "is greased" : "Not Greased"}</li>
    <li>{highestMedal}</li>
    </ul>
)



}


export default HogTileDetails;