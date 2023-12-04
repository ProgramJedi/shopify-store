const statusDropdown = ["Active", "Archived", "Draft"];
const textDropdown = [
	"Contains",
	"Does not contain",
	"Equals",
	"Contains any of these words",
	"Ends with",
	"Starts with",
	"Does not start with",
	"Has no value",
];
const collectionDropdown = ["Is", "Is Not"];
const numberDropdownOne = [
	"Greater Than",
	"Less Than",
	"Equal To",
	"Not Equal To",
];
const tagsDropdown = ["Contains All", "Contains One", "Contains None"];
const weightDropdown = ["Equals", "Does not equal"];
const DateTimeDropdown = ["Is Before", "Is After"];
const visibleDropdown = ["True", "False"];
const weightUnitDropdown = ["Gram", "Kilogram", "Ounce", "Pound"];

export const filter = {
	products: {
		title: "Product Fields",
		fields: [
			{
				name: "Collection",
				options: [
					{
						type: "dropdown",
						label: "Collection Dropdown",
						values: collectionDropdown,
					},
					{
						type: "text",
						label: "Text Input",
						values: "Sample Collection",
					},
				],
			},
			{
				name: "Description",
				options: [
					{
						type: "dropdown",
						label: "Text Dropdown",
						values: textDropdown,
					},
					{
						type: "text",
						label: "Text Input Field",
						values: "",
					},
				],
			},
			{
				name: "Date Created",
				options: [
					{
						type: "dropdown",
						label: "Date/Time Dropdown",
						values: DateTimeDropdown,
					},
					{
						type: "date",
						label: "Date/Time Select",
						values: "",
					},
				],
			},
			{
				name: "Date Published",
				options: [
					{
						type: "dropdown",
						label: "Date/Time Dropdown",
						values: DateTimeDropdown,
					},
					{
						type: "date",
						label: "Date/Time Select",
						values: "",
					},
				],
			},
			{
				name: "Handle",
				options: [
					{
						type: "dropdown",
						label: "Text Dropdown",
						values: textDropdown,
					},
					{
						type: "text",
						label: "Text Input Field",
						values: "",
					},
				],
			},
			{
				name: "Inventory Quantity",
				options: [
					{
						type: "dropdown",
						label: "Number Dropdown One",
						values: numberDropdownOne,
					},
					{
						type: "number",
						label: "Text Input Field",
						values: "",
					},
				],
			},
			{
				name: "Option One Name",
				options: [
					{
						type: "dropdown",
						label: "Text Dropdown",
						values: textDropdown,
					},
					{
						type: "text",
						label: "Text Input Field",
						values: "",
					},
				],
			},
			{
				name: "Option Two Name",
				options: [
					{
						type: "dropdown",
						label: "Text Dropdown",
						values: textDropdown,
					},
					{
						type: "text",
						label: "Text Input Field",
						values: "",
					},
				],
			},
			{
				name: "Option Three Name",
				options: [
					{
						type: "dropdown",
						label: "Text Dropdown",
						values: textDropdown,
					},
					{
						type: "text",
						label: "Text Input Field",
						values: "",
					},
				],
			},
			{
				name: "Product Category",
				options: [
					{
						type: "dropdown",
						label: "Text Dropdown",
						values: textDropdown,
					},
					{
						type: "text",
						label: "Text Input Field",
						values: "",
					},
				],
			},
			{
				name: "Product Type",
				options: [
					{
						type: "dropdown",
						label: "Text Dropdown",
						values: textDropdown,
					},
					{
						type: "text",
						label: "Text Input Field",
						values: "",
					},
				],
			},
			{
				name: "Status",
				options: [
					{
						type: "dropdown",
						label: "Status Dropdown",
						values: statusDropdown,
					},
				],
			},
			{
				name: "SEO Meta Description",
				options: [
					{
						type: "dropdown",
						label: "Text Dropdown",
						values: textDropdown,
					},
					{
						type: "text",
						label: "Text Input Field",
						values: "",
					},
				],
			},
			{
				name: "SEO Meta Title",
				options: [
					{
						type: "dropdown",
						label: "Text Dropdown",
						values: textDropdown,
					},
					{
						type: "text",
						label: "Text Input Field",
						values: "",
					},
				],
			},
			{
				name: "Tag",
				options: [
					{
						type: "dropdown",
						label: "Tags Dropdown",
						values: tagsDropdown,
					},
					{
						type: "text",
						label: "Text Input Field",
						values: "",
					},
				],
			},
			{
				name: "Title",
				options: [
					{
						type: "dropdown",
						label: "Text Dropdown",
						values: textDropdown,
					},
					{
						type: "text",
						label: "Text Input Field",
						values: "",
					},
				],
			},
			{
				name: "Variant Count",
				options: [
					{
						type: "dropdown",
						label: "Number Dropdown One",
						values: numberDropdownOne,
					},
					{
						type: "number",
						label: "Whole Number Input",
						values: "",
					},
				],
			},
			{
				name: "Vendor",
				options: [
					{
						type: "dropdown",
						label: "Text Dropdown",
						values: textDropdown,
					},
					{
						type: "text",
						label: "Text Input Field",
						values: "",
					},
				],
			},
			{
				name: "Visible on Online Store",
				options: [
					{
						type: "dropdown",
						label: "Text Dropdown",
						values: visibleDropdown,
					},
				],
			},
		],
	},
	variants: {
		title: "Variant Fields",
		fields: [
			{
				name: "Barcode",
				options: [
					{
						type: "dropdown",
						label: "Text Dropdown",
						values: textDropdown,
					},
					{
						type: "text",
						label: "Text Input Field",
						values: "",
					},
				],
			},
			{
				name: "Compare at Price",
				options: [
					{
						type: "dropdown",
						label: "Number Dropdown One",
						values: numberDropdownOne,
					},
					{
						type: "number",
						label: "Price Input",
						values: "",
					},
				],
			},
			{
				name: "Cost",
				options: [
					{
						type: "dropdown",
						label: "Number Dropdown One",
						values: numberDropdownOne,
					},
					{
						type: "number",
						label: "Price Input",
						values: "",
					},
				],
			},
			{
				name: "Price",
				options: [
					{
						type: "dropdown",
						label: "Number Dropdown One",
						values: numberDropdownOne,
					},
					{
						type: "number",
						label: "Price Input",
						values: "",
					},
				],
			},
			{
				name: "SKU",
				options: [
					{
						type: "dropdown",
						label: "Text Dropdown",
						values: numberDropdownOne,
					},
					{
						type: "text",
						label: "Text Input Field",
						values: "",
					},
				],
			},
			{
				name: "Variant Title",
				options: [
					{
						type: "dropdown",
						label: "Text Dropdown",
						values: numberDropdownOne,
					},
					{
						type: "text",
						label: "Text Input Field",
						values: "",
					},
				],
			},
			{
				name: "Weight",
				options: [
					{
						type: "dropdown",
						label: "Number Dropdown One",
						values: numberDropdownOne,
					},
					{
						type: "number",
						label: "Number Input",
						values: "",
					},
				],
			},
			{
				name: "Weight Unit",
				options: [
					{
						type: "dropdown",
						label: "Weight Dropdown",
						values: weightDropdown,
					},
					{
						type: "dropdown",
						label: "Weight Unit Dropdown",
						values: weightUnitDropdown,
					},
				],
			},
		],
	},
};
