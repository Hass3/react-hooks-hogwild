import React, { useState } from "react";


function AddHogForm ({submitHogs}){
const [nameValue, setNameValue]= useState("")
const [specialtyValue, setSpecialtyValue]= useState('')
const [greasedValue, setGreasedValue] = useState(false)
const[weightValue, setWeightValue]= useState('');
const [highestMedalValue, setHighestMedalValue]= useState('');
const [imageValue, setImageValue]= useState('')

function handleSubmit(e){
    e.preventDefault();

    const newHog ={
        name: nameValue ,
        specialty: specialtyValue ,
        greased: greasedValue,
        weight: weightValue,
        "highest medal achieved": highestMedalValue,
        image: imageValue,
    }
    submitHogs(newHog);
    setNameValue('');
    setSpecialtyValue('')
    setGreasedValue(false);
    setWeightValue('');
    setHighestMedalValue('');
    setImageValue('');

}





return(
    <form onSubmit={handleSubmit}>
        <input value={nameValue} onChange={e=> setNameValue(e.target.value)} placeholder="Add Name" />
        <input value={specialtyValue} onChange={e=> setSpecialtyValue(e.target.value)} placeholder="Add specialty" />
        <select value={greasedValue} onChange={e=> setGreasedValue(e.target.value === "true")}>
            <option value={"true"}>is Greased</option>
            <option value={"false"}>not Greased</option>
        </select>
        <input value={weightValue} onChange={e=> setWeightValue(e.target.value)} placeholder="Add weight" />
        <input value={highestMedalValue} onChange={e=> setHighestMedalValue(e.target.value)} placeholder="Add medal" />
        <input value={imageValue} onChange={e=> setImageValue(e.target.value)} placeholder="Add img" />
        <button type="submit">Submit Hog</button>
    </form>
)
}

export default AddHogForm
