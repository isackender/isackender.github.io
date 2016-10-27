/*  
  https://api.lootbox.eu/documentation
  https://playoverwatch.com/en-us/career/pc/eu/Isackender-2650

  https://api.lootbox.eu/pc/eu/Isackender-2650/profile
*/

function main(objform){
  var platform = objform.selectplatform.value;
  var region = objform.selectregion.value;
  var battletag = objform.inputdata.value;
  battletag = battletag.replace("#", "-");
  
  var profileurl="https://api.lootbox.eu/"+platform+"/"+region+"/"+battletag+"/profile";

  profile(profileurl);
}

function profile(url){
  $('#result').fadeOut();
  $('#loading').animate({
    opacity: 1,
    height: 16
  }, 200);

  $.getJSON(url, function(jsonobj) {
    console.log(jsonobj);

    $('#avatar img').attr('src',jsonobj.data.avatar);
    $('#username').text(jsonobj.data.username);
    $('#frame').attr('src',jsonobj.data.levelFrame);
    $('#stars').attr('src',jsonobj.data.star);
    $('#level').text(jsonobj.data.level);

    $('#loading').animate({
      opacity: 0,
      height: 0
    }, 200);
    $('#result').fadeIn('slow');

  });
}

function watcher(url){
  $('#result').text("Cargando...");

  // TO ARRAY var obj = $.map(jsonobj, function(el) { return el });

  $.getJSON(url, function(data) {
    $('#result').empty();
    console.log(data);
    $.each(data, function(index, element) {
        $('#result').append("<div class=\"hero-item\"><ul>"+"<li>"+element.name+"</li>"+"<li>"+element.playtime+"</li>"+"<li><img src=\""+element.image+"\"/></li>"+"<li>"+element.percentage+"</li>");
    });
  });
}




/*

Curl

curl -X GET --header 'Accept: text/html' 'https://api.lootbox.eu/pc/eu/Isackender-2650/quick-play/heroes'

Request URL

https://api.lootbox.eu/pc/eu/Isackender-2650/quick-play/heroes

Response Body

[{"name":"Bastion","playtime":"26 hours","image":"https://blzgdapipro-a.akamaihd.net/game/heroes/small/0x02E0000000000015.png","percentage":1},{"name":"Pharah","playtime":"26 hours","image":"https://blzgdapipro-a.akamaihd.net/game/heroes/small/0x02E0000000000008.png","percentage":0.9862471492735398},{"name":"Hanzo","playtime":"16 hours","image":"https://blzgdapipro-a.akamaihd.net/game/heroes/small/0x02E0000000000005.png","percentage":0.6263412446268195},{"name":"Roadhog","playtime":"16 hours","image":"https://blzgdapipro-a.akamaihd.net/game/heroes/small/0x02E0000000000040.png","percentage":0.6092361500795652},{"name":"L&#xFA;cio","playtime":"6 hours","image":"https://blzgdapipro-a.akamaihd.net/game/heroes/small/0x02E0000000000079.png","percentage":0.23641391690027483},{"name":"Reinhardt","playtime":"6 hours","image":"https://blzgdapipro-a.akamaihd.net/game/heroes/small/0x02E0000000000007.png","percentage":0.22483276648165335},{"name":"Torbj&#xF6;rn","playtime":"5 hours","image":"https://blzgdapipro-a.akamaihd.net/game/heroes/small/0x02E0000000000006.png","percentage":0.21237364425617777},{"name":"Widowmaker","playtime":"5 hours","image":"https://blzgdapipro-a.akamaihd.net/game/heroes/small/0x02E000000000000A.png","percentage":0.212252057054276},{"name":"McCree","playtime":"5 hours","image":"https://blzgdapipro-a.akamaihd.net/game/heroes/small/0x02E0000000000042.png","percentage":0.196690307072278},{"name":"Junkrat","playtime":"5 hours","image":"https://blzgdapipro-a.akamaihd.net/game/heroes/small/0x02E0000000000065.png","percentage":0.19409512603308612},{"name":"D.Va","playtime":"4 hours","image":"https://blzgdapipro-a.akamaihd.net/game/heroes/small/0x02E000000000007A.png","percentage":0.16613626680760427},{"name":"Mei","playtime":"4 hours","image":"https://blzgdapipro-a.akamaihd.net/game/heroes/small/0x02E00000000000DD.png","percentage":0.16585076133628981},{"name":"Reaper","playtime":"3 hours","image":"https://blzgdapipro-a.akamaihd.net/game/heroes/small/0x02E0000000000002.png","percentage":0.12445102125456738},{"name":"Mercy","playtime":"3 hours","image":"https://blzgdapipro-a.akamaihd.net/game/heroes/small/0x02E0000000000004.png","percentage":0.11762440849468075},{"name":"Soldier: 76","playtime":"2 hours","image":"https://blzgdapipro-a.akamaihd.net/game/heroes/small/0x02E000000000006E.png","percentage":0.08654538246475038},{"name":"Zarya","playtime":"2 hours","image":"https://blzgdapipro-a.akamaihd.net/game/heroes/small/0x02E0000000000068.png","percentage":0.08434031033307224},{"name":"Zenyatta","playtime":"2 hours","image":"https://blzgdapipro-a.akamaihd.net/game/heroes/small/0x02E0000000000020.png","percentage":0.07986142264222501},{"name":"Ana","playtime":"2 hours","image":"https://blzgdapipro-a.akamaihd.net/game/heroes/small/0x02E000000000013B.png","percentage":0.0777706268212292},{"name":"Tracer","playtime":"1 hour","image":"https://blzgdapipro-a.akamaihd.net/game/heroes/small/0x02E0000000000003.png","percentage":0.06700843065116029},{"name":"Winston","playtime":"1 hour","image":"https://blzgdapipro-a.akamaihd.net/game/heroes/small/0x02E0000000000009.png","percentage":0.06608654014058919},{"name":"Symmetra","playtime":"1 hour","image":"https://blzgdapipro-a.akamaihd.net/game/heroes/small/0x02E0000000000016.png","percentage":0.04868593789241517},{"name":"Genji","playtime":"1 hour","image":"https://blzgdapipro-a.akamaihd.net/game/heroes/small/0x02E0000000000029.png","percentage":0.04855615662238402}]

Response Code

200

Response Headers

{
  "date": "Sun, 23 Oct 2016 23:13:15 GMT",
  "content-encoding": "gzip",
  "vary": "origin,accept-encoding",
  "server": "nginx",
  "transfer-encoding": "chunked",
  "strict-transport-security": "max-age=15768000",
  "content-type": "text/html; charset=utf-8",
  "cache-control": "no-cache",
  "connection": "keep-alive"
}





patch_notes Show/Hide List Operations Expand Operations
GET /patch_notes Get the latest patch informations
{platform} Show/Hide List Operations Expand Operations
GET /{platform}/{region}/{tag}/achievements Get the users achievements
GET /{platform}/{region}/{tag}/get-platforms Check if the user owns a copy for another platform
GET /{platform}/{region}/{tag}/profile Get Stats for a specific hero
GET /{platform}/{region}/{tag}/{mode}/allHeroes/ Get Stats for a all heroes
GET /{platform}/{region}/{tag}/{mode}/hero/{heroes}/ Get Stats for multiple heroes.
GET /{platform}/{region}/{tag}/{mode}/heroes Get overall hero stats
[ base url: / , api version: 1.0 ]

{platform}  pc,xbl,psn
{region}    eu,us,kr,cn,global
{tag}       the battle-tag of the user | "#" should be replaced by an "-"
{mode}      competitive-play,quick-play
{heroes}    heroes you want stats from

*/