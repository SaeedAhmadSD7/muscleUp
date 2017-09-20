$(document).ready(function() {
    $('.btn-date').DateTimePicker();

    $('.data_value').each( function () {
        $(this).val($(this).attr('data-value'));
    });


});