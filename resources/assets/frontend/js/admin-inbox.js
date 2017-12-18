$(document).ready(function () {
    $('.table-hover').on('click', 'tr', function () {
        window.location.href = window.location.pathname +'/Message/Detail/'+ $(this).attr('id');
    });
});