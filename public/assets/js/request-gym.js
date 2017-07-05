$(document).ready(function () {

    function formatState (country) {
        if (!country.id) { return country.text; }
        var $state = $('<span><img src="/assets/packages/countries/flags/' + country.element.value + '.png" class="img-flag"/> ' + country.text + '</span>'
        );
        return $state;
    }

    $('.country_list').select2({
        placeholder: "Country...",
        theme: "bootstrap",
        templateResult: formatState,
        templateSelection: formatState
    });

    $('.country_list').on('change',function () {
        var dial_code = $(this).find('option:selected').attr('data-dialcode');
        $('.dial_code').val(dial_code);
    });

});