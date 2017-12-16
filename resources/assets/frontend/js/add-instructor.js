$(document).ready(function() {
    $('.btn-date').DateTimePicker();
    var counter = 1;

    $('.btn-add-exp').on('click',function () {
        $('.exp_years-div:last').clone().find('input').val('').end().appendTo('.exp_field');
        $('.exp_desc-div:last').clone().find('input').val('').end().appendTo('.exp_field');
    });

    $('.add-instructor-form').validate({
        rules: {
            first_name: "required",
            last_name: "required",


            email: {
                required: true,
                email: true
            },
            dob: {
                required: true
            },
            phone_number: {
                required: true,
                minlength: 7,
                maxlength:15
            },
            joining_date: {
                required: true,
                },
            quit_date: {
                required: true,
                },
            previous_salary: {
                required: true,
            },
            joining_salary: {
                required: true,
            },
            exp_years: {
                required: true,
            },
            exp_description: {
                required: true,
            },


        },
        messages: {
            first_name: "Please enter your first name",
            last_name: "Please enter your last name",
            email: "Please enter a valid email address",
            dob:"Please select your date of birth",
            dial_code:"",
            phone_number:"Please enter valid number ",
            joining_date:"Please enter Joining Date",
            quit_date:"Please select you Quit date",
            previous_salary: "Please enter your previous salary",
            joining_salary:"Please enter your joining salary",
            exp_years:"Please enter your experience year",
            exp_description:"Please enter your experience description"

        },
        errorElement: "em",
        errorPlacement: function ( error, element ) {

            error.addClass("help-block");

            if ( element.prop('type') === 'checkbox') {
                error.insertAfter(element.parent('label'));
            } else {
                error.insertAfter(element);
            }
        },
        highlight: function (element) {
            $(element).parent('.text-field').addClass('has-error').removeClass('text-field').children().addClass('error');
            $(element).parent('.number-div').addClass('number-error').removeClass('number-div').children().addClass('error');
            $(element).parent('.dial-code-div').addClass('dial-code-error').removeClass('dial-code-div').children().addClass('error');
        },
        unhighlight: function (element) {
            $(element).parent('.has-error').addClass('text-field').removeClass('has-error').children().removeClass('error');
            $(element).parent('.number-error').addClass('number-div').removeClass('number-error').children().removeClass('error');
            $(element).parent('.dial-code-error').addClass('dial-code-div').removeClass('dial-code-error').children().removeClass('error');
        }
    });

});
