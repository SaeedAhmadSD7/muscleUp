<!DOCTYPE html>
<html>
<head>
    @include('muscle-up-app.includes._stylesheet')
    @yield('style-sheet')
</head>
<body>

<div class="page-wrapper">
    @include('muscle-up-app.includes._header')
    @include('muscle-up-app.includes._message')
    @yield('content')
    @include('muscle-up-app.includes._footer')
</div>

@include('muscle-up-app.includes._script')
@yield('script')

</body>
</html>