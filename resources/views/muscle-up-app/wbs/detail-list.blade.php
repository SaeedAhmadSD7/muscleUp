@extends('muscle-up-app.instructor.dashboard.instructor-dashboard')

@section('title','Edit phase program')

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
@section('page-heading')
    <h2>Add Details: {{$wbs->title}}</h2>
    <p>Please fill in all the information and Add a one.</p>


@stop
@section('content')

    <div id="PhaseList">
        <div id="errors">

        </div>
        <div class="content-box">
            <div class="content-box-wrapper">
                <form action="{{route('wbs-addDetails')}}" method="post" id="form-field">

                    <div class="form-group">
                        {{--<label class="col-sm-4 control-label">Select Trainee</label>--}}

                        <div class="col-sm-4"><select name="exercise_id" class="form-control" id="exercise_id">


                                <option value="0">Select Exercise:</option>
                                @foreach($exercise_list as $list)
                                    <option value="{{$list->id}}">{{$list->title}}</option>
                                @endforeach

                            </select>
                        </div>

                        {{--<div class="form-group">--}}
                        {{--<label class="col-sm-4 control-label">Select Type</label>--}}
                        <div class="col-sm-2">
                            <input class="form-control" type="number" id="set" name="set" value="" placeholder="Set" style="width:60px; height: 20px">
                        </div>
                        <div class="col-sm-2">
                            <input class="form-control" type="number" id="rep" name="rep" value="" placeholder="Rep" style="width:60px; height: 20px">
                        </div>
                        <div class="col-sm-2">
                            <input class="form-control time_take_input" id="rest" type="text" name="rest" value="" placeholder="Rest Time" style="width:60px; height: 20px">
                        </div>
                        {{--</div>--}}

                        <div class="col-sm-2">
                            <button type="submit" id="allocate" class="btn btn-primary ">Add
                                <div class="ripple-wrapper"></div>
                            </button>
                        </div>
                    </div>

                    <input type="hidden" name="_token" value="{{ csrf_token() }}">
                    <br>
                    <input type="hidden" name="wbs_id" id="wbs_id" value="{{$wbs->id}}"> </input>
                </form>
            </div>
        </div>
        {{--<div id="errors">--}}
            {{--@if (count($errors) > 0)--}}
                {{--<div class="alert alert-danger">--}}
                    {{--<strong>Whoops!</strong> There were some problems with your input.<br><br>--}}
                    {{--<ul>--}}
                        {{--@foreach ($errors->all() as $error)--}}
                            {{--<li>{{ $error }}</li>--}}
                        {{--@endforeach--}}
                    {{--</ul>--}}
                {{--</div>--}}
            {{--@endif--}}
        {{--</div>--}}
        <div class="panel">
            <div class="panel-body">
                <div class="example-box-wrapper">

                    <table border="0" cellpadding="0" cellspacing="0"
                           class="table table-striped table-bordered" id="datatable-example">
                        <thead>
                        <tr>
                            <th>Wbs Exercise</th>
                            <th>Sets</th>
                            <th>Reps</th>
                            <th>Rest</th>
                            <th>Actions</th>
                        </tr>
                        </thead>

                        <tbody>
                        @if($allocatedWbs->exercise == null)
                            <tr class="odd gradeA">
                                <td colspan="6"> There is no record found.</td>
                            </tr>
                        @else
                            @if($allocatedWbs->exercise->count() == 0)
                                <tr class="odd gradeX">
                                    <td colspan="6"> There is no record found.</td>
                                </tr>
                            @else
                                @foreach($allocatedWbs->exercise as $i=>$singleDbs)
                                    <tr>
                                        <td>{{$singleDbs->title}}</td>
                                        <td>{{$singleDbs->pivot->set}}</td>
                                        <td>{{$singleDbs->pivot->rep}}</td>
                                        <td>{{$singleDbs->pivot->rest}}</td>
                                        <td>
                                            <ul class="">
                                                <li class="dropdown">
                                                    <a href="javascript:void(0);" class="dropdown-toggle " data-toggle="dropdown">
                                                        <i class="glyphicon glyphicon-th-list"></i>
                                                    </a>
                                                    <ul class="dropdown-menu dropdown-menu-right">
                                                        {{--<li><a class="btnDelete" href="javascript:detachTrainee({{$phase->id}},{{$singleDbs->id}},{{$singleDbs->wbs->first()->id}})"> <i--}}
                                                        <li><a class="btnDelete" href="javascript:detachExercise({{$singleDbs->id}})">
                                                                <i class="glyphicon glyphicon-remove"></i>Delete </a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                @endforeach
                            @endif
                        @endif
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
        {{--<div id="myModal" class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog"--}}
        {{--aria-labelledby="myLargeModalLabel" aria-hidden="true" style="display: none;">--}}
        {{--<div class="modal-dialog modal-lg">--}}
        {{--<div class="modal-content">--}}
        {{--<div class="modal-header">--}}
        {{--<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>--}}
        {{--<h4 class="modal-title">Instructor: <span id="instructorName"></span></h4></div>--}}
        {{--<div class="modal-body">--}}

        {{--<div class="content-box">--}}
        {{--<div class="content-box-wrapper">--}}
        {{--<div class="form-group"><label class="col-sm-4 control-label">Select Trainee</label>--}}
        {{--<div class="col-sm-8"><select class="form-control" id="wbsId">--}}

        {{--@if($roles->count() > 0)--}}
        {{--@foreach($roles as $role)--}}
        {{--<option value="{{$role->id}}">{{$role->name}}</option>--}}
        {{--@endForeach--}}
        {{--@else--}}
        {{--No Record Found--}}
        {{--@endif--}}

        {{--<option value="1">Ahmad</option>--}}
        {{--<option value="2">Saeed</option>--}}
        {{--<option value="3">Gill</option>--}}
        {{--</select></div>--}}
        {{--</div>--}}

        {{--<input type="hidden" name="_token" value="{{ csrf_token() }}">--}}
        {{--<br>--}}
        {{--<br>--}}
        {{--<div class="form-group"><label class="col-sm-4 control-label">Select Type</label>--}}
        {{--<div class="col-sm-8"><select class="form-control" id="dayId">--}}
        {{--<option>Group Fitness</option>--}}
        {{--<option>Personal Trainer</option>--}}
        {{--</select></div>--}}
        {{--</div>--}}
        {{--<br>--}}
        {{--<input type="hidden" name="phase_id" id="phase_id" value=""> </input>--}}

        {{--</div>--}}
        {{--<div class="modal-footer">--}}
        {{--<button type="button" class="btn btn-default" data-dismiss="modal">Close--}}
        {{--<div class="ripple-wrapper">--}}
        {{--<div class="ripple ripple-on ripple-out"--}}
        {{--style="left: 26.3375px; top: 13.6px; background-color: rgb(43, 47, 51); transform: scale(7.75);">--}}
        {{--</div>--}}
        {{--<div class="ripple ripple-on ripple-out"--}}
        {{--style="left: 27.3375px; top: 13.6px; background-color: rgb(43, 47, 51); transform: scale(7.75);">--}}
        {{--</div>--}}
        {{--<div class="ripple ripple-on ripple-out"--}}
        {{--style="left: 36.3375px; top: 20.6px; background-color: rgb(43, 47, 51); transform: scale(7.75);">--}}
        {{--</div>--}}
        {{--</div>--}}
        {{--</button>--}}
        {{--<button type="button" class="btn btn-primary">Allocate--}}
        {{--<div class="ripple-wrapper"></div>--}}
        {{--</button>--}}
        {{--</div>--}}
        {{--</div>--}}
        {{--</div>--}}
        {{--</div>--}}
        {{--</div>--}}
        {{--</div>--}}
    </div>

@stop

@section('script')

    {{--<script src="{{url('/assets/js/branch.js')}}" type="text/javascript"></script>--}}
    <script src="{{url('/dist/js/AjaxCallMethod.js')}}" type="text/javascript"></script>

    <script>

        function detachExercise(exercice_id){


            wbs_id=$("#wbs_id").val();
            token = $('input[name=_token]').val();
            var type,url,params,success;
            type='POST';
            url='/wbs/delete/details';
            params={
                '_token': token,
                'wbs_id': wbs_id,
                'exercise_id': exercice_id
            };
            success= function (data) {

                $('#PhaseList').innerHTML = '';
                $('#PhaseList').html(data);
            }
            if(confirm('Are you sure to remove this record ?')) {
                ajaxCallMethod(type, url, params, success);
            }

        }
        $("#form-field").submit(function(event) {
            /* stop form from submitting normally */
            event.preventDefault();
            var $form = $(this);
            id = $("#wbs_id").val();
            exercise_id = $('#exercise_id').val();
            sets = $('#set').val();
            rest = $('#rest').val();
            rep = $('#rep').val();
            token = $('input[name=_token]').val();
            var type,url,params,success;
            type='POST';
            url = $form.attr('action');
            params={
                '_token': token,
                'wbs_id': id,
                'exercise_id': exercise_id,
                'set': sets,
                'rest': rest,
                'rep': rep
            };
            success= function (data) {
                $('#PhaseList').innerHTML = '';
                $('#PhaseList').html(data);
            };
            ajaxCallMethod(type,url,params,success);
        });
        $(document).ready(function () {
            /* Datatables basic */
//            $('#datatable-example').dataTable();

            //*** trainee table detail action dropdown
            $('.dropdown-toggle').click(function (e) {
                e.preventDefault();
                $(this).siblings('.dropdown-menu.dropdown-menu-right').toggle('show').show();
                e.stopImmediatePropagation();
            })
        });
    </script>


    {{--<script src="{{url('/assets/plugins/datetimepicker/js/DateTimePicker.js')}}" type="text/javascript"></script>--}}
    {{--<script src="{{url('/assets/plugins/jquery-validation-1.16.0/js/jquery.validate.js')}}"--}}
            {{--type="text/javascript"></script>--}}
    {{--<script src="{{url('/assets/js/add-instructor.js')}}" type="text/javascript"></script>--}}
    {{--<script>--}}
        {{--window.previewImage = "{{url('/resources/app/images/default.jpg')}}";--}}
        {{--window.uploadProfilePic = "{{route('uploadProfilePic')}}";--}}
        {{--window.removeUploadedProfilePic = "{{route('removeUploadedProfilePic')}}";--}}
    {{--</script>--}}
    {{--<script src="{{url('/resources/app/pages/js/create-instructor.js')}}" type="text/javascript"></script>--}}
    {{--<script src="{{url('/resources/app/pages/js/create-trainee.js')}}" type="text/javascript"></script>--}}
    {{--<script src="{{url('/resources/app/pages/js/request-gym.js')}}" type="text/javascript"></script>--}}

@stop


{{--@section('script')--}}
    {{--<script src="{{url('/admin-assets/widgets/button/button.js')}}" type="text/javascript"></script>--}}
    {{--<script src="{{url('/admin-assets/widgets/timepicker/timepicker.js')}}" type="text/javascript"></script>--}}
    {{--<script src="{{url('/admin-assets/js/diet.js')}}"></script>--}}
{{--@stop--}}
