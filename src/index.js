/** The `Q.fcall()` style version of async-profile */

"use strict";

var _Q = require('q');
var AsyncProfile = require('async-profile');
module.exports = function nor_async_profile(f) {
	var p = new AsyncProfile();
	return _Q.fcall(f).fin(function nor_async_profile_finally() {
		p.stop();
	});
};

/** EOF */
