 $(document).ready(function() {
     $('.btn-date').DateTimePicker();

     $('.add-trainee-form').validate({
         rules: {
             first_name: "required",
             last_name: "required",


             email: {
                 required: true,
                 email: true
             },
             birth_date: {
                 required: true
             },
             dial_code:{
               required: true
             },
             phone_number: {
                 required: true,
                 minlength: 7,
                 maxlength:15
             },
             address: {
                 required: true,
                 maxlenght:250
             }
         },
         messages: {
             first_name: "Please enter your first name",
             last_name: "Please enter your last name",
             email: "Please enter a valid email address",
             birth_date:"Please select your date of birth",
             dial_code:"",
             phone_number:"Please enter valid number ",
             address:"Please enter you address"
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

