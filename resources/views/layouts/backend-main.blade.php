<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <!--[if IE]>
    <meta http-equiv='X-UA-Compatible' content='IE=edge,chrome=1'>
    <![endif]-->
    <meta content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no" name="viewport">
    <title>@yield('title')</title>

    @include('includes.backend._stylesheet')
    @yield('style-sheet')
</head>
<body>
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
                                <a class="user-profile clearfix" data-toggle="dropdown" href="#" title="My Account"><img alt="Profile image" src="{{url('/admin-assets/image-resources/gravatar.jpg')}}" width="28"> <span>Michael Lee</span> <i class="glyph-icon icon-angle-down"></i></a>
                                <div class="dropdown-menu float-right">
                                    <div class="box-sm">
                                        <div class="login-box clearfix">
                                            <div class="user-img"><a class="change-img" href="#" title="">Change photo</a>
                                                <img alt="" src="{{url('/admin-assets/image-resources/gravatar.jpg')}}">
                                            </div>
                                            <div class="user-info">
                                                <span>Michael Lee <i>UX/UI developer</i></span> <a href="#" title="Edit profile">Edit profile</a>
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
    @include('includes.backend._script')
    @yield('script')
</footer>

</html>