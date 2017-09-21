@extends('layouts.backend-main')
@section('title','Edit Allocation')

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
        <h2> Allocate Workout Program </h2>

        <p> Create Allocation</p>
    </div>

    <div class="panel">
        <div class="panel-body">
            <div class="example-box-wrapper">

                <form class="form-group diet-program form-horizontal bordered-row" id="form-field" method="post" action="{{route('update-allocation', $allocation->id)}}">
                    {{csrf_field()}}
                    <div class="tab-content">
                        <div class="form-wizard" id="form-wizard-3">
                            <hr>
                            <table id="assignedTable" cellpadding="0" cellspacing="0" border="0" class="table table-bordered">
                                <thead>
                                <tr>

                                    <th>Select Program</th>

                                </tr>
                                </thead>
                                <tbody>
                                <tr id="tmpRow" class="fieldR">
                                    <td>
                                        {{--{{dd($allocation)}}--}}
                                        <select class="form-control data_value" name="program_id" data-value="{{$allocation->program_id}}">
                                            @foreach($programs as $program)
                                                <option value="{{$program->id}}">{{$program->title}}</option>
                                            @endforeach
                                        </select>
                                    </td>

                                </tr>
                                </tbody>
                            </table>


                            <table id="assignedTable" cellpadding="0" cellspacing="0" border="0" class="table table-bordered">
                                <thead>
                                <tr>
                                    <th>Select Diet Plan</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr id="tmpRow" class="fieldR">
                                    <td>
                                        <select class="form-control data_value" name="diet_program_id" id="" data-value="{{$allocation->diet_plan_id}}">

                                            @foreach($diets as $diet)
                                                <option value="{{$diet->id}}">{{$diet->name}}</option>
                                            @endforeach
                                        </select>
                                    </td>

                                </tr>
                                </tbody>
                            </table>

                            <table id="assignedTable" cellpadding="0" cellspacing="0" border="0" class="table table-bordered">
                                <thead>
                                <tr>
                                    <th>Enter Start Date</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr id="tmpRow" class="fieldR">
                                    <td>
                                        <input class="form-control" type="text" data-field="date" data-format="yyyy-MM-dd" name="start_date" value="{{$allocation->start_date}}" placeholder="Enter start date" readonly><div class="btn-date"></div>
                                    </td>

                                </tr>
                                </tbody>
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
    <script src="{{url('/assets/js/allocation.js')}}" type="text/javascript"></script>
@stop