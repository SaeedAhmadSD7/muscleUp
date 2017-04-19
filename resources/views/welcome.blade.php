<!DOCTYPE html>
<html>
<head>
    @include('partials._styleSheet')
</head>
<body>
<div class="page-wrapper">

    <!-- Main Header -->
    @include('partials._mainHeader')
    <!--End Main Header -->

    <!-- Main Slider -->
      @include('partials._mainSlider')
    <!--Featured Services-->
       @yield('content')

    <!--Main Footer-->
     @include('partials._footer')

</div>
    @include('partials._javascript')
</body>

</html>
