@extends('layouts.backend-main')

@section('title','Workout program')

@section('style-sheet')
    <link href="{{url('/admin-assets/elements/forms.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/helpers/typography.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/elements/buttons.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/themes/components/border-radius.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/helpers/border-radius.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/css/workout.css')}}" rel="stylesheet" type="text/css">
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
                    <form class="workout-program form-horizontal bordered-row" method="POST" action="{{route('program-store')}}">
                        {{csrf_field()}}
                        <div class="tab-content">
                            <h3 class="content-box-header bg-default">Workout Program Form</h3>
                            <div class="form-group first-group">
                                <label class="col-sm-3 control-label">Program Name</label>
                                <div class="col-sm-6">
                                    <input class="form-control" type="text" name="title" value="" placeholder="Program Name...">
                                </div>
                            </div>
                        </div>
                        <div class="form-group submit-btn-div">
                            <button class="btn ra-100 btn-default" type="submit">Add Program</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@stop

@section('script')
    <script src="{{url('/admin-assets/widgets/button/button.js')}}" type="text/javascript"></script>
@stop
