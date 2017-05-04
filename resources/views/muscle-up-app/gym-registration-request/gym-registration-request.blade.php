@extends('muscle-up-app.layouts.frontend-main')
@section('title','|Gym Request Registration')

@section('style-sheet')
    <meta charset="utf-8">
    <meta content="IE=edge" http-equiv="X-UA-Compatible">
    <meta content="width=device-width, initial-scale=1" name="viewport">

    <title>Marco - Bootstrap Landing Page</title><!-- CSS -->
    <link href="{{url('https://fonts.googleapis.com/css?family=Roboto:100,100italic,300,300italic,400,400italic,500,500italic')}}" rel="stylesheet">
    <link href="{{url('css/bootstrap.css')}}" rel="stylesheet">
    <link href="{{url('css/font-awesome.css')}}" rel="stylesheet">
    <link href="{{url('css/intlTelInput.css')}}" rel="stylesheet">
    <link href="{{url('css/registration-forms.css')}}" rel="stylesheet">
@endsection


@section('content')
<div class="tr-form-container section-container">
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-6 col-sm-offset-3 tr-form-box">

                <form action="{{route('register')}}" class="registration-form" method="post" role="form">
                    <input type="hidden" name="_token" value="csrf_token()">
                    <fieldset class="basic-information">

                        <div class="tr-form-top">
                            <div class="tr-form-top-left">
                                <h3>Gym Request Registration</h3>
                                <p>Please enter the required information and click Submit Request.</p></div>
                            <div class="tr-form-top-right"><i class="fa fa-sign-in"></i></div>
                        </div>


                        <div class="tr-form-bottom">
                            <div class="form-group">
                                <input class="gym-name form-control" id="gym-name" name="gym-name" placeholder="Gym name..." type="text">
                            </div>


                            <div class="form-group">
                                <input class="owner-email form-control" id="owner-email" name="owner-email" placeholder="Owner's Email Address..." type="text">
                            </div>


                            <div class="form-group">
                                <input class="password form-control" id="password" name="password" placeholder="Password..." type="password">
                            </div>


                            <div class="form-group">
                                <input class="repeat-password form-control" id="repeat-password" name="repeat-password" placeholder="Repeat password..." type="password">
                            </div>

                            <div class="form-group">
                                <input class="form-control p-number" id="p-number" name="p-number" placeholder="Contact Number..." type="text">
                            </div>


                            <div class="form-group">
                                <textarea class="address form-control" id="address" name="address" placeholder="Address..."></textarea>
                            </div>


                            <div class="form-elements-divider">
                            </div>


                            <div class="tr-form-buttons">
                                <button class="btn submitBtn" type="button">Register</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
</div>
@stop



@section('scripts')
<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->

<!--[if lt IE 9]>
<script src="{{url('https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js')}}"></script>
<script src="{{url('https://cdnjs.cloudflare.com/ajax/libs/respond.js/1.4.2/respond.min.js')}}"></script>
<![endif]-->

<!-- Script Files-->
<script src="{{url('js/jquery-3.2.1.js')}}"></script>
<script src="{{url('js/bootstrap.js')}}"></script>
<script src="{{url('js/jquery.backstretch.js')}}"></script>
<script src="{{url('js/intlTelInput.js')}}"></script>
<script src="{{url('js/registration-forms.js')}}"></script>

<!--[if lt IE 10]>
<script src="{{url('js/placeholder.js')}}"></script>
<![endif]-->
@endsection
