@extends('muscle-up-app.admin.dashboard.admin-dashboard')

@section('title','Add Company')

@section('style-sheet')
    <link href="{{url('/admin-assets/elements/forms.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/assets/plugins/datetimepicker/css/DateTimePicker.css')}}" rel="stylesheet">

@stop

@section('content')
    <div id="page-title">

        <h2>ADD New Company</h2>
        <p>Please fill in all the information and then click on Add Company.</p>
    </div>
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
    <div class="panel">
        <div class="panel-body">
            <div class="example-box-wrapper">
                <form class="form-horizontal bordered-row add-trainee-form" role="form" method="POST" action="{{route('company-create-post')}}">
                    {{csrf_field()}}

                    <div class="tab-pane active" id="tab2">
                        <div class="content-box">
                            <h3 class="content-box-header bg-white-opacity"> Company Info</h3>
                            <div class="content-box-wrapper">
                                <div class="form-group">
                                    <label class="col-sm-3 control-label">Name:</label>
                                    <div class="col-sm-4">
                                        <input class="form-control" type="text" name="company_name" value="" placeholder="Company Name ...">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="col-sm-3 control-label">Phone:</label>
                                    <div class="col-sm-4">
                                        <input class="form-control phone_number" type="text" name="company_phone" value="" placeholder="Company Phone Number..." maxlength="15">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="col-sm-3 control-label">Email:</label>
                                    <div class="col-sm-4">
                                        <input class="form-control" type="email" name="company_email" value="" placeholder="Company Email ...">
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="content-box">
                            <h3 class="content-box-header bg-white-opacity"> Main Branch Info</h3>
                            <div class="content-box-wrapper">
                                <div class="form-group">
                                    <label class="col-sm-3 control-label">Name:</label>
                                    <div class="col-sm-4">
                                        <input class="form-control" type="text" name="branch_name" value="" placeholder="Branch Name ...">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="col-sm-3 control-label">Phone:</label>
                                    <div class="col-sm-4">
                                        <input class="form-control phone_number" type="text" name="branch_phone" value="" placeholder="Branch Phone Number..." maxlength="15">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="col-sm-3 control-label">Email:</label>
                                    <div class="col-sm-4">
                                        <input class="form-control" data-parsley-type="email" required name="branch_email" value="" placeholder="Branch Email ...">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="col-sm-3 control-label">Opening Time:</label>
                                    <div class="col-sm-4">
                                        <input class="form-control" type="text" data-field="date" data-format="yyyy-MM-dd" name="opening_time" value="" placeholder="opening time...">
                                        <div class="btn-date"></div>

                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="col-sm-3 control-label">Clossing Time:</label>
                                    <div class="col-sm-4">
                                        <input class="form-control" type="text" data-field="date" data-format="yyyy-MM-dd" name="clossing_time" value="" placeholder="clossing time...">
                                        <div class="btn-date"></div>

                                    </div>
                                </div>





                            </div>
                        </div>
                        <div class="content-box">
                            <h3 class="content-box-header bg-white-opacity"> Admin Login Info</h3>
                            <div class="content-box-wrapper">
                                <div class="form-group">
                                    <label class="col-sm-3 control-label">Name:</label>
                                    <div class="col-sm-4">
                                        <input class="form-control" type="text" name="admin_name" value="" placeholder="Admin Name ...">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="col-sm-3 control-label">Email:</label>
                                    <div class="col-sm-4">
                                        <input class="form-control" type="email" name="admin_email" value="" placeholder="Admin Email ...">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="col-sm-3 control-label">Phone:</label>
                                    <div class="col-sm-4">
                                        <input class="form-control phone_number" type="text" name="admin_phone" value="" placeholder="Admin Phone Number..." maxlength="15">
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="col-sm-offset-6">
                            <button type="submit" class="btn btn-primary">Add Company</button>
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
