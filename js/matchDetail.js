/**
 * Created by dzj12 on 2018/5/10.
 */
var matchId = $.parseURL(window.location.href).params.matchId;

var getHtml = function (adress) {
    var html = '';
    html += '<video width="100%" height="650" controls>';
    html += '<source src="' + Window.mediaPath + adress + '" type="video/mp4">';
    html += '<object data="' + Window.mediaPath + adress + '">';
    html += '<embed width="320" height="240" src="' + Window.mediaPath + adress + '">';
    html += '</object>';
    html += '</video>';
    return html;
};

$(function () {
    $.ajaxAll({
        url: 'getMatchDetail/' + matchId,
        successFun: function (data) {
            var adress = data.responseData.match_vedio_url;
            $('.zoneBox-list').html(getHtml(adress));
        }
    });
});