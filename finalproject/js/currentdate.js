//---current date---//  
var today = new Date();

      var weekday = new Array(7);
         weekday[0] = "Sunday";
         weekday[1] = "Monday";
         weekday[2] = "Tuesday";
         weekday[3] = "Wednesday";
         weekday[4] = "Thursday";
         weekday[5] = "Friday";
         weekday[6] = "Saturday";

      var month = new Array(12);
         month[0] = "January";
         month[1] = "February";
         month[2] = "March";
         month[3] = "April";
         month[4] = "May";
         month[5] = "June";
         month[6] = "July";
         month[7] = "August";
         month[8] = "September";
         month[9] = "October";
         month[10] = "November";
         month[11] = "December";

    var wd = weekday[today.getDay()];

    var mm = month[today.getMonth()];

    var dd = today.getDate();

    var yy = today.getFullYear();


    var current = wd + ", " + " " + dd + " " + mm + " " + yy;

    document.getElementById("currentdate").innerHTML = current;

//----hamburger----//
function toggleNavMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

//----wayfinding---//

  var urlString, urlArray, pageHREF, menu, i, currentURL;
        urlString = document.location.href;
        urlArray = urlString.split('/');
        pageHREF = urlArray[urlArray.length - 1];

        if (pageHREF !== "") {
            menu = document.querySelectorAll('ul#mainmenu li a');
            for (i = 0; i < menu.length; i++) {
                currentURL = (menu[i].getAttribute('href'));
                menu[i].parentNode.className = '';
                if (currentURL === pageHREF) {
                    menu[i].parentNode.className = 'active';
                }
            }
        }

