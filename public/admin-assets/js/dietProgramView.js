$(document).ready(function () {

    var date = new Date($('.start_date').val());
    $('.date-span').html(date.toDateString());


    $('.meal_detail').on('click', function () {
        $(this).find('i').toggleClass('icon-plus icon-minus');
        $(this).closest('.form-group').siblings('.meal_detail-div').eq(0).find('.toggle-content').slideToggle();
    });

    $('.quantity-taken-div').on('input', function () {
        var calories_actual = $(this).siblings('.calories-actual-div').find('input').val();
        var quantity_actual = $(this).siblings('.quantity-actual-div').find('input').val();
        var calories_unit = calories_actual/quantity_actual;
        $(this).siblings('.calories-estimated-div').find('input').val(calories_unit* ($(this).find('input').val()));
    });


})

