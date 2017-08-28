@extends('layouts.backend-main')
@section('title','Diet program')
@section('style-sheet')
    <style>
        /*.fieldR{*/
        /*display: none;*/
        /*}*/

        .create {
            float: right;
        }

    </style>
@show
@section('content')

  <div id="page-title">
        <h2>Diet Program List</h2>
  </div>

    <div class="panel">
        <form method="get" action="{{route('diet')}}">
            <button class="btn btn-success" type="submit">New Plan
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
                          <th style="text-align:center;" width="140px">Plan Name</th>
                          <th style="text-align:center;">Description</th>
                          <th width="20px">Edit</th>
                          <th width="20px">Delete</th>
                      </tr>
                   </thead>
                    <tbody>
                            @foreach($plans as $plan)
                                <?php $count=1; ?>
                                <tr>
                                    <td width="20px" style="text-align:center;"><h5><?php echo $count; ?></h5></td>
                                    <td width="140px" style="text-align:center;"><h5>{{$plan->name}}</h5></td>
                                    <td><h5>{{$plan->description}}</h5></td>
                                        <td width="20px">
                                            <form method="get" action="{{route('edit-diet',['id'=>$plan->id])}}">
                                                <button class="btn btn-primary" type="submit">
                                                    <span class="glyphicon glyphicon-edit">
                                                    </span>
                                                </button>
                                            </form>
                                        </td>
                                        <td width="20px">
                                            <form method="get" action="{{route('delete-diet',['id'=>$plan->id])}}">
                                                <button class="btn btn-danger" type="submit">
                                                    <span class="glyphicon glyphicon-remove-sign">
                                                    </span>
                                                </button>
                                            </form>
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
