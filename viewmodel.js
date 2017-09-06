
function searchFunction() {
    // Declare variables
    console.log(locations)
    var input, filter, ul, li, a, i, filteredArray;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');
    filteredArray = []

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
            console.log(li)
            console.log('-------')
            console.log(li[i])
            filteredArray.push(li[i])
        } else {
            li[i].style.display = "none";
        }
    }
};

$('')



ko.applyBindings(locations);