<table border="0" cellpadding="0" cellspacing="0"
       class="table table-striped table-bordered" id="datatable-example">
    <thead>
    <h3>{{ $trainees->count()}}</h3>

    <tr>
        <th>vu_reg_no</th>
        <th>Name</th>
        <th>father</th>
        <th>degree_program</th>
        {{--<th>study_at</th>--}}
        <th>student_mailing_address</th>
        {{--<th>student_permanent_address</th>--}}
        <th>student_vu_email</th>
        <th>student_personal_email</th>
        <th>student_phone_no</th>
        <th>mobile</th>
    </tr>
    </thead>
    @if(isset($trainees))
        <tbody>

        @if($trainees == null)
            <tr class="odd gradeA">
                <td colspan="6"> There is no record found.</td>
            </tr>
        @else
            @if($trainees->count() == 0)
                <tr class="odd gradeX">
                    <td colspan="6"> There is no record found.</td>
                </tr>
            @else
                @foreach($trainees as $i=>$t)
                    <tr class="{{ (($i+1)%2) ? "even" : "odd" }} gradeX">
                        <td>{{$t->vu_reg_no}}</td>
                        <td>{{$t->name}}</td>
                        <td>{{$t->father}}</td>
                        <td>{{$t->study_program}}</td>
                        {{--<td>{{$t->study_at}}</td>--}}
                        <td>{{$t->student_mailing_address}}</td>
                        {{--<td>{{$t->student_permanent_address}}</td>--}}

                        {{--<img width="10%"--}}
                                 {{--src="{{get_profile_pic_url($t->profile_img)}}"/> {{get_trainee_full_name($t)}}--}}
                            {{--<kbd class="mL5">{{$t->name}}</kbd></td>--}}
                        <td>{{$t->student_vu_email}}</td>
                        <td>{{$t->student_personal_email}}</td>
                        <td>{{$t->student_phone_no}}</td>
                        <td>{{$t->mobile}}</td>
                        <td>
                            <ul class="">
                                <li class="dropdown">
                                    <a href="javascript:void(0);" class="dropdown-toggle "
                                       data-toggle="dropdown">
                                        <i class="glyphicon glyphicon-th-list"></i>
                                    </a>
                                    <ul class="dropdown-menu dropdown-menu-right">
                                        <li><a class="create_modal_btn"
                                               href="{{route('trainee-list-detail',$t->name)}}"><i
                                                        class="glyphicon glyphicon-eye-open"></i> Detail
                                            </a></li>
                                        <li><a class="btnEdit" href="{{$t->name}}"><i
                                                        class="glyphicon glyphicon-question-sign"></i>
                                                Health FAQs </a></li>
                                        <li><a class="btnEdit" href="{{$t->name}}"><i
                                                        class="glyphicon glyphicon-dashboard"></i> Health
                                                Statistics </a></li>
                                        <li><a class="btnDelete" href="{{$t->name}}"> <i
                                                        class="glyphicon glyphicon-ban-circle"></i>
                                                Deactivate </a></li>
                                    </ul>
                                </li>
                            </ul>
                        </td>
                    </tr>
                @endforeach
            @endif
        @endif
        </tbody>
        {{$trainees->links()}}
    {{--@endif--}}
    {{--------------------------------------------------------}}
    {{--<table border="0" cellpadding="0" cellspacing="0"--}}
    {{--class="table table-striped table-bordered" id="datatable-example">--}}
    {{--<thead>--}}
    {{--<tr>--}}
    {{--<th>Name</th>--}}
    {{--<th>email</th>--}}
    {{--<th>Actions</th>--}}
    {{--</tr>--}}
    {{--</thead>--}}
    @else
        <tbody>

        @if($instructorTrainees == null)
            <tr class="odd gradeA">
                <td colspan="6"> There is no record found.</td>
            </tr>
        @else

            @if($instructorTrainees->count() == 0)
                <tr class="odd gradeX">
                    <td colspan="6"> There is no record found.</td>
                </tr>
            @else
                @foreach($instructorTrainees->trainees as $i=>$t)
                    <tr class="{{ (($i+1)%2) ? "even" : "odd" }} gradeX">
                        <td><img width="20%"
                                 src="{{get_profile_pic_url($t->user->profile_img)}}"/>{{$t->user->first_name}} {{$t->user->last_name}}
                            <kbd class="mL5">{{$t->code}}</kbd></td>
                        <td>{{$t->user->email}}</td>
                        <td>
                            <ul class="">
                                <li class="dropdown">
                                    <a href="javascript:void(0);" class="dropdown-toggle "
                                       data-toggle="dropdown">
                                        <i class="glyphicon glyphicon-th-list"></i>
                                    </a>
                                    <ul class="dropdown-menu dropdown-menu-right">
                                        <li><a class="create_modal_btn"
                                               href="{{route('trainee-list-detail',$t->name)}}"><i
                                                        class="glyphicon glyphicon-eye-open"></i> Detail
                                            </a></li>
                                        <li><a class="btnEdit" href="{{$t->name}}"><i
                                                        class="glyphicon glyphicon-question-sign"></i>
                                                Health FAQs </a></li>
                                    </ul>
                                </li>
                            </ul>
                        </td>
                    </tr>
                @endforeach
            @endif
        @endif
        </tbody>
        {{--</table>--}}
    @endif
</table>

<script>


    $(document).ready(function () {
        /* Datatables basic */
//    $('#datatable-example').dataTable();

        //*** trainee table detail action dropdown
        $('.dropdown-toggle').click(function (e) {
            e.preventDefault();
            $(this).siblings('.dropdown-menu.dropdown-menu-right').toggle('show').show();
        })
    });


</script>