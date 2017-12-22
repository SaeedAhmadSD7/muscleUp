@extends('layouts.backend-main')

@section('title','My Profile')

@section('title')
    Gym Dashboard
@stop

@section('user-name')
    {{get_auth_user_full_name()}}
@stop

@section('page-heading')
    <h2>My Profile</h2>
    <p>Change the information and then click Update.</p>
@stop

@section('content')
    <div class="panel">

        <div class="panel-body">
            <h3 class="content-box-header bg-google">Basic Info</h3>
            <div class="example-box-wrapper">
                <input type="hidden" value="1" id="test">

                <form class="form-horizontal bordered-row add-trainee-form" role="form" method="post" action="{{route('user.update',['id'=>$user->id])}}"  enctype="multipart/form-data">
                    {{csrf_field()}}

                    <input type="hidden" name="_method" value="put">

                    <input type="hidden" id="profile_img" name="profile_img" />
                    <div class="tab-pane active pL0" id="tab2">
                        <div class="col-sm-12 col-md-6">
                            <div class="form-group">
                                <label class="col-md-4 control-label">Enter First Name:</label>
                                <div class="col-md-8">
                                    <input class="form-control" type="text" name="first_name" value="{{$user->first_name}}" placeholder="First Name ...">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-md-4 control-label">Enter last Name:</label>
                                <div class="col-md-8">
                                    <input class="form-control" type="text" name="last_name" value="{{$user->last_name}}" placeholder="Last Name...">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-md-4 control-label">Email Address:</label>
                                <div class="col-md-8">
                                    <input class="form-control" type="email" name="email" value="{{$user->email}}" placeholder="Email Address...">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-md-4 control-label">Date of birth:</label>
                                <div class="col-md-8">
                                    <input class="form-control" type="text" data-field="date" data-format="yyyy-MM-dd" name="dob" value="{{$user->dob}}" placeholder="Date of Birth..." readonly>
                                    <div class="btn-date"></div>

                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-md-4 control-label">Gender</label>
                                <div class="col-md-8">
                                    <label class="radio-inline">
                                        <input id="" name="gender" type="radio" value="male" {{($user->gender == 'male') ? 'checked' : ''}}> Male
                                    </label>
                                    <label class="radio-inline">
                                        <input id="" name="gender" type="radio" value="female" {{($user->gender == 'female') ? 'checked' : ''}}> Female
                                    </label>
                                </div>
                            </div>


                            <div class="form-group">
                                <label class="col-md-4 control-label">Country</label>
                                <div class="col-md-8">
                                <select class="form-control" name="country">
                                    <option>{{$user->country}}</option>
                                    @foreach($countries as $country)
                                        <option data-code="{{$country['code']}}" value="{{$country['name']}}" data-dialcode="{{$country['dial_code']}}">{{$country['name']}}</option>
                                    @endforeach
                                </select>
                            </div>
                            </div>
                            <div class="form-group">
                                <label class="col-md-4 control-label">City</label>
                                <div class="col-md-8">
                                <input class="form-control" type="text" name="city" value="{{$user->city}}" placeholder="City...">
                            </div>
                            </div>

                            <div class="form-group">
                                <label class="col-md-4 control-label">Phone number:</label>
                                <div class="col-md-1">
                                    <input class="form-control dial-code" type="text" name="dial_code" value="{{$user->dial_code}}" placeholder="+1..." readonly>
                                </div>
                                <div class="col-md-6">
                                    <input class="form-control phone_number" type="text" name="phone_number" value="{{$user->phone_number}}" placeholder="Phone Number..." maxlength="15">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-md-4 control-label">Address</label>
                                <div class="col-md-7">
                                    <input class="form-control " placeholder="Address..." value="{{$user->address}}" name="address" maxlength="1000">

                                </div>
                            </div>

                        </div>

                        <div class="col-sm-12 col-md-6">
                            <div class="form-group">
                                <label for="col-md-4 control-label">Profile Photo</label>
                                <div class="file-loading col-md-7">
                                    <input type="file" id="profilePhoto" name="fileData" >
                                </div>
                            </div>

                        </div>

                    </div>
                    <div class="tab-pane active pL0" id="tab2">
                        <div class="col-sm-12 col-md-6">

                        </div>
                    </div>
                    <div class="clear"></div>
                    <div class="form-group col-sm-12">
                        <div class="col-sm-12 taR">
                            <button type="submit" class="btn btn-primary">Update</button>
                            <button type="button" class="btn btn-primary" onclick="goTo({{'/'}})">Cancel</button>
                        </div>
                    </div>
{{--                    {!! Form::close() !!}--}}
                </form>
            </div>
        </div>
    </div>
@stop

@section('script')
    <script>
        window.previewImage = "{{url('/resources/app/images/default.jpg')}}";
        window.uploadProfilePic = "{{route('uploadProfilePic')}}";
        window.removeUploadedProfilePic = "{{route('removeUploadedProfilePic')}}";
    </script>
    <script src="{{url('/resources/app/pages/js/create-trainee.js')}}" type="text/javascript"></script>
    <script src="{{url('/resources/app/pages/js/request-gym.js')}}" type="text/javascript"></script>
@stop
