@extends('layouts.frontend-main')

@section('title','branch')

@section('content')
    <div class="container-fluid" style="margin: 0; padding: 0;">
        <section class="instructor-reg clearfix">
            <div class="inner">

                <div class="bg-img"></div>


                <div class="t-reg-form">
                    <div class="t-reg-top">
                        <h2><span class="space"></span>Update Branch</h2>
                        <h3><span class="space"></span> Please fill in all the information and then click update Branch.</h3>
                    </div>

                    <div class="reg-form">
                        <form id="contact-form" role="form" method="post" action="{{route('update-branch', $branch->id)}}">
                            {{csrf_field()}}
                            {{ method_field('POST') }}
                            <div class="fields clearfix">
                                <div class="form-group col-md-6 col-sm-12 col-xs-12 text-field">
                                    <input type="text" name="branch_no" value="{{ $branch->branch_no }}" placeholder="Branch No ...">
                                </div>
                                <div class="form-group col-md-6 col-sm-12 col-xs-12 text-field">
                                    <input type="email" name="email" value="{{$branch->email}}" placeholder="Email Address...">
                                </div>
                                <div class="form-group col-md-5 col-sm-10 col-xs-10 number-div">
                                    <input class="phone_number" type="text" name="phone_no" value="{{$branch->phone_no}}" placeholder="Phone Number...">
                                </div>
                                <div class="form-group col-md-6 col-sm-12 col-xs-12 text-field">
                                    <input type="text" name="opening_time" value="{{$branch->opening_time}}" placeholder="Opening Time...">
                                </div>
                                <div class="form-group col-md-6 col-sm-12 col-xs-12 text-field">
                                    <input type="text" name="clossing_time" value="{{$branch->clossing_time}}" placeholder="Clossing Time...">
                                </div>
                            </div>
                            <div class="address-field">
                                <input type="address" name="address" value="{{$branch->address}}" placeholder="Give your Address....." maxlength="250">
                            </div>

                            <div class="text-right col-md-12"><button type="submit"><span class="fa fa-angle-right"></span> Update Branch</button></div>

                        </form>
                    </div>
                </div>

            </div>
        </section>
    </div>
@stop