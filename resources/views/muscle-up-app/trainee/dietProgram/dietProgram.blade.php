@extends('muscle-up-app.trainee.dashboard.trainee-dashboard')

@section('title','Diet Program')

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
    <link href="{{url('/admin-assets/css/program-view.css')}}" rel="stylesheet" type="text/css">
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
                    @if($dietProgram)
                        <form class="workout-program form-horizontal bordered-row" action="">
                            <div class="tab-content">
                                <h3 class="content-box-header bg-default">Diet Program</h3>
                                <div class="form-group">
                                    <label class="col-sm-3 control-label">Diet Program Name</label>
                                    <div class="col-sm-6">
                                        <input class="diet_program_id" type="hidden" value="{{$trainee->allocation->diet_program->id}}">
                                        <span class="form-control">{{$trainee->allocation->diet_program->title}}</span>
                                    </div>
                                </div>
                                <div class="form-group date-div">
                                    <label class="col-sm-3 control-label">Start Date</label>
                                    <div class="col-sm-6">
                                        <input type="hidden" class="start_date" value="{{$trainee->allocation->start_date}}">
                                        <span class="form-control date-span"></span>
                                    </div>
                                </div>
                                <div class="form-group wbs"></div>
                                @foreach($trainee->allocation->diet_program->meal as $meal)
                                    <h3 class="content-box-header bg-default">Meal Name: {{$meal->title}}</h3>
                                    <fieldset>
                                        <input type="hidden" value="{{$meal->id}}">
                                        <div class="meal_cotainer">
                                            <div class="first-group form-group">
                                                <div class="col-md-6 col-md-offset-3">
                                                    <span class="input-group-btn"><button class="btn btn-blue-alt meal_detail toggle" type="button"><span>Show Details </span><i class="glyph-icon icon-plus" disabled></i></button></span>
                                                </div>
                                            </div>
                                            <div class="form-group meal_detail-div">
                                                <div class="toggle-content meal_content">
                                                    @foreach($trainee->allocation->diet_program->food as $food)
                                                        <div class="food-container">
                                                            @if($food->pivot->meal_id === $meal->pivot->meal_id)
                                                                <div class="form-group col-md-offset-3 col-md-6" >
                                                                    <span class="form-control"><strong>Food Name: </strong>{{$food->title}}</span>
                                                                </div>
                                                                <div class="form-group col-md-offset-3 col-md-2 quantity-actual-div">
                                                                    <span class="form-control"><strong>Quantity: </strong>{{$food->pivot->quantity}}</span>
                                                                </div>
                                                                <div class="form-group col-md-2 calories-actual-div">
                                                                    <span class="form-control"><strong>Calories: </strong>{{$food->pivot->calories}}</span>
                                                                </div>
                                                                <div class="form-group col-md-2">
                                                                    <span class="form-control"><strong>Take Time: </strong>{{$food->pivot->taketime}}</span>
                                                                </div>
                                                            @endif
                                                        </div>
                                                    @endforeach
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                @endforeach
                            </div>
                        </form>
                    @else
                        <div class="tab-content">
                            <h3 class="content-box-header bg-default">Diet Program</h3>
                            <fieldset>
                                <div class="form-group first-group">
                                    <div class="col-sm-6 col-sm-offset-3">
                                        No Diet-Program has been allocated.
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                    @endif
                </div>
            </div>
        </div>
    </div>
@stop


@section('script')

    <script src="{{url('/assets/plugins/select2/js/select2.full.js')}}"></script>
    <script src="{{url('/admin-assets/widgets/button/button.js')}}" type="text/javascript"></script>
    <script src="{{url('/admin-assets/js/dietProgramView.js')}}" type="text/javascript"></script>
@stop