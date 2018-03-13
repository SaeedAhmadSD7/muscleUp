<table class="table table-hover text-center">
    <thead>
    <tr>
        <th>Name</th>
        <th>email</th>
        <th>Package(Fee)</th>
        <th>Actions</th>
    </tr>
    </thead>
    <tbody id="" >
    <?php $counter = 1 ?>
    @foreach($instructors as $instructor)
        <tr id="{{$instructor->id}}">
            {{--<td>{{$counter}}</td>--}}
            <td class="Instructor-title-1">
                {{--                                <img width="20%" src="{{get_profile_pic_url($instructor->user->profile_img)}}" /> --}}
                <span class="instructorName">{{get_full_name($instructor->user)}}</span> <kbd class="mL5">{{$instructor->code}}</kbd></td>
            <td>{{$instructor->user->email}}</td>
            <td class="date">{{$instructor->user->updated_at}}</td>

            <td>
                <ul class="">
                    <li class="dropdown">
                        <a href="javascript:void(0);" class="dropdown-toggle " data-toggle="dropdown">
                            <i class="glyphicon glyphicon-th-list"></i>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-right">
                            <li><a class="btnEdit" href="{{route('instructor-allocation',$instructor->id)}}"><i class="glyphicon glyphicon-magnet"></i> Allocation</a></li>
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
{{$instructors->links()}}

<script>


    $(document).ready(function () {
//            /* Datatables basic */
//            $('#datatable-example').dataTable();

        //*** trainee table detail action dropdown
        $('.dropdown-toggle').click(function (e) {
            e.preventDefault();
            $(this).siblings('.dropdown-menu.dropdown-menu-right').toggle('show').show();
            e.stopImmediatePropagation();
        })
    });


</script>