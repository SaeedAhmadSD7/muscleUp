// $(document).ready(function () {
//
//     /***
//      * Media Query Condition for checking width
//      */
//     $(function() {
//         $(window).resize(function(){
//             if(Modernizr.mq('(max-width: 900px)')){
//                 $('.tab-content').find('.phase_detail').html('<span class="input-group-btn"><i class=" day_detail_icon glyph-icon icon-plus"></i></span>');
//                 $('.tab-content').find('.day_detail').html('<i class=" day_detail_icon glyph-icon icon-plus"></i>');
//             }
//             else{
//                 $('.tab-content').find('.phase_detail').html('<span class="input-group-btn">Add Details</span>');
//                 $('.tab-content').find('.day_detail').html('<span>Add Details  </span><i class=" day_detail_icon glyph-icon icon-plus"></i>');
//             }
//         }).resize();
//     });
//
//     /***
//      * Cloned Div for future duplication
//      */
//     var cloned_phase = $('.phase').clone();
//     var clone_day = $('.day').clone();
//     var clone_exercise_list = $('.exercise-div').clone();
//
//
//     /***
//      * Select2 Instialization
//      */
//     $('.exercise_list').select2({
//         placeholder:'Exercise...',
//         theme: 'bootstrap'
//     });
//
//     /***
//      * Enable Day Detail or Phase Detail When Phase Name or Day Name Entered
//      */
//     $('.tab-content').on('input','.phase_name, .day_name',function () {
//         if($(this).val()) {
//             $(this).siblings('.input-group-btn').children().prop('disabled',false);
//         }
//         else{
//             $(this).siblings('.input-group-btn').children().prop('disabled',true);
//         }
//     });
//
//     /***
//      * Phase Detail Modal Load
//      */
//     $('.tab-content').on('click','.phase_detail',function () {
//         var phase_name_val = $(this).parent().siblings('.phase_name').val();
//         $(this).closest('.input-group').siblings('.modal').find('.modal-title').html(phase_name_val);
//         $(this).closest('.input-group').siblings('.phase_details_modal').modal({
//             keyboard: 'false',
//             backdrop: 'static'
//         })
//     });
//     /***
//      * Modal Hide
//      */
//     $('.tab-content').on('click','.modal_close, .close',function () {
//         $(this).closest('.phase_details_modal').modal('hide');
//     });
//
//
//
//
//     /***
//      * Day Detail Toggle Menu
//      */
//     $('.tab-content').on('click','.day_detail', function () {
//         $(this).find('i').toggleClass('icon-plus icon-minus');
//         $(this).closest('.day_name-div').siblings('.day_detail-div').slideToggle();
//     });
//
//     $('.tab-content').on('click','.exercise_detail_btn', function () {
//         $(this).find('i').toggleClass('icon-plus icon-minus');
//         $(this).parent().siblings('.exercise_list-div').find('.exercise_detail-div').slideToggle();
//     });
//
//     $('.tab-content').on('select2:selecting','.exercise_list',function() {
//         $(this).closest('.exercise_list-div').siblings('.exercise_detail-btn-div').find('.exercise_detail_btn').prop('disabled',false);
//     });
//
//
//
//
//     /***
//      * Add Phase Button
//      */
//
//     $('.tab-content').on('click','.add-phase',function () {
//         cloned_phase.clone().insertAfter('.phase:last').find('.exercise_list').select2({placeholder:'Exercise...',theme: 'bootstrap'}).parent().siblings('.exercise_detail-div').find('.exercise_detail-input').TouchSpin({min: 0, max: 100});
//         // console.log($('exercise_list'))
//     });
//
//
//     /***
//      * Add Day Button
//      */
//     $('.tab-content').on('click','.add-day',function () {
//
//         clone_day.clone().appendTo($(this).closest('.form-group').siblings('.day')).find('.exercise_list').select2({placeholder:'Exercise...',theme: 'bootstrap'}).parent().siblings('.exercise_detail-div').find('.exercise_detail-input').TouchSpin({min: 0, max: 100})
//     });
//
//     $('.tab-content').on('click','.add-exercise',function () {
//         clone_exercise_list.clone().insertAfter($(this).parent().siblings('.exercise-div:last')).find('.exercise_list').select2({placeholder:'Exercise...',theme: 'bootstrap'}).parent().siblings('.exercise_detail-div').find('.exercise_detail-input').TouchSpin({min: 0, max: 100})
//     });
//
//
//     $('.exercise_detail-input').TouchSpin({
//         min: 0,
//         max: 100
//     });
//
//
// });


$(document).ready(function () {

    if ($('.empty').val()) {
        var table = $('.table-phase').DataTable({
            paging: false,
            responsive: true,
            "autoWidth": false,
            columnDefs: [{
                className: 'default-control',
                orderable: false,
                targets: 0
            }],
            order: [[1, 'asc']],
            "info": false
        });
    } else {
        $.extend(true, $.fn.dataTable.defaults, {
            "searching": false,
            "ordering": false,
            "info": false,
            "paging": false
        });
        $('.table-phase').DataTable();
    }

    function format() {
        console.log(7);
        return '<table cellspacing="0" class="table table-phase table-striped table-bordered responsive no-wrap" id="datatable-responsive">' +
                    '<thead>' +
                        '<tr>' +
                            '<th></th>' +
                            '<th>Day Number</th>' +
                            '<th>Day Name</th>' +
                            '<th>Number of Exercises</th>' +
                        '</tr>' +
                    '</thead>' +
                    '<tbody>' +
                        '<tr>' +
                            '<td class="details-control" style="text-align: center;"><img src="http://i.imgur.com/SD7Dz.png"></td>' +
                            '<td>Day 1</td>' +
                            '<td>Biceps Day</td>' +
                            '<td>5</td>' +
                        '</tr>' +
                    '</tbody>' +
                '</table>';
    }


    /* Add event listener for opening and closing details
    * Note that the indicator for showing which row is open is not controlled by DataTables,
    * rather it is done here
    */
    $('.table-phase tbody').on('click', '.details-control', function () {
        // console.log(7);

        var tr = $(this).closest('tr');
        var row = table.row(tr);

        // if (row.child.isShown()) {
        //     // This row is already open - close it
        //     row.child.hide();
        //     tr.removeClass('shown');
        // }
        // else {
            // Open this row
            row.child(format()).show();
            tr.addClass('shown');
        // }
        //     // else {
        //
        //         $(this).attr('src',"http://i.imgur.com/d4ICC.png");
        //         console.log(format());
        //         // row.children()..show();
        //
        //         // oTable.fnOpen(nTr, format(), 'details');
        //         // oInnerTable = $(".table-phase" + iTableCounter).dataTable({
        //         //     "bJQueryUI": true,
        //         //     "sPaginationType": "full_numbers"
        //         // });
        //         // iTableCounter = iTableCounter + 1;
        //     // }
        // });

    });
});




// $(document).ready(function() {
//     $('.dataTables_filter input').attr("placeholder", "Search...");
//     console.log({{$phases}});
// });
