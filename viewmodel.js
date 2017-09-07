// Refactor as a ViewModel *****************************************************
function ViewModel() {

    // Create observable array to hold locations *******************************
    var self = this;

    // create an oberservable to hold search results
    self.userSearch = ko.observable();

    // **OR** instantiate the observable array with locations ******************
    self.obsLocations = ko.observableArray(locations);

    // Declare variables
    var input, filter, ul, li, a, i, filteredArray;

    // Use Knockout for filter input *******************************************
    // http://knockoutjs.com/documentation/textinput-binding.html  *************
    input = document.getElementById('myInput');


    // filter = input.value.toUpperCase();
    // ul = document.getElementById("myUL");
    // li = ul.getElementsByTagName('li');
    // filteredArray = []

    // OPTION 1 for filter
    // Create on observable property on each location item to hold visible *****
    // state (see below)and use Knockout visible binding to show locations *****
    // that match filter  ******************************************************
    // http://knockoutjs.com/documentation/visible-binding.html

    // OPTION 2 for filter
    // Use ko.utils.arrayFilter to return a filtered list of locations  ********
    // and use that filtered list with the foreach binding *********************
    // http://www.knockmeout.net/2011/04/utility-functions-in-knockoutjs.html


    // IN BOTH CASES
    // Use a computed observable to run the filter automatically when input changes
    // http://knockoutjs.com/documentation/computedObservables.html

    // AND
    // Use Google Maps setVisible to set marker visibilty
    // https://developers.google.com/maps/documentation/javascript/reference

    // Loop through all list items, and hide those who don't match the search query
    // for (i = 0; i < li.length; i++) {
    //     a = li[i].getElementsByTagName("a")[0];
    //     if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
    //         li[i].style.display = "";
    //         filteredArray.push(li[i])
    //     } else {
    //         li[i].style.display = "none";
    //     }
    // }
};

// SUGGESTION:  apply bindings in initMap so google will be defined when you
// add marker properties to locations array.
ko.applyBindings( new ViewModel());
































// REFACTORING THIS A VIEWMODEL
// function searchFunction() {
//     // Declare variables
//     console.log(locations)
//     var input, filter, ul, li, a, i, filteredArray;
//     input = document.getElementById('myInput');
//     filter = input.value.toUpperCase();
//     ul = document.getElementById("myUL");
//     li = ul.getElementsByTagName('li');
//     filteredArray = []

//     // Loop through all list items, and hide those who don't match the search query
//     for (i = 0; i < li.length; i++) {
//         a = li[i].getElementsByTagName("a")[0];
//         if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
//             li[i].style.display = "";
//             console.log(li)
//             console.log('-------')
//             console.log(li[i])
//             filteredArray.push(li[i])
//         } else {
//             li[i].style.display = "none";
//         }
//     }
// };





// ko.applyBindings(locations);