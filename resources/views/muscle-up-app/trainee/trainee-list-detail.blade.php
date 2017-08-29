@extends('layouts.backend-main')
@section('title')
    Trainer List Detail
@stop

@section('dashboard_link')
    {{route('gym')}}
@stop
@section('user_type')
    Gym
@stop

@section('sidebar_content')

@stop

@section('content')
    <div id="page-header">
                        <div id="header-nav-left">
                            <a class="header-btn" href="New%20folder/lockscreen-3.html" id="logout-btn" title="Lockscreen page example"><i class="glyph-icon icon-linecons-lock"></i></a>

                            <div class="user-account-btn dropdown">
                                <a class="user-profile clearfix" data-toggle="dropdown" href="#" title="My Account"><img alt="Profile image" src="/admin-assets/image-resources/gravatar.jpg" width="28"> <span>Michael Lee</span> <i class="glyph-icon icon-angle-down"></i></a>

                                <div class="dropdown-menu float-right">
                                    <div class="box-sm">
                                        <div class="login-box clearfix">
                                            <div class="user-img"><a class="change-img" href="#" title="">Change photo</a> <img alt="" src="/admin-assets/image-resources/gravatar.jpg"></div>


                                            <div class="user-info">
                                                <span>Michael Lee <i>UX/UI developer</i></span> <a href="#" title="Edit profile">Edit profile</a> <a href="#" title="View notifications">View notifications</a>
                                            </div>
                                        </div>


                                        <div class="divider">
                                        </div>


                                        <ul class="reset-ul mrg5B">
                                            <li>
                                                <a href="#">View login page example <i class="glyph-icon float-right icon-caret-right"></i></a>
                                            </li>


                                            <li>
                                                <a href="#">View lockscreen example <i class="glyph-icon float-right icon-caret-right"></i></a>
                                            </li>


                                            <li>
                                                <a href="#">View account details <i class="glyph-icon float-right icon-caret-right"></i></a>
                                            </li>
                                        </ul>


                                        <div class="button-pane button-pane-alt pad5L pad5R text-center">
                                            <a class="btn btn-flat display-block font-normal btn-danger" href="#"><i class="glyph-icon icon-power-off"></i> Logout</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div id="header-nav-right">
                            <a class="hdr-btn popover-button" data-id="#popover-search" data-placement="bottom" href="#" title="Search"><i class="glyph-icon icon-search"></i></a>

                            <div class="hide" id="popover-search">
                                <div class="pad5A box-md">
                                    <div class="input-group">
                                        <input class="form-control" placeholder="Search terms here ..." type="text"> <span class="input-group-btn"><a class="btn btn-primary" href="#">Search</a></span>
                                    </div>
                                </div>
                            </div>


                            <div class="dropdown" id="dashnav-btn">
                                <a class="popover-button-header tooltip-button" data-placement="bottom" data-toggle="dropdown" href="#" title="Dashboard Quick Menu"><i class="glyph-icon icon-linecons-cog"></i></a>

                                <div class="dropdown-menu float-left">
                                    <div class="box-sm">
                                        <div class="pad5T pad5B pad10L pad10R dashboard-buttons clearfix">
                                            <a class="btn vertical-button hover-blue-alt" href="#" title=""><span class="glyph-icon icon-separator-vertical pad0A medium"><i class="glyph-icon icon-dashboard opacity-80 font-size-20"></i></span> Dashboard</a> <a class="btn vertical-button hover-green" href="#" title=""><span class="glyph-icon icon-separator-vertical pad0A medium"><i class="glyph-icon icon-tags opacity-80 font-size-20"></i></span> Widgets</a> <a class="btn vertical-button hover-orange" href="#" title=""><span class="glyph-icon icon-separator-vertical pad0A medium"><i class="glyph-icon icon-fire opacity-80 font-size-20"></i></span> Tables</a> <a class="btn vertical-button hover-orange" href="#" title=""><span class="glyph-icon icon-separator-vertical pad0A medium"><i class="glyph-icon icon-bar-chart-o opacity-80 font-size-20"></i></span> Charts</a> <a class="btn vertical-button hover-purple" href="#" title=""><span class="glyph-icon icon-separator-vertical pad0A medium"><i class="glyph-icon icon-laptop opacity-80 font-size-20"></i></span> Buttons</a> <a class="btn vertical-button hover-azure" href="#" title=""><span class="glyph-icon icon-separator-vertical pad0A medium"><i class="glyph-icon icon-code opacity-80 font-size-20"></i></span> Panels</a>
                                        </div>


                                        <div class="divider">
                                        </div>


                                        <div class="pad5T pad5B pad10L pad10R dashboard-buttons clearfix">
                                            <a class="btn vertical-button remove-border btn-info" href="#" title=""><span class="glyph-icon icon-separator-vertical pad0A medium"><i class="glyph-icon icon-dashboard opacity-80 font-size-20"></i></span> Dashboard</a> <a class="btn vertical-button remove-border btn-danger" href="#" title=""><span class="glyph-icon icon-separator-vertical pad0A medium"><i class="glyph-icon icon-tags opacity-80 font-size-20"></i></span> Widgets</a> <a class="btn vertical-button remove-border btn-purple" href="#" title=""><span class="glyph-icon icon-separator-vertical pad0A medium"><i class="glyph-icon icon-fire opacity-80 font-size-20"></i></span> Tables</a> <a class="btn vertical-button remove-border btn-azure" href="#" title=""><span class="glyph-icon icon-separator-vertical pad0A medium"><i class="glyph-icon icon-bar-chart-o opacity-80 font-size-20"></i></span> Charts</a> <a class="btn vertical-button remove-border btn-yellow" href="#" title=""><span class="glyph-icon icon-separator-vertical pad0A medium"><i class="glyph-icon icon-laptop opacity-80 font-size-20"></i></span> Buttons</a> <a class="btn vertical-button remove-border btn-warning" href="#" title=""><span class="glyph-icon icon-separator-vertical pad0A medium"><i class="glyph-icon icon-code opacity-80 font-size-20"></i></span> Panels</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a class="hdr-btn" href="#" id="fullscreen-btn" title="Fullscreen"><i class="glyph-icon icon-arrows-alt"></i></a> <a class="hdr-btn sb-toggle-left" href="#" id="chatbox-btn" title="Chat sidebar"><i class="glyph-icon icon-linecons-paper-plane"></i></a>

                            <div class="dropdown" id="notifications-btn">
                                <a data-toggle="dropdown" href="#" title=""><span class="small-badge bg-yellow"></span> <i class="glyph-icon icon-linecons-megaphone"></i></a>

                                <div class="dropdown-menu box-md float-left">
                                    <div class="popover-title display-block clearfix pad10A">
                                        Notifications <a class="text-transform-cap font-primary font-normal btn-link float-right" href="#" title="View more options">More options...</a>
                                    </div>


                                    <div class="scrollable-content scrollable-slim-box">
                                        <ul class="no-border notifications-box">
                                            <li>
                                                <span class="bg-danger icon-notification glyph-icon icon-bullhorn"></span> <span class="notification-text">This is an error notification</span>

                                                <div class="notification-time">
                                                    a few seconds ago <span class="glyph-icon icon-clock-o"></span>
                                                </div>
                                            </li>


                                            <li>
                                                <span class="bg-warning icon-notification glyph-icon icon-users"></span> <span class="notification-text font-blue">This is a warning notification</span>

                                                <div class="notification-time">
                                                    <b>15</b> minutes ago <span class="glyph-icon icon-clock-o"></span>
                                                </div>
                                            </li>


                                            <li>
                                                <span class="bg-green icon-notification glyph-icon icon-sitemap"></span> <span class="notification-text font-green">A success message example.</span>

                                                <div class="notification-time">
                                                    <b>2 hours</b> ago <span class="glyph-icon icon-clock-o"></span>
                                                </div>
                                            </li>


                                            <li>
                                                <span class="bg-azure icon-notification glyph-icon icon-random"></span> <span class="notification-text">This is an error notification</span>

                                                <div class="notification-time">
                                                    a few seconds ago <span class="glyph-icon icon-clock-o"></span>
                                                </div>
                                            </li>


                                            <li>
                                                <span class="bg-warning icon-notification glyph-icon icon-ticket"></span> <span class="notification-text">This is a warning notification</span>

                                                <div class="notification-time">
                                                    <b>15</b> minutes ago <span class="glyph-icon icon-clock-o"></span>
                                                </div>
                                            </li>


                                            <li>
                                                <span class="bg-blue icon-notification glyph-icon icon-user"></span> <span class="notification-text font-blue">Alternate notification styling.</span>

                                                <div class="notification-time">
                                                    <b>2 hours</b> ago <span class="glyph-icon icon-clock-o"></span>
                                                </div>
                                            </li>


                                            <li>
                                                <span class="bg-purple icon-notification glyph-icon icon-user"></span> <span class="notification-text">This is an error notification</span>

                                                <div class="notification-time">
                                                    a few seconds ago <span class="glyph-icon icon-clock-o"></span>
                                                </div>
                                            </li>


                                            <li>
                                                <span class="bg-warning icon-notification glyph-icon icon-user"></span> <span class="notification-text">This is a warning notification</span>

                                                <div class="notification-time">
                                                    <b>15</b> minutes ago <span class="glyph-icon icon-clock-o"></span>
                                                </div>
                                            </li>


                                            <li>
                                                <span class="bg-green icon-notification glyph-icon icon-user"></span> <span class="notification-text font-green">A success message example.</span>

                                                <div class="notification-time">
                                                    <b>2 hours</b> ago <span class="glyph-icon icon-clock-o"></span>
                                                </div>
                                            </li>


                                            <li>
                                                <span class="bg-purple icon-notification glyph-icon icon-user"></span> <span class="notification-text">This is an error notification</span>

                                                <div class="notification-time">
                                                    a few seconds ago <span class="glyph-icon icon-clock-o"></span>
                                                </div>
                                            </li>


                                            <li>
                                                <span class="bg-warning icon-notification glyph-icon icon-user"></span> <span class="notification-text">This is a warning notification</span>

                                                <div class="notification-time">
                                                    <b>15</b> minutes ago <span class="glyph-icon icon-clock-o"></span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>


                                    <div class="button-pane button-pane-alt pad5T pad5L pad5R text-center">
                                        <a class="btn btn-flat btn-primary" href="#" title="View all notifications">View all notifications</a>
                                    </div>
                                </div>
                            </div>


                            <div class="dropdown" id="progress-btn">
                                <a data-toggle="dropdown" href="#" title=""><span class="small-badge bg-azure"></span> <i class="glyph-icon icon-linecons-params"></i></a>

                                <div class="dropdown-menu pad0A box-sm float-left" id="progress-dropdown">
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
                                        <a class="btn btn-flat display-block font-normal hover-green" href="#" title="View all notifications">View all notifications</a>
                                    </div>
                                </div>
                            </div>


                            <div class="dropdown" id="cloud-btn">
                                <a class="tooltip-button sb-toggle-right" data-placement="bottom" href="#" title="Statistics Sidebar"><i class="glyph-icon icon-linecons-cloud"></i></a>
                            </div>
                        </div>
                    </div>
    <div class="row mailbox-wrapper">

                        {{--<div class="col-md-3">--}}
                        {{--<div class="content-box nav-list mrg15B">--}}
                        {{--<div class="pad10A">--}}
                        {{--<a class="btn btn-success btn-lg btn-block" href="#" title="Compose new mail">Compose new mail</a>--}}
                        {{--</div>--}}


                        {{--<div class="list-group">--}}
                        {{--<a class="list-group-item" href="#" title=""><i class="glyph-icon font-gray icon-inbox"></i> Inbox <span class="badge bg-blue">83</span></a> <a class="list-group-item" href="#" title=""><i class="glyph-icon font-gray icon-envelope-o"></i> Sent Mail <span class="badge bg-azure">32</span></a> <a class="list-group-item" href="#" title=""><i class="glyph-icon font-gray icon-certificate"></i> Important <span class="badge bg-azure">32</span></a> <a class="list-group-item" href="#" title=""><i class="glyph-icon font-gray icon-file-text-o"></i> Drafts <span class="badge bg-azure">32</span></a> <a class="list-group-item" href="#" title=""><i class="glyph-icon font-gray icon-trash-o"></i> Trash <span class="badge bg-red">45</span></a>--}}
                        {{--</div>--}}
                        {{--</div>--}}


                        {{--<div class="content-box mrg15B">--}}
                        {{--<h3 class="content-box-header clearfix">Chat <small>(Online friends)</small></h3>--}}


                        {{--<div class="font-size-11 float-right">--}}
                        {{--<h3 class="content-box-header clearfix"><a href="#" title=""><i class="glyph-icon mrg5R opacity-hover icon-plus"></i></a> <a href="#" title=""><i class="glyph-icon opacity-hover icon-cog"></i></a></h3>--}}
                        {{--</div>--}}


                        {{--<div class="content-box-wrapper text-center clearfix">--}}
                        {{--<div class="status-badge mrg10A">--}}
                        {{--<img alt="" class="img-circle" src="/admin-assets/image-resources/people/testimonial1.jpg" width="40">--}}

                        {{--<div class="small-badge bg-red">--}}
                        {{--</div>--}}
                        {{--</div>--}}


                        {{--<div class="status-badge mrg10A">--}}
                        {{--<img alt="" class="img-circle" src="/admin-assets/image-resources/people/testimonial2.jpg" width="40">--}}

                        {{--<div class="small-badge bg-orange">--}}
                        {{--</div>--}}
                        {{--</div>--}}


                        {{--<div class="status-badge mrg10A">--}}
                        {{--<img alt="" class="img-circle" src="/admin-assets/image-resources/people/testimonial3.jpg" width="40">--}}

                        {{--<div class="small-badge bg-red">--}}
                        {{--</div>--}}
                        {{--</div>--}}


                        {{--<div class="status-badge mrg10A">--}}
                        {{--<img alt="" class="img-circle" src="/admin-assets/image-resources/people/testimonial4.jpg" width="40">--}}

                        {{--<div class="small-badge bg-green">--}}
                        {{--</div>--}}
                        {{--</div>--}}


                        {{--<div class="status-badge mrg10A">--}}
                        {{--<img alt="" class="img-circle" src="/admin-assets/image-resources/people/testimonial5.jpg" width="40">--}}

                        {{--<div class="small-badge bg-orange">--}}
                        {{--</div>--}}
                        {{--</div>--}}


                        {{--<div class="status-badge mrg10A">--}}
                        {{--<img alt="" class="img-circle" src="/admin-assets/image-resources/people/testimonial6.jpg" width="40">--}}

                        {{--<div class="small-badge bg-red">--}}
                        {{--</div>--}}
                        {{--</div>--}}


                        {{--<div class="status-badge mrg10A">--}}
                        {{--<img alt="" class="img-circle" src="/admin-assets/image-resources/people/testimonial7.jpg" width="40">--}}

                        {{--<div class="small-badge bg-green">--}}
                        {{--</div>--}}
                        {{--</div>--}}


                        {{--<div class="status-badge mrg10A">--}}
                        {{--<img alt="" class="img-circle" src="/admin-assets/image-resources/people/testimonial8.jpg" width="40">--}}

                        {{--<div class="small-badge bg-orange">--}}
                        {{--</div>--}}
                        {{--</div>--}}
                        {{--</div>--}}
                        {{--</div>--}}


                        {{--<div class="content-box mrg15B">--}}
                        {{--<h3 class="content-box-header clearfix">Circles <small>(Available options)</small></h3>--}}


                        {{--<div class="font-size-11 float-right">--}}
                        {{--<h3 class="content-box-header clearfix"><a href="#" title=""><i class="glyph-icon mrg5R opacity-hover icon-plus"></i></a> <a href="#" title=""><i class="glyph-icon opacity-hover icon-cog"></i></a></h3>--}}
                        {{--</div>--}}


                        {{--<div class="content-box-wrapper nav-list clearfix">--}}
                        {{--<div class="list-group">--}}
                        {{--<a class="list-group-item" href="#" title=""><i class="glyph-icon icon-circle-o float-left font-red"></i> Friends</a> <a class="list-group-item" href="#" title=""><i class="glyph-icon icon-circle-o float-left font-green"></i> Family</a> <a class="list-group-item" href="#" title=""><i class="glyph-icon icon-circle-o float-left font-blue"></i> Acquaintances</a> <a class="list-group-item" href="#" title=""><i class="glyph-icon icon-circle-o float-left font-orange"></i> Following</a> <a class="list-group-item" href="#" title=""><i class="glyph-icon icon-circle-o float-left font-gray"></i> Web developers</a>--}}
                        {{--</div>--}}
                        {{--</div>--}}
                        {{--</div>--}}


                        {{--<div class="content-box">--}}
                        {{--<h3 class="content-box-header clearfix">Tags <small>(Important notes)</small></h3>--}}


                        {{--<div class="font-size-11 float-right">--}}
                        {{--<h3 class="content-box-header clearfix"><a href="#" title=""><i class="glyph-icon mrg5R opacity-hover icon-plus"></i></a> <a href="#" title=""><i class="glyph-icon opacity-hover icon-cog"></i></a></h3>--}}
                        {{--</div>--}}


                        {{--<div class="content-box-wrapper nav-list clearfix">--}}
                        {{--<div class="list-group">--}}
                        {{--<a class="list-group-item" href="#" title="">Important <i class="glyph-icon font-primary icon-chevron-right mrg0R"></i></a> <a class="list-group-item" href="#" title="">Starred <i class="glyph-icon font-primary icon-chevron-right mrg0R"></i></a> <a class="list-group-item" href="#" title="">Forums <i class="glyph-icon font-primary icon-chevron-right mrg0R"></i></a> <a class="list-group-item" href="#" title="">Updates <i class="glyph-icon font-primary icon-chevron-right mrg0R"></i></a>--}}
                        {{--</div>--}}
                        {{--</div>--}}
                        {{--</div>--}}
                        {{--</div>--}}


                        <div class="col-md-9">
                            <div class="content-box">
                                <div class="mail-header clearfix">
                                    <div class="float-left">
                                        <span class="mail-title">View message</span>

                                        <div class="btn-group">
                                            <a class="btn btn-default btn-small dropdown-toggle" data-toggle="dropdown" href="#"><span class="glyph-icon icon-caret-down"></span></a>

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
                                    </div>


                                    <div class="float-right col-md-4 pad0A">
                                        <div class="input-group">
                                            <input class="form-control" type="text">

                                            <div class="input-group-btn">
                                                <button class="btn btn-default" tabindex="-1" type="button"><i class="glyph-icon icon-search"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <di v class="divider">
                            </div>


                            <div class="pad15A clearfix mrg10B">
                                <div class="float-left">
                                    <b>{{$trainee->first_name}}</b> ({{$trainee->first_name}})
                                </div>


                                <div class="float-right opacity-80">
                                    <i class="glyph-icon icon-clock-o mrg5R"></i> {{$trainee->updated_at}}
                                </div>
                            </div>


                            <div class="mail-toolbar clearfix">
                                <div class="float-left">
                                    <h4 class="font-primary">Account Detail of trainee {{$trainee->first_name}} {{$trainee->last_name}} </h4>
                                </div>


                                <div class="float-right">
                                    {{--<a class="btn btn-primary" href="#" title="Reply">Reply <i class="glyph-icon icon-mail-reply"></i></a> <a class="btn btn-default" href="#" title="Print"><i class="glyph-icon icon-print"></i></a>--}}
                                    {{--<a class="btn btn-danger mrg10L" href="{{route('trainee-list-delete',$trainee->id)}}" title="Delete"><i class="glyph-icon icon-trash-o"></i></a>--}}
                                    {!! Form::open(['route' => ['trainee-list-delete',$trainee->id], 'method' => 'DELETE']) !!}
                                    <button class="btn btn-danger mrg10L" type="button" data-modal="confirmDelete" data-toggle="modal" data-target="#confirmDelete" data-title="Delete trainee" data-message="Are you sure you want to Delete : {{$trainee->first_name}}">
                                        DELETE</button>
                                    {!! Form::close() !!}

                                </div>
                                @include('muscle-up-app.trainee.include.delete-modal')
                            </div>


                            <div class="email-body">
                                <div class="example-box-wrapper">
                                    <table border="0" cellpadding="0" cellspacing="0" class="table table-striped table-bordered gym_request" id="datatable-example">
                                        <tr class="name">
                                            <th>Trainee Name</th>
                                            <td>{{$trainee->first_name}} {{$trainee->last_name }}</td>
                                        </tr>

                                        <tbody>
                                        <tr class="email">
                                            <th>Email Address</th>
                                            <td>{{$email}}</td>
                                        </tr>
                                        <tr class="birth-date">
                                            <th>Birth date</th>
                                            <td class="center">{{$trainee->birth_date}}</td>
                                        </tr>

                                        <tr class="contact">
                                            <th>Contact Number</th>
                                            <td>{{$trainee->dial_code}}{{$trainee->phone_number}}</td>
                                        </tr>

                                        <tr class="gender">
                                            <th>Gender</th>
                                            <td>{{$trainee->gender}}</td>
                                        </tr>

                                        <tr class="address">
                                            <th>Address</th>
                                            <td>{{$trainee->address}}</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>


                            {{--<div class="button-pane">--}}
                            {{--<a class="btn btn-blue-alt accept_request" href="{{route('Admin-Message-Accept',$Request)}}" title="Accept Request"><i class="glyph-icon icon-mail-reply"></i> Accept Request</a> <a class="btn btn-default" href="#" title="Reply">Forward <i class="glyph-icon icon-mail-forward"></i></a>--}}
                            {{--</div>--}}
                        </div>
                    </div>
@stop