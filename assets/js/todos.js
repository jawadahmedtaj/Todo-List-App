// Check off specific todos by clicking

$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});

//Click on X to delete Todo

$("ul").on("click", "span", function (e) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    })
    e.stopPropagation();
});

$("input[type='text']").keypress(function (e) {
    if (e.which === 13) {
        var todoText = $(this).val();
        if (!(todoText.length > 35)) {
            $(this).css("border", "3px solid rgba(0, 0, 0, 0)");
            $("ul").append("<li><span> <i class='fas fa-trash-alt'></i> </span>" + todoText + "</li>")
            $(this).val("");
        } else $(this).css("border", "3px solid red");
    }
});


$("#icon").on("click", function () {
    $("input[type='text']").fadeToggle(200, function () {
        $("#icon").toggleClass("fa-arrow-down fa-arrow-up");
    });
    $("li").slideToggle();
})