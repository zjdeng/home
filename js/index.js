"use strict";

var bannerWidth = 1200;
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

var homeData = {
    getMeetingHtml: function (list) {
        var html = '';
        for (var i in list) {
            html += '<div class="meeting-item">';
            html += '<div class="meeting-item-img">';
            html += '<img src="' + Window.mediaPath + list[i].meeting_pic + '" alt="pic">';
            html += '</div>';
            html += '<div class="meeting-item-text">';
            html += '<p class="meting-title">' + list[i].meeting_title + '</p>';
            html += '<div>';
            html += '<span>' + list[i].meeting_text + '</span>';
            html += '<a href="meetingDetail.html?meetingId=' + list[i].meeting_id + '">【查看详情】</a>';
            html += '</div>';
            html += '</div>';
            html += '</div>';
        }
        return html;
    },
    meetingData: function () {
        var thisFun = this;
        $.ajaxAll({
            url: 'getMeetings/6/1',
            successFun: function (data) {
                var list = data.responseData.meeting_info_list;
                var total = data.responseData.total_cnt;
                $('.meeting-content > div').remove();
                if (total && total > 0) {
                    $('.meeting-content').append(thisFun.getMeetingHtml(list));
                }
            }
        });
    },
    getMatchVideoHtml: function (list) {
        var html = '';
        for (var i in list) {
            html += '<div class="video-item">';
            html += '<a href="matchDetail.html?matchId=' + list[i].match_id + '">';
            html += '<img src="' + Window.mediaPath + list[i].match_vedio_pic_url + '" alt="hehe">';
            html += '</a>';
            html += '<div class="video-describe">';
            html += '<p>' + list[i].match_name + '</p>';
            html += '<p>' + list[i].match_desc + '</p>';
            html += '</div>';
            html += '</div>';
        }
        return html;
    },
    matchVideoData: function () {
        var thisFun = this;
        $.ajaxAll({
            url: 'getMatches/8/1',
            successFun: function (data) {
                var list = data.responseData.match_info_list;
                var total = data.responseData.total_cnt;
                $('.matchVideo-content > div').remove();
                if (total && total > 0) {
                    $('.matchVideo-content').append(thisFun.getMatchVideoHtml(list));
                }
            }
        });
    },
    getCourseVideoHtml: function (list) {
        var html = '';
        for (var i in list) {
            html += '<div class="video-item">';
            html += '<a href="courseDetail.html?courseId=' + list[i].study_id + '">';
            html += '<img src="' + Window.mediaPath + list[i].study_vedio_pic_url + '" alt="hehe">';
            html += '</a>';
            html += '<div class="video-describe">';
            html += '<p>' + list[i].study_name + '</p>';
            html += '<p>' + list[i].study_desc + '</p>';
            html += '</div>';
            html += '</div>';
        }
        return html;
    },
    courseVideoData: function () {
        var thisFun = this;
        $.ajaxAll({
            url: 'getStudies/8/1',
            successFun: function (data) {
                var list = data.responseData.study_info_list;
                var total = data.responseData.total_cnt;
                $('.courseVideo-content > div').remove();
                if (total && total > 0) {
                    $('.courseVideo-content').append(thisFun.getCourseVideoHtml(list));
                }
            }
        });
    },
    init: function () {
        this.meetingData();
        this.matchVideoData();
        this.courseVideoData();
    }
};


$(function () {
    homeData.init();
});