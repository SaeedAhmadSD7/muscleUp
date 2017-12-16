var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    // mix.sass('app.scss');

    /*
     * ===================================================================
     * Start Frontend-Styles
     * ===================================================================
     * */
    mix.styles([
        // "assets/css/bootstrap-3.3.7/css/bootstrap.css",
        //     "assets/css/animate-3.5.2/css/animate.css",
        //     "assets/css/font-awesome-4.7.0/css/font-awesome.css",
        "assets/frontend/css/bootstrap.css",
        "assets/frontend/css/animate.css",
        "assets/frontend/css/font-awesome.css",
        "assets/frontend/css/font-css.css",
        "assets/frontend/css/stylesheet.css",
        "assets/frontend/css/responsive.css",
        "assets/frontend/plugins/revolution-slider/css/revolution-slider.css",
        "/assets/frontend/plugins/owl-carousel-2.2.1/css/owl.carousel.css",
        "/assets/frontend/plugins/hover-2.1.1/css/hover.css",
        "/assets/frontend/plugins/select2/css/select2.css",
        "/assets/frontend/plugins/select2/css/select2-bootstrap.css",
        //***Common-Styles
        "/assets/common/css/custom.css",
        ],
        'public/dist/css/frontend-app.css','resources')


    /*
     * ===================================================================
     * Start Backend-Styles
     * ===================================================================
     * */
    mix.styles([
        // "/assets/backend/css/helpers/animate.css",
        // "/assets/backend/css/helpers/boilerplate.css",

        "/assets/backend/css/helpers/grid.css",
        "/assets/backend/css/helpers/utils.css",
        "/assets/backend/css/helpers/colors.css",
        "/assets/backend/css/elements/badges.css",
        "/assets/backend/css/elements/buttons.css",
        "/assets/backend/plugins/dropdown/dropdown.css",
        "/assets/backend/css/elements/content-box.css",
        "/assets/backend/plugins/themes/css/border-radius.css",
        "/assets/backend/css/snippets/login-box.css",
        "/assets/backend/css/elements/dashboard-box.css",
        "/assets/backend/css/icons/fontawesome/fontawesome.css",
        "/assets/backend/css/icons/linecons/linecons.css",
        "/assets/backend/css/snippets/mobile-navigation.css",
        "/assets/backend/plugins/themes/css/admin-layout.css",
        "/assets/backend/plugins/themes/css/color-schemes-default.css",
        "/assets/backend/plugins/themes/css/default.css",
        "/assets/backend/css/helpers/responsive-elements.css",
        "/assets/backend/css/helpers/admin-responsive.css",
        // "/assets/backend/js/icons/linecons/linecons.css",
        "/assets/backend/plugins/popover/popover.css",
        "/assets/backend/css/helpers/spacing.css",
        "/assets/backend/plugins/tooltip/tooltip.css",
        "/assets/backend/css/snippets/notification-box.css",
        "/assets/backend/css/snippets/user-profile.css",
        //***********************************************************************
            "/assets/backend/css/helpers/border-radius.css",
            "/assets/backend/css/helpers/page-transitions.css",
            "/assets/backend/css/helpers/typography.css",
            "/assets/backend/css/ripple.css",
            "/assets/backend/css/elements/forms.css",
            "/assets/backend/css/elements/images.css",
            "/assets/backend/css/elements/info-box.css",
            "/assets/backend/css/elements/invoice.css",
            "/assets/backend/css/elements/loading-indicators.css",
            "/assets/backend/css/elements/menus.css",
            "/assets/backend/css/elements/panel-box.css",
            "/assets/backend/css/elements/response-messages.css",
            "/assets/backend/css/elements/responsive-tables.css",
            "/assets/backend/css/elements/ribbon.css",
            "/assets/backend/css/elements/social-box.css",
            "/assets/backend/css/elements/tables.css",
            "/assets/backend/css/elements/tile-box.css",
            "/assets/backend/css/elements/timeline.css",
            "/assets/backend/css/icons/spinnericon/spinnericon.css",
            "/assets/backend/plugins/accordion-ui/accordion.css",
            "/assets/backend/plugins/calendar/calendar.css",
            "/assets/backend/plugins/carousel/carousel.css",
            "/assets/backend/plugins/charts/justgage/justgage.css",
            "/assets/backend/plugins/charts/morris/morris.css",
            "/assets/backend/plugins/charts/piegage/piegage.css",
            "/assets/backend/plugins/charts/xcharts/xcharts.css",
            "/assets/backend/plugins/chosen/chosen.css",
            "/assets/backend/plugins/colorpicker/colorpicker.css",
            "/assets/backend/plugins/datatable/datatable.css",
            "/assets/backend/plugins/datepicker/datepicker.css",
            "/assets/backend/plugins/datepicker-ui/datepicker.css",
            "/assets/backend/plugins/daterangepicker/daterangepicker.css",
            "/assets/backend/plugins/dialog/dialog.css",
            "/assets/backend/plugins/dropzone/dropzone.css",
            "/assets/backend/plugins/file-input/fileinput.css",
            "/assets/backend/plugins/input-switch/inputswitch.css",
            "/assets/backend/plugins/input-switch/inputswitch-alt.css",
            "/assets/backend/plugins/ionrangeslider/ionrangeslider.css",
            "/assets/backend/plugins/jcrop/jcrop.css",
            "/assets/backend/plugins/jgrowl-notifications/jgrowl.css",
            "/assets/backend/plugins/loading-bar/loadingbar.css",
            "/assets/backend/plugins/maps/vector-maps/vectormaps.css",
            "/assets/backend/plugins/markdown/markdown.css",
            "/assets/backend/plugins/modal/modal.css",
            "/assets/backend/plugins/multi-select/multiselect.css",
            "/assets/backend/plugins/multi-upload/fileupload.css",
            "/assets/backend/plugins/nestable/nestable.css",
            "/assets/backend/plugins/noty-notifications/noty.css",
            "/assets/backend/plugins/pretty-photo/prettyphoto.css",
            "/assets/backend/plugins/progressbar/progressbar.css",
            "/assets/backend/plugins/range-slider/rangeslider.css",
            "/assets/backend/plugins/slidebars/slidebars.css",
            "/assets/backend/plugins/slider-ui/slider.css",
            "/assets/backend/plugins/summernote-wysiwyg/summernote-wysiwyg.css",
            "/assets/backend/plugins/tabs-ui/tabs.css",
            "/assets/backend/plugins/timepicker/timepicker.css",
            "/assets/backend/plugins/tocify/tocify.css",
            "/assets/backend/plugins/touchspin/touchspin.css",
            "/assets/backend/plugins/uniform/uniform.css",
            "/assets/backend/plugins/wizard/wizard.css",
            "/assets/backend/plugins/xeditable/xeditable.css",
            "/assets/backend/css/snippets/chat.css",
            "/assets/backend/css/snippets/files-box.css",
            "/assets/backend/css/snippets/progress-box.css",
            "/assets/backend/css/snippets/todo.css",
            "/assets/backend/css/mailbox.css",
            "/assets/backend/plugins/themes/css/default.css",
            "/assets/backend/plugins/owlcarousel/owlcarousel.css",
        //***********************************************************************

        //***Common-Styles
        "/assets/common/css/custom.css",

        ],
        'public/dist/css/backend-app.css','resources')



    /*
    * ===================================================================
    * Start Frontend-Scripts
    * ===================================================================
    * */
    mix.scripts([
        "assets/frontend/js/jquery-3.2.1.js",
        "/assets/frontend/js/jquery.validate.js",
        "assets/frontend/js/bootstrap.js",
        "assets/frontend/js/wow.min.js",
        "assets/frontend/js/script.js",
        "/assets/frontend/plugins/revolution-slider/js/revolution.min.js",
        "/assets/frontend/plugins/bxslider-4.2.12/js/jquery.bxslider.js",
        "/assets/frontend/js/jquery.appear.js",
        "/assets/frontend/js/jquery.knob.js",
        "/assets/frontend/js/index-script.js",
        "/assets/frontend/plugins/select2/js/select2.full.js",
        //***Common-JS
        "/assets/common/js/custom.js",
    ],
        'public/dist/js/frontend-app.js',
        'resources'
    )

    /*
     * ===================================================================
     * Start Backend-Scripts
     * ===================================================================
     * */
    mix.scripts([
            "/assets/backend/js/js-core/jquery-core.js",
            "/assets/backend/js/collapse.js",
            "/assets/backend/js/superclick.js",
            "/assets/backend/js/slimscroll.js",
            "/assets/backend/plugins/themes/js/admin-layout.js",
            "/assets/backend/plugins/dropdown/dropdown.js",
            "/assets/backend/js/contentbox.js",
            "/assets/backend/plugins/tooltip/tooltip.js",
            "/assets/backend/plugins/popover/popover.js",
            "/assets/backend/js/widgets-init.js",
        //*******************************************************************************************
        "/assets/backend/js/js-core/jquery-ui-core.js",
        "/assets/backend/js/js-core/jquery-ui-widget.js",
        "/assets/backend/js/js-core/jquery-ui-mouse.js",
        "/assets/backend/js/js-core/jquery-ui-position.js",

        "/assets/backend/plugins/skycons/skycons.js",
        "/assets/backend/plugins/datatable/datatable.js",
        "/assets/backend/plugins/datatable/datatable-bootstrap.js",
        "/assets/backend/plugins/datatable/datatable-tabletools.js",
            //////////////////////////////////////////////////////////
        "/assets/backend/js/js-core/transition.js",
        "/assets/backend/js/js-core/modernizr.js",
        "/assets/backend/js/js-core/jquery-cookie.js",

        "/assets/backend/plugins/owlcarousel/owlcarousel.js",
        "/assets/backend/plugins/owlcarousel/owlcarousel-demo.js",
        "/assets/backend/plugins/progressbar/progressbar.js",
        "/assets/backend/js/button.js",
        "/assets/backend/plugins/input-switch/inputswitch-alt.js",
        
        //"/assets/backend/plugins/slidebars/slidebars.js",
        //"/assets/backend/plugins/slidebars/slidebars-demo.js",
        
    "/assets/backend/plugins/charts/piegage/piegage.js",
        "/assets/backend/plugins/charts/piegage/piegage-demo.js",
        "/assets/backend/js/screenfull.js",
        "/assets/backend/js/material.js",
        "/assets/backend/js/ripples.js",
        "/assets/backend/js/overlay.js",
        //*******************************************************************************************
            //***Common-JS
            "/assets/common/js/custom.js",
        ],
        'public/dist/js/backend-app.js',
        'resources'
    )

/*
     * ===================================================================
     * Start Chart-Scripts
     * ===================================================================
     * */
    mix.scripts([
            "/assets/backend/plugins/charts/chart-js/chart-core.js",
            "/assets/backend/plugins/charts/chart-js/chart-doughnut.js",
            "/assets/backend/plugins/charts/chart-js/chart-demo-1.js",
            "/assets/backend/plugins/charts/flot/flot.js",
            "/assets/backend/plugins/charts/flot/flot-resize.js",
            "/assets/backend/plugins/charts/flot/flot-stack.js",
            "/assets/backend/plugins/charts/flot/flot-pie.js",
            "/assets/backend/plugins/charts/flot/flot-tooltip.js",
            "/assets/backend/plugins/charts/flot/flot-demo-1.js",
            "/assets/backend/plugins/charts/sparklines/sparklines.js",
            "/assets/backend/plugins/charts/sparklines/sparklines-demo.js",
        ],
        'public/dist/js/backend-chart-app.js',
        'resources'
    )


    .version([
        "public/dist/css/frontend-app.css",
        "public/dist/css/backend-app.css",

        "public/dist/js/frontend-app.js",
        "public/dist/js/backend-app.js",
        "public/dist/js/backend-chart-app.js",

        ]
    );
});
