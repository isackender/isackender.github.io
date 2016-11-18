$("button").click(function() {
  var roles = ["Attack", "Defense", "Tank", "Healer"];

  var roles5 = ["Attack", "Defense", "Tank", "Healer", "Healer"];
  var roles6 = ["Attack", "Defense", "Tank", "Tank", "Healer", "Healer"];

  var numinputs = $("input").length;
  var numplayers = 0;

  var ini = 0;
    
  $(".role").each(function(){
    $(this).html("");
  });

  for (var i = 0; i < numinputs; i++) {
    var player = $("input:eq("+i+")").val();
    if (player != "") {
      numplayers++;
    };
  };

  switch(numplayers){
    case 4:
      var randomroles = shuffle(roles);
      for (var i = 0; i < numinputs; i++) {
        var player = $("input:eq("+i+")").val();
        if (player != "") {
          switch(randomroles[ini]){
            case "Attack":
              $("#p"+i+"").removeClass();
              $("#p"+i+"").addClass("role attack");
              $("#p"+i+"").html(randomroles[ini]);
              break;
            case "Defense":
              $("#p"+i+"").removeClass();
              $("#p"+i+"").addClass("role defense");
              $("#p"+i+"").html(randomroles[ini]);
              break;
            case "Tank":
              $("#p"+i+"").removeClass();
              $("#p"+i+"").addClass("role tank");
              $("#p"+i+"").html(randomroles[ini]);
              break;
            case "Healer":
              $("#p"+i+"").removeClass();
              $("#p"+i+"").addClass("role healer");
              $("#p"+i+"").html(randomroles[ini]);
              break;
          }
          ini++;
        };
      };
      ini = 0;
      break;
    case 5:
      var randomroles = shuffle(roles5);
      for (var i = 0; i < numinputs; i++) {
        var player = $("input:eq("+i+")").val();
        if (player != "") {
          switch(randomroles[ini]){
            case "Attack":
              $("#p"+i+"").removeClass();
              $("#p"+i+"").addClass("role attack");
              $("#p"+i+"").html(randomroles[ini]);
              break;
            case "Defense":
              $("#p"+i+"").removeClass();
              $("#p"+i+"").addClass("role defense");
              $("#p"+i+"").html(randomroles[ini]);
              break;
            case "Tank":
              $("#p"+i+"").removeClass();
              $("#p"+i+"").addClass("role tank");
              $("#p"+i+"").html(randomroles[ini]);
              break;
            case "Healer":
              $("#p"+i+"").removeClass();
              $("#p"+i+"").addClass("role healer");
              $("#p"+i+"").html(randomroles[ini]);
              break;
          }
          ini++;
        };
      };
      ini = 0;
      break;
    case 6:
      var randomroles = shuffle(roles6);
      for (var i = 0; i < numinputs; i++) {
        var player = $("input:eq("+i+")").val();
        if (player != "") {
          switch(randomroles[ini]){
            case "Attack":
              $("#p"+i+"").removeClass();
              $("#p"+i+"").addClass("role attack");
              $("#p"+i+"").html(randomroles[ini]);
              break;
            case "Defense":
              $("#p"+i+"").removeClass();
              $("#p"+i+"").addClass("role defense");
              $("#p"+i+"").html(randomroles[ini]);
              break;
            case "Tank":
              $("#p"+i+"").removeClass();
              $("#p"+i+"").addClass("role tank");
              $("#p"+i+"").html(randomroles[ini]);
              break;
            case "Healer":
              $("#p"+i+"").removeClass();
              $("#p"+i+"").addClass("role healer");
              $("#p"+i+"").html(randomroles[ini]);
              break;
          }
          ini++;
        };
      };
      ini = 0;
      break;
    default:
      for (var i = 0; i < numinputs; i++) {
        var player = $("input:eq("+i+")").val();
        if (player != "") {
          var randomrole = roles[Math.floor(Math.random()*roles.length)];
          switch(randomrole){
            case "Attack":
              $("#p"+i+"").removeClass();
              $("#p"+i+"").addClass("role attack");
              $("#p"+i+"").html(randomrole);
              break;
            case "Defense":
              $("#p"+i+"").removeClass();
              $("#p"+i+"").addClass("role defense");
              $("#p"+i+"").html(randomrole);
              break;
            case "Tank":
              $("#p"+i+"").removeClass();
              $("#p"+i+"").addClass("role tank");
              $("#p"+i+"").html(randomrole);
              break;
            case "Healer":
              $("#p"+i+"").removeClass();
              $("#p"+i+"").addClass(" role healer");
              $("#p"+i+"").html(randomrole);
              break;
          }
        };
      };
  }

  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
});
