@extends('layouts.backend-main')
@section('title','WBS')
@section('style-sheet')
    <style>
        .create {
            float: right;
        }

    </style>
@show
@section('content')

  <div id="page-title">
        <h2>WBS List</h2>
  </div>

    <div class="panel">
        <form method="get" action="{{route('wbs-add')}}">
            <button class="btn btn-success" type="submit">New WBS
              <span class="glyphicon glyphicon-plus">
              </span>
            </button>
        </form>
        <div class="panel-body">
            <div class="example-box-wrapper">
                <table id="assignedTable" cellpadding="0" cellspacing="0" border="0" class="table table-bordered">
                   <thead>
                      <tr>
                          <th width="20px">No.</th>
                          <th style="text-align:center; width: 200px">WBS Title</th>
                          <th style="text-align:center;">Descritpion</th>
                          <th width="20px">Edit</th>
                          <th width="20px">Delete</th>
                      </tr>
                   </thead>
                    <tbody>
                            @foreach($wbs_list as $wbs)
                                <?php $count=1; ?>
                                <tr>
                                    <td width="20px" style="text-align:center;"><h5><?php echo $count; ?></h5></td>
                                    <td width="140px" style="text-align:center;"><h5>{{$wbs->title}}</h5></td>
                                    <td><h5>{{$wbs->description}}</h5></td>
                                        <td width="20px">
                                                <a class="btn btn-primary" href="{{route('wbs-edit',$wbs)}}" type="submit"><span class="glyphicon glyphicon-edit"></span></a>
                                        </td>
                                        <td width="20px">
                                                <a class="btn btn-danger" href="{{route('wbs-delete', $wbs)}}" type="submit"><span class="glyphicon glyphicon-remove-sign"></span></a>
                                        </td>
                                </tr>
                                <?php $count++; ?>
                            @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>

@stop