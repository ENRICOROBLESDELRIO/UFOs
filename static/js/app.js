// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object - filters for: date, city, state, country, and shape
var filteredInput = {}

// 3. Use this function to update the filters 
function updateFilters() {

    // 4a. Save the element that was changed as a variable.
    // d3.selection explained: https://github.com/d3/d3-selection
    let changedElement = d3.select(this);

    // 4b. Save the value that was changed as a variable.
    let userValue = changedElement.property("value");
    console.log(userValue); 
    
    // 4c. Save the id of the filter that was changed as a variable.
    let userId = changedElement.attr("id");
    console.log(userId);
  
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
    if (userValue) {
        filteredInput[userId] = userValue;
    }
    else {
        delete filteredInput[userId];
    }
  
    // 6. Call function to apply all filters and rebuild the table
    filterTable();
  
  }
  
  // 7. Use this function to filter the table when data is entered.
  function filterTable() {
  
    // 8. Set the filtered data to the tableData.
    let filteredData = tableData;
  
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    for (let i in filteredInput) {
        filteredData = filteredData.filter(row => row[i] === filteredInput[i]);
    }
    // 10. Finally, rebuild the table using the filtered data
    buildTable(filteredData);
    
  }
  
  // 2. Attach an event to listen for changes to each filter
  d3.select("#datetime").on("change", updateFilters);
  d3.select("#city").on("change", updateFilters);
  d3.select("#state").on("change", updateFilters);
  d3.select("#country").on("change", updateFilters);
  d3.select("#shape").on("change", updateFilters);

  // Build the table when the page loads
  buildTable(tableData);
