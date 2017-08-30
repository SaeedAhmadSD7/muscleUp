@extends('layouts.backend-main')
@section('title','Add Phase')
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

    <table id="templete">
        <tfoot>
        <div class="tab-content">
            <tr style="display: none;"  id="tmpRow" class="fieldR">
                <td style='width:20px;text-align:center;'><span class="sr"></span></td>
                <td>
                    <select class="form-control" name="day_id[]" id="">
                        <option value="0">Select Day:</option>
                        @foreach($days as $day)
                            <option value="{{$day->id}}">{{$day->title}}</option>
                        @endforeach
                    </select>
                </td>
                <td>
                    <select class="form-control food_name" id="" name="wbs_id[]">
                        <option value="0">Select Title:</option>
                        @foreach($Wbs as $wbs)
                            <option value="{{$wbs->id}}">{{$wbs->title}}</option>
                        @endforeach
                    </select>
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
        <h2>Add Phase</h2>

        <p>Create Phase</p>
    </div>

    <div class="panel">
        <div class="panel-body">
            <div class="example-box-wrapper">
                <form class="form-group diet-program form-horizontal bordered-row" id="form-field" method="post" action="{{route('phase_store')}}">
                    {{csrf_field()}}
                    <div class="tab-content">
                        <div class="form-wizard" id="form-wizard-3">
                            <div class="form-group first-group">
                                <label class="col-sm-3 control-label" for="name">Phase Title</label>

                                <div class="col-sm-6">
                                    <input class="form-control" type="text" name="title" value=""
                                           placeholder="Phase Title... ">
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
                            <h2>Phase Details:</h2>
                            <table id="assignedTable" cellpadding="0" cellspacing="0" border="0"
                                   class="table table-bordered">
                                <thead>
                                <tr>
                                    <th style="width: 20px;">Serial </th>
                                    <th style="width: 20px;">Day Number</th>
                                    <th>Work BreakDown Title</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr id="tmpRow" class="fieldR">
                                    <td style='width:20px;text-align:center;'><span class="sr">1</span></td>
                                    <td>
                                        <select class="form-control" name="day_id[]" id="">
                                            <option value="0">Select day:</option>
                                            @foreach($days as $day)
                                                <option value="{{$day->id}}">{{$day->title}}</option>
                                            @endforeach
                                        </select>
                                    </td>
                                    <td>
                                        <select class="form-control food_name" id="" name="wbs_id[]">
                                            <option value="0">Select Title:</option>
                                            @foreach($Wbs as $wbs)
                                                <option value="{{$wbs->id}}">{{$wbs->title}}</option>
                                            @endforeach
                                        </select>
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
