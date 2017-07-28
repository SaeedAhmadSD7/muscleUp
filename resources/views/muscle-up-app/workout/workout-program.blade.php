@extends('layouts.backend-main')

@section('title','Workout program')

@section('style-sheet')
    <link href="{{url('/admin-assets/elements/forms.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/widgets/modal/modal.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/helpers/typography.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/widgets/wizard/wizard.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/elements/buttons.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/themes/components/border-radius.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/css/workout.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/assets/plugins/select2/css/select2.css')}}" rel="stylesheet">
    <link href="{{url('/admin-assets/select2/css/select2-bootstrap.css')}}" rel="stylesheet">
    <link href="{{url('/admin-assets/widgets/touchspin/touchspin.css')}}" rel="stylesheet" type="text/css">
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
                    <ul>
                        <li>
                            <a data-toggle="tab" href="#step-1"><label class="wizard-step">1</label><span class="wizard-description">Workout Program<small>Create Workout Program</small></span></a>
                        </li>
                        <li>
                            <a data-toggle="tab" href="#step-2"><label class="wizard-step">2</label><span class="wizard-description">Diet Plan <small>Create Diet Plan</small></span></a>
                        </li>
                    </ul>
                    <form class="workout-program form-horizontal bordered-row">
                        {{csrf_field()}}
                        <div class="tab-content">
                            <div class="tab-pane active" id="step-1">
                                <div class="content-box program_page">
                                    <h3 class="content-box-header bg-default">Workout Program</h3>
                                    <div class="form-group first-group">
                                        <label class="col-sm-3 control-label">Program Name</label>
                                        <div class="col-sm-6">
                                            <input class="form-control" type="text" name="" value="" placeholder="Enter Program Name...">
                                        </div>
                                    </div>

                                    <div class="form-group phase">
                                        <label class="col-sm-3 control-label">Phase Name</label>
                                        <div class="col-sm-6">
                                            <div class="input-group">
                                                <input class="form-control phase_name" name="" value="" type="text" placeholder="Enter Phase Name...">
                                                <span class="input-group-btn">
                                                    <button class="btn btn-blue-alt phase_detail" type="button" disabled><span class="input-group-btn">Add Details</span></button>
                                                </span>
                                            </div>
                                            <div aria-hidden="true" class="modal fade phase_details_modal" role="dialog">
                                                <div class="modal-dialog">
                                                    <div class="modal-content">
                                                        <div class="modal-header">
                                                            <button aria-hidden="true" class="close" data-dismiss="modal" type="button">&times;</button>
                                                            <h4 class="modal-title">Phase Name</h4>
                                                        </div>


                                                        <div class="modal-body">
                                                            <div class="container-fluid">
                                                                <div class="day">
                                                                    <div class="day_content">
                                                                        <div class="form-group day_name-div">
                                                                            <div class="col-sm-12">
                                                                                <div class="input-group">
                                                                                    <input class="form-control day_name" name="" value="" type="text" placeholder="Enter Day Name...">
                                                                                    <span class="input-group-btn">
                                                                                    <button class="btn btn-blue-alt day_detail" type="button" disabled><span>Add Details  </span><i class="glyph-icon icon-plus"></i></button>
                                                                                </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="form-group day_detail-div">
                                                                            <div class="form-group">
                                                                                <div class="exercise-div">
                                                                                    <div class="col-md-8 col-md-offset-1 col-sm-10 col-xs-10 exercise_list-div">
                                                                                        <div class="form-group">
                                                                                            <select class="exercise_list" name="exercise">
                                                                                                <option></option>
                                                                                                @foreach($exercises as $exercise)
                                                                                                    <option  value="{{$exercise['name']}}" >{{$exercise['name']}}</option>
                                                                                                @endforeach
                                                                                            </select>
                                                                                        </div>
                                                                                        <div class="col-md-11 col-md-offset-1 form-group exercise_detail-div ">
                                                                                            <input class="form-control exercise_detail-input" name="Reps" placeholder="Reps..." type="number" value="">
                                                                                        </div>
                                                                                        <div class="col-md-11 col-md-offset-1 form-group exercise_detail-div ">
                                                                                            <input class="form-control exercise_detail-input" name="Sets" placeholder="Sets..." type="number" value="">
                                                                                        </div>
                                                                                        <div class="col-md-11 col-md-offset-1 form-group exercise_detail-div ">
                                                                                            <input class="form-control exercise_detail-input" name="rest" placeholder="Rest in Minutes..." type="number" value="">
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="col-md-3 col-sm-2 col-xs-2 exercise_detail-btn-div">
                                                                                        <button class="btn btn-blue-alt exercise_detail_btn" type="button" disabled><i class="glyph-icon icon-plus"></i></button>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="col-md-11 col-md-offset-1 col-sm-12 col-xs-12 add_exercise-div">
                                                                                    <button class="btn btn-alt btn-hover btn-primary add-exercise" type="button"><span>Add Exercise</span><i class="glyph-icon icon-arrow-up"></i></button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                 <div class="form-group">
                                                                     <div class="col-sm-6">
                                                                         <button class="btn btn-alt btn-hover btn-primary add-day" type="button"><span>Add Day</span><i class="glyph-icon icon-arrow-up"></i></button>
                                                                     </div>
                                                                 </div>
                                                            </div>
                                                        </div>


                                                        <div class="modal-footer">
                                                            <button class="btn btn-default" data-dismiss="modal" type="button">Done</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="col-sm-6 col-md-offset-3">
                                            <button class="btn btn-alt btn-hover btn-primary add-phase" type="button"><span>Add Phase</span> <i class="glyph-icon icon-arrow-up"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane" id="step-2">
                                <div class="content-box">
                                    <h3 class="content-box-header bg-black">Second</h3>
                                    <div class="content-box-wrapper">
                                        Lorem ipsum dolor sic amet dixit tu.
                                    </div>
                                </div>
                            </div>
                            <ul class="pager wizard">
                                <li class="previous first disabled" style="display:none"><a href="#">First</a></li>
                                <li class="previous disabled"><a href="#">Previous</a></li>
                                <li class="next last" style="display:none"><a href="#">Last</a></li>
                                <li class="next"><a href="#">Next</a></li>
                            </ul>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@stop

@section('script')
    <script src="{{url('/admin-assets/js-core/modernizr.js')}}" type="text/javascript"></script>
    <script src="{{url('/admin-assets/widgets/wizard/wizard-demo.js')}}" type="text/javascript"></script>
    <script src="{{url('/admin-assets/widgets/tabs/tabs.js')}}" type="text/javascript"></script>
    <script src="{{url('/admin-assets/widgets/wizard/wizard.js')}}" type="text/javascript"></script>
    <script src="{{url('/admin-assets/widgets/button/button.js')}}" type="text/javascript"></script>
    <script src="{{url('/admin-assets/widgets/modal/modal.js')}}" type="text/javascript"></script>
    <script src="{{url('/admin-assets/widgets/touchspin/touchspin.js')}}" type="text/javascript"></script>
    <script src="{{url('/assets/plugins/select2/js/select2.full.js')}}"></script>
    <script src="{{url('/assets/js/program.js')}}"></script>
@stop
