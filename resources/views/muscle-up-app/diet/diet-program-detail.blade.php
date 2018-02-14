{{--@extends('muscle-up-app.instructor.dashboard.instructor-dashboard')--}}
{{--@section('title','Diet program')--}}

{{--@section('style-sheet')--}}
    {{--<link href="{{url('/admin-assets/helpers/typography.css')}}" rel="stylesheet" type="text/css">--}}
    {{--<link href="{{url('/admin-assets/elements/buttons.css')}}" rel="stylesheet" type="text/css">--}}
    {{--<link href="{{url('/admin-assets/themes/components/border-radius.css')}}" rel="stylesheet" type="text/css">--}}
    {{--<link href="{{url('/admin-assets/helpers/border-radius.css')}}" rel="stylesheet" type="text/css">--}}
    {{--<link href="{{url('/admin-assets/elements/forms.css')}}" rel="stylesheet" type="text/css">--}}
    {{--<link href="{{url('/admin-assets/widgets/timepicker/timepicker.css')}}" rel="stylesheet" type="text/css">--}}
    {{--<link href="{{url('/admin-assets/elements/tables.css')}}" rel="stylesheet" type="text/css">--}}
    {{--<link href="{{url('/admin-assets/css/diet.css')}}" rel="stylesheet" type="text/css">--}}
    {{--<link href="{{url('/admin-assets/icons/typicons/typicons.css')}}" rel="stylesheet" type="text/css">--}}
    {{--<link href="{{url('/admin-assets/icons/elusive/elusive.css')}}" rel="stylesheet" type="text/css">--}}
{{--@stop--}}

{{--@section('content')--}}

  {{--<div id="page-title">--}}
        {{--<h2>Diet Program Detail</h2>--}}
  {{--</div>--}}
  {{--<div class="row mailbox-wrapper">--}}
      {{--<div class="col-md-12">--}}
          {{--<div class="content-box">--}}
              {{--<div class="mail-toolbar clearfix">--}}
                  {{--<div class="float-left">--}}
                      {{--<h4 class="font-primary"> Diet Program Name: "{{$dietProgramDetails->title}}"</h4>--}}
                  {{--</div>--}}
              {{--</div>--}}
              {{--<div class="email-body">--}}
                  {{--<div class="example-box-wrapper">--}}
                      {{--<table border="0" cellpadding="0" cellspacing="0" class="table table-striped table-bordered" id="datatable-example">--}}
                          {{--<tr class="name">--}}
                              {{--<th>Diet Name</th>--}}
                              {{--<td>{{$dietProgramDetails->title}}</td>--}}
                          {{--</tr>--}}

                          {{--<tbody>--}}
                          {{--<tr class="description">--}}
                              {{--<th>Diet Description</th>--}}
                              {{--<td>{{$dietProgramDetails->description}}</td>--}}
                          {{--</tr>--}}







                          {{--</tbody>--}}
                      {{--</table>--}}
                      {{--<h2>Meal Details:</h2>--}}
                      {{--<table id="assignedTable" cellpadding="0" cellspacing="0" border="0" class="table table-bordered">--}}
                          {{--<thead>--}}
                          {{--<tr>--}}
                              {{--<th >Serial</th>--}}
                              {{--<th>Meal Number</th>--}}
                              {{--<th>Food Name</th>--}}
                              {{--<th >Quantity</th>--}}
                              {{--<th>Calories</th>--}}
                              {{--<th>Duration</th>--}}

                          {{--</tr>--}}
                          {{--</thead>--}}
                          {{--<tbody>--}}
                          {{--<tr id="tmpRow" class="fieldR">--}}
                              {{--<td style='width:20px;text-align:center;'><span class="sr">1</span></td>--}}
                              {{--<td>--}}
                                  {{--<input type="text" class="form-control" value="{{$meal->title}}">--}}
                              {{--</td>--}}
                              {{--<td class="foodRow">--}}
                                  {{--<input type="text" class="form-control food_name" id="food_name1"  value="{{$food->title}}"name="food_id" >--}}
                              {{--</td>--}}
                              {{--<td id="qtyRow">--}}

                                  {{--<input class="form-control quantity" type="number" id="quantity1" value="{{$food_data->quantity}}" placeholder="Qrt:" style="width:60px;">--}}
                              {{--</td>--}}
                              {{--<td id="caloryRow">--}}
                                  {{--<input class="form-control" type="text" id="calories1" name="calories" value="{{$food_data->calories}}" placeholder="Cal" style="width:60px;" readonly>--}}
                              {{--</td>--}}
                              {{--<td>--}}
                                  {{--<input class="form-control time_take_input" type="text" value="{{$food_data->taketime}}" placeholder="Time" style="width:60px">--}}
                              {{--</td>--}}
                          {{--</tr>--}}
                          {{--</tbody>--}}
                          {{--<tfoot>--}}
                          {{--<tr>--}}
                              {{--<th colspan="7">--}}

                              {{--</th>--}}
                          {{--</tr>--}}
                          {{--</tfoot>--}}
                      {{--</table>--}}
                  {{--</div>--}}
              {{--</div>--}}
              {{--<div class="button-pane">--}}
                  {{--<a class="btn ra-100 btn-danger accept_request" href="{{route('delete-diet',$dietProgramDetails->id)}}"><i class="glyph-icon icon-mail-reply"></i> Delete Diet Program</a>--}}
              {{--</div>--}}

          {{--</div>--}}
      {{--</div>--}}
  {{--</div>--}}


{{--@stop--}}

@section('script')
    <script src="{{url('/admin-assets/widgets/button/button.js')}}" type="text/javascript"></script>
    <script src="{{url('/admin-assets/widgets/timepicker/timepicker.js')}}" type="text/javascript"></script>
    <script src="{{url('/admin-assets/js/diet.js')}}"></script>

@stop
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
    <link href="{{url('/admin-assets/icons/elusive/elusive.css')}}" rel="stylesheet" type="text/css">
@stop

@section('content')
    <div id="page-title">
        <h2>Diet Program</h2>
        <p>Diet Program Detail</p>
        <div id="errors">
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
            <div class="example-box-wrapper form-group diet-program form-horizontal bordered-row">
                    <div class="tab-content">
                        <div class="form-wizard" id="form-wizard-3">
                            <div class="form-group first-group">
                                <label class="col-sm-3 control-label" for="title">Program Name</label>

                                <div class="col-sm-6">
                                    <input name="id" value="{{$dietProgram->id}}" type="hidden">
                                    <input class="form-control" type="text" name="title" value="{{$dietProgram->title}}" placeholder="Program Name...">
                                </div>
                            </div>
                            <div class="form-group meal_number">
                                <label class="col-sm-3 control-label" for="description">Description:</label>

                                <div class="col-sm-6">
                                    <div class="input-group">
                                        <textarea rows="5" cols="20" class="form-control" id="description" name="description">{{$dietProgram->description}}</textarea><br>
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

                                </tr>
                                </thead>
                                <tbody>
                                <?php $count=1;?>
                                @foreach($dietProgram->food as $dietList)
                                    <tr class="fieldR">


                                        <td style='width:20px;text-align:center;'>
                                        <?php echo $count;?>
                                        <td >


                                            <select class="form-control day_name" name="meal_id[]" id="meal_no" data-value="{{$dietList->pivot->meal_id}}">

                                                @foreach($meals as $meal)
                                                    <option value="{{$meal->id}}" {{($dietList->pivot->meal_id == $meal->id) ? "selected" : ""}}>{{$meal->title}}</option>
                                                @endforeach

                                            </select>
                                        </td>
                                        <td class="foodRow">
                                            <select class="form-control day_name food_name1" id="food_name1" name="food_id[]" data-value="{{$dietList->pivot->food_id}}">
                                                @foreach($foods as $food)
                                                    <option data-calories="{{$food->calories}}" value="{{$food->id}}" {{($dietList->pivot->food_id == $food->id) ? "selected" : ""}}>{{$food->title}}</option>
                                                @endforeach
                                            </select>
                                        </td>
                                        <td id="qtyRow" class="qtyRow">
                                            <input class="form-control quantity1" type="number" id="quantity1" name="quantity[]" placeholder="Qrt:" style="width:60px;" value="{{$dietList->pivot->quantity}}">
                                        </td>
                                        <td id="caloryRow" class="caloryRow">
                                            <input class="form-control calories1" type="text" id="calories1" name="calories[]" placeholder="Cal" style="width:60px;" value="{{$dietList->pivot->calories}}" readonly>
                                        </td>
                                        <td>
                                            <input class="form-control time_take_input" type="text" name="taketime[]" placeholder="Time" style="width:60px" value="{{$dietList->pivot->taketime}}" >
                                        </td>

                                    </tr>
                                    <?php $count++; ?>
                                @endforeach
                                </tbody>

                                <tfoot>
                                <tr>

                                </tr>
                                </tfoot>
                            </table>
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
