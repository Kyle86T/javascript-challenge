// Level 1: Sheeple. WAKE UP

// Set new let for data from the data.js file
let ufoData = data;

// Let/select tbody
let tbody = d3.select("tbody");

// Start the loop
ufoData.forEach((ufo_sighting) => {

	// Using D3, append the tr with the new data
	let row = tbody.append("tr");

	// Iterating thru the key values and pairs with a forEach function
	Object.entries(ufo_sighting).forEach(([key, value]) => {

		// From Rubric: Table includes all columns. The will append the data for all of the columns  
		let cell = row.append("td");
		cell.text(value);
	});
});

// Select the filter button
let button = d3.select("#filter-btn");

// Select the form
let form = d3.select("form");

// Event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);

// Got this based on one of the assignments
function runEnter() {

  // From Rubric: Prevent the page from reloading using D3
  d3.event.preventDefault();

  // Selecting the user input from the form control class (filter date)
  let inputElement = d3.select(".form-control");

  // Pulling the value from the user input
  let inputValue = inputElement.property("value");

  // Grabbing the date input from user to filter the data.
	let results = ufoData.filter(ufo => ufo.datetime === inputValue);
	
	// Set the body to empty, clearing the old content out
	tbody.html("");

	// From Rubric: Table renders without error on the page load. Taking care of empty tables here
	if (results.length === 0) {
		tbody.text(`There were no recorded UFO sights on the date: ${inputValue}.`);
	}

	// From Rubric: Correctly uses the filter method to get the new table data based off the given input
	else {
		results.forEach((ufo) => {
			let row = tbody.append("tr");
			Object.entries(ufo).forEach(([key, value]) => {
				let cell = row.append("td");
				cell.text(value);
			});
		});
	};
};