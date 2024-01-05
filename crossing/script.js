// Youtube API: https://developers.google.com/youtube/iframe_api_reference#Getting_Started
// Playlist: https://www.youtube.com/playlist?list=PLv2IGBk7nw2NaCeY04oTpcBbg9hno5Y3M

const DEFAULT_SOURCE_VIDEO_ID = 'i3WvQhgi_vI'; // 12 am
var sources = [
	'i3WvQhgi_vI', // 12 am
	'JjsVG43xmVI', // 1 am
	'NQ7Hs8y3DDI',
	'edhjCXauT2o',
	'q4qwPLTY-H4',
	'diuqi3z3UEk',
	'12Yst8_O1AU',
	'Eg6JMROjyYQ',
	'MoLchthmAjw',
	'R4kOaT2DfFs',
	'xtwx5iZLRnk',
	'xiFMP15ibLQ', // 11 am
	'ijg0DPxRL8k', // 12 pm
	'xiFMP15ibLQ', // 1 pm
	'U01vqNf8zwQ',
	'-sGA35BbvGs',
	'eSprCVvZJXw',
	'X_Dj3fkxadA',
	'Giwo0amPTY4',
	'C9osVFAaDdQ',
	'UwlOfA4oSGM',
	'wF4pKEPPIxE',
	'aBxMLVd27jo',
	'LMmPoA8BXgY' // 11 pm
];

$(document).ready(function() {
	// Create two variable with the names of the months and days in an array
	var monthNames = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
	var dayNames= ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

	var newDate = new Date();
	var day = '';

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
	$('#min').html(( minutes < 10 ? '0' : '' ) + minutes);
	$('#hours').html(( hours < 10 ? '0' : '' ) + hours);

	setInterval( function()	{
		seconds = new Date().getSeconds();
		minutes = new Date().getMinutes();
		hours = new Date().getHours();
		$('#min').html(( minutes < 10 ? '0' : '' ) + minutes);
		$('#hours').html(( hours < 10 ? '0' : '' ) + hours);

		// Changes
        if(minutes == 0 && seconds == 0) {
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
        $('#container').css('background-position-x', x+'px');
    }, 150);
});

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';

var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function changeTime(hr){
	console.log('Hour: '+hr);
	switch(hr) {
		case 0: // 12am
			updatePlayerCrossing(sources[0]);
			break;
		case 1: // 1am
			updatePlayerCrossing(sources[1]);
			break;
		case 2:
			updatePlayerCrossing(sources[2]);
			break;
		case 3:
			updatePlayerCrossing(sources[3]);
			break;
		case 4:
			updatePlayerCrossing(sources[4]);
			break;
		case 5:
			updatePlayerCrossing(sources[5]);
			break;
		case 6:
			updatePlayerCrossing(sources[6]);
			break;
		case 7:
			$('#sky').css('background-image', 'url(dawn.png)');
			$('#container').css('background-image', 'url(clouds_dawn.png)');
			updatePlayerCrossing(sources[7]);
			break;
		case 8:
			$('#sky').css('background-image', 'url(dawn.png)');
			$('#container').css('background-image', 'url(clouds_dawn.png)');
			updatePlayerCrossing(sources[8]);
			break;
		case 9:
			$('#sky').css('background-image', 'url(dawn.png)');
			$('#container').css('background-image', 'url(clouds_dawn.png)');
			updatePlayerCrossing(sources[9]);
			break;
		case 10:
			$('#sky').css('background-image', 'url(dawn.png)');
			$('#container').css('background-image', 'url(clouds_dawn.png)');
			updatePlayerCrossing(sources[10]);
			break;
		case 11: // 11am
			$('#sky').css('background-image', 'url(dawn.png)');
			$('#container').css('background-image', 'url(clouds_dawn.png)');
			updatePlayerCrossing(sources[11]);
			break;
		case 12: // 12pm
			$('#sky').css('background-image', 'url(noon.png)');
			$('#container').css('background-image', 'url(clouds_noon.png)');
			updatePlayerCrossing(sources[12]);
			break;
		case 13: // 1pm
			$('#sky').css('background-image', 'url(noon.png)');
			$('#container').css('background-image', 'url(clouds_noon.png)');
			updatePlayerCrossing(sources[13]);
			break;
		case 14:
			$('#sky').css('background-image', 'url(noon.png)');
			$('#container').css('background-image', 'url(clouds_noon.png)');
			updatePlayerCrossing(sources[14]);
			break;
		case 15:
			$('#sky').css('background-image', 'url(noon.png)');
			$('#container').css('background-image', 'url(clouds_noon.png)');
			updatePlayerCrossing(sources[15]);
			break;
		case 16:
			$('#sky').css('background-image', 'url(noon.png)');
			$('#container').css('background-image', 'url(clouds_noon.png)');
			updatePlayerCrossing(sources[16]);
			break;
		case 17:
			$('#sky').css('background-image', 'url(noon.png)');
			$('#container').css('background-image', 'url(clouds_noon.png)');
			updatePlayerCrossing(sources[17]);
			break;
		case 18:
			$('#sky').css('background-image', 'url(dawn.png)');
			$('#container').css('background-image', 'url(clouds_dawn.png)');
			updatePlayerCrossing(sources[18]);
			break;
		case 19:
			$('#sky').css('background-image', 'url(dawn.png)');
			$('#container').css('background-image', 'url(clouds_dawn.png)');
			updatePlayerCrossing(sources[19]);
			break;
		case 20:
			$('#sky').css('background-image', 'url(dawn.png)');
			$('#container').css('background-image', 'url(clouds_dawn.png)');
			updatePlayerCrossing(sources[20]);
			break;
		case 21:
			$('#sky').css('background-image', 'url(dawn.png)');
			$('#container').css('background-image', 'url(clouds_dawn.png)');
			updatePlayerCrossing(sources[21]);
			break;
		case 22: // 10pm
			$('#sky').css('background-image', 'url(night.png)');
			$('#container').css('background-image', 'url(clouds_night.png)');
			updatePlayerCrossing(sources[22]);
			break;
		case 23: // 11pm
			$('#sky').css('background-image', 'url(night.png)');
			$('#container').css('background-image', 'url(clouds_night.png)');
			updatePlayerCrossing(sources[23]);
			break;
		default:
	}
} // end changeTime()

var changed = false;

function updatePlayerCrossing(source){
	if(player) {
		// Loads and plays video
		player.loadVideoById(source);
		player.playVideo();
	}
}

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.

function onYouTubeIframeAPIReady() {
	player = new YT.Player('player', {
		height: '0',
		width: '0',
		videoId: DEFAULT_SOURCE_VIDEO_ID,
		events: {
			'onReady': onPlayerReady,
			'onStateChange': onPlayerStateChange
		},
	});
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady() {
	let hrs = new Date().getHours();
	changeTime(hrs);
}

function onPlayerStateChange(e) {
	if (e.data === YT.PlayerState.ENDED) {
		var hrs = new Date().getHours();
		changeTime(hrs);
	}
}

