<!DOCTYPE html>
<html>
<head>
    @include('muscle-up-app.includes.frontend._styleSheet')
    @yield('stylesheet')
</head>
<body>



<div class="page-wrapper">

<!-- Main Header -->
@include('muscle-up-app.includes.frontend._mainHeader')
<!--End Main Header -->



    <!--Featured Services-->

@yield('content')
<!--Main Footer-->
    @include('muscle-up-app.includes.frontend._footer')


</div>

@include('muscle-up-app.includes.frontend._javascript')
@yield('scripts')

</body>

</html>