@extends('layouts.backend-main')

@section('title','My Profile')

@section('title')
    Gym Dashboard
@stop

@section('user-name')
    {{get_auth_user_full_name()}}
@stop

@section('page-heading')
    <h2>Change Password:</h2>
    <p>Enter the new Password and click Reset.</p>
        @if (count($errors) > 0)
            <div class="alert alert-danger">
                <strong>Whoops!</strong> There were some problems with your input.<br>
                <ul>
                    @foreach ($errors->all() as $error)
                        <li>{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
        @endif
@stop

@section('content')
    <div class="panel">

        <div class="panel-body">
            <h3 class="content-box-header bg-google">Reset Password:</h3>
            <div class="example-box-wrapper">
                <input type="hidden" value="1" id="test">

                <form class="form-horizontal bordered-row add-trainee-form" role="form" method="post" action="{{route('password-reset')}}"  enctype="multipart/form-data">
                    {{csrf_field()}}
                    <div class="tab-pane active pL0" id="tab2">
                        <div class="col-sm-12 col-md-6">
                            <div class="form-group">
                                <label class="col-md-4 control-label">Enter New Password:</label>
                                <div class="col-md-8">
                                    <input class="form-control" type="password" name="password" value="" placeholder="New Password ...">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-md-4 control-label">Re-Enter password:</label>
                                <div class="col-md-8">
                                    <input class="form-control" type="password" name="password_confirmation" value="" placeholder="Re-enter Password...">
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="clear"></div>
                    <div class="form-group col-sm-12">
                        <div class="col-sm-12 taR">
                            <button type="submit" class="btn btn-primary">Reset</button>
                            <button type="button" class="btn btn-primary" onclick="goTo({{'/'}})">Cancel</button>
                        </div>
                    </div>
{{--                    {!! Form::close() !!}--}}
                </form>
            </div>
        </div>
    </div>
@stop

@section('script')
    <script src="{{url('/resources/app/pages/js/create-trainee.js')}}" type="text/javascript"></script>
    <script src="{{url('/resources/app/pages/js/request-gym.js')}}" type="text/javascript"></script>
@stop
