document.addEventListener('DOMContentLoaded', function() {
    var csvFileInput = document.getElementById('csvFileInput');
    var csvTable = document.getElementById('csvTable');

    csvFileInput.addEventListener('change', function(e) {
        var file = e.target.files[0];
        var reader = new FileReader();

        reader.onload = function(e) {
            var csvContent = e.target.result;
            var rows = csvContent.split('\n');
            var csvData = [];

            for (var i = 0; i < rows.length; i++) {
                var cells = rows[i].split(',');
                csvData.push(cells);
            }

            displayCSVData(csvData);
        };

        reader.readAsText(file);
    });

    function displayCSVData(data) {
        csvTable.innerHTML = '';

        for (var i = 0; i < data.length; i++) {
            var row = document.createElement('tr');

            for (var j = 0; j < data[i].length; j++) {
                var cell = document.createElement('td');
                cell.textContent = data[i][j];
                row.appendChild(cell);
            }

            csvTable.appendChild(row);
        }
    }
});

