// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the ufo data from data.js
var dataFilter = 0;
ufos = data

// Console.log the data from data.js
console.log(tableData);

// Create an array with the column names from the given data 
var columns = ["datetime","city","state","country","shape","durationMinutes","comments"]

// Loop through the array of givendata and append each row to table on to the webpage 
function loadData(){
    tableData.forEach(ufos =>{
        var row = tbody.append("tr")
        columns.forEach(column => {
            if(column =="city" || column =="state" ||column == "country"){
                row.append("td").text(ufos[column].toUpperCase())
              }
              else row.append("td").text(ufos[column])    
        })
    })
}
// call the function to load the data 
loadData()

// Enable filter button
var submit = d3.select("#filter-btn");

submit.on("click", function () {

	// Disable page from refreshing
	d3.event.preventDefault();

	// Select datetime as input
	var inputElement = d3.select("#datetime");

	// Obtain search value
	var inputValue = inputElement.property("value");

	var filteredData = ufos.filter(ufo => ufo.datetime === inputValue);
	buildTable(filteredData);

});

// Perform datetime filter on table data
function buildTable(dataFilter) {

	tbody.html("");
	dataFilter.forEach((ufoSighting) => {
		var row = tbody.append("tr");
		columns.forEach(column => {
            if(column =="city" || column =="state" ||column == "country"){
                row.append("td").text(ufoSighting[column].toUpperCase())
              }
              else row.append("td").text(ufoSighting[column])    
		});
	});
}