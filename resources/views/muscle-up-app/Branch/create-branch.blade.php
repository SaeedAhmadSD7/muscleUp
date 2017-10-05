@extends('muscle-up-app.gym.dashboard.gym-dashboard')

@section('title','Add Branch')

@section('style-sheet')
    <link href="{{url('/admin-assets/elements/forms.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/assets/plugins/datetimepicker/css/DateTimePicker.css')}}" rel="stylesheet">

@stop

@section('content')
    <div id="page-title">

        <h2>ADD Branch</h2>
        <p>Please fill in all the information and then click Add branch.</p>
    </div>

    <div class="panel">
        <div class="panel-body">
            <div class="example-box-wrapper">
                <form class="form-horizontal bordered-row add-trainee-form" role="form" method="POST" action="">
                    {{csrf_field()}}
                    <div class="form-group">
                        <label class="col-sm-3 control-label">Enter Title:</label>
                        <div class="col-sm-4">
                            <input class="form-control" type="text" name="title" value="" placeholder="Title ...">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label">Opening Time:</label>
                        <div class="col-sm-4">
                            <input class="form-control" type="text" data-field="date" data-format="yyyy-MM-dd" name="opening_time" value="" placeholder="opening time..." readonly>
                            <div class="btn-date"></div>

                        </div>
                    </div>

                    <div class="form-group">
                        <label class="col-sm-3 control-label">Clossing Time:</label>
                        <div class="col-sm-4">
                            <input class="form-control" type="text" data-field="date" data-format="yyyy-MM-dd" name="clossing_time" value="" placeholder="clossing time..." readonly>
                            <div class="btn-date"></div>

                        </div>
                    </div>

                    <div class="form-group">
                        <label class="col-sm-3 control-label">Phone number:</label>
                        <div class="col-sm-4">
                            <input class="form-control phone_number" type="text" name="phone_no" value="" placeholder="Phone Number..." maxlength="15">
                        </div>
                    </div>

                    <div class="form-group">
                        <label class="col-sm-3 control-label">Email Address:</label>
                        <div class="col-sm-4">
                            <input class="form-control" type="email" name="address" value="" placeholder="Email Address...">
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="col-sm-offset-6">
                            <button type="submit" class="btn btn-primary">Add Branch</button>
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
    <script src="{{url('/assets/js/branch.js')}}" type="text/javascript"></script>

@stop
