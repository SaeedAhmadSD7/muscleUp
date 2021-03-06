$(document).ready(function () {

    $('.user_login').validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 8
            }
        },
        messages: {
            email: "Please enter a valid email address",
            password: {
                required: "Please enter your password",
                minlength: "Your password must be atleast 8 characters long"
            }

        },
        errorElement: "em",
        errorPlacement: function ( error, element ) {

            error.addClass("help-block");

            if ( element.prop( "type" ) === "checkbox" ) {
                error.insertAfter( element.parent("label") );
            } else {
                error.insertAfter( element );
            }
        },
        highlight: function ( element) {
            $(element).parent('.text-field').addClass('has-error').removeClass('text-field').children().addClass('error');
        },
        unhighlight: function (element) {
            $(element).parent('.has-error').addClass('text-field').removeClass('has-error').children().removeClass('error');
        }
    });
});