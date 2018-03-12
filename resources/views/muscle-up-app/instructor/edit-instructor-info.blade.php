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
            <h3 class="content-box-header bg-google">Edit Instructor Details:</h3>

            <div class="example-box-wrapper">
                <form class="form-horizontal bordered-row add-instructor-form" role="form" method="POST" action="{{route('instructor-update',$employee->user->id)}}">
                    {{csrf_field()}}
                        <div class="tab-pane active pL0" id="tab2">
                            <div class="col-sm-12 col-md-6">
                                <div class="form-group">
                                    <label class="col-md-4 control-label">First Name:</label>
                                    <div class="col-md-8">
                                        <input class="form-control" type="text" name="first_name" value="{{$employee->user->first_name}}" placeholder="Branch Name ...">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="col-md-4 control-label">Last Name:</label>
                                    <div class="col-md-8">
                                        <input class="form-control phone_number" type="text" name="last_name" value="{{$employee->user->last_name}}" placeholder="Branch Phone Number..." maxlength="15">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-md-4 control-label">Phone Number:</label>
                                    <div class="col-md-8">
                                        <input class="form-control dial-code" type="text" name="dial_code" value="{{$employee->user->phone_number}}" placeholder="+1..." readonly>
                                    </div>
                                </div>


                                <div class="form-group">
                                    <label for="" class="col-md-4 control-label">Date-of-Birth:</label>
                                    <div class="col-md-3">
                                            <input class="form-control" type="text" data-field="date" data-format="yyyy-MM-dd" name="dob" value="{{$employee->user->dob}}" placeholder="Date of Birth..." readonly>
                                    </div>

                                </div>
                                <div class="form-group">
                                    <label for="" class="col-md-3 control-label">Gender:</label>
                                    <div class="col-md-4">
                                        <label class="radio-inline">
                                            <input id="" name="gender" type="radio" value="male" checked> Male
                                        </label>
                                        <label class="radio-inline">
                                            <input id="" name="gender" type="radio" value="female"> Female
                                        </label>
                                    </div>
                                    <label for="" class="col-md-2 control-label">Quite Date:</label>

                                    <div class="col-md-3">
                                        <input class="form-control" type="text" data-field="date" data-format="yyyy-MM-dd" name="quit_date" value="{{$employee->quit_date}}" placeholder="Quit Date..." readonly>
                                        <div class="btn-date"></div>                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="" class="col-md-4 control-label">Previous Salary:</label>
                                    <div class="col-md-3">
                                        <input class="form-control" type="number" name="previous_salary" value="{{$employee->previous_salary}}" placeholder="previous Salary...">
                                    </div>
                                    <label for="" class="col-md-2 control-label">Joining Salary:</label>

                                    <div class="col-md-3">
                                            <input class="form-control" type="number" name="joining_salary" value="{{$employee->joining_salary}}" placeholder="Joining Salary..">
                                    </div>
                                </div>
                            </div>

                            <div class="col-sm-12 col-md-6">
                                <div class="form-group">
                                    <label class="col-md-4 control-label">Country</label>
                                    <div class="col-md-8">
                                        <select class="form-control" name="country">
                                            @if(isset($employee->user->country))
                                                <option value="$employee->user->country">{{$employee->user->country}}</option>
                                            @else
                                                <option value="">Select Country..</option>
                                            @endif
                                            @foreach($countries as $country)
                                                <option data-code="{{$country['code']}}" value="{{$country['name']}}" data-dialcode="{{$country['dial_code']}}">{{$country['name']}}</option>
                                            @endforeach
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-md-4 control-label">City</label>
                                    <div class="col-md-8">
                                        <input class="form-control" type="text" name="city" value="{{$employee->user->city}}" placeholder="City...">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-md-4 control-label">Address</label>
                                    <div class="col-md-8">
                                        <textarea class="form-control" name="address">{{$employee->user->address}}</textarea>
                                        <div class="character-remaining clear input-description">1000 characters left</div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="col-md-4 control-label">Experience</label>
                                    <div class="col-md-8">
                                        <input class="form-control" type="number" name="exp_years" value="{{$employee->exp_years}}" placeholder="Experience Year..">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-md-4 control-label">Description</label>
                                    <div class="col-md-8">
                                        <input class="form-control" name="exp_description" value="{{$employee->exp_description}}" placeholder="Experience Description..." maxlength="255">
                                        <div class="character-remaining clear input-description">1000 characters left</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="tab-pane active pL0" id="tab2">
                            <div class="col-sm-12 col-md-6">

                            </div>
                        </div>
                        <div class="clear"></div>
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
    <script>
        window.previewImage = "{{url('/resources/app/images/default.jpg')}}";
        window.uploadProfilePic = "{{route('uploadProfilePic')}}";
        window.removeUploadedProfilePic = "{{route('removeUploadedProfilePic')}}";
    </script>
    <script src="{{url('/resources/app/pages/js/create-trainee.js')}}" type="text/javascript"></script>
@stop
