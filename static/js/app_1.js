// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Function to build a Table of data
function buildTable(data) {

    /// First, clear output from table. Clearing the existing data creates a fresh table in which we can insert data.
    /// tbody.html references the table, pointing JavaScript directly to the table in the HTML.
    tbody.html("");

    /// Add the forEach Function to loop through each object in the data
    /// This function done the following:
    /// - Loop through each object in the array
    /// - Append a row to the HTML table
    /// - Add each value from the object into a cell
    data.forEach((dataRow) => {
        /// Create a variable that will append a row to the table body
        let row = tbody.append("tr");

        /// Loop Through Data Rows
        /// This line of code put each sighting onto its own row of data
        /// The val argument represents each item in the object, such as the location, shape, or duration
        Object.values(dataRow).forEach((val) => {

            /// Append each value of the object to a cell in the table
            /// Set the action of appending data into a table data tag (<td>)
            let cell = row.append("td");

            /// Add the values
            /// This is the variable that holds only each value from the object
            /// When we chain .text(value) to the variable, we are extracting only the text of the value
            cell.text(val);
        }
    );
  });
}

/// Function to collect users input throught a filter
function handleClick() {

    /// Grab the datetime value from the filter
    /// We need to create a couple of variables to hold our date data, both filtered and unfiltered
    /// The .select() function is a very common one used in D3
    /// It will select the very first element that matches our selector string: "#datetime"
    /// The selector string is the item we're telling D3.js to look for
    let date = d3.select("#datetime").property("value");

    /// Set a default filter and save it to a new variable
    let filteredData = tableData;

    /// if to filter the default data to show only the date entered
    /// We’re applying a filter method that will match the datetime value to the filtered date value
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    /// Rebuild the table using the filtered data
    /// @NOTE: If no date was entered, then filteredData will
    /// just be the original tableData.
    buildTable(filteredData);
};

/// Build the table when the page loads
/// Another aspect of D3.js is that it can listen for events that occur on a webpage, such as a button click.    
/// The next code we add will be tied to the filter button we'll build on our webpage.
d3.selectAll("#filter-btn").on("click", handleClick);

/// Build the table when the page loads
/// This make the webpage run with the original output before being filtered
buildTable(tableData);