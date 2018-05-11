/**
 * Created by dzj12 on 2018/5/10.
 */
var meetingId = $.parseURL(window.location.href).params.meetingId;
var meetingDetailData = {
    meetingDetail: function () {
        var thisFun = this;
        $.ajaxAll({
            url: 'getMeetingDetail/' + meetingId,
            successFun: function (data) {
                var content = data.responseData;
                if (content) {
                    $('.meetingDetailTitle > .title').html(content.meeting_title);
                    $('.meetingDetailTitle > .time').html(content.meeting_time);
                    $('.meetingDetailContent').html(content.meeting_text);
                }

            }
        });
    },
    init: function () {
        this.meetingDetail();
    }
};
$(function () {
    meetingDetailData.init();
});