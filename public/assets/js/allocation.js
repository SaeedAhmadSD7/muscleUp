$(document).ready(function() {
    $('.btn-date').DateTimePicker();

    $('.data_value').each( function () {
        $(this).val($(this).attr('data-value'));
    });

    $('.allocate-program').validate({
        rules: {
            trainee_id: "required",
            program_id: "required",


            diet_program_id: {
                required: true

            },
            start_date: {
                required: true
            }

        },
        messages: {
            trainee_id: "Please select trainee",
            program_id: "Please select program",
            diet_program_id: "Please select Diet program",
            start_date: "Please select staring date"
        }
    });
});