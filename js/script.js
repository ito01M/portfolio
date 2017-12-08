$(function () {
    $(".nav-btn").click(function () {
        $(".top-container").stop().fadeToggle("1000");
        $(this).toggleClass("close");
    });
});
