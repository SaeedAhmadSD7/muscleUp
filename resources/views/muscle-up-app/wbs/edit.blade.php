@extends('layouts.backend-main')
@section('title','Edit WBS')
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
@stop

@section('content')

    <table id="templete">
        <tfoot>
        <div class="tab-content">
            <tr style="display: none;"  id="tmpRow" class="fieldR">
                <td style='width:20px;text-align:center;'><span class="sr">1</span></td>
                <td>
                    <select class="form-control" name="exercise_id[]" id="exercise">
                        <option value="0" selected disabled hidden>Select WBS</option>
                        @foreach($exercise_list as $exercise)
                            <option value="{{$exercise->id}}">{{$exercise->title}}</option>
                        @endforeach
                    </select>
                </td>
                <td id="qtyRow"><input class="form-control" type="number" id="set" name="set[]" placeholder="Set" style="width:60px;"></td>
                <td id="caloryRow"><input class="form-control" type="number" id="rep" name="rep[]" placeholder="Rep" style="width:60px;"></td>
                <td><input class="form-control time_take_input" type="text" name="rest[]" placeholder="Rest Time" style="width:60px"></td>
                <td><button class="remove_row btn btn-danger" type="button"><span class="glyphicon glyphicon-remove-sign"></span></button></td>
            </tr>
        </div>
        </tfoot>

    </table>


    <div id="page-title">
        <h2>Workout BreakDown Structure</h2>

        <p>Edit Workout BreakDown Structure</p>
    </div>

    <div class="panel">
        <div class="panel-body">
            <div class="example-box-wrapper">
                <form class="form-group diet-program form-horizontal bordered-row" id="form-field" method="post" action="{{route('wbs-update')}}">
                    {{csrf_field()}}
                    <div class="tab-content">
                        <div class="form-wizard" id="form-wizard-3">
                            <div class="form-group first-group">
                                <label class="col-sm-3 control-label" for="name">WBS Name</label>

                                <div class="col-sm-6">
                                    <input name="id" value="{{$wbs->id}}" type="hidden">
                                    <input class="form-control" type="text" name="title" value="{{$wbs->title}}" placeholder="Title....">
                                </div>
                            </div>
                            <div class="form-group meal_number">
                                <label class="col-sm-3 control-label" for="description">Description:</label>

                                <div class="col-sm-6">
                                    <div class="input-group">
                                        <textarea rows="2" cols="20" class="form-control" id="description" name="description">{{$wbs->description}}</textarea><br>
                                    </div>
                                </div>
                            </div>
                            <hr>
                            <h2>WBS Details:</h2>
                            <table id="assignedTable" cellpadding="0" cellspacing="0" border="0" class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th style="width: 55px;">Serial</th>
                                        <th>Exercise</th>
                                        <th>Set</th>
                                        <th>Rep</th>
                                        <th>Rest</th>
                                    </tr>
                                </thead>
                                <tbody>

                                <?php $count=1;?>
                                @foreach($wbs->exercise as $exercise_S)
                                    <tr>
                                        <td style="text-align: center">
                                            <?php echo $count;?>
                                        </td>
                                        <td>
                                            <select class="form-control exercise day_name" id="" name="exercise_id[]" data-value="{{$exercise_S->pivot->exercise_id}}">
                                                @foreach($exercise_list as $exercise)
                                                    <option  value="{{$exercise->id}}">{{$exercise->title}}</option>
                                                @endforeach
                                            </select>
                                        </td>
                                        <td id="qtyRow"><input class="form-control" type="number" id="set" name="set[]" value="{{$exercise_S->pivot->set}}" placeholder="Set" style="width:60px;"></td>
                                        <td id="caloryRow"><input class="form-control" type="number" id="rep" name="rep[]" value="{{$exercise_S->pivot->rep}}" placeholder="Rep" style="width:60px;"></td>
                                        <td><input class="form-control time_take_input" type="text" name="rest[]" value="{{$exercise_S->pivot->rest}}" placeholder="Rest Time" style="width:60px"></td>
                                    </tr>
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