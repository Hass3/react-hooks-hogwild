import React, {useState} from "react";
import Nav from "./Nav";
import HogTile from "./HogTile";
import AddHogForm from "./AddHogForm";
import hogs from "../porkers_data";

function App() {
const [allHogs, setAllHogs]= useState(hogs);
const [selectedHog, setSelectedHog] = useState(null);
const [showGreased, setShowGreased] = useState(false)
const [sortOption, setSortOption] = useState("")
	function toggleGreasedFilter(){
		setShowGreased((fals)=> !fals)
	}


	function handleSort(opt){
		setSortOption(opt)
	}

	const filteredHogs = showGreased
	? allHogs.filter((hog)=> hog.greased)
	: allHogs;

	function addingHogForm(newHog){
		const updatedHogs = [...allHogs, newHog]
		setAllHogs(updatedHogs)
	}
	const sortedHogs = filteredHogs.sort((a, b) => {
        if (sortOption === "name") {
            return a.name.localeCompare(b.name);
        } else if (sortOption === "weight") {
            return a.weight - b.weight;
        }
        return 0;
    });

	return (
		<div className="App">
			<Nav toggleGreased = {toggleGreasedFilter}  isGreased = {showGreased} sort = {handleSort}/> /
			<AddHogForm submitHogs = {addingHogForm} />
			<HogTile selected={selectedHog} 
			clickedHog={setSelectedHog} 
			theHogs={sortedHogs} />
		</div>
	);
}

export default App;
