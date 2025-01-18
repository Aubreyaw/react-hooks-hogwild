import React from "react";
import piggy from "../assets/porco.png";

const Nav = ({ onFilterGreased, onResetFilter, onfilterUngreasedHogs }) => {
	return (
		<div className="navWrapper">
			<span className="headerText">HogWild</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">
				A React App for County Fair Hog Fans
			</span>
			<div>
				<button onClick={onFilterGreased}>Show Greased Hogs</button>
				<button onClick={onResetFilter}>Show All Hogs</button>
				<button onClick={onfilterUngreasedHogs}>Show Un-greased Hogs</button>
			</div>
		</div>
	);
};

export default Nav;
