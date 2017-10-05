@extends('layouts.backend-main')

@section('title','Edit personal detail')

@section('style-sheet')
    <link href="{{url('/admin-assets/elements/forms.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/assets/plugins/datetimepicker/css/DateTimePicker.css')}}" rel="stylesheet">

@stop

@section('content')
    <div class="panel">
        <div class="panel-body">
            <h3 class="title-hero">Edit your personal information</h3>
            <h4>Please fill in all the information </h4>
            <div class="example-box-wrapper">
                <form class="form-horizontal bordered-row edit-personal-detail" role="form" method="POST" action="{{route('trainee-detail-update', $trainee->id)}}">
                    {{csrf_field()}}
                    <div class="form-group">
                        <label class="col-sm-3 control-label">Enter First Name:</label>
                        <div class="col-sm-4">
                            <input class="form-control" type="text" name="first_name" value="{{$trainee->first_name}}" placeholder="First Name ...">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label">Enter last Name:</label>
                        <div class="col-sm-4">
                            <input class="form-control" type="text" name="last_name" value="{{$trainee->last_name}}" placeholder="Last Name...">
                        </div>
                    </div>
                    {{--<div class="form-group">--}}
                        {{--<label class="col-sm-3 control-label">Email Address:</label>--}}
                        {{--<div class="col-sm-4">--}}
                            {{--<input class="form-control" type="email" name="email" value="" placeholder="Email Address...">--}}
                        {{--</div>--}}
                    {{--</div>--}}
                    <div class="form-group">
                        <label class="col-sm-3 control-label">Date of birth:</label>
                        <div class="col-sm-4">
                            <input class="form-control" type="text" data-field="date" data-format="yyyy-MM-dd" name="dob" value="{{$trainee->dob}}" placeholder="Date of Birth..." readonly>
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
                            <input class="form-control dial-code" type="text" name="dial_code" value="{{$trainee->dial_code}}" placeholder="+1..." readonly>
                        </div>
                        <div class="col-sm-3">
                            <input class="form-control phone_number" type="text" name="phone_number" value="{{$trainee->phone_number}}" placeholder="Phone Number..." maxlength="15">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label">Address</label>
                        <div class="col-sm-4">
                            <input class="form-control " name="address" value="{{$trainee->address}}" placeholder="Address..." maxlength="255">
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
    <script src="{{url('/assets/plugins/datetimepicker/js/DateTimePicker.js')}}" type="text/javascript"></script>
    <script src="{{url('/assets/js/add-trainee.js')}}" type="text/javascript"></script>


@stop
