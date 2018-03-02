@extends('layouts.backend-main')

@section('title','Branches list')

@section('style-sheet')
    <link href="{{url('/admin-assets/icons/iconic/iconic.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/assets/modal/modal.css')}}" rel="stylesheet" type="text/css">
@stop


@section('page-heading')
    <h2>Branches List</h2>
    <p>List of Branches Added</p>
@stop



{{--{{ dd($gyms) }}--}}

@section('content')
    <div class="row mailbox-wrapper">
        <div class="col-md-12">
            <div class="content-box">

                <table class="table table-hover text-center">
                    <thead>
                    <tr>
                        <th class="email-title">Serial</th>
                        <th class="email-body">Name</th>
                        {{--<th class="email-title">Company</th>--}}
                        {{--<th class="email-title">Admin</th>--}}
                        <th>Date Added</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <?php $counter = 1 ?>
                    @foreach($gyms as $gym)
                        <tr>
                        {{--<tr id="{{$gym->id}}">--}}
                            <td>{{$counter}}</td>
                            <td class="email-title">{{$gym->title}}</td>
                            {{--{{dd($gym->gym)}}--}}
{{--                            <td class="email-body">{{$gym->gym->title}}</td>--}}
                            <td class="date">{{$gym->created_at}}</td>
{{--                            <td class="date">{{$gym->updated_at}}</td>--}}
                            {{--<td><a href="{{route('message-detail',$gym->id)}}" class="glyph-icon icon-iconic-right-circle"></a></td>--}}
{{--                            <td><a href="{{route('company.destroy',$gym->id)}}" class="glyph-icon icon-iconic-cancel-circle"></a></td>--}}
                            <td>
                                <ul class="">
                                    <li class="dropdown">
                                        <a href="javascript:void(0);" class="dropdown-toggle " data-toggle="dropdown">
                                            <i class="glyphicon glyphicon-th-list"></i>
                                        </a>
                                        <ul class="dropdown-menu dropdown-menu-right">
                                            {{--<li><a class="create_modal_btn" href="{{route('branch.destroy',$gym->id)}}"><i class="glyphicon glyphicon-eye-open"></i> Delete </a></li>--}}

                                            <li>
                                                {!! Form::open(array('id'=>"deleteBranch",'route' => array('branch.destroy', $gym->id), 'method' => 'delete')) !!}
                                                <input type="hidden" value="{{$gym->id}}">
                                                <button class=" btn create_modal_btn " type="submit">
                                                <i class="glyphicon glyphicon-question-sign"></i> Delete
                                                </button>
                                                {!! Form::close() !!}

                                            </li>

                                            <li>
                                                {!! Form::open(array('id'=>"editBranch",'route' => array('branch.edit', $gym->id), 'method' => 'get')) !!}
                                                <input type="hidden" value="{{$gym->id}}">
                                                <button class="btn create_modal_btn"  type="submit">
                                                <i class="glyphicon glyphicon-ban-circle"></i> Edit
                                                </button>
                                                {!! Form::close() !!}
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </td>

{{--                            <td><a href="{{route('company.destroy',$gym->id)}}" class="glyph-icon icon-iconic-cancel-circle"></a></td>--}}
                        </tr>
                        <?php $counter++ ?>
                    @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
@stop

@section('script')
    <script src="{{url('/assets/modal/modal.js')}}" type="text/javascript"></script>
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

//        $("#deleteBranch").click(function() {
//            $("#deleteBranch").submit();
//        });
//
//        $("#editBranch").click(function() {
//            $("#editBranch").submit();
//        });



    </script>
@stop
