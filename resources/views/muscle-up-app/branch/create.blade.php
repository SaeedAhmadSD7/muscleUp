@extends('layouts.backend-main')

@section('title','branch')


@section('sidebar_content')
    @include('includes.backend._leftBarAdmin')
@stop

@section('page-heading')

    <h2>ADD New Branch</h2>
    <p>Please fill in all the information and then click on Add Company.</p>
@stop
@section('content')
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

                <form class="form-horizontal bordered-row add-trainee-form" role="form" method="POST" @if($branch == "") action="{{route('branch.store')}}" @else action="{{route('branch.update',['id'=>$post->id])}}" @endif>
                    {{csrf_field()}}

                    <div class="tab-pane active" id="tab2"  >

                        <div class="content-box">
                            <h3 class="content-box-header bg-white-opacity">Branch Info</h3>
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
                                    <label class="col-sm-3 control-label">Address</label>
                                    <div class="col-sm-4">
                                        <textarea name="branch_address" placeholder="Address of the Branch" rows="3" class="form-control textarea-counter"></textarea>
                                        <div class="character-remaining clear input-description">1000 characters left</div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="" class="col-sm-3 control-label">Opening Time:</label>
                                    <div class="col-sm-4"><div class="bootstrap-timepicker dropdown">
                                            <input name="opening_time" placeholder="08:00:00" class="timepicker-example form-control" type="text">
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="" class="col-sm-3 control-label">Clossing Time:</label>
                                    <div class="col-sm-4"><div class="bootstrap-timepicker dropdown">
                                            <input name="closing_time" placeholder="23:00:00" class="timepicker-example form-control" type="text">
                                        </div>
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
                            <button type="submit" class="btn btn-primary">Add Branch</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
@stop

@section('script')

    <script src="{{url('/assets/js/branch.js')}}" type="text/javascript"></script>

@stop
