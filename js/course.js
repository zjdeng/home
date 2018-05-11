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
                    thisFun.courseList();
                }
            });
            $("#pageTurn").show();
        } else {
            // 不显示分页
            $("#pageTurn").hide();
        }
    },
    getCourseListHtml: function (list) {
        var html = '';
        for (var index in list) {
            html += '<div class="video-list-item">';
            html += '<div class="video-list-item-img">';
            html += '<a href="courseDetail.html?courseId=' + list[index].study_id + '" target="_blank">';
            html += '<img src="' + Window.mediaPath + list[index].study_vedio_pic_url + '" alt="ss">';
            html += '</a>';
            html += '</div>';
            html += '<div class="video-list-item-text">';
            html += '<p>' + list[index].study_name + '</p>';
            html += '<p>' + list[index].study_desc + '</p>';
            html += '<p>描述</p>';
            html += '</div>';
            html += '</div>';
        }
        return html;
    },
    courseList: function () {
        var thisFun = this;
        $.ajaxAll({
            url: 'getStudies/' + thisFun.params.page_size + '/' + thisFun.params.page_num,
            successFun: function (data) {
                var list = data.responseData.study_info_list;
                var total = data.responseData.total_cnt;
                $('.courseBox-list').children().remove();
                if (total && total > 0) {
                    $('.courseBox-list').append(thisFun.getCourseListHtml(list));
                    thisFun.pageTurn(total);
                    $(document).scrollTop(0);
                }
            }
        });
    },
    init: function () {
        this.courseList();
    }
};

$(function () {
    matchData.init();
});