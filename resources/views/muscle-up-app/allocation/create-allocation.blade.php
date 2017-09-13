@extends('layouts.backend-main')
@section('title','Allocation')

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
@stop

@section('content')


    <div id="page-title">
        <h2> Allocate Workout Program </h2>

        <p> Create Allocation</p>
    </div>

    <div class="panel">
        <div class="panel-body">
            <div class="example-box-wrapper">
                <form class="form-group diet-program form-horizontal bordered-row" id="form-field" method="post" action="">
                    {{csrf_field()}}
                    <div class="tab-content">
                        <div class="form-wizard" id="form-wizard-3">
                            <hr>
                            <table id="assignedTable" cellpadding="0" cellspacing="0" border="0" class="table table-bordered">
                                <thead>
                                <tr>
                                    <th>Select trainee</th>
                                    <th>Select Program</th>

                                </tr>
                                </thead>
                                <tbody>
                                <tr id="tmpRow" class="fieldR">
                                    <td>
                                        <select class="form-control" name="" id="">
                                            <option value="0">Select Trainee:</option>
                                            @foreach($users as $user)
                                                <option value="{{$user->id}}">{{$user->first_name}} {{$user->last_name}}</option>
                                            @endforeach
                                        </select>
                                    </td>
                                    <td>
                                        <select class="form-control" name="" id="">
                                            <option value="0">Select Program:</option>
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
                                        <select class="form-control" name="" id="">
                                            <option value="0">Diet Plan:</option>
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
                                    <th>Select Start Date</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr id="tmpRow" class="fieldR">
                                    <td>
                                        <select class="form-control" name="" id="">

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
    <script src="{{url('/admin-assets/widgets/timepicker/timepicker.js')}}" type="text/javascript"></script>
@stop