<!DOCTYPE html>
<html>
<head>
    @yield('style-sheet')
    @include('muscle-up-app.includes.frondends._styleSheet')
</head>
<body>
<div class="page-wrapper">

    <!-- Main Header -->
@include('muscle-up-app.includes.frondends._mainHeader')

<!--End Main Header -->


<!--Featured Services-->

@yield('content')
<!--Main Footer-->
    @include('muscle-up-app.includes.frondends._footer')


</div>
@include('muscle-up-app.includes.frondends._javascript')


</body>

@yield('scripts')

</html>