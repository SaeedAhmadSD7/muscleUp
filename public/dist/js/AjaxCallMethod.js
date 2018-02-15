function ajaxCallMethod(type, url, parameters, successCallback) {
    $.ajax({
        type: type,
        url: url,
        data: parameters,
        datatype: 'html',
        success: successCallback,
        error: function (data) {
            var errors=[];
            for (datos in data.responseJSON) {
                errors += data.responseJSON[datos] + '<br>';
            }
            $('#errors').html(errors);
        }
    });
}