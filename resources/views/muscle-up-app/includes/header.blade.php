<!-- Preloader -->
{{--<div class="preloader"></div>--}}


<header class="main-header">
    <div class="auto-container clearfix">

        <!-- Logo -->
        <div class="logo"><a href="/"><img src="{{url('assets/images/logo.png')}}" alt="Logo" title="StayFit"></a></div>

        <!-- Main Menu -->
        <nav class="main-menu">
            <div class="navbar-header header-fixed">
                <!-- Toggle Button -->
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
            </div>

            <div class="navbar-collapse collapse clearfix">
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="deal">Deals</a></li>
                    <li><a href="{{url('events')}}">Events</a></li>
                    <li><a href="services.html">Services</a></li>
                    <li><a href="{{route('gym-request')}}">Join Request</a></li>
                    <li><a href="{{route('login')}}">Login</a></li>
                </ul>
                <div class="clearfix"></div>
            </div>
        </nav>
        <!-- Main Menu End-->

    </div>

</header>