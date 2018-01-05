@extends('layouts.backend-main')

@section('title','Add Instructor')

@section('title')
    Gym Dashboard
@stop

@section('user-name')
    {{get_auth_user_full_name()}}
@stop

@section('content')
    <div id="page-title">
        <h2 class="title-hero">ADD Instructor</h2>
        <p>Please fill in all the information and then click Add Instructor.</p>

    </div>

    <div class="panel">

        <div class="panel-body">
            <h3 class="content-box-header bg-google">Basic Info</h3>
            <div class="example-box-wrapper">
                <form class="form-horizontal bordered-row create-instructor-form" role="form" method="POST" action="{{route('instructor-store')}}">
                    {{csrf_field()}}
                    <input type="hidden" id="profile_img" name="profile_img" />
                    <div class="tab-pane active pL0" id="tab2">
                        <div class="col-sm-12 col-md-6">
                            <div class="form-group">
                                <label class="col-md-4 control-label">Enter First Name:</label>
                                <div class="col-md-8">
                                    <input class="form-control" type="text" name="first_name" value="" placeholder="First Name ...">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-md-4 control-label">Enter last Name:</label>
                                <div class="col-md-8">
                                    <input class="form-control" type="text" name="last_name" value="" placeholder="Last Name...">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-md-4 control-label">Email Address:</label>
                                <div class="col-md-8">
                                    <input class="form-control" type="email" name="email" value="" placeholder="Email Address...">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-md-4 control-label">Date of birth:</label>
                                <div class="col-md-8">
                                    <input class="form-control" type="text" data-field="date" data-format="yyyy-MM-dd" name="dob" value="" placeholder="Date of Birth..." readonly>
                                    <div class="btn-date"></div>

                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-md-4 control-label">Gender</label>
                                <div class="col-md-8">
                                    <label class="radio-inline">
                                        <input id="" name="gender" type="radio" value="male" checked> Male
                                    </label>
                                    <label class="radio-inline">
                                        <input id="" name="gender" type="radio" value="female"> Female
                                    </label>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-md-4 control-label">Phone number:</label>
                                <div class="col-md-1">
                                    <input class="form-control dial-code" type="text" name="dial_code" value="" placeholder="+1..." readonly>
                                </div>
                                <div class="col-md-6">
                                    <input class="form-control phone_number" type="text" name="phone_number" value="" placeholder="Phone Number..." maxlength="15">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-md-4 control-label">Address</label>
                                <div class="col-md-8">
                                    <textarea name="address" rows="3"  placeholder="Address..."  class="form-control textarea-counter"></textarea>
                                    <div class="character-remaining clear input-description">1000 characters left</div>
                                </div>
                            </div>


                            <div class="form-group">
                                <label class="col-md-4 control-label">Joining Date:</label>
                                <div class="col-md-8">
                                    <input class="form-control" type="text" data-field="date" data-format="yyyy-MM-dd" name="joining_date" value="" placeholder="Joining Date...">
                                    <div class="btn-date"></div>

                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-md-4 control-label">Quit Date:</label>
                                <div class="col-md-8">
                                    <input class="form-control" type="text" data-field="date" data-format="yyyy-MM-dd" name="quit_date" value="" placeholder="Quit Date...">
                                    <div class="btn-date"></div>

                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-md-4 control-label">Enter Previous Salary:</label>
                                <div class="col-md-8">
                                    <input class="form-control" type="number" name="previous_salary" value="" placeholder="previous Salary...">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-md-4 control-label">Enter Joining Salary:</label>
                                <div class="col-md-8">
                                    <input class="form-control" type="number" name="joining_salary" value="" placeholder="Joining Salary..">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-md-4 control-label">Experience Year:</label>
                                <div class="col-md-8">
                                    <input class="form-control" type="number" name="exp_years" value="" placeholder="Experience Year..">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-md-4 control-label">Experience Description</label>
                                <div class="col-md-8">
                                    <textarea rows="3" class="form-control" name="exp_description" placeholder="Experience Description..." maxlength="1000"></textarea>
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
                            <button type="submit" class="btn btn-primary">Add Instructor</button>
                            <button type="button" class="btn btn-primary" onclick="goTo({{''}})">Cancel</button>
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
    <script src="{{url('/resources/app/pages/js/create-instructor.js')}}" type="text/javascript"></script>
@stop
