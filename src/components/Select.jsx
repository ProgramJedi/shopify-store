import React from "react";
import { useEffect, useState } from "react";
import { filter } from "../options";
import Type from "./Type";
import "./select.css";

export default function Select({ isFilterActive, setIsFilterActive }) {
	const [selected, setSelected] = useState({});
	const [isInputVisible, setIsInputVisible] = useState(true);
	const [data, setData] = useState([]);
	const [inputValue, setInputValue] = useState();

	useEffect(() => {
		console.log(data);
	}, [data]);

	const handleSelect = (field) => {
		setSelected(field);
		setIsInputVisible((prev) => !prev);
	};
	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};
	return (
		<div className="select">
			{isInputVisible ? (
				<input
					autoFocus
					className="select-input"
					value={inputValue}
					onChange={handleInputChange}
				/>
			) : (
				<div
					onClick={(e) => {
						setIsInputVisible(!isInputVisible);
						setSelected({});
					}}
					className="select-btn">
					{selected?.name}
				</div>
			)}

			{Object.values(selected)?.length > 0 ? (
				<div className="labels-container">
					{selected?.options.map((option) => (
						<div className="label" key={option.label}>
							<Type option={option} data={data} setData={setData} />
						</div>
					))}
				</div>
			) : (
				<div
					className="select-content"
					style={{ display: isFilterActive ? "block" : "none" }}>
					<ul className="select-list">
						{Object.values(filter).map((el) => (
							<li key={el.title}>
								<div className="title">{el.title}</div>

								{el.fields
									.filter((el) => {
										if (inputValue) {
											return el.name.toLowerCase().includes(inputValue);
										}
										return el;
									})
									.map((field) => (
										<div
											onClick={() => handleSelect(field)}
											className="item"
											key={field.name}>
											{field.name}
										</div>
									))}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
}
