@extends('layouts.backend-main')
@section('title','Edit phase program')
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
                    <select class="form-control" name="wbs_id[]" id="">
                        <option value="0">Select Day:</option>

                        @foreach($days as $day)
                            <option  value="{{$day->id}}">{{$day->title}}</option>
                        @endforeach
                    </select>
                </td>
                <td>
                    <select class="form-control food_name" id="" name="day_id[]">
                        <option value="0">Select Work BreakDown:</option>
                        @foreach($Wbs as $wbs)
                            <option value="{{$wbs->id}}">{{$wbs->title}}</option>
                        @endforeach
                    </select>
                </td>

            </tr>
        </div>
        </tfoot>

    </table>

    <div id="page-title">
        <h2>Phase Program</h2>

        <p>Edit Phase Program</p>
    </div>

    <div class="panel">
        <div class="panel-body">
            <div class="example-box-wrapper">
                <form class="form-group diet-program form-horizontal bordered-row" id="form-field" method="post" action="{{route('update-phase')}}">
                    {{csrf_field()}}
                    <div class="tab-content">
                        <div class="form-wizard" id="form-wizard-3">
                            <div class="form-group first-group">
                                <label class="col-sm-3 control-label" for="name">Phase Name</label>

                                <div class="col-sm-6">
                                    <input name="id" value="{{$phase->id}}" type="hidden">
                                    <input class="form-control" type="text" name="title" value="{{$phase->title}}"
                                           placeholder="phase title....">
                                </div>
                            </div>
                            {{--<div class="form-group meal_number">--}}
                                {{--<label class="col-sm-3 control-label" for="radio">Status:</label>--}}

                                {{--<div class="col-sm-6">--}}
                                    {{--<div class="input-group">--}}
                                        {{--<div id="radio">--}}
                                            {{--<label for="no">No</label>--}}
                                            {{--<input id="no" type="radio" name="status" value="No" @if($dietPlan->status=='No') checked="checked" @endif>--}}
                                            {{--<label for="yes">Yes</label>--}}
                                            {{--<input id="yes" type="radio" name="status" value="Yes" @if($dietPlan->status=='Yes') checked="checked" @endif><br>--}}
                                        {{--</div>--}}
                                    {{--</div>--}}
                                {{--</div>--}}
                            {{--</div>--}}
                            <div class="form-group meal_number">
                                <label class="col-sm-3 control-label" for="description">Description:</label>

                                <div class="col-sm-6">
                                    <div class="input-group">
                                        <textarea rows="5" cols="20" class="form-control" id="description"
                                                  name="description">{{$phase->description}}</textarea><br>
                                    </div>
                                </div>
                            </div>
                            <hr>
                            <h2>Phase Details:</h2>
                            <table id="assignedTable" cellpadding="0" cellspacing="0" border="0"
                                   class="table table-bordered">
                                <thead>
                                <tr>
                                    <th style="width: 20px;">Serial</th>
                                    <th style="width: 20px;">Selected Day</th>
                                    <th>Selected Work Break Down</th>

                                </tr>
                                </thead>
                                <tbody>

                                <?php $count=1;?>
                                @foreach($phaseDetails as $phaseDetail)
                                    @include('muscle-up-app.phase.partials._phase')
                                    <?php $count++; ?>
                                @endforeach
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
                                <input type="submit" value="Update" class="btn btn-success">
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

@stop