@extends('muscle-up-app.gym.dashboard.gym-dashboard')
@section('title','Trainee Allocation')

@section('style-sheet')
    <link href="{{url('/admin-assets/helpers/typography.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/elements/buttons.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/themes/components/border-radius.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/helpers/border-radius.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/elements/forms.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/assets/plugins/datetimepicker/css/DateTimePicker.css')}}" rel="stylesheet">
    <link href="{{url('/admin-assets/elements/tables.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/css/diet.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/icons/typicons/typicons.css')}}" rel="stylesheet" type="text/css">
@stop

@section('content')


    <div id="page-title">
        <h2> Allocate Trainee To Instructor </h2>

        <p> Create Allocation</p>
    </div>

    <div class="panel">
        <div class="panel-body">
            <div class="example-box-wrapper">
                <form class="form-group diet-program form-horizontal bordered-row" id="form-field" method="post" action="{{route('trainee_allocation_store')}}">
                    {{csrf_field()}}
                    <div class="tab-content">
                        <div class="form-wizard" id="form-wizard-3">
                            <hr>
                            <table id="assignedTable" cellpadding="0" cellspacing="0" border="0" class="table table-bordered">
                                <thead>
                                <tr>
                                    <th>Select Instructor</th>

                                </tr>
                                </thead>
                                <tbody>
                                <tr id="tmpRow" class="fieldR">
                                    <td>
                                        <select class="form-control" name="employee_id" id="">
                                            <option value="0">Select Instructor:</option>
                                        @foreach($instructors as $instructor)
                                                <option value="{{$instructor->id}}">{{$instructor->user->first_name}} {{$instructor->user->last_name}}</option>
                                            @endforeach
                                        </select>
                                    </td>

                                </tr>
                                </tbody>
                            </table>



                            <table id="assignedTable" cellpadding="0" cellspacing="0" border="0" class="table table-bordered">
                                <thead>
                                <tr>
                                    <th>Select Trainee</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr id="tmpRow" class="fieldR">

                                    <td>
                                        <select class="form-control" name="trainee_id" id="">
                                            <option value="0">Select Trainee:</option>
                                            @foreach($trainees as $trainee)
                                                <option value="{{$trainee->id}}">{{$trainee->user->first_name}} {{$trainee->user->last_name}}</option>
                                            @endforeach
                                        </select>
                                    </td>
                                </tr>
                                </tbody>
                            </table>



                            <div style="float:right; margin-right: 300px;">
                                <input type="submit" value="Submit" class="btn btn-success">
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
@stop


@section('script')
    <script src="{{url('/admin-assets/widgets/button/button.js')}}" type="text/javascript"></script>
    <script src="{{url('/assets/plugins/datetimepicker/js/DateTimePicker.js')}}" type="text/javascript"></script>
    <script src="{{url('/assets/js/allocation.js')}}" type="text/javascript"></script>

@stop