@extends('muscle-up-app.layouts.frontend-main')

@section('title','Gym Registration Request')

@section('stylesheet')
    <link href="{{url('/assets/plugins/TelInput/css/intlTelInput.css')}}" rel="stylesheet">
    <link href="{{url('/assets/plugins/datetimepicker/css/DateTimePicker.css')}}" rel="stylesheet">
    <link href="{{url('/assets/plugins/selectize/css/selectize.css')}}" rel="stylesheet">
@stop
@section('content')
    <div class="container-fluid" style="margin: 0; padding: 0;">
        <section class="trainee-reg clearfix">
            <div class="inner">

                <div class="bg-img"></div>


                <div class="t-reg-form">
                    <div class="t-reg-top">
                        <h2><span class="space"></span>Gym Request Registration Form</h2>
                        <h3><span class="space"></span> Please fill in all the information and click Submit Request</h3>
                    </div>

                    <div class="reg-form">
                        <form id="contact-form" role="form" method="POST" action="{{route('save-gym')}}">
                            {{csrf_field()}}
                            <div class="fields clearfix">
                                <div class="form-group col-md-6 col-sm-12 col-xs-12 text-field">
                                    <input type="text" name="f-name" value="" placeholder="First Name ...">
                                </div>

                                <div class="form-group col-md-6 col-sm-12 col-xs-12 text-field">
                                    <input type="text" name="l-name" value="" placeholder="Last Name...">
                                </div>

                                <div class="form-group col-md-6 col-sm-12 col-xs-12 text-field">
                                    <input type="password" name="password" value="" placeholder="Password...">
                                </div>

                                <div class="form-group col-md-6 col-sm-12 col-xs-12 text-field">
                                    <input class="password-repeat" type="password" name="repeat-password" value="" placeholder="Repeat Password...">
                                </div>
                                <div class="form-group col-md-6 col-sm-12 col-xs-12 text-field">
                                    <input type="email" name="email" value="" placeholder="Email Address...">
                                </div>
                                <div class="form-group col-md-6 col-sm-12 col-xs-12 text-field">
                                    <input class="birth-date" type="text" data-field="date" data-format="yyyy-MM-dd" name="birth-date" value="" placeholder="Date of Birth..." readonly>
                                    <div class="btn-date"></div>
                                </div>
                                <div class="form-group col-md-6 col-sm-12 col-xs-12 text-field">
                                    <input class="p-number" type="text" name="p-number" value="" placeholder="Phone Number...">
                                </div>
                                <div class="form-group col-md-6 col-sm-12 col-xs-12 sex ">
                                    <div class="col-md-2 col sm-3 col-xs-3 sex-title">
                                        <p class="title">Sex : </p>
                                    </div>
                                        <div class="col-md-10 col-sm-9 col-xs-9">
                                            <div class="btn-group" data-toggle="buttons">
                                                <label class="btn"><input type="radio" name='sex' checked><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> Male</span></label>
                                                <label class="btn"><input type="radio" name='sex'><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> Female</span></label>
                                            </div>
                                        </div>
                                </div>

                                <div class="form-group col-md-6 col-sm-12 col-xs-12 text-field">
                                    <select class="country_list" name="country">
                                        <option selected disabled hidden>Country...</option>
                                    </select>
                                </div>



                            </div>

                            <div class="address-field">
                                <textarea name="address" placeholder="Address"></textarea>
                            </div>

                            <div class="text-right col-md-12"><button type="submit"><span class="fa fa-angle-right"></span> Submit Request</button></div>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    </div>
    @stop
@section('scripts')
    <script src="{{url('/assets/plugins/TelInput/js/intlTelInput.js')}}"></script>
    <script src="{{url('/assets/plugins/datetimepicker/js/DateTimePicker.js')}}"></script>
    <script src="{{url('/assets/js/t-reg.js')}}"></script>
    <script src="{{url('/assets/plugins/selectize/js/selectize.js')}}"></script>
    <script src="{{url('/assets/js/gym-registration.js')}}"></script>
    @stop