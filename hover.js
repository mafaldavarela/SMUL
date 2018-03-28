$(function() {
    $('#equilibrio').hover(function(){ //Open on hover
        $('#bg').addClass("bg");
        $('#bg').removeClass("nobg");
    },
    function(){ //Close when not hovered
        $('#bg').removeClass("bg");
        $('#bg').addClass("nobg");
    });
});
