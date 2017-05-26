@extends('muscle-up-app.layouts.admin-panel-main')

@section('title','Register Trainee')

@section('stylesheet')
    <link href="{{url('/assets/plugins/TelInput/css/intlTelInput.css')}}" rel="stylesheet">
    <link href="{{url('/assets/plugins/dateselect/css/jquery.dateselect.css')}}" rel="stylesheet">
    <link href="{{url('/assets/css/style-sheet.css')}}" rel="stylesheet">
@stop
@section('content')
    <section class="trainee-reg clearfix">
        <div class="inner">

            <div class="bg-img"></div>


            <div class="t-reg-form">
                <div class="t-reg-top">
                    <h2><span class="space"></span>Trainee Registration Form</h2>
                    <h3><span class="space"></span> It will only take a moment</h3>
                </div>

                <div class="reg-form">
                    <form id="contact-form" method="post" action="{{route('store-trainee')}}">
                        {{csrf_field()}}
                        <div class="fields clearfix">
                            <div class="form-group col-md-6 col-sm-12 col-xs-12 text-field">
                                <input type="text" name="first_name" value="" placeholder="First Name ...">
                            </div>

                            <div class="form-group col-md-6 col-sm-12 col-xs-12 text-field">
                                <input type="text" name="last_name" value="" placeholder="Last Name...">
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
                                <input class="btn-date" type="date" name="birth_date" value="" placeholder="Date of Birth..." data-select="date">
                            </div>
                            <div class="form-group col-md-6 col-sm-12 col-xs-12 text-field">
                                <input class="p-number" type="text" name="phone_no" value="" placeholder="Phone Number...">
                            </div>
                        </div>

                        <div class="address-field">
                            <textarea name="address" placeholder="Type Your Address Here"></textarea>
                        </div>

                        <div class="text-right col-md-12"><button type="submit"><span class="fa fa-angle-right"></span> Submit</button></div>
                    </form>
                </div>
            </div>

        </div>
    </section>
    @stop

@section('scripts')
    <script src="{{url('/assets/plugins/TelInput/js/intlTelInput.js')}}"></script>
    <script src="{{url('/assets/plugins/dateselect/js/jquery.dateselect.js')}}"></script>
    <script src="{{url('/assets/js/t-reg.js')}}"></script>
    @stop