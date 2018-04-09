var priceObject= new XMLHttpRequest();

priceObject.open("GET","https://giannagp.github.io/finalproject/data.json"," true");

priceObject.send();

priceObject.onload= function() {
    
    var priceInfo= JSON.parse(priceObject.responseText);
    console.log(priceInfo);
    
    document.getElementById("cost-one").innerHTML= priceInfo.ourservices["0"].adjustDerailleur;
    
    document.getElementById("cost-two").innerHTML= priceInfo.ourservices["0"].replaceCable;
    
    document.getElementById("cost-three").innerHTML= priceInfo.ourservices["1"].adjustRim;
    
    document.getElementById("cost-four").innerHTML= priceInfo.ourservices["1"].adjustDisc;
    
    document.getElementById("cost-five").innerHTML= priceInfo.ourservices["2"].wrapRoad;
    
    document.getElementById("cost-six").innerHTML= priceInfo.ourservices["2"].assembleBoxed;
    
    document.getElementById("cost-seven").innerHTML= priceInfo.ourservices["2"].removeCleanReinstall;
    
    document.getElementById("cost-eight").innerHTML= priceInfo.ourservices["2"].shopRate;
    
    document.getElementById("cost-nine").innerHTML= priceInfo.ourservices["3"].installTube;
    
    document.getElementById("cost-ten").innerHTML= priceInfo.ourservices["3"].installTubeles;
    
    document.getElementById("cost-eleven").innerHTML= priceInfo.ourservices["3"].adjustFront;
    
    document.getElementById("cost-twelve").innerHTML= priceInfo.ourservices["3"].adjustRear;
    
    document.getElementById("cost-thirteen").innerHTML= priceInfo.ourservices["3"].overhaulFronts;
    
    document.getElementById("cost-fourteen").innerHTML= priceInfo.ourservices["3"].overhaulRear;
    
    document.getElementById("cost-fifteen").innerHTML= priceInfo.ourservices["3"].trueWheel;
    
}