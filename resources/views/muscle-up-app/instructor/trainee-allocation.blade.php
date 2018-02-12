@extends('layouts.backend-main')

@section('title','branch')


@section('sidebar_content')
    @include('includes.backend._leftBarAdmin')
@stop

@section('page-heading')

    <h2>Allocation: {{$instructor->user->first_name}}</h2>
    <p>Please fill in all the information and Allocate a one.</p>


@stop
@section('content')

    <div class="content-box">
        <div class="content-box-wrapper">
            <div class="form-group">
                {{--<label class="col-sm-4 control-label">Select Trainee</label>--}}

                <div class="col-sm-6"><select class="form-control" id="traineeId">


                        <option value="">Select a Trainee</option>
                        @if($unAllocatedTrainees->count() > 0)
                        @foreach($unAllocatedTrainees as $unAllocatedTrainee)
                        <option value="{{$unAllocatedTrainee->id}}">{{$unAllocatedTrainee->user->first_name}}</option>
                        @endForeach
                        @endif

                    </select>
                </div>

                {{--<div class="form-group">--}}
                {{--<label class="col-sm-4 control-label">Select Type</label>--}}
                <div class="col-sm-4"><select class="form-control" id="allocationType">
                        <option>Group Fitness</option><option>Personal Trainer</option>
                    </select></div>
                {{--</div>--}}

                <div class="col-sm-2">
                    <button type="button" id="allocate" class="btn btn-primary ">Allocate<div class="ripple-wrapper"></div>
                    </button>
                </div>
            </div>

            <input type="hidden" name="_token" value="{{ csrf_token() }}">
            <br>
            <input type="hidden" name="instructorId" id="instructorId" value="{{$instructor->id}}"> </input>

        </div>

    </div>
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
    <div class="panel">
        <div class="panel-body">
            <div class="example-box-wrapper">


                <table border="0" cellpadding="0" cellspacing="0"
                       class="table table-striped table-bordered" id="datatable-example">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>email</th>
                        <th>Package(Fee)</th>
                        <th>Actions</th>
                    </tr>
                    </thead>

                    <tbody>
                    @if($allocatedTrainees == null)
                        {{--{{$allocatedTrainees->count()}}--}}
                        <tr class="odd gradeA"><td colspan="6"> There is no record found.</td></tr>
                    @else
                        @if($allocatedTrainees->count() == 0)
                            {{--{{$allocatedTrainees->count()}}dd--}}
                            <tr class="odd gradeX"><td colspan="6"> There is no record found.</td></tr>
                        @else
                            {{--{{$allocatedTrainees->count()}}--}}
                            {{--{{dd($allocatedTrainees[0])}}--}}
                            @foreach($allocatedTrainees as $i=>$allocatedTrainee)

{{--                                <td>{{$allocatedTrainee->pivot->instructor->user_id}}</td>--}}
{{--                                <td>{{$allocatedTrainee->branch_id}}</td>--}}

                                <tr class="{{ (($i+1)%2) ? "even" : "odd" }} gradeX" id="{{$allocatedTrainee->id}}">
                                    <td class="Instructor-title">
{{--                                        <img width="5%" src="{{get_profile_pic_url($allocatedTrainee->user->profile_img)}}" /> --}}
                                        <span class="instructorName">{{$allocatedTrainee->user->first_name}}</span> <kbd class="mL5">01{{$allocatedTrainee->user->code}}</kbd></td>
{{--                                    <td>{{$allocatedTrainee->user->first_name}}</td>--}}
                                    <td>{{$allocatedTrainee->user->email}}</td>
                                    <td>{{$allocatedTrainee->pivot->type}}</td>
                                    <td>
                                        <ul class="">
                                            <li class="dropdown">
                                                <a href="javascript:void(0);" class="dropdown-toggle " data-toggle="dropdown">
                                                    <i class="glyphicon glyphicon-th-list"></i>
                                                </a>
                                                <ul class="dropdown-menu dropdown-menu-right">
                                                    <li><a class="create_modal_btn" href=""><i class="glyphicon glyphicon-eye-open"></i> Detail </a></li>
                                                    <li><a class="btnEdit" href=""><i class="glyphicon glyphicon-question-sign"></i> Health FAQs </a></li>
                                                    <li><a class="btnEdit" href=""><i class="glyphicon glyphicon-dashboard"></i> Health Statistics </a></li>
                                                    <li><a class="btnDelete" href=""> <i class="glyphicon glyphicon-ban-circle"></i> Deactivate </a></li>
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

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close<div class="ripple-wrapper">
                                    <div class="ripple ripple-on ripple-out" style="left: 26.3375px; top: 13.6px; background-color: rgb(43, 47, 51); transform: scale(7.75);">
                                    </div><div class="ripple ripple-on ripple-out" style="left: 27.3375px; top: 13.6px; background-color: rgb(43, 47, 51); transform: scale(7.75);">
                                    </div><div class="ripple ripple-on ripple-out" style="left: 36.3375px; top: 20.6px; background-color: rgb(43, 47, 51); transform: scale(7.75);">
                                    </div></div></button> <button type="button" class="btn btn-primary">Allocate<div class="ripple-wrapper"></div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

@stop

@section('script')

    <script src="{{url('/assets/js/branch.js')}}" type="text/javascript"></script>

    <script>

        $(document).on('click', '#allocate', function() {

            id = $("#instructorId").val();
            traineeId = $('#traineeId').val();
            allocationType =$('#allocationType').val();

            token = $('input[name=_token]').val();
//            alert(token);

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
//                    $('#myModal').modal('toggle');
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
