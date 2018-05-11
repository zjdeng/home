/**
 * Created by dzj12 on 2018/5/9.
 */

var meetingData = {
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
                    thisFun.meetingList();
                }
            });
            $("#pageTurn").show();
        } else {
            // 不显示分页
            $("#pageTurn").hide();
        }
    },
    getMeetingListHtml: function (list) {
        var html = '';
        for (var index in list) {
            html += '<li>';
            html += '<a href="meetingDetail.html?meetingId=' + list[index].meeting_id + '" target="_blank">';
            html += '<span>' + list[index].meeting_title + '</span>';
            html += '<span>' + list[index].meeting_time +'</span>';
            html += '</a>';
            html += '</li>';
        }
        return html;
    },
    meetingList: function () {
        var thisFun = this;
        $.ajaxAll({
            url: 'getMeetings/' + thisFun.params.page_size + '/' + thisFun.params.page_num,
            successFun: function (data) {
                var list = data.responseData.meeting_info_list;
                var total = data.responseData.total_cnt;
                $('.meetingBox-list-box').children().remove();
                if (total && total > 0) {
                    $('.meetingBox-list-box').append(thisFun.getMeetingListHtml(list));
                    thisFun.pageTurn(total);
                    $(document).scrollTop(0);
                }
            }
        });
    },
    init: function () {
        this.meetingList();
    }
};

$(function () {
    meetingData.init();
});