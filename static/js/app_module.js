// import the data from data.js
const tableData = data;

// reference the HTML table using d3
var tbody = d3.select("tbody");

// building the function for tableData
function buildTable(data){
    // clear out any existing data from table
    tbody.html("");

    // loop through each object in the data and append a row and cells for each value in the row
    data.forEach(dataRow => {
        // append a row t the table body
        let row = tbody.append("tr");
        // Loop throguh each field in the dataRow and add each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}

function handleClick() {
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // check to see if a date was entered and filter on the data using that date.
    if (date) {
        // apply filter to the table data to only keep the rows where the 'datetime' value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    }
    // if there is no date entered it will use original table data
    buildTable(filteredData);
}

// attach an event to the filter button id
d3.selectAll("#filter-btn").on("click", handleClick);

// build the table when page loads
buildTable(tableData);