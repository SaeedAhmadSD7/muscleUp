$(document).ready(function () {
    $('.fields section:first-child').fadeIn('slow');

    $('.fields .btn-next').on('click', function () {
        var parent_section = $(this).parents('section');
        parent_section.fadeOut(400, function () {
            $(this).next().fadeIn();
        });
    });

    // previous step
    $('.fields .btn-prev').on('click', function () {
        $(this).parents('section').fadeOut(400, function () {
            $(this).prev().fadeIn();
        });
    });

    $('.btn-add').on('click',function () {

        $('.phase-div:last').clone().find('input').val('').end().appendTo('.phase_field');
        $('.phase_detail-div:last').clone().appendTo('.phase_field');
    });


    $('.btn-add-day').on('click',function () {
        $('.day-div:last').clone().find('input').val('').end().appendTo('.day_field');
        $('.day_detail-div:last').clone().find('input').val('').end().appendTo('.day_field');

    });

    // $('.day_fields section:first-child').fadeIn('slow');
    //
    // $('.day_field .day_detail').on('click',function () {
    //     var parent_section = $(this).parent('section');
    //     parent_section.fadeOut(400, function () {
    //         $(this).next().fadeIn();
    //     });
    // });

});