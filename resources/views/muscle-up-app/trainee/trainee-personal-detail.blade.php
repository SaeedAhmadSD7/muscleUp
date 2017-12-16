@extends('layouts.backend-main')

@section('style-sheet')
    <link href="{{url('/admin-assets/helpers/border-radius.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/helpers/page-transitions.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/helpers/typography.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/material/ripple.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/elements/forms.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/elements/images.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/elements/info-box.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/elements/invoice.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/elements/loading-indicators.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/elements/menus.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/elements/panel-box.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/elements/response-messages.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/elements/responsive-tables.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/elements/ribbon.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/elements/social-box.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/elements/tables.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/elements/tile-box.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/elements/timeline.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/icons/spinnericon/spinnericon.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/widgets/accordion-ui/accordion.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/widgets/calendar/calendar.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/widgets/carousel/carousel.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/widgets/charts/justgage/justgage.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/widgets/charts/morris/morris.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/widgets/charts/piegage/piegage.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/widgets/charts/xcharts/xcharts.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/widgets/chosen/chosen.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/widgets/colorpicker/colorpicker.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/widgets/datatable/datatable.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/widgets/datepicker/datepicker.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/widgets/datepicker-ui/datepicker.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/widgets/daterangepicker/daterangepicker.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/widgets/dialog/dialog.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/widgets/dropzone/dropzone.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/widgets/file-input/fileinput.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/widgets/input-switch/inputswitch.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/widgets/input-switch/inputswitch-alt.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/widgets/ionrangeslider/ionrangeslider.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/widgets/jcrop/jcrop.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/widgets/jgrowl-notifications/jgrowl.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/widgets/loading-bar/loadingbar.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/widgets/maps/vector-maps/vectormaps.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/widgets/markdown/markdown.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/widgets/modal/modal.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/widgets/multi-select/multiselect.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/widgets/multi-upload/fileupload.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/widgets/nestable/nestable.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/widgets/noty-notifications/noty.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/widgets/pretty-photo/prettyphoto.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/widgets/progressbar/progressbar.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/widgets/range-slider/rangeslider.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/widgets/slidebars/slidebars.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/widgets/slider-ui/slider.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/widgets/summernote-wysiwyg/summernote-wysiwyg.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/widgets/tabs-ui/tabs.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/widgets/timepicker/timepicker.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/widgets/tocify/tocify.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/widgets/touchspin/touchspin.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/widgets/uniform/uniform.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/widgets/wizard/wizard.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/widgets/xeditable/xeditable.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/snippets/chat.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/snippets/files-box.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/snippets/progress-box.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/snippets/todo.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/applications/mailbox.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/themes/components/default.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/widgets/owlcarousel/owlcarousel.css')}}" rel="stylesheet" type="text/css">
@stop

@section('page-heading')
    <h2>Dashboard</h2>
    <p>The most complete user interface framework that can be used to create stunning admin dashboards and presentation websites.</p>
@stop

@section('content')
    <div class="row mailbox-wrapper">
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


                <div class="divider">
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
                        <a class="btn btn-success " href="{{route('trainee-personal-detail-edit',$trainee->id)}}" title="Edit">Edit Detail </a>
                        {{--{!! Form::open(['route' => ['trainee-list-delete',$trainee->id], 'method' => 'DELETE']) !!}--}}
                        {{--<button class="btn btn-danger mrg10L" type="button" data-modal="confirmDelete" data-toggle="modal" data-target="#confirmDelete" data-title="Delete trainee" data-message="Are you sure you want to Delete : {{$trainee->first_name}}">--}}
                        {{--DELETE</button>--}}
                        {{--{!! Form::close() !!}--}}

                    </div>

                </div>


                <div class="email-body">
                    <div class="example-box-wrapper">
                        <table border="0" cellpadding="0" cellspacing="0" class="table table-striped table-bordered gym_request" id="datatable-example">
                            <tr class="first_name">
                                <th>First Name</th>
                                <td>{{$trainee->first_name}} </td>
                            </tr><tr class="last_name">
                                <th>Last Name</th>
                                <td>{{$trainee->last_name }}</td>
                            </tr>

                            <tbody>
                            <tr class="email">
                                <th>Email Address</th>
                                <td>{{$trainee->email}}</td>
                            </tr>
                            <tr class="birth-date">
                                <th>Birth date</th>
                                <td class="center">{{$trainee->dob}}</td>
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