@extends('muscle-up-app.gym.dashboard.gym-dashboard')
@section('title','Edit Trainee Allocation')

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
        <h2> Edit Trainee Allocation </h2>
    </div>

    <div class="panel">
        <div class="panel-body">
            <div class="example-box-wrapper">

                <form class="form-group diet-program form-horizontal bordered-row" id="form-field" method="post" action="{{route('update-trainee-allocation',$trainee->id)}}">
                    {{csrf_field()}}
                    <div class="tab-content">
                        <div class="form-wizard" id="form-wizard-3">
                            <hr>
                            <table id="assignedTable" cellpadding="0" cellspacing="0" border="0" class="table table-bordered">
                                <thead>
                                <tr>

                                    <th>Selected Trainee</th>

                                </tr>
                                </thead>
                                <tbody>
                                <tr id="tmpRow" class="fieldR">
                                    <td>
                                        {{--{{dd($allocation)}}--}}
                                            <option value="{{$trainee->id}}">{{$trainee->user->first_name}} {{$trainee->user->last_name}}</option>


                                    </td>

                                </tr>
                                </tbody>
                            </table>


                            <table id="assignedTable" cellpadding="0" cellspacing="0" border="0" class="table table-bordered">
                                <thead>
                                <tr>
                                    <th>Select Instructor</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr id="tmpRow" class="fieldR">
                                    <td>
                                        <select class="form-control data_value" name="employee_id" id="" data-value="{{$trainee->employee_id}}">

                                            @foreach($employees as $employee)
                                                <option value="{{$employee->id}}">{{$employee->user->first_name}} {{$employee->user->last_name}}</option>
                                            @endforeach
                                        </select>
                                    </td>

                                </tr>
                                </tbody>
                            </table>

                            </table>

                            <div style="float:right; margin-right: 300px;">
                                <input type="submit" value="Update" class="btn btn-success">
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
    <script src="{{url('/assets/js/trainee-allocation.js')}}" type="text/javascript"></script>
@stop