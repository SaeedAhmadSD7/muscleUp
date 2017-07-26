@extends('muscle-up-app.layouts.frontend-main')

@section('title','Day')

@section('style-sheet')
    <link href="{{url('/assets/plugins/datetimepicker/css/DateTimePicker.css')}}" rel="stylesheet">

@stop
@section('content')
    <div class="container-fluid" style="margin: 0; padding: 0;">
        <section class="add-instructor clearfix">
            <div class="inner">
                <div class="bg-img"></div>
                <div class="t-reg-form">
                    <div class="t-reg-top">
                        <h2><span class="space"></span>Day</h2>
                        <h3>
                            {{--<span class="space"></span> Please fill in all the information and then click Add Instructor.--}}
                        </h3>
                    </div>
                    <div class="reg-form">
                        <form class="add-instructor-form" role="form" method="POST"
                              action="{{route('day-store')}}">
                            {{csrf_field()}}
                            <div class="fields clearfix">
                                <div class="form-group col-md-6 col-sm-12 col-xs-12 text-field">
                                    <input type="text" name="plan_id" value="" placeholder="Plan_id ...">
                                </div>
                                <div class="form-group col-md-6 col-sm-12 col-xs-12 text-field">
                                    <input type="text" name="number" value="" placeholder="Number ...">
                                </div>
                            <div class="text-right col-md-12">
                                <button type="submit"><span class="fa fa-angle-right"></span> Add Day</button>
                            </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
@stop

@section('script')
    <script src="{{url('/assets/plugins/jquery-validation-1.16.0/js/jquery.validate.js')}}"
            type="text/javascript"></script>
    <script src="{{url('/assets/plugins/datetimepicker/js/DateTimePicker.js')}}" type="text/javascript"></script>
    <script src="{{url('/assets/js/add-instructor.js')}}" type="text/javascript"></script>
@stop