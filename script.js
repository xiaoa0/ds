// Create an input element to allow the user to select a file
var input = document.createElement('input');
input.type = 'file';

// Create a table element to display the CSV data
var table = document.createElement('table');
document.body.appendChild(table);

// Add an event listener to handle file selection
input.addEventListener('change', function(e) {
    var file = e.target.files[0];

    // Create a FileReader object
    var reader = new FileReader();

    // Define the onload event handler to execute when the file is read
    reader.onload = function(e) {
        var csvContent = e.target.result;
        
        // Parse the CSV content
        var rows = csvContent.split('\n');
        var csvData = [];
        for (var i = 0; i < rows.length; i++) {
            var cells = rows[i].split(',');
            csvData.push(cells);
        }

        // Display the CSV data
        displayCSVData(csvData);
    };

    // Read the file as text
    reader.readAsText(file);
});

// Function to display the CSV data in an HTML table
function displayCSVData(data) {
    // Clear the existing table content
    table.innerHTML = '';

    // Create table rows and cells
    for (var i = 0; i < data.length; i++) {
        var row = document.createElement('tr');

        for (var j = 0; j < data[i].length; j++) {
            var cell = document.createElement('td');
            cell.textContent = data[i][j];
            row.appendChild(cell);
        }

        table.appendChild(row);
    }
}

// Trigger the file selection dialog when the page is loaded
window.addEventListener('DOMContentLoaded', function() {
    document.body.appendChild(input);
});
