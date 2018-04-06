var weatherObject= new XMLHttpRequest();

weatherObject.open("GET","https://api.wunderground.com/api/b2df6dc1ab1bd027/conditions/q/MN/Franklin.json", true);

weatherObject.send();


weatherObject.onload= function() {
    
    var weatherInfo= JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
    
    
    document.getElementById("condition").innerHTML= weatherInfo.current_observation.weather;
    
    document.getElementById("w_icon").src = weatherInfo.current_observation.icon_url;
    
    document.getElementById("speed").innerHTML= weatherInfo.current_observation.wind_mph + " mph";
    
    document.getElementById("c_temp").innerHTML= weatherInfo.current_observation.temp_f + "&deg;F";
    
    document.getElementById("precip").innerHTML= weatherInfo.current_observation.precip_today_in + " in";
    
     document.getElementById("wind").innerHTML= weatherInfo.current_observation.windchill_f + "&deg;F";
}

var weatherForcast= new XMLHttpRequest();

weatherForcast.open("GET","https://api.wunderground.com/api/b2df6dc1ab1bd027/forecast/q/MN/Franklin.json", true);

weatherForcast.send();


weatherForcast.onload= function() {
    
    var forcastInfo= JSON.parse(weatherForcast.responseText);
    console.log(forcastInfo);
    
    
     document.getElementById("f_summary").innerHTML= forcastInfo.forecast.txt_forecast.forecastday["0"].fcttext;
    
    document.getElementById("low").innerHTML= forcastInfo.forecast.simpleforecast.forecastday["0"].low.fahrenheit + "&deg;F";
    
    document.getElementById("high").innerHTML= forcastInfo.forecast.simpleforecast.forecastday["0"].high.fahrenheit + "&deg;F";
}

var tenDays= new XMLHttpRequest();

tenDays.open("GET","https://api.wunderground.com/api/b2df6dc1ab1bd027/forecast10day/q/MN/Franklin.json", true);

tenDays.send();


tenDays.onload= function() {
    
    var daysInfo= JSON.parse(tenDays.responseText);
    console.log(daysInfo);
    
    
    document.getElementById("hone").innerHTML= daysInfo.forecast.simpleforecast.forecastday["0"].high.fahrenheit;
    
    document.getElementById("htwo").innerHTML= daysInfo.forecast.simpleforecast.forecastday["1"].high.fahrenheit;
    
    document.getElementById("hthree").innerHTML= daysInfo.forecast.simpleforecast.forecastday["2"].high.fahrenheit;
    
    document.getElementById("hfour").innerHTML= daysInfo.forecast.simpleforecast.forecastday["3"].high.fahrenheit;
    
     document.getElementById("hfive").innerHTML= daysInfo.forecast.simpleforecast.forecastday["4"].high.fahrenheit;
    
     document.getElementById("hsix").innerHTML= daysInfo.forecast.simpleforecast.forecastday["5"].high.fahrenheit;
    
     document.getElementById("hseven").innerHTML= daysInfo.forecast.simpleforecast.forecastday["6"].high.fahrenheit;
    
     document.getElementById("height").innerHTML= daysInfo.forecast.simpleforecast.forecastday["7"].high.fahrenheit;
    
     document.getElementById("hnine").innerHTML= daysInfo.forecast.simpleforecast.forecastday["8"].high.fahrenheit;
    
     document.getElementById("hten").innerHTML= daysInfo.forecast.simpleforecast.forecastday["9"].high.fahrenheit;
     
    
    
     document.getElementById("lone").innerHTML= daysInfo.forecast.simpleforecast.forecastday["0"].low.fahrenheit;
    
     document.getElementById("ltwo").innerHTML= daysInfo.forecast.simpleforecast.forecastday["1"].low.fahrenheit;
    
     document.getElementById("lthree").innerHTML= daysInfo.forecast.simpleforecast.forecastday["2"].low.fahrenheit;
    
     document.getElementById("lfour").innerHTML= daysInfo.forecast.simpleforecast.forecastday["3"].low.fahrenheit;
    
     document.getElementById("lfive").innerHTML= daysInfo.forecast.simpleforecast.forecastday["4"].low.fahrenheit;
    
     document.getElementById("lsix").innerHTML= daysInfo.forecast.simpleforecast.forecastday["5"].low.fahrenheit;
    
     document.getElementById("lseven").innerHTML= daysInfo.forecast.simpleforecast.forecastday["6"].low.fahrenheit;
    
     document.getElementById("leight").innerHTML= daysInfo.forecast.simpleforecast.forecastday["7"].low.fahrenheit;
    
     document.getElementById("lnine").innerHTML= daysInfo.forecast.simpleforecast.forecastday["8"].low.fahrenheit;
    
     document.getElementById("lten").innerHTML= daysInfo.forecast.simpleforecast.forecastday["9"].low.fahrenheit;
    
    
    
     document.getElementById("one_icon").src= daysInfo.forecast.simpleforecast.forecastday["0"].icon_url;
    
     document.getElementById("two_icon").src= daysInfo.forecast.simpleforecast.forecastday["1"].icon_url;
    
     document.getElementById("three_icon").src= daysInfo.forecast.simpleforecast.forecastday["2"].icon_url;
    
     document.getElementById("four_icon").src= daysInfo.forecast.simpleforecast.forecastday["3"].icon_url;
    
     document.getElementById("five_icon").src= daysInfo.forecast.simpleforecast.forecastday["4"].icon_url;
    
     document.getElementById("six_icon").src= daysInfo.forecast.simpleforecast.forecastday["5"].icon_url;
    
     document.getElementById("seven_icon").src= daysInfo.forecast.simpleforecast.forecastday["6"].icon_url;
    
     document.getElementById("eight_icon").src= daysInfo.forecast.simpleforecast.forecastday["7"].icon_url;
    
     document.getElementById("nine_icon").src= daysInfo.forecast.simpleforecast.forecastday["8"].icon_url;
    
     document.getElementById("ten_icon").src= daysInfo.forecast.simpleforecast.forecastday["9"].icon_url;
    
    
     
    document.getElementById("done").innerHTML= daysInfo.forecast.simpleforecast.forecastday["0"].date.monthname + " " + daysInfo.forecast.simpleforecast.forecastday["0"].date.day;
    
    document.getElementById("dtwo").innerHTML= daysInfo.forecast.simpleforecast.forecastday["1"].date.monthname + " " + daysInfo.forecast.simpleforecast.forecastday["1"].date.day;
    
    document.getElementById("dthree").innerHTML= daysInfo.forecast.simpleforecast.forecastday["2"].date.monthname + " " + daysInfo.forecast.simpleforecast.forecastday["2"].date.day;
    
    document.getElementById("dfour").innerHTML= daysInfo.forecast.simpleforecast.forecastday["3"].date.monthname + " " + daysInfo.forecast.simpleforecast.forecastday["3"].date.day;
    
    document.getElementById("dfive").innerHTML= daysInfo.forecast.simpleforecast.forecastday["4"].date.monthname + " " + daysInfo.forecast.simpleforecast.forecastday["4"].date.day;
    
    document.getElementById("dsix").innerHTML= daysInfo.forecast.simpleforecast.forecastday["5"].date.monthname + " " + daysInfo.forecast.simpleforecast.forecastday["5"].date.day;
    
    document.getElementById("dseven").innerHTML= daysInfo.forecast.simpleforecast.forecastday["6"].date.monthname + " " + daysInfo.forecast.simpleforecast.forecastday["6"].date.day;
    
    document.getElementById("deight").innerHTML= daysInfo.forecast.simpleforecast.forecastday["7"].date.monthname + " " + daysInfo.forecast.simpleforecast.forecastday["7"].date.day;
    
    document.getElementById("dnine").innerHTML= daysInfo.forecast.simpleforecast.forecastday["8"].date.monthname + " " + daysInfo.forecast.simpleforecast.forecastday["8"].date.day;
    
    document.getElementById("dten").innerHTML= daysInfo.forecast.simpleforecast.forecastday["9"].date.monthname + " " + daysInfo.forecast.simpleforecast.forecastday["9"].date.day;
    
}













