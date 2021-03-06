! function(a) {
    function b(a) {
        return "undefined" == typeof a.which ? !0 : "number" == typeof a.which && a.which > 0 ? !a.ctrlKey && !a.metaKey && !a.altKey && 8 != a.which && 9 != a.which : !1
    }
    a.expr[":"].notmdproc = function(b) {
        return a(b).data("mdproc") ? !1 : !0
    }, a.material = {
        options: {
            input: !1,
            ripples: !0,
            checkbox: !1,
            togglebutton: !1,
            radio: !1,
            arrive: !1,
            autofill: !1,
            withRipples: [".btn:not(.btn-link)", ".card-image", ".navbar a:not(.withoutripple)", ".dropdown-menu a", ".nav-tabs a:not(.withoutripple)", ".withripple"].join(","),
            inputElements: "input.form-control, textarea.form-control, select.form-control",
            checkboxElements: ".checkbox > label > input[type=checkbox]",
            togglebuttonElements: ".togglebutton > label > input[type=checkbox]",
            radioElements: ".radio > label > input[type=radio]"
        },
        checkbox: function(b) {
            a(b ? b : this.options.checkboxElements).filter(":notmdproc").data("mdproc", !0).after("<span class=ripple></span><span class=check></span>")
        },
        togglebutton: function(b) {
            a(b ? b : this.options.togglebuttonElements).filter(":notmdproc").data("mdproc", !0).after("<span class=toggle></span>")
        },
        radio: function(b) {
            a(b ? b : this.options.radioElements).filter(":notmdproc").data("mdproc", !0).after("<span class=circle></span><span class=check></span>")
        },
        input: function(c) {
            a(c ? c : this.options.inputElements).filter(":notmdproc").data("mdproc", !0).each(function() {
                var b = a(this);
                if (a(this).attr("data-hint") || b.hasClass("floating-label")) {
                    if (b.wrap("<div class=form-control-wrapper></div>"), b.after("<span class=material-input></span>"), b.hasClass("floating-label")) {
                        var c = b.attr("placeholder");
                        b.attr("placeholder", null).removeClass("floating-label"), b.after("<div class=floating-label>" + c + "</div>")
                    }
                    if (b.attr("data-hint") && b.after("<div class=hint>" + b.attr("data-hint") + "</div>"), (null === b.val() || "undefined" == b.val() || "" === b.val()) && b.addClass("empty"), b.parent().next().is("[type=file]")) {
                        b.parent().addClass("fileinput");
                        var d = b.parent().next().detach();
                        b.after(d)
                    }
                }
            }), a(document).on("change", ".checkbox input[type=checkbox]", function() {
                a(this).blur()
            }).on("keydown paste", ".form-control", function(c) {
                b(c) && a(this).removeClass("empty")
            }).on("keyup change", ".form-control", function() {
                var b = a(this);
                "" === b.val() && b[0].checkValidity() ? b.addClass("empty") : b.removeClass("empty")
            }).on("focus", ".form-control-wrapper.fileinput", function() {
                a(this).find("input").addClass("focus")
            }).on("blur", ".form-control-wrapper.fileinput", function() {
                a(this).find("input").removeClass("focus")
            }).on("change", ".form-control-wrapper.fileinput [type=file]", function() {
                var b = "";
                a.each(a(this)[0].files, function(a, c) {
                    b += c.name + ", "
                }), b = b.substring(0, b.length - 2), b ? a(this).prev().removeClass("empty") : a(this).prev().addClass("empty"), a(this).prev().val(b)
            })
        },
        ripples: function(b) {
            a(b ? b : this.options.withRipples).ripples()
        },
        autofill: function() {
            var b = setInterval(function() {
                a("input[type!=checkbox]").each(function() {
                    a(this).val() && a(this).val() !== a(this).attr("value") && a(this).trigger("change")
                })
            }, 100);
            setTimeout(function() {
                clearInterval(b)
            }, 1e4);
            var c;
            a(document).on("focus", "input", function() {
                var b = a(this).parents("form").find("input").not("[type=file]");
                c = setInterval(function() {
                    b.each(function() {
                        a(this).val() !== a(this).attr("value") && a(this).trigger("change")
                    })
                }, 100)
            }).on("blur", "input", function() {
                clearInterval(c)
            })
        },
        init: function() {
            a.fn.ripples && this.options.ripples && this.ripples(), this.options.input && this.input(), this.options.checkbox && this.checkbox(), this.options.togglebutton && this.togglebutton(), this.options.radio && this.radio(), this.options.autofill && this.autofill(), document.arrive && this.options.arrive && (a.fn.ripples && this.options.ripples && a(document).arrive(this.options.withRipples, function() {
                a.material.ripples(a(this))
            }), this.options.input && a(document).arrive(this.options.inputElements, function() {
                a.material.input(a(this))
            }), this.options.checkbox && a(document).arrive(this.options.checkboxElements, function() {
                a.material.checkbox(a(this))
            }), this.options.radio && a(document).arrive(this.options.radioElements, function() {
                a.material.radio(a(this))
            }), this.options.togglebutton && a(document).arrive(this.options.togglebuttonElements, function() {
                a.material.togglebutton(a(this))
            }))
        }
    }
}(jQuery);