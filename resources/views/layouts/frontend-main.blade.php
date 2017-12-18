<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <title>@yield('title')</title>
    <link rel="stylesheet" href="{{ elixir('dist/css/frontend-app.css') }}">
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
    <script src="{{ elixir('dist/js/frontend-app.js') }}"></script>
    <!--[if lt IE 9]><script src="{{url('/resources/app/js/html5-shiv.js')}}"></script><![endif]-->
    <!--[if lt IE 9]><script src="{{url('/resources/app/js/respond-1.4.2.js')}}"></script><![endif]-->
    @yield('script')
</footer>

</html>