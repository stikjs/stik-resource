GLOBAL.window = {};

require("stik-core.js");
require("stik-labs.js");
require("vej");
require("../src/boundary");

describe("stik-resource", function(){
  it("should return vej resource function", function(){
    var resource = window.stik.labs.boundary({
      name: "$resource"
    }).run();

    expect(resource).toBe(window.vej.resource);
  });
});
