$(function () {
    $(".nav-btn").click(function () {
        $(".nav-container").stop().slideToggle(200);
        $(this).toggleClass("close");

    });
    $(".gnav li a").click(function () {
        $(".nav-container").slideUp();
    });
});
