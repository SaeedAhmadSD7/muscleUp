@extends('layouts.frontend-main')

@section('title','Workout Plan')

@section('content')
    <div class="container-fluid" style="margin: 0; padding: 0;">
        <section class="instructor-reg clearfix">
            <div class="inner">

                <div class="bg-img"></div>


                <div class="t-reg-form">
                    <div class="t-reg-top">
                        <h2><span class="space"></span>Workout Plan</h2>
                        <h3><span class="space"></span> Please fill in all the information and then click Add Workout Plan.</h3>
                    </div>

                    <div class="reg-form">
                        <form id="contact-form" role="form" method="get" action="{{route('workout-store')}}">
                            {{csrf_field()}}
                            <div class="fields clearfix">
                                <div class="form-group col-md-6 col-sm-12 col-xs-12 text-field">
                                    <input type="text" name="type" value="" placeholder="Type ...">
                                </div>

                                <div class="form-group col-md-6 col-sm-12 col-xs-12 text-field">
                                    <input type="text" name="exerciseType" value="" placeholder="Exercise Type...">
                                </div>

                                <div class="form-group col-md-6 col-sm-12 col-xs-12 text-field">
                                    <input type="text" name="duration" value="" placeholder="Duration...">
                                </div>
                                <div class="form-group col-md-6 col-sm-12 col-xs-12 text-field">
                                    <input type="experience" name="hours" value="" placeholder="Hours...">
                                </div>

                            </div>

                            <div class="text-right col-md-12"><button type="submit"><span class="fa fa-angle-right"></span> Add Workout Plam</button></div>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    </div>
@stop