$(document).ready(function () {
    $('.date').each(function () {
        var date = new Date($(this).html());
        date = date.toDateString();
        $(this).html(date);
    })
});