$(document).ready(function () {
    /***
     * Select2 Instialization
     */

    var phase_url;
    var day_url;

    $('.tab-content').on('click','.wbs_detail', function () {
        $(this).find('i').toggleClass('icon-plus icon-minus');
        $(this).closest('.form-group').siblings('.wbs_content').eq(0).slideToggle();
    });

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


    $('.phase_list').select2({
        placeholder: 'Select Phase...',
        theme: 'bootstrap'
    }).on("select2:select", function (e) {
        var selected_element = $(e.currentTarget);
        var id = selected_element.val();
        phase_url = 'activity/phase/' + id;
        $.ajax({
            method: 'GET',
            url: phase_url,
            type: 'json',
            success: function (data) {
                var arr = [], dayArray = [];
                $.each(data, function (index, value) {
                    if ($.inArray(value.id, arr) == -1) {
                        arr.push(value.id);
                        dayArray.push(value);
                    }
                });
                dayArray.sort();
                $('.day_list').html('');
                $.each(dayArray, function (i) {
                    $('.day_list').append('<option></option><option value='+dayArray[i].id+'>'+dayArray[i].title+'</option>');
                });
            }
        })
    });

    $('.day_list').select2({
        placeholder: 'Select Day...',
        theme: 'bootstrap'
    }).on("select2:select", function () {
        var id = $(this).val();

        var date = new Date($('.start_date').val());
        var i;
        while(i <= '0'){
            $('.phase_list:selected').before().attr('data-order');
            date.setDate(date.getDate() + (parseInt(i)-1));
        }
        date.setDate(date.getDate() + (parseInt(id)-1));
        $('.date-span').html(date.toDateString());
        var date_save = date.toISOString().split('T');
        $('.calc_date').val(date_save[0]);

        day_url = '/day/' + id;

        $.ajax({
            method: 'GET',
            url: phase_url+day_url,
            type: 'json',
            success: function (data) {
                $('.wbs').html('');
                $.each(data, function (i, val) {
                    $('.wbs').append('' +
                        '<h3 class="content-box-header bg-default">WBS Name : '+val.title+'</h3>\n'+
                        '<input type="hidden" value="'+val.id+'">\n'+
                        '<fieldset>\n'+
                        '     <div class="wbs_container">\n'+
                        '         <div class="form-group first-group">\n' +
                        '              <div class="col-md-6 col-md-offset-3">\n' +
                        '                  <span class="input-group-btn"><button class="btn btn-blue-alt wbs_detail toggle" type="button"><span>Show Details </span><i class="glyph-icon icon-plus"></i></button></span>\n' +
                        '              </div>\n' +
                        '         </div>\n' +
                        '         <div class="form-group toggle-content wbs_content"></div>\n' +
                        '     </div>\n'+
                        '</fieldset>\n'+
                        '');

                    $.each(val.exercise, function (i) {
                        $('.wbs_container:last').find('.wbs_content').append('' +
                            '<div class="exercise_container">\n'+
                            '    <div class="form-group col-md-offset-3 col-md-6" >\n' +
                            '        <span class="form-control"><strong>Exercise Name: </strong>'+val.exercise[i].title+'</span>\n' +
                            '        <input type="hidden" class="exercise" value="'+val.exercise[i].id+'">'+
                            '    </div>\n'+
                            '    <div class="form-group col-md-offset-3 col-md-2 set-actual-div" >\n' +
                            '        <span class="form-control"><strong>Set: </strong>'+val.exercise[i].pivot.set+'</span>\n' +
                            '        <input type="hidden" class="set" value="'+val.exercise[i].pivot.set+'">'+
                            '    </div>\n'+
                            '    <div class="form-group col-md-2 rep-actual-div" >\n' +
                            '        <span class="form-control"><strong>Rep: </strong>'+val.exercise[i].pivot.rep+'</span>\n' +
                            '        <input type="hidden" class="rep" value="'+val.exercise[i].pivot.rep+'">'+
                            '    </div>\n'+
                            '    <div class="form-group col-md-2" >\n' +
                            '        <span class="form-control"><strong>Rest: </strong>'+val.exercise[i].pivot.rest+'</span>\n' +
                            '        <input type="hidden" class="rest" value="'+val.exercise[i].pivot.rest+'">'+
                            '    </div>\n'+
                            '    <div class="form-group col-md-offset-3 col-md-2 set-done-div" >\n' +
                            '        <input class="form-control sets_done" type="number" placeholder="Sets Done...">\n' +
                            '    </div>\n'+
                            '    <div class="form-group col-md-2 rep-done-div" >\n' +
                            '        <input class="form-control reps_done" type="number" placeholder="Reps Done...">\n' +
                            '    </div>\n'+
                            '    <div class="form-group col-md-2" >\n' +
                            '       <input class="form-control rest_taken" type="number" placeholder="Rest Taken...">\n' +
                            '    </div>\n'+
                            '</div>\n'+
                            '');
                    })
                });
            }
        })
    });



    $('.meal_list').select2({
        placeholder: 'Select Meal...',
        theme: 'bootstrap'
    }).on("select2:select", function (e) {
        var selected_element = $(e.currentTarget);
        var diet_program_id = $('.diet_program_id').val();
        var id = selected_element.val();
        var url = 'activity/dietProgram/' + diet_program_id + '/meal/' + id;
        $.ajax({
            method: 'GET',
            url: url,
            type: 'json',
            success: function (data) {
                $('.meal_detail').prop('disabled', false);
                $('.meal_content').html('');
                $.each(data, function (i) {
                    $('.meal_content').append('' +
                        '<div class="meal_detail_container">\n'+
                        '     <div class="form-group col-md-offset-3 col-md-6" >\n' +
                        '     <span class="form-control"><strong>Food Name: </strong>'+data[i].title+'</span>\n' +
                        '     </div>\n'+
                        '     <div class="form-group col-md-offset-3 col-md-2" >\n' +
                        '         <span class="form-control"><strong>Quantity: </strong>'+data[i].pivot.quantity+'</span>\n' +
                        '     </div>\n'+
                        '     <div class="form-group col-md-2" >\n' +
                        '        <span class="form-control"><strong>Calories: </strong>'+data[i].pivot.calories+'</span>\n' +
                        '     </div>\n'+
                        '     <div class="form-group col-md-2" >\n' +
                        '         <span class="form-control"><strong>Take Time: </strong>'+data[i].pivot.taketime+'</span>\n' +
                        '     </div>\n'+
                        '     <div class="form-group col-md-offset-3 col-md-2" >\n' +
                        '         <input class="form-control" type="number" placeholder="Quantity Taken...">\n' +
                        '     </div>\n'+
                        '     <div class="form-group col-md-2" >\n' +
                        '         <input class="form-control" type="number" placeholder="Calories Estimated...">\n' +
                        '     </div>\n'+
                        '     <div class="form-group col-md-2" >\n' +
                        '         <input class="form-control" type="number" placeholder="Time Taken...">\n' +
                        '     </div>\n'+
                        '</div>'+
                        '');
                });
            }
        })
    });
    $('.calculate_progress').on('click',function () {
        var workout_progress;
        var diet_progress;
        var workout = 0;
        var divider = 0;
        var diet_divider = 0;
        var diet = 0;

        $('.sets_done').each(function () {
            var set_done;
            var set_actual;
            var rep_done;
            var rep_actual;
            set_actual = parseInt($(this).closest('.form-group').siblings('.set-actual-div').find('.set').val());
            rep_actual = parseInt($(this).closest('.form-group').siblings('.rep-actual-div').find('.rep').val());

            set_done = parseInt($(this).val());
            rep_done = parseInt($(this).closest('.form-group').siblings('.rep-done-div').find('.reps_done').val());

            divider++;
            workout += (set_done*rep_done)/(set_actual*rep_actual);
        });


        $('.calories-estimated-div').each(function () {
            var calories_calc = parseInt($(this).find('input').val());
            var calories = parseInt($(this).siblings('.calories-actual-div').find('input').val());
            diet += calories_calc/calories;
            diet_divider++;
        });

        workout_progress = (workout/divider) * 100;
        workout_progress = (Math.round(workout_progress*100)/100).toFixed(2);
        var workout_width  = Math.min(Math.max(parseInt(workout_progress * (parseInt($('.workout-progress').css('width')))/100), 1), parseInt($('.workout-progress').css('width')));

        diet_progress = (diet/diet_divider) * 100;
        diet_progress = (Math.round(diet_progress*100)/100).toFixed(2);
        var diet_width  = Math.min(Math.max(parseInt(diet_progress * (parseInt($('.diet-progress').css('width')))/100), 1), parseInt($('.diet-progress').css('width')));

        console.log(diet_progress);


        if(parseInt(workout_progress) < 25){
            $('.program-progress').find('.workout-progress').attr('data-value',workout_progress).find('.progressbar-value').attr('class','progressbar-value bg-red').animate({'width':workout_width},600).find('.progress-label').html(workout_progress+'%');
        }
        else if(parseInt(workout_progress) >= 25 && parseInt(workout_progress) < 50){
            $('.program-progress').find('.workout-progress').attr('data-value',workout_progress).find('.progressbar-value').attr('class','progressbar-value bg-yellow').animate({'width':workout_width},600).find('.progress-label').html(workout_progress+'%');
        }
        else if(parseInt(workout_progress) >= 50 && parseInt(workout_progress) < 75){
            $('.program-progress').find('.workout-progress').attr('data-value',workout_progress).find('.progressbar-value').attr('class','progressbar-value bg-orange').animate({'width':workout_width},600).find('.progress-label').html(workout_progress+'%');
        }
        else if(parseInt(workout_progress) >= 75 && parseInt(workout_progress) <= 100){
            $('.program-progress').find('.workout-progress').attr('data-value',workout_progress).find('.progressbar-value').attr('class','progressbar-value bg-green').animate({'width':workout_width},600).find('.progress-label').html(workout_progress+'%');
        }
        else{
            $('.program-progress').find('.workout-progress').attr('data-value',workout_progress).find('.progressbar-value').attr('class','progressbar-value bg-blue').animate({'width':workout_width},600).find('.progress-label').html(workout_progress+'%');
        }


        if(parseInt(diet_progress) < 25){
            $('.diet-program-progress').find('.diet-progress').attr('data-value',diet_progress).find('.progressbar-value').attr('class','progressbar-value bg-red').animate({'width':diet_width},600).find('.progress-label').html(diet_progress+'%');
        }
        else if(parseInt(diet_progress) >= 25 && parseInt(diet_progress) < 50){
            $('.diet-program-progress').find('.diet-progress').attr('data-value',diet_progress).find('.progressbar-value').attr('class','progressbar-value bg-yellow').animate({'width':diet_width},600).find('.progress-label').html(diet_progress+'%');
        }
        else if(parseInt(diet_progress) >= 50 && parseInt(workout_progress) < 75){
            $('.diet-program-progress').find('.diet-progress').attr('data-value',diet_progress).find('.progressbar-value').attr('class','progressbar-value bg-orange').animate({'width':diet_width},600).find('.progress-label').html(diet_progress+'%');
        }
        else if(parseInt(diet_progress) >= 75 && parseInt(diet_progress) <= 100){
            $('.diet-program-progress').find('.diet-progress').attr('data-value',diet_progress).find('.progressbar-value').attr('class','progressbar-value bg-green').animate({'width':diet_width},600).find('.progress-label').html(diet_progress+'%');
        }
        else{
            $('.diet-program-progress').find('.diet-progress').attr('data-value',diet_progress).find('.progressbar-value').attr('class','progressbar-value bg-blue').animate({'width':diet_width},600).find('.progress-label').html(diet_progress+'%');
        }

    });

     $('form input').on('keyup',function() {
         var empty = false;
         $('form input').each(function() {
             console.log(7);
             if ($(this).val() === '') {
                 empty = true;
             }
         });

         if (empty) {
             $('.calculate_progress').attr('disabled', 'disabled');
         }
         else {
             $('.calculate_progress').removeAttr('disabled');
         }
     });
});