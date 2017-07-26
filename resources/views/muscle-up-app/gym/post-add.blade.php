@extends('layouts.frontend-main')

@section('title','Post Adding')

@section('style-sheet')
    <link href="{{url('/assets/plugins/select2/css/select2.css')}}" rel="stylesheet">
    <link href="{{url('/assets/plugins/select2/css/select2-bootstrap.css')}}" rel="stylesheet">
    <link href="{{url('/assets/plugins/datetimepicker/css/DateTimePicker.css')}}" rel="stylesheet">
@stop

@section('content')
    @if ($errors->any())
        <div class="alert alert-danger" role="alert">
            <a class="close" data-dismiss="alert" aria-label="close">&times;</a>
            <strong>Error.</strong><br>
            @foreach($errors->all() as $error_message)
                {{$error_message}}<br>
            @endforeach
        </div>
    @endif

    <div class="container-fluid" style="margin: 0; padding: 0;">
        <div class="trainee-reg clearfix">
            <div class="inner">

                <div class="bg-img"></div>

            </div>
            <form class="post-request" role="form" method="POST" action="{{route('add-gym')}}">
                {{csrf_field()}}
                <div class="fields-section">
                    <section>
                        <div class="t-reg-form">
                            <div class="t-reg-top">
                                <h2><span class="space"></span>Gym Detail Form</h2>
                                <h3><span class="space"></span> Step 1 of 4.</h3>
                                <p><span class="space"></span> Please verify and fill the remaining information and click Next.</p>
                            </div>

                            <div class="reg-form">
                                <div class="fields clearfix">
                                    <div class="form-group col-md-6 col-sm-12 col-xs-12 text-field">
                                        <input type="text" name="name" value="{{$GymData->name}}" placeholder="Gym Name...">
                                    </div>

                                    <div class="form-group col-md-6 col-sm-12 col-xs-12 text-field">
                                        <input type="email" name="email" value="{{$GymData->email}}" placeholder="Email Address...">
                                    </div>
                                    <div class="form-group col-md-6 col-sm-12 col-xs-12 text-field">
                                        <input class="num_branches" type="number" name="num_branches" value="{{$GymData->num_branches}}" placeholder="Number of Branches...">
                                    </div>

                                    <div class="form-group col-md-6 col-sm-12 col-xs-12 text-field">
                                        <input class="country" type="hidden" value="{{$GymData->country}}">
                                        <select class="country_list" name="country">
                                            <option></option>
                                            @foreach($countries as $country)
                                                <option data-code="{{$country['code']}}" value="{{$country['name']}}" data-dialcode="{{$country['dial_code']}}">{{$country['name']}}</option>
                                            @endforeach
                                        </select>
                                    </div>
                                    <div class="form-group col-md-6 col-sm-12 col-xs-12 text-field">
                                        <input class="city" type="text" name="city" value="{{$GymData->city}}" placeholder="City...">
                                    </div>
                                    <div class="form-group col-md-1 col-sm-2 col-xs-2 dial-code-div">
                                        <input class="dial_code" type="text" name="dial_code" value="{{$GymData->dial_code}}" placeholder="+1..." readonly>
                                    </div>
                                    <div class="form-group col-md-5 col-sm-10 col-xs-10 number-div">
                                        <input class="phone_number" type="text" name="phone_number" value="{{$GymData->phone_number}}" placeholder="Phone Number..." maxlength="15">
                                    </div>
                                    <div class="form-group col-md-12 col-sm-12 col-xs-12 text-field">
                                        <input class="address" name="address" type="text" value="{{$GymData->address}}" placeholder="Address..." maxlength="255">
                                    </div>
                                </div>
                                <div class="text-right col-md-12">
                                    <button type="button" class="btn-next"><span class="fa fa-angle-right"></span>Next</button>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div class="t-reg-form">
                            <div class="t-reg-top">
                                <h2><span class="space"></span>Gym Detail Form</h2>
                                <h3><span class="space"></span> Step 2 of 4.</h3>
                            </div>

                            <div class="reg-form">
                                <div class="fields clearfix">
                                    <div class="form-group col-md-6 col-sm-12 col-xs-12 text-field">
                                        <input class="open-time" type="text" data-field="time" name="open_time" value="{{old('open_time')}}" placeholder="Opening Time..." readonly>
                                        <div class="btn-open-time"></div>
                                    </div>
                                    <div class="form-group col-md-6 col-sm-12 col-xs-12 text-field">
                                        <input class="close-time" type="text" data-field="time" name="close_time" value="{{old('open_time')}}" placeholder="Closing Time..." readonly>
                                        <div class="btn-close-time"></div>
                                    </div>
                                    <div class="form-group col-md-6 col-sm-12 col-xs-12">
                                        Profile Picture
                                        {{--<div class="col-md-9 col-md-offset-3">--}}
                                        {{--<img src="{{ url('uploads/trainees/profile_imgs/') }}{{'/'.$trainee->profile_img }}" style="width:150px; height:150px; float:left; border-radius:50%; margin-right:25px;">--}}
                                        {{--<form enctype="multipart/form-data" action="{{ route('trainee-image') }}" method="POST">--}}
                                        {{--<label>Update Profile Image</label>--}}
                                        {{--<input type="file" name="avatar">--}}
                                        {{--<input type="hidden" name="_token" value="{{ csrf_token() }}">--}}
                                        {{--<input type="submit" class="pull-right btn btn-sm btn-primary">--}}
                                        {{--</form>--}}

                                        {{--<input class="inputfile profile_pic" id="profile_pic" type="file" name="profile_pic" value="" placeholder="Profile Picture...">--}}
                                        {{--<label for="profile_pic"><i class="fa fa-upload" aria-hidden="true"></i><span class="prof_stat_text"> PROFILE PICTURE</span></label>--}}
                                        {{--</div>--}}
                                    </div>
                                    <div class="text-right col-md-6 col-sm-12 col-xs-12">
                                        <button type="button" class="geo-location"><span class="fa fa-angle-up"></span>Detect my location</button>
                                    </div>
                                    <div class="form-group col-md-6 col-sm-12 col-xs-12 text-field">
                                        <input class="latitude" name="latitude" type="number" value="{{old('latitude')}}" placeholder="Latitude..." readonly>
                                    </div>
                                    <div class="form-group col-md-6 col-sm-12 col-xs-12 text-field">
                                        <input class="longitude" name="longitude" type="number" value="{{old('longitude')}}" placeholder="Lonitude..." readonly>
                                    </div>


                                </div>
                                <div class="text-right col-md-12">
                                    <button type="button" class="btn-prev"><span class="fa fa-angle-left"></span>Previous</button>
                                    <button type="submit"><span class="fa fa-angle-right"></span>Submit</button>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>

            </form>
        </div>

    </div>

@stop
@section('script')
    <script src="{{url('/assets/plugins/select2/js/select2.full.js')}}"></script>
    <script src="{{url('/assets/plugins/datetimepicker/js/DateTimePicker.js')}}" type="text/javascript"></script>
    <script src="{{url('/assets/plugins/jquery-validation-1.16.0/js/jquery.validate.js')}}" type="text/javascript"></script>
    <script async defer src ="{{url('https://maps.googleapis.com/maps/api/js?key=AIzaSyCSqyKO68gVk7RCkuYKRJhM8ayeT_MznpI')}}"></script>
    <script src="{{url('/assets/js/post-add.js')}}"></script>
@stop