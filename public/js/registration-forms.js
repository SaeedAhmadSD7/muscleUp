jQuery(document).ready(function() {

    /*      Background Image Changer	*/

   $('body').backstretch("/images/background/trainee-registration-bg.jpg");

    $('.btn-date').on('click', function(e) {
        e.preventDefault();
        $.dateSelect.show({
            element: 'input[name="date-birth"]'
        });
    });


    $('.p-number').intlTelInput({
        // allowDropdown: false,
        // autoHideDialCode: false,
        // autoPlaceholder: "off",
        // dropdownContainer: "body",
        // excludeCountries: ["us"],
        // formatOnDisplay: false,
        // geoIpLookup: function(callback) {
        /*   $.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
             var countryCode = (resp && resp.country) ? resp.country : "";
             callback(countryCode);
           });
         }, */
        // initialCountry: "auto",
        // nationalMode: false,
        // onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
        // placeholderNumberType: "MOBILE",
        // preferredCountries: ['cn', 'jp'],
         separateDialCode: true,
        utilsScript: "js/utils.js"
    });

    $('.registration-form fieldset:first-child').fadeIn('slow');


    // next step
    $('.registration-form .next-btn').on('click', function() {
        var parent_fieldset = $(this).parents('fieldset');

        parent_fieldset.fadeOut(400, function() {
                $(this).next().fadeIn();
            });

    });

    // previous step
   $('.registration-form .previous-btn').on('click', function() {
        $(this).parents('fieldset').fadeOut(400, function() {
            $(this).prev().fadeIn();
        });
    });

    // submit
  /*  $('.registration-form').on('submit', function(e) {

        $(this).find('input[type="text"], input[type="password"], textarea').each(function() {
            if( $(this).val() == "" ) {
                e.preventDefault();
                $(this).addClass('input-error');
            }
            else {
                $(this).removeClass('input-error');
            }
        });

    }); */


});
