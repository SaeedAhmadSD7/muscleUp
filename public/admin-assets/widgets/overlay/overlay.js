$(document).ready(function() {
    $(".overlay-button").click(function() {
        var a = $(this).attr("data-theme"),
            b = $(this).attr("data-opacity"),
            c = $(this).attr("data-style"),
            d = '<div id="loader-overlay" class="ui-front loader ui-widget-overlay ' + a + " opacity-" + b + '"><img src="../../assets/images/spinner/loader-' + c + '.gif" alt="" /></div>';
        $("#loader-overlay").length && $("#loader-overlay").remove(), $("body").append(d), $("#loader-overlay").fadeIn("fast"), setTimeout(function() {
            $("#loader-overlay").fadeOut("fast")
        }, 3e3)
    }), $(".refresh-button").click(function(a) {
        $(".glyph-icon", this).addClass("icon-spin"), a.preventDefault();
        var b = $(this).parents(".content-box"),
            c = $(this).attr("data-theme"),
            d = $(this).attr("data-opacity"),
            e = $(this).attr("data-style"),
            f = '<div id="refresh-overlay" class="ui-front loader ui-widget-overlay ' + c + " opacity-" + d + '"><img src="../../assets/images/spinner/loader-' + e + '.gif" alt="" /></div>';
        $("#refresh-overlay").length && $("#refresh-overlay").remove(), $(b).append(f), $("#refresh-overlay").fadeIn("fast"), setTimeout(function() {
            $("#refresh-overlay").fadeOut("fast"), $(".glyph-icon", this).removeClass("icon-spin")
        }, 1500)
    })
});