! function(a, b, c) {
    var d = function(c, d) {
        "use strict";
        var e = function(a, b) {
            if (!d.versionCheck || !d.versionCheck("1.10.1")) throw "DataTables Responsive requires DataTables 1.10.1 or newer";
            this.s = {
                dt: new d.Api(a),
                columns: []
            }, this.s.dt.settings()[0].responsive || (b && "string" == typeof b.details && (b.details = {
                type: b.details
            }), this.c = c.extend(!0, {}, e.defaults, d.defaults.responsive, b), a.responsive = this, this._constructor())
        };
        e.prototype = {
            _constructor: function() {
                var b = this,
                    d = this.s.dt;
                d.settings()[0]._responsive = this, c(a).on("resize.dtr orientationchange.dtr", d.settings()[0].oApi._fnThrottle(function() {
                    b._resize()
                })), d.on("destroy.dtr", function() {
                    c(a).off("resize.dtr orientationchange.dtr")
                }), this.c.breakpoints.sort(function(a, b) {
                    return a.width < b.width ? 1 : a.width > b.width ? -1 : 0
                }), this._classLogic(), this._resizeAuto(), this._resize();
                var e = this.c.details;
                e.type && (b._detailsInit(), this._detailsVis(), d.on("column-visibility.dtr", function() {
                    b._detailsVis()
                }), c(d.table().node()).addClass("dtr-" + e.type))
            },
            _columnsVisiblity: function(a) {
                var b, d, e = this.s.dt,
                    f = this.s.columns,
                    g = c.map(f, function(b) {
                        return b.auto && null === b.minWidth ? !1 : b.auto === !0 ? "-" : -1 !== c.inArray(a, b.includeIn)
                    }),
                    h = 0;
                for (b = 0, d = g.length; d > b; b++) g[b] === !0 && (h += f[b].minWidth);
                var i = e.table().container().offsetWidth,
                    j = i - h;
                for (b = 0, d = g.length; d > b; b++) f[b].control ? j -= f[b].minWidth : "-" === g[b] && (g[b] = j - f[b].minWidth < 0 ? !1 : !0, j -= f[b].minWidth);
                var k = !1;
                for (b = 0, d = f.length; d > b; b++)
                    if (!f[b].control && !f[b].never && !g[b]) {
                        k = !0;
                        break
                    }
                for (b = 0, d = f.length; d > b; b++) f[b].control && (g[b] = k);
                return -1 === c.inArray(!0, g) && (g[0] = !0), g
            },
            _classLogic: function() {
                var a = this,
                    b = this.c.breakpoints,
                    d = this.s.dt.columns().eq(0).map(function(a) {
                        var b = this.column(a).header().className;
                        return {
                            className: b,
                            includeIn: [],
                            auto: !1,
                            control: !1,
                            never: b.match(/\bnever\b/) ? !0 : !1
                        }
                    }),
                    e = function(a, b) {
                        var e = d[a].includeIn; - 1 === c.inArray(b, e) && e.push(b)
                    },
                    f = function(c, f, g, h) {
                        var i, j, k;
                        if (g) {
                            if ("max-" === g)
                                for (i = a._find(f).width, j = 0, k = b.length; k > j; j++) b[j].width <= i && e(c, b[j].name);
                            else if ("min-" === g)
                                for (i = a._find(f).width, j = 0, k = b.length; k > j; j++) b[j].width >= i && e(c, b[j].name);
                            else if ("not-" === g)
                                for (j = 0, k = b.length; k > j; j++) - 1 === b[j].name.indexOf(h) && e(c, b[j].name)
                        } else d[c].includeIn.push(f)
                    };
                d.each(function(a, d) {
                    for (var e = a.className.split(" "), g = !1, h = 0, i = e.length; i > h; h++) {
                        var j = c.trim(e[h]);
                        if ("all" === j) return g = !0, void(a.includeIn = c.map(b, function(a) {
                            return a.name
                        }));
                        if ("none" === j || "never" === j) return void(g = !0);
                        if ("control" === j) return g = !0, void(a.control = !0);
                        c.each(b, function(a, b) {
                            var c = b.name.split("-"),
                                e = new RegExp("(min\\-|max\\-|not\\-)?(" + c[0] + ")(\\-[_a-zA-Z0-9])?"),
                                h = j.match(e);
                            h && (g = !0, h[2] === c[0] && h[3] === "-" + c[1] ? f(d, b.name, h[1], h[2] + h[3]) : h[2] !== c[0] || h[3] || f(d, b.name, h[1], h[2]))
                        })
                    }
                    g || (a.auto = !0)
                }), this.s.columns = d
            },
            _detailsInit: function() {
                var a = this,
                    b = this.s.dt,
                    d = this.c.details;
                "inline" === d.type && (d.target = "td:first-child");
                var e = d.target,
                    f = "string" == typeof e ? e : "td";
                c(b.table().body()).on("click", f, function(d) {
                    if (c(b.table().node()).hasClass("collapsed") && b.row(c(this).closest("tr")).length) {
                        if ("number" == typeof e) {
                            var f = 0 > e ? b.columns().eq(0).length + e : e;
                            if (b.cell(this).index().column !== f) return
                        }
                        var g = b.row(c(this).closest("tr"));
                        if (g.child.isShown()) g.child(!1), c(g.node()).removeClass("parent");
                        else {
                            var h = a.c.details.renderer(b, g[0]);
                            g.child(h, "child").show(), c(g.node()).addClass("parent")
                        }
                    }
                })
            },
            _detailsVis: function() {
                var a = this,
                    b = this.s.dt,
                    d = b.columns().indexes().filter(function(a) {
                        var d = b.column(a);
                        return d.visible() ? null : c(d.header()).hasClass("never") ? null : a
                    }),
                    e = !0;
                (0 === d.length || 1 === d.length && this.s.columns[d[0]].control) && (e = !1), e ? (c(b.table().node()).addClass("collapsed"), b.rows().eq(0).each(function(c) {
                    var d = b.row(c);
                    if (d.child()) {
                        var e = a.c.details.renderer(b, d[0]);
                        e === !1 ? d.child.hide() : d.child(e, "child").show()
                    }
                })) : (c(b.table().node()).removeClass("collapsed"), b.rows().eq(0).each(function(a) {
                    b.row(a).child.hide()
                }))
            },
            _find: function(a) {
                for (var b = this.c.breakpoints, c = 0, d = b.length; d > c; c++)
                    if (b[c].name === a) return b[c]
            },
            _resize: function() {
                for (var b = this.s.dt, d = c(a).width(), e = this.c.breakpoints, f = e[0].name, g = e.length - 1; g >= 0; g--)
                    if (d <= e[g].width) {
                        f = e[g].name;
                        break
                    }
                var h = this._columnsVisiblity(f);
                b.columns().eq(0).each(function(a, c) {
                    b.column(a).visible(h[c])
                })
            },
            _resizeAuto: function() {
                var a = this.s.dt,
                    b = this.s.columns;
                if (this.c.auto && -1 !== c.inArray(!0, c.map(b, function(a) {
                        return a.auto
                    }))) {
                    var d = (a.table().node().offsetWidth, a.columns, a.table().node().cloneNode(!1)),
                        e = c(a.table().header().cloneNode(!1)).appendTo(d),
                        f = c(a.table().body().cloneNode(!1)).appendTo(d);
                    a.rows({
                        page: "current"
                    }).indexes().flatten().each(function(b) {
                        var d = a.row(b).node().cloneNode(!0);
                        a.columns(":hidden").flatten().length && c(d).append(a.cells(b, ":hidden").nodes().to$().clone()), c(d).appendTo(f)
                    });
                    var g = a.columns().header().to$().clone(!1).wrapAll("tr").appendTo(e),
                        h = c("<div/>").css({
                            width: 1,
                            height: 1,
                            overflow: "hidden"
                        }).append(d).insertBefore(a.table().node());
                    a.columns().eq(0).each(function(a) {
                        b[a].minWidth = g[a].offsetWidth || 0
                    }), h.remove()
                }
            }
        }, e.breakpoints = [{
            name: "desktop",
            width: 1 / 0
        }, {
            name: "tablet-l",
            width: 1024
        }, {
            name: "tablet-p",
            width: 768
        }, {
            name: "mobile-l",
            width: 480
        }, {
            name: "mobile-p",
            width: 320
        }], e.defaults = {
            breakpoints: e.breakpoints,
            auto: !0,
            details: {
                renderer: function(a, b) {
                    var d = a.cells(b, ":hidden").eq(0).map(function(b) {
                        var d = c(a.column(b.column).header()),
                            e = a.cell(b).index();
                        if (d.hasClass("control") || d.hasClass("never")) return "";
                        var f = a.settings()[0],
                            g = f.oApi._fnGetCellData(f, e.row, e.column, "display");
                        return '<li data-dtr-index="' + e.column + '"><span class="dtr-title">' + d.text() + ':</span> <span class="dtr-data">' + g + "</span></li>"
                    }).toArray().join("");
                    return d ? c('<ul data-dtr-index="' + b + '"/>').append(d) : !1
                },
                target: 0,
                type: "inline"
            }
        };
        var f = c.fn.dataTable.Api;
        return f.register("responsive()", function() {
            return this
        }), f.register("responsive.recalc()", function() {
            this.iterator("table", function(a) {
                a._responsive && (a._responsive._resizeAuto(), a._responsive._resize())
            })
        }), f.register("responsive.index()", function(a) {
            return a = c(a), {
                column: a.data("dtr-index"),
                row: a.parent().data("dtr-index")
            }
        }), e.version = "1.0.2", c.fn.dataTable.Responsive = e, c.fn.DataTable.Responsive = e, c(b).on("init.dt.dtr", function(a, b, f) {
            if (c(b.nTable).hasClass("responsive") || c(b.nTable).hasClass("dt-responsive") || b.oInit.responsive || d.defaults.responsive) {
                var g = b.oInit.responsive;
                g !== !1 && new e(b, c.isPlainObject(g) ? g : {})
            }
        }), e
    };
    "function" == typeof define && define.amd ? define(["jquery", "datatables"], d) : "object" == typeof exports ? d(require("jquery"), require("datatables")) : jQuery && !jQuery.fn.dataTable.Responsive && d(jQuery, jQuery.fn.dataTable)
}(window, document);