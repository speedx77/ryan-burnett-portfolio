$(".nav-animation").on("mouseover", function() {
    $(this).css({
        "color": "#FF9EAA",
        "opacity": "1"
    });
})

$(".nav-animation").on("mouseout", function() {
    $(this).css({
        "color": "#FFFFFF",
        "opacity": ".75"
    })
})

$("#pfp").on("mouseover", function () {
    $(this).attr({
        "src" : "./assets/mosHero.png"
    })
})





/*
$(".link-button").on("mouseover", function() {
    $(this).addClass("box-shadow");
    /*
    $(this).css({
        "box-shadow" : "#FF9EAA 2.5px 3.5px"

    })
        

})


$(".link-button").on('mouseout', function(){    
    $(this).addClass('reverse-box-shadow');
    /*
    $(this).css({
        "box-shadow" : "black 5px 7px"
    })
        
})
*/