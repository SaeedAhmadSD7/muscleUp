
$(document).ready(function () {
    var url = '/assets/json/countries.json';
    $.getJSON(url, function(data) {
        // console.log(data);

        $.each (data, function(index ,key) {
            $('<option value="' + key.code + '">' + key.name+ '</option>').clone().appendTo('.country_list');
        });

    });
    $(".country_list").select2();
    // function countries_list () {
    //     var url = '/assets/json/countries.json';
    //
    //     $.getJSON(url, function(data) {
    //        // console.log(data);
    //         $.each (data, function(index ,key) {
    //             $('<option value="' + key.code + '">' + key.name+ '</option>').clone().appendTo('.country_list');
    //         });
    //
    //     });
    //     // $('.country_list').selectize();
    //     // return $.ajax({
    //     //     url: url,
    //     //     type: 'GET',
    //     //     dataType: "json",
    //     //     success: function (data) {
    //     //         $.each (data, function(index ,key) {
    //     //             console.log(index+'\n');
    //     //             $('<option value="' + key.code + '">' + key.name+ '</option>').clone().appendTo('.country_list');
    //     //             })
    //     //     }
    //     // });
    // }

    // countries_list().done(function () {
    //     $('.country_list').selectize();
    // });


});