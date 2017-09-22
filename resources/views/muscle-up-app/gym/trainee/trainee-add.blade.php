@extends('muscle-up-app.gym.dashboard.gym-dashboard')

@section('title','Add trainee')

@section('style-sheet')
    <link href="{{url('/admin-assets/elements/forms.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/assets/plugins/datetimepicker/css/DateTimePicker.css')}}" rel="stylesheet">

@stop

@section('content')
    <div class="panel">
        <div class="panel-body">
            <h3 class="title-hero">ADD Trainee</h3>
            <h4>Please fill in all the information and then click Add Trainee.</h4>
            <div class="example-box-wrapper">
                <form class="form-horizontal bordered-row add-trainee-form" role="form" method="POST" action="{{route('trainee-store')}}">
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
                            <input class="form-control" type="text" data-field="date" data-format="yyyy-MM-dd" name="dob" value="" placeholder="Date of Birth..." readonly>
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
                            <input class="form-control dial-code" type="text" name="dial_code" value="" placeholder="+1..." readonly>
                        </div>
                        <div class="col-sm-3">
                            <input class="form-control phone_number" type="text" name="phone_number" value="" placeholder="Phone Number..." maxlength="15">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label">Address</label>
                        <div class="col-sm-4">
                            <textarea class="form-control " placeholder="Address..." maxlength="255"></textarea>
                        </div>
                    </div>
                    <div class="form-group">

                        <div class="col-sm-offset-6">
                            <button type="submit" class="btn btn-primary">Add Trainee</button>
                        </div>
                    </div>


                </form>
            </div>
        </div>
    </div>
@stop

@section('script')
    <script src="{{url('/assets/plugins/datetimepicker/js/DateTimePicker.js')}}" type="text/javascript"></script>
    <script src="{{url('/assets/plugins/jquery-validation-1.16.0/js/jquery.validate.js')}}" type="text/javascript"></script>
    <script src="{{url('/assets/js/add-trainee.js')}}" type="text/javascript"></script>


@stop
