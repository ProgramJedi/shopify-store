import React, { useCallback, useState } from "react";
import Dropdown from "./Dropdown";
import { useEffect } from "react";
import "./type.css";

const Type = React.memo(({ option, data, setData }) => {
	const [value, setValue] = useState("");
	const [debouncedValue, setDebouncedValue] = useState("");

	useEffect(() => {
		const timerId = setTimeout(() => {
			setDebouncedValue(value);
		}, 500);
		return () => clearTimeout(timerId);
	}, [value]);

	const handleChange = useCallback((event) => {
		setValue(event.target.value);
	}, []);

	useEffect(() => {
		// Check if an object with the same label already exists in the state
		if (data.some((el) => el.label === option.label)) {
			setData((prev) =>
				prev.map((obj) =>
					obj.label === option.label ? { ...obj, value: debouncedValue } : obj
				)
			);
		} else {
			setData((prev) => [
				...prev,
				{ label: option.label, value: debouncedValue },
			]);
		}
	}, [option.label, debouncedValue, setData]);

	switch (option.type) {
		case "dropdown":
			return <Dropdown option={option} setValue={setValue} />;
		case "date":
			return (
				<div>
					<input
						value={value}
						onChange={(e) => setValue(e.target.value)}
						className="type-date"
						type="date"></input>
				</div>
			);
		case "text":
			return (
				<div>
					<input
						className="type-input"
						value={value}
						onChange={handleChange}
						autoFocus
						type="text"></input>
				</div>
			);
		case "number":
			return (
				<div>
					<input
						className="type-input"
						value={value}
						onChange={handleChange}
						autoFocus
						type="number"></input>
				</div>
			);
		default:
			return null;
	}
});

export default Type;
//  location.href = 'https://syrovarnia.lviv.ua/delivery/thanks';
