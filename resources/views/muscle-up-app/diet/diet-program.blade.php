@extends('layouts.backend-main')
@section('title','Diet program')
@section('style-sheet')
    <style>
        /*.fieldR{*/
        /*display: none;*/
        /*}*/

        .create {
            float: right;
        }

    </style>
@show
@section('content')

    {{--<div class="panel">--}}
    {{--<div class="panel-body">--}}
    {{--<div class="example-box-wrapper">--}}
    {{--<div class="form-wizard" id="form-wizard-3">--}}
    {{--<form class="diet-program form-horizontal bordered-row df" method="POST"--}}
    {{--action="{{route('add-diet')}}">--}}
    {{--{{csrf_field()}}--}}
    {{--<div class="tab-content">--}}
    {{--<h3 class="content-box-header bg-default">Diet Program Form</h3>--}}

    {{--<div class="form-group first-group">--}}
    {{--<label class="col-sm-3 control-label">Program Name</label>--}}

    {{--<div class="col-sm-6">--}}
    {{--<input class="form-control" type="text" name="name" value=""--}}
    {{--placeholder="Program Name... (Optional)">--}}
    {{--</div>--}}
    {{--</div>--}}

    {{--<div class="form-group meal_number">--}}
    {{--<label class="col-sm-3 control-label">Meal Number</label>--}}

    {{--<div class="col-sm-6">--}}
    {{--<div class="input-group">--}}
    {{--<input class="form-control meal_number_input" name="number[]" value=""--}}
    {{--type="text" placeholder="Meal Number...">--}}
    {{--<span class="input-group-btn">--}}
    {{--<button class="btn btn-blue-alt meal_detail" type="button" disabled><span--}}
    {{--class="input-group-btn">Add Details</span></button>--}}
    {{--</span>--}}
    {{--</div>--}}

    {{--<div aria-hidden="true" class="modal fade meal_details_modal" role="dialog">--}}
    {{--<div class="modal-dialog">--}}
    {{--<div class="modal-content">--}}
    {{--<div class="modal-header">--}}
    {{--<button aria-hidden="true" class="close" data-dismiss="modal"--}}
    {{--type="button">&times;</button>--}}
    {{--<h4 class="modal-title">Meal Content</h4>--}}
    {{--</div>--}}

    {{--<div class="modal-body">--}}
    {{--<div class="container-fluid">--}}
    {{--<div class="meal_container">--}}
    {{--<div class="meal_content-div col-md-12 col-sm-12 col-xs-12">--}}
    {{--<div class="form-group input-group meal_name-div">--}}
    {{--<input class="form-control meal_name_input"--}}
    {{--name="number[][meal_name]" value=""--}}
    {{--type="text" placeholder="Meal Content...">--}}
    {{--<span class="input-group-btn">--}}
    {{--<button class="btn btn-blue-alt meal_name_detail"--}}
    {{--type="button" disabled>--}}
    {{--<span>Add Details  </span><i--}}
    {{--class="glyph-icon icon-plus"></i>--}}
    {{--</button>--}}
    {{--</span>--}}
    {{--</div>--}}
    {{--<div class="form-group meal_name_detail-div">--}}
    {{--<div class="col-md-10 col-md-offset-1 form-group calories-div">--}}
    {{--<input class="form-control calories"--}}
    {{--name="number[][calories]"--}}
    {{--placeholder="Calories..." type="number"--}}
    {{--value="">--}}
    {{--</div>--}}
    {{--<div class="col-md-10 col-md-offset-1 form-group time_taken-div">--}}
    {{--<input class="form-control time_take_input"--}}
    {{--name="number[][taketime]"--}}
    {{--placeholder="Time to take... (Optional)"--}}
    {{--type="text" readonly>--}}
    {{--</div>--}}
    {{--</div>--}}
    {{--</div>--}}
    {{--</div>--}}
    {{--<div class="form-group">--}}
    {{--<div class="col-sm-6">--}}
    {{--<button class="btn btn-alt btn-hover btn-primary add_meal_name"--}}
    {{--type="button"><span>Add Content</span><i--}}
    {{--class="glyph-icon icon-arrow-up"></i>--}}
    {{--</button>--}}
    {{--</div>--}}
    {{--</div>--}}
    {{--</div>--}}
    {{--</div>--}}

    {{--<div class="modal-footer">--}}
    {{--<button class="btn btn-default" data-dismiss="modal" type="button">--}}
    {{--Done--}}
    {{--</button>--}}
    {{--</div>--}}
    {{--</div>--}}
    {{--</div>--}}
    {{--</div>--}}
    {{--</div>--}}
    {{--</div>--}}
    {{--<div class="form-group">--}}
    {{--<div class="col-sm-6 col-md-offset-3">--}}
    {{--<button class="btn btn-alt btn-hover btn-primary add_meal_number" type="button">--}}
    {{--<span>Add Meal</span> <i class="glyph-icon icon-arrow-up"></i></button>--}}
    {{--</div>--}}
    {{--</div>--}}
    {{--</div>--}}
    {{--<div class="form-group submit-btn-div">--}}
    {{--<button class="btn ra-100 btn-default submit-btn" type="submit">Submit</button>--}}
    {{--</div>--}}
    {{--</form>--}}
    {{--</div>--}}
    {{--</div>--}}
    {{--</div>--}}
    {{--</div>--}}

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
                    <input class="form-control" type="number" id="quantity" name="quantity[]"
                           placeholder="Qrt:" style="width:60px;">
                </td>
                <td id="caloryRow">
                        <input class="form-control" type="text" id="calories" name="calories[]"
                               placeholder="Cal" style="width:60px;" readonly>
                </td>
                <td>
                        <input class="form-control time_take_input" type="text" name="duration[]"
                               placeholder="Time" style="width:60px" readonly>
                </td>
                <td>
                             <button class="remove_row btn btn-danger" type="button"><span
                                class="glyphicon glyphicon-remove-sign"></span></button>
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
                <form class="form-group diet-program form-horizontal bordered-row" id="form-field" method="post" action="{{route('add-diet')}}">
                    {{csrf_field()}}
                    <div class="tab-content">
                        <div class="form-wizard" id="form-wizard-3">
                            <div class="form-group first-group">
                                <label class="col-sm-3 control-label" for="name">Program Name</label>

                                <div class="col-sm-6">
                                    <input class="form-control" type="text" name="name" value=""
                                           placeholder="Program Name... (Optional)">
                                </div>
                            </div>
                            <div class="form-group meal_number">
                                <label class="col-sm-3 control-label" for="radio">Status:</label>

                                <div class="col-sm-6">
                                    <div class="input-group">
                                        <div id="radio">
                                            <label for="no">No</label>
                                            <input id="no" type="radio" name="status" value="No">
                                            <label for="yes">Yes</label>
                                            <input id="yes" type="radio" name="status" value="Yes"><br>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group meal_number">
                                <label class="col-sm-3 control-label" for="description">Description:</label>

                                <div class="col-sm-6">
                                    <div class="input-group">
                                        <textarea rows="5" cols="20" class="form-control" id="description"
                                                  name="description"></textarea><br>
                                    </div>
                                </div>
                            </div>
                            <hr>
                            <h2>Meal Details:</h2>
                            <table id="assignedTable" cellpadding="0" cellspacing="0" border="0"
                                   class="table table-bordered">
                                <thead>
                                <tr>
                                    <th style="width: 20px;">Serial #</th>
                                    <th style="width: 20px;">Meal Number</th>
                                    <th>Food Name</th>
                                    <th style="width: 60px;">Quantity</th>
                                    <th style="width: 60px;">Calories</th>
                                    <th style="width: 60px;">Duration</th>
                                    <th style="width: 60px; ">Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr id="tmpRow" class="fieldR">
                                    <td style='width:20px;text-align:center;'><span class="sr">1</span></td>
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
                                        <input class="form-control" type="number" id="quantity" name="quantity[]"
                                               placeholder="Qrt:" style="width:60px;">
                                    </td>
                                    <td id="caloryRow">
                                        <input class="form-control" type="text" id="calories" name="calories[]"
                                               placeholder="Cal" style="width:60px;" readonly>
                                    </td>
                                    <td>
                                        <input class="form-control time_take_input" type="text" name="duration[]"
                                               placeholder="Time" style="width:60px" readonly>
                                    </td>
                                    <td>
                                        <button class="remove_row btn btn-danger" type="button"><span
                                                    class="glyphicon glyphicon-remove-sign"></span></button>
                                    </td>
                                </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th colspan="7">
                                            <div class="create">
                                                <button type="button" id="assign" class="btn btn-primary"><span class=" glyphicon glyphicon-plus"></span></button>
                                            </div>
                                        </th>
                                    </tr>
                                </tfoot>
                            </table>
                            <div style="float:right; margin-right: 300px;">
                                <input type="submit" value="Submit" class="btn btn-success">
                            </div>
                        </div>
                      </div>
                </form>
            </div>
        </div>
    </div>

@stop
