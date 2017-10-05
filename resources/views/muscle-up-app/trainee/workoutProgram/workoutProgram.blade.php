@extends('muscle-up-app.trainee.dashboard.trainee-dashboard')

@section('title','Progress')

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

@section('page-heading')
    <h2>Workout Program</h2>
    <p>View Workout Program</p>
@stop

@section('content')
    <div class="panel">
        <div class="panel-body">
            <div class="example-box-wrapper">
                <div class="form-wizard" id="form-wizard-3">
                    @if($phase_daycount)
                        <form class="workout-program form-horizontal bordered-row" action="">
                            <div class="tab-content">
                            <h3 class="content-box-header bg-default">Activity Mark Progress</h3>
                            <div class="form-group first-group">
                                <label class="col-sm-3 control-label">Program Name</label>
                                <div class="col-sm-6">
                                    <span class="form-control">{{$trainee->allocation->program->title}}</span>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-3 control-label">Phase Name</label>
                                <div class="col-sm-6">
                                    <select class="phase_list" name="">
                                        <option></option>
                                        @for($i = 0; $i < count($trainee->allocation->program->phase); $i++)
                                            <option  value="{{$trainee->allocation->program->phase[$i]->id}}" data-value="{{$phase_daycount[$i]}}" data-order="{{$i}}">{{$trainee->allocation->program->phase[$i]->title}}</option>
                                        @endfor
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
                            <div class="form-group date-div">
                                <label class="col-sm-3 control-label">Date</label>
                                <div class="col-sm-6">
                                    <input type="hidden" class="start_date" value="{{$trainee->allocation->start_date}}">
                                    <input class="calc_date" type="hidden" value="">
                                    <span class="form-control date-span"></span>
                                </div>
                            </div>
                            <div class="form-group wbs"></div>
                        </div>
                        </form>
                    @else
                        <div class="tab-content">
                            <h3 class="content-box-header bg-default">Workout Program</h3>
                            <fieldset>
                                <div class="form-group first-group">
                                    <div class="col-sm-6 col-sm-offset-3">
                                        No Workout program has been allocated.
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
    <script src="{{url('/admin-assets/js/workoutProgramView.js')}}" type="text/javascript"></script>
@stop