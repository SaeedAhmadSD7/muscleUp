@extends('layouts.backend-main')

@section('title','Branches list')

@section('style-sheet')
    <link href="{{url('/admin-assets/icons/iconic/iconic.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/assets/modal/modal.css')}}" rel="stylesheet" type="text/css">
@stop

@section('sidebar_content')
    @include('includes.backend._leftBarAdmin')
@stop

@section('page-heading')
    <h2>Branches List</h2>
    <p>List of Branches Added</p>
@stop



{{--{{ dd($gyms) }}--}}

@section('content')
    <div class="row mailbox-wrapper">
        <div class="col-md-12">
            <div class="content-box">

                <button class="btn btn-default" data-toggle="modal" data-target=".bs-example-modal-lg">
                    modal for user profile
                    <div class="ripple-wrapper"></div>
                </button>
                {{--<div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" style="display: none;">--}}
                    {{--<div class="modal-dialog modal-lg">--}}
                        {{--<div class="modal-content">--}}
                            {{--<div class="modal-header">--}}
                                {{--<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>--}}
                                {{--<h4 class="modal-title">User Profile Update Modal</h4></div>--}}
                            {{--<div class="modal-body">--}}

                                {{--<div class="content-box">--}}
                                    {{--<div class="content-box-wrapper">--}}

                                        {{--<form class="form-horizontal bordered-row add-trainee-form" role="form" method="post" action="{{route('user.update',['id'=>$user->id])}}"  enctype="multipart/form-data">--}}
                                            {{--{{csrf_field()}}--}}

                                            {{--<input type="hidden" name="_method" value="put">--}}

                                            {{--<input type="hidden" id="profile_img" name="profile_img" />--}}
                                            {{--<div class="tab-pane active pL0" id="tab2">--}}
                                                {{--<div class="col-sm-12 col-md-6">--}}
                                                    {{--<div class="form-group">--}}
                                                        {{--<label class="col-md-4 control-label">Enter First Name:</label>--}}
                                                        {{--<div class="col-md-8">--}}
                                                            {{--<input class="form-control" type="text" name="first_name" value="{{$user->first_name}}" placeholder="First Name ...">--}}
                                                        {{--</div>--}}
                                                    {{--</div>--}}
                                                    {{--<div class="form-group">--}}
                                                        {{--<label class="col-md-4 control-label">Enter last Name:</label>--}}
                                                        {{--<div class="col-md-8">--}}
                                                            {{--<input class="form-control" type="text" name="last_name" value="{{$user->last_name}}" placeholder="Last Name...">--}}
                                                        {{--</div>--}}
                                                    {{--</div>--}}
                                                    {{--<div class="form-group">--}}
                                                        {{--<label class="col-md-4 control-label">Email Address:</label>--}}
                                                        {{--<div class="col-md-8">--}}
                                                            {{--<input class="form-control" type="email" name="email" value="{{$user->email}}" placeholder="Email Address...">--}}
                                                        {{--</div>--}}
                                                    {{--</div>--}}
                                                    {{--<div class="form-group">--}}
                                                        {{--<label class="col-md-4 control-label">Date of birth:</label>--}}
                                                        {{--<div class="col-md-8">--}}
                                                            {{--<input class="form-control" type="text" data-field="date" data-format="yyyy-MM-dd" name="dob" value="{{$user->dob}}" placeholder="Date of Birth..." readonly>--}}
                                                            {{--<div class="btn-date"></div>--}}

                                                        {{--</div>--}}
                                                    {{--</div>--}}
                                                    {{--<div class="form-group">--}}
                                                        {{--<label class="col-md-4 control-label">Gender</label>--}}
                                                        {{--<div class="col-md-8">--}}
                                                            {{--<label class="radio-inline">--}}
                                                                {{--<input id="" name="gender" type="radio" value="male" {{($user->gender == 'male') ? 'checked' : ''}}> Male--}}
                                                            {{--</label>--}}
                                                            {{--<label class="radio-inline">--}}
                                                                {{--<input id="" name="gender" type="radio" value="female" {{($user->gender == 'female') ? 'checked' : ''}}> Female--}}
                                                            {{--</label>--}}
                                                        {{--</div>--}}
                                                    {{--</div>--}}


                                                    {{--<div class="form-group">--}}
                                                        {{--<label class="col-md-4 control-label">Country</label>--}}
                                                        {{--<div class="col-md-8">--}}
                                                            {{--<select class="form-control" name="country">--}}
                                                                {{--<option>{{$user->country}}</option>--}}
                                                                {{--@foreach($countries as $country)--}}
                                                                    {{--<option data-code="{{$country['code']}}" value="{{$country['name']}}" data-dialcode="{{$country['dial_code']}}">{{$country['name']}}</option>--}}
                                                                {{--@endforeach--}}
                                                            {{--</select>--}}
                                                        {{--</div>--}}
                                                    {{--</div>--}}
                                                    {{--<div class="form-group">--}}
                                                        {{--<label class="col-md-4 control-label">City</label>--}}
                                                        {{--<div class="col-md-8">--}}
                                                            {{--<input class="form-control" type="text" name="city" value="{{$user->city}}" placeholder="City...">--}}
                                                        {{--</div>--}}
                                                    {{--</div>--}}

                                                    {{--<div class="form-group">--}}
                                                        {{--<label class="col-md-4 control-label">Phone number:</label>--}}
                                                        {{--<div class="col-md-1">--}}
                                                            {{--<input class="form-control dial-code" type="text" name="dial_code" value="{{$user->dial_code}}" placeholder="+1..." readonly>--}}
                                                        {{--</div>--}}
                                                        {{--<div class="col-md-6">--}}
                                                            {{--<input class="form-control phone_number" type="text" name="phone_number" value="{{$user->phone_number}}" placeholder="Phone Number..." maxlength="15">--}}
                                                        {{--</div>--}}
                                                    {{--</div>--}}
                                                    {{--<div class="form-group">--}}
                                                        {{--<label class="col-md-4 control-label">Address</label>--}}
                                                        {{--<div class="col-md-7">--}}
                                                            {{--<input class="form-control " placeholder="Address..." value="{{$user->address}}" name="address" maxlength="1000">--}}

                                                        {{--</div>--}}
                                                    {{--</div>--}}

                                                {{--</div>--}}

                                                {{--<div class="col-sm-12 col-md-6">--}}
                                                    {{--<div class="form-group">--}}
                                                        {{--<label for="col-md-4 control-label">Profile Photo</label>--}}
                                                        {{--<div class="file-loading col-md-7">--}}
                                                            {{--<input type="file" id="profilePhoto" name="fileData" >--}}
                                                        {{--</div>--}}
                                                    {{--</div>--}}

                                                {{--</div>--}}

                                            {{--</div>--}}
                                            {{--<div class="tab-pane active pL0" id="tab2">--}}
                                                {{--<div class="col-sm-12 col-md-6">--}}

                                                {{--</div>--}}
                                            {{--</div>--}}
                                            {{--<div class="clear"></div>--}}
                                            {{--<div class="form-group col-sm-12">--}}
                                                {{--<div class="col-sm-12 taR">--}}
                                                    {{--<button type="submit" class="btn btn-primary">Update</button>--}}
                                                    {{--<button type="button" class="btn btn-primary" onclick="goTo({{'/'}})">Cancel</button>--}}
                                                {{--</div>--}}
                                            {{--</div>--}}
                                            {{--                    {!! Form::close() !!}--}}
                                        {{--</form>--}}




                                        {{--<p>Large modal content here ...</p>--}}


                            {{--</div><div class="modal-footer">--}}
                                {{--<button type="button" class="btn btn-default" data-dismiss="modal">Close<div class="ripple-wrapper">--}}
                                        {{--<div class="ripple ripple-on ripple-out" style="left: 26.3375px; top: 13.6px; background-color: rgb(43, 47, 51); transform: scale(7.75);">--}}
                                        {{--</div><div class="ripple ripple-on ripple-out" style="left: 27.3375px; top: 13.6px; background-color: rgb(43, 47, 51); transform: scale(7.75);">--}}
                                        {{--</div><div class="ripple ripple-on ripple-out" style="left: 36.3375px; top: 20.6px; background-color: rgb(43, 47, 51); transform: scale(7.75);">--}}
                                        {{--</div></div></button> <button type="button" class="btn btn-primary">Save changes<div class="ripple-wrapper"></div>--}}
                                {{--</button>--}}
                            {{--</div></div>--}}
                    {{--</div>--}}
                {{--</div>--}}
                    {{--</div>--}}
                {{--</div>--}}



                <table class="table table-hover text-center">
                    <thead>
                    <tr>
                        <th class="email-title">Serial</th>
                        <th class="email-body">Name</th>
                        {{--<th class="email-title">Company</th>--}}
                        {{--<th class="email-title">Admin</th>--}}
                        <th>Date Added</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <?php $counter = 1 ?>
                    @foreach($gyms as $gym)
                        <tr>
                        {{--<tr id="{{$gym->id}}">--}}
                            <td>{{$counter}}</td>
                            <td class="email-title">{{$gym->title}}</td>
                            {{--{{dd($gym->gym)}}--}}
{{--                            <td class="email-body">{{$gym->gym->title}}</td>--}}
                            <td class="date">{{$gym->created_at}}</td>
{{--                            <td class="date">{{$gym->updated_at}}</td>--}}
                            {{--<td><a href="{{route('message-detail',$gym->id)}}" class="glyph-icon icon-iconic-right-circle"></a></td>--}}
{{--                            <td><a href="{{route('company.destroy',$gym->id)}}" class="glyph-icon icon-iconic-cancel-circle"></a></td>--}}
                            <td>
                                <ul class="">
                                    <li class="dropdown">
                                        <a href="javascript:void(0);" class="dropdown-toggle " data-toggle="dropdown">
                                            <i class="glyphicon glyphicon-th-list"></i>
                                        </a>
                                        <ul class="dropdown-menu dropdown-menu-right">
                                            {{--<li><a class="create_modal_btn" href="{{route('branch.destroy',$gym->id)}}"><i class="glyphicon glyphicon-eye-open"></i> Delete </a></li>--}}

                                            <li>
                                                {!! Form::open(array('id'=>"deleteBranch",'route' => array('branch.destroy', $gym->id), 'method' => 'delete')) !!}
                                                <input type="hidden" value="{{$gym->id}}">
                                                <button class=" btn create_modal_btn " type="submit">
                                                <i class="glyphicon glyphicon-question-sign"></i> Delete
                                                </button>
                                                {!! Form::close() !!}

                                            </li>

                                            <li>
                                                {!! Form::open(array('id'=>"editBranch",'route' => array('branch.edit', $gym->id), 'method' => 'get')) !!}
                                                <input type="hidden" value="{{$gym->id}}">
                                                <button class="btn create_modal_btn"  type="submit">
                                                <i class="glyphicon glyphicon-ban-circle"></i> Edit
                                                </button>
                                                {!! Form::close() !!}
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </td>

{{--                            <td><a href="{{route('company.destroy',$gym->id)}}" class="glyph-icon icon-iconic-cancel-circle"></a></td>--}}
                        </tr>
                        <?php $counter++ ?>
                    @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
@stop

@section('script')
    <script src="{{url('/assets/modal/modal.js')}}" type="text/javascript"></script>
    <script>


        $(document).ready(function () {
            /* Datatables basic */
            $('#datatable-example').dataTable();

            //*** trainee table detail action dropdown
            $('.dropdown-toggle').click(function (e) {
                e.preventDefault();
                $(this).siblings('.dropdown-menu.dropdown-menu-right').toggle('show').show();
                e.stopImmediatePropagation();
            })
        });

//        $("#deleteBranch").click(function() {
//            $("#deleteBranch").submit();
//        });
//
//        $("#editBranch").click(function() {
//            $("#editBranch").submit();
//        });



    </script>
@stop
