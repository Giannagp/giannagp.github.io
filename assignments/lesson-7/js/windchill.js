var s= parseFloat(document.getElementById("speed").innerHTML);
var high= parseFloat(document.getElementById("high").innerHTML);
var low= parseFloat(document.getElementById("low").innerHTML);
    
var t= (high + low)/2;

    
var result= 35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * (Math.pow(s, 0.16)));


document.getElementById("wind").innerHTML= Math.round(result).toFixed(1);

