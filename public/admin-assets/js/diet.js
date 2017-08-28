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
    $('.tab-content').on('input','.meal_number_input, .meal_name_input',function () {
        if($(this).val()) {
            $(this).siblings('.input-group-btn').children().prop('disabled',false);
        }
        else{
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
        meal_content.clone().appendTo($(this).closest('.form-group').siblings('.meal_container')).find('.time_take_input').timepicker({minuteStep: 1,defaultTime: false, showMeridian: false}).parent().siblings('.calories-div').find('.calories').TouchSpin({min: 0, max: 100});
    });

    $('.calories').TouchSpin({
        min: 0,
        max: 100
    });
    $('#assignedTable').on('click','.time_take_input',function(){
        $('.time_take_input').timepicker({minuteStep: 1,defaultTime: false, showMeridian: false})    });

    $('.time_take_input').timepicker({
        minuteStep: 1,
        defaultTime: false,
        showMeridian: false,
    });

    $('.submit-btn').on('submit',function(e) {
        e.preventDefault();
       var formData = $('.diet-program').serialize() ;
        console.log(formData);
    });

        $('.df').on('submit', function () {
            //e.preventDefault();
            var formData = $('.diet-program').serialize();
            console.log(formData.split('&'));

        });
    var id=0;
    $("#assignedTable").on('click', '.remove_row', function () {
        $(this).closest('tr').remove();
        countTableRows();
        id--;
        console.log("Del row now id is "+id);
    });
    $(document).on('click', '#assign', function () {
       if(id==1){
           console.log(id);
       }
        else{
        id++;
        var tr = $('#tmpRow').clone().attr('id','row'+id).show().stop()
        //var tr = $('#tmpRow').clone().show().stop()
            .appendTo('#assignedTable tbody');
        //$('#assignedTable').first('td span .sr').text(id);
        $('#row'+id+' span.sr').text(id);
        //$('#row'+id+'').child('td span.sr').text(id);
        //console.log("Add row now id is "+id);
       }
       });
    $(document).one('click', '#assign', function () {
        id++;
        var tr = $('#tmpRow').clone().attr('id','row'+id).show().stop()
        //var tr = $('#tmpRow').clone().show().stop()
            .appendTo('#assignedTable tbody');
        //$('#assignedTable').first('td span .sr').text(id);
        $('#row'+id+':eq(0) span.sr').text(id);
        //$('#row'+id+'').child('td span.sr').text(id);
        //console.log("Add row now id is "+id);
    });
    function countTableRows() {
//        var serialNumber = $("#assignedTable").find('tr').length;
        $("#assignedTable tr").each(function (i) {
            if (i >0) {
                $(this).attr('id','row'+i);
                $(this).find('td:first span').html(i);
            }
        });
    }
    //$("#food_name").change(function(){
        $("#assignedTable").delegate(".food_name", "change", function(){
        var cal=$(this).find(':selected').data('calories');
        //$(this).parent().parent().children().find('input #calories').val(cal);
        var qty=$(this).parent().siblings('#qtyRow').find('#quantity').val();
        var newCal=cal*qty;
        $(this).parent().siblings('#caloryRow').find('#calories').val(newCal);
    });
        //var meal = $('#meal').html();
        //var food = $('food').clone();
        //var quantity = $('quantity').clone();
        //var time = $('time').clone();
        //var calories = $('calories').clone();
        //var rb = $('rb').clone();
        //console.log(meal);

        //<input type='number' style='width:60px' id='serial' readonly value=" + id + ">
        //$('#assignedTable').append(html);
        //$('#assignedTable').append("<tr><td style='width:20px;text-align:center;'><span id='serial'>" + id + "<span></td><td><select class='form-control' name='meal_id[]' id='meal_no'>  @foreach($meals as $meal)<option VALUE='{{$meal->id}}'>{{$meal->name}}</option>@endforeach</select> </td><td><select class='form-control' id='food_name' name='food_name[]'><option>Egg</option><option>Fruits</option><option>Daliya</option></select></td><td><input class='form-control' type='number' id='quantity' name='quantity' placeholder='Qrt:' style='width:60px;' > </td> <td> <input class='form-control' type='text' id='calories' name='calories' placeholder='Cal' style='width:60px;'></td><td><input class='form-control time_take_input'  type='text' name='duration' placeholder='Time to take... (Optional)' style='width:60px' readonly> </td> <td> <button class='remove_row btn btn-danger' type='button'><span class='glyphicon glyphicon-remove-sign'></span></button></td>");
        //var html = row.attr('id','row'+id);
        //$('#assignedTable .fieldR').append($row);

    //$(document).ready(function() {
    //    $("#form-field input[name='status']").click(function() {
    //        if($('input:radio[name=status]:checked').val() == "Yes"){
    //            $('.fieldR').css('display','table-row');
    //
    //        }
    //
    //        if($('input:radio[name=status]:checked').val() == "No"){
    //            $('.fieldR').css('display','none');
    //        }
    //    });
    //
    //    //$("input:radio:first").prop("checked", true).trigger("click");
    //
    //});


    //$('#df').on('submit', function (e) {
    //    e.preventDefault();
    //    var formData = $('.diet-program').serialize();
    //    //formData = formData.split('&');
    //    console.log(formData.split('&'));
    //    $('#dda').append(formData);
    //
    //});
});
