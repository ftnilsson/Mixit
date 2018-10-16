var Mixitup = require("../app/public/js/MixItUp");
var tableGenerator = require("..app/public/js/MixitUp");

describe("Todo test table generator", function () {
    it("test generating tables", function () {
        var mixit = new Mixitup();
        var generator = new tableGenerator();
        var inputNames = ["john", "jill", "james", "joanna", "jake"];
        var data = mixit.mixer(inputNames, 0, 2);
    });
});