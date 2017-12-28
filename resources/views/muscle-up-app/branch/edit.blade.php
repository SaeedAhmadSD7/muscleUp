@extends('layouts.backend-main')

@section('title','Branch Info')

@section('title')
    Gym Dashboard
@stop

@section('user-name')
    {{get_auth_user_full_name()}}
@stop

@section('page-heading')
    <h2>My Branch Info</h2>
    <p>Change the information and then click Update.</p>
@stop

@section('content')
    <div class="panel">

        <div class="panel-body">
            <h3 class="content-box-header bg-google">Basic Info</h3>
            <div class="example-box-wrapper">
                <input type="hidden" value="1" id="test">

                <form class="form-horizontal bordered-row add-trainee-form" role="form" method="post" action="{{route('branch.update',['id'=>$branch->id])}}"  enctype="multipart/form-data">
                    {{csrf_field()}}

                    <input type="hidden" name="_method" value="put">

                    <input type="hidden" id="profile_img" name="profile_img" />
                    <div class="tab-pane active pL0" id="tab2">
                        <div class="col-sm-12 col-md-6">
                            <div class="form-group">
                                <label class="col-md-4 control-label">Name:</label>
                                <div class="col-md-8">
                                    <input class="form-control" type="text" name="title" value="{{$branch->title}}" placeholder="Branch Name ...">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-md-4 control-label">Phone:</label>
                                <div class="col-md-8">
                                    <input class="form-control phone_number" type="text" name="phone_number" value="{{$branch->phone_number}}" placeholder="Branch Phone Number..." maxlength="15">
                                </div>
                            </div>



                            <div class="form-group">
                                <label for="" class="col-md-4 control-label">Opening Time:</label>
                                <div class="col-md-3"><div class="bootstrap-timepicker dropdown">
                                        <input name="opening_time" placeholder="08:00:00" class="timepicker-example form-control" value="{{$branch->opening_time}}" type="text">
                                    </div>
                                </div>
                                <label for="" class="col-md-2 control-label">Closing:</label>

                                <div class="col-md-3"><div class="bootstrap-timepicker dropdown">
                                        <input name="closing_time" placeholder="23:00:00" class="timepicker-example form-control" value="{{$branch->closing_time}}" type="text">
                                    </div>
                                </div>
                            </div>

                            {{--<div class="form-group">--}}
                                {{--<label for="" class="col-md-4 control-label">Clossing Time:</label>--}}
                                {{--<div class="col-md-8"><div class="bootstrap-timepicker dropdown">--}}
                                        {{--<input name="closing_time" placeholder="23:00:00" class="timepicker-example form-control" type="text">--}}
                                    {{--</div>--}}
                                {{--</div>--}}
                            {{--</div>--}}


                        </div>

                        <div class="col-sm-12 col-md-6">

                            <div class="form-group">
                                <label class="col-md-4 control-label">Country</label>
                                <div class="col-md-8">
                                    <select class="form-control" name="country">
                                        <option>{{$branch->country}}</option>
                                        @foreach($countries as $country)
                                            <option data-code="{{$country['code']}}" value="{{$country['name']}}" data-dialcode="{{$country['dial_code']}}">{{$country['name']}}</option>
                                        @endforeach
                                    </select>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-md-4 control-label">City</label>
                                <div class="col-md-8">
                                    <input class="form-control" type="text" name="city" value="{{$branch->city}}" placeholder="City...">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-md-4 control-label">Address</label>
                                <div class="col-md-8">
                                    <textarea name="address" placeholder="Address of the Branch" rows="3" class="form-control textarea-counter">{{$branch->address}}</textarea>
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
                    <div class="form-group col-sm-12">
                        <div class="col-sm-12 taR">
                            <button type="submit" class="btn btn-primary">Update</button>
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
    <script>
        window.previewImage = "{{url('/resources/app/images/default.jpg')}}";
        window.uploadProfilePic = "{{route('uploadProfilePic')}}";
        window.removeUploadedProfilePic = "{{route('removeUploadedProfilePic')}}";
    </script>
    <script src="{{url('/resources/app/pages/js/create-trainee.js')}}" type="text/javascript"></script>
    <script src="{{url('/resources/app/pages/js/request-gym.js')}}" type="text/javascript"></script>
@stop
