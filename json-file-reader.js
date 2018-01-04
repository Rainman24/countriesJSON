var fs = require('fs')

module.exports = {
	reading: function(filename, callback) {
    				fs.readFile(filename, function(err, data) {
						if(err) {
							throw err
						}
					
					var pj = JSON.parse(data)
					callback(pj)
					
					})
			}
}