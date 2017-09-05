@extends('layouts.backend-main')@section('title','WBS')
@section('style-sheet')
    <style>
        .create {
            float: right;
        }
    </style>
@show
@section('content')
    <div id="page-title">
        <h2>Work BreakDown Structure</h2>
        <p>Work BreakDown Structure Details</p>
    </div>

    <div class="panel">
        <div class="panel-body">
            <div class="example-box-wrapper">
                <form class="form-group diet-program form-horizontal bordered-row" id="form-field" method="post" action="{{route('wbs-store')}}">
                    {{csrf_field()}}
                    <div class="tab-content">
                        <div class="form-wizard" id="form-wizard-3">
                            <div class="form-group first-group">
                                <h2>{{$wbs->title}}</h2>
                            </div>
                            <div class="form-group meal_number">
                                <p>{{$wbs->description}}</p>
                            </div>

                            <hr>
                            <h2>Work BreakDown Structure Details:</h2>
                            <table id="assignedTable" cellpadding="0" cellspacing="0" border="0" class="table table-bordered">
                                <thead>
                                <tr>
                                    <th style="width: 55px;">Serial #</th>
                                    <th>Exercise</th>
                                    <th>Set</th>
                                    <th>Rep</th>
                                    <th>Rest</th>
                                </tr>
                                </thead>
                                <tbody>
                                {{--{{dd($exercise_list[0]->title)}}--}}
                                @foreach($wbs_details as $wbs_detail)
                                    <tr id="tmpRow" class="fieldR">
                                        <td style='width:20px;text-align:center;'><span class="sr">1</span></td>
                                        <td>
                                            {{$wbs_detail->exercise}}
                                        </td>
                                        <td id="qtyRow">{{$wbs_detail->set}}</td>
                                        <td id="caloryRow">{{$wbs_detail->rep}}</td>
                                        <td>{{$wbs_detail->rest}}</td>
                                    </tr>
                                @endforeach
                                </tbody>
                            </table>

                            <div style="float:right; margin-right: 300px;"><input type="submit" value="Submit" class="btn btn-success"></div>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    </div>

@stop
