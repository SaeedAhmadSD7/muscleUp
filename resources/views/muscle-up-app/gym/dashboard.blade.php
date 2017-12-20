@extends('layouts.backend-main')

@section('title')
    Gym Dashboard
@stop

@section('user-name')
    {{\Auth::user()->first_name}}
@stop

@section('sidebar_content')
    <li class="header"><span>Members Area</span></li>
    <li class="menu-element">
        <a href="#"><i class="glyph-icon icon-linecons-tv"></i><span>Trainees</span></a>
        <div class="sidebar-submenu">
            <ul>
                <li><a href="{{route('trainee-create')}}" title="Inbox"><span>Add Trainee</span></a></li>
                <li><a href="{{route('trainee-list')}}" title="Inbox"><span>View Trainee List</span></a></li>
            </ul>
        </div>
    </li>
    <li class="menu-element">
        <a href="#"><i class="glyph-icon icon-linecons-tv"></i><span>Instructors</span></a>
        <div class="sidebar-submenu">
            <ul>
                <li><a href="{{route('instructor-add')}}" title="Inbox"><span>Add Instructor</span></a></li>
                <li><a href="{{route('instructor-show')}}" title="Inbox"><span>View Instructor List</span></a></li>
            </ul>
        </div>
    </li>
    <li class="menu-element">
        <a href="#"><i class="glyph-icon icon-linecons-tv"></i><span>Allocate Trainee</span></a>
        <div class="sidebar-submenu">
            <ul>
                <li><a href="{{route('trainee-allocation')}}" title="Inbox"><span>Allocation</span></a></li>
                <li><a href="{{route('show-trainee-allocation')}}" title="Inbox"><span>View Allocation List</span></a></li>
            </ul>
        </div>
    </li>
    <li class="menu-element">
        <a href="#"><i class="glyph-icon icon-linecons-tv"></i><span>Add Branch</span></a>
        <div class="sidebar-submenu">
            <ul>
                <li>
                    {{--                    <a href="{{route('branch')}}" title="Inbox"><span>Make branch</span></a>--}}
                    <a href="{{route('branch.create')}}" title="Create a New Branch"><span>Create</span></a>
                </li>
                <li>
                    <a href="{{route('branch.index')}}" title="List of Branches"><span>List of Branches</span></a>
                </li>
            </ul>
        </div>
    </li>
@stop

@section('page-heading')
    <h2>Dashboard</h2>
    <p>The most complete user interface framework that can be used to create stunning admin dashboards and presentation websites.</p>
@stop

@section('content')
    <div class="col-md-8">
        <div class="row">
            <div class="col-md-3">
                <a class="tile-box tile-box-shortcut btn-danger" href="#" title="Example tile shortcut"><span
                            class="bs-badge badge-absolute">1</span>
                    <div class="tile-header">Reach</div>
                    <div class="tile-content-wrapper"><i class="glyph-icon icon-file-photo-o"></i></div>
                </a>
            </div>

            <div class="col-md-3">
                <a class="tile-box tile-box-shortcut btn-success" href="#"
                   title="Example tile shortcut">
                    <div class="tile-header">Comments</div>
                    <div class="tile-content-wrapper"><i class="glyph-icon icon-desktop"></i></div>
                </a>
            </div>

            <div class="col-md-3">
                <a class="tile-box tile-box-shortcut btn-info" href="#"
                   title="Example tile shortcut"><span class="bs-badge badge-absolute">2</span>
                    <div class="tile-header">Reviews</div>
                    <div class="tile-content-wrapper"><i class="glyph-icon icon-download"></i></div>
                </a>
            </div>

            <div class="col-md-3">
                <a class="tile-box tile-box-shortcut btn-warning" href="#"
                   title="Example tile shortcut">
                    <div class="tile-header">Visitors</div>
                    <div class="tile-content-wrapper"><i class="glyph-icon icon-code-fork"></i></div>
                </a>
            </div>
        </div>

        <div class="panel mrg20T">
            <div class="panel-body"><h3 class="title-hero">Weekly Sales</h3>
                <div class="example-box-wrapper">
                    <div class="mrg20B" id="data-example-1" style="width: 100%; height: 300px"></div>
                </div>
            </div>
        </div>

        <div class="panel-layout">
            <div class="panel-box col-xs-6">
                <div class="panel-content bg-white">
                    <canvas height="80" id="icon-cloud" width="80"></canvas>
                </div>

                <div class="panel-content bg-black">
                    <div class="center-vertical">
                        <ul class="center-content nav nav-justified">
                            <li>
                                <h4>
                                    <i class="glyph-icon font-green opacity-80 icon-chevron-down"></i> 7ยบ
                                </h4>
                                <p class="opacity-80 text-transform-upr font-size-11 mrg5T">Low</p>
                            </li>

                            <li>
                                <h4><i class="glyph-icon font-red opacity-80 icon-chevron-up"></i> 21 ยบ
                                </h4>
                                <p class="opacity-80 text-transform-upr font-size-11 mrg5T">High</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="panel-box col-xs-6 bg-blue-alt">
                <div class="panel-content">
                    <h3>San Francisco</h3>
                    <h4 class="opacity-60">California</h4>
                </div>
            </div>
        </div>

        <div class="panel">
            <div class="panel-body">
                <h3 class="title-hero">Basic</h3>
                <div class="example-box-wrapper">
                    <table border="0" cellpadding="0" cellspacing="0"
                           class="table table-striped table-bordered" id="datatable-example">
                        <thead>
                        <tr>
                            <th>Browser</th>
                            <th>Platform(s)</th>
                            <th>Engine version</th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr class="odd gradeX">
                            <td>Internet Explorer 4.0</td>
                            <td>Win 95+</td>
                            <td class="center">4</td>
                        </tr>

                        <tr class="even gradeC">
                            <td>Internet Explorer 5.0</td>
                            <td>Win 95+</td>
                            <td class="center">5</td>
                        </tr>

                        <tr class="odd gradeA">
                            <td>Internet Explorer 5.5</td>
                            <td>Win 95+</td>
                            <td class="center">5.5</td>
                        </tr>

                        <tr class="even gradeA">
                            <td>Internet Explorer 6</td>
                            <td>Win 98+</td>
                            <td class="center">6</td>
                        </tr>

                        <tr class="odd gradeA">
                            <td>Internet Explorer 7</td>
                            <td>Win XP SP2+</td>
                            <td class="center">7</td>
                        </tr>

                        <tr class="even gradeA">
                            <td>AOL browser (AOL desktop)</td>
                            <td>Win XP</td>
                            <td class="center">6</td>
                        </tr>

                        <tr class="gradeA">
                            <td>Firefox 1.0</td>
                            <td>Win 98+ / OSX.2+</td>
                            <td class="center">1.7</td>
                        </tr>

                        <tr class="gradeA">
                            <td>Firefox 1.5</td>
                            <td>Win 98+ / OSX.2+</td>
                            <td class="center">1.8</td>
                        </tr>

                        <tr class="gradeA">
                            <td>Firefox 2.0</td>
                            <td>Win 98+ / OSX.2+</td>
                            <td class="center">1.8</td>
                        </tr>

                        <tr class="gradeA">
                            <td>Firefox 3.0</td>
                            <td>Win 2k+ / OSX.3+</td>
                            <td class="center">1.9</td>
                        </tr>

                        <tr class="gradeA">
                            <td>Camino 1.0</td>
                            <td>OSX.2+</td>
                            <td class="center">1.8</td>
                        </tr>

                        <tr class="gradeA">
                            <td>Camino 1.5</td>
                            <td>OSX.3+</td>
                            <td class="center">1.8</td>
                        </tr>

                        <tr class="gradeU">
                            <td>All others</td>
                            <td>-</td>
                            <td class="center">-</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div class="panel">
            <div class="panel-body">
                <h3 class="title-hero">Alternate carousel</h3>

                <div class="example-box-wrapper">
                    <div class="owl-carousel-4 slider-wrapper inverse arrows-outside carousel-wrapper">
                        <div>
                            <div class="thumbnail-box-wrapper mrg5A">
                                <div class="thumbnail-box">
                                    <a class="thumb-link" href="#" title=""></a>
                                    <div class="thumb-content">
                                        <div class="center-vertical">
                                            <div class="center-content">
                                                <i class="icon-helper icon-center animated zoomInUp font-white glyph-icon icon-linecons-camera"></i>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="thumb-overlay bg-black"></div>
                                    <img alt=""
                                         src="{{url('/resources/app/images/img-17.jpg')}}">
                                </div>

                                <div class="thumb-pane">
                                    <h3 class="thumb-heading animated rollIn">
                                        <a href="#" title="">Working in the morning</a>
                                        <small>12 March 2015</small>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="thumbnail-box-wrapper mrg5A">
                                <div class="thumbnail-box">
                                    <a class="thumb-link" href="#" title=""></a>
                                    <div class="thumb-content">
                                        <div class="center-vertical">
                                            <div class="center-content">
                                                <i class="icon-helper icon-center animated zoomInUp font-white glyph-icon icon-linecons-camera"></i>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="thumb-overlay bg-black"></div>
                                    <img alt=""
                                         src="{{url('/resources/app/images/img-18.jpg')}}">
                                </div>

                                <div class="thumb-pane">
                                    <h3 class="thumb-heading animated rollIn">
                                        <a href="#" title="">Working in the morning</a>
                                        <small>12 March 2015</small>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="thumbnail-box-wrapper mrg5A">
                                <div class="thumbnail-box">
                                    <a class="thumb-link" href="#" title=""></a>
                                    <div class="thumb-content">
                                        <div class="center-vertical">
                                            <div class="center-content">
                                                <i class="icon-helper icon-center animated zoomInUp font-white glyph-icon icon-linecons-camera"></i>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="thumb-overlay bg-black"></div>
                                    <img alt=""
                                         src="{{url('/resources/app/images/img-19.jpg')}}">
                                </div>

                                <div class="thumb-pane">
                                    <h3 class="thumb-heading animated rollIn">
                                        <a href="#" title="">Working in the morning</a>
                                        <small>12 March 2015</small>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="thumbnail-box-wrapper mrg5A">
                                <div class="thumbnail-box">
                                    <a class="thumb-link" href="#" title=""></a>
                                    <div class="thumb-content">
                                        <div class="center-vertical">
                                            <div class="center-content">
                                                <i class="icon-helper icon-center animated zoomInUp font-white glyph-icon icon-linecons-camera"></i>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="thumb-overlay bg-black"></div>
                                    <img alt=""
                                         src="{{url('/resources/app/images/img-20.jpg')}}">
                                </div>

                                <div class="thumb-pane">
                                    <h3 class="thumb-heading animated rollIn">
                                        <a href="#" title="">Working in the morning</a>
                                        <small>12 March 2015</small>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="thumbnail-box-wrapper mrg5A">
                                <div class="thumbnail-box">
                                    <a class="thumb-link" href="#" title=""></a>
                                    <div class="thumb-content">
                                        <div class="center-vertical">
                                            <div class="center-content">
                                                <i class="icon-helper icon-center animated zoomInUp font-white glyph-icon icon-linecons-camera"></i>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="thumb-overlay bg-black"></div>
                                    <img alt=""
                                         src="{{url('/resources/app/images/img-23.jpg')}}">
                                </div>

                                <div class="thumb-pane">
                                    <h3 class="thumb-heading animated rollIn">
                                        <a href="#" title="">Working in the morning</a>
                                        <small>12 March 2015</small>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="thumbnail-box-wrapper mrg5A">
                                <div class="thumbnail-box">
                                    <a class="thumb-link" href="#" title=""></a>
                                    <div class="thumb-content">
                                        <div class="center-vertical">
                                            <div class="center-content">
                                                <i class="icon-helper icon-center animated zoomInUp font-white glyph-icon icon-linecons-camera"></i>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="thumb-overlay bg-black"></div>
                                    <img alt=""
                                         src="{{url('/resources/app/images/img-24.jpg')}}">
                                </div>

                                <div class="thumb-pane">
                                    <h3 class="thumb-heading animated rollIn">
                                        <a href="#" title="">Working in the morning</a>
                                        <small>12 March 2015</small>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <div class="dashboard-box dashboard-box-chart bg-white content-box">
            <div class="content-wrapper">
                <div class="header">8960 <span>Total Downloads<b>in last</b> 6 years</span></div>

                <div class="bs-label bg-orange">~51%</div>

                <div class="center-div sparkline-big-alt">2210,2310,2010,2310,2123,2350</div>

                <div class="row list-grade">
                    <div class="col-md-2">2009</div>
                    <div class="col-md-2">2010</div>
                    <div class="col-md-2">2011</div>
                    <div class="col-md-2">2012</div>
                    <div class="col-md-2">2013</div>
                    <div class="col-md-2">2014</div>
                </div>
            </div>

            <div class="button-pane">
                <div class="size-md float-left"><a href="#" title="">View more details</a></div>
                <a class="btn btn-primary float-right tooltip-button" data-placement="top" href="#"
                   title="View details"><i class="glyph-icon icon-caret-right"></i></a>
            </div>
        </div>

        <div class="content-box">
            <h3 class="content-box-header bg-default">
                <i class="glyph-icon icon-cog"></i> Live server status<span
                        class="header-buttons-separator"><a class="icon-separator remove-button"
                                                            data-animation="flipOutX" href="#"><i
                                class="glyph-icon icon-times"></i></a></span>
            </h3>

            <div class="content-box-wrapper pad0A">
                <div class="mrg20A">
                    <div class="row">
                        <div class="col-md-7 center-margin pad0A">
                            <canvas height="150" id="chart-area" width="150"></canvas>
                        </div>
                    </div>
                </div>

                <table class="table remove-background">
                    <tbody>
                    <tr>
                        <td class="text-left size-sm">
                            <div class="badge mrg10L badge-small mrg5R bg-azure"></div>
                            New user registrations
                        </td>
                        <td class="text-right">
                            <a class="btn btn-sm hover-yellow tooltip-button" data-placement="top"
                               href="#" title="Flag"><i class="glyph-icon icon-flag"></i></a>
                            <a class="btn btn-sm hover-blue-alt tooltip-button" data-placement="top"
                               href="#" title="Edit"><i class="glyph-icon icon-edit"></i></a>
                            <a class="btn btn-sm hover-red tooltip-button" data-placement="top" href="#"
                               title="Remove"><i class="glyph-icon icon-remove"></i></a>
                        </td>
                    </tr>

                    <tr>
                        <td class="text-left size-sm">
                            <div class="badge mrg10L badge-small mrg5R bg-orange"></div>
                            Returning visitors
                        </td>
                        <td class="text-right">
                            <a class="btn btn-sm hover-yellow tooltip-button" data-placement="top"
                               href="#" title="Flag"><i class="glyph-icon icon-flag"></i></a>
                            <a class="btn btn-sm hover-blue-alt tooltip-button" data-placement="top"
                               href="#" title="Edit"><i class="glyph-icon icon-edit"></i></a>
                            <a class="btn btn-sm hover-red tooltip-button" data-placement="top" href="#"
                               title="Remove"><i class="glyph-icon icon-remove"></i></a>
                        </td>
                    </tr>

                    <tr>
                        <td class="text-left size-sm">
                            <div class="badge mrg10L badge-small mrg5R bg-gray"></div>
                            Page views
                        </td>
                        <td class="text-right">
                            <a class="btn btn-sm hover-yellow tooltip-button" data-placement="top"
                               href="#" title="Flag"><i class="glyph-icon icon-flag"></i></a>
                            <a class="btn btn-sm hover-blue-alt tooltip-button" data-placement="top"
                               href="#" title="Edit"><i class="glyph-icon icon-edit"></i></a>
                            <a class="btn btn-sm hover-red tooltip-button" data-placement="top" href="#"
                               title="Remove"><i class="glyph-icon icon-remove"></i></a>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="row">
            <div class="col-md-6">
                <div class="panel-layout">
                    <div class="panel-box">
                        <div class="panel-content bg-facebook"><i
                                    class="glyph-icon font-size-35 icon-facebook"></i></div>

                        <div class="panel-content pad15A bg-white">
                            <div class="center-vertical">
                                <ul class="center-content list-group list-group-separator row mrg0A">
                                    <li class="col-md-6">
                                        <b>1,456</b>
                                        <p class="font-gray">Friends</p>
                                    </li>

                                    <li class="col-md-6">
                                        <b>593</b>
                                        <p class="font-gray">Likes</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-6">
                <div class="panel-layout">
                    <div class="panel-box">
                        <div class="panel-content bg-twitter"><i
                                    class="glyph-icon font-size-35 icon-twitter"></i></div>

                        <div class="panel-content pad15A bg-white">
                            <div class="center-vertical">
                                <ul class="center-content list-group list-group-separator row mrg0A">
                                    <li class="col-md-6">
                                        <b>356</b>
                                        <p class="font-gray">Followers</p>
                                    </li>

                                    <li class="col-md-6">
                                        <b>981</b>
                                        <p class="font-gray">Tweets</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="panel">
            <div class="panel-body">
                <h3 class="title-hero">Users activity</h3>
                <div class="example-box-wrapper">
                    <div class="timeline-box timeline-box-left">
                        <div class="tl-row">
                            <div class="tl-item float-right">
                                <div class="tl-icon bg-red"><i class="glyph-icon icon-toggle-on"></i>
                                </div>
                                <div class="popover right">
                                    <div class="arrow"></div>

                                    <div class="popover-content">
                                        <div class="tl-label bs-label label-info">Appointment</div>
                                        <p class="tl-content">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.</p>
                                        <div class="tl-time"><i
                                                    class="glyph-icon icon-clock-o"></i> a few seconds ago
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="tl-row">
                            <div class="tl-item float-right">
                                <div class="tl-icon bg-primary"><i class="glyph-icon icon-wifi"></i>
                                </div>
                                <div class="popover right">
                                    <div class="arrow"></div>
                                    <div class="popover-content">
                                        <div class="tl-label bs-label bg-yellow">Teleconference</div>
                                        <p class="tl-content">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Donec odio.</p>
                                        <div class="tl-time"><i
                                                    class="glyph-icon icon-clock-o"></i> a few seconds ago
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="tl-row">
                            <div class="tl-item float-right">
                                <div class="tl-icon bg-black"><i class="glyph-icon icon-headphones"></i>
                                </div>
                                <div class="popover right">
                                    <div class="arrow"></div>
                                    <div class="popover-content">
                                        <div class="tl-label bs-label label-danger">Meeting</div>
                                        <p class="tl-content">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Donec odio.</p>
                                        <div class="tl-time"><i
                                                    class="glyph-icon icon-clock-o"></i> a few seconds ago
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

@stop

@section('script')


    <script type="text/javascript">
        /* Datatables basic */

        $(document).ready(function () {
            $('#datatable-example').dataTable();
        });

        /* Datatables hide columns */

        $(document).ready(function () {
            var table = $('#datatable-hide-columns').DataTable({
                "scrollY": "300px",
                "paging": false
            });

            $('#datatable-hide-columns_filter').hide();

            $('a.toggle-vis').on('click', function (e) {
                e.preventDefault();

                // Get the column API object
                var column = table.column($(this).attr('data-column'));

                // Toggle the visibility
                column.visible(!column.visible());
            });
        });

        /* Datatable row highlight */

        $(document).ready(function () {
            var table = $('#datatable-row-highlight').DataTable();

            $('#datatable-row-highlight tbody').on('click', 'tr', function () {
                $(this).toggleClass('tr-selected');
            });
        });


        $(document).ready(function () {
            $('.dataTables_filter input').attr("placeholder", "Search...");
        });
    </script>

@stop