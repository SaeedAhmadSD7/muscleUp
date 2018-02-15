function ajaxCallMethod(type, url, parameters, successCallback) {
    $.ajax({
        type: type,
        url: url,
        data: parameters,
        success: successCallback,
        error: function (data) {
            var errors=[];
            for (datos in data.responseJSON) {
                errors += data.responseJSON[datos] + '<br>';
            }
            $('#errors').addClass('alert alert-danger');
            $('#errors').html(errors);
        }
    });
}