var key = "d6b42e6db76270d87eb05aa7b19346de";

document.getElementById("search-button").addEventListener("click", function (e) {
    e.preventDefault();
    let city = document.getElementById("search-input").value;

    apiLatLong = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=1&appid=" + key;

    $.ajax({
        url: apiLatLong,
        method: "GET"
    }).then(function (result) {

        lat = result[0].lat;
        long = result[0].lon;

        apiWeather = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + long + "&appid=" + key;

        $.ajax({
            url: apiWeather,
            method: "GET"
        }).then(function (result) {

            console.log(result);

        }) 
    })

})






