$(document).ready(function () {
    /***
     * Select2 Instialization
     */

    var phase_url;
    var day_url;
    var wbs_url;


    $('.tab-content').on('click','.wbs_detail', function () {
        $(this).find('i').toggleClass('icon-plus icon-minus');
        $(this).closest('.form-group').siblings('.wbs_content').slideToggle();
    });

    $('.meal_detail').on('click', function () {
        $(this).find('i').toggleClass('icon-plus icon-minus');
        $(this).closest('.form-group').siblings('.meal_detail-div').find('.toggle-content').slideToggle();
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
    }).on("select2:select", function (e) {
        var selected_element = $(e.currentTarget);
        var id = selected_element.val();
        day_url = '/day/' + id;
        $.ajax({
            method: 'GET',
            url: phase_url+day_url,
            type: 'json',
            success: function (data) {
                $('.wbs_container').html('');
                $.each(data, function (i, val) {
                    $('.wbs_container').append('' +
                        '<div class="form-group">\n' +
                        '     <label class="col-sm-3 control-label">Wbs Name</label>\n' +
                        '     <div class="col-sm-6">\n' +
                        '          <span class="form-control">'+val.title+'</span>\n' +
                        '     </div>\n' +
                        '</div>\n'+
                        '<div class="form-group">\n' +
                        '     <div class="col-md-6 col-md-offset-3">\n' +
                        '          <span class="input-group-btn"><button class="btn btn-blue-alt wbs_detail toggle" type="button"><span>Show Details </span><i class="glyph-icon icon-plus"></i></button></span>\n' +
                        '     </div>\n' +
                        '</div>\n' +
                        '');
                    $.each(val.exercise, function (i) {
                        console.log(val.exercise);
                        $('.wbs_container').append('' +
                            '<div class="form-group toggle-content wbs_content">\n'+
                            '    <div class="form-group col-md-offset-3 col-md-6" >\n' +
                            '       <span class="form-control"><strong>Exercise Name: </strong>'+val.exercise[i].title+'</span>\n' +
                            '       <input type="hidden" class="exercise" value="'+val.exercise[i].id+'">'+
                            '    </div>\n'+
                            '    <div class="form-group col-md-offset-3 col-md-2 set-actual-div" >\n' +
                            '         <span class="form-control"><strong>Set: </strong>'+val.exercise[i].pivot.set+'</span>\n' +
                            '         <input type="hidden" class="set" value="'+val.exercise[i].pivot.set+'">'+
                            '    </div>\n'+
                            '    <div class="form-group col-md-2 rep-actual-div" >\n' +
                            '        <span class="form-control"><strong>Rep: </strong>'+val.exercise[i].pivot.rep+'</span>\n' +
                            '        <input type="hidden" class="rep" value="'+val.exercise[i].pivot.rep+'">'+
                            '    </div>\n'+
                            '    <div class="form-group col-md-2" >\n' +
                            '         <span class="form-control"><strong>Rest: </strong>'+val.exercise[i].pivot.rest+'</span>\n' +
                            '         <input type="hidden" class="rest" value="'+val.exercise[i].pivot.rest+'">'+
                            '    </div>\n'+
                            '    <div class="form-group col-md-offset-3 col-md-2 set-done-div" >\n' +
                            '          <input class="form-control sets_done" type="number" placeholder="Sets Done...">\n' +
                            '    </div>\n'+
                            '    <div class="form-group col-md-2 rep-done-div" >\n' +
                            '         <input class="form-control reps_done" type="number" placeholder="Reps Done...">\n' +
                            '    </div>\n'+
                            '    <div class="form-group col-md-2" >\n' +
                            '         <input class="form-control rest_taken" type="number" placeholder="Rest Taken...">\n' +
                            '    </div>\n'+
                            '')
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
        var workout_progress = 0;
        var workout = 0;
        var divider = 0;

        $('.sets_done').each(function () {
            var set_done;
            var set_actual;
            var rep_done;
            var rep_actual;
            set_actual = parseInt($(this).closest('.form-group').siblings('.set-actual-div').find('.set').val());
            set_done = parseInt($(this).val());

            rep_actual = parseInt($(this).closest('.form-group').siblings('.rep-actual-div').find('.rep').val());
            rep_done = parseInt($(this).closest('.form-group').siblings('.rep-done-div').find('.reps_done').val());

            divider++;
            workout += (set_done*rep_done)/(set_actual*rep_actual);
            console.log(workout);
        });

        $('.sets_done').each(function () {
            var set_done;
            var set_actual;
            var rep_done;
            var rep_actual;
            set_actual = parseInt($(this).closest('.form-group').siblings('.set-actual-div').find('.set').val());
            set_done = parseInt($(this).val());

            rep_actual = parseInt($(this).closest('.form-group').siblings('.rep-actual-div').find('.rep').val());
            rep_done = parseInt($(this).closest('.form-group').siblings('.rep-done-div').find('.reps_done').val());

            divider++;
            workout += (set_done*rep_done)/(set_actual*rep_actual);
        });

        workout_progress = (workout/divider) * 100;
        workout_progress = (Math.round(workout_progress*100)/100).toFixed(2);

        $('.program-progress').find('.progress-span').html(workout_progress+'%');




    });




});