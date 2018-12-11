// Youtube API: https://developers.google.com/youtube/iframe_api_reference#Getting_Started
// Playlist: http://www.youtube.com/playlist?list=PL24564FBB9784970B
var sources = [
	"hyIPaz3UJAI", // 12 am
	"kFSTf-q9qX4", // 1 am
	"_ITM1vFiV6U",
	"gWH27B8TPDA",
	"84V2PZa1F-c",
	"K5W5WLKdnlg",
	"QTZ3-oLu7cw",
	"d3d7DdKBSrM",
	"_Z_Eg5DgTe4",
	"cdB3harSmZ8",
	"-K1jZ0Oek18",
	"nvKUou7Ty0c", // 11 am
	"SRt7ISfi7OQ", // 12 pm
	"QH8ICY7-qvg", // 1 pm
	"u-bmQy-xi_I",
	"Jr0nWQkyZb0",
	"5nqWwV2kn7Y",
	"ZTvNX1R5QlU",
	"SOKGTIw2fCk",
	"BD3lqQ9-8Ig",
	"0jWetqSVGNc",
	"oWmT9EGNuOU",
	"vvw5eCl8okI",
	"2ntrw94Pbe0" // 11 pm
];

$(document).ready(function() {
	// Create two variable with the names of the months and days in an array
	var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
	var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

	var newDate = new Date();
	var day = "";

	if (newDate.getDate()==1 || newDate.getDate()==21 || newDate.getDate()==31) {
		day = ''+newDate.getDate()+'<span class="numeral">st</span>';
	} else if(newDate.getDate()==2 || newDate.getDate()==22) {
		day = ''+newDate.getDate()+'<span class="numeral">nd</span>';
	} else if (newDate.getDate()==3 || newDate.getDate()==23) {
		day = ''+newDate.getDate()+'<span class="numeral">rd</span>';
	} else {
		day = ''+newDate.getDate()+'<span class="numeral">th</span>';
	}

	$('#date_format').html(dayNames[newDate.getDay()] + ', ' + monthNames[newDate.getMonth()] + ' ' + day + ' ' + newDate.getFullYear());

	var seconds = new Date().getSeconds();
	var minutes = new Date().getMinutes();
	var hours = new Date().getHours();
	$("#min").html(( minutes < 10 ? "0" : "" ) + minutes);
	$("#hours").html(( hours < 10 ? "0" : "" ) + hours);

	setInterval( function()	{
		seconds = new Date().getSeconds();
		minutes = new Date().getMinutes();
		hours = new Date().getHours();
		$("#min").html(( minutes < 10 ? "0" : "" ) + minutes);
		$("#hours").html(( hours < 10 ? "0" : "" ) + hours);

		// Changes
        if(minutes == 00 && seconds == 00) {
            changeTime(hours);
        }
	},1000);

	function animateColon() {
        $('#colon').animate({
        	'opacity':'1',
        	'textShadow' : '0 0 20px #00c6ff'
        },500).animate({
        	'opacity':'0',
        	'textShadow' : '0 0 20px #00c6ff'
        },500, animateColon);
    }

    // Do it at load
    animateColon();
    var x = 50;
    setInterval(function(){
        x+=1;
        $('#container').css('background-position-x', x+"px");
    }, 150);
});

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";

var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function changeTime(hr){
	console.info("Hour: "+hr);
	if (player) {
		player.destroy();
	}
	switch(hr) {
		case 0: // 12am
			createPlayerCrossing(sources[0]);
			break;
		case 1: // 1am
			createPlayerCrossing(sources[1]);
			break;
		case 2:
			createPlayerCrossing(sources[2]);
			break;
		case 3:
			createPlayerCrossing(sources[3]);
			break;
		case 4:
			createPlayerCrossing(sources[4]);
			break;
		case 5:
			createPlayerCrossing(sources[5]);
			break;
		case 6:
			createPlayerCrossing(sources[6]);
			break;
		case 7:
			$("#sky").css("background-image", "url(dawn.png)");
			$("#container").css("background-image", "url(clouds_dawn.png)");
			createPlayerCrossing(sources[7]);
			break;
		case 8:
			$("#sky").css("background-image", "url(dawn.png)");
			$("#container").css("background-image", "url(clouds_dawn.png)");
			createPlayerCrossing(sources[8]);
			break;
		case 9:
			$("#sky").css("background-image", "url(dawn.png)");
			$("#container").css("background-image", "url(clouds_dawn.png)");
			createPlayerCrossing(sources[9]);
			break;
		case 10:
			$("#sky").css("background-image", "url(dawn.png)");
			$("#container").css("background-image", "url(clouds_dawn.png)");
			createPlayerCrossing(sources[10]);
			break;
		case 11: // 11am
			$("#sky").css("background-image", "url(dawn.png)");
			$("#container").css("background-image", "url(clouds_dawn.png)");
			createPlayerCrossing(sources[11]);
			break;
		case 12: // 12pm
			$("#sky").css("background-image", "url(noon.png)");
			$("#container").css("background-image", "url(clouds_noon.png)");
			createPlayerCrossing(sources[12]);
			break;
		case 13: // 1pm
			$("#sky").css("background-image", "url(noon.png)");
			$("#container").css("background-image", "url(clouds_noon.png)");
			createPlayerCrossing(sources[13]);
			break;
		case 14:
			$("#sky").css("background-image", "url(noon.png)");
			$("#container").css("background-image", "url(clouds_noon.png)");
			createPlayerCrossing(sources[14]);
			break;
		case 15:
			$("#sky").css("background-image", "url(noon.png)");
			$("#container").css("background-image", "url(clouds_noon.png)");
			createPlayerCrossing(sources[15]);
			break;
		case 16:
			$("#sky").css("background-image", "url(noon.png)");
			$("#container").css("background-image", "url(clouds_noon.png)");
			createPlayerCrossing(sources[16]);
			break;
		case 17:
			$("#sky").css("background-image", "url(noon.png)");
			$("#container").css("background-image", "url(clouds_noon.png)");
			createPlayerCrossing(sources[17]);
			break;
		case 18:
			$("#sky").css("background-image", "url(dawn.png)");
			$("#container").css("background-image", "url(clouds_dawn.png)");
			createPlayerCrossing(sources[18]);
			break;
		case 19:
			$("#sky").css("background-image", "url(dawn.png)");
			$("#container").css("background-image", "url(clouds_dawn.png)");
			createPlayerCrossing(sources[19]);
			break;
		case 20:
			$("#sky").css("background-image", "url(dawn.png)");
			$("#container").css("background-image", "url(clouds_dawn.png)");
			createPlayerCrossing(sources[20]);
			break;
		case 21:
			$("#sky").css("background-image", "url(dawn.png)");
			$("#container").css("background-image", "url(clouds_dawn.png)");
			createPlayerCrossing(sources[21]);
			break;
		case 22: // 10pm
			$("#sky").css("background-image", "url(night.png)");
			$("#container").css("background-image", "url(clouds_night.png)");
			createPlayerCrossing(sources[22]);
			break;
		case 23: // 11pm
			$("#sky").css("background-image", "url(night.png)");
			$("#container").css("background-image", "url(clouds_night.png)");
			createPlayerCrossing(sources[23]);
			break;
		default:
	}
} // end changeTime()

var changed = false;

function createPlayerCrossing(source){
	player = new YT.Player('player', {
		height: '0',
		width: '0',
		videoId: source,
		events: {
			'onReady': onPlayerReady,
			'onStateChange': onPlayerStateChange
		},
	});
}

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.

function onYouTubeIframeAPIReady() {
	var hrs = new Date().getHours();
	changeTime(hrs);
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
	stopVideo();
	event.target.playVideo();
}

function onPlayerStateChange(e) {
	if (e.data === YT.PlayerState.ENDED) {
		var hrs = new Date().getHours();
		changeTime(hrs);
	}
}

function stopVideo() {
	player.stopVideo();
}
