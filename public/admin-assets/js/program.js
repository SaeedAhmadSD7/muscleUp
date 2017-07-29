$(document).ready(function () {

    /***
     * Media Query Condition for checking width
     */
    $(function() {
        $(window).resize(function(){
            if(Modernizr.mq('(max-width: 900px)')){
                $('.tab-content').find('.phase_detail').html('<span class="input-group-btn"><i class=" day_detail_icon glyph-icon icon-plus"></i></span>');
                $('.tab-content').find('.day_detail').html('<i class=" day_detail_icon glyph-icon icon-plus"></i>');
            }
            else{
                $('.tab-content').find('.phase_detail').html('<span class="input-group-btn">Add Details</span>');
                $('.tab-content').find('.day_detail').html('<span>Add Details  </span><i class=" day_detail_icon glyph-icon icon-plus"></i>');
            }
        }).resize();
    });

    /***
     * Cloned Div for future duplication
     */
    var cloned_phase = $('.phase').clone();
    var clone_day = $('.day').clone();
    var clone_exercise_list = $('.exercise-div').clone();


    /***
     * Select2 Instialization
     */
    $('.exercise_list').select2({
        placeholder:'Exercise...',
        theme: 'bootstrap'
    });

    /***
     * Enable Day Detail or Phase Detail When Phase Name or Day Name Entered
     */
    $('.tab-content').on('keypress','.phase_name, .day_name',function () {
        if($(this).val()) {
            $(this).siblings('.input-group-btn').children().prop('disabled',false);
        }
    });

    /***
     * Disable Add Detail Button If Phase Name Deleted
     */

    $('.tab-content').on('focusout','.phase_name, .day_name',function () {
        if($(this).val() === '') {
            $(this).siblings('.input-group-btn').children().prop('disabled',true);
        }
    });

    /***
     * Phase Detail Modal Load
     */
    $('.tab-content').on('click','.phase_detail',function () {
        var phase_name_val = $(this).parent().siblings('.phase_name').val();
        $(this).closest('.input-group').siblings('.modal').find('.modal-title').html(phase_name_val);
        $(this).closest('.input-group').siblings('.phase_details_modal').modal({
            keyboard: 'false',
            backdrop: 'static'
        })
    });
    /***
     * Modal Hide
     */
    $('.tab-content').on('click','.modal_close, .close',function () {
        $(this).closest('.phase_details_modal').modal('hide');
    });




    /***
     * Day Detail Toggle Menu
     */
    $('.tab-content').on('click','.day_detail', function () {
        $(this).find('i').toggleClass('icon-plus icon-minus');
        $(this).closest('.day_name-div').siblings('.day_detail-div').slideToggle();
    });

    $('.tab-content').on('click','.exercise_detail_btn', function () {
        $(this).find('i').toggleClass('icon-plus icon-minus');
        $(this).parent().siblings('.exercise_list-div').find('.exercise_detail-div').slideToggle();
    });

    $('.tab-content').on('select2:selecting','.exercise_list',function() {
        $(this).closest('.exercise_list-div').siblings('.exercise_detail-btn-div').find('.exercise_detail_btn').prop('disabled',false);
    });




    /***
     * Add Phase Button
     */

    $('.tab-content').on('click','.add-phase',function () {
        cloned_phase.clone().insertAfter('.phase:last').find('.exercise_list').select2({placeholder:'Exercise...',theme: 'bootstrap'}).parent().siblings('.exercise_detail-div').find('.exercise_detail-input').TouchSpin({min: 0, max: 100});
        // console.log($('exercise_list'))
    });


    /***
     * Add Day Button
     */
    $('.tab-content').on('click','.add-day',function () {

        clone_day.clone().appendTo($(this).closest('.form-group').siblings('.day')).find('.exercise_list').select2({placeholder:'Exercise...',theme: 'bootstrap'}).parent().siblings('.exercise_detail-div').find('.exercise_detail-input').TouchSpin({min: 0, max: 100})
    });

    $('.tab-content').on('click','.add-exercise',function () {
        clone_exercise_list.clone().insertAfter($(this).parent().siblings('.exercise-div:last')).find('.exercise_list').select2({placeholder:'Exercise...',theme: 'bootstrap'}).parent().siblings('.exercise_detail-div').find('.exercise_detail-input').TouchSpin({min: 0, max: 100})
    });


    $('.exercise_detail-input').TouchSpin({
        min: 0,
        max: 100
    });


});
