$(document).ready(function () {

    var geocoder = new google.maps.Geocoder;
    var deferred = $.Deferred();
    var latitude;
    var longitude;
    var country;
    var city;


    function formatState(country) {
        if (!country.id) {
            return country.text;
        }
        var $state = $('<span><img src="/assets/packages/countries/flags/' + country.element.dataset.code + '.png" class="img-flag"/> ' + country.text + '</span>');
        return $state;
    }

    $('.country_list').select2({
        placeholder: "Country...",
        theme: "bootstrap",
        templateResult: formatState,
        templateSelection: formatState
    });

    $('.country_list').on('change', function () {
        var dial_code = $(this).find('option:selected').attr('data_dialcode');
        $('.dial_code').val(dial_code);
    });


    $('.geo-location').on('click', function () {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, showError);
        } else {
            alert('Unable to get your position.\nPlease try again.');
        }
    });

    function showPosition(position) {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        $('.latitude').val(latitude);
        $('.longitude').val(longitude);

        $.when(geocodeLatLng(geocoder)).then(function () {
            $.ajax({
                url: '/assets/packages/countries/countries.json',
                method: 'GET',
                success: function (data) {
                    for (var i = 0; i < data.length; i++) {
                        if ( data[i].name === country ){
                            $('.dial_code').val(data[i].dial_code);
                        }
                    }
                }
            });
        });

    }

    function showError(error) {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                alert('You denied permission for request.\nPlease refresh and try again.');
                break;
            case error.POSITION_UNAVAILABLE:
                alert('Unable to get your location.\nPlease try again.');
                break;
            case error.TIMEOUT:
                alert('Location request timed out.\nPlease try again.');
                break;
            case error.UNKNOWN_ERROR:
                alert('An unknown error occurred.');
                break;
        }
    }


    function geocodeLatLng(geocoder) {
        var latlng = {lat: parseFloat(latitude), lng: parseFloat(longitude)};
        geocoder.geocode({'location': latlng}, function (results, status) {
            if (status === 'OK') {
                if (results[0]) {
                    for (var ac = 0; ac < results[0].address_components.length; ac++) {
                        var component = results[0].address_components[ac];
                        switch(component.types[0]) {
                            case 'locality':
                                city = component.long_name;
                                break;
                            case 'country':
                                country = component.long_name;
                                break;
                        }
                    }
                    deferred.resolve();
                    $('.city').val(city);
                    $('.address').val(results[0].formatted_address);
                    $('.country_list').val(country).trigger('change');

                } else {
                    alert('Unable get your current address.\nPlease try again.');
                }
            } else {
                alert('Address lookup failed due to : ' + status);
            }
        });
        return deferred.promise();

    }
});