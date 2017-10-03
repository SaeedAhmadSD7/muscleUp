<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <!--[if IE]><meta http-equiv='X-UA-Compatible' content='IE=edge,chrome=1'><![endif]-->
    <meta content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no" name="viewport">
    <title>Error</title>
    @include('includes.backend._stylesheet')
    <link href="{{url('/assets/css/permission-denied.css')}}" rel="stylesheet" type="text/css">
</head>
<body>
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
    <script src="{{url('/assets/js/permission-denied.js')}}" type="text/javascript"></script>
</footer>
</html>