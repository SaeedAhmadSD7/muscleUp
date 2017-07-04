<!DOCTYPE html>
<html>
<head>
    @include('muscle-up-app.includes.style-sheet')
    @yield('style-sheet')
</head>
<body>

<div class="page-wrapper">
    @include('muscle-up-app.includes.header')
    @yield('content')
    @include('muscle-up-app.includes.footer')
</div>

@include('muscle-up-app.includes.script')
@yield('script')

</body>
</html>