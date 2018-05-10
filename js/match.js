/**
 * Created by dzj12 on 2018/5/10.
 */
var matchData = {
    params: {
        "page_num": 1,   // 分页号
        "page_size": 6 // 分页大小
    },
    pageTurn: function (total) {
        var thisFun = this,
            total = total || 0;
        if (thisFun.params.page_size < total) {
            $("#pageTurn").pageM({
                "pageNum": thisFun.params.page_num,
                "total": total,
                "pageSize": thisFun.params.page_size,
                "pagePosition": "CENTER",
                "pageEvent": function (option) {
                    thisFun.params.page_num = option.pageNum;
                    thisFun.matchList();
                }
            });
            $("#pageTurn").show();
        } else {
            // 不显示分页
            $("#pageTurn").hide();
        }
    },
    getMatchListHtml: function (list) {
        var html = '';
        for (var index in list) {
            html += '<div class="video-list-item">';
            html += '<div class="video-list-item-img">';
            html += '<a href="' + Window.pathUrl + 'home/matchDetail.html?matchId=' + list[index].match_id + '" target="_blank">';
            html += '<img src="' + Window.mediaPath + list[index].match_vedio_pic_url + '" alt="ss">';
            html += '</a>';
            html += '</div>';
            html += '<div class="video-list-item-text">';
            html += '<p>' + list[index].match_name + '</p>';
            html += '<p>' + list[index].match_desc + '</p>';
            html += '<p>描述</p>';
            html += '</div>';
            html += '</div>';
        }
        return html;
    },
    matchList: function () {
        var thisFun = this;
        $.ajaxAll({
            url: 'getMatches/' + thisFun.params.page_size + '/' + thisFun.params.page_num,
            successFun: function (data) {
                var list = data.responseData.match_info_list;
                var total = data.responseData.total_cnt;
                $('.matchBox-list').children().remove();
                if (total && total > 0) {
                    $('.matchBox-list').append(thisFun.getMatchListHtml(list));
                    thisFun.pageTurn(total);
                    $(document).scrollTop(0);
                }
            }
        });
    },
    init: function () {
        this.matchList();
    }
};

$(function () {
    matchData.init();
});