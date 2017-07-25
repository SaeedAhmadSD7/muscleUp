@extends('layouts.backend-main')

@section('title','Workout program')

@section('style-sheet')

    <link href="{{url('/admin-assets/elements/forms.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/themes/components/border-radius.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/widgets/modal/modal.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/helpers/typography.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/widgets/wizard/wizard.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/elements/buttons.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/css/workout.css')}}" rel="stylesheet" type="text/css">


    {{--<link href="{{url('/assets/elements/panel-box.css')}}" rel="stylesheet" type="text/css">--}}


@stop

@section('content')
    <div id="page-title">
        <h2>Workout Program</h2>
        <p>Create workout program for your trainees.</p>
    </div>

    <div class="panel">
        <div class="panel-body">
            <h3 class="title-hero">Alternate style</h3>
            <div class="example-box-wrapper">
                <div class="form-wizard" id="form-wizard-3">
                    <ul>
                        <li>
                            <a data-toggle="tab" href="#step-1"><label class="wizard-step">1</label><span class="wizard-description">Workout Program<small>Workout Program Name</small></span></a>
                        </li>
                        <li>
                            <a data-toggle="tab" href="#step-2"><label class="wizard-step">2</label><span class="wizard-description">Contact information <small>Confirm contact details</small></span></a>
                        </li>
                        <li>
                            <a data-toggle="tab" href="#step-3"><label class="wizard-step">3</label><span class="wizard-description">Business support <small>Establish business description</small></span></a>
                        </li>
                        <li>
                            <a data-toggle="tab" href="#step-4"><label class="wizard-step">4</label><span class="wizard-description">Final steps <small>Finish and send the email</small></span></a>
                        </li>
                    </ul>
                    <form class="workout-program form-horizontal bordered-row">
                        {{csrf_field()}}
                        <div class="tab-content">
                            <div class="tab-pane active" id="step-1">
                                <div class="content-box program_page">
                                    <h3 class="content-box-header bg-default">First</h3>
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
                                            <div aria-hidden="true" aria-labelledby="myLargeModalLabel" class="modal fade bs-example-modal-lg" role="dialog" tabindex="-1">
                                                <div class="modal-dialog modal-lg">
                                                    <div class="modal-content">
                                                        <div class="modal-header">
                                                            <button aria-hidden="true" class="close" type="button">&times;</button>

                                                            <h4 class="modal-title">Modal title</h4>
                                                        </div>


                                                        <div class="modal-body">
                                                            <p>Large modal content here ...</p>
                                                        </div>


                                                        <div class="modal-footer">
                                                            <button class="btn btn-default modal_close" type="button">Close</button>
                                                            <button class="btn btn-primary" type="button">Save changes</button>
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
                            <div class="tab-pane" id="step-3">
                                <div class="content-box">
                                    <h3 class="content-box-header bg-green">Third</h3>
                                    <div class="content-box-wrapper">
                                        Lorem ipsum dolor sic amet dixit tu.
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane" id="step-4">
                                <div class="content-box">
                                    <h3 class="content-box-header bg-blue">Forth</h3>
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
    <script src="{{url('/admin-assets/widgets/wizard/wizard-demo.js')}}" type="text/javascript"></script>
    <script src="{{url('/admin-assets/widgets/tabs/tabs.js')}}" type="text/javascript"></script>
    <script src="{{url('/admin-assets/widgets/wizard/wizard.js')}}" type="text/javascript"></script>
    <script src="{{url('/admin-assets/widgets/button/button.js')}}" type="text/javascript"></script>
    <script src="{{url('/admin-assets/widgets/modal/modal.js')}}" type="text/javascript"></script>
    <script src="{{url('/assets/js/program.js')}}"></script>

@stop
