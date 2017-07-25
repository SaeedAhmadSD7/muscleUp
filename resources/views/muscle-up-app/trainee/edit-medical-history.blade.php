@extends('layouts.frontend-main')

@section('title','Medical History')

@section('content')
    <div class="container-fluid" style="margin: 0; padding: 0;">
        <div class="trainee-reg clearfix">
            <div class="inner">

                <div class="bg-img"></div>


                <div class="t-reg-form">
                    <div class="t-reg-top">
                        <h2><span class="space"></span>Trainee Medical History</h2>
                        <h3><span class="space"></span> Please Fill in your medical history.</h3>
                    </div>

                    <div class="reg-form">
                        <form class="medical-form" role="form" method="POST" action="{{route('trainee-medical-update',$med_his->id)}}">
                            {{csrf_field()}}
                            <div class="fields clearfix">
                                <section>
                                    <div class="form-group col-md-12-offset col-sm-12 col-xs-12 Gender ">
                                        <div class="col-md-5 col-md-offset-2 col sm-7 col-xs-7 sex-title">
                                            <p class="title">Do you have Asthma ? </p>
                                        </div>
                                        <div class="col-md-4 col-sm-5 col-xs-5">
                                            <div class="btn-group" data-toggle="buttons">
                                                    <label class="btn"><input type="radio" name='asthma' value="1"  {{ $med_his->asthma ? "checked" : "" }}><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> Yes</span></label>
                                                 <label class="btn"><input type="radio" name='asthma' value="0" {{ $med_his->asthma ? "" : "checked" }}><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> No</span></label>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-12-offset col-sm-12 col-xs-12 Gender ">
                                        <div class="col-md-5 col-md-offset-2 col sm-7 col-xs-7 sex-title">
                                            <p class="title">Do you have diabetes ? </p>
                                        </div>
                                        <div class="col-md-4 col-sm-5 col-xs-5">
                                            <div class="btn-group" data-toggle="buttons">
                                                <label class="btn"><input type="radio" name='diabetes' value="1" {{ $med_his->diabetes ? "checked" : "" }}><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> Yes</span></label>
                                                <label class="btn"><input type="radio" name='diabetes' value="0" {{ $med_his->diabetes ? "" : "checked" }}><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> No</span></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-12-offset col-sm-12 col-xs-12 Gender ">
                                        <div class="col-md-5 col-md-offset-2 col sm-7 col-xs-7 sex-title">
                                            <p class="title">Do you have blood pressure ? </p>
                                        </div>
                                        <div class="col-md-4 col-sm-5 col-xs-5">
                                            <div class="btn-group" data-toggle="buttons">
                                                <label class="btn"><input type="radio" name='blood_pressure' value="1" {{ $med_his->blood_pressure ? "checked" : "" }}><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> Yes</span></label>
                                                <label class="btn"><input type="radio" name='blood_pressure' value="0" {{ $med_his->blood_pressure ? "" : "checked" }}><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> No</span></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-12-offset col-sm-12 col-xs-12 Gender ">
                                        <div class="col-md-5 col-md-offset-2 col sm-7 col-xs-7 sex-title">
                                            <p class="title">Do you have cholesterol ? </p>
                                        </div>
                                        <div class="col-md-4 col-sm-5 col-xs-5">
                                            <div class="btn-group" data-toggle="buttons">
                                                 <label class="btn"><input type="radio" name='cholesterol' value="1" {{ $med_his->cholesterol ? "checked" : "" }}><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> Yes</span></label>
                                                <label class="btn"><input type="radio" name='cholesterol' value="0" {{ $med_his->cholesterol ? "" : "checked" }}><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> No</span></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-12-offset col-sm-12 col-xs-12 Gender ">
                                        <div class="col-md-5 col-md-offset-2 col sm-7 col-xs-7 sex-title">
                                            <p class="title">Do you have heart_murmur ? </p>
                                        </div>
                                        <div class="col-md-4 col-sm-5 col-xs-5">
                                            <div class="btn-group" data-toggle="buttons">
                                                <label class="btn"><input type="radio" name='heart_murmur' value="1"{{ $med_his->heart_murmur ? "checked" : "" }}><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> Yes</span></label>
                                                <label class="btn"><input type="radio" name='heart_murmur' value="0" {{ $med_his->heart_murmur ? "" : "checked" }}><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> No</span></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="text-right col-md-12">
                                        <a class="btn btn-primary prev-btn" href="{{url()->previous()}}"><span class="fa fa-angle-right"></span> Cancel</a>
                                        <button type="button" class="btn-next" ><span class="fa fa-angle-right"></span>Next</button>
                                    </div>
                                </section>

                                <section>
                                    <div class="form-group col-md-12-offset col-sm-12 col-xs-12 Gender ">
                                        <div class="col-md-5 col-md-offset-2 col sm-7 col-xs-7 sex-title">
                                            <p class="title">Do you have knee_problems ? </p>
                                        </div>
                                        <div class="col-md-4 col-sm-5 col-xs-5">
                                            <div class="btn-group" data-toggle="buttons">
                                                <label class="btn"><input type="radio" name='knee_problems' value="1" {{ $med_his->knee_problems ? "checked" : "" }}><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> Yes</span></label>
                                                <label class="btn"><input type="radio" name='knee_problems' value="0" {{ $med_his->knee_problems ? "" : "checked" }}><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> No</span></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-12-offset col-sm-12 col-xs-12 Gender ">
                                        <div class="col-md-5 col-md-offset-2 col sm-7 col-xs-7 sex-title">
                                            <p class="title">Do you have arthritis ? </p>
                                        </div>
                                        <div class="col-md-4 col-sm-5 col-xs-5">
                                            <div class="btn-group" data-toggle="buttons">
                                                <label class="btn"><input type="radio" name='arthritis' value="1"{{ $med_his->arthritis ? "checked" : "" }}><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> Yes</span></label>
                                                <label class="btn"><input type="radio" name='arthritis' value="0" {{ $med_his->arthritis ? "" : "checked" }}><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> No</span></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-12-offset col-sm-12 col-xs-12 Gender ">
                                        <div class="col-md-5 col-md-offset-2 col sm-7 col-xs-7 sex-title">
                                            <p class="title">Do you have dizziness ? </p>
                                        </div>
                                        <div class="col-md-4 col-sm-5 col-xs-5">
                                            <div class="btn-group" data-toggle="buttons">
                                                <label class="btn"><input type="radio" name='dizziness' value="1"{{ $med_his->dizziness ? "checked" : "" }}><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> Yes</span></label>
                                                <label class="btn"><input type="radio" name='dizziness' value="0" {{ $med_his->dizziness ? "" : "checked" }}><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> No</span></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-12-offset col-sm-12 col-xs-12 Gender ">
                                        <div class="col-md-5 col-md-offset-2 col sm-7 col-xs-7 sex-title">
                                            <p class="title">Do you have back_pain ? </p>
                                        </div>
                                        <div class="col-md-4 col-sm-5 col-xs-5">
                                            <div class="btn-group" data-toggle="buttons">
                                                <label class="btn"><input type="radio" name='back_pain' value="1"{{ $med_his->back_pain ? "checked" : "" }}><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> Yes</span></label>
                                                <label class="btn"><input type="radio" name='back_pain' value="0" {{ $med_his->back_pain ? "" : "checked" }}><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> No</span></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-12-offset col-sm-12 col-xs-12 Gender ">
                                        <div class="col-md-5 col-md-offset-2 col sm-7 col-xs-7 sex-title">
                                            <p class="title">Do you have neck_pain ? </p>
                                        </div>
                                        <div class="col-md-4 col-sm-5 col-xs-5">
                                            <div class="btn-group" data-toggle="buttons">
                                                <label class="btn"><input type="radio" name='neck_pain' value="1"{{ $med_his->neck_pain ? "checked" : "" }}><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> Yes</span></label>
                                                <label class="btn"><input type="radio" name='neck_pain' value="0" {{ $med_his->neck_pain ? "" : "checked" }}><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> No</span></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-12-offset col-sm-12 col-xs-12 Gender ">
                                        <div class="col-md-5 col-md-offset-2 col sm-7 col-xs-7 sex-title">
                                            <p class="title">Do you have kidney problem ? </p>
                                        </div>
                                        <div class="col-md-4 col-sm-5 col-xs-5">
                                            <div class="btn-group" data-toggle="buttons">
                                                <label class="btn"><input type="radio" name='kidney_condition' value="1"{{ $med_his->kidney_condition ? "checked" : "" }}><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> Yes</span></label>
                                                <label class="btn"><input type="radio" name='kidney_condition' value="0" {{ $med_his->kidney_condition ? "" : "checked" }}><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> No</span></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="text-right col-md-12">
                                        <button type="button" class="btn-prev"><span class="fa fa-angle-left"></span>Previous</button>
                                        <button type="button" class="btn-next"><span class="fa fa-angle-right"></span>Next</button>
                                    </div>
                                </section>

                                <section>
                                    <div class="form-group col-md-12-offset col-sm-12 col-xs-12 Gender ">
                                        <div class="col-md-5 col-md-offset-2 col sm-7 col-xs-7 sex-title">
                                            <p class="title">Do you have liver problem ? </p>
                                        </div>
                                        <div class="col-md-4 col-sm-5 col-xs-5">
                                            <div class="btn-group" data-toggle="buttons">
                                                <label class="btn"><input type="radio" name='liver_condition' value="1"{{ $med_his->liver_condition ? "checked" : "" }}><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> Yes</span></label>
                                                <label class="btn"><input type="radio" name='liver_condition' value="0" {{ $med_his->liver_condition ? "" : "checked" }}><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> No</span></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-12-offset col-sm-12 col-xs-12 Gender ">
                                        <div class="col-md-5 col-md-offset-2 col sm-7 col-xs-7 sex-title">
                                            <p class="title">Do you have heart palpitation problem ? </p>
                                        </div>
                                        <div class="col-md-4 col-sm-5 col-xs-5">
                                            <div class="btn-group" data-toggle="buttons">
                                                <label class="btn"><input type="radio" name='heart_palpitation' value="1"{{ $med_his->heart_palpitation ? "checked" : "" }}><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> Yes</span></label>
                                                <label class="btn"><input type="radio" name='heart_palpitation' value="0" {{ $med_his->heart_palpitation ? "" : "checked" }}><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> No</span></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-12-offset col-sm-12 col-xs-12 Gender ">
                                        <div class="col-md-5 col-md-offset-2 col sm-7 col-xs-7 sex-title">
                                            <p class="title">Do you have glandular fever ? </p>
                                        </div>
                                        <div class="col-md-4 col-sm-5 col-xs-5">
                                            <div class="btn-group" data-toggle="buttons">
                                                <label class="btn"><input type="radio" name='glandular_fever' value="1"{{ $med_his->glandular_fever ? "checked" : "" }}><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> Yes</span></label>
                                                <label class="btn"><input type="radio" name='glandular_fever' value="0" {{ $med_his->glandular_fever ? "" : "checked" }}><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> No</span></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-12-offset col-sm-12 col-xs-12 Gender ">
                                        <div class="col-md-5 col-md-offset-2 col sm-7 col-xs-7 sex-title">
                                            <p class="title">Do you smoke ? </p>
                                        </div>
                                        <div class="col-md-4 col-sm-5 col-xs-5">
                                            <div class="btn-group" data-toggle="buttons">
                                                <label class="btn"><input type="radio" name='smoke' value="1"{{ $med_his->smoke ? "checked" : "" }}><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> Yes</span></label>
                                                <label class="btn"><input type="radio" name='smoke' value="0" {{ $med_his->smoke ? "" : "checked" }}><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> No</span></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-12-offset col-sm-12 col-xs-12 Gender ">
                                        <div class="col-md-5 col-md-offset-2 col sm-7 col-xs-7 sex-title">
                                            <p class="title">Do you drink? </p>
                                        </div>
                                        <div class="col-md-4 col-sm-5 col-xs-5">
                                            <div class="btn-group" data-toggle="buttons">
                                                <label class="btn"><input type="radio" name='drink' value="1"{{ $med_his->drink ? "checked" : "" }}><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> Yes</span></label>
                                                <label class="btn"><input type="radio" name='drink' value="0" {{ $med_his->drink ? "" : "checked" }}><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> No</span></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="text-right col-md-12">
                                        <button type="button" class="btn-prev"><span class="fa fa-angle-left"></span>Previous</button>
                                        <button type="button" class="btn-next"><span class="fa fa-angle-right"></span>Next</button>
                                    </div>
                                </section>

                                <section>
                                    <div class="form-group col-md-12-offset col-sm-12 col-xs-12 Gender ">
                                        <div class="col-md-5 col-md-offset-2 col sm-7 col-xs-7 sex-title">
                                            <p class="title">Do you Egg Allergies ? </p>
                                        </div>
                                        <div class="col-md-4 col-sm-5 col-xs-5">
                                            <div class="btn-group" data-toggle="buttons">
                                                <label class="btn"><input type="radio" name='egg_allergies' value="1"{{ $med_his->egg_allergies ? "checked" : "" }}><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> Yes</span></label>
                                                <label class="btn"><input type="radio" name='egg_allergies' value="0" {{ $med_his->egg_allergies ? "" : "checked" }}><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> No</span></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-12-offset col-sm-12 col-xs-12 Gender ">
                                        <div class="col-md-5 col-md-offset-2 col sm-7 col-xs-7 sex-title">
                                            <p class="title">Do you have Fish Allergies ? </p>
                                        </div>
                                        <div class="col-md-4 col-sm-5 col-xs-5">
                                            <div class="btn-group" data-toggle="buttons">
                                                <label class="btn"><input type="radio" name='fish_allergies' value="1"{{ $med_his->fish_allergies ? "checked" : "" }}><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> Yes</span></label>
                                                <label class="btn"><input type="radio" name='fish_allergies' value="0" {{ $med_his->fish_allergies ? "" : "checked" }}><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> No</span></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-12-offset col-sm-12 col-xs-12 Gender ">
                                        <div class="col-md-5 col-md-offset-2 col sm-7 col-xs-7 sex-title">
                                            <p class="title">Do you have Peanut Allergies ? </p>
                                        </div>
                                        <div class="col-md-4 col-sm-5 col-xs-5">
                                            <div class="btn-group" data-toggle="buttons">
                                                <label class="btn"><input type="radio" name='peanut_allergies' value="1"{{ $med_his->peanut_allergies ? "checked" : "" }}><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> Yes</span></label>
                                                <label class="btn"><input type="radio" name='peanut_allergies' value="0" {{ $med_his->peanut_allergies ? "" : "checked" }}><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> No</span></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-12-offset col-sm-12 col-xs-12 Gender ">
                                        <div class="col-md-5 col-md-offset-2 col sm-7 col-xs-7 sex-title">
                                            <p class="title">Do you have Tree nut Allergies ? </p>
                                        </div>
                                        <div class="col-md-4 col-sm-5 col-xs-5">
                                            <div class="btn-group" data-toggle="buttons">
                                                <label class="btn"><input type="radio" name='treenut_allergies' value="1"{{ $med_his->treenut_allergies ? "checked" : "" }}><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> Yes</span></label>
                                                <label class="btn"><input type="radio" name='treenut_allergies' value="0" {{ $med_his->treenut_allergies ? "" : "checked" }}><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> No</span></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-12-offset col-sm-12 col-xs-12 Gender ">
                                        <div class="col-md-5 col-md-offset-2 col sm-7 col-xs-7 sex-title">
                                            <p class="title">Do you have Shellfish Allergies? </p>
                                        </div>
                                        <div class="col-md-4 col-sm-5 col-xs-5">
                                            <div class="btn-group" data-toggle="buttons">
                                                <label class="btn"><input type="radio" name='shellfish_allergies' value="1"{{ $med_his->shellfish_allergies ? "checked" : "" }}><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> Yes</span></label>
                                                <label class="btn"><input type="radio" name='shellfish_allergies' value="0" {{ $med_his->shellfish_allergies ? "" : "checked" }}><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> No</span></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-12-offset col-sm-12 col-xs-12 Gender ">
                                        <div class="col-md-5 col-md-offset-2 col sm-7 col-xs-7 sex-title">
                                            <p class="title">Do you have Wheat Allergies? </p>
                                        </div>
                                        <div class="col-md-4 col-sm-5 col-xs-5">
                                            <div class="btn-group" data-toggle="buttons">
                                                <label class="btn"><input type="radio" name='wheat_allergies' value="1"{{ $med_his->wheat_allergies ? "checked" : "" }}><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> Yes</span></label>
                                                <label class="btn"><input type="radio" name='wheat_allergies' value="0" {{ $med_his->wheat_allergies ? "" : "checked" }}><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> No</span></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-12-offset col-sm-12 col-xs-12 Gender ">
                                        <div class="col-md-5 col-md-offset-2 col sm-7 col-xs-7 sex-title">
                                            <p class="title">Do you have Soy Allergies? </p>
                                        </div>
                                        <div class="col-md-4 col-sm-5 col-xs-5">
                                            <div class="btn-group" data-toggle="buttons">
                                                <label class="btn"><input type="radio" name='soy_allergies' value="1"{{ $med_his->soy_allergies ? "checked" : "" }}><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> Yes</span></label>
                                                <label class="btn"><input type="radio" name='soy_allergies' value="0" {{ $med_his->soy_allergies ? "" : "checked" }}><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> No</span></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-12-offset col-sm-12 col-xs-12 Gender ">
                                        <div class="col-md-5 col-md-offset-2 col sm-7 col-xs-7 sex-title">
                                            <p class="title">Do you have Meat Allergies? </p>
                                        </div>
                                        <div class="col-md-4 col-sm-5 col-xs-5">
                                            <div class="btn-group" data-toggle="buttons">
                                                <label class="btn"><input type="radio" name='meat_allergies' value="1"{{ $med_his->meat_allergies ? "checked" : "" }}><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> Yes</span></label>
                                                <label class="btn"><input type="radio" name='meat_allergies' value="0"{{ $med_his->meat_allergies ? "" : "checked" }}><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> No</span></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-12-offset col-sm-12 col-xs-12 Gender ">
                                        <div class="col-md-5 col-md-offset-2 col sm-7 col-xs-7 sex-title">
                                            <p class="title">Do you have Seed Allergies? </p>
                                        </div>
                                        <div class="col-md-4 col-sm-5 col-xs-5">
                                            <div class="btn-group" data-toggle="buttons">
                                                <label class="btn"><input type="radio" name='seed_allergies' value="1"{{ $med_his->seed_allergies ? "checked" : "" }}><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> Yes</span></label>
                                                <label class="btn"><input type="radio" name='seed_allergies' value="0" {{ $med_his->seed_allergies ? "" : "checked" }}><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> No</span></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="text-right col-md-12">
                                        <button type="button" class="btn-prev"><span class="fa fa-angle-left"></span>Previous</button>
                                        <button type="submit"><span class="fa fa-angle-right"></span>Submit</button>
                                    </div>
                                </section>

                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    </div>
@stop
@section('script')
    <script src="{{url('/assets/js/medical-history.js')}}"></script>
@stop