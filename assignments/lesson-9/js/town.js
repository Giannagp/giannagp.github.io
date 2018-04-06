      var section = document.querySelector('section');
        
      var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
        
      var request = new XMLHttpRequest();
        
      request.open('GET', requestURL);
        
      request.responseType = 'json';
      request.send();
        
      request.onload = function() {
        var weatherinfo = request.response;
        showWeather(weatherinfo);
      }  
      
      
     function showWeather(jsonObj) {
        var info = jsonObj['towns'];
      
        for (var i = 0; i < info.length; i++) {
           if (info[i].name == "Franklin" || info[i].name =="Springfield" || info[i].name == "Greenville") {
               
          var myArticle = document.createElement('article');
          var myH1 = document.createElement('h1');
          var myPara1 = document.createElement('p');
          var myPara2 = document.createElement('p');
          var myPara3 = document.createElement('p');
          var myPara4 = document.createElement('p');
          var myList = document.createElement('ul');

        myH1.textContent = info[i].name;
        //document.getElementById("mottoweather").innerHTML=jsonObj.name;
        myPara1.textContent = 'Motto: ' + info[i].motto;
        //document.getElementById("paruno").innerHTML=jsonObj.motto;     
        myPara2.textContent = 'Year Founded: '+ info[i].yearFounded;
        myPara3.textContent = 'Population: '+ info[i].currentPopulation;
        myPara4.textContent = 'Annual Rainfall: '+ info[i].averageRainfall;
        myList.textContent = 'Events: ';

       var eventList = info[i].events;

       for (var j = 0; j <eventList.length; j++) {
         var listItem = document.createElement('li');
         listItem.textContent = eventList[j];
         myList.appendChild(listItem);
      }
            
      myArticle.appendChild(myH1);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara3);
      myArticle.appendChild(myPara4);
      myArticle.appendChild(myList);

      section.appendChild(myArticle); 
            
  }}
}
