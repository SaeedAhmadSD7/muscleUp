@extends('layouts.frontend-main')

@section('title',' edit personal detail')

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
                        <h2><span class="space"></span>Edit your personal information </h2>
                        <h3><span class="space"></span> Please fill in all the information .</h3>
                    </div>

                    <div class="reg-form">
                        <form class="edit-personal-detail" role="form" method="POST" action="{{route('trainee-detail-update', $trainee->id)}}">
                            {{csrf_field()}}
                            <div class="fields clearfix">
                                <div class="form-group col-md-6 col-sm-12 col-xs-12 text-field">
                                    <input type="text" name="first_name" value="{{$trainee->first_name}}" placeholder="First Name ...">
                                </div>

                                <div class="form-group col-md-6 col-sm-12 col-xs-12 text-field">
                                    <input type="text" name="last_name" value="{{$trainee->last_name}}" placeholder="Last Name...">
                                </div>

                                {{--<div class="form-group col-md-6 col-sm-12 col-xs-12 text-field">--}}
                                    {{--<input type="email" name="email" value="" placeholder="Email Address...">--}}
                                {{--</div>--}}
                                <div class="form-group col-md-6 col-sm-12 col-xs-12 text-field">
                                    <input class="birth-date" type="text" data-field="date" data-format="yyyy-MM-dd" name="birth_date" value="{{$trainee->birth_date}}" placeholder="Date of Birth..." readonly>
                                    <div class="btn-date"></div>
                                </div>
                                <div class="form-group col-md-1 col-sm-2 col-xs-2 dial-code-div">
                                    <input class="dial-code" type="text" name="dial_code" value="{{$trainee->dial_code}}" placeholder="+1..." readonly>
                                </div>
                                <div class="form-group col-md-5 col-sm-10 col-xs-10 number-div">
                                    <input class="phone_number" type="text" name="phone_number" value="{{$trainee->phone_number}}" placeholder="Phone Number..." maxlength="15">
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

                                <div class="form-group col-md-12 col-sm-12 col-xs-12 text-field">
                                    <input name="address" value="{{$trainee->address}}" placeholder="Address..." maxlength="255" >
                                </div>
                            </div>


                            <div class="text-right col-md-12">
                                <a class="btn btn-primary prev-btn" href="{{url()->previous()}}"><span class="fa fa-angle-right"></span> Cancel</a>
                            </div>
                            <div class="text-right col-md-12"><button type="submit"><span class="fa fa-angle-right"></span> Save Changes</button></div>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    </div>
@stop

@section('script')
    <script src="{{url('/assets/plugins/datetimepicker/js/DateTimePicker.js')}}" type="text/javascript"></script>
    <script src="{{url('/assets/js/add-trainee.js')}}" type="text/javascript"></script>
@stop