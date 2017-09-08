@extends('layouts.frontend-main')

@section('title','User Login')

@section('content')
    <div class="container-fluid" style="margin: 0; padding: 0;">
        <section class="user-login clearfix">
            <div class="inner">

                <div class="bg-img"></div>


                <div class="t-reg-form">
                    <div class="t-reg-top">
                        <h2><span class="space"></span>Login Now</h2>
                        <h3><span class="space"></span> Please login to continue.</h3>
                    </div>

                    <div class="reg-form">
                        <form class="user_login" role="form" method="POST" action="{{route('login')}}">
                            {{csrf_field()}}

                            <div class="fields clearfix">
                                <div class="form-group col-md-6 col-md-offset-3 offs col-sm-12 col-xs-12  text-field">
                                    <input type="text" name="email" value="" placeholder="Email Address...">
                                </div>

                                <div class="form-group col-md-6 col-md-offset-3 col-sm-12 col-xs-12 text-field">
                                    <input type="password" name="password" value="" placeholder="Password...">
                                </div>
                                <div class="form-group col-md-6 col-md-offset-3 col-sm-12 col-xs-12">
                                    <label class="btn"><input class="remember-login" type="checkbox" name='remember-me'><i class="fa fa-square fa-x"></i><i class="fa fa-check-square fa-x"></i><span> Keep me logged in</span></label>
                                </div>


                                <div class="form-group col-md-6 col-md-offset-5">
                                        <button class="btn_login" type="submit"><span class="fa fa-angle-right"></span> Sign In</button>
                                </div>
                                <div class="form-group col-md-6 col-md-offset-5 col-xs-12 col-sm-12">
                                    <a class="reset_pass" href="#">Reset your password</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
@stop

@section('script')
    <script src="{{url('/assets/plugins/jquery-validation-1.16.0/js/jquery.validate.js')}}" type="text/javascript"></script>
    <script src="{{url('/assets/js/login-script.js')}}" type="text/javascript"></script>
    @stop