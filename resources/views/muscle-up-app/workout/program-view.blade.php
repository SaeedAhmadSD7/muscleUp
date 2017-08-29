@extends('layouts.backend-main')

@section('title','Workout program')

@section('content')
    <div id="page-title">
        <h2>{{$program->title}}</h2>
        <p>Fill in the details and click save.</p>
    </div>

    <div class="panel">
        <div class="panel-body">
            <div class="example-box-wrapper">
                <table cellspacing="0" class="table table-phase table-striped table-bordered responsive no-wrap" id="datatable-responsive" width="100%">
                    <thead>
                    <tr>
                        <th class="details-control">Details</th>
                        <th>Phase No.</th>
                        <th>Phase</th>
                        <th class="hideClass">No. Of Days</th>
                    </tr>
                    </thead>
                    <tbody>
                    @if(!empty($phases))
                        {{--@foreach($phases as $phase)--}}
                        <input class="empty" type="hidden" value="notempty">
                        <tr>
                            <td class="details-control" style="text-align: center;"><img src="http://i.imgur.com/SD7Dz.png"></td>
                            <td>{{$phases['number']}}</td>
                            <td>{{$phases['name']}}</td>
                            <td class="hideClass">{{$phases['num_exercise']}}</td>
                        </tr>
                        {{--@endforeach--}}
                        @else
                        <tr>
                            {{--<td colspan="4" style="text-align:center;">No Phases are loaded.</td>--}}
                            {{--<td style="display: none"></td>--}}
                            {{--<td style="display: none"></td>--}}
                            {{--<td style="display: none"></td>--}}
                        </tr>
                    @endif

                    </tbody>
                </table>
            </div>
        </div>
    </div>
@stop

