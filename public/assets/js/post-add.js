$(document).ready(function () {
    $('.btn-open-time').DateTimePicker();
    $('.btn-close-time').DateTimePicker();

    function formatState(country) {
        if (!country.id) {
            return country.text;
        }
        var $state = $('<span><img src="/assets/packages/countries/flags/' + country.element.dataset.code + '.png" class="img-flag"/> ' + country.text + '</span>');
        return $state;
    }
    $('.country_list').val($('.country').val()).trigger('change');

    $('.country_list').select2({
        placeholder: "Country...",
        theme: "bootstrap",
        templateResult: formatState,
        templateSelection: formatState
    });

    $('.country_list').on('change', function () {
        var dial_code = $(this).find('option:selected').attr('data-dialcode');
        $('.dial_code').val(dial_code).valid();
        $(this).valid();
    });

    $('.profile_pic').on('change',function () {
       $('.prof_stat_text').html(' File Selected');
    });


    $('.gym-reuqest-form').validate({
        ignore: null,
        rules: {
            name: 'required',
            email: {
                required: true,
                email: true
            },
            num_branches: {
                required: true
            },
            country: {
                required: true
            },
            city: {
                required: true
            },
            dial_code: 'required',
            phone_number: {
                required: true,
                minlength: 7,
                maxlength: 15
            },
            address: {
                required: true,
                maxlength: 255
            }
        },
        messages: {
            name: 'Please enter your Gym name',
            email: 'Please enter a valid email address',
            num_branches: "Please enter your Gym's number of branches",
            dial_code: "",
            phone_number: 'Please enter your contact number',
            country: 'Please select the country in which you reside',
            city: 'Please select the your city',
            address: "Please enter your Gym's address"
        },
        errorElement: 'span',
        errorPlacement: function (error, element) {

            error.addClass("help-block");

            if ($(element).attr('class').split(' ')[0] === 'country_list') {
                error.insertAfter($('.select2'));
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