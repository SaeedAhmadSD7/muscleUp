<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <!--[if IE]>
    <meta http-equiv='X-UA-Compatible' content='IE=edge,chrome=1'>
    <![endif]-->
    <meta content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no" name="viewport">
    <title>@yield('title')</title>

    <style>#loading .svg-icon-loader {position: absolute;top: 50%;left: 50%;margin: -50px 0 0 -50px;}</style>
    <link rel="stylesheet" href="{{ elixir('dist/css/backend-app.css') }}">
    @yield('style-sheet')
</head>
<body>
<div id="loading">
    <div class="svg-icon-loader"><img alt="" src="{{url('/resources/app/fonts/bars.svg')}}" width="40"></div>
</div>
<div id="sb-site">
    <div id="page-wrapper">
        @include('includes.backend._sidebar')
        <div id="page-content-wrapper">
            <div id="page-content">
                <div id="page-title">
                    @include('includes._message')
                    @yield('page-heading')
                </div>

                <div id="page-header">
                    <div id="page-shadow">
                        <div id="header-nav-left">
                            <div class="user-account-btn dropdown">
                                <a class="user-profile clearfix" data-toggle="dropdown" href="#" title="My Account">
                                    <img alt="Profile image" src="{{url('/resources/app/images/gravatar.jpg')}}" width="28">
                                    <span>@yield('user-name')</span> <i class="glyph-icon icon-angle-down"></i></a>
                                <div class="dropdown-menu float-right">
                                    <div class="box-sm">
                                        <div class="login-box clearfix">
                                            <div class="user-img"><a class="change-img" href="#" title="">Change photo</a>
                                                <img alt="" src="{{url('/resources/app/images/gravatar.jpg')}}">
                                            </div>
                                            <div class="user-info">
                                                <span>@yield('user-name')</span> <a href="#" title="Edit profile">Edit profile</a>
                                            </div>
                                        </div>
                                        <div class="divider"></div>
                                        <div class="button-pane button-pane-alt pad5L pad5R text-center">
                                            <a class="btn btn-flat display-block font-normal btn-danger" href="{{route('logout')}}"><i class="glyph-icon icon-power-off"></i> Logout</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                @yield('content')
            </div>
        </div>

    </div>
</div>
</body>

<footer>
    <script src="{{ elixir('dist/js/backend-app.js') }}"></script>
    <script type="text/javascript">$(window).load(function(){setTimeout(function() {$('#loading').fadeOut( 400, "linear" );}, 300);});</script>
    @yield('script')
</footer>

</html>