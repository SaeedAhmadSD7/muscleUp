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

    $('.registration-form ').fadeIn('slow');



});
