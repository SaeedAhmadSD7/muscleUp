@extends('muscle-up-app.layouts.main')

@section('title','Update Instructor')

@section('style-sheet')
    <link href="{{url('/assets/plugins/datetimepicker/css/DateTimePicker.css')}}" rel="stylesheet">

@stop
@section('content')
    <div class="container-fluid" style="margin: 0; padding: 0;">
        <section class="instructor-reg clearfix">
            <div class="inner">

                <div class="bg-img"></div>


                <div class="t-reg-form">
                    <div class="t-reg-top">
                        <h2><span class="space"></span>Update Instructor</h2>
                        <h3><span class="space"></span> Please fill in all the information and then click update Instructor.</h3>
                    </div>

                    <div class="reg-form">
                        <form id="contact-form" role="form" method="post" action="{{route('update-instructor', $instructor->id)}}">
                            {{csrf_field()}}
                            {{ method_field('POST') }}
                            <div class="fields clearfix">
                                <div class="form-group col-md-6 col-sm-12 col-xs-12 text-field">
                                    <input type="text" name="first_name" value="{{ $instructor->first_name }}" placeholder="First Name ...">
                                </div>

                           <div class="form-group col-md-6 col-sm-12 col-xs-12 text-field">
                                    <input type="text" name="last_name" value="{{ $instructor->last_name }}" placeholder="Last Name...">
                                </div>

                                <div class="form-group col-md-6 col-sm-12 col-xs-12 text-field">
                                    <input type="email" name="email" value="{{$instructor->email}}" placeholder="Email Address...">
                                </div>
                                <div class="form-group col-md-6 col-sm-12 col-xs-12 text-field">
                                    <input type="experience" name="experience" value="{{$instructor->experience}}" placeholder="Total Experience...">
                                </div>
                                <div class="form-group col-md-6 col-sm-12 col-xs-12 text-field">
                                    <input class="birth-date" type="text" data-field="date" data-format="yyyy-MM-dd" name="birth_date" value="{{$instructor->birth_date}}" placeholder="Date of Birth..." readonly>
                                    <div class="btn-date"></div>
                                </div>
                                <div class="form-group col-md-1 col-sm-2 col-xs-2 dial-code-div">
                                    <input class="dial-code" type="text" name="dial_code" value="{{$instructor->dial_code}}" placeholder="+1..." readonly>
                                </div>
                                <div class="form-group col-md-5 col-sm-10 col-xs-10 number-div">
                                    <input class="phone_number" type="text" name="phone_number" value="{{$instructor->phone_number}}" placeholder="Phone Number...">
                                </div>
                            </div>

                            <div class="address-field">
                                <input type="text" name="address" value="{{$instructor->address}}" placeholder="Give your Address....." maxlength="250"></input>
                            </div>
                            <div class="form-group col-md-6 col-sm-12 col-xs-12 Gender ">
                                <div class="col-md-3 col sm-4 col-xs-4 gender-title">
                                    <p class="title">Gender : </p>
                                </div>
                                <div class="col-md-9 col-sm-8 col-xs-8">
                                    <div class="btn-group" data-toggle="buttons">
                                        <label class="btn"><input type="radio" name='gender' checked><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> Male</span></label>
                                        <label class="btn"><input type="radio" name='gender'><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> Female</span></label>
                                    </div>
                                </div>

                            </div>
                            <div class="text-right col-md-12"><button type="submit"><span class="fa fa-angle-right"></span> Update Instructor</button></div>

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