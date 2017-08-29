@extends('layouts.backend-main')

@section('title','Add Instructor')

@section('dashboard_link')
    {{route('gym')}}
@stop
@section('user_type')
    Gym
@stop

@section('content')
    <div class="panel">
        <div class="panel-body">
            <h3 class="title-hero">Add Instructor</h3>
            <h4>Please fill in all the information and then click Add Instructor.</h4>
            <div class="example-box-wrapper">
                <form class="form-horizontal bordered-row add-instructor-form" role="form" method="POST" action="{{route('instructor-store')}}">
                    {{csrf_field()}}
                    <div class="form-group">
                        <label class="col-sm-3 control-label">Enter First Name:</label>
                        <div class="col-sm-4">
                            <input class="form-control" type="text" name="first_name" value="" placeholder="First Name ...">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label">Enter last Name:</label>
                        <div class="col-sm-4">
                            <input class="form-control" type="text" name="last_name" value="" placeholder="Last Name...">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label">Email Address:</label>
                        <div class="col-sm-4">
                            <input class="form-control" type="email" name="email" value="" placeholder="Email Address...">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label">Date of birth:</label>
                        <div class="col-sm-4">
                            <input class="form-control" type="text" data-field="date" data-format="yyyy-MM-dd" name="birth_date" value="" placeholder="Date of Birth..." readonly>
                            <div class="btn-date"></div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label">Gender</label>
                        <div class="col-sm-6">
                            <label class="radio-inline">
                                <input id="" name="gender" type="radio" value="male" checked> Male
                            </label>
                            <label class="radio-inline">
                                <input id="" name="gender" type="radio" value="female"> Female
                            </label>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label">Phone number:</label>
                        <div class="col-sm-1">
                            <input class="form-control dial-code" type="text" name="dial_code" value="1" placeholder="+1..." readonly>
                        </div>
                        <div class="col-sm-3">
                            <input class="form-control phone_number" type="text" name="phone_number" value="" placeholder="Phone Number..." maxlength="15">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label">Address</label>
                        <div class="col-sm-4">
                            <input class="form-control" name="address" placeholder="Address..." maxlength="255">
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-offset-6">
                            <button type="submit" class="btn btn-primary"><span class="fa fa-angle-right"></span> Add Instructor</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
@stop