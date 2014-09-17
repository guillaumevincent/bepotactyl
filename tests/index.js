var assert = require("assert"),
    math = require("../app/index.js");

describe('La somme', function () {
    describe('de deux nombres', function () {
        it('doit être correcte', function () {
            assert.equal(-1, math.somme(-2, 1));
            assert.equal(2, math.somme(1, 1));
        })
    })
});