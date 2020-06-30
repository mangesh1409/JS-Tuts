console.log('CLock');

function upDateClock() {

    let currentime = new Date();
    let currentHour = currentime.getHours();
    let currentMin = currentime.getMinutes();
    let currentSec = currentime.getSeconds();
    
    currentSec=(currentSec<10?"0":"")+currentSec;
    currentMin=(currentMin<10?"0":"")+currentMin;
    let disHour=(currentHour>12?currentHour-12:currentHour)
        disHour=(disHour==0?12:disHour);

    let timeofDay = (currentHour < 12) ? "AM" : "PM";
    
    let currentTimeStr=disHour+" : "+currentMin+" : "+currentSec+" "+timeofDay;

    document.getElementById('clock').innerHTML=currentTimeStr;

}