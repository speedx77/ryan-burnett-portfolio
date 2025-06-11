
$(".nav-animation").on("mouseover", function() {
    $(this).css({
        "color": "#FF9EAA",
    });
})

$(".nav-animation").on("mouseout", function() {
    $(this).css({
        "color": "#FFFFFF",
        "font-weight": "bold"
    })
})

$("#pfp").on("mouseover", function () {
    $(this).attr({
        "src" : "./assets/mosHero.png"
    })
})

$("#simonsays").on("mouseover", function() {
    $(this).css({
        "background-image" : "url('./assets/gifs/simonsaysgif.gif')"
    })
})

$("#simonsays").on("mouseout", function() {
    $(this).css({
        "background-image" : "url('./assets/simon_says.png')"
    })
})

$("#bigthoughts").on("mouseover", function() {
    $(this).css({
        "background-image"  : "url('./assets/gifs/bigthoughtsgif.gif')"
    })
})

$("#bigthoughts").on("mouseout", function() {
    $(this).css({
        "background-image"  : "url('./assets/big_thoughts_blog.png')"
    })
})


$("#pfp").on("mouseover", function() {
    $(this).css({
        "background-image" : "url('./assets/gifs/pfpgif.gif')"
    })
})

$("#pfp").on("mouseout", function() {
    $(this).css({
        "background-image" : "url('./assets/profilepic.jpg')"
    })
})





/*
$("#aws").on("mouseover", function () {
    $(this).width("350px")
    $(this).css("background-image", "url('')",)
    $(this).html("  Amazon Web Service, used to host the website")
    $(this).addClass("")
})

$("#aws").on("mouseout", function () {
    $(this).css("background-image", "url('../assets/skill_pills/Amazon_Web_Services-Logo.png')",)
    $(this).width("100px")
    $(this).html("")
})

*/



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