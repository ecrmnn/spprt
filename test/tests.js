'use strict';

var spprt = require('../src');
var chai = require('chai');
var expect = require('chai').expect;

describe('Spprt Test Suite', function () {
  it('last', function () {
    var last1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var last2 = 'agnc4yfbax4fa4yxn93_sdfaj09<å?@'.split('');
    var last3 = [1337, 2, 3, 'a', 'b', last1, last2, {unicorn: true}];

    expect(spprt.last(last1)).to.be.equal(9);
    expect(spprt.last(last2)).to.be.equal('@');
    expect(spprt.last(last3)).to.be.an('object');
    expect(spprt.last(last3)).to.have.property('unicorn');
  });

  it('has + inArray', function () {
    var has1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var has2 = 'agnc4yfbax4fa4yxn93_sdfaj09<å?@'.split('');
    var has3 = [1337, 2, 3, 'a', 'b', has1, has2, {unicorn: true}];
    var has4 = {club: 'Liverpool FC', nickname: 'The Reds', short: 'LFC'};

    expect(spprt.has(has1, 6)).to.be.equal(true);
    expect(spprt.has(has2, 77)).to.be.equal(false);
    expect(spprt.has(has3, has2)).to.be.equal(true);
    expect(spprt.has(has4, 'club')).to.be.equal(true);
  });

  it('only', function () {
    var only1 = {firstname: 'Daniel', lastname: 'Eckermann', github: 'ecrmnn'};

    expect(spprt.only(only1, ['lastname', 'github'])).to.be.an('object');
    expect(spprt.only(only1, ['lastname', 'github'])).not.to.have.property('firstname');
    expect(spprt.only(only1, ['lastname', 'github'])).to.have.property('lastname');
    expect(spprt.only(only1, ['lastname', 'github'])).to.have.property('github');
  });

  it('except', function () {
    var except1 = {firstname: 'Daniel', lastname: 'Eckermann', github: 'ecrmnn'};

    expect(spprt.except(except1, ['lastname', 'github'])).to.be.an('object');
    expect(spprt.except(except1, ['lastname', 'github'])).to.have.property('firstname');
    expect(spprt.except(except1, ['lastname', 'github'])).not.to.have.property('lastname');
    expect(spprt.except(except1, ['lastname', 'github'])).not.to.have.property('github');
  });

  it('merge', function () {
    expect(spprt.merge([1], [2], [3], [4]).length).to.be.equal(4);
    expect(spprt.merge([1], [2], [3], [4])[0]).to.be.equal(1);
    expect(spprt.merge([1], [2], [3], [4])[3]).to.be.equal(4);

    expect(spprt.merge({a: true}, {b: false}, {a: false})).to.be.an('object');
    expect(spprt.merge({a: true}, {b: false}, {a: false})).not.to.have.property('a', false);
    expect(spprt.merge({a: true}, {b: false}, {a: false})).to.have.property('a', true);
    expect(spprt.merge({a: true}, {b: false}, {a: false})).to.have.property('b', false);
  });

  it('unique', function () {
    expect(spprt.unique([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2]).length).to.be.equal(2);
    expect(spprt.unique([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2])[0]).to.be.equal(1);
    expect(spprt.unique([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2])[1]).to.be.equal(2);
  });

  it('shuffle', function () {
    var shuffle1 = [9, 8, 7, 6, 5, 4, 3, 2, 1];

    expect(spprt.shuffle(shuffle1)).to.be.deep.equal(shuffle1);
    expect(spprt.shuffle([1, 2, 3, 4, 5, 6, 7, 8])).not.to.be.deep.equal([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  it('diff', function () {
    expect(spprt.diff([2, 3, 4], [3, 4, 5])).to.be.deep.equal([2]);
    expect(spprt.diff([2, 3, 4], [3, 4, 5], [9, 8, 7, 2])).to.be.deep.equal([]);
  });

  it('intersect', function () {
    expect(spprt.intersect([2, 3, 4], [3, 4, 5])).to.be.deep.equal([3, 4]);
    expect(spprt.intersect([2, 3, 4], [3, 4, 5], [9, 8, 7, 2])).to.be.deep.equal([2, 3, 4]);
  });

  it('trim', function () {
    expect(spprt.trim('just   a  random        string')).to.be.equal('just a random string');
    expect(spprt.trim('just \t\n  a  random    \r    string')).to.be.equal('just a random string');
    expect(spprt.trim('just   a  random        \n\n\nstring')).to.be.equal('just a random string');
  });
});