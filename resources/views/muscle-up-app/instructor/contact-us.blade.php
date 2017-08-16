@extends('layouts.frontend-main')

@section('title','Contact Us')

@section('style-sheet')


@stop
@section('content')
    <div class="container-fluid" style="margin: 0; padding: 0;">
        <section class="add-instructor clearfix">
            <div class="inner">
                <div class="bg-img"></div>
                <div class="t-reg-form">
                    <div class="t-reg-top">
                        <h2><span class="space"></span>Contact Us</h2>
                        <h3>
                            <span class="space"></span> Please fill in all the information and then Contact us.
                        </h3>
                    </div>
                    <div class="reg-form">
                        <form class="add-instructor-form" role="form" method="POST"
                              action="{{route('postContact')}}">
                            {{csrf_field()}}
                            <div class="fields clearfix">
                                <div class="form-group col-md-6 col-sm-12 col-xs-12 text-field">
                                    <input type="text" name="name" value="" placeholder="Name ...">
                                </div>
                                <div class="form-group col-md-6 col-sm-12 col-xs-12 text-field">
                                    <input type="email" name="email" value="" placeholder="Email...">
                                </div>
                                <div class="form-group col-md-12 col-sm-12 col-xs-12 text-field">
                                    <input name="body" placeholder="Body..." maxlength="255">
                                </div>
                            </div>

                            <div class="text-right col-md-12">
                                <button type="submit"><span class="fa fa-angle-right"></span>Contact Us</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
@stop