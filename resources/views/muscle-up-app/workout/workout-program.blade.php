@extends('muscle-up-app.layouts.frontend-main')

@section('title','Workout program')

@section('style-sheet')
    <link href="{{url('/admin-assets/widgets/modal/modal.css')}}" rel="stylesheet" type="text/css">
@stop

@section('content')
    <div class="t-reg-form workout-form">
        <div class="reg-form">
            <form class="program" role="form" method="POST" action="">
                {{csrf_field()}}
                <div class="fields clearfix">

                    <section>
                        <div class="t-reg-top workout-top">
                            <h2><span class="space"></span> Make Your Workout Program </h2>
                        </div>
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

                        <button type="button" class="btn" data-target=".bs-example-modal-lg" data-toggle="modal">Large modal</button>
                        <div aria-hidden="true" aria-labelledby="myLargeModalLabel" class="modal fade bs-example-modal-lg" data-keyboard="false" data-backdrop="static" role="dialog" tabindex="-1">

                            <div class="modal-dialog modal-lg">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button aria-hidden="true" class="close" data-dismiss="modal" type="button">&times;</button>
                                            <h2><span class="space"></span> Make Your Workout Program </h2>
                                    </div>
                                    <div class="modal-body">
                                        <section>

                                            <div class="form-group col-md-6 col-md-offset-3 col-sm-12 col-xs-12 text-field">
                                                <input type="text" name="" value="" placeholder="Enter Program Name ...">
                                            </div>

                                            <div class="phase_field">
                                                <div class="form-group col-md-6 col-md-offset-3 col-sm-12 col-xs-12 text-field phase-div">
                                                    <input type="text" class="phase" name="" value="" placeholder="Enter Phase name...">

                                        </section>
                                    </div>


                                    <div class="modal-footer">
                                        <button class="btn btn-default" data-dismiss="modal" type="button">Close</button> <button class="btn btn-primary" type="button">Save changes</button>
                                    </div>
                                </div>
                            </div>
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

                </div>
            </form>
        </div>
    </div>
@stop
@section('script')
    <script src="{{url('/assets/js/program.js')}}"></script>

@stop
