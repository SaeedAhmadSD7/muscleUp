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
    <div id="ajaxData">

    </div>
@stop

@section('script')
    <script src="{{url('/admin-assets/widgets/button/button.js')}}" type="text/javascript"></script>
    <script src="{{url('/admin-assets/widgets/timepicker/timepicker.js')}}" type="text/javascript"></script>
    <script src="{{url('/admin-assets/js/diet.js')}}"></script>
    <script>
        //   on quantity change

        $("#assignedTable").on("keyup" , ".quantity1" , function(){
                  var cal=$(this).parent().siblings().children('.food_name1').find(':selected').attr('data-calories');
                  var qty=$(this).val();
                  var newCal=cal*qty;
                  $(this).parent().siblings('.caloryRow').find('.calories1').val(newCal);

        });
    </script>
    <script>

        // on food change

            $("#assignedTable").on( "change" , ".food_name1" , function(){
                var cal=$(this).find(':selected').attr('data-calories');
                var qty=$(this).parent().siblings('.qtyRow').find('.quantity1').val();
                var newCal=cal*qty;
                $(this).parent().siblings('.caloryRow').find('.calories1').val(newCal);

            });

    </script>
<script>


//    $('.df').on('duplicate', function () {
//        var formData = $('.diet-program').serialize();
//        console.log(formData.split('&'));
//
//    });
    var id= $('#assignedTable tbody tr').length;
    $("#assignedTable").on('click', '.remove_row', function () {
        $(this).closest('tr').remove();
        countTableRows();
        id--;
        console.log("Del row now id is "+id);
    });
    $(document).on('click', '#assign', function () {
        id++;
        var tr = $('#tmpRow').clone().attr('id','row'+id).show().stop()
                .appendTo('#assignedTable tbody');
        $('#row'+id+' span.sr').text(id)


    });
    function countTableRows() {
        $("#assignedTable tr").each(function (i) {
            if (i >0) {
                $(this).attr('id','row'+i);
                $(this).find('td:first span').html(i);
            }
        });
    }

//    $('.df').on('submit', function () {
//        var formData = $('.diet-program').serialize();
//        console.log(formData.split('&'));
//
//    });

//filter('formData[name$="[meal_id]"]').each(function() {
//    $(this).rules("add", {
//        meal_id: true,
//        unique:true,
//        required: true,
//        messages: {
//            meal_id: 'Already Exist'
//
//        }
//    })
//})
//        alert(formData);


//$( ".foodRow" ).each(function( index ) {
//
//    var a=$(".food_name1").find(':selected').attr('value');
////    var a=$(".food_name1").find(':selected').val();
//alert(a);
//});

</script>
    <script>
//        $(".assignedTable").on('submit' , function(){
////            var a=$(this).children('.fieldR').children(".foodRow").children(".food_name1").val();
////            alert(a);
//
//            $(".fieldR").each(function(){
//                if($(this).children(".foodRow").children(".food_name1").val()==$(this).next().children(".foodRow").children(".food_name1").val())
//                {
////                    $(this).next("td.foodRow").children(".food_name1_").text("MATCHED!");
//                    alert("ddddddddddddd");
//                }
//            });
////            $( ".fieldR" ).each(function( index ) {
////
//////                var a=$(this).children('.foodRow').children(".food_name1").val();
//////                  alert(a);
////
////            });
////            var a=$(".food_name1").find(':selected').val();
////            alert(a);
//        });


    </script>

    <script>

//            $("input[name^='meal_id']").each(function(){
//                meal_ids[$(this).attr('name')] = $(this).val();
//                alert( meal_ids);
//            });
//            var formData=$(this).serialize();
//            var map={};
//            $(".meal_name1").each(function() {
//                map[$(this).attr("name")] = $(this).val();
//                alert(map);

            //                $('.meal_name1').each(function () {
//                    meal_ids = ($(this).val());
//                    alert(food_ids);
//                });
//                $('.food_name1').each(function () {
//                    food_ids = ($(this).val());
//                    alert(food_ids);
//                })
//            });
//            alert(meal_ids);
//            $( ".fieldR" ).each(function( index ) {
//                var food_id=$(this).children('.foodRow').children(".food_name1").val();
//                  alert(food_id);
//            });
//            $( ".fieldR" ).each(function( index ) {
//                var meal_id=$(this).children('.mealRow').children(".meal_name1").val();
//                  alert(meal_id);
//            });
//
//            var meal_ids = [];
//            var food_ids = [];
//            var calorie = [];
//            var qnty = [];
//            var serial = [];
$('.df').on('submit', function (e) {
    e.preventDefault();
            var total_data = [];
            var row = [];
            var count=0;

            $("#dtble .fieldR").each(function() {
                 row=$(this).children('.serial').children('.sr').text();
                 row= {

                     food_id : $(this).children('.foodRow').children(".food_name1").val(),
                     meal_id : $(this).children('.mealRow').children(".meal_name1").val(),
                     quantity : $(this).children('.qtyRow').find('.quantity1').val(),
                     calories : $(this).children('.caloryRow').find('.calories1').val(),
                     taketime : $(this).children('.take_time').find('.take_time1').val()
//

            };
                total_data[count]=row;
//                console.log(total_data);


                count++;
//                var a1=total_data[count]=row['food_id'];
//                var a2=total_data[count]=row['meal_id'];
//                alert(a1);
//                alert(a2);

//                alert(total_data[count][row]);
//
//                if( total_data[count-1]=row['food_id']  =  total_data[count]=row['food_id']  &&  total_data[count-1]=row['meal_id'] = total_data[count]=row['meal_id']);
////                {
////                    alert("already exist")
////
////                }
//
//
            });

            var _token=$("#_token").val();
            var title=$("#title").val();
            var description=$("#description").val();
//            var meal_id=row['meal'];
//            var food_id=row['food'];
//            var quantity=row['quantity'];
//            var calories=row['calorie'];
//            var take_time=row['take_time'];
        $.ajax({
            type: 'post',
            url: '{{url("diet/add")}}',
            data:{ title:title , description:description ,total_data ,_token:_token },
            success: function (s) {

                $("#ajaxData").html(s);
            }
//            error: function(data){
//                var errors = data.responseJSON;
//                console.log(errors);
//                // Render the errors with js ...
//            }

        });

        });
    </script>

@stop
