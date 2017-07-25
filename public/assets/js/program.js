$(document).ready(function () {

    // $('.toggle').find('.toggle-content').hide();
    // $('.toggle-title').on('click', function () {
    //     $(this).find('i').toggleClass('fa-plus fa-minus');
    //     $(this).parent().find('.toggle-content').slideToggle();
    // });

    $('.tab-content').on('keypress','.phase_name',function () {
        if($(this).val()) {
            $(this).siblings('.input-group-btn').children().prop('disabled',false);
        }
    });

    $('.tab-content').on('focusout','.phase_name',function () {
        if($(this).val() === '') {
            $(this).siblings('.input-group-btn').children().prop('disabled',true);
        }
    });

    $('.tab-content').on('click','.phase_detail',function () {
        var phase_name_val = $(this).parent().siblings('.phase_name-div').find('.phase_name').val();
        $(this).closest('.input-group').siblings('.modal').find('.phase_heading').html(phase_name_val);
        $(this).closest('.input-group').siblings('.bs-example-modal-lg').modal({
            keyboard: 'false',
            backdrop: 'static'
        })
    });

    $('.tab-content').on('click','.modal_close, .close',function () {
            $(this).closest('.bs-example-modal-lg').modal('hide');
    });

    $('.add-phase').on('click',function () {
        var phase_clone = $('.phase:last').clone().insertAfter('.phase:last').find('input').val('').end().find('.phase_detail').prop('disabled',true);
    });

});