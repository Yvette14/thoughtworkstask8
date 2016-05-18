'use strict';

function collect_all_even(collection) {
	var even_str = collection.join();
	var pattern = /\d*[02468]/g;
	var even_arr = even_str.match(pattern);

	return even_arr.map(function(item, index, array) {
		return parseInt(item);
	});
}

module.exports = collect_all_even;