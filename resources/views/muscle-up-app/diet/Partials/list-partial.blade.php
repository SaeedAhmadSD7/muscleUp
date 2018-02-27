<div id="ajaxData">
<div id="page-title">
    <h2>Diet Program List</h2>
    @if(isset($message))
        <div class="alert alert-danger" >{{$message}}</div>
    @endif
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
                                        <input type="hidden" name="_token" value="{{ csrf_token() }}">

                                        <li><a class=""  href="{{route('diet_list_detail' , ['id'=>$dietProgram->id])}}" type="submit"><i class="glyphicon glyphicon-eye-open">Detail</i></a></li>
                                        <li><a class="glyphicon glyphicon-edit"  href="{{route('edit-diet',['id'=>$dietProgram->id])}}" type="submit">Edit</a></li>
                                        <li><a class="glyphicon glyphicon-trash"  href="javascript:deleteDiet({{$dietProgram->id}})">Delete</a></li>
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

    {{--<script src="{{url('/dist/js/AjaxCallMethod.js')}}" type="text/javascript"></script>--}}


<script>


    $(document).ready(function () {
        /* Datatables basic */
//        $('#datatable-example').dataTable();

        //*** trainee table detail action dropdown
        $('.dropdown-toggle').click(function (e) {
            e.preventDefault();
            $(this).siblings('.dropdown-menu.dropdown-menu-right').toggle('show').show();
            e.stopImmediatePropagation();
        })
    });


</script>
<script>

    function deleteDiet(diet_id){

        token = $('input[name=_token]').val();
        var type,url,params,success;
        type='GET';
        url='diet/delete/'+diet_id;
        params={
            '_token': token
        };
        success= function (data) {

                $('#ajaxData').innerHTML = '';
            $('#ajaxData').html(data);
        };
        if(confirm('Are you sure to remove this record ?')) {
            ajaxCallMethod(type, url, params, success);
        }

    }
</script>