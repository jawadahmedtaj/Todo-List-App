// Check off specific todos by clicking

$("li").click(function () {

    $(this).css({
        color: "gray",
        textDecoration: "line-through"
    })
})