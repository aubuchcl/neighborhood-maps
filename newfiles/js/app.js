




// create the apps viewmodel

function AppViewModel(){
	this.searchBar = ko.observable('');
	this.title = ko.observable("NorthStar");
	this.location = ko.observable("{lat: 100, long: 200}");

	this.searchResults = ko.computed(function(){
		return this.searchBar();
	}, this)

	this.capitalizeInput = function(){
		var currentVal = this.searchBar();
		this.searchBar(currentVal.toUpperCase());

	};
}

// Activate knockout.js
ko.applyBindings(new AppViewModel());