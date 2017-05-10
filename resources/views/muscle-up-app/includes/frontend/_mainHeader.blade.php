<!-- Preloader -->
<div class="preloader"></div>


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
                    <li class="current dropdown"><a href="index.html">Tour</a>
                        <ul class="submenu">
                            <li><a href="index.html">Home Style One</a></li>
                            <li><a href="index-2.html">Home Style Two</a></li>
                            <li><a href="index-3.html">Home Style Three</a></li>
                            <li><a href="index-one-page-version.html"> One Page Version</a></li>
                        </ul>
                    </li>
                    <li class="dropdown"><a href="home/deal">Deals</a>

                    </li>
                    <li class=" dropdown"><a href="about-us.html">Events</a>
                        <ul class="submenu">
                            <li><a href="our-team.html">Our Team</a></li>
                            <li><a href="pricing.html">Our Pricing</a></li>

                        </ul>
                    </li>
                    <li><a href="courses.html">Services</a></li>
                    <li class="dropdown"><a href="services.html">Services</a>
                        <ul class="submenu">
                            <li><a href="schedule.html">Our Schedule</a></li>
                        </ul>
                    </li>
                    <li class="dropdown"><a href="register">Join Now</a>

                    </li>

                    @if(Auth::check())

                        <li><a href="login">Logout</a></li>
                    @else

                    <li><a href="login">Login</a></li>

                    @endif


                </ul>
                <div class="clearfix"></div>
            </div>
        </nav>
        <!-- Main Menu End-->

    </div>

    <div class="open-hours">
        <div class="toggle-open-hours"><span class="fa fa-clock-o"></span> <span>Opening Hours</span> <br>Monday - Sunday 8:00 - 22:00</div>
    </div>

</header>