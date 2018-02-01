@extends('muscle-up-app.gym.dashboard')

@section('title','Instructor List')


@section('page-heading')
    <h2>Instructor Detail</h2>
    <p>Details of Instructor</p>
    <div id="errors">
        @if (count($errors) > 0)
            <div class="alert alert-danger">
                <strong>Whoops!</strong> There were some problems with your input.<br><br>
                <ul>
                    @foreach ($errors->all() as $error)
                        <li>{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
        @endif
    </div>
@stop


@section('style-sheet')
    <link href="{{url('/admin-assets/elements/forms.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/assets/plugins/datetimepicker/css/DateTimePicker.css')}}" rel="stylesheet">

@stop

@section('content')
    <div class="panel">
        <div class="panel-body">
            <div class="example-box-wrapper">
                <form class="form-horizontal bordered-row add-instructor-form" role="form" method="POST" action="{{route('instructor-update',$employee->user->id)}}">
                    {{csrf_field()}}
                    <div class="form-group">
                        <label class="col-sm-3 control-label">Enter First Name:</label>
                        <div class="col-sm-4">
                            <input class="form-control" type="text" name="first_name" value="{{$employee->user->first_name}}" placeholder="First Name ...">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label">Enter last Name:</label>
                        <div class="col-sm-4">
                            <input class="form-control" type="text" name="last_name" value="{{$employee->user->last_name}}" placeholder="Last Name...">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label">Date of birth:</label>
                        <div class="col-sm-4">
                            <input class="form-control" type="text" data-field="date" data-format="yyyy-MM-dd" name="dob" value="{{$employee->user->dob}}" placeholder="Date of Birth..." readonly>
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
                            <input class="form-control dial-code" type="text" name="dial_code" value="{{$employee->user->dial_code}}" placeholder="+1..." readonly>
                        </div>
                        <div class="col-sm-3">
                            <input class="form-control phone_number" type="text" name="phone_number" value="{{$employee->user->phone_number}}" placeholder="Phone Number..." maxlength="15">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-md-4 control-label">Country:</label>
                        <div class="col-md-8">
                            {{--<input class="form-control" type="text" name="country" value="" placeholder="Country...">--}}
                            <select class="form-control country_list" name="country">
                                @if(isset($employee->user->country))
                                    <option value="$employee->user->country">{{$employee->user->country}}</option>
                                @else
                                    <option value="">Select Country..</option>
                                @endif
                                @if(isset($countries))
                                    @foreach($countries as $country )
                                        <option value="{{$country->name}}">{{$country->name}}</option>
                                    @endforeach
                                @endif
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-md-4 control-label">City:</label>
                        <div class="col-md-8">
                            <input class="form-control" type="text" name="city" value="{{$employee->user->city}}" placeholder="City...">
                        </div>
                    </div>
                    {{--<div class="form-group">--}}
                        {{--<label class="col-md-4 control-label">Country:</label>--}}
                        {{--<div class="col-md-8">--}}
                            {{--<input class="form-control" type="text" name="country" value="" placeholder="Country...">--}}
                            {{--<select   class="form-control country_list" name="country">--}}
                                {{--@if(isset($employee->user->country))--}}
                                    {{--<option value="">Select Country..</option>--}}

                                {{--@else--}}
                                    {{--<option value="">Select Country..</option>--}}
                                   {{--@endif--}}
                                {{--@if(isset($countries))--}}
                                    {{--@foreach($countries as $country )--}}
                                        {{--<option value="{{$country->name}}">{{$country->name}}</option>--}}
                                    {{--@endforeach--}}
                                {{--@endif--}}
                            {{--</select>--}}
                        {{--</div>--}}
                    {{--</div>--}}
                    {{--<div class="form-group">--}}
                        {{--<label class="col-md-4 control-label">City:</label>--}}
                        {{--<div class="col-md-8">--}}
                            {{--<input class="form-control" type="text" name="city" value="{{$employee->user->city}}" placeholder="City...">--}}
                        {{--</div>--}}
                    {{--</div>--}}
                    <div class="form-group">
                        <label class="col-sm-3 control-label">Joining Date:</label>
                        <div class="col-sm-4">
                            <input class="form-control" type="text" data-field="date" data-format="yyyy-MM-dd" name="joining_date" value="{{$employee->joining_date}}" placeholder="Joining Date..." readonly>
                            <div class="btn-date"></div>

                        </div>
                    </div>

                    <div class="form-group">
                        <label class="col-sm-3 control-label">Quit Date:</label>
                        <div class="col-sm-4">
                            <input class="form-control" type="text" data-field="date" data-format="yyyy-MM-dd" name="quit_date" value="{{$employee->quit_date}}" placeholder="Quit Date..." readonly>
                            <div class="btn-date"></div>

                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label">Enter Previous Salary:</label>
                        <div class="col-sm-4">
                            <input class="form-control" type="number" name="previous_salary" value="{{$employee->previous_salary}}" placeholder="previous Salary...">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label">Enter Joining Salary:</label>
                        <div class="col-sm-4">
                            <input class="form-control" type="number" name="joining_salary" value="{{$employee->joining_salary}}" placeholder="Joining Salary..">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label">Experience Year:</label>
                        <div class="col-sm-4">
                            <input class="form-control" type="number" name="exp_years" value="{{$employee->exp_years}}" placeholder="Experience Year..">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label">Experience Description</label>
                        <div class="col-sm-4">
                            <input class="form-control" name="exp_description" value="{{$employee->exp_description}}" placeholder="Experience Description..." maxlength="255">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label">Address</label>
                        <div class="col-sm-4">
                            <textarea class="form-control" name="address">{{$employee->user->address}}</textarea>
                        </div>
                    </div>

                    <div class="form-group">

                        <div class="col-sm-offset-6">
                            <button type="submit" class="btn btn-primary">Update Info </button>
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
    <script src="{{url('/assets/js/add-instructor.js')}}" type="text/javascript"></script>


@stop
