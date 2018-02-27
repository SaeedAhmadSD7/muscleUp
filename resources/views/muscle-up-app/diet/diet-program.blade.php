@extends('muscle-up-app.instructor.dashboard.instructor-dashboard')
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
@stop

@section('content')
    <div id="ajaxData">

    <table id="templete">
        <tfoot>
            <div class="tab-content">
                <tr style="display: none;" id="tmpRow" class="fieldR">
                    {{--<input type="hidden" class="_token" name="_token" id="_token" value="{{ csrf_token() }}">--}}
                   <td class="serial" style='width:20px;text-align:center;'><span class="sr"></span></td>
                    <td class="mealRow">
                       <select class="form-control meal_name1" name="meal_id[]" id="meal_no">
                           <option value="">Select Meal:</option>
                            @foreach($meals as $meal)
                                <option value="{{$meal->id}}">{{$meal->title}}</option>
                           @endforeach
                      </select>
                   </td>
                    <td class="foodRow">
                        <select class="form-control food_name1" id="food_name" name="food_id[]">
                            <option value="">Select Food:</option>
                            @foreach($foods as $food)
                                <option data-calories="{{$food->calories}}" value="{{$food->id}}">{{$food->title}}</option>
                            @endforeach
                        </select>
                    </td>
                    <td id="qtyRow" class="qtyRow">
                        <input class="form-control quantity1" type="number" id="quantity1" name="quantity[]"  placeholder="Qrt:" style="width:60px;">
                    </td>
                    <td id="caloryRow" class="caloryRow">
                       <input class="form-control calories1" type="text" id="calories1" name="calories[]" placeholder="Cal" style="width:60px;" readonly>
                    </td>
                    <td class="take_time">
                        <input class="form-control time_take_input take_time1" type="text" name="taketime[]" placeholder="Time" style="width:60px" >
                    </td>
                    <td>
                        <button class="remove_row btn btn-danger" type="button"><span class="">Delete</span></button>
                    </td>
                </tr>
            </div>
        </tfoot>
    </table>

    <div id="page-title">
        <h2>Diet Program</h2>
        <p>Create Diet Program</p>
            {{--@if(isset($message))--}}
                {{--<div class="alert alert-danger" >{{$message}}</div>--}}
            {{--@endif--}}
        <div id="errors" >
            @if (count($errors) > 0)
                <div class="alert alert-danger">
                    <strong>Whoops!</strong> There were some problems with your input.<br><br>
                    <ul>
                        @foreach ($errors->all() as $error)
                            <li>{{ $error }}</li>
                        @endforeach
                    </ul>
                </div>
            @endif
        </div>
    </div>

    <div class="panel">
        <div class="panel-body">
            <div class="example-box-wrapper">
                <form class="form-group diet-program form-horizontal bordered-row df" id="form-field" method="post" action="{{route('add-diet')}}">
                    {{--{{csrf_field()}}--}}
                    <input type="hidden" class="_token" name="_token" id="_token" value="{{ csrf_token() }}">
                    <div class="tab-content">
                        <div class="form-wizard" id="form-wizard-3">
                            <div class="form-group first-group">
                                <label class="col-sm-3 control-label" for="name">Program Name</label>

                                <div class="col-sm-6">
                                    <input class="form-control" type="text" id="title" name="title" value="" placeholder="Program Name...">
                                </div>
                            </div>
                            <div class="form-group meal_number">
                                <label class="col-sm-3 control-label" for="description">Description:</label>

                                <div class="col-sm-6">
                                    <div class="input-group">
                                        <textarea rows="3" cols="20" class="form-control" placeholder="Description..." id="description" name="description"></textarea><br>
                                    </div>
                                </div>
                            </div>
                            <hr>
                            <h2>Meal Details:</h2>
                            <table id="assignedTable" cellpadding="0" cellspacing="0" border="0" class="table table-bordered assignedTable">
                                <thead>
                                <tr>
                                    <th >Serial</th>
                                    <th>Meal Number</th>
                                    <th>Food Name</th>
                                    <th >Quantity</th>
                                    <th>Calories</th>
                                    <th>Duration</th>
                                    <th style="width: 150px; ">Action</th>
                                </tr>
                                </thead>
                                <tbody id="dtble">
                                <tr  class="fieldR" >
                                    <td class="serial" style='width:20px;text-align:center;'><span class="sr">1</span></td>
                                    <td class="mealRow">

                                        <select class="form-control meal_name1" name="meal_id[]"  id="meal_id">
                                            <option>Select Meal:</option>
                                            @foreach($meals as $meal)
                                                <option value="{{$meal->id}}">{{$meal->title}}</option>
                                            @endforeach
                                        </select>
                                    </td>
                                    <td class="foodRow">
                                        <select class="form-control food_name1" id="food_name1"  name="food_id[]" >
                                            <option>Select Food:</option>
                                            @foreach($foods as $food)
                                                <option data-calories="{{$food->calories}}" value="{{$food->id}}">{{$food->title}}</option>
                                            @endforeach
                                        </select>

                                    </td>
                                    <td id="qtyRow" class="qtyRow">

                                        <input class="form-control quantity1" type="number" id="quantity"   name="quantity[]" placeholder="Qrt:" style="width:60px;">
                                    </td>
                                    <td id="caloryRow" class="caloryRow">
                                        <input class="form-control calories1" type="text" id="calories" name="calories[]" placeholder="Cal" style="width:60px;" readonly>
                                    </td>
                                    <td class="take_time">
                                        <input class="form-control time_take_input take_time1" type="text" name="taketime[]" id="take_time" placeholder="Time" style="width:60px">
                                    </td>
                                    <td>

                                        <button class="remove_row btn btn-danger " type="button"><span class="glyphicon icon-typicons-cancel ">Delete</span></button>
                                    </td>
                                </tr>
                                </tbody>
                                <tfoot>
                                <tr>
                                    <th colspan="7">
                                        <div class="create">
                                            <button type="button" id="assign" class="btn btn-primary duplicate"><span class=" glyphicon icon-typicons-plus">Add More..</span></button>
                                        </div>
                                    </th>
                                </tr>
                                </tfoot>
                            </table>
                            <div style="float:right; margin-right: 300px;">
                                <input type="submit" value="Submit" class="btn btn-success submit-btn">
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

    </div>

@stop

@section('script')
    <script src="{{url('/admin-assets/widgets/button/button.js')}}" type="text/javascript"></script>
    <script src="{{url('/admin-assets/widgets/timepicker/timepicker.js')}}" type="text/javascript"></script>
    <script src="{{url('/admin-assets/js/diet.js')}}"></script>
    <script src="{{url('/dist/js/AjaxCallMethod.js')}}" type="text/javascript"></script>
    <script src="{{url('/dist/js/diet.js')}}" type="text/javascript"></script>
    <script>


$('.df').on('submit', function (e) {
    e.preventDefault();
            var total_data = [];

            $("#dtble .fieldR").each(function() {
                 total_data.push({

                     "food_id" : $(this).children('.foodRow').children(".food_name1").val(),
                     "meal_id" : $(this).children('.mealRow').children(".meal_name1").val(),
                     "quantity": $(this).children('.qtyRow').find('.quantity1').val(),
                     "calories" : $(this).children('.caloryRow').find('.calories1').val(),
                     "taketime" : $(this).children('.take_time').find('.take_time1').val()

                 });

            });

        var _token=$("#_token").val();
        var title=$("#title").val();
        var description=$("#description").val();
        var url,success,params;
        var type='POST';
        url='{{url("diet/add")}}';
        params={
            title:title ,
            description:description,
            total_data ,
            _token:_token
                };
            success=function(data){
                window.location.href = '{{url("diet/list")}}';
        };
        ajaxCallMethod(type,url,params,success);

        });
    </script>


@stop
