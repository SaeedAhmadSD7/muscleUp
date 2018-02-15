<div id="page-title">
    <h2>Diet Program List</h2>
</div>

<div class="panel">
    <a class="btn btn-success" href="{{route('diet-create')}}" type="submit">New Program<span class="glyphicon glyphicon-plus"></span></a>
    <div class="panel-body">
        <div class="example-box-wrapper">
            <table id="assignedTable" cellpadding="0" cellspacing="0" border="0" class="table table-bordered">
                <thead>
                <tr>
                    <th width="20px">No.</th>
                    <th style="text-align:center;" width="140px">Program Name</th>
                    <th style="text-align:center;">Description</th>
                    <th>Action</th>

                </tr>
                </thead>
                <tbody>
                <?php $count=1; ?>
                @foreach($dietPrograms as $dietProgram)
                    <tr>
                        <td width="20px" style="text-align:center;"><h5><?php echo $count; ?></h5></td>
                        <td width="140px" style="text-align:center;"><h5>{{$dietProgram->title}}</h5></td>
                        <td><h5>{{$dietProgram->description}}</h5></td>
                        <td>
                            <ul class="">
                                <li class="dropdown">
                                    <a href="javascript:void(0);" class="dropdown-toggle " data-toggle="dropdown">
                                        <i class="glyphicon glyphicon-th-list"></i>
                                    </a>
                                    <ul class="dropdown-menu dropdown-menu-right">
                                        <li><a class=""  href="{{route('diet_list_detail' , ['id'=>$dietProgram->id])}}" type="submit"><i class="glyphicon glyphicon-eye-open">Detail</i></a></li>
                                        <li><a class="glyphicon glyphicon-edit"  href="{{route('edit-diet',['id'=>$dietProgram->id])}}" type="submit">Edit</a></li>
                                        <li><a class="glyphicon glyphicon-trash"  href="{{route('delete-diet',['id'=>$dietProgram->id])}}" type="submit">Delete</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </td>
                        {{--<td width="20px">--}}
                        {{--<a class="btn btn-primary" href="{{route('edit-diet',['id'=>$dietProgram->id])}}" type="submit"><span class="glyphicon icon-elusive-pencil"></span></a>--}}
                        {{--</td>--}}
                        {{--<td width="20px">--}}
                        {{--<a class="btn btn-danger" href="{{route('delete-diet',['id'=>$dietProgram->id])}}" type="submit"><span class="glyphicon icon-typicons-cancel"></span></a>--}}
                        {{--</td>--}}
                    </tr>
                    <?php $count++; ?>
                @endforeach
                </tbody>
            </table>
        </div>
    </div>
</div>

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