$(document).ready(function () {
    console.log(5);
    $('.fields section:first-child').fadeIn('slow');

    $('.fields .btn-next').on('click', function() {
        var parent_section = $(this).parents('section');
        parent_section.fadeOut(400, function() {
                $(this).next().fadeIn();
            });
    });

    // previous step
    $('.fields .btn-prev').on('click', function() {
        $(this).parents('section').fadeOut(400, function() {
            $(this).prev().fadeIn();
        });
    });

});