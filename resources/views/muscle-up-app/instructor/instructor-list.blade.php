@extends('layouts.backend-main')

@section('title','Instructor List')

@section('title')
    Gym Dashboard
@stop

@section('user-name')
    {{get_auth_user_full_name()}}
@stop


@section('page-heading')
    <h2>Instructor List</h2>
    <p>List of Instructors added</p>
@stop



@section('content')
    <div class="row mailbox-wrapper">
        <div class="col-md-12">
            <div class="content-box">
                <div class="mail-header clearfix">
                    <span class="mail-title">List</span>
                </div>
                <table class="table table-hover text-center">
                    <thead>
                    <tr>
                        <th class="email-title">Serial</th>
                        <th class="email-body">Name</th>
                        <th class="email-title">Email</th>
                        <th>Date</th>
                        <th>Action</th>

                    </tr>
                    </thead>
                    <tbody>
                    <?php $counter = 1 ?>
                    @foreach($instructors as $instructor)
                        <tr id="{{$instructor->id}}">
                            <td>{{$counter}}</td>
                            <td class="email-title">{{$instructor->user->first_name}}</td>
                            <td class="email-body">{{$instructor->user->email}}</td>
                            <td class="date">{{$instructor->user->updated_at}}</td>
                            <td>
                                <ul class="">
                                    <li class="dropdown">
                                        <a href="javascript:void(0);" class="dropdown-toggle " data-toggle="dropdown">
                                            <i class="glyphicon glyphicon-th-list"></i>
                                        </a>
                                        <ul class="dropdown-menu dropdown-menu-right">
                                            <li><a class="btnEdit" href="{{route('instructor-edit',$instructor->id)}}"><i class="glyphicon glyphicon-dashboard"></i> Edit</a></li>
                                            <li><a class="btnDelete" href="{{route('instructor-delete',$instructor->id)}}"> <i class="glyphicon glyphicon-ban-circle"></i> Delete</a></li>
                                        </ul>
                                    </li>
                                </ul>
                        </tr>
                        <?php $counter++ ?>
                    @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <div id="myModal" class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" style="display: none;">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                    <h4 class="modal-title">Instructor: <span id="instructorName"></span></h4></div>
                <div class="modal-body">

                    <div class="content-box">
                        <div class="content-box-wrapper">
                            <div class="form-group"><label class="col-sm-4 control-label">Select Trainee</label><div class="col-sm-8"><select class="form-control" id="traineeId">

                                        {{--@if($roles->count() > 0)--}}
                                        {{--@foreach($roles as $role)--}}
                                        {{--<option value="{{$role->id}}">{{$role->name}}</option>--}}
                                        {{--@endForeach--}}
                                        {{--@else--}}
                                        {{--No Record Found--}}
                                        {{--@endif--}}

                                        <option value="1">Ahmad</option><option value="2">Saeed</option><option value="3">Gill</option>
                                    </select></div>
                            </div>

                            <input type="hidden" name="_token" value="{{ csrf_token() }}">
                            <br>
                            <br>
                            <div class="form-group"><label class="col-sm-4 control-label">Select Type</label><div class="col-sm-8"><select class="form-control" id="allocationType">
                                                <option>Group Fitness</option><option>Personal Trainer</option>
                                    </select></div>
                            </div>
                            <br>
                            <input type="hidden" name="instructorId" id="instructorId" value=""> </input>

                        </div><div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close<div class="ripple-wrapper">
                                    <div class="ripple ripple-on ripple-out" style="left: 26.3375px; top: 13.6px; background-color: rgb(43, 47, 51); transform: scale(7.75);">
                                    </div><div class="ripple ripple-on ripple-out" style="left: 27.3375px; top: 13.6px; background-color: rgb(43, 47, 51); transform: scale(7.75);">
                                    </div><div class="ripple ripple-on ripple-out" style="left: 36.3375px; top: 20.6px; background-color: rgb(43, 47, 51); transform: scale(7.75);">
                                    </div></div></button> <button type="button" class="btn btn-primary">Allocate<div class="ripple-wrapper"></div>
                            </button>
                        </div></div>
                </div>
            </div>
        </div>
    </div>




@stop

@section('script')
    {{--<script src="{{url('/admin-assets/widgets/button/button.js')}}" type="text/javascript"></script>--}}
    {{--<script src="{{url('/assets/js/trainee-inbox.js')}}" type="text/javascript"></script>--}}
    {{--<script src="{{url('/assets/js/inbox.js')}}" type="text/javascript"></script>--}}

    <script>


        $(document).ready(function () {
            /* Datatables basic */
            $('#datatable-example').dataTable();

            //*** trainee table detail action dropdown
            $('.dropdown-toggle').click(function (e) {
                e.preventDefault();
                $(this).siblings('.dropdown-menu.dropdown-menu-right').toggle('show').show();
                e.stopImmediatePropagation();
            })

//            $('.exercise_list').select2({
//                placeholder:'Exercise List....'
//
//            });
        });

        $(document).on('click', '.Instructor-title', function() {

             id = $(this).parent().attr('id');

             instructorName = $(this).text();
//            alert(id);
            $(".modal-body #instructorId").val( id );
            $("#instructorName").text( instructorName );

            $('#myModal').modal('toggle');

        });

        $(document).on('click', '.modal-footer', function() {

            id = $(".modal-body #instructorId").val();
            traineeId = $('#traineeId').val();
            allocationType =$('#allocationType').val();

            token = $('input[name=_token]').val();
//                        alert(token);

//            $('#myModal').modal('toggle');

            $.ajax({
                type: 'POST',
                url: '/instructor/allocate/' + id,
                data: {
                    '_token': token,
                    'instructor_id': id,
                    'trainee_id': traineeId,
                    'allocationType': allocationType,
                },
                success: function(data) {
                    $('#myModal').modal('toggle');
//                    alert(token);
                    toastr.success('Successfully deleted Post!', 'Success Alert', {timeOut: 5000});
                    $('.item' + data['id']).remove();
                    $('.col1').each(function (index) {
                        $(this).html(index+1);
                    });
                }
            });

        });

    </script>

    <script>


        $(document).ready(function () {
            /* Datatables basic */
            $('#datatable-example').dataTable();

            //*** trainee table detail action dropdown
            $('.dropdown-toggle').click(function (e) {
                e.preventDefault();
                $(this).siblings('.dropdown-menu.dropdown-menu-right').toggle('show').show();
                e.stopImmediatePropagation();
            })
        });


    </script>
@stop