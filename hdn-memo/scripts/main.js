$(function() {

    // Save/retrieve localStorage on load
    if (localStorage.getItem("inp0") === null) { // If there's no data saved
        for (var z = 0; z <= 17; z++) {
            localStorage.setItem("inp"+z+"", ""+$("input:eq("+z+")").val()+"");
        }
    } else { // retrieve all data
        for (var z = 0; z <= 17; z++) {
            var y = localStorage.getItem("inp"+z+"");
            $("input:eq("+z+")").val(y);
        }
    }

    // Save data each second
    setInterval(function(){
        for (var w = 0; w <= 17; w++) {
            localStorage.setItem("inp"+w+"", ""+$("input:eq("+w+")").val()+"");
        }
        console.log("Data saved");
    }, 1000);

    // Move up button
    $("button:eq(0)").click(function(){
        // 0 3 6 9 12 15
        for (var i = 3; i <= 15; i=i+3) {
            j = i-3;
            var x = $("input:eq("+i+")").val();
            $("input:eq("+j+")").val(x);
        }
        // 1 4 7 10 13 16
        for (var i = 4; i <= 16; i=i+3) {
            j = i-3;
            var x = $("input:eq("+i+")").val();
            $("input:eq("+j+")").val(x);
        }
        // 2 5 8 11 14 17
        for (var i = 5; i <= 17; i=i+3) {
            j = i-3;
            var x = $("input:eq("+i+")").val();
            $("input:eq("+j+")").val(x);
        }
    });

    // Clear button
    $("button:eq(1)").click(function(){
        $("input").each(function(){
            $(this).val('');
        });
    });
});
