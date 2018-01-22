@extends('layouts.backend-main')

@section('title','Instructor List')


@section('page-heading')
    <h2 xmlns="http://www.w3.org/1999/html">List of Instructor</h2>
    {{--<p>Please fill in all the information and then click Add Instructor.</p>--}}
@stop


@section('content')
    <div class="panel">
        <div class="panel-body">
            <h3 class="title-hero">Instructor</h3>
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
                    @if($instructors == null)
                        <tr class="odd gradeA"><td colspan="6"> There is no record found.</td></tr>
                    @else
                        @if($instructors->count() == 0)
                            <tr class="odd gradeX"><td colspan="6"> There is no record found.</td></tr>
                        @else

                            @foreach($instructors as $i=>$instructor)

                                <tr class="{{ (($i+1)%2) ? "even" : "odd" }} gradeX" id="{{$instructor->id}}">
                                    <td class="Instructor-title"><img width="20%" src="{{get_profile_pic_url($instructor->user->profile_img)}}" /> <span class="instructorName">{{get_full_name($instructor->user)}}</span> <kbd class="mL5">01{{$instructor->user->code}}</kbd></td>
                                    <td>{{$instructor->user->email}}</td>
                                    <td>60,000</td>
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



    <button class="btn btn-default" data-toggle="modal" data-target=".bs-example-modal-lg">
        modal for trainee allocation
        <div class="ripple-wrapper"></div>
    </button>
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
                                        <option>Ahmad</option><option>Saeed</option><option>Gill</option>
                                    </select></div>
                            </div>
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

            $('.exercise_list').select2({
                placeholder:'Exercise List....'

            });
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
                        alert(token);

//            $('#myModal').modal('toggle');

            $.ajax({
                type: 'POST',
                url: '/instructor/allocate/' + id,
                data: {
                    '_token': $('input[name=_token]').val(),
                },
                success: function(data) {
                    toastr.success('Successfully deleted Post!', 'Success Alert', {timeOut: 5000});
                    $('.item' + data['id']).remove();
                    $('.col1').each(function (index) {
                        $(this).html(index+1);
                    });
                }
            });

        });

    </script>
@stop