require("./MixItUp");
require("./TableGenerator");


function mix() {
  var blender = new Mixitup();
  var generator = new TableGenerator();

  var textarea = document.getElementById("peopleToMix");
  var names = splitNames(textarea.value);
  var teamName = parseInt(document.getElementById("teamName").value);

  var result = document.getElementById("result");
  result.innerHTML = "";

  var numTeams = parseInt(document.getElementById("numberOfGroups").value);
  var data = blender.mixer(names, teamName, numTeams);

  generator.generatTable(data, "result");
}

function splitNames(nameStr) {
  var names;
  if (nameStr.lastIndexOf(",") === -1) {
    names = nameStr.split("\n");
  } else {
    names = nameStr.split(",");
  }

  return names.filter(function (el) {
    if (el.trim() === "") {
      alert("found one");
    }
    return el.trim() != ""
  });
}

//   function shuffle(array) {
//     var currentIndex = array.length, temporaryValue, randomIndex;
//     // While there remain elements to shuffle...
//     while (0 !== currentIndex) {
//       // Pick a remaining element...
//       randomIndex = Math.floor(Math.random() * currentIndex);
//       currentIndex -= 1;

//       // And swap it with the current element.
//       temporaryValue = array[currentIndex];
//       array[currentIndex] = array[randomIndex];
//       array[randomIndex] = temporaryValue;
//     }
//     return array;
//   }

//   function tableGenerator(numberofTeams, names, groupNames, elementId){

//     var element = document.getElementById(elementId);
//     var numPerTeam = parseInt(names.length / numberofTeams);

//     for(var team = 0; team < numberofTeams; team++){       
//       var resultTable = document.createElement("table");
//       resultTable.id = "resultTable" + team;     
//       var start = team * numPerTeam;
//       var end = numPerTeam;
//       if(team === numberofTeams -1)
//         end = names.length;

//       var row = generateRows(resultTable, names.slice(start, start + end), groupNames[team]);

//       element.appendChild(resultTable);
//     }        
//   }

//   function generateGroupNames(type, numberOfGroups){
//     const groupNames = [
//         [""],
//         ["Admiral Gial Ackbar", "BB-8", "Jar Jar Binks", "C-3PO", "Lando Calrissian", "Chewbacca", "Emperor's Royal Guard", "Dark side","Rebels", "X-wing", "Millenium Falcon", "Death Star", "Boba Fett", "Tie Fighter", "Jabba the Hutt", "Qui-Gon Jinn", "Obi-Wan Kenobi", "Darth Maul", "Princess Leia", "R2-D2", "Rey", "Rouge Leader", "Luke Skywalker", "Han Solo", "Yoda"],
//         ["JavaScript", "Python", "Java", "Ruby", "C#", "PHP", "Go", "TypeScript", "Swift", "Elexir", "Scala", "R"],	
//         ["Apple", "Microsoft", "Samsung", "Oracle", "IBM", "SAP", "Alphabet", "Dell", "Huawei", "Dell", "LG", "Amazon"],
//         ["Richard Hendricks", "Nelson 'Big Head' Bighetti", "Bertram Gilfoyle", "Dinesh Chugtai", "Monica Hall", "Donald 'Jared' Dunn","Gavin Belson", "Jian Yang", "Erlich Bachman", "Laurie Bream", "Russ Hanneman", "Jack Barker", "Hoover"],
//         ["Red", "Green", "Blue", "Yellow", "Pink", "Purple", "Brown", "White", "Black", "Orange", "Grey", "Teal"],
//         ["Felix Leiter", "M", "Miss Moneypenny", "007", "Q", "Dr. Julius No", "Auric Goldfinger", "Ernst Stavro Blofeld", "SPECTRE", "Francisco Scaramanga", "Jaws", "Mr. Whitev", "Oddjob" ]
//     ];
//     var groups = [];
//     var array = groupNames[parseInt(type)];
//     var i = 0;
//     var name = "" 
//     var currentIndex = array.length, randomIndex;
//     while (i < numberOfGroups) {

//       if(type === "0"){
//         name = "Team " + (i + 1);
//       }else{
//         // Pick a remaining element...
//         randomIndex = Math.floor(Math.random() * currentIndex);
//         currentIndex -= 1;
//         name = "Team " + array[randomIndex];
//       }
//       groups.push(name);
//       i++;
//       }          

//       return groups;
//     }

//   function generateRows(table, names, groupName){
//     var resultRow = document.createElement("tr");
//     var td = generateTableData(groupName, true);
//     td.className ="bold";
//     resultRow.appendChild(td);
//     table.appendChild(resultRow);
//     names.forEach(element => {          
//       resultRow = document.createElement("tr");
//       resultRow.appendChild(generateTableData(element));
//       table.appendChild(resultRow)
//     });        
//   }

//   function generateTableData(data, isheader){
//     var td = isheader ? document.createElement("th") : document.createElement("td");
//       td.appendChild(document.createTextNode(data));
//     return td;
//   }


//   function selectElementContents(el) {
//     var body = document.body, range, sel;
//     if (document.createRange && window.getSelection) {
//         range = document.createRange();
//         sel = window.getSelection();
//         sel.removeAllRanges();
//         try {
//             range.selectNodeContents(el);
//             sel.addRange(range);
//         } catch (e) {
//             range.selectNode(el);
//             sel.addRange(range);
//         }
//     } else if (body.createTextRange) {
//         range = body.createTextRange();
//         range.moveToElementText(el);
//         range.select();
//     }
// }