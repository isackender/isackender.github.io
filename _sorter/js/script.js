$("button").click(function() {
  for (var i = 0; i < $(".number").length; i++) {
    if ($(".number:eq("+i+")").val() == "") {
      $(".number:eq("+i+")").val(0);
    };
  };

  var numatk = parseInt($(".number:eq(0)").val());
  var numdef = parseInt($(".number:eq(1)").val());
  var numtnk = parseInt($(".number:eq(2)").val());
  var numhlr = parseInt($(".number:eq(3)").val());

  var roles = [];

  //Attack
  for (var i = 0; i < numatk; i++) {
    roles.push("Attack");
  };
  //Defense
  for (var i = 0; i < numdef; i++) {
    roles.push("Defense");
  };
  //Tank
  for (var i = 0; i < numtnk; i++) {
    roles.push("Tank");
  };
  //Healer
  for (var i = 0; i < numhlr; i++) {
    roles.push("Healer");
  };
    
  $(".role").each(function(){
    $(this).html("");
    $(this).removeClass();
    $(this).addClass("role");
  });

  var randomroles = shuffle(roles);
  var ini = 0;

  for (var i = 0; i < $(".player").length; i++) {
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
