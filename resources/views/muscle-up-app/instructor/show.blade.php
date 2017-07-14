@extends('muscle-up-app.layouts.frontend-main')

@section('title','Show Instructor')

@section('style-sheet')
    <link href="{{url('/assets/plugins/datetimepicker/css/DateTimePicker.css')}}" rel="stylesheet">

@stop
@section('content')
    <div class="container-fluid" style="margin: 0; padding: 0;">
        <section class="instructor-reg clearfix">
            <div class="inner">

                <div class="bg-img"></div>


                <div class="t-reg-form">
                    <div class="t-reg-top">
                        <h2><span class="space"></span>See Instructor</h2>
                        <h3><span class="space"></span> Please fill in all the information and then click Show Instructor.</h3>
                    </div>

                    <div class="reg-form">
                        <form id="contact-form" role="form" method="get" action="{{route('instructor-show')}}">
                            {{csrf_field()}}
                            <div class="fields clearfix">

                            </div>
                            <div class="text-right col-md-12"><button type="submit"><span class="fa fa-angle-right"></span> Add Instructor</button></div>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    </div>
@stop

@section('script')
    <script src="{{url('/assets/plugins/datetimepicker/js/DateTimePicker.js')}}" type="text/javascript"></script>
    <script src="{{url('add-traineeadd-trainee.js type="text/javascript"></script>
@stop