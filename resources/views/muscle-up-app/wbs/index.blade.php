@extends('muscle-up-app.instructor.dashboard.instructor-dashboard')
@section('title','WBS')
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
<div id="ajaxList">
  <div id="page-title">
        <h2>WBS List</h2>
  </div>

    <div class="panel">
{{--        < method="get" action="{{route('wbs-add')}}">--}}
            <button type="button" class="btn btn-success" data-toggle="modal" data-target="#myModal" data-backdrop="false">New WBS<span
                        class="glyphicon glyphicon-plus"></span></button>
        <!-- Modal -->
        <div class="modal fade" id="myModal" role="dialog">
            <div class="modal-dialog">
                <form class="form-group diet-program form-horizontal bordered-row" id="form-field"
                      method="post"
                      action="{{route('wbs-store')}}">
                    <!-- Modal content-->
                    <input type="hidden" name="_token" value="{{ csrf_token() }}">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            <h4 class="modal-title">Create WBS..</h4>
                        </div>
                        <div class="modal-body">
                            {{--{{csrf_field()}}--}}
                            <div id="errors" class="alert alert-danger">

                            </div>
                            <div class="form-group first-group">
                                <label class=" control-label" for="name">WBS Title</label>

                                <div class="">
                                    <input class="col-lg-4 form-control" id="title" type="text" name="title" value="" placeholder="WBS Title">

                                </div>
                            </div>

                            <div class="form-group meal_number">
                                <label class="control-label" for="description">Description:</label>

                                <div class="">
                                    <div class="input-group">
                                        <textarea rows="2" cols="18" class="col-lg-4 form-control" id="description" name="description" placeholder="Description"></textarea><br>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <input type="submit" value="Submit" class="btn btn-success">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="panel-body">
            <div class="example-box-wrapper">
                <table id="assignedTable" cellpadding="0" cellspacing="0" border="0" class="table table-bordered">
                   <thead>
                      <tr>
                          <th width="20px">No.</th>
                          <th style="text-align:center; width: 200px">WBS Title</th>
                          <th style="text-align:center;">Descritpion</th>
                          <th>Action</th>

                      </tr>
                   </thead>
                    <tbody>
                            <?php $count=1; ?>
                            @foreach($wbs_list as $wbs)
                                <tr>
                                    <td width="20px" style="text-align:center;"><h5><?php echo $count; ?></h5></td>
                                    <td width="140px" style="text-align:center;"><h5>{{$wbs->title}}</h5></td>
                                    <td><h5>{{$wbs->description}}</h5></td>
                                    <td>
                                        <ul class="">
                                            <li class="dropdown">
                                                <a href="javascript:void(0);" class="dropdown-toggle " data-toggle="dropdown">
                                                    <i class="glyphicon glyphicon-th-list"></i>
                                                </a>
                                                <ul class="dropdown-menu dropdown-menu-right">
                                                    <li><a class="glyphicon glyphicon-edit"  href="{{route('wbs-edit',$wbs)}}" type="submit">Edit</a></li>
                                                    <li><a class="glyphicon glyphicon-trash" href="javascript:detachwbs({{$wbs->id}})">Delete</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                                <?php $count++; ?>
                            @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
@stop

@section('script')
    <script src="{{url('/dist/js/AjaxCallMethod.js')}}" type="text/javascript"></script>
    {{--<script src="{{url('/admin-assets/widgets/button/button.js')}}" type="text/javascript"></script>--}}
    {{--<script src="{{url('/admin-assets/widgets/timepicker/timepicker.js')}}" type="text/javascript"></script>--}}
    {{--<script src="{{url('/admin-assets/js/diet.js')}}"></script>--}}

    <script>
        function detachwbs(wbs_id){


            token = $('input[name=_token]').val();
            var type,url,params,success;
            type='GET';
            url='/wbs/delete/'+ wbs_id;
            params={
                '_token': token
            };
            success= function (data) {

                $('#ajaxList').innerHTML = '';
                $('#ajaxList').html(data);
            };
            if(confirm('Are you sure to remove this record ?')) {
                ajaxCallMethod(type, url, params, success);
            }

        }

        $("#form-field").submit(function(event) {

            /* stop form from submitting normally */
            event.preventDefault();
            var token = $('input[name=_token]').val();
            /* get the action attribute from the <form action=""> element */
            var $form = $(this);
            var url,success,params;
            var type="POST";
            url = $form.attr('action');
            params={ '_token': token,description: $("#description").val(), title: $('#title').val() };
            success= function(data){
                $('#ajaxList').html('');
                $('#ajaxList').html(data);
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
@stop
