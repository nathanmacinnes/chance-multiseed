chance-multiseed
================

A simple wrapper around [chance](https://github.com/victorquinn/chancejs) for
testing. Allows multiple seeds, strings or numbers. I use this in my tests like
this:

````js
var cm = require("chance-multiseed");

var masterKey = 12345,
    random;

beforeEach(function () {
    random = cm(masterKey, this.currentTest.title);
});

it("always returns 4", function () {
    var result = myFunction(random.string());
    assert.equal(result, 4);
});
````

This ensures that my code under test is in theory capable of processing anything
which the random function can generate, but tests are fully repeatable should a
particular value cause anything to fail.
