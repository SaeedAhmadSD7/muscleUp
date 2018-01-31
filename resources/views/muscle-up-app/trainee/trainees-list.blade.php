@extends('layouts.backend-main')

@section('title','List of Trainees')

@section('page-heading')
    <h2>List of Trainees</h2>
    <p>Please fill in all the information and then click Add Trainee.</p>
@stop


@section('content')
    <div class="panel">
        <div class="panel-body">
            <h3 class="title-hero">Trainees</h3>
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
                @if($trainees == null)
                        <tr class="odd gradeA"><td colspan="6"> There is no record found.</td></tr>
                @else
                    @if($trainees->count() == 0)
                        <tr class="odd gradeX"><td colspan="6"> There is no record found.</td></tr>
                    @else
                        @foreach($trainees as $i=>$t)

                        <tr class="{{ (($i+1)%2) ? "even" : "odd" }} gradeX">
                            <td><img width="20%" src="{{get_profile_pic_url($t->profile_img)}}" /> {{get_trainee_full_name($t)}} <kbd class="mL5">{{$t->code}}</kbd></td>
                            <td>{{$t->email}}</td>
                            <td>{{$t->initial_fee}}</td>
                            <td>
                                <ul class="">
                                    <li class="dropdozwn">
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
        });


    </script>
@stop