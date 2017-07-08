$(document).ready(function () {
    $('.table-hover').on('click', 'tr', function () {
        var url_id = $(this).attr('id');
        var url = '../../Admin/Inbox/Detail/Message/'+url_id;
        console.log(url);
        $.ajax({
            url: url,
            data: {},
            success: function () {
                    window.location.href = url;
            }
        });
    });
});