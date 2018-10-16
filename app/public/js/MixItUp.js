class Mixitup{

  /// Splits a input by either comma or newline
  splitNames(data){
    var names;
    if(data.lastIndexOf(",") === -1){
       names = data.split("\n"); 
    }else{
      names = data.split(",");
    }

    return names.filter(function (el) {      
      return el.trim() != ""});
  }

  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  generateGroupNames(type, numberOfTeams){
    const groupNames = [
        [""],
        ["Admiral Gial Ackbar", "BB-8", "Jar Jar Binks", "C-3PO", "Lando Calrissian", "Chewbacca", "Emperor's Royal Guard", "Dark side","Rebels", "X-wing", "Millenium Falcon", "Death Star", "Boba Fett", "Tie Fighter", "Jabba the Hutt", "Qui-Gon Jinn", "Obi-Wan Kenobi", "Darth Maul", "Princess Leia", "R2-D2", "Rey", "Rouge Leader", "Luke Skywalker", "Han Solo", "Yoda"],
        ["JavaScript", "Python", "Java", "Ruby", "C#", "PHP", "Go", "TypeScript", "Swift", "Elexir", "Scala", "R"],	
        ["Apple", "Microsoft", "Samsung", "Oracle", "IBM", "SAP", "Alphabet", "Dell", "Huawei", "Evolve", "LG", "Amazon"],
        ["Richard Hendricks", "Nelson 'Big Head' Bighetti", "Bertram Gilfoyle", "Dinesh Chugtai", "Monica Hall", "Donald 'Jared' Dunn","Gavin Belson", "Jian Yang", "Erlich Bachman", "Laurie Bream", "Russ Hanneman", "Jack Barker", "Hoover"],
        ["Red", "Green", "Blue", "Yellow", "Pink", "Purple", "Brown", "White", "Black", "Orange", "Grey", "Teal"],
        ["Felix Leiter", "M", "Miss Moneypenny", "007", "Q", "Dr. Julius No", "Auric Goldfinger", "Ernst Stavro Blofeld", "SPECTRE", "Francisco Scaramanga", "Jaws", "Mr. Whitev", "Oddjob" ]
    ];
    var groups = [];
    var array = groupNames[parseInt(type)];
    var i = 0;
    var name = "" 
    var randomIndex;    
    while (i < numberOfTeams) {
      var currentIndex = array.length;
      if(type === 0){
        name = "Team " + (i + 1);
      }
      else{
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        name = "Team " + array[randomIndex];
        array.splice(randomIndex, 1);
      }
      groups.push(name);
      i++;
      }          

      return groups;
    }

    chunk(array, size) {     
      var chunked_arr = [];
      var names = array;
      for(var i = 0; i < size; i++){               
        var numPerTeam = parseInt(Math.ceil(names.length / (size-i)));        
        chunked_arr.push(names.slice(0, numPerTeam));
        names.splice(0, numPerTeam);
      }
      return chunked_arr;
    }

  mixer(names, teamType, numberOfTeams){    
    
    var type = parseInt(teamType);
    var numTeams = parseInt(numberOfTeams);
    var mixed = this.shuffle(names);    
    var teamNames = this.generateGroupNames(type, numTeams);    
    var chunkedNames = this.chunk(mixed, numTeams);
    
    var data = {teams:[]};

    for(var team = 0; team < numTeams; team++){        
      var teamObj = {teamName: teamNames[team], members:chunkedNames[team]};        
      data.teams.push(teamObj);        
    } 

    return data;
  } 
}

module.exports = Mixitup;
