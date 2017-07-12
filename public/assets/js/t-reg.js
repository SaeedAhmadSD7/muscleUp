 $(document).ready(function() {
     $('.btn-date').DateTimePicker();

     $('.contact-form').validate({
         rules: {
             first_name: "required",
             last_name: "required",


             email: {
                 required: true,
                 email: true
             },
             birth_date: {
                 required: true,
             },
             phone_number: {
                 required: true,
                 minlength: 7,
                 maxlenght:15,
             },
             address: {
                 required: true,
                 maxlenght:250,
             },

             //     agree: "required"
         },
         messages: {
             first_name: "Please enter your first name",
             last_name: "Please enter your last name",
             email: "Please enter a valid email address",
             birth_date:"please select your date of birth",
             phone_number:"please enter valid number ",
             address:"please enter you address"
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
         highlight: function ( element) {
             $( element ).parents( ".form-group" ).addClass( "has-error" ).removeClass('text-field').children().addClass('error');
         },
         unhighlight: function (element) {
             $( element ).parents( ".form-group" ).addClass( 'text-field' ).removeClass( "has-error" ).children().removeClass('error');
         }
     });

 });

