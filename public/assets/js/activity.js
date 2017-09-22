$(document).ready(function () {
    /***
     * Select2 Instialization
     */

    var phase_url;
    var day_url;
    var wbs_url;


    $('.wbs_detail').on('click', function () {
        $(this).find('i').toggleClass('icon-plus icon-minus');
        $(this).closest('.form-group').siblings('.exercise_detail-div').find('.toggle-content').slideToggle();
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
                $('.day_list').html('');
                $.each(data, function (i) {
                    $('.day_list').append('<option></option><option value='+data[i].id+'>'+data[i].title+'</option>');
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
        console.log(phase_url+day_url);
        $.ajax({
            method: 'GET',
            url: phase_url+day_url,
            type: 'json',
            success: function (data) {
                $('.wbs_list').html('');
                $.each(data, function (i) {
                    $('.wbs_list').append('<option></option><option value='+data[i].id+'>'+data[i].title+'</option>');
                });
            }
        })
    });

    $('.wbs_list').select2({
        placeholder: 'Select Wbs...',
        theme: 'bootstrap'
    }).on("select2:select", function (e) {
        var selected_element = $(e.currentTarget);
        var id = selected_element.val();
        wbs_url = '/wbs/' + id;
        console.log(phase_url+day_url+wbs_url);
        $.ajax({
            method: 'GET',
            url: phase_url+day_url+wbs_url,
            type: 'json',
            success: function (data) {
                $('.wbs_content').html('');
                $.each(data, function (i) {
                    $('.wbs_detail').prop('disabled', false);
                    $('.wbs_content').append('' +
                        '<div class="form-group col-md-offset-3 col-md-6" >\n' +
                        '    <span class="form-control"><strong>Exercise Name: </strong>'+data[i].title+'</span>\n' +
                        '</div>\n'+
                        '<div class="form-group col-md-offset-3 col-md-2" >\n' +
                        '    <span class="form-control"><strong>Reps: </strong>'+data[i].pivot.set+'</span>\n' +
                        '</div>\n'+
                        '<div class="form-group col-md-2" >\n' +
                        '    <span class="form-control"><strong>Rest: </strong>'+data[i].pivot.rep+'</span>\n' +
                        '</div>\n'+
                        '<div class="form-group col-md-2" >\n' +
                        '     <span class="form-control"><strong>Rest: </strong>'+data[i].pivot.rest+'</span>\n' +
                        '</div>\n'+
                        '<div class="form-group col-md-offset-3 col-md-2" >\n' +
                        '    <input class="form-control" type="number" placeholder="Reps Done...">\n' +
                        '</div>\n'+
                        '<div class="form-group col-md-2" >\n' +
                        '    <input class="form-control" type="number" placeholder="Sets Done...">\n' +
                        '</div>\n'+
                        '<div class="form-group col-md-2" >\n' +
                        '     <input class="form-control" type="number" placeholder="Rest Taken...">\n' +
                        '</div>\n'+
                        '');
                });
            }
        })
    });


    $('.meal_list').select2({
        placeholder: 'Meal List...',
        theme: 'bootstrap'
    }).on("select2:select", function (e) {
        var selected_element = $(e.currentTarget);
        var id = selected_element.val();
        day_url = '/day/' + id;

    });
    console.log(trainee);




});