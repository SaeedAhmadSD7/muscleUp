$(document).ready(function () {

    $('.user_login').validate({
        rules: {
        //     firstname: "required",
        //     lastname: "required",
        //     username: {
        //         required: true,
        //         minlength: 2
        //     },
        //     password: {
        //         required: true,
        //         minlength: 5
        //     },
        //     confirm_password: {
        //         required: true,
        //         minlength: 5,
        //         equalTo: "#password"
        //     },
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 8
            }
        //     agree: "required"
        },
        messages: {
        //     firstname: "Please enter your firstname",
        //     lastname: "Please enter your lastname",
        //     username: {
        //         required: "Please enter a username",
        //         minlength: "Your username must consist of at least 2 characters"
        //     },
        //     confirm_password: {
        //         required: "Please provide a password",
        //         minlength: "Your password must be at least 5 characters long",
        //         equalTo: "Please enter the same password as above"
        //     },
            email: "Please enter a valid email address",
            password: {
                required: "Please enter your password",
                minlength: "Your password must be atleast 8 characters long"
            }

            //     agree: "Please accept our policy"
        },
        errorElement: "em",
        errorPlacement: function ( error, element ) {
            // Add the `help-block` class to the error element
            error.addClass("help-block");

            if ( element.prop( "type" ) === "checkbox" ) {
                error.insertAfter( element.parent( "label" ) );
            } else {
                error.insertAfter( element );
            }
        },
        highlight: function ( element, errorClass, validClass ) {
            $( element ).parents( ".form-group" ).addClass( "has-error" ).removeClass('text-field').children().addClass('error');
        },
        unhighlight: function (element, errorClass, validClass) {
            $( element ).parents( ".form-group" ).addClass( 'text-field' ).removeClass( "has-error" ).children().removeClass('error');
        }
    });
});