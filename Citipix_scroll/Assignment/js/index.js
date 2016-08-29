// Link to jquery.
// Create script
// Document ready
// populate the dropdown list, include "placeholder text"
// Options for dropdown will include, city name and class name for image.
// Asign handler for when a selection changes.
// Set class to show appropriate image for city chosen in dropdown

$(document).ready(function () {
    var cities = 
        [['#','Choose a city...'],
         ['nyc', 'NYC'],
         ['sf', 'SF'], 
         ['la', 'LA'],
         ['austin', 'ATX'],
         ['sydney', 'SYD']
         ];
    
    for (var i = 0; i < cities.length; i++) {
        $('<option/>').val(cities[i][0]).html(cities[i][1]).appendTo('#city-type');
    }
    $('#city-type').on('change', function (event) {
        var city = $(this).val();
        showImage(city);
    });
});

function showImage(cityClass) {
    $('body').removeClass();
    $('body').addClass(cityClass);
    //    $('#city-type').val('');

}