"use strict";
var bannerWidth = 1100;
var timer;
// 轮播
var banner = function () {
    clearInterval(timer);
    var index = 0;
    // timer = setInterval(function () {
    //     index ++;
    //     $('.bannerGroup').animate({
    //         left: bannerWidth
    //     })
    // }, 3000);
};



var init = function () {
    banner();
};
$(function () {
    init();
});