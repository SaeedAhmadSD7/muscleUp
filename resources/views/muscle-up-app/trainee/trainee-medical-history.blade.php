@extends('layouts.backend-main')

@section('title','Medical history')

@section('style-sheet')
    <link href="{{url('/admin-assets/elements/forms.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/themes/components/border-radius.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/helpers/typography.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/widgets/wizard/wizard.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/elements/buttons.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/widgets/input-switch/inputswitch.css')}}" rel="stylesheet" type="text/css">



@stop

@section('content')
    <div id="page-title">
        <h2>Trainee Medical History</h2>
        <p>Please Fill in your medical history.</p>
    </div>

    <div class="panel">
        <div class="panel-body">
            <h3 class="title-hero">Medical History</h3>
            <div class="example-box-wrapper">
                <div class="form-wizard" id="form-wizard-3">
                    <ul>
                        <li>
                            <a data-toggle="tab" href="#step-1"><label class="wizard-step">1</label><span class="wizard-description">Medical History<small>Select your Medical History</small></span></a>
                        </li>
                        <li>
                            <a data-toggle="tab" href="#step-2"><label class="wizard-step">2</label><span class="wizard-description">Medical History<small>Select your Medical History</small></span></a>
                        </li>
                        <li>
                            <a data-toggle="tab" href="#step-3"><label class="wizard-step">3</label><span class="wizard-description">Medical History <small>Select your Medical History</small></span></a>
                        </li>
                        <li>
                            <a data-toggle="tab" href="#step-4"><label class="wizard-step">4</label><span class="wizard-description">Food Allergies <small>Select your food allergies</small></span></a>
                        </li>
                    </ul>
                    <form class="workout-program form-horizontal bordered-row medical-form" role="form" method="POST" action="{{route('save-medical')}}">
                        {{csrf_field()}}
                        <div class="tab-content">
                            <div class="tab-pane active" id="step-1">
                                <div class="content-box program_page">
                                    <h3 class="content-box-header bg-default">First Page</h3>
                                    <div class="form-group">
                                        <label class="col-sm-3 control-label"> Do you have Asthma </label>
                                        <div class="col-sm-6">
                                            <input checked="checked" class="input-switch" data-off-text="No" data-on-color="info" data-on-text="Yes" data-size="medium" name="asthma" type="checkbox" value="1">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-3 control-label"> Do you have Diabetes </label>
                                        <div class="col-sm-6">
                                            <input checked="checked" class="input-switch" data-off-text="No" data-on-color="info" data-on-text="Yes" data-size="medium" name="diabetes" type="checkbox" value="1">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-3 control-label"> Do you have blood Pressure </label>
                                        <div class="col-sm-6">
                                            <input checked="checked" class="input-switch" data-off-text="No" data-on-color="info" data-on-text="Yes" data-size="medium" name="blood_pressure" type="checkbox" value="1">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-3 control-label"> Do you have cholesterol </label>
                                        <div class="col-sm-6">
                                            <input checked="checked" class="input-switch" data-off-text="No" data-on-color="info" data-on-text="Yes" data-size="medium" name="cholesterol" type="checkbox" value="1">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-3 control-label"> Do you have heart Murmur </label>
                                        <div class="col-sm-6">
                                            <input checked="checked" class="input-switch" data-off-text="No" data-on-color="info" data-on-text="Yes" data-size="medium" name="heart_murmur" type="checkbox" value="1">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane" id="step-2">
                                <div class="content-box">
                                    <h3 class="content-box-header bg-black">Second Page</h3>
                                    <div class="form-group">
                                        <label class="col-sm-3 control-label"> Do you have knee Problems </label>
                                        <div class="col-sm-6">
                                            <input checked="checked" class="input-switch" data-off-text="No" data-on-color="info" data-on-text="Yes" data-size="medium" name="knee_problems" type="checkbox" value="1">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-3 control-label"> Do you have Arthritis </label>
                                        <div class="col-sm-6">
                                            <input checked="checked" class="input-switch" data-off-text="No" data-on-color="info" data-on-text="Yes" data-size="medium" name="arthritis" type="checkbox" value="1">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-3 control-label"> Do you have Dizziness </label>
                                        <div class="col-sm-6">
                                            <input checked="checked" class="input-switch" data-off-text="No" data-on-color="info" data-on-text="Yes" data-size="medium" name="dizziness" type="checkbox" value="1">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-3 control-label"> Do you have back Pain </label>
                                        <div class="col-sm-6">
                                            <input checked="checked" class="input-switch" data-off-text="No" data-on-color="info" data-on-text="Yes" data-size="medium" name="back_pain" type="checkbox" value="1">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-3 control-label"> Do you have neck Pain </label>
                                        <div class="col-sm-6">
                                            <input checked="checked" class="input-switch" data-off-text="No" data-on-color="info" data-on-text="Yes" data-size="medium" name="neck_pain" type="checkbox" value="1">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-3 control-label"> Do you have kidney Problem </label>
                                        <div class="col-sm-6">
                                            <input checked="checked" class="input-switch" data-off-text="No" data-on-color="info" data-on-text="Yes" data-size="medium" name="kidney_condition" type="checkbox" value="1">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane" id="step-3">
                                <div class="content-box">
                                    <h3 class="content-box-header bg-green">Third page</h3>
                                    <div class="form-group">
                                        <label class="col-sm-3 control-label"> Do you have liver Problem </label>
                                        <div class="col-sm-6">
                                            <input checked="checked" class="input-switch" data-off-text="No" data-on-color="info" data-on-text="Yes" data-size="medium" name="liver_condition" type="checkbox" value="1">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-3 control-label"> Do you have heart Palpitation problem</label>
                                        <div class="col-sm-6">
                                            <input checked="checked" class="input-switch" data-off-text="No" data-on-color="info" data-on-text="Yes" data-size="medium" name="heart_palpitation" type="checkbox" value="1">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-3 control-label"> Do you have Glandular fever </label>
                                        <div class="col-sm-6">
                                            <input checked="checked" class="input-switch" data-off-text="No" data-on-color="info" data-on-text="Yes" data-size="medium" name="glandular_fever" type="checkbox" value="1">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-3 control-label"> Do you have Smoke </label>
                                        <div class="col-sm-6">
                                            <input checked="checked" class="input-switch" data-off-text="No" data-on-color="info" data-on-text="Yes" data-size="medium" name="smoke" type="checkbox" value="1">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-3 control-label"> Do you have Drink </label>
                                        <div class="col-sm-6">
                                            <input checked="checked" class="input-switch" data-off-text="No" data-on-color="info" data-on-text="Yes" data-size="medium" name="drink" type="checkbox" value="1">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane" id="step-4">
                                <div class="content-box">
                                    <h3 class="content-box-header bg-blue">Food Allergies</h3>
                                    <div class="form-group">
                                        <label class="col-sm-3 control-label"> Do you have Egg Allergies </label>
                                        <div class="col-sm-6">
                                            <input checked="checked" class="input-switch" data-off-text="No" data-on-color="info" data-on-text="Yes" data-size="medium" name="egg_allergies" type="checkbox" value="1">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-3 control-label"> Do you have Fish Allergies </label>
                                        <div class="col-sm-6">
                                            <input checked="checked" class="input-switch" data-off-text="No" data-on-color="info" data-on-text="Yes" data-size="medium" name="fish_allergies" type="checkbox" value="1">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-3 control-label"> Do you have Peanut Allergies </label>
                                        <div class="col-sm-6">
                                            <input checked="checked" class="input-switch" data-off-text="No" data-on-color="info" data-on-text="Yes" data-size="medium" name="peanut_allergies" type="checkbox" value="1">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-3 control-label"> Do you have Treenut Allergies </label>
                                        <div class="col-sm-6">
                                            <input checked="checked" class="input-switch" data-off-text="No" data-on-color="info" data-on-text="Yes" data-size="medium" name="treenut_allergies" type="checkbox" value="1">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-3 control-label"> Do you have Shellfish Allergies </label>
                                        <div class="col-sm-6">
                                            <input checked="checked" class="input-switch" data-off-text="No" data-on-color="info" data-on-text="Yes" data-size="medium" name="shellfish_allergies" type="checkbox" value="1">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-3 control-label"> Do you have wheat_allergies </label>
                                        <div class="col-sm-6">
                                            <input checked="checked" class="input-switch" data-off-text="No" data-on-color="info" data-on-text="Yes" data-size="medium" name="wheat_allergies" type="checkbox" value="1">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-3 control-label"> Do you have Soy Allergies </label>
                                        <div class="col-sm-6">
                                            <input checked="checked" class="input-switch" data-off-text="No" data-on-color="info" data-on-text="Yes" data-size="medium" name="soy_allergies" type="checkbox" value="1">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-3 control-label"> Do you have Meat Allergies </label>
                                        <div class="col-sm-6">
                                            <input checked="checked" class="input-switch" data-off-text="No" data-on-color="info" data-on-text="Yes" data-size="medium" name="meat_allergies" type="checkbox" value="1">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-3 control-label"> Do you have Seed Allergies </label>
                                        <div class="col-sm-6">
                                            <input checked="checked" class="input-switch" data-off-text="No" data-on-color="info" data-on-text="Yes" data-size="medium" name="seed_allergies" type="checkbox" value="1">
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <ul class="pager wizard">
                                <li class="previous first disabled" style="display:none"><a href="#">First</a></li>
                                <li class="previous disabled"><a href="#">Previous</a></li>
                                <button class="next last" type="submit">submit</button>

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
    <script type="text/javascript">
        /* Input switch */

        $(function() { "use strict";
            $('.input-switch').bootstrapSwitch();
        });

        $('.input-switch').on('focus', function () {
            console.log($(this).val());
        })

    </script>
    <script src="{{url('/admin-assets/widgets/input-switch/inputswitch.js')}}" type="text/javascript"></script>


@stop
