var request = new XMLHttpRequest();
        
request.open("GET","https://byui-cit230.github.io/weather/data/towndata.json", true);
        
request.send();
        
request.onload = function() {
    
  var townInfo = JSON.parse(request.responseText);
  console.log(townInfo);     
      
  document.getElementById('f_name').innerHTML = townInfo.towns["0"].name;
  document.getElementById('f_moto').innerHTML =  townInfo.towns["0"].motto;
  document.getElementById('f_yearFounded').innerHTML = townInfo.towns["0"].yearFounded;
  document.getElementById('f_population').innerHTML = townInfo.towns["0"].currentPopulation;
  document.getElementById('f_annualRainfall').innerHTML = townInfo.towns["0"].averageRainfall;
    
  document.getElementById('f_events_0').innerHTML = townInfo.towns["0"].events[0]; 
  document.getElementById('f_events_1').innerHTML = townInfo.towns["0"].events[1];
  document.getElementById('f_events_2').innerHTML = townInfo.towns["0"].events[2];
    
    
  document.getElementById('g_name').innerHTML = townInfo.towns["1"].name;
  document.getElementById('g_moto').innerHTML =  townInfo.towns["1"].motto;
  document.getElementById('g_yearFounded').innerHTML = townInfo.towns["1"].yearFounded;
  document.getElementById('g_population').innerHTML = townInfo.towns["1"].currentPopulation;
  document.getElementById('g_annualRainfall').innerHTML = townInfo.towns["1"].averageRainfall;   
   
  document.getElementById('g_events_0').innerHTML = townInfo.towns["1"].events[0]; 
  document.getElementById('g_events_1').innerHTML = townInfo.towns["1"].events[1];
  document.getElementById('g_events_2').innerHTML = townInfo.towns["1"].events[2];
  document.getElementById('g_events_3').innerHTML = townInfo.towns["1"].events[3]; 

    
  document.getElementById('s_name').innerHTML = townInfo.towns["3"].name;
  document.getElementById('s_moto').innerHTML =  townInfo.towns["3"].motto;
  document.getElementById('s_yearFounded').innerHTML = townInfo.towns["3"].yearFounded;
  document.getElementById('s_population').innerHTML = townInfo.towns["3"].currentPopulation;
  document.getElementById('s_annualRainfall').innerHTML = townInfo.towns["3"].averageRainfall;
    
  document.getElementById('s_events_0').innerHTML = townInfo.towns["3"].events[0]; 
  document.getElementById('s_events_1').innerHTML = townInfo.towns["3"].events[1];
  document.getElementById('s_events_2').innerHTML = townInfo.towns["3"].events[2];  
  
}; 
