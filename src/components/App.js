import React, { useState } from "react";
import Nav from "./Nav";
import HogList from "./HogList";
import hogs from "../porkers_data";

function App() {
	const[displayedHogs, setDisplayedHogs] = useState(hogs)
	
	const filterGreasedHogs = () => {
		setDisplayedHogs(hogs.filter(hog => hog.greased));
	};

	const filterUngreasedHogs = () => {
		setDisplayedHogs(hogs.filter(hog => !hog.greased));
	}

	const resetFilter = () => {
		setDisplayedHogs(hogs);
	};

	return (
		<div className="App">
			<Nav onFilterGreased={filterGreasedHogs} onResetFilter={resetFilter} onfilterUngreasedHogs={filterUngreasedHogs}/>
			<HogList hogs={displayedHogs} />
		</div>
	);
}

export default App;
