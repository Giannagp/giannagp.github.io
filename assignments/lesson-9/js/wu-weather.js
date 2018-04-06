var weatherObject= new XMLHttpRequest();

weatherObject.open("GET","http://api.wunderground.com/api/b2df6dc1ab1bd027/conditions/q/MN/Franklin.json", true);

weatherObject.send();


weatherObject.onload= function() {
    
    var weatherInfo= JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
    
    
    document.getElementById("condition").innerHTML= weatherInfo.current_observation.weather;
    
    document.getElementById("w_icon").src = weatherInfo.current_observation.icon_url;
    
    document.getElementById("speed").innerHTML= weatherInfo.current_observation.wind_mph;
    
    document.getElementById("c_temp").innerHTML= weatherInfo.current_observation.temp_f;
    
    document.getElementById("precip").innerHTML= weatherInfo.current_observation.precip_today_in;
    
     document.getElementById("wind").innerHTML= weatherInfo.current_observation.windchill_f;
}

var weatherForcast= new XMLHttpRequest();

weatherForcast.open("GET","http://api.wunderground.com/api/b2df6dc1ab1bd027/forecast/q/MN/Franklin.json", true);

weatherForcast.send();


weatherForcast.onload= function() {
    
    var forcastInfo= JSON.parse(weatherForcast.responseText);
    console.log(forcastInfo);
    
    
     document.getElementById("f_summary").innerHTML= forcastInfo.forecast.simpleforecast.forecastday["0"].conditions;
    
    document.getElementById("low").innerHTML= forcastInfo.forecast.simpleforecast.forecastday["0"].low.fahrenheit;
    
    document.getElementById("high").innerHTML= forcastInfo.forecast.simpleforecast.forecastday["0"].high.fahrenheit;
}
