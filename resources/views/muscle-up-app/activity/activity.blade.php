@extends('layouts.backend-main')
@section('title','Acitivity Markdown')

@section('style-sheet')
    <link href="{{url('/admin-assets/helpers/typography.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/elements/buttons.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/themes/components/border-radius.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/helpers/border-radius.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/elements/forms.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/assets/plugins/datetimepicker/css/DateTimePicker.css')}}" rel="stylesheet">
    <link href="{{url('/admin-assets/elements/tables.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/icons/typicons/typicons.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/assets/plugins/select2/css/select2.css')}}" rel="stylesheet">
    <link href="{{url('/admin-assets/select2/css/select2-bootstrap.css')}}" rel="stylesheet">
    <link href="{{url('/admin-assets/css/diet.css')}}" rel="stylesheet" type="text/css">
@stop

@section('content')
    <div id="page-title">
        <h2>Workout Program</h2>
        <p>Create Workout Program</p>
    </div>

    <div class="panel">
        <div class="panel-body">
            <div class="example-box-wrapper">
                <div class="form-wizard" id="form-wizard-3">
                    <form class="workout-program form-horizontal bordered-row" method="POST" action="">
                        {{csrf_field()}}
                        <div class="tab-content">
                            <h3 class="content-box-header bg-default">Acitvity Mark Progress</h3>
                            <div class="form-group first-group">
                                <label class="col-sm-3 control-label">Program Name</label>
                                <div class="col-sm-6">
                                    <span class="form-control">{{$trainee->allocation->program->title}}</span>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-3 control-label">Diet Program Name</label>
                                <div class="col-sm-6">
                                    <span class="form-control">{{$trainee->allocation->diet_program->title}}</span>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-3 control-label">Phase Name</label>
                                <div class="col-sm-6">
                                    <select class="phase_list" name="">
                                        <option></option>
                                        @foreach($trainee->allocation->program->phase as $phase)
                                            <option  value="{{$phase->id}}" >{{$phase->title}}</option>
                                        @endforeach
                                    </select>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-3 control-label">Day Name</label>
                                <div class="col-sm-6">
                                    <select class="day_list" name="">
                                        <option></option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-3 control-label">Wbs Name</label>
                                <div class="col-sm-6">
                                    <select class="wbs_list" name="">
                                        <option></option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-md-6 col-md-offset-3">
                                    <span class="input-group-btn"><button class="btn btn-blue-alt wbs_detail toggle" type="button" disabled><span>Show Details </span><i class="glyph-icon icon-plus"></i></button></span>
                                </div>
                            </div>
                            <div class="form-group exercise_detail-div">
                                <div class="toggle-content wbs_content">
                                </div>
                            </div>
                            <hr>
                            <div class="form-group">
                                <label class="col-sm-3 control-label">Meal Name</label>
                                <div class="col-sm-6">
                                    <select class="meal_list" name="">
                                        @foreach($trainee->allocation->diet_program->meal as $meal)
                                            <option value="{{$meal->id}}">{{$meal->title}}</option>
                                        @endforeach
                                    </select>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-md-6 col-md-offset-3">
                                    <span class="input-group-btn"><button class="btn btn-blue-alt meal_detail toggle" type="button"><span>Show Details </span><i class="glyph-icon icon-plus"></i></button></span>
                                </div>
                            </div>
                            <div class="form-group meal_detail-div">
                                <div class="toggle-content meal_content">
                                    <div class="form-group col-md-offset-3 col-md-6" >
                                        <span class="form-control"><strong>Food Name: </strong></span>
                                    </div>
                                    <div class="form-group col-md-offset-3 col-md-2" >
                                        <span class="form-control"><strong>Quantity: </strong></span>
                                    </div>
                                    <div class="form-group col-md-2" >
                                        <span class="form-control"><strong>Calories: </strong></span>
                                    </div>
                                    <div class="form-group col-md-2" >
                                        <span class="form-control"><strong>Time: </strong></span>
                                    </div>
                                    <div class="form-group col-md-offset-3 col-md-2" >
                                        <input class="form-control" type="number" placeholder="Quantity Taken...">
                                    </div>
                                    <div class="form-group col-md-2" >
                                        <input class="form-control" type="number" placeholder="Calories Estimated...">
                                    </div>
                                    <div class="form-group col-md-2" >
                                        <input class="form-control" type="number" placeholder="Time Taken...">
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="form-group submit-btn-div">
                            <button class="btn ra-100 btn-default" type="submit">Save Progress</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@stop


@section('script')
    <script>{{$trainee->allocation->diet_program->meal}}</script>
    <script src="{{url('/assets/plugins/select2/js/select2.full.js')}}"></script>
    <script src="{{url('/admin-assets/widgets/button/button.js')}}" type="text/javascript"></script>
    <script src="{{url('/assets/js/activity.js')}}" type="text/javascript"></script>
@stop