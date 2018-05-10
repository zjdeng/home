/**
 * Created by dzj12 on 2018/5/10.
 */
var matchId = $.parseURL(window.location.href).params.matchId;
$(function () {
    $.ajaxAll({
        url: 'getMatchDetail/' + matchId,
        successFun: function (data) {
            var adress = data.responseData.match_vedio_url;
            console.log(adress);
        }
    });
});