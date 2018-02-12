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
                <div id="ajx">
                {{--<table class="table table-hover text-center">--}}
                    {{--<thead>--}}
                    {{--<tr>--}}
                        {{--<th>Name</th>--}}
                        {{--<th>email</th>--}}
                        {{--<th>Package(Fee)</th>--}}
                        {{--<th>Actions</th>--}}
                    {{--</tr>--}}
                    {{--</thead>--}}
                    {{--<tbody id="" >--}}
                    {{--<?php $counter = 1 ?>--}}
                    {{--@foreach($instructors as $instructor)--}}
                        {{--<tr id="{{$instructor->id}}">--}}
                            {{--<td>{{$counter}}</td>--}}
                            {{--<td class="Instructor-title-1">--}}
                                {{--                                <img width="20%" src="{{get_profile_pic_url($instructor->user->profile_img)}}" /> --}}
                                {{--<span class="instructorName"><a href="{{route('instructor-allocation', $instructor->id)}}" >{{get_full_name($instructor->user)}}</a></span> <kbd class="mL5">01{{$instructor->user->code}}</kbd></td>--}}
                            {{--<td>{{$instructor->user->email}}</td>--}}
                            {{--<td class="date">{{$instructor->user->updated_at}}</td>--}}

                            {{--<td>--}}
                                {{--<ul class="">--}}
                                    {{--<li class="dropdown">--}}
                                        {{--<a href="javascript:void(0);" class="dropdown-toggle " data-toggle="dropdown">--}}
                                            {{--<i class="glyphicon glyphicon-th-list"></i>--}}
                                        {{--</a>--}}
                                        {{--<ul class="dropdown-menu dropdown-menu-right">--}}
                                            {{--<li><a class="btnEdit" href="{{route('instructor-edit',$instructor->id)}}"><i class="glyphicon glyphicon-dashboard"></i> Edit</a></li>--}}
                                            {{--<li><a class="btnDelete" href="{{route('instructor-delete',$instructor->id)}}"> <i class="glyphicon glyphicon-ban-circle"></i> Delete</a></li>--}}
                                        {{--</ul>--}}
                                    {{--</li>--}}
                                {{--</ul>--}}
                        {{--</tr>--}}
                        {{--<?php $counter++ ?>--}}
                    {{--@endforeach--}}
                    {{--</tbody>--}}
                {{--</table>--}}
                    {{--<div id="pg">--}}
                        {{--{{$instructors->links()}}--}}
                    {{--</div>--}}
                </div>

                <select id="issueinput5" name="limit">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                </select>

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

                                        {{--@if($unAllocatedTrainees->count() > 0)--}}
                                            {{--<option value="1">Ahmad</option>--}}
                                        {{--@foreach($unAllocatedTrainees as $unAllocatedTrainee)--}}
                                                {{--<option value="1">Ahmad</option>--}}
                                        {{--<option value="{{$unAllocatedTrainees->id}}">{{$unAllocatedTrainees->first_name}}</option>--}}
                                        {{--@endForeach--}}

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
    <script src="{{url('/dist/js/AjaxCallMethod.js')}}" type="text/javascript"></script>
    <script>
        /*==================== PAGINATION =========================*/
        $(window).on('hashchange',function(){
            page = window.location.hash.replace('#','');
            getProducts(page);
        });
        $(document).on('click','.pagination a', function(e){
            e.preventDefault();
            var page = $(this).attr('href').split('page=')[1];
            // getProducts(page);
            location.hash = page;
        });
        $('#issueinput5').on('change', function() {
            page = window.location.hash.replace('#','');
            getProducts(page);
        });
        function getProducts(page){
            var url,success,params;
            url='/ajax/instructor/list?page=' + page;
            params={'pageinateData':$('#issueinput5').val()};
            success=function(data){
                $('#pg').css("display", "none");
                $('#ajx').html(data);
            };
            ajaxCallMethod(url,params,success);
        }

        $(document).ready(function(){
            var url,success,params;
            url='/ajax/instructor/list?page=1';
            params='';
            success=function(data){
                $('#pg').css("display", "none");
                $('#ajx').html(data);
            };
            ajaxCallMethod(url,params,success);
        });

    </script>
    <script>



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


//        $(document).ready(function () {
//            /* Datatables basic */
//            $('#datatable-example').dataTable();
//
//            //*** trainee table detail action dropdown
//            $('.dropdown-toggle').click(function (e) {
//                e.preventDefault();
//                $(this).siblings('.dropdown-menu.dropdown-menu-right').toggle('show').show();
//                e.stopImmediatePropagation();
//            })
//        });


    </script>
@stop