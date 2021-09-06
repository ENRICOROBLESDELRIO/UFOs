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