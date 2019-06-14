$(document).ready(function(){
    var today = new Date();
    var dayWeek = today.getDay(); // Sunday is 0

    var n = today.getDate();
    var nextMonday = new Date();
    nextMonday.setHours(8);
    nextMonday.setMinutes(0);
    nextMonday.setSeconds(0);

    var nextFriday = new Date();
    nextFriday.setHours(8);
    nextFriday.setMinutes(0);
    nextFriday.setSeconds(0);

    switch (dayWeek) {
        case 0: // Sunday
            nextMonday.setDate(n+1);
            nextFriday.setDate(n+5);
            break;
        case 1:
            nextMonday.setDate(n+7);
            nextFriday.setDate(n+4);
            break;
        case 2:
            nextMonday.setDate(n+6);
            nextFriday.setDate(n+3);
            break;
        case 3:
            nextMonday.setDate(n+5);
            nextFriday.setDate(n+2);
            break;
        case 4:
            nextMonday.setDate(n+4);
            nextFriday.setDate(n+1);
            break;
        case 5:
            nextMonday.setDate(n+3);
            nextFriday.setDate(n+7);
            break;
        case 6:
            nextMonday.setDate(n+2);
            nextFriday.setDate(n+6);
            break;
    }

    var nextKiosko = new Date();
    if (today.getHours() > 12) {
        var k = today.getDate();
        k++;
        nextKiosko.setDate(k);
    }
        nextKiosko.setHours(12);
        nextKiosko.setMinutes(0);
        nextKiosko.setSeconds(0);


    var mondayStr = showClock(getRemainingTime(nextMonday));
    $("#mondayclock .clocknumbers").html(mondayStr);
    var fridayStr = showClock(getRemainingTime(nextFriday));
    $("#fridayclock .clocknumbers").html(fridayStr);
    var kioskoStr = showClock(getRemainingTime(nextKiosko));
    $("#kioskoclock .clocknumbers").html(kioskoStr);

    function showClock(strClock){
        var arrDate = strClock.split(",");
        var strD = arrDate[0] == 1 ? "day" : "days";
        var strH = arrDate[1] == 1 ? "hour" : "hrs.";
        var strM = arrDate[2] == 1 ? "min." : "min.";
        var strS = arrDate[3] == 1 ? "sec." : "sec.";
        return `<div class=\"numbertime\">`+arrDate[0]+`</div><div class=\"verbosetime\">`+strD+`</div>`+
        `<div class=\"separator\"></div>`+
        `<div class=\"numbertime\">`+arrDate[1]+`</div><div class=\"verbosetime\">`+strH+`</div>`+
        `<div class=\"separator\"></div>`+
        `<div class=\"numbertime\">`+arrDate[2]+`</div><div class=\"verbosetime\">`+strM+`</div>`+
        `<div class=\"separator\"></div>`+
        `<div class=\"numbertime\">`+arrDate[3]+`</div><div class=\"verbosetime\">`+strS+`</div>`;
    }

    function getRemainingTime(finalDate){
        var today = new Date();
        var seconds = Math.round((finalDate.getTime() - today.getTime()) / 1000); // In miliseconds

        var d = Math.floor(seconds / (3600*24));
        var h = Math.floor(seconds % (3600*24) / 3600);
        var m = Math.floor(seconds % 3600 / 60);
        var s = Math.floor(seconds % 60);

        var showD = d > 0 ? d : "0";
        var showH = h > 0 ? h : "0";
        var showM = m > 0 ? m : "0";
        var showS = s > 0 ? s : "0";

        return showD + "," + showH + "," + showM + "," + showS;
    }

    setInterval(function(){
        mondayStr = showClock(getRemainingTime(nextMonday));
        $("#mondayclock .clocknumbers").html(mondayStr);

        fridayStr = showClock(getRemainingTime(nextFriday));
        $("#fridayclock .clocknumbers").html(fridayStr);

        kioskoStr = showClock(getRemainingTime(nextKiosko));
        $("#kioskoclock .clocknumbers").html(kioskoStr);

    }, 1000);
});
