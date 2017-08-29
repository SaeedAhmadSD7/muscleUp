@extends('layouts.frontend-main')

@section('title','Delete Branch')

@section('content')
    <div class="container-fluid" style="margin: 0; padding: 0;">
        <section class="instructor-reg clearfix">
            <div class="inner">

                <div class="bg-img"></div>


                <div class="t-reg-form">
                    <div class="t-reg-top">
                        <h2><span class="space"></span>Delete Branch</h2>
                        <h3><span class="space"></span> Please fill in all the information and then click Delete Branch.</h3>
                    </div>
                    {{--@if(Session::has('Success'))--}}
                    {{--<div class="alert alert-success" role="alert">--}}
                    {{--<strong>Success:</strong>{{Session::get('Success')}}--}}
                    {{--</div>--}}

                    {{--@endif--}}

                    <div class="reg-form">
                        <form id="contact-form" role="form" method="post" action="{{route('delete-branch', $branch->id)}}">
                            {{csrf_field()}}
                            <div class="fields clearfix">
                                <div class="form-group col-md-6 col-sm-12 col-xs-12 text-field">
                                    <input type="text" name="branch_no" value="{{ $branch->branch_no }}" placeholder="First Name ...">
                                </div>

                                <div class="form-group col-md-6 col-sm-12 col-xs-12 text-field">
                                    <input type="text" name="phone_no" value="{{ $branch->phone_no }}" placeholder="Last Name...">
                                </div>

                                <div class="form-group col-md-6 col-sm-12 col-xs-12 text-field">
                                    <input type="email" name="email" value="{{$branch->email}}" placeholder="Email Address...">
                                </div>
                                <div class="form-group col-md-6 col-sm-12 col-xs-12 text-field">
                                    <input type="text" name="opening_time" value="{{$branch->opening_time}}" placeholder="Total Experience...">
                                </div>
                                <div class="form-group col-md-5 col-sm-10 col-xs-10 number-div">
                                    <input class="phone_number" type="text" name="clossing_time" value="{{$branch->clossing_time}}" placeholder="Phone Number...">
                                </div>
                            </div>
                            <div class="address-field">
                                <textarea name="address" value="{{$branch->address}}" placeholder="Give your Address....." maxlength="250"></textarea>
                            </div>
                            <div class="form-group col-md-6 col-sm-12 col-xs-12 Gender ">
                                <div class="col-md-3 col sm-4 col-xs-4 gender-title">
                                    <p class="title">Gender : </p>
                                </div>
                                <div class="col-md-9 col-sm-8 col-xs-8">
                                    <div class="btn-group" data-toggle="buttons">
                                        <label class="btn"><input type="radio" name='gender' checked><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> Male</span></label>
                                        <label class="btn"><input type="radio" name='gender'><i class="fa fa-circle-o fa-x"></i><i class="fa fa-dot-circle-o fa-x"></i><span> Female</span></label>
                                    </div>
                                </div>

                            </div>
                            <div class="text-right col-md-12"><button type="submit"><span class="fa fa-angle-right"></span> Delete Instructor</button></div>

                        </form>
                    </div>
                </div>

            </div>
        </section>
    </div>
@stop