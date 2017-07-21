@extends('muscle-up-app.layouts.frontend-main')

@section('title','Workout program')

@section('content')
    <div class="container-fluid" style="margin: 0; padding: 0;">
        <div class="trainee-reg clearfix">
            <div class="inner">

                <div class="bg-img"></div>


                <div class="w-program-form">

                    <div class="t-reg-top">
                        <h2><span class="space"></span> Make Your Workout Program </h2>
                    </div>

                    <div class="reg-form">
                        <form class="program" role="form" method="POST" action="">
                            {{csrf_field()}}
                            <div class="fields clearfix">

                                <section>

                                    <div class="form-group col-md-6 col-md-offset-3 col-sm-12 col-xs-12 text-field">
                                        <input type="text" name="" value="" placeholder="Enter Program Name ...">
                                    </div>


                                    <div class="phase_field">
                                        <div class="form-group col-md-6 col-md-offset-3 col-sm-12 col-xs-12 text-field phase-div">
                                            <input type="text" class="phase" name="" value="" placeholder="Enter Phase name...">
                                        </div>
                                        <div class="form-group col-md-6 col-md-offset-3 col-sm-12 col-xs-12 phase_detail-div">
                                            <button type="button" class="phase_detail"><span class="fa fa-angle-up"></span>Add Detail</button>
                                        </div>
                                    </div>

                                    <div class="text-right col-md-3 col-sm-12 col-xs-12  col-md-offset-3">
                                        <button type="button" class="btn-add"><span class="fa fa-angle-up"></span>Add phase</button>
                                    </div>
                                    <div class="text-right col-md-12">
                                        {{--<button type="button" class="btn-prev"><span class="fa fa-angle-left"></span>Previous</button>--}}
                                        <button type="button" class="btn-next" ><span class="fa fa-angle-right"></span>Next</button>
                                    </div>
                                </section>

                                <section>


                                    <div class="day_field">
                                        <div class="form-group col-md-6 col-md-offset-3 col-sm-12 col-xs-12 text-field day-div">
                                            <input type="text" class="day" name="" value="" placeholder="Enter Day Number...">
                                        </div>
                                        <div class="form-group col-md-6 col-md-offset-3 col-sm-12 col-xs-12 day_detail-div">
                                            <button type="button" class="day_detail"><span class="fa fa-angle-up"></span>Add Day Detail</button>
                                        </div>
                                    </div>

                                    <div class="text-right col-md-3 col-sm-12 col-xs-12  col-md-offset-3">
                                        <button type="button" class="btn-add-day"><span class="fa fa-angle-up"></span> Add Day</button>
                                    </div>
                                    <div class="text-right col-md-12">
                                        <button type="button" class="btn-prev"><span class="fa fa-angle-left"></span>Previous</button>
                                        <button type="button" class="btn-next" ><span class="fa fa-angle-right"></span>Next</button>
                                    </div>

                                </section>

                                <section>



                                </section>

                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    </div>
@stop
@section('script')
    <script src="{{url('/assets/js/program.js')}}"></script>
@stop
