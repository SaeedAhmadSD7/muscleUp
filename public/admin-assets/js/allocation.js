$(document).ready(function () {

    var id = $('#assignedTable tbody tr').length;

    $("#assignedTable").on('click', '.remove_row', function () {
        $(this).closest('tr').remove();
        countTableRows();
        id--;
        console.log("Del row now id is " + id);
    });

    $(document).on('click', '#assign', function () {
        id++;
        var tr = $('#tmpRow').clone().attr('id', 'row' + id).show().stop().appendTo('#assignedTable tbody');
        $('#row' + id + ' span.sr').text(id);
    });

    function countTableRows() {
        $("#assignedTable tr").each(function (i) {
            if (i > 0) {
                $(this).attr('id', 'row' + i);
                $(this).find('td:first span').html(i);
            }
        });
    }

    $('#assignedTable').on('change','.food_name', function () {
        var cal = $(this).find(':selected').data('calories');
        var qty = $(this).parent().siblings('#qtyRow').find('#quantity').val();
        var newCal = cal * qty;
        $(this).parent().siblings('#caloryRow').find('#calories').val(newCal);
    });

    $('#assignedTable').on('input','.quantity', function () {
        var qty = $(this).val();
        var cal = $(this).parent().siblings('.foodRow').find('.food_name option:selected').data('calories');
        var newCal = cal * qty;
        $(this).parent().siblings('#caloryRow').find('#calories').val(newCal);
    });

    //
    $('.day_name').each( function () {
        $(this).val($(this).attr('data-value'));
    });

    $('.day_list').select2({
        placeholder: 'Select Day...',
        theme: 'bootstrap'
    })
    $('.allocation-program').validate({
        rules: {
            employee_id: "required",
            trainee_id: "required",


        },
        messages: {
            employee_id: "Please select Employee",
            trainee_id: "Please select Trainee",
        }
    });
});
