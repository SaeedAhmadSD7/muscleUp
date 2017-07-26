$(document).ready(function () {

    $('.day_detail-div').hide();

    $('.toggle').on('click', function () {
        $(this).find('i').toggleClass('icon-plus icon-minus');
        $(this).closest('.day').siblings('.day_detail-div').slideToggle();
    });

    $('.tab-content').on('keypress','.phase_name, .day_name',function () {
        if($(this).val()) {
            $(this).siblings('.input-group-btn').children().prop('disabled',false);
        }
    });

    $('.tab-content').on('focusout','.phase_name, .day_name',function () {
        if($(this).val() === '') {
            $(this).siblings('.input-group-btn').children().prop('disabled',true);
        }
    });

    $('.tab-content').on('click','.phase_detail',function () {
        var phase_name_val = $(this).parent().siblings('.phase_name').val();
        $(this).closest('.input-group').siblings('.modal').find('.modal-title').html(phase_name_val);
        $(this).closest('.input-group').siblings('.phase_details_modal').modal({
            keyboard: 'false',
            backdrop: 'static'
        })
    });

    $('.tab-content').on('click','.modal_close, .close',function () {
            $(this).closest('.phase_details_modal').modal('hide');
    });

    $('.add-phase').on('click',function () {
        $('.phase:last').clone().insertAfter('.phase:last').find('input').val('').end().find('.phase_detail').prop('disabled',true);
    });

    $('.add-day').on('click',function () {
        $('.day:last').clone().insertAfter('.day:last').find('input').val('').end().find('.day_detail').prop('disabled',true);
    });


});