@extends('muscle-up-app.gym.dashboard.gym-dashboard')
@section('title','Trainee Allocation')


@section('style-sheet')
    <link href="{{url('/admin-assets/select2/css/select2-bootstrap.css')}}" rel="stylesheet">
    <link href="{{url('/admin-assets/helpers/typography.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/elements/buttons.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/themes/components/border-radius.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/helpers/border-radius.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/elements/forms.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/widgets/timepicker/timepicker.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/elements/tables.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/css/diet.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/icons/typicons/typicons.css')}}" rel="stylesheet" type="text/css">
@stop

@section('content')


    <div id="page-title">
        <h2>Trainee Allocation</h2>
        <p>Allocation </p>
    </div>

    <div class="panel">
        <div class="panel-body">
            <div class="example-box-wrapper">
                <form class="form-group allocation-program form-horizontal bordered-row" id="form-field" method="post" action="{{route('trainee_allocation_store')}}">
                    {{csrf_field()}}
                    <div class="tab-content">
                        <div class="form-wizard" id="form-wizard-3">
                            <table cellpadding="0" cellspacing="0" border="0" class="table table-bordered">
                                <thead>
                                <tr>
                                    <th> Select Instructor</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr  class="fieldR">
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
                            </div>


                        <div class="form-wizard" id="form-wizard-3">

                            <table id="assignedTable" cellpadding="0" cellspacing="0" border="0" class="table table-bordered">
                                <thead>
                                <tr>
                                    <th>Select Trainee</th>
                                    <th width="20px">Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr id="tmpRow" class="fieldR">

                                    <td>
                                        <select class="form-control" name="trainee_id[]" id="">
                                            <option value="0">Select Trainee:</option>
                                            @foreach($trainees as $trainee)
                                                <option value="{{$trainee->id}}">{{$trainee->user->first_name}} {{$trainee->user->last_name}}</option>
                                            @endforeach
                                        </select>
                                    </td>

                                    <td>
                                        <button class="remove_row btn btn-danger" type="button"><span class="glyphicon icon-typicons-cancel"></span></button>
                                    </td>
                                </tr>
                                </tbody>
                                <tfoot>
                                <tr>
                                    <th colspan="7">
                                        <div class="create">
                                            <button type="button" id="assign" class="btn btn-primary"><span class=" glyphicon icon-typicons-plus"></span></button>
                                        </div>
                                    </th>
                                </tr>
                                </tfoot>
                            </table>
                            <div style="float:right; margin-right: 300px;">
                                <input type="submit" value="Allocate" class="btn btn-success">
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
@stop

@section('script')
    <script src="{{url('/assets/plugins/select2/js/select2.full.js')}}"></script>
    <script src="{{url('/admin-assets/widgets/button/button.js')}}" type="text/javascript"></script>
    <script src="{{url('/admin-assets/widgets/timepicker/timepicker.js')}}" type="text/javascript"></script>
    <script src="{{url('/assets/plugins/jquery-validation-1.16.0/js/jquery.validate.js')}}" type="text/javascript"></script>
    <script src="{{url('/admin-assets/js/allocation.js')}}"></script>
@stop