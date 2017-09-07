@extends('layouts.backend-main')

@section('title','Diet program')

@section('style-sheet')
    <link href="{{url('/admin-assets/helpers/typography.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/elements/buttons.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/themes/components/border-radius.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/helpers/border-radius.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/elements/forms.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/widgets/timepicker/timepicker.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/elements/tables.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/css/diet.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/icons/typicons/typicons.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/icons/elusive/elusive.css')}}" rel="stylesheet" type="text/css">
@stop

@section('content')
<table id="templete">
    <tfoot>
        <div class="tab-content">
            <tr style="display: none;"  id="tmpRow" class="fieldR">
                <td style='width:20px;text-align:center;'><span class="sr"></span></td>
                <td>
                    <select class="form-control" name="meal_id[]" id="meal_no">
                        <option value="0">Select Meal:</option>
                        @foreach($meals as $meal)
                            <option value="{{$meal->id}}">{{$meal->name}}</option>
                        @endforeach
                    </select>
                </td>
                <td>
                    <select class="form-control food_name" id="food_name" name="food_id[]">
                        <option value="0">Select Food:</option>
                        @foreach($foods as $food)
                            <option data-calories="{{$food->calories}}" value="{{$food->id}}">{{$food->name}}</option>
                        @endforeach
                    </select>
                </td>
                <td id="qtyRow">
                    <input class="form-control" type="number" id="quantity" name="quantity[]" placeholder="Qrt:" style="width:60px;">
                </td>
                <td id="caloryRow">
                    <input class="form-control" type="text" id="calories" name="calories[]" placeholder="Cal" style="width:60px;" readonly>
                </td>
                <td>
                    <input class="form-control time_take_input" type="text" name="duration[]" placeholder="Time" style="width:60px" readonly>
                </td>
                <td>
                    <button class="remove_row btn btn-danger" type="button"><span class="glyphicon icon-typicons-cancel"></span></button>
                </td>
            </tr>
        </div>
    </tfoot>

</table>

    <div id="page-title">
        <h2>Diet Program</h2>
        <p>Create Diet Program</p>
    </div>

    <div class="panel">
        <div class="panel-body">
            <div class="example-box-wrapper">
                <form class="form-group diet-program form-horizontal bordered-row" id="form-field" method="post" action="{{route('update-diet')}}">
                    {{csrf_field()}}
                    <div class="tab-content">
                        <div class="form-wizard" id="form-wizard-3">
                            <div class="form-group first-group">
                                <label class="col-sm-3 control-label" for="name">Program Name</label>

                                <div class="col-sm-6">
                                    <input name="id" value="{{$dietPlan->id}}" type="hidden">
                                    <input class="form-control" type="text" name="name" value="{{$dietPlan->name}}" placeholder="Program Name...">
                                </div>
                            </div>
                            <div class="form-group meal_number">
                                <label class="col-sm-3 control-label" for="radio">Status:</label>

                                <div class="col-sm-6">
                                    <div class="input-group">
                                        <div id="radio">
                                            <label for="no">No</label><input id="no" type="radio" name="status" value="No" @if($dietPlan->status=='No') checked="checked" @endif>
                                            <label for="yes">Yes</label><input id="yes" type="radio" name="status" value="Yes" @if($dietPlan->status=='Yes') checked="checked" @endif><br>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group meal_number">
                                <label class="col-sm-3 control-label" for="description">Description:</label>

                                <div class="col-sm-6">
                                    <div class="input-group">
                                        <textarea rows="5" cols="20" class="form-control" id="description" name="description">{{$dietPlan->description}}</textarea><br>
                                    </div>
                                </div>
                            </div>
                            <hr>
                            <h2>Meal Details:</h2>
                            <table id="assignedTable" cellpadding="0" cellspacing="0" border="0" class="table table-bordered">
                                <thead>
                                <tr>
                                    <th style="width: 20px;">Serial</th>
                                    <th>Meal Number</th>
                                    <th>Food Name</th>
                                    <th>Quantity</th>
                                    <th>Calories</th>
                                    <th>Duration</th>
                                    <th style="width: 60px; ">Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                <?php $count=1;?>
                                @foreach($dietPlanDetails as $dietPlanDetail)
                                    @include('muscle-up-app.diet.partials._diet-program')
                                    <?php $count++; ?>
                                @endforeach
                                </tbody>

                                <tfoot>
                                    <tr>
                                        <th colspan="7">
                                            <div class="create">
                                                <button type="button" id="assign" class="btn btn-primary"><span class=" glyphicon icon-typicons-plus"></span></button>
                                            </div>
                                        </th>
                                    </tr>
                                </tfoot>
                            </table>
                            <div style="float:right; margin-right: 300px;">
                                <input type="submit" value="Update" class="btn btn-success">
                            </div>
                        </div>
                      </div>
                </form>
            </div>
        </div>
    </div>
@stop

@section('script')
    <script src="{{url('/admin-assets/widgets/button/button.js')}}" type="text/javascript"></script>
    <script src="{{url('/admin-assets/widgets/timepicker/timepicker.js')}}" type="text/javascript"></script>
    <script src="{{url('/admin-assets/js/diet.js')}}"></script>
@stop
