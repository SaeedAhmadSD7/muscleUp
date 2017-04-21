<!DOCTYPE html>
<html>
<head>
    @include('muscle-up-app.shared.includes._styleSheet')
</head>
<body>
<div class="page-wrapper">

    <!-- Main Header -->
    @include('muscle-up-app.shared.includes._mainHeader')
    <!--End Main Header -->

    <!-- Main Slider -->
      @include('muscle-up-app.shared.includes._mainSlider')
    <!--Featured Services-->

          @yield('content')
    <!--Main Footer-->
     @include('muscle-up-app.shared.includes._footer')

</div>
    @include('muscle-up-app.shared.includes._javascript')
</body>

</html>
