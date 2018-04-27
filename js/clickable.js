
$(function() {
    $('#luz').click(function(){
        $('#player_luz').addClass("on");
        $('#player_luz').removeClass("off");
        $('#player_parte').addClass("off");
        $('#player_parte').removeClass("on");
    });
});

$(function() {
    $('#parte').click(function(){
        $('#player_parte').addClass("on");
        $('#player_parte').removeClass("off");
        $('#player_luz').addClass("off");
        $('#player_luz').removeClass("on");
    });
});
