@extends('muscle-up-app.instructor.dashboard.instructor-dashboard')
@section('title','Program List')

@section('style-sheet')
    <link href="{{url('/admin-assets/helpers/typography.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/elements/buttons.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/themes/components/border-radius.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/helpers/border-radius.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/elements/forms.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/widgets/timepicker/timepicker.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/elements/tables.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/css/diet.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/icons/typicons/typicons.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/icons/elusive/elusive.css')}}" rel="stylesheet" type="text/css">
@stop

@section('content')
    <div id="page-title">
        <h2>Program List</h2>
    </div>

    <div class="panel">
        <form method="get" action="{{route('program')}}">
            <button class="btn btn-success" type="submit">New program<span class="glyphicon glyphicon-plus"></span></button>
        </form>
        <div class="panel-body">
            <div class="example-box-wrapper">
                <table id="assignedTable" cellpadding="0" cellspacing="0" border="0" class="table table-bordered">
                    <thead>
                    <tr>
                        <th width="20px">No.</th>
                        <th>Program Name</th>
                        <th>Description</th>
                        <th>Action</th>

                    </tr>
                    </thead>
                    <tbody>
                    <?php $count = 1 ; ?>
                    @foreach($programs as $program)
                        <tr>
                            <td width="20px" style="text-align:center;"><h5> <?php echo $count; ?> </h5></td>
                            <td width="140px" style="text-align:center;"><h5>{{$program->title}}</h5></td>
                            <td><h5>{{$program->description}}</h5></td>
                            <td>
                                <ul class="">
                                    <li class="dropdown">
                                        <a href="javascript:void(0);" class="dropdown-toggle " data-toggle="dropdown">
                                            <i class="glyphicon glyphicon-th-list"></i>
                                        </a>
                                        <ul class="dropdown-menu dropdown-menu-right">
                                            <li><a class="glyphicon glyphicon-edit"  href="{{route('edit-program',$program->id)}}" type="submit">Edit</a></li>
                                            <li><a class="glyphicon glyphicon-trash"  href="{{route('delete-program',$program->id)}}" type="submit">Delete</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </td>

                        </tr>
                        <?php $count++; ?>
                    @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
@stop

@section('script')
    {{--<script src="{{url('/admin-assets/widgets/button/button.js')}}" type="text/javascript"></script>--}}
    {{--<script src="{{url('/admin-assets/widgets/timepicker/timepicker.js')}}" type="text/javascript"></script>--}}
    {{--<script src="{{url('/admin-assets/js/diet.js')}}"></script>--}}
    <script>


        $(document).ready(function () {
            /* Datatables basic */
            $('#datatable-example').dataTable();

            //*** trainee table detail action dropdown
            $('.dropdown-toggle').click(function (e) {
                e.preventDefault();
                $(this).siblings('.dropdown-menu.dropdown-menu-right').toggle('show').show();
                e.stopImmediatePropagation();
            })
        });


    </script>
@stop

