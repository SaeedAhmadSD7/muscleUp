@extends('layouts.backend-main')

@section('title','Add Branch')

@section('content')
    <div class="panel">
        <div class="panel-body">
            <h3 class="title-hero">ADD Branch</h3>
            <h4>Please fill in all the information and then click Add Branch.</h4>
            <div class="example-box-wrapper">
                <form class="form-horizontal bordered-row add-trainee-form" role="form" method="POST" action="{{route('branch-store')}}">
                    {{csrf_field()}}
                    <div class="form-group">
                        <label class="col-sm-3 control-label">Branch No:</label>
                        <div class="col-sm-4">
                            <input class="form-control" type="text" name="branch_no" value="" placeholder="Branch No ...">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label">Email Address:</label>
                        <div class="col-sm-4">
                            <input class="form-control" type="email" name="email" value="" placeholder="Email Address...">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label">Phone number:</label>
                        <div class="col-sm-4">
                            <input class="form-control phone_number" type="text" name="phone_no" value="" placeholder="Phone Number..." maxlength="15">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label">Opening Time:</label>
                        <div class="col-sm-4">
                            <input class="form-control" type="text" name="opening_time" value="" placeholder="Opening Time...">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label">Clossing Time:</label>
                        <div class="col-sm-4">
                            <input class="form-control" type="text" name="clossing_time" value="" placeholder="Clossing Time...">
                        </div>
                    </div>

                    <div class="form-group">
                        <label class="col-sm-3 control-label">Address</label>
                        <div class="col-sm-4">
                            <textarea class="form-control " name="address" placeholder="Address..." maxlength="255"></textarea>
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
