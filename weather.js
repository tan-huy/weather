$(document).ready(function(){

    var long;
    var lat;
    var fTemp;
    var cTemp;
    var kTemp;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            
            lon = position.coords.longitude;
            lat = position.coords.latitude;

            var api = 'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=885ec715a2eff66a35c2167f0db81927';

            $.getJSON(api, function(object){
        
                var weatherType= object.weather[0].description;
                var kTemp= object.main.temp;
                var windSpeed= object.wind.speed;
                var city = object.name;
        
                fTemp = [1.8 * (kTemp - 273.15)] + 32;
                cTemp = kTemp - 273.15;
        
                
            console.log(city);
            console.log(api);
            console.log(kTemp);
            console.log(cTemp);
            })

        })
    }

});

