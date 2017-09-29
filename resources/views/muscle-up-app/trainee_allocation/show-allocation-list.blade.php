@extends('muscle-up-app.gym.dashboard.gym-dashboard')
@section('title','List of allocated Trainee')
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
        <h2>List of Allocate Trainee </h2>
    </div>

    <div class="panel">
        <form method="get" action="{{route('trainee-allocation')}}">
            <button class="btn btn-success" type="submit">Allocation<span class="glyphicon glyphicon-plus"></span></button>
        </form>
        <div class="panel-body">
            <div class="example-box-wrapper">
                <table id="assignedTable" cellpadding="0" cellspacing="0" border="0" class="table table-bordered">
                    <thead>
                    <tr>
                        <th width="20px">No.</th>
                        <th style="text-align:center;" width="140px">Trainee Name</th>
                        <th style="text-align:center;" width="140px">Instructor Name</th>
                        <th width="20px">Edit</th>
                        <th width="20px">Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {{--{{dd($trainees)}}--}}
                    <?php $count = 1 ; ?>
                    @foreach($trainees as $trainee)
                        <tr>
                            <td width="20px" style="text-align:center;"><h5> <?php echo $count; ?> </h5>
                            </td>
                            <td width="140px" style="text-align:center;"><h5>{{$trainee->user->first_name}} {{$trainee->user->last_name}}</h5>
                            </td>
                            </td>

                            <td width="140px" style="text-align:center;"><h5> {{$trainee->employee->user->first_name}} {{$trainee->employee->user->last_name}}</h5>
                            </td>

                            <td width="20px">
                                <form method="get" action="{{route('edit-trainee-allocation',$trainee->id)}}">
                                    <button class="btn btn-primary" type="submit"><span class="glyphicon icon-elusive-pencil"></span></button>
                                </form>
                            </td>
                            <td width="20px">
                                <form method="get" action="{{route('delete-trainee-allocation',$trainee->id)}}">
                                    <button class="btn btn-danger" type="submit"><span class="glyphicon icon-typicons-cancel"></span></button>
                                </form>
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
    <script src="{{url('/admin-assets/widgets/button/button.js')}}" type="text/javascript"></script>
    <script src="{{url('/admin-assets/widgets/timepicker/timepicker.js')}}" type="text/javascript"></script>
    <script src="{{url('/admin-assets/js/diet.js')}}"></script>
@stop
