<!DOCTYPE html>
<html>

@include('muscle-up-app.includes.admin-panel._head')
@yield('stylesheet')

<body class="fixed-left">
<!-- Modal Start -->
<!-- Modal Task Progress -->

@include('muscle-up-app.includes.admin-panel._task-progress')

<!-- Modal Logout -->

@include('muscle-up-app.includes.admin-panel._modal-logout')

<!-- Begin page -->
<div id="wrapper">

    <!-- Top Bar Start -->
    @include('muscle-up-app.includes.admin-panel._top-bar')
    <!-- Top Bar End -->

    <!-- Left Sidebar Start -->

    <!-- Left Sidebar End -->		    <!-- Right Sidebar Start -->

    @include('muscle-up-app.includes.admin-panel._left-sidebar')
    @include('muscle-up-app.includes.admin-panel._right-sidebar')

    <!-- Right Sidebar End -->
    <!-- Start right content -->
    <div class="content-page">
        <!-- ============================================================== -->
        <!-- Start Content here -->
        <!-- ============================================================== -->
        <div class="content">
        @yield('content')
        </div>
        <!-- ============================================================== -->
        <!-- End content here -->
        <!-- ============================================================== -->

    </div>
    <!-- End right content -->

</div>
@include('muscle-up-app.includes.admin-panel._context-dropdown-menu')
<!-- End of page -->
<!-- the overlay modal element -->
<div class="md-overlay"></div>
<!-- End of overlay modal -->
@include('muscle-up-app.includes.admin-panel._footer')
@include('muscle-up-app.includes.admin-panel._scripts')
@yield('script')

</body>
</html>