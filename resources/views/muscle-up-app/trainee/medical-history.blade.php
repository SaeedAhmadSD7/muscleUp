@extends('muscle-up-app.layouts.main')

@section('title','Medical History')

@section('content')
    <div class="container-fluid" style="margin: 0; padding: 0;">
        <section class="trainee-reg clearfix">
            <div class="inner">

                <div class="bg-img"></div>


                <div class="t-reg-form">
                    <div class="t-reg-top">
                        <h2><span class="space"></span>Trainee Medical History</h2>
                        <h3><span class="space"></span> Please Fill in your medical history.</h3>
                    </div>

                    <div class="reg-form">
                        <form id="contact-form" role="form" method="POST" action="{{route('save-medical')}}">
                            {{csrf_field()}}
                            <div class="fields clearfix">
                                <section>
                                    <div class="form-group col-md-12-offset col-sm-12 col-xs-12 Gender ">
                                        <div class="col-md-5 col-md-offset-2 col sm-7 col-xs-7 sex-title">
                                            <p class="title">Do you have Asthma ? </p>
                                        </div>
                                        <div class="col-md-4 col-sm-5 col-xs-5">
                                            <div class="btn-group" data-toggle="buttons">
                                                <label class="btn"><input type="radio" name='asthma' value="1" ><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> Yes</span></label>
                                                <label class="btn"><input type="radio" name='asthma' value="0" checked><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> No</span></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-12-offset col-sm-12 col-xs-12 Gender ">
                                        <div class="col-md-5 col-md-offset-2 col sm-7 col-xs-7 sex-title">
                                            <p class="title">Do you have diabetes ? </p>
                                        </div>
                                        <div class="col-md-4 col-sm-5 col-xs-5">
                                            <div class="btn-group" data-toggle="buttons">
                                                <label class="btn"><input type="radio" name='diabetes' value="1" ><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> Yes</span></label>
                                                <label class="btn"><input type="radio" name='diabetes' value="0" checked><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> No</span></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-12-offset col-sm-12 col-xs-12 Gender ">
                                        <div class="col-md-5 col-md-offset-2 col sm-7 col-xs-7 sex-title">
                                            <p class="title">Do you have blood_pressure ? </p>
                                        </div>
                                        <div class="col-md-4 col-sm-5 col-xs-5">
                                            <div class="btn-group" data-toggle="buttons">
                                                <label class="btn"><input type="radio" name='blood_pressure' value="1"><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> Yes</span></label>
                                                <label class="btn"><input type="radio" name='blood_pressure' value="0" checked><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> No</span></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-12-offset col-sm-12 col-xs-12 Gender ">
                                        <div class="col-md-5 col-md-offset-2 col sm-7 col-xs-7 sex-title">
                                            <p class="title">Do you have cholesterol ? </p>
                                        </div>
                                        <div class="col-md-4 col-sm-5 col-xs-5">
                                            <div class="btn-group" data-toggle="buttons">
                                                <label class="btn"><input type="radio" name='cholesterol' value="1"><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> Yes</span></label>
                                                <label class="btn"><input type="radio" name='cholesterol' value="0" checked><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> No</span></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-12-offset col-sm-12 col-xs-12 Gender ">
                                        <div class="col-md-5 col-md-offset-2 col sm-7 col-xs-7 sex-title">
                                            <p class="title">Do you have heart_murmur ? </p>
                                        </div>
                                        <div class="col-md-4 col-sm-5 col-xs-5">
                                            <div class="btn-group" data-toggle="buttons">
                                                <label class="btn"><input type="radio" name='heart_murmur' value="1"><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> Yes</span></label>
                                                <label class="btn"><input type="radio" name='heart_murmur' value="0" checked><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> No</span></label>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section>
                                    <div class="form-group col-md-12-offset col-sm-12 col-xs-12 Gender ">
                                        <div class="col-md-5 col-md-offset-2 col sm-7 col-xs-7 sex-title">
                                            <p class="title">Do you have knee_problems ? </p>
                                        </div>
                                        <div class="col-md-4 col-sm-5 col-xs-5">
                                            <div class="btn-group" data-toggle="buttons">
                                                <label class="btn"><input type="radio" name='knee_problems' value="1" ><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> Yes</span></label>
                                                <label class="btn"><input type="radio" name='knee_problems' value="0" checked><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> No</span></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-12-offset col-sm-12 col-xs-12 Gender ">
                                        <div class="col-md-5 col-md-offset-2 col sm-7 col-xs-7 sex-title">
                                            <p class="title">Do you have arthritis ? </p>
                                        </div>
                                        <div class="col-md-4 col-sm-5 col-xs-5">
                                            <div class="btn-group" data-toggle="buttons">
                                                <label class="btn"><input type="radio" name='arthritis' value="1"><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> Yes</span></label>
                                                <label class="btn"><input type="radio" name='arthritis' value="0" checked><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> No</span></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-12-offset col-sm-12 col-xs-12 Gender ">
                                        <div class="col-md-5 col-md-offset-2 col sm-7 col-xs-7 sex-title">
                                            <p class="title">Do you have dizziness ? </p>
                                        </div>
                                        <div class="col-md-4 col-sm-5 col-xs-5">
                                            <div class="btn-group" data-toggle="buttons">
                                                <label class="btn"><input type="radio" name='dizziness' value="1"><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> Yes</span></label>
                                                <label class="btn"><input type="radio" name='dizziness' value="0" checked><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> No</span></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-12-offset col-sm-12 col-xs-12 Gender ">
                                        <div class="col-md-5 col-md-offset-2 col sm-7 col-xs-7 sex-title">
                                            <p class="title">Do you have back_pain ? </p>
                                        </div>
                                        <div class="col-md-4 col-sm-5 col-xs-5">
                                            <div class="btn-group" data-toggle="buttons">
                                                <label class="btn"><input type="radio" name='back_pain' value="1"><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> Yes</span></label>
                                                <label class="btn"><input type="radio" name='back_pain' value="0" checked><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> No</span></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-12-offset col-sm-12 col-xs-12 Gender ">
                                        <div class="col-md-5 col-md-offset-2 col sm-7 col-xs-7 sex-title">
                                            <p class="title">Do you have neck_pain ? </p>
                                        </div>
                                        <div class="col-md-4 col-sm-5 col-xs-5">
                                            <div class="btn-group" data-toggle="buttons">
                                                <label class="btn"><input type="radio" name='neck_pain' value="1"><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> Yes</span></label>
                                                <label class="btn"><input type="radio" name='neck_pain' value="0" checked><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> No</span></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-12-offset col-sm-12 col-xs-12 Gender ">
                                        <div class="col-md-5 col-md-offset-2 col sm-7 col-xs-7 sex-title">
                                            <p class="title">Do you have kidney problem ? </p>
                                        </div>
                                        <div class="col-md-4 col-sm-5 col-xs-5">
                                            <div class="btn-group" data-toggle="buttons">
                                                <label class="btn"><input type="radio" name='kidney_condition' value="1"><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> Yes</span></label>
                                                <label class="btn"><input type="radio" name='kidney_condition' value="0" checked><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> No</span></label>
                                            </div>
                                        </div>
                                    </div>

                                </section>

                                <section>
                                    <div class="form-group col-md-12-offset col-sm-12 col-xs-12 Gender ">
                                        <div class="col-md-5 col-md-offset-2 col sm-7 col-xs-7 sex-title">
                                            <p class="title">Do you have liver problem ? </p>
                                        </div>
                                        <div class="col-md-4 col-sm-5 col-xs-5">
                                            <div class="btn-group" data-toggle="buttons">
                                                <label class="btn"><input type="radio" name='liver_condition' value="1"><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> Yes</span></label>
                                                <label class="btn"><input type="radio" name='liver_condition' value="0" checked><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> No</span></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-12-offset col-sm-12 col-xs-12 Gender ">
                                        <div class="col-md-5 col-md-offset-2 col sm-7 col-xs-7 sex-title">
                                            <p class="title">Do you have heart palpitation problem ? </p>
                                        </div>
                                        <div class="col-md-4 col-sm-5 col-xs-5">
                                            <div class="btn-group" data-toggle="buttons">
                                                <label class="btn"><input type="radio" name='heart_palpitation' value="1"><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> Yes</span></label>
                                                <label class="btn"><input type="radio" name='heart_palpitation' value="0" checked><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> No</span></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-12-offset col-sm-12 col-xs-12 Gender ">
                                        <div class="col-md-5 col-md-offset-2 col sm-7 col-xs-7 sex-title">
                                            <p class="title">Do you have glandular fever ? </p>
                                        </div>
                                        <div class="col-md-4 col-sm-5 col-xs-5">
                                            <div class="btn-group" data-toggle="buttons">
                                                <label class="btn"><input type="radio" name='glandular_fever' value="1"><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> Yes</span></label>
                                                <label class="btn"><input type="radio" name='glandular_fever' value="0" checked><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> No</span></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-12-offset col-sm-12 col-xs-12 Gender ">
                                        <div class="col-md-5 col-md-offset-2 col sm-7 col-xs-7 sex-title">
                                            <p class="title">Do you smoke ? </p>
                                        </div>
                                        <div class="col-md-4 col-sm-5 col-xs-5">
                                            <div class="btn-group" data-toggle="buttons">
                                                <label class="btn"><input type="radio" name='smoke' value="1"><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> Yes</span></label>
                                                <label class="btn"><input type="radio" name='smoke' value="0" checked><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> No</span></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-12-offset col-sm-12 col-xs-12 Gender ">
                                        <div class="col-md-5 col-md-offset-2 col sm-7 col-xs-7 sex-title">
                                            <p class="title">Do you drink? </p>
                                        </div>
                                        <div class="col-md-4 col-sm-5 col-xs-5">
                                            <div class="btn-group" data-toggle="buttons">
                                                <label class="btn"><input type="radio" name='drink' value="1"><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> Yes</span></label>
                                                <label class="btn"><input type="radio" name='drink' value="0" checked><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> No</span></label>
                                            </div>
                                        </div>
                                    </div>

                                </section>
                            </div>


                            <div class="text-right col-md-12"><button type="submit"><span class="fa fa-angle-right"></span> Submit</button></div>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    </div>
    @stop
@section('scripts')
    <script src="{{url('/assets/js/request-gym.js')}}"></script>
    @stop