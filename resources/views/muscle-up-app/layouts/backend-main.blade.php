<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <!--[if IE]>
    <meta http-equiv='X-UA-Compatible' content='IE=edge,chrome=1'>
    <![endif]-->
    <meta content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no" name="viewport">
    <title>@yield('title')</title>

    @include('muscle-up-app.includes.backend._stylesheet')
    @yield('style-sheet')
</head>
<body>
<div id="sb-site">
    <div id="page-wrapper">
        @include('muscle-up-app.includes.frontend._header')
        @include('muscle-up-app.includes._message')
        @include('muscle-up-app.includes.backend._sidebar')
        @yield('content')
    </div>
</div>
</body>

<footer>
    @include('muscle-up-app.includes.backend._script')
    @yield('script')
</footer>

</html>