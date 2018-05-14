$(document).ready(function(){

    var long;
    var lat;
    var fTemp;
    var cTemp;
    var kTemp;
        var tempSwap=true;
    var mphWind
        var windSwap=true;

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
        
                fTemp = ((1.8 * (kTemp - 273.15)) + 32).toFixed(1);
                cTemp = (kTemp - 273.15).toFixed(1);
                mphWind = (2.237*(windSpeed)).toFixed(1);

                $("#city").html(city);
                $("#weatherType").html(weatherType);
                $("#fTemp").html(fTemp + " &#8457");
                    $("#fTemp").click(function(){

                        if(tempSwap===false){
                            $("#fTemp").html(fTemp + " &#8457");
                            tempSwap=true;
                        } else {
                            $("#fTemp").html(cTemp + " &#8451");
                            tempSwap=false;
                        }
                    })

                $("#windSpeed").html(windSpeed + " m/s");
                $("#windSpeed").click(function(){

                    if(windSwap===false){
                        $("#windSpeed").html(windSpeed + " m/s");
                        windSwap=true;
                    } else {
                        $("#windSpeed").html(mphWind + " mph");
                        windSwap=false;
                    }
                })

                if (weatherType="clear sky"){
                    $('body').style.css('background-image', 'url(img/clear.jpeg)');
                } else if (weatherType="few clouds"){
                    $('body').css('background-image', 'url(img/few.jpeg)');
                } else if (weatherType="scattered clouds"){
                    $('body').css('background-image', 'url(img/scattered.jpeg)');
                } else if (weatherType="broken clouds"){
                    $('body').css('background-image', 'url(img/broken.jpeg)');
                } else if (weatherType="rain"){
                    $('body').css('background-image', 'url(img/rain.jpeg)');
                } else if (weatherType="thunderstorm"){
                    $('body').css('background-image', 'url(img/thunder.jpeg)');
                } else if (weatherType="snow"){
                    $('body').css('background-image', 'url(img/snow.jpeg)');
                } else if (weatherType="mist"){
                    $('body').css('background-image', 'url(img/mist.jpeg)');
                } else if (weatherType="smoke"){
                    $('body').css('background-image', 'url(img/smoke.jpeg)');
                } else if (weatherType=haze){
                    $('body').css('background-image', 'url(img/haze.jpeg)');
                } else if (weatherType="sand", "dust whirls"){
                    $('body').css('background-image', 'url(img/sand.jpeg)');
                } else if (weatherType="fog"){
                    $('body').css('background-image', 'url(img/fog.jpeg)');
                } else if (weatherType="sand"){
                    $('body').css('background-image', 'url(img/sand.jpeg)');
                } else if (weatherType="dust"){
                    $('body').css('background-image', 'url(img/dust.jpeg)');
                } else if (weatherType="volcanic ash"){
                    $('body').css('background-image', 'url(img/ash.jpeg)');
                } else if (weatherType="squalls"){
                    $('body').css('background-image', 'url(img/squall.jpeg)');

                };
            });
        })
    }
})

