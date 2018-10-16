class TableGenerator {
    generatTable(data, elementId) {

        var element = document.getElementById(elementId);

        for (var team = 0; team < data.teams.length; team++) {
            var resultTable = document.createElement("table");
            resultTable.id = "resultTable" + team;
            var teamNames = [];
            teamNames.push(data.teams[team].teamName)
console.log(teamNames);
            this.generateRows(resultTable, teamNames, true);
            console.log(data.teams[team].members);
            this.generateRows(resultTable, data.teams[team].members, false);

            element.appendChild(resultTable);
        }
    }
    
    generateRows(table, names, isheader) { 
        console.log(names);       
        names.forEach(element => {
            var resultRow = document.createElement("tr");
            resultRow.appendChild(this.generateTableData(element, isheader));
            table.appendChild(resultRow)
        });
    }

    generateTableData(data, isheader) {
        var td = isheader ? document.createElement("th") : document.createElement("td");
        td.appendChild(document.createTextNode(data));
        return td;
    }
}

module.exports = TableGenerator;