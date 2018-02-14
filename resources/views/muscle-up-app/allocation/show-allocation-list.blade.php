@extends('muscle-up-app.instructor.dashboard.instructor-dashboard')
@section('title','List of allocated program')
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
        <h2>Allocate program to trainee </h2>
    </div>

    <div class="panel">
        <form method="get" action="{{route('diet-allocation')}}">
            <button class="btn btn-success" type="submit">Allocation<span class="glyphicon glyphicon-plus"></span></button>
        </form>
        <div class="panel-body">
            <div class="example-box-wrapper">
                <table id="assignedTable" cellpadding="0" cellspacing="0" border="0" class="table table-bordered">
                    <thead>
                    <tr>
                        <th width="20px">No.</th>
                        <th style="text-align:center;" width="140px">Trainee Name</th>
                        <th style="text-align:center;">Program</th>
                        <th style="text-align:center;">Diet Plan</th>
                        <th style="text-align:center;">Allocation Date:</th>
                        <th>Action</th>

                    </tr>
                    </thead>
                    <tbody>
                    <?php $count = 1 ; ?>
                    @foreach($allocations as $allocation)
                        <tr>
                            {{--{{dd($allocation)}}--}}
                            <td width="20px" style="text-align:center;"><h5> <?php echo $count; ?> </h5>
                            </td>
                            <td width="140px" style="text-align:center;"><h5>{{$allocation->trainee->user->first_name}} {{$allocation->trainee->user->last_name}}</h5>
                            </td>
                            <td>
                                <h5>{{$allocation->program->title}}</h5>
                            </td>
                            <td>
                                <h5>{{$allocation->diet_program->title}}</h5>
                            </td>
                            <td>
                                <h5>{{$allocation->start_date}}</h5>
                            </td>
                            {{--{{dd($trainees[$i]->allocation->id)}}--}}
                            <td>
                                <ul class="">
                                    <li class="dropdown">
                                        <a href="javascript:void(0);" class="dropdown-toggle " data-toggle="dropdown">
                                            <i class="glyphicon glyphicon-th-list"></i>
                                        </a>
                                        <ul class="dropdown-menu dropdown-menu-right">
                                            <li><a class="glyphicon glyphicon-edit"  href="{{route('edit-diet-allocation',$allocation->id)}}" type="submit">Edit</a></li>
                                            <li><a class="glyphicon glyphicon-trash"  href="{{route('delete-diet-allocation',$allocation->id)}}" type="submit">Delete</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </td>
                            {{--<td width="20px">--}}
                                {{--<form method="get" action="{{route('edit-diet-allocation',$allocation->id)}}">--}}
                                    {{--<button class="btn btn-primary" type="submit"><span class="glyphicon icon-elusive-pencil"></span></button>--}}
                                {{--</form>--}}
                            {{--</td>--}}
                            {{--<td width="20px">--}}
                                {{--<form method="get" action="{{route('delete-diet-allocation',$allocation->id)}}">--}}
                                    {{--<button class="btn btn-danger" type="submit"><span class="glyphicon icon-typicons-cancel"></span></button>--}}
                                {{--</form>--}}
                            {{--</td>--}}
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
    <script src="{{url('/admin-assets/widgets/button/button.js')}}" type="text/javascript"></script>
    <script src="{{url('/admin-assets/widgets/timepicker/timepicker.js')}}" type="text/javascript"></script>
    <script src="{{url('/admin-assets/js/diet.js')}}"></script>

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
