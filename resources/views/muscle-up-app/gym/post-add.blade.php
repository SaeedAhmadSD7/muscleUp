@extends('muscle-up-app.admin.dashboard.admin-dashboard')

@section('title','Add Gym')

@section('style-sheet')
    <link href="{{url('/assets/plugins/select2/css/select2.css')}}" rel="stylesheet">
    <link href="{{url('/admin-assets/select2/css/select2-bootstrap.css')}}" rel="stylesheet">
    <link href="{{url('/admin-assets/widgets/timepicker/timepicker.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/assets/plugins/datetimepicker/css/DateTimePicker.css')}}" rel="stylesheet">
    <link href="{{url('/admin-assets/elements/forms.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/elements/buttons.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/widgets/wizard/wizard.css')}}" rel="stylesheet" type="text/css">
@stop

@section('page-heading')
    <h2>Add Gym</h2>
    <p>Please fill in all the remaining information and then click Add Gym.</p>
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
    <div class="panel">
        <div class="panel-body">
            <div class="example-box-wrapper">
                <div class="form-wizard" id="form-wizard-3">
                    <ul>
                        <li><a data-toggle="tab" href="#tab-1"><label class="wizard-step">1</label><span class="wizard-description">Gym Details <small>Details about the gym</small></span></a></li>
                        <li><a data-toggle="tab" href="#tab-2"><label class="wizard-step">2</label><span class="wizard-description">Account Information <small>Information about the account</small></span></a></li>
                    </ul>
                    <form class="form-horizontal bordered-row add-gym-form" role="form" method="POST" action="{{route('add-gym')}}">
                        <div class="tab-content">
                            {{csrf_field()}}
                            <div class="tab-pane active" id="tab-1">
                                <div class="content-box">
                                    <h3 class="content-box-header bg-default">Gym Information</h3>
                                    <div class="content-box-wrapper">
                                        <div class="form-group first-group">
                                            <label class="col-sm-3 control-label">Gym Title:</label>
                                            <div class="col-sm-6">
                                                <input class="form-control" type="text" name="title" value="{{$gymdata['title']}}" placeholder="Gym Name...">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-sm-3 control-label">Email Address:</label>
                                            <div class="col-sm-6">
                                                <input class="form-control" name="email[]" value="{{$gymdata['email']}}" placeholder="Email Address...">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-sm-3 control-label">Number of Branches:</label>
                                            <div class="col-sm-6">
                                                <input class="form-control" type="number" name="num_branches" value="{{$gymdata['num_branches']}}" placeholder="Number of Branches...">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-sm-3 control-label">Country: </label>
                                            <div class="col-sm-6">
                                                <input class="country" type="hidden" value="{{$gymdata['country']}}">
                                                <select class="form-control country_list" name="country">
                                                    <option></option>
                                                    @foreach($countries as $country)
                                                        <option data-code="{{$country['code']}}" value="{{$country['name']}}" data-dialcode="{{$country['dial_code']}}">{{$country['name']}}</option>
                                                    @endforeach
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-sm-3 control-label">City: </label>
                                            <div class="col-sm-6">
                                                <input class="form-control" name="city" value="{{$gymdata['city']}}" placeholder="City...">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-sm-3 control-label">Phone number: </label>
                                            <div class="col-sm-1">
                                                <input class="form-control dial-code" type="text" name="dial_code" value="{{$gymdata['dial_code']}}" placeholder="+1..." readonly>
                                            </div>
                                            <div class="col-sm-5">
                                                <input class="form-control phone_number" type="text" name="phone_number[]" value="{{$gymdata['phone_number']}}" placeholder="Phone Number..." maxlength="15">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-sm-3 control-label">Address: </label>
                                            <div class="col-sm-6">
                                                <textarea class="form-control" placeholder="Address..." name="address[]" maxlength="255">{{$gymdata['address']}}</textarea>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-sm-3 control-label">Open Time: </label>
                                            <div class="col-sm-6">
                                                <input class="form-control open-time" type="text" name="open_time" value="{{old('open_time')}}" placeholder="Opening Time..." readonly>
                                                <input type="hidden" name="latitude" value="0.0">
                                                <input type="hidden" name="longitude" value="0.0">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-sm-3 control-label">Closing Time: </label>
                                            <div class="col-sm-6">
                                                <input class="form-control close-time" type="text" name="close_time" value="{{old('close_time')}}" placeholder="Closing Time..." readonly>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane" id="tab-2">
                                <div class="content-box">
                                    <h3 class="content-box-header bg-black">Account Information</h3>
                                    <div class="content-box-wrapper">
                                        <div class="form-group first-group">
                                            <label class="col-sm-3 control-label">Enter First Name:</label>
                                            <div class="col-sm-6">
                                                <input class="form-control" type="text" name="first_name" value="" placeholder="First Name ...">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-sm-3 control-label">Enter last Name:</label>
                                            <div class="col-sm-6">
                                                <input class="form-control" type="text" name="last_name" value="" placeholder="Last Name...">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-sm-3 control-label">Email Address:</label>
                                            <div class="col-sm-6">
                                                <input class="form-control" type="email" name="email[]" value="" placeholder="Email Address...">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-sm-3 control-label">Date of birth:</label>
                                            <div class="col-sm-6">
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
                                                <input class="form-control dial-code" type="text" name="dial_code" value="{{$gymdata['dial_code']}}" placeholder="+1..." readonly>
                                            </div>
                                            <div class="col-sm-5">
                                                <input class="form-control phone_number" type="text" name="phone_number[]" value="" placeholder="Phone Number..." maxlength="15">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-sm-3 control-label">Address</label>
                                            <div class="col-sm-6">
                                                <textarea class="form-control " name="address[]" placeholder="Address..." maxlength="255"></textarea>
                                            </div>
                                        </div>
                                        <div class="form-group">

                                            <div class="col-sm-offset-6">
                                                <button type="submit" class="btn btn-primary">Add Gym</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ul class="pager wizard">
                                <li class="previous first" style="display:none">
                                    <a href="#">First</a>
                                </li>
                                <li class="previous">
                                    <a href="#">Previous</a>
                                </li>
                                <li class="next last" style="display:none">
                                    <a href="#">Last</a>
                                </li>
                                <li class="next">
                                    <a href="#">Next</a>
                                </li>
                            </ul>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@stop


@section('script')
    <script async defer src ="{{url('https://maps.googleapis.com/maps/api/js?key=AIzaSyCSqyKO68gVk7RCkuYKRJhM8ayeT_MznpI')}}" type="text/javascript"></script>
    <script src="{{url('/assets/plugins/select2/js/select2.full.js')}}" type="text/javascript"></script>
    <script src="{{url('/assets/plugins/datetimepicker/js/DateTimePicker.js')}}" type="text/javascript"></script>
    <script src="{{url('/admin-assets/widgets/timepicker/timepicker.js')}}" type="text/javascript"></script>
    <script src="{{url('/admin-assets/widgets/button/button.js')}}" type="text/javascript"></script>
    <script src="{{url('/assets/plugins/jquery-validation-1.16.0/js/jquery.validate.js')}}" type="text/javascript"></script>
    <script src="{{url('/admin-assets/widgets/wizard/wizard-demo.js')}}" type="text/javascript"></script>
    <script src="{{url('/admin-assets/widgets/tabs/tabs.js')}}" type="text/javascript"></script>
    <script src="{{url('/admin-assets/widgets/wizard/wizard.js')}}" type="text/javascript"></script>
    <script src="{{url('/assets/js/post-add.js')}}" type="text/javascript"></script>
@stop