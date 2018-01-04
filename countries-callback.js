var imp = require('./json-file-reader.js')

var specc = function(itemData) {
	var search = process.argv[2]
	itemData.forEach(function(item) {
		if(item.name.toLowerCase()===search.toLowerCase()) {
			console.log(`Country: ${item.name}
			Top Level Domain: ${item.topLevelDomain}`)
		}
	})
} 

imp.reading('./countries.json', specc)