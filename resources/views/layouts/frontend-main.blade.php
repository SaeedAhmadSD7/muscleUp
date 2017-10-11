<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <title>@yield('title')</title>
    @include('includes.frontend._stylesheet')
    @yield('style-sheet')
</head>
<body>
@include('includes.frontend._header')
<div class="page-wrapper">
    @include('includes._message')
    @yield('content')
</div>
</body>

<footer class="main-footer">
    @include('includes.frontend._footer')
    @include('includes.frontend._script')
    @yield('script')
</footer>

</html>