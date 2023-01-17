$("h1").click(() => {
    $('body').css("background-color", "red");
});

$("p").dblclick(function(){
    $(this).css("font-size", "18px");
});

$("li").mouseenter(function(){
    $(this).css("color", "red");
}).mouseleave(function(){
    $(this).css("color", "black");
});
