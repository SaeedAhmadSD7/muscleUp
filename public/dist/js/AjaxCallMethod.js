function ajaxCallMethod(url, parameters, successCallback) {
    $.ajax({
        url: url,
        data: parameters,
        success: successCallback,
        error: function() {
            console.log('error');
        }
    });
}