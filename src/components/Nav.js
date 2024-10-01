import React from "react";
import piggy from "../assets/porco.png";

const Nav = ({toggleGreased, isGreased, sort}) => {
	function handleSortChange(e){
		sort(e.target.value)
	}
	
	return (
		<div className="navWrapper">
			<span className="headerText">HogWild</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">
				A React App for County Fair Hog Fans
			</span>
			<button onClick={toggleGreased}>
        {isGreased? "Show All Hogs" : "Show Greased Hogs"}
      </button>
	  <select onChange={handleSortChange}>
        <option value="">Sort by...</option>
        <option value="name">Name</option>
        <option value="weight">Weight</option>
      </select>
		</div>
		
	);
};

export default Nav;
