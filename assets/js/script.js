$(function () {
    $('.hamburger-btn').click(function () {
        $('.header-nav').addClass('on');
    });

    $('.close-btn').click(function () {
        $('.header-nav').removeClass('on');
    });

    $('.header-nav a').click(function () {
        $('.header-nav').removeClass('on');
    });

    $(".privacy-open").on("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        $(".privacy-popup").show();
    });

    $(".privacy-popup__close").on("click", function () {
        $(".privacy-popup").hide();
    });
});