@extends('muscle-up-app.layouts.frontend-main')

@section('title','User Login')

@section('content')
    <section class="login-form clearfix">
        <div class="inner">

            <div class="bg-img"></div>


            <div class="t-reg-form">
                <div class="t-reg-top col-md-6 col-md-offset-4">
                    <h2><span class="space"></span>Sign in Form </h2>

                </div>

                <div class="reg-form">
                    <form id="contact-form" role="form" method="post" action="{{route('check-login')}}">
                        {{csrf_field()}}

                        <div class="fields clearfix">
                            <div class="form-group col-md-6 col-md-offset-3 offs col-sm-12 col-xs-12  text-field">
                                <input type="text" name="email" value="" placeholder="Email Address...">
                            </div>

                            <div class="form-group col-md-6 col-md-offset-3 col-sm-12 col-xs-12 text-field">
                                <input type="text" name="password" value="" placeholder="Password...">
                            </div>

                            <div class="form-group col-md-6 col-md-offset-3 col-sm-12 col-xs-12 text-field">
                                <div class="col-md-1 col-md-offset-1 col-sm-2 col-xs-2">
                                    <input class="form-radio" type="checkbox" name="password" value="" placeholder="Password...">
                                </div>
                                <div class="col-md-10 col-sm-10 col-xs-10">
                                    <text>Stay signed in</text>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-md-offset-3">
                            <div class="col-md-5 col-xs-7 col-sm-7">
                                <button type="submit"><span class="fa fa-angle-right"></span> Sign In</button>
                            </div>
                            <div class="col-md-5 col-xs-6 col-sm-6">
                                <text>Reset your password</text>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    </section>
@stop