@extends('layouts.backend-main')

@section('title','Edit personal detail')

@section('content')
    <div class="panel">
        <div class="panel-body">
            <h3 class="title-hero">Edit your personal information and Please fill in all the information</h3>

            <div class="example-box-wrapper">
                <form class="form-horizontal bordered-row edit-personal-detail" role="form" method="POST" enctype="multipart/form-data" action="{{route('trainee-detail-update', $trainee_user->id)}}">
                    {{csrf_field()}}

                        <h2 style="color:#1E90FF; border-bottom:1px solid silver; text-align:left" class="pull-left col-md-12">Personal Information</h2>
                        <div class="col-md-6" style="padding:20px;">
                            <div class="form-group">
                                <label class="col-sm-3 control-label">Enter First Name:</label>
                                <div class="col-sm-9">
                                    <input type="text" class="form-control"  name="first_name" value="{{$trainee_user->first_name}}" placeholder="First Name ...">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-3 control-label">Enter last Name:</label>
                                <div class="col-sm-9">
                                    <input type="text" class="form-control" name="last_name" value="{{$trainee_user->last_name}}" placeholder="Last Name...">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-3 control-label">Date of birth:</label>
                                <div class="col-sm-9">
                                    <input class="form-control" type="text" data-field="date" data-format="yyyy-MM-dd" name="dob" value="{{$trainee_user->dob}}" placeholder="Date of Birth..." readonly>
                                    <div class="btn-date"></div>

                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-3 control-label">Gender</label>
                                <div class="col-sm-9">
                                    <label class="radio-inline">
                                        <input id="" name="gender" type="radio" value="male" checked> Male
                                    </label>
                                    <label class="radio-inline">
                                        <input id="" name="gender" type="radio" value="female"> Female
                                    </label>
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-3 control-label">Height</label>
                                <div class="col-sm-9">
                                    <input type="text" class="form-control" name="height" value="{{$trainee->height}}" placeholder="Height...">
                                </div>
                            </div>

                        </div>
                        <div class="col-md-6" style="padding:20px;">
                            <div class="form-group">
                                <label class="col-sm-3 control-label">Phone number:</label>
                                <div class="col-sm-1">
                                    <input class="form-control dial-code" type="text" value="" placeholder="+1...">
                                </div>
                                <div class="col-sm-8">
                                    <input class="form-control phone_number" type="text" name="phone_number" value="{{$trainee_user->phone_number}}" placeholder="Phone Number..." maxlength="15">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-3 control-label">Country</label>
                                <div class="col-sm-9">
                                    <input type="text" class="form-control" name="country" value="{{$trainee_user->country}}" placeholder="Country...">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-3 control-label">City</label>
                                <div class="col-sm-9">
                                    <input type="text" class="form-control" name="city" value="{{$trainee_user->city}}" placeholder="City...">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-3 control-label">Address</label>
                                <div class="col-sm-9">
                                    <input type="text" class="form-control" name="address" value="{{$trainee_user->address}}" placeholder="Address...">
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-sm-offset-6">
                                <button href="{{url()->previous()}}" class="btn btn-primary">Cancel</button>
                                <button type="submit" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>


                </form>
            </div>
        </div>
    </div>
@stop

@section('script')

    <script src="{{url('/resources/app/pages/js/create-trainee.js')}}" type="text/javascript"></script>

@stop
