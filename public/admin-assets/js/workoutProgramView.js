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
                            '    </div>\n'+
                            '    <div class="form-group col-md-offset-3 col-md-2 set-actual-div" >\n' +
                            '        <span class="form-control"><strong>Set: </strong>'+val.exercise[i].pivot.set+'</span>\n' +
                            '    </div>\n'+
                            '    <div class="form-group col-md-2 rep-actual-div" >\n' +
                            '        <span class="form-control"><strong>Rep: </strong>'+val.exercise[i].pivot.rep+'</span>\n' +
                            '    </div>\n'+
                            '    <div class="form-group col-md-2" >\n' +
                            '        <span class="form-control"><strong>Rest: </strong>'+val.exercise[i].pivot.rest+'</span>\n' +
                            '    </div>\n'+
                            '</div>\n'+
                            '');
                    })
                });
            }
        })
    });
});