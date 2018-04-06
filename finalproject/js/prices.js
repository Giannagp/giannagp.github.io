var priceObject= new XMLHttpRequest();

priceObject.open("GET","https://github.com/giannagp/term-project/blob/master/data.json", true);

priceObject.send();


priceObject.onload= function() {
    
    var priceInfo= JSON.parse(priceObject.responseText);
    console.log(priceInfo);
    
    document.getElementById("one").innerHTML= priceInfo. ;