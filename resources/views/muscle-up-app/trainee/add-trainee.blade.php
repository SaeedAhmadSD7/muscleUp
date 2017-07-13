@extends('muscle-up-app.layouts.main')

@section('title',' Add Trainee ')

@section('style-sheet')
    <link href="{{url('/assets/plugins/datetimepicker/css/DateTimePicker.css')}}" rel="stylesheet">

@stop
@section('content')
    <div class="container-fluid" style="margin: 0; padding: 0;">
        <section class="trainee-reg clearfix">
            <div class="inner">

                <div class="bg-img"></div>


                <div class="t-reg-form">
                    <div class="t-reg-top">
                        <h2><span class="space"></span>Add Trainee</h2>
                        <h3><span class="space"></span> Please fill in all the information and then click Add Trainee.</h3>
                    </div>

                    <div class="reg-form">
                        <form class="add-trainee-form" role="form" method="POST" action="{{route('trainee-store')}}">
                            {{csrf_field()}}
                            <div class="fields clearfix">
                                <div class="form-group col-md-6 col-sm-12 col-xs-12 text-field">
                                    <input type="text" name="first_name" value="" placeholder="First Name ...">
                                </div>

                                <div class="form-group col-md-6 col-sm-12 col-xs-12 text-field">
                                    <input type="text" name="last_name" value="" placeholder="Last Name...">
                                </div>

                                <div class="form-group col-md-6 col-sm-12 col-xs-12 text-field">
                                    <input type="email" name="email" value="" placeholder="Email Address...">
                                </div>
                                <div class="form-group col-md-6 col-sm-12 col-xs-12 text-field">
                                    <input class="birth-date" type="text" data-field="date" data-format="yyyy-MM-dd" name="birth_date" value="" placeholder="Date of Birth..." readonly>
                                    <div class="btn-date"></div>
                                </div>
                                <div class="form-group col-md-6 col-sm-12 col-xs-12 Gender ">
                                    <div class="col-md-3 col sm-4 col-xs-4 gender-title">
                                        <p class="title">Gender : </p>
                                    </div>
                                        <div class="col-md-9 col-sm-8 col-xs-8">
                                            <div class="btn-group" data-toggle="buttons">
                                                <label class="btn"><input type="radio" name='gender' value="male" checked><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> Male</span></label>
                                                <label class="btn"><input type="radio" name='gender' value="female"><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> Female</span></label>
                                            </div>
                                        </div>
                                </div>

                                <div class="form-group col-md-1 col-sm-2 col-xs-2 dial-code-div">
                                    <input class="dial-code" type="text" name="dial_code" value="" placeholder="+1..." readonly>
                                </div>
                                <div class="form-group col-md-5 col-sm-10 col-xs-10 number-div">
                                    <input class="phone_number" type="text" name="phone_number" value="" placeholder="Phone Number..." maxlength="15">
                                </div>
                                <div class="form-group col-md-12 col-sm-12 col-xs-12 text-field">
                                    <input name="address" placeholder="Address..." maxlength="255">
                                </div>
                            </div>


                            <div class="text-right col-md-12"><button type="submit"><span class="fa fa-angle-right"></span> Add Trainee</button></div>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    </div>
    @stop

@section('script')
    <script src="{{url('/assets/plugins/datetimepicker/js/DateTimePicker.js')}}" type="text/javascript"></script>
    <script src="{{url('/assets/plugins/jquery-validation-1.16.0/js/jquery.validate.js')}}" type="text/javascript"></script>
    <script src="{{url('/assets/js/add-trainee.js')}}" type="text/javascript"></script>
@stop