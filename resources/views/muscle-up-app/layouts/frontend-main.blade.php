<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <title>@yield('title')</title>
    @include('muscle-up-app.includes.frontend._stylesheet')
    @yield('style-sheet')
</head>
<body>

<div class="page-wrapper">
    @include('muscle-up-app.includes.frontend._header')
    @include('muscle-up-app.includes._message')
    @yield('content')
</div>
</body>

<footer class="main-footer">
    @include('muscle-up-app.includes.frontend._footer')
    @include('muscle-up-app.includes.frontend._script')
    @yield('script')
</footer>

</html>