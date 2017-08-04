$.extend(!0, $.fn.dataTable.defaults, {
    sDom: "<'row'<'col-sm-6'l><'col-sm-6'f>r>t<'row'<'col-sm-6'i><'col-sm-6'p>>",
    oLanguage: {
        sLengthMenu: "_MENU_ records per page",
        sSearch: ""
    }
}), $.extend($.fn.dataTableExt.oStdClasses, {
    sWrapper: "dataTables_wrapper form-inline",
    sFilterInput: "form-control",
    sLengthSelect: "form-control"
}), $.fn.dataTable.defaults.sPaginationType = "bootstrap", $.fn.dataTableExt.oApi.fnPagingInfo = function(a) {
    return {
        iStart: a._iDisplayStart,
        iEnd: a.fnDisplayEnd(),
        iLength: a._iDisplayLength,
        iTotal: a.fnRecordsTotal(),
        iFilteredTotal: a.fnRecordsDisplay(),
        iPage: -1 === a._iDisplayLength ? 0 : Math.ceil(a._iDisplayStart / a._iDisplayLength),
        iTotalPages: -1 === a._iDisplayLength ? 0 : Math.ceil(a.fnRecordsDisplay() / a._iDisplayLength)
    }
}, $.extend($.fn.dataTableExt.oPagination, {
    bootstrap: {
        fnInit: function(a, b, c) {
            var d = a.oLanguage.oPaginate,
                e = function(b) {
                    b.preventDefault(), a.oApi._fnPageChange(a, b.data.action) && c(a)
                };
            $(b).append('<ul class="pagination"><li class="previous disabled"><a href="#">' + d.sPrevious + '</a></li><li class="next disabled"><a href="#">' + d.sNext + "</a></li></ul>");
            var f = $("a", b);
            $(f[0]).bind("click.DT", {
                action: "previous"
            }, e), $(f[1]).bind("click.DT", {
                action: "next"
            }, e)
        },
        fnUpdate: function(a, b) {
            var c, d, e, f, g, h, i = 5,
                j = a.oInstance.fnPagingInfo(),
                k = a.aanFeatures.p,
                l = Math.floor(i / 2);
            for (j.iTotalPages < i ? (g = 1, h = j.iTotalPages) : j.iPage <= l ? (g = 1, h = i) : j.iPage >= j.iTotalPages - l ? (g = j.iTotalPages - i + 1, h = j.iTotalPages) : (g = j.iPage - l + 1, h = g + i - 1), c = 0, d = k.length; d > c; c++) {
                for ($("li:gt(0)", k[c]).filter(":not(:last)").remove(), e = g; h >= e; e++) f = e == j.iPage + 1 ? 'class="active"' : "", $("<li " + f + '><a href="#">' + e + "</a></li>").insertBefore($("li:last", k[c])[0]).bind("click", function(c) {
                    c.preventDefault(), a._iDisplayStart = (parseInt($("a", this).text(), 10) - 1) * j.iLength, b(a)
                });
                0 === j.iPage ? $("li:first", k[c]).addClass("disabled") : $("li:first", k[c]).removeClass("disabled"), j.iPage === j.iTotalPages - 1 || 0 === j.iTotalPages ? $("li:last", k[c]).addClass("disabled") : $("li:last", k[c]).removeClass("disabled")
            }
        }
    }
}), $.fn.DataTable.TableTools && ($.extend(!0, $.fn.DataTable.TableTools.classes, {
    container: "DTTT btn-group",
    buttons: {
        normal: "btn btn-default",
        disabled: "disabled"
    },
    collection: {
        container: "DTTT_dropdown dropdown-menu",
        buttons: {
            normal: "",
            disabled: "disabled"
        }
    },
    print: {
        info: "DTTT_print_info modal"
    },
    select: {
        row: "active"
    }
}), $.extend(!0, $.fn.DataTable.TableTools.DEFAULTS.oTags, {
    collection: {
        container: "ul",
        button: "li",
        liner: "a"
    }
}));