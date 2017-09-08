// function Location(title, location){
// 	var self = this;
// 	self.title = title;
// 	self.location = location;
// 	// shouldShowMessage: ko.observable(true)

// }


// // Refactor as a ViewModel *****************************************************
// function ViewModel() {

//     // Create observable array to hold locations *******************************
//     var self = this;

//     shouldShowMessage: ko.observable(true)

//     // create an oberservable to hold search results
//     self.userSearch = ko.observable('');

//     // **OR** instantiate the observable array with locations ******************
//     self.obsLocations = ko.observableArray();

//     locations.forEach(function(location){
//     	// console.log(location)
//     	self.obsLocations.push(new Location(location.title, location.location));
//     })

//     // Declare variables
//     var input, filter, ul, li, a, i, filteredArray;

//     // Use Knockout for filter input *******************************************
//     // http://knockoutjs.com/documentation/textinput-binding.html  *************
//     input = document.getElementById('myInput');


//     // filter = input.value.toUpperCase();
//     ul = document.getElementById("myUL");
//     li = ul.getElementsByTagName('li');
//     console.log(li)
//     // filteredArray = []

//     // OPTION 1 for filter
//     // Create on observable property on each location item to hold visible *****
//     // state (see below)and use Knockout visible binding to show locations *****
//     // that match filter  ******************************************************
//     // http://knockoutjs.com/documentation/visible-binding.html



//     // OPTION 2 for filter
//     // Use ko.utils.arrayFilter to return a filtered list of locations  ********
//     // and use that filtered list with the foreach binding *********************
//     // http://www.knockmeout.net/2011/04/utility-functions-in-knockoutjs.html


//     // IN BOTH CASES
//     // Use a computed observable to run the filter automatically when input changes
//     // http://knockoutjs.com/documentation/computedObservables.html

//     // AND
//     // Use Google Maps setVisible to set marker visibilty
//     // https://developers.google.com/maps/documentation/javascript/reference

// };

// // SUGGESTION:  apply bindings in initMap so google will be defined when you
// // add marker properties to locations array.
// var ViewModel = new ViewModel();
// ko.applyBindings(ViewModel);































// // REFACTORING THIS A VIEWMODEL
// // function searchFunction() {
// //     // Declare variables
// //     console.log(locations)
// //     var input, filter, ul, li, a, i, filteredArray;
// //     input = document.getElementById('myInput');
// //     filter = input.value.toUpperCase();
// //     ul = document.getElementById("myUL");
// //     li = ul.getElementsByTagName('li');
// //     filteredArray = []

// //     // Loop through all list items, and hide those who don't match the search query
// //     for (i = 0; i < li.length; i++) {
// //         a = li[i].getElementsByTagName("a")[0];
// //         if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
// //             li[i].style.display = "";
// //             console.log(li)
// //             console.log('-------')
// //             console.log(li[i])
// //             filteredArray.push(li[i])
// //         } else {
// //             li[i].style.display = "none";
// //         }
// //     }
// // };





// // ko.applyBindings(locations);













// model
var locations = [
      {title: 'Northstar', location: {lat: 39.27324, lng: -120.1624164}},
      {title: 'Squaw Valley', location: {lat: 39.2115732, lng: -120.1985282}},
      {title: 'Sugar Bowl', location: {lat: 39.3043494, lng: -120.3357567}},
      {title: 'Tahoe Donner Ski Area', location: {lat: 39.3524057, lng: -120.271583}},
      {title: 'Alpine Meadows', location: {lat: 39.1574066, lng: -120.2390835}}
    ];

//Marker constructor

function Location(title, location){
    var self = this;

    self.title = title;
    self.location = location;

}




// create the apps viewmodel

function AppViewModel(){
    var self = this;

    self.searchBar = ko.observable('');
    // title and location now come from the Location objects
    // self.title = ko.observable("NorthStar");
    // self.location = ko.observable("{lat: 100, long: 200}");

    self.searchResults = ko.computed(function(){
        var results = ""
        results += self.searchBar().toUpperCase();
        return results
    }, self)

    self.capitalizeInput = function(){
        var currentVal = self.searchBar();
        self.searchBar(currentVal.toUpperCase());

    };

    //locations initialized
    self.locations = ko.observableArray();

    locations.forEach(function(location){
        self.locations.push(new Location(location.title, location.location));
    });


    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');

    self.filterList = function(){
        console.log(self.locations().length)

            for(let i=0; i<self.locations().length; i++){
                if(self.locations()[i].title.toUpperCase().indexOf(self.searchResults()) > -1){
                    if(li[i] != undefined){
                        li[i].style.display = "";
                    };
                } else {
                    li[i].style.display = "none";
                }
            }
    }

}


// Activate knockout.js
ko.applyBindings(new AppViewModel());