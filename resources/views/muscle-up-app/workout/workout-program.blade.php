@extends('muscle-up-app.layouts.frontend-main')

@section('title','Workout program')

@section('content')
    <div class="container-fluid" style="margin: 0; padding: 0;">
        <div class="trainee-reg clearfix">
            <div class="inner">

                <div class="bg-img"></div>


                <div class="w-program-form">

                    <div class="reg-form">
                        <form class="program" role="form" method="POST" action="">
                            {{csrf_field()}}
                            <div class="fields clearfix">
                                <section>
                                    <div class="t-reg-top">
                                        <h2><span class="space"></span> Make Program</h2>

                                    </div>


                                    <div class="form-group col-md-12 col-sm-12 col-xs-12 text-field">
                                        <input type="text" name="" value="" placeholder="Enter Program Title ...">
                                    </div>

                                    <div class="form-group col-md-12 col-sm-12 col-xs-12 text-field">
                                        <input type="text" name="" value="" placeholder="Enter Phan Title...">
                                    </div>

                                    <div class="text-right col-md-12">
                                        <button type="button" class="btn-next" ><span class="fa fa-angle-right"></span>Next</button>
                                    </div>
                                </section>

                                <section>
                                    <div class="t-reg-top">
                                        <h2><span class="space"></span> Make Plans</h2>

                                    </div>

                                    <div class="form-group col-md-6 col-md-offset-3 col-sm-12 col-xs-12 text-field">
                                        <input type="text" name="" value="" placeholder="Enter plan Name ...">
                                    </div>


                                    <div class="phase_field">
                                        <div class="form-group col-md-6 col-md-offset-3 col-sm-12 col-xs-12 text-field phase-div">
                                            <input type="number" class="phase" name="" value="" placeholder="Enter Phase name...">
                                        </div>
                                        <div class="form-group col-md-6 col-md-offset-3 col-sm-12 col-xs-12 phase_detail-div">
                                            <button type="button" class="phase_detail"><span class="fa fa-angle-up"></span>Add Detail</button>
                                        </div>
                                    </div>

                                    <div class="text-right col-md-4 col-sm-12 col-xs-12  col-md-offset-3">
                                        <button type="button" class="btn-add"><span class="fa fa-angle-up"></span>Add phase</button>
                                    </div>
                                    <div class="text-right col-md-12">
                                        <button type="button" class="btn-prev"><span class="fa fa-angle-left"></span>Previous</button>
                                        <button type="button" class="btn-next" ><span class="fa fa-angle-right"></span>Next</button>
                                    </div>
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
