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
                                    <input class="diet_program_id" type="hidden" value="{{$trainee->allocation->diet_program->id}}">
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
                            <div class="form-group wbs"></div>
                            <hr>
                            @foreach($trainee->allocation->diet_program->meal as $meal)
                                <div class="form-group">
                                    <label class="col-sm-3 control-label">Meal Name</label>
                                    <div class="col-sm-6">
                                        <span class="form-control" value="{{$meal->id}}">{{$meal->title}}</span>
                                    </div>
                                </div>
                                <div class="meal_cotainer">
                                    <div class="form-group">
                                        <div class="col-md-6 col-md-offset-3">
                                            <span class="input-group-btn"><button class="btn btn-blue-alt meal_detail toggle" type="button"><span>Show Details </span><i class="glyph-icon icon-plus" disabled></i></button></span>
                                        </div>
                                    </div>
                                    <div class="form-group meal_detail-div">
                                        <div class="toggle-content meal_content">
                                            @foreach($trainee->allocation->diet_program->food as $food)
                                                @if($food->pivot->meal_id === $meal->pivot->meal_id)
                                                    <div class="form-group col-md-offset-3 col-md-6" >
                                                        <span class="form-control"><strong>Food Name: </strong>{{$food->title}}</span>
                                                    </div>
                                                    <div class="form-group col-md-offset-3 col-md-2" >
                                                        <span class="form-control"><strong>Quantity: </strong>{{$food->pivot->quantity}}</span>
                                                    </div>
                                                    <div class="form-group col-md-2" >
                                                        <span class="form-control"><strong>Calories: </strong>{{$food->pivot->calories}}</span>
                                                    </div>
                                                    <div class="form-group col-md-2" >
                                                        <span class="form-control"><strong>Take Time: </strong>{{$food->pivot->taketime}}</span>
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
                                                @endif
                                            @endforeach
                                        </div>
                                    </div>
                                </div>
                            @endforeach

                        </div>
                        <div class="form-group program-progress">
                            <label class="col-sm-3 control-label">Workout Program Progress</label>
                            <div class="col-md-6">
                                <div class="progressbar workout-progress" data-value="45">
                                    <div class="progressbar-value bg-green">
                                        <div class="progress-label">
                                            45%
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group Diet-Progress">
                            <label class="col-sm-3 control-label">Diet Program Progress</label>
                            <div class="col-md-6">
                                <span class="form-control"></span>
                            </div>
                        </div>


                        <div class="form-group submit-btn-div">
                            <button class="btn ra-100 btn-secondary calculate_progress" type="button">Calculate Progress</button>
                            <button class="btn ra-100 btn-default" type="submit">Save Progress</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@stop


@section('script')
    <script src="{{url('/assets/plugins/select2/js/select2.full.js')}}"></script>
    <script src="{{url('/admin-assets/widgets/button/button.js')}}" type="text/javascript"></script>
    <script src="{{url('/assets/js/activity.js')}}" type="text/javascript"></script>
@stop