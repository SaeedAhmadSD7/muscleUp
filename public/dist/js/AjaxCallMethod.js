function ajaxCallMethod(type,url, parameters, successCallback) {
    $.ajax({
        type:type,
        url: url,
        data: parameters,
        datatype: 'html',
        success: successCallback,
        error: function() {
            console.log('error');
        }
    });
}