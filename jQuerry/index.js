$("h1").addClass("big-text margin50").text("bye")
$("button").html("<i>dont click</i>")
$("a").attr("href","https://en.wikipedia.org/wiki/Yahoo!")


// for(let i=0;i<5;i++){
//     document.querySelectorAll("button")[i].addEventListener("click",function(){
//         document.querySelector("h1").style.color="red"
//     })
// }



$("button").click(function(){$("h1").css("color","purple")
})


$("input").keydown(function(event){
    console.log(event.key)
})

$(document).keydown(function(event){
    $("h1").text(event.key)
})


$("h1").on("mouseover",function(){
    $("h1").css("color","green")
})

// $("button").on("click",function(){
//     $("h1").hide();
// })
// $("button").on("click",function(){
//     $("h1").fadeOut().fadeIn()
// })

// $("button").on("click",function(){
//     $("h1").fadeToggle()
// })


// $("button").on("click",function(){
//     $("h1").toggle().animate({opacity:0.5})
// })

// $("button").on("click",function(){
//     $("h1").toggle().animate({margin:20}).slideUp()
// })