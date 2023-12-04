import { useEffect, useState } from "react";
import "./dropdown.css";

export default function Dropdown({ option, setValue }) {
	const [isActive, setIsActive] = useState(false);
	const [isInputVisible, setIsInputVisible] = useState(false);
	const [selected, setSelected] = useState(option.values[0]);

	useEffect(() => {
		setValue(selected);
	}, [selected, setValue]);

	return (
		<div className="dropdown">
			{isInputVisible ? (
				<input autoFocus className="dropdown-input" />
			) : (
				<div
					onClick={(e) => {
						setIsActive(!isActive);
						setIsInputVisible(!isInputVisible);
					}}
					className="dropdown-btn">
					{selected}
					<span
						className={isActive ? "fas fa-caret-up" : "fas fa-caret-down"}
					/>
				</div>
			)}
			<div
				className="dropdown-content"
				style={{ display: isActive ? "block" : "none" }}>
				{option.values.map((value) => (
					<div
						onClick={(e) => {
							setSelected(e.target.textContent);
							setIsActive(!isActive);
							setIsInputVisible(!isInputVisible);
						}}
						className="item"
						key={value}>
						{value}
					</div>
				))}
			</div>
		</div>
	);
}
