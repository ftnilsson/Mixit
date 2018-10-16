var Mixitup = require("../app/public/js/MixItUp");

describe("test names divided correctly", function () {
    it("test uneven team members even teams", function () {
        var mixit = new Mixitup();
        var inputNames = ["john", "jill", "james", "joanna", "jake"];
        var data = mixit.mixer(inputNames, 0, 2);

        expect(data.teams.length).toEqual(2);
        expect(data.teams[0].members.length).toEqual(3);
        expect(data.teams[1].members.length).toEqual(2);
    });

    it("test uneven teams and uneven memebers", function () {
        var mixit = new Mixitup();
        var inputNames = ["john", "jill", "james", "joanna", "jake"];
        var data = mixit.mixer(inputNames, 0, 3);

        expect(data.teams.length).toEqual(3);
        expect(data.teams[0].members.length).toEqual(2);
        expect(data.teams[1].members.length).toEqual(2);
        expect(data.teams[2].members.length).toEqual(1);
    });

    it("test even teams and even memebers", function () {
        var mixit = new Mixitup();
        var inputNames = ["john", "jill", "james", "joanna", "jake", "jasmine"];
        var data = mixit.mixer(inputNames, 0, 4);

        expect(data.teams.length).toEqual(4);
        expect(data.teams[0].members.length).toEqual(2);
        expect(data.teams[1].members.length).toEqual(2);
        expect(data.teams[2].members.length).toEqual(1);
        expect(data.teams[3].members.length).toEqual(1);
    });
    it("test even teams and even memebers", function () {
        var mixit = new Mixitup();
        var inputNames = ["john", "jill", "james", "joanna", "jake", "jasmine"];
        var data = mixit.mixer(inputNames, 0, 5);

        expect(data.teams.length).toEqual(5);
        expect(data.teams[0].members.length).toEqual(2);
        expect(data.teams[1].members.length).toEqual(1);
        expect(data.teams[2].members.length).toEqual(1);
        expect(data.teams[3].members.length).toEqual(1);
        expect(data.teams[4].members.length).toEqual(1);
    });

    it("test even teams and even memebers", function () {
        var mixit = new Mixitup();
        var inputNames = ["john", "jill", "james"];
        var data = mixit.mixer(inputNames, 0, 5);

        expect(data.teams.length).toEqual(5);
        expect(data.teams[0].members.length).toEqual(1);
        expect(data.teams[1].members.length).toEqual(1);
        expect(data.teams[2].members.length).toEqual(1);
    });
});

describe("test unique team memebers", function () {
    it("test uneven team members even teams", function () {
        var mixit = new Mixitup();
        var inputNames = ["john", "jill", "james", "joanna", "jake"];
        var data = mixit.mixer(inputNames, 0, 2);

        expect(data.teams.length).toEqual(2);
        expect(data.teams[0].members.length).toEqual(3);
        expect(data.teams[1].members.length).toEqual(2);
    });
});

describe("test unique team names", function () {
    it("test that team names only used once", function () {
        var mixit = new Mixitup();

        for(var i = 0; i < 7; i++){
        
        var data = mixit.generateGroupNames(i, 12);      
        expect(data.length).toEqual(12);        

        expect(findDuplicates(data)).toEqual(false);
        }
    });
});

function findDuplicates(a) {   
    var sorted_arr = a.slice().sort();    
    
    for (var i = 0; i < sorted_arr.length - 1; i++) {
        if (sorted_arr[i + 1] == sorted_arr[i]) {    
            return true;
        }
    }

    return false;
}