import React, {useState} from "react";
import Nav from "./Nav";
import FilterData from "./FilterData";

import hogs from "../porkers_data";

function App() {



	return (
		<div className="App">
			<Nav />
			<FilterData hogData={hogs}/>
		</div>
	);
}

export default App;
