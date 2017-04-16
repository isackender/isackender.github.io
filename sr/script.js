var name=prompt("Your name");
var pre_element=document.getElementsByTagName("pre");
var pre=pre_element[0].innerText;
var n=pre.indexOf("1.");
var a=name.toLowerCase();
var found=false;
var tickets=0;

pre=pre.slice(n);
var arrPre=pre.split(/\r\n|\r|\n/);
var total_tickets=0;

for (var i=0; i<arrPre.length-1; i++) {
  var point=arrPre[i].lastIndexOf(".");
  var leftp=arrPre[i].lastIndexOf("(");
  var rightp=arrPre[i].lastIndexOf(")");
  var arrName=arrPre[i].substring(point+2, leftp-1);
  var b=arrName.toLowerCase();

  if (name.toLowerCase() == arrName.toLowerCase()) {
    found = true;
    tickets = parseInt(arrPre[i].substring(leftp+1, rightp-7));
  };

  total_tickets+=parseInt(arrPre[i].substring(leftp+1, rightp-7));
};

if (found) {
  var percentage = (tickets*100)/total_tickets;
  alert("Your chances are... "+percentage+"%");  
  console.log(name+' - '+arrName);
} else {
  alert("Name not found");
  console.log(name+' - '+arrName);
};