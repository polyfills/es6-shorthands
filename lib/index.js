/* vim: set shiftwidth=2 tabstop=2 noexpandtab textwidth=80 wrap : */
"use strict";

var recast = require('recast');
var types = recast.types;
var b = types.builders;

exports.transform = function (ast) {
	return types.visit(ast, {
		visitProperty: function (path) {
			path.value.method = false;
			path.value.shorthand = false;
			this.traverse(path);
		}
	});
};

