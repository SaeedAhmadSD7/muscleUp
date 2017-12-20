@extends('layouts.frontend-main')

@section('title','User Login')

@section('content')
    <div class="container-fluid" style="margin: 0; padding: 0;">
        <section class="user-login clearfix">
            <div class="inner">

                <div class="bg-img"></div>


                <div class="t-reg-form">
                    <div class="t-reg-top">
                        <h2><span class="space"></span>Login Form</h2>
                        <hr class="mT0" />
                        <h3><span class="space"></span> Please login to continue.</h3>
                    </div>

                    <div class="reg-form">
                        <form class="user_login" role="form" method="POST" action="{{route('login')}}">

                            @if ($errors !== null)
                                @if ($errors->count() > 0)
                                <div class="alert alert-danger col-md-8 col-sm-12 col-md-offset-2 mB10">
                                    <strong>Whoops!</strong> There were some problems with your input.<br><br>
                                    <ul>
                                        @foreach ($errors->all() as $error)
                                            <li>{{ $error }}</li>
                                        @endforeach
                                    </ul>
                                </div>
                                @endif
                            @endif
                            {{csrf_field()}}

                            <div class="fields clearfix">
                                <div class="form-group col-md-6 col-md-offset-3 offs col-sm-12 col-xs-12  text-field">
                                    <input type="text" name="email" value="" placeholder="Email Address...">
                                </div>

                                <div class="form-group col-md-6 col-md-offset-3 col-sm-12 col-xs-12 text-field mB0i">
                                    <input type="password" name="password" value="" placeholder="Password...">
                                </div>
                                <div class="form-group col-md-6 col-md-offset-3 col-sm-12 col-xs-12">
                                    <label class="btn pL0"><input class="remember-login" type="checkbox" name='remember-me'><i class="fa fa-square fa-x"></i><i class="fa fa-check-square fa-x"></i><span> Keep me logged in</span></label>
                                </div>


                                <div class="form-group col-md-6 col-md-offset-3 mB0i">
                                        <button class="btn_login w100p" type="submit"><span class="fa fa-angle-right"></span> Sign In</button>
                                </div>
                                <div class="form-group col-md-6 col-md-offset-6 col-xs-12 col-sm-12 pL0i">
                                    <a class="reset_pass " href="#">Do you forget your password?</a>
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
    <script src="{{url('/resources/app/pages/js/login.js')}}" type="text/javascript"></script>
    @stop