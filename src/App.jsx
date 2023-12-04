import { useState } from "react";
import Select from "./components/Select";
import "./App.css";

const App = () => {
	const [isFilterActive, setIsFilterActive] = useState(false);

	return (
		<div className="App">
			<div className="buttonContainer">
				<button onClick={() => setIsFilterActive((prev) => !prev)}>
					Filter
				</button>
			</div>
			{isFilterActive && (
				<Select
					isFilterActive={isFilterActive}
					setIsFilterActive={setIsFilterActive}
				/>
			)}
		</div>
	);
};

export default App;
