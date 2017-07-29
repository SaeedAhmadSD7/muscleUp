$(document).ready(function () {

    /***
     * Media Query Condition for checking width
     */
    $(function() {
        $(window).resize(function(){
            if(Modernizr.mq('(max-width: 900px)')){
                $('.tab-content').find('.meal_detail').html('<span class="input-group-btn"><i class=" meal_name_detail_icon glyph-icon icon-plus"></i></span>');
                $('.tab-content').find('.meal_name_detail').html('<i class=" meal_name_detail_icon glyph-icon icon-plus"></i>');
            }
            else{
                $('.tab-content').find('.meal_detail').html('<span class="input-group-btn">Add Details</span>');
                $('.tab-content').find('.meal_name_detail').html('<span>Add Details  </span><i class=" meal_name_detail_icon glyph-icon icon-plus"></i>');
            }
        }).resize();
    });

    /***
     * Cloned Div for future duplication
     */
    var cloned_meal_number = $('.meal_number').clone();
    var meal_content = $('.meal_content-div').clone();


    /***
     * Enable Meal Number or Meal Name If Entered
     */
    $('.tab-content').on('keypress','.meal_number_input, .meal_name_input',function () {
        if($(this).val()) {
            $(this).siblings('.input-group-btn').children().prop('disabled',false);
        }
    });

    /***
     * Disable Add Detail Button If Meal Number or Meal Name is Deleted
     */

    $('.tab-content').on('focusout','.meal_number_input, .meal_name_input',function () {
        if($(this).val() === '') {
            $(this).siblings('.input-group-btn').children().prop('disabled',true);
        }
    });

    /***
     * Meal Detail Modal Load
     */
    $('.tab-content').on('click','.meal_detail',function () {
        var meal_number_val = $(this).parent().siblings('.meal_number_input').val();
        $(this).closest('.input-group').siblings('.modal').find('.modal-title').html(meal_number_val);
        $(this).closest('.input-group').siblings('.meal_details_modal').modal({
            keyboard: 'false',
            backdrop: 'static'
        })
    });
    /***
     * Modal Hide
     */
    $('.tab-content').on('click','.modal_close, .close',function () {
        $(this).closest('.meal_details_modal').modal('hide');
    });




    /***
     * Meal Detail Toggle Menu
     */
    $('.tab-content').on('click','.meal_name_detail', function () {
        $(this).find('i').toggleClass('icon-plus icon-minus');
        $(this).closest('.meal_name-div').siblings('.meal_name_detail-div').slideToggle();
    });

    /***
     * Add Meal Number
     */

    $('.tab-content').on('click','.add_meal_number',function () {
        cloned_meal_number.clone().insertAfter('.meal_number:last').find('.time_take_input').timepicker({minuteStep: 1,defaultTime: false, showMeridian: false}).parent().siblings('.calories-div').find('.calories').TouchSpin({min: 0, max: 100});
    });


    /***
     * Add Day Button
     */
    $('.tab-content').on('click','.add_meal_name',function () {
        meal_content.clone().appendTo($('.meal_container')).find('.time_take_input').timepicker({minuteStep: 1,defaultTime: false, showMeridian: false}).parent().siblings('.calories-div').find('.calories').TouchSpin({min: 0, max: 100});
    });

    $('.calories').TouchSpin({
        min: 0,
        max: 100
    });

    $('.time_take_input').timepicker({
        minuteStep: 1,
        defaultTime: false,
        showMeridian: false,
    });

});
