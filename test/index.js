/* vim: set shiftwidth=2 tabstop=2 noexpandtab textwidth=80 wrap : */
"use strict";

var recast = require('recast');
var esprima = require('esprima');
var assert = require('assert');
var shorthands = require('../');

function transform(source) {
	var ast = recast.parse(source, {esprima: esprima});
	ast = shorthands.transform(ast);
	return recast.print(ast);
}

describe('es6-shorthands', function () {
	it('should transform shorthand properties', function () {
		assert.equal(transform('({a, b, c, d: d})').code, '({a: a, b: b, c: c, d: d})');
	});
	it('should transform shorthand methods', function () {
		assert.equal(transform('({a, m() { method; }})').code, '({a: a, m: function() { method; }})');
	});
});
