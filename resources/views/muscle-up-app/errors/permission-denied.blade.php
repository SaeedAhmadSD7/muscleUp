<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <!--[if IE]><meta http-equiv='X-UA-Compatible' content='IE=edge,chrome=1'><![endif]-->
    <meta content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no" name="viewport">
    <title>Error</title>
    <link href="{{url('/admin-assets/helpers/boilerplate.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/helpers/grid.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/helpers/utils.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/helpers/animate.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/themes/admin/color-schemes/default.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/elements/response-messages.css')}}" rel="stylesheet" type="text/css">
    <style>#loading .svg-icon-loader {position: absolute;top: 50%;left: 50%;margin: -50px 0 0 -50px;}</style>
    <link href="{{url('/assets/css/permission-denied.css')}}" rel="stylesheet" type="text/css">
</head>
<body>
<div id="loading">
    <div class="svg-icon-loader"><img alt="" src="{{url('/assets/preloader/bars.svg')}}" width="40"></div>
</div>
<img alt="" class="login-img wow fadeIn" src="{{url('/admin-assets/image-resources/blurred-bg/blurred-bg-4.jpg')}}">
<div class="center-vertical">
    <div class="center-content">
        <div class="col-md-6 center-margin">
            <div class="server-message wow bounceInDown inverse">
                <h1>OOPS!</h1>
                <h2>You don't have permissions to view this page.</h2>
                <p>If you think it's an error please contact MuscleUP Admin.</p>
            </div>
        </div>
    </div>
</div>
</body>

<footer>
    @include('includes.backend._script')
    <script src="{{url('/admin-assets/widgets/wow/wow.js')}}" type="text/javascript"></script>
    <script type="text/javascript">$(window).load(function(){setTimeout(function() {$('#loading').fadeOut( 400, "linear" );}, 300);});</script>
    <script src="{{url('/assets/js/permission-denied.js')}}" type="text/javascript"></script>
</footer>
</html>