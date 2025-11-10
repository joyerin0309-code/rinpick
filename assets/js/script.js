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
});