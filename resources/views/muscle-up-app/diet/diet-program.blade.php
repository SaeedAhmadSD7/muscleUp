@extends('layouts.backend-main')

@section('title','Diet program')

@section('style-sheet')
    <link href="{{url('/admin-assets/elements/forms.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/widgets/modal/modal.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/helpers/typography.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/elements/buttons.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/themes/components/border-radius.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/helpers/border-radius.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/widgets/touchspin/touchspin.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/widgets/timepicker/timepicker.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/widgets/dropdown/dropdown.css')}}" rel="stylesheet" type="text/css">

    <link href="{{url('/admin-assets/css/diet.css')}}" rel="stylesheet" type="text/css">
@stop

@section('content')
    <div id="page-title">
        <h2>Diet Program</h2>
        <p>Create Diet Program</p>
    </div>

    <div class="panel">
        <div class="panel-body">
            <div class="example-box-wrapper">
                <div class="form-wizard" id="form-wizard-3">
                    <form class="diet-program form-horizontal bordered-row" method="POST" action="{{route('add-diet')}}">
                        {{csrf_field()}}
                        <div class="tab-content">
                            <h3 class="content-box-header bg-default">Diet Program Form</h3>
                            <div class="form-group first-group">
                                <label class="col-sm-3 control-label">Program Name</label>
                                <div class="col-sm-6">
                                    <input class="form-control" type="text" name="name" value="" placeholder="Program Name... (Optional)">
                                </div>
                            </div>

                            <div class="form-group meal_number">
                                <label class="col-sm-3 control-label">Meal Number</label>
                                <div class="col-sm-6">
                                    <div class="input-group">
                                        <input class="form-control meal_number_input" name="number[]" value="" type="text" placeholder="Meal Number...">
                                        <span class="input-group-btn">
                                            <button class="btn btn-blue-alt meal_detail" type="button" disabled><span class="input-group-btn">Add Details</span></button>
                                        </span>
                                    </div>

                                    <div aria-hidden="true" class="modal fade meal_details_modal" role="dialog">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <button aria-hidden="true" class="close" data-dismiss="modal" type="button">&times;</button>
                                                    <h4 class="modal-title">Meal Content</h4>
                                                </div>

                                                <div class="modal-body">
                                                    <div class="container-fluid">
                                                        <div class="meal_container">
                                                            <div class="meal_content-div col-md-12 col-sm-12 col-xs-12">
                                                                <div class="form-group input-group meal_name-div">
                                                                    <input class="form-control meal_name_input" name="number[][content][]" value="" type="text" placeholder="Meal Content...">
                                                                    <span class="input-group-btn">
                                                                        <button class="btn btn-blue-alt meal_name_detail" type="button" disabled><span>Add Details  </span><i class="glyph-icon icon-plus"></i></button>
                                                                    </span>
                                                                </div>
                                                                <div class="form-group meal_name_detail-div">
                                                                    <div class="col-md-10 col-md-offset-1 form-group calories-div">
                                                                        <input class="form-control calories" name="number[][cotent][calories]" placeholder="Calories..." type="number" value="">
                                                                    </div>
                                                                    <div class="col-md-10 col-md-offset-1 form-group time_taken-div">
                                                                        <input class="form-control time_take_input" name="number[][content][taketime]" placeholder="Time to take... (Optional)" type="text" readonly>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="form-group">
                                                            <div class="col-sm-6">
                                                                <button class="btn btn-alt btn-hover btn-primary add_meal_name" type="button"><span>Add Content</span><i class="glyph-icon icon-arrow-up"></i></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="modal-footer">
                                                    <button class="btn btn-default" data-dismiss="modal" type="button">Done</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-sm-6 col-md-offset-3">
                                    <button class="btn btn-alt btn-hover btn-primary add_meal_number" type="button"><span>Add Meal</span> <i class="glyph-icon icon-arrow-up"></i></button>
                                </div>
                            </div>
                        </div>
                        <div class="form-group submit-btn-div">
                            <button class="btn ra-100 btn-default submit-btn" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@stop

@section('script')
    <script src="{{url('/admin-assets/js-core/modernizr.js')}}" type="text/javascript"></script>
    <script src="{{url('/admin-assets/widgets/button/button.js')}}" type="text/javascript"></script>
    <script src="{{url('/admin-assets/widgets/modal/modal.js')}}" type="text/javascript"></script>
    <script src="{{url('/admin-assets/widgets/touchspin/touchspin.js')}}" type="text/javascript"></script>
    <script src="{{url('/admin-assets/widgets/timepicker/timepicker.js')}}" type="text/javascript"></script>
    <script src="{{url('/admin-assets/widgets/dropdown/dropdown.js')}}" type="text/javascript"></script>
    <script src="{{url('/admin-assets/js/diet.js')}}"></script>
@stop
