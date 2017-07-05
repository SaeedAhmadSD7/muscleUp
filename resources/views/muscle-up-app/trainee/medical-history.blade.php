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
                        <form id="contact-form" role="form" method="POST" action="{{route('trainee-store')}}">
                            {{csrf_field()}}
                            <div class="fields clearfix">

                                <div class="form-group col-md-12-offset col-sm-12 col-xs-12 Gender ">
                                    <div class="col-md-5 col-md-offset-2 col sm-3 col-xs-3 sex-title">
                                        <p class="title">Do you have Asthma ? </p>
                                    </div>
                                    <div class="col-md-4 col-sm-9 col-xs-9">
                                        <div class="btn-group" data-toggle="buttons">
                                            <label class="btn"><input type="radio" name='ans'><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> Yes</span></label>
                                            <label class="btn"><input type="radio" name='ans' checked><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> No</span></label>
                                        </div>
                                    </div>
                                </div>
                             <div class="form-group col-md-12-offset col-sm-12 col-xs-12 Gender ">
                                    <div class="col-md-5 col-md-offset-2 col sm-7 col-xs-7 sex-title">
                                        <p class="title">Do you have Asthma ? </p>
                                    </div>
                                    <div class="col-md-4 col-sm-5 col-xs-5">
                                        <div class="btn-group" data-toggle="buttons">
                                            <label class="btn"><input type="radio" name='ans'><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> Yes</span></label>
                                            <label class="btn"><input type="radio" name='ans' checked><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> No</span></label>
                                        </div>
                                    </div>
                                </div>
                             <div class="form-group col-md-12-offset col-sm-12 col-xs-12 Gender ">
                                    <div class="col-md-5 col-md-offset-2 col sm-3 col-xs-3 sex-title">
                                        <p class="title">Do you have Asthma ? </p>
                                    </div>
                                    <div class="col-md-4 col-sm-9 col-xs-9">
                                        <div class="btn-group" data-toggle="buttons">
                                            <label class="btn"><input type="radio" name='ans'><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> Yes</span></label>
                                            <label class="btn"><input type="radio" name='ans' checked><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> No</span></label>
                                        </div>
                                    </div>
                                </div>

                            </div>


                            <div class="text-right col-md-12"><button type="submit"><span class="fa fa-angle-right"></span> Next</button></div>
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