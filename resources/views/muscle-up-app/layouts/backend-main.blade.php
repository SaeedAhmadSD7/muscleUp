<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <!--[if IE]>
    <meta http-equiv='X-UA-Compatible' content='IE=edge,chrome=1'>
    <![endif]-->
    <meta content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no" name="viewport">
    <title>@yield('title')</title>

    @include('muscle-up-app.includes.backend._stylesheet')
    @yield('style-sheet')
</head>
<body>
<div id="sb-site">
    <div id="page-wrapper">
        @include('muscle-up-app.includes._message')
        @include('muscle-up-app.includes.backend._sidebar')
        <div id="page-content-wrapper">
            <div id="page-content">
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
                                            <a class="btn btn-flat display-block font-normal btn-danger" href="#"><i class="glyph-icon icon-power-off"></i> Logout</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="header-nav-right">
                            <div class="dropdown" id="notifications-btn">
                                <a data-toggle="dropdown" href="#" title=""><span class="small-badge bg-yellow"></span> <i
                                            class="glyph-icon icon-linecons-megaphone"></i></a>
                                <div class="dropdown-menu box-md float-left">
                                    <div class="popover-title display-block clearfix pad10A">
                                        Notifications <a
                                                class="text-transform-cap font-primary font-normal btn-link float-right"
                                                href="#" title="View more options">More options...</a>
                                    </div>
                                    <div class="scrollable-content scrollable-slim-box">
                                        <ul class="no-border notifications-box">
                                            <li>
                                                <span class="bg-danger icon-notification glyph-icon icon-bullhorn"></span>
                                                <span class="notification-text">This is an error notification</span>
                                                <div class="notification-time">
                                                    a few seconds ago <span class="glyph-icon icon-clock-o"></span>
                                                </div>
                                            </li>
                                            <li>
                                                <span class="bg-warning icon-notification glyph-icon icon-users"></span>
                                                <span class="notification-text font-blue">This is a warning notification</span>
                                                <div class="notification-time">
                                                    <b>15</b> minutes ago <span class="glyph-icon icon-clock-o"></span>
                                                </div>
                                            </li>
                                            <li>
                                                <span class="bg-green icon-notification glyph-icon icon-sitemap"></span>
                                                <span class="notification-text font-green">A success message example.</span>
                                                <div class="notification-time">
                                                    <b>2 hours</b> ago <span class="glyph-icon icon-clock-o"></span>
                                                </div>
                                            </li>
                                            <li>
                                                <span class="bg-azure icon-notification glyph-icon icon-random"></span>
                                                <span class="notification-text">This is an error notification</span>
                                                <div class="notification-time">
                                                    a few seconds ago <span class="glyph-icon icon-clock-o"></span>
                                                </div>
                                            </li>
                                            <li>
                                                <span class="bg-warning icon-notification glyph-icon icon-ticket"></span>
                                                <span class="notification-text">This is a warning notification</span>
                                                <div class="notification-time">
                                                    <b>15</b> minutes ago <span class="glyph-icon icon-clock-o"></span>
                                                </div>
                                            </li>
                                            <li>
                                                <span class="bg-blue icon-notification glyph-icon icon-user"></span> <span
                                                        class="notification-text font-blue">Alternate notification styling.</span>
                                                <div class="notification-time">
                                                    <b>2 hours</b> ago <span class="glyph-icon icon-clock-o"></span>
                                                </div>
                                            </li>
                                            <li>
                                                <span class="bg-purple icon-notification glyph-icon icon-user"></span> <span
                                                        class="notification-text">This is an error notification</span>
                                                <div class="notification-time">
                                                    a few seconds ago <span class="glyph-icon icon-clock-o"></span>
                                                </div>
                                            </li>
                                            <li>
                                                <span class="bg-warning icon-notification glyph-icon icon-user"></span>
                                                <span class="notification-text">This is a warning notification</span>
                                                <div class="notification-time">
                                                    <b>15</b> minutes ago <span class="glyph-icon icon-clock-o"></span>
                                                </div>
                                            </li>
                                            <li>
                                                <span class="bg-green icon-notification glyph-icon icon-user"></span> <span
                                                        class="notification-text font-green">A success message example.</span>
                                                <div class="notification-time">
                                                    <b>2 hours</b> ago <span class="glyph-icon icon-clock-o"></span>
                                                </div>
                                            </li>
                                            <li>
                                                <span class="bg-purple icon-notification glyph-icon icon-user"></span> <span
                                                        class="notification-text">This is an error notification</span>
                                                <div class="notification-time">
                                                    a few seconds ago <span class="glyph-icon icon-clock-o"></span>
                                                </div>
                                            </li>
                                            <li>
                                                <span class="bg-warning icon-notification glyph-icon icon-user"></span>
                                                <span class="notification-text">This is a warning notification</span>
                                                <div class="notification-time">
                                                    <b>15</b> minutes ago <span class="glyph-icon icon-clock-o"></span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="button-pane button-pane-alt pad5T pad5L pad5R text-center">
                                        <a class="btn btn-flat btn-primary" href="#"
                                           title="View all notifications">View all notifications</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="row">
                    @yield('content')
                </div>
            </div>
        </div>

    </div>
</div>
</body>

<footer>
    @include('muscle-up-app.includes.backend._script')
    @yield('script')
</footer>

</html>