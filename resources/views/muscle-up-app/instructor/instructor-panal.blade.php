@extends('layouts.backend-main')
@section('title')
    Admin Dashboard
@stop

@section('dashboard_link')
    {{route('admin-dashboard')}}
@stop
@section('user_type')
    Admin
@stop

@section('sidebar_content')

@stop

@section('content')
    <div id="sb-site">
        <div class="sb-slidebar bg-black sb-right sb-style-overlay">
            <div class="scrollable-content scrollable-slim-sidebar">
                <div class="pad15A">
                    <a class="popover-title" data-target="#sidebar-toggle-1" data-toggle=
                    "collapse" href="#" title="">Cloud status <span class="caret"></span></a>

                    <div class="collapse in" id="sidebar-toggle-1">
                        <div class="pad15A">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class=
                                         "text-center font-gray pad5B text-transform-upr font-size-12">
                                        New visits
                                    </div>


                                    <div class="chart-alt-3 font-gray-dark" data-percent="55">
                                        <span>55</span>%
                                    </div>
                                </div>


                                <div class="col-md-4">
                                    <div class=
                                         "text-center font-gray pad5B text-transform-upr font-size-12">
                                        Bounce rate
                                    </div>


                                    <div class="chart-alt-3 font-gray-dark" data-percent="46">
                                        <span>46</span>%
                                    </div>
                                </div>


                                <div class="col-md-4">
                                    <div class=
                                         "text-center font-gray pad5B text-transform-upr font-size-12">
                                        Server load
                                    </div>


                                    <div class="chart-alt-3 font-gray-dark" data-percent="92">
                                        <span>92</span>%
                                    </div>
                                </div>
                            </div>


                            <div class="divider mrg15T mrg15B">
                            </div>


                            <div class="text-center">
                                <a class=
                                   "btn center-div btn-info mrg5T btn-sm text-transform-upr updateEasyPieChart"
                                   href="#"><i class="glyph-icon icon-refresh"></i> Update charts</a>
                            </div>
                        </div>
                    </div>


                    <div class="clear">
                    </div>
                    <a class="popover-title" data-target="#sidebar-toggle-6" data-toggle=
                    "collapse" href="#" title="">Latest transfers <span class=
                                                                        "caret"></span></a>

                    <div class="collapse in" id="sidebar-toggle-6">
                        <ul class="files-box">
                            <li>
                                <i class="files-icon glyph-icon font-red icon-file-archive-o"></i>

                                <div class="files-content">
                                    <b>blog_export.zip</b>

                                    <div class="files-date">
                                        <i class="glyph-icon icon-clock-o"></i> added on <b>22.10.2014</b>
                                    </div>
                                </div>


                                <div class="files-buttons">
                                    <a class="btn btn-xs hover-info tooltip-button" data-placement="left" href="#" title="Download"><i class="glyph-icon icon-cloud-download"></i></a> <a class=
                                                                                                                                                                                          "btn btn-xs hover-danger tooltip-button" data-placement="left" href=
                                                                                                                                                                                          "#" title="Delete"><i class="glyph-icon icon-times"></i></a>
                                </div>
                            </li>


                            <li class="divider">
                            </li>


                            <li>
                                <i class="files-icon glyph-icon icon-file-code-o"></i>

                                <div class="files-content">
                                    <b>homepage-test.html</b>

                                    <div class="files-date">
                                        <i class="glyph-icon icon-clock-o"></i> added <b>19.10.2014</b>
                                    </div>
                                </div>


                                <div class="files-buttons">
                                    <a class="btn btn-xs hover-info tooltip-button" data-placement="left"
                                       href="#" title="Download"><i class=
                                                                    "glyph-icon icon-cloud-download"></i></a> <a class=
                                                                                                                 "btn btn-xs hover-danger tooltip-button" data-placement="left" href=
                                                                                                                 "#" title="Delete"><i class="glyph-icon icon-times"></i></a>
                                </div>
                            </li>


                            <li class="divider">
                            </li>


                            <li>
                                <i class="files-icon glyph-icon font-yellow icon-file-image-o"></i>

                                <div class="files-content">
                                    <b>monthlyReport.jpg</b>

                                    <div class="files-date">
                                        <i class="glyph-icon icon-clock-o"></i> added on <b>10.9.2014</b>
                                    </div>
                                </div>


                                <div class="files-buttons">
                                    <a class="btn btn-xs hover-info tooltip-button" data-placement="left"
                                       href="#" title="Download"><i class=
                                                                    "glyph-icon icon-cloud-download"></i></a> <a class=
                                                                                                                 "btn btn-xs hover-danger tooltip-button" data-placement="left" href=
                                                                                                                 "#" title="Delete"><i class="glyph-icon icon-times"></i></a>
                                </div>
                            </li>


                            <li class="divider">
                            </li>


                            <li>
                                <i class="files-icon glyph-icon font-green icon-file-word-o"></i>

                                <div class="files-content">
                                    <b>new_presentation.doc</b>

                                    <div class="files-date">
                                        <i class="glyph-icon icon-clock-o"></i> added on <b>5.9.2014</b>
                                    </div>
                                </div>


                                <div class="files-buttons">
                                    <a class="btn btn-xs hover-info tooltip-button" data-placement="left"
                                       href="#" title="Download"><i class=
                                                                    "glyph-icon icon-cloud-download"></i></a> <a class=
                                                                                                                 "btn btn-xs hover-danger tooltip-button" data-placement="left" href=
                                                                                                                 "#" title="Delete"><i class="glyph-icon icon-times"></i></a>
                                </div>
                            </li>
                        </ul>
                    </div>


                    <div class="clear">
                    </div>
                    <a class="popover-title" data-target="#sidebar-toggle-3" data-toggle=
                    "collapse" href="#" title="">Tasks for today <span class=
                                                                       "caret"></span></a>

                    <div class="collapse in" id="sidebar-toggle-3">
                        <ul class="progress-box">
                            <li>
                                <div class="progress-title">
                                    New features development <b>87%</b>
                                </div>


                                <div class="progressbar-smaller progressbar" data-value="87">
                                    <div class="progressbar-value bg-azure">
                                        <div class="progressbar-overlay">
                                        </div>
                                    </div>
                                </div>
                            </li>


                            <li>
                                <div class="progress-title">
                                    Finishing uploading files <b>66%</b>
                                </div>


                                <div class="progressbar-smaller progressbar" data-value="66">
                                    <div class="progressbar-value bg-red">
                                        <div class="progressbar-overlay">
                                        </div>
                                    </div>
                                </div>
                            </li>


                            <li>
                                <div class="progress-title">
                                    Creating tutorials <b>58%</b>
                                </div>


                                <div class="progressbar-smaller progressbar" data-value="58">
                                    <div class="progressbar-value bg-blue-alt">
                                    </div>
                                </div>
                            </li>


                            <li>
                                <div class="progress-title">
                                    Frontend bonus theme <b>74%</b>
                                </div>


                                <div class="progressbar-smaller progressbar" data-value="74">
                                    <div class="progressbar-value bg-purple">
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>


                    <div class="clear">
                    </div>
                    <a class="popover-title" data-target="#sidebar-toggle-4" data-toggle=
                    "collapse" href="#" title="">Pending notifications <span class=
                                                                             "bs-label bg-orange tooltip-button" title="Label example">New</span>
                        <span class="caret"></span></a>

                    <div class="collapse in" id="sidebar-toggle-4">
                        <ul class="notifications-box notifications-box-alt">
                            <li>
                                <span class="bg-purple icon-notification glyph-icon icon-users"></span>
                                <span class="notification-text">This is an error notification</span>

                                <div class="notification-time">
                                    a few seconds ago <span class="glyph-icon icon-clock-o"></span>
                                </div>
                                <a class="notification-btn btn btn-xs btn-black tooltip-button"
                                   data-placement="left" href="#" title="View details"><i class=
                                                                                          "glyph-icon icon-arrow-right"></i></a>
                            </li>


                            <li>
								<span class=
                                      "bg-warning icon-notification glyph-icon icon-ticket"></span>
                                <span class="notification-text">This is a warning notification</span>

                                <div class="notification-time">
                                    <b>15</b> minutes ago <span class="glyph-icon icon-clock-o"></span>
                                </div>
                                <a class="notification-btn btn btn-xs btn-black tooltip-button"
                                   data-placement="left" href="#" title="View details"><i class=
                                                                                          "glyph-icon icon-arrow-right"></i></a>
                            </li>


                            <li>
                                <span class="bg-green icon-notification glyph-icon icon-random"></span>
                            <span class="notification-text font-green">A success message
								example.</span>

                                <div class="notification-time">
                                    <b>2 hours</b> ago <span class="glyph-icon icon-clock-o"></span>
                                </div>
                                <a class="notification-btn btn btn-xs btn-black tooltip-button"
                                   data-placement="left" href="#" title="View details"><i class=
                                                                                          "glyph-icon icon-arrow-right"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div id="page-wrapper">
            <div id="mobile-navigation">
                <button class="collapsed" data-target="#page-sidebar" data-toggle=
                "collapse" id="nav-toggle"><span></span></button>
            </div>

            <div id="page-sidebar">
                <div class="logo-bg" id="header-logo">
                    <a class="logo-content-big" href="../admin/New%20folder/index-2.html"
                       title="DelightUI">Delight <i>UI</i> <span>Material Design Dashboard
					Template</span></a> <a class="logo-content-small" href=
                    "../admin/New%20folder/index-2.html" title="DelightUI">Delight <i>UI</i>
                        <span>Material Design Dashboard Template</span></a> <a href="#" id=
                    "close-sidebar" title="Close sidebar"><i class=
                                                             "glyph-icon icon-outdent"></i></a>
                </div>


                <div class="scroll-sidebar">
                    <ul id="sidebar-menu">
                        <li class="header"><span>Overview</span>
                        </li>


                        <li>
                            <a href="../admin/New%20folder/index-2.html" title=
                            "Admin Dashboard"><i class="glyph-icon icon-linecons-tv"></i>
                                <span>Admin dashboard</span></a>
                        </li>
                    </ul>
                </div>
            </div>

            <div id="page-content-wrapper">
                <div id="page-content">
                    <div id="page-header">
                        <div id="header-nav-left">
                            <a class="header-btn" href="../admin/New%20folder/lockscreen-3.html" id=
                            "logout-btn" title="Lockscreen page example"><i class=
                                                                            "glyph-icon icon-linecons-lock"></i></a>

                            <div class="user-account-btn dropdown">
                                <a class="user-profile clearfix" data-toggle="dropdown" href="#" title="My Account"><img alt="Profile image" src="/admin-assets/image-resources/gravatar.jpg" width="28">
                                    <span>MichaelLee</span>
                                    <i class="glyph-icon icon-angle-down"></i>
                                </a>

                                <div class="dropdown-menu float-right">
                                    <div class="box-sm">
                                        <div class="login-box clearfix">
                                            <div class="user-img"><a class="change-img" href="#" title="">Change
                                                    photo</a> <img alt="" src=
                                                "/admin-assets/image-resources/gravatar.jpg"></div>


                                            <div class="user-info">
                                                <span>Michael Lee <i>UX/UI developer</i></span> <a href="#" title=
                                                "Edit profile">Edit profile</a> <a href="#" title=
                                                "View notifications">View notifications</a>
                                            </div>
                                        </div>


                                        <div class="divider">
                                        </div>


                                        <ul class="reset-ul mrg5B">
                                            <li>
                                                <a href="#">View login page example <i class=
                                                                                       "glyph-icon float-right icon-caret-right"></i></a>
                                            </li>


                                            <li>
                                                <a href="#">View lockscreen example <i class=
                                                                                       "glyph-icon float-right icon-caret-right"></i></a>
                                            </li>


                                            <li>
                                                <a href="#">View account details <i class=
                                                                                    "glyph-icon float-right icon-caret-right"></i></a>
                                            </li>
                                        </ul>


                                        <div class="button-pane button-pane-alt pad5L pad5R text-center">
                                            <a class="btn btn-flat display-block font-normal btn-danger" href=
                                            "#"><i class="glyph-icon icon-power-off"></i> Logout</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div id="header-nav-right">
                            <a class="hdr-btn popover-button" data-id="#popover-search"
                               data-placement="bottom" href="#" title="Search"><i class=
                                                                                  "glyph-icon icon-search"></i></a>

                            <div class="hide" id="popover-search">
                                <div class="pad5A box-md">
                                    <div class="input-group">
                                        <input class="form-control" placeholder="Search terms here ..." type=
                                        "text"> <span class="input-group-btn"><a class="btn btn-primary"
                                                                                 href="#">Search</a></span>
                                    </div>
                                </div>
                            </div>


                            <div class="dropdown" id="dashnav-btn">
                                <a class="popover-button-header tooltip-button" data-placement="bottom"
                                   data-toggle="dropdown" href="#" title="Dashboard Quick Menu"><i class=
                                                                                                   "glyph-icon icon-linecons-cog"></i></a>

                                <div class="dropdown-menu float-left">
                                    <div class="box-sm">
                                        <div class="pad5T pad5B pad10L pad10R dashboard-buttons clearfix">
                                            <a class="btn vertical-button hover-blue-alt" href="#" title=
                                            ""><span class=
                                                     "glyph-icon icon-separator-vertical pad0A medium"><i class=
                                                                                                          "glyph-icon icon-dashboard opacity-80 font-size-20"></i></span>
                                                Dashboard</a> <a class="btn vertical-button hover-green" href="#"
                                                                 title=""><span class=
                                                                                "glyph-icon icon-separator-vertical pad0A medium"><i class=
                                                                                                                                     "glyph-icon icon-tags opacity-80 font-size-20"></i></span>
                                                Widgets</a> <a class="btn vertical-button hover-orange" href="#"
                                                               title=""><span class=
                                                                              "glyph-icon icon-separator-vertical pad0A medium"><i class=
                                                                                                                                   "glyph-icon icon-fire opacity-80 font-size-20"></i></span>
                                                Tables</a> <a class="btn vertical-button hover-orange" href="#"
                                                              title=""><span class=
                                                                             "glyph-icon icon-separator-vertical pad0A medium"><i class=
                                                                                                                                  "glyph-icon icon-bar-chart-o opacity-80 font-size-20"></i></span>
                                                Charts</a> <a class="btn vertical-button hover-purple" href="#"
                                                              title=""><span class=
                                                                             "glyph-icon icon-separator-vertical pad0A medium"><i class=
                                                                                                                                  "glyph-icon icon-laptop opacity-80 font-size-20"></i></span>
                                                Buttons</a> <a class="btn vertical-button hover-azure" href="#"
                                                               title=""><span class=
                                                                              "glyph-icon icon-separator-vertical pad0A medium"><i class=
                                                                                                                                   "glyph-icon icon-code opacity-80 font-size-20"></i></span>
                                                Panels</a>
                                        </div>


                                        <div class="divider">
                                        </div>


                                        <div class="pad5T pad5B pad10L pad10R dashboard-buttons clearfix">
                                            <a class="btn vertical-button remove-border btn-info" href="#"
                                               title=""><span class=
                                                              "glyph-icon icon-separator-vertical pad0A medium"><i class=
                                                                                                                   "glyph-icon icon-dashboard opacity-80 font-size-20"></i></span>
                                                Dashboard</a> <a class=
                                                                 "btn vertical-button remove-border btn-danger" href="#" title=
                                                                 ""><span class=
                                                                          "glyph-icon icon-separator-vertical pad0A medium"><i class=
                                                                                                                               "glyph-icon icon-tags opacity-80 font-size-20"></i></span>
                                                Widgets</a> <a class="btn vertical-button remove-border btn-purple"
                                                               href="#" title=""><span class=
                                                                                       "glyph-icon icon-separator-vertical pad0A medium"><i class=
                                                                                                                                            "glyph-icon icon-fire opacity-80 font-size-20"></i></span>
                                                Tables</a> <a class="btn vertical-button remove-border btn-azure"
                                                              href="#" title=""><span class=
                                                                                      "glyph-icon icon-separator-vertical pad0A medium"><i class=
                                                                                                                                           "glyph-icon icon-bar-chart-o opacity-80 font-size-20"></i></span>
                                                Charts</a> <a class="btn vertical-button remove-border btn-yellow"
                                                              href="#" title=""><span class=
                                                                                      "glyph-icon icon-separator-vertical pad0A medium"><i class=
                                                                                                                                           "glyph-icon icon-laptop opacity-80 font-size-20"></i></span>
                                                Buttons</a> <a class="btn vertical-button remove-border btn-warning"
                                                               href="#" title=""><span class=
                                                                                       "glyph-icon icon-separator-vertical pad0A medium"><i class=
                                                                                                                                            "glyph-icon icon-code opacity-80 font-size-20"></i></span>
                                                Panels</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a class="hdr-btn" href="#" id="fullscreen-btn" title=
                            "Fullscreen"><i class="glyph-icon icon-arrows-alt"></i></a> <a class=
                                                                                           "hdr-btn sb-toggle-left" href="#" id="chatbox-btn" title=
                                                                                           "Chat sidebar"><i class="glyph-icon icon-linecons-paper-plane"></i></a>

                            <div class="dropdown" id="notifications-btn">
                                <a data-toggle="dropdown" href="#" title=""><span class=
                                                                                  "small-badge bg-yellow"></span> <i class=
                                                                                                                     "glyph-icon icon-linecons-megaphone"></i></a>

                                <div class="dropdown-menu box-md float-left">
                                    <div class="popover-title display-block clearfix pad10A">
                                        Notifications <a class=
                                                         "text-transform-cap font-primary font-normal btn-link float-right"
                                                         href="#" title="View more options">More options...</a>
                                    </div>


                                    <div class="scrollable-content scrollable-slim-box">
                                        <ul class="no-border notifications-box">
                                            <li>
												<span class=
                                                      "bg-danger icon-notification glyph-icon icon-bullhorn"></span>
                                            <span class="notification-text">This is an error
												notification</span>

                                                <div class="notification-time">
                                                    a few seconds ago <span class="glyph-icon icon-clock-o"></span>
                                                </div>
                                            </li>


                                            <li>
												<span class=
                                                      "bg-warning icon-notification glyph-icon icon-users"></span>
                                            <span class="notification-text font-blue">This is a warning
												notification</span>

                                                <div class="notification-time">
                                                    <b>15</b> minutes ago <span class=
                                                                                "glyph-icon icon-clock-o"></span>
                                                </div>
                                            </li>


                                            <li>
												<span class=
                                                      "bg-green icon-notification glyph-icon icon-sitemap"></span>
                                            <span class="notification-text font-green">A success message
												example.</span>

                                                <div class="notification-time">
                                                    <b>2 hours</b> ago <span class="glyph-icon icon-clock-o"></span>
                                                </div>
                                            </li>


                                            <li>
												<span class=
                                                      "bg-azure icon-notification glyph-icon icon-random"></span>
                                            <span class="notification-text">This is an error
												notification</span>

                                                <div class="notification-time">
                                                    a few seconds ago <span class="glyph-icon icon-clock-o"></span>
                                                </div>
                                            </li>


                                            <li>
												<span class=
                                                      "bg-warning icon-notification glyph-icon icon-ticket"></span>
                                            <span class="notification-text">This is a warning
												notification</span>

                                                <div class="notification-time">
                                                    <b>15</b> minutes ago <span class=
                                                                                "glyph-icon icon-clock-o"></span>
                                                </div>
                                            </li>


                                            <li>
												<span class=
                                                      "bg-blue icon-notification glyph-icon icon-user"></span>
                                            <span class="notification-text font-blue">Alternate notification
												styling.</span>

                                                <div class="notification-time">
                                                    <b>2 hours</b> ago <span class="glyph-icon icon-clock-o"></span>
                                                </div>
                                            </li>


                                            <li>
												<span class=
                                                      "bg-purple icon-notification glyph-icon icon-user"></span>
                                            <span class="notification-text">This is an error
												notification</span>

                                                <div class="notification-time">
                                                    a few seconds ago <span class="glyph-icon icon-clock-o"></span>
                                                </div>
                                            </li>


                                            <li>
												<span class=
                                                      "bg-warning icon-notification glyph-icon icon-user"></span>
                                            <span class="notification-text">This is a warning
												notification</span>

                                                <div class="notification-time">
                                                    <b>15</b> minutes ago <span class=
                                                                                "glyph-icon icon-clock-o"></span>
                                                </div>
                                            </li>


                                            <li>
												<span class=
                                                      "bg-green icon-notification glyph-icon icon-user"></span>
                                            <span class="notification-text font-green">A success message
												example.</span>

                                                <div class="notification-time">
                                                    <b>2 hours</b> ago <span class="glyph-icon icon-clock-o"></span>
                                                </div>
                                            </li>


                                            <li>
												<span class=
                                                      "bg-purple icon-notification glyph-icon icon-user"></span>
                                            <span class="notification-text">This is an error
												notification</span>

                                                <div class="notification-time">
                                                    a few seconds ago <span class="glyph-icon icon-clock-o"></span>
                                                </div>
                                            </li>


                                            <li>
												<span class=
                                                      "bg-warning icon-notification glyph-icon icon-user"></span>
                                            <span class="notification-text">This is a warning
												notification</span>

                                                <div class="notification-time">
                                                    <b>15</b> minutes ago <span class=
                                                                                "glyph-icon icon-clock-o"></span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>


                                    <div class=
                                         "button-pane button-pane-alt pad5T pad5L pad5R text-center">
                                        <a class="btn btn-flat btn-primary" href="#" title=
                                        "View all notifications">View all notifications</a>
                                    </div>
                                </div>
                            </div>


                            <div class="dropdown" id="progress-btn">
                                <a data-toggle="dropdown" href="#" title=""><span class=
                                                                                  "small-badge bg-azure"></span> <i class=
                                                                                                                    "glyph-icon icon-linecons-params"></i></a>

                                <div class="dropdown-menu pad0A box-sm float-left" id=
                                "progress-dropdown">
                                    <div class="scrollable-content scrollable-slim-box">
                                        <ul class="no-border progress-box progress-box-links">
                                            <li>
                                                <a href="#" title="">
                                                    <div class="progress-title">
                                                        Finishing uploading files <b>23%</b>
                                                    </div>


                                                    <div class="progressbar-smaller progressbar" data-value="23">
                                                        <div class="progressbar-value bg-blue-alt">
                                                            <div class="progressbar-overlay">
                                                            </div>
                                                        </div>
                                                    </div></a>
                                            </li>


                                            <li>
                                                <a href="#" title="">
                                                    <div class="progress-title">
                                                        Roadmap progress <b>91%</b>
                                                    </div>


                                                    <div class="progressbar-smaller progressbar" data-value="91">
                                                        <div class="progressbar-value bg-red">
                                                            <div class="progressbar-overlay">
                                                            </div>
                                                        </div>
                                                    </div></a>
                                            </li>


                                            <li>
                                                <a href="#" title="">
                                                    <div class="progress-title">
                                                        Images upload <b>58%</b>
                                                    </div>


                                                    <div class="progressbar-smaller progressbar" data-value="58">
                                                        <div class="progressbar-value bg-green">
                                                        </div>
                                                    </div></a>
                                            </li>


                                            <li>
                                                <a href="#" title="">
                                                    <div class="progress-title">
                                                        WordPress migration <b>74%</b>
                                                    </div>


                                                    <div class="progressbar-smaller progressbar" data-value="74">
                                                        <div class="progressbar-value bg-purple">
                                                        </div>
                                                    </div></a>
                                            </li>


                                            <li>
                                                <a href="#" title="">
                                                    <div class="progress-title">
                                                        Agile development procedures <b>91%</b>
                                                    </div>


                                                    <div class="progressbar-smaller progressbar" data-value="91">
                                                        <div class="progressbar-value bg-black">
                                                            <div class="progressbar-overlay">
                                                            </div>
                                                        </div>
                                                    </div></a>
                                            </li>


                                            <li>
                                                <a href="#" title="">
                                                    <div class="progress-title">
                                                        Systems integration <b>58%</b>
                                                    </div>


                                                    <div class="progressbar-smaller progressbar" data-value="58">
                                                        <div class="progressbar-value bg-azure">
                                                        </div>
                                                    </div></a>
                                            </li>


                                            <li>
                                                <a href="#" title="">
                                                    <div class="progress-title">
                                                        Code optimizations <b>97%</b>
                                                    </div>


                                                    <div class="progressbar-smaller progressbar" data-value="97">
                                                        <div class="progressbar-value bg-yellow">
                                                        </div>
                                                    </div></a>
                                            </li>
                                        </ul>
                                    </div>


                                    <div class="button-pane button-pane-alt pad5A text-center">
                                        <a class="btn btn-flat display-block font-normal hover-green" href=
                                        "#" title="View all notifications">View all notifications</a>
                                    </div>
                                </div>
                            </div>


                            <div class="dropdown" id="cloud-btn">
                                <a class="tooltip-button sb-toggle-right" data-placement="bottom" href=
                                "#" title="Statistics Sidebar"><i class=
                                                                  "glyph-icon icon-linecons-cloud"></i></a>
                            </div>
                        </div>
                    </div>

                    <div class="row mailbox-wrapper">
                        <div class="col-md-4">
                            <div class="panel-layout">
                                <div class="panel-box">
                                    <div class="panel-content image-box">
                                        <div class="ribbon">
                                            <div class="bg-primary">
                                                Ribbon
                                            </div>
                                        </div>

                                    </div>


                                </div>
                            </div>
                        </div>


                        {{--<img src="{{ asset('uploads/trainees/profile_imgs/') }}{{'/'.$trainee->profile_img }}" style="width:150px; height:150px; float:left; border-radius:50%; margin-right:25px;">--}}
                        {{--<form enctype="multipart/form-data" action="{{ route('trainee-image') }}" method="POST">--}}
                        <label>Update Profile Image</label>
                        <input type="file" name="avatar">
                        <input type="hidden" name="_token" value="{{ csrf_token() }}">
                        <input type="submit" class="pull-right btn btn-sm btn-primary">
                        </form>


                        <div class="col-md-8">
                            <div class="content-box">
                                <div class="mail-header clearfix">
                                    <span class="mail-title">My Profile</span>

                                    <div class="btn-group">
                                        <a class="btn btn-default btn-small dropdown-toggle" data-toggle=
                                        "dropdown" href="#"><span class=
                                                                  "glyph-icon icon-caret-down"></span></a>

                                        <ul class="dropdown-menu">
                                            <li>
                                                <a href="#">Action</a>
                                            </li>


                                            <li>
                                                <a href="#">Another action</a>
                                            </li>


                                            <li>
                                                <a href="#">Something else here</a>
                                            </li>


                                            <li class="divider">
                                            </li>


                                            <li>
                                                <a href="#">Separated link</a>
                                            </li>
                                        </ul>
                                    </div>


                                    <div class="float-right col-md-4 pad0A">
                                        <div class="input-group">
                                            <input class="form-control" type="text">

                                            <div class="input-group-btn">
                                                <button class="btn btn-default" tabindex="-1" type=
                                                "button"><i class="glyph-icon icon-search"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div class="content-box bg-white post-box">
								<textarea class="textarea-autosize" name="" placeholder=
                                "What are you doing right now?"></textarea>
                            </div>
                            <div class="example-box-wrapper">
                                <ul class="list-group row list-group-icons">
                                    {{--<li class="col-md-3 active">--}}
                                    {{--<a href="{{route('trainee-personal-detail', $trainee->user_id)}}" class="list-group-item" data-toggle="tab" ><i class="glyph-icon font-red icon-bullhorn"></i>--}}
                                    {{--Personal Information</a>--}}
                                    {{--</li>--}}


                                    {{--<li class="col-md-3">--}}
                                    {{--<a href="{{route('trainee-view-medical',$trainee->id)}}" class="list-group-item" data-toggle="tab" href=--}}
                                    {{--"#tab-example-1"><i class="glyph-icon icon-dashboard"></i> Medical Detail</a>--}}
                                    {{--</li>--}}

                                    <li class="col-md-3">
                                        <a class="list-group-item" data-toggle="tab" href=
                                        "#tab-example-2"><i class="glyph-icon font-primary icon-camera"></i>
                                            Messages Inbox</a>
                                    </li>


                                    <li class="col-md-3">
                                        <a class="list-group-item" data-toggle="tab" href=
                                        "#tab-example-3"><i class="glyph-icon font-blue-alt icon-globe"></i>
                                            FAQ Section</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@stop
