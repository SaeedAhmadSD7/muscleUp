@extends('muscle-up-app.admin.dashboard.admin-dashboard')

@section('title','Branches list')

@section('style-sheet')
    <link href="{{url('/admin-assets/applications/mailbox.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/elements/tables.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/icons/iconic/iconic.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/assets/css/inbox.css')}}" rel="stylesheet" type="text/css">
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
                <div class="mail-header clearfix">
                    <span class="mail-title">List</span>
                </div>
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
                        {{--<tr id="{{$gym->id}}">--}}
                            <td sty>{{$counter}}</td>
                            <td class="email-title">{{$gym->title}}</td>
                            {{--{{dd($gym->gym)}}--}}
{{--                            <td class="email-body">{{$gym->gym->title}}</td>--}}
                            <td class="date">{{$gym->created_at}}</td>
{{--                            <td class="date">{{$gym->updated_at}}</td>--}}
                            {{--<td><a href="{{route('message-detail',$gym->id)}}" class="glyph-icon icon-iconic-right-circle"></a></td>--}}
{{--                            <td><a href="{{route('company.destroy',$gym->id)}}" class="glyph-icon icon-iconic-cancel-circle"></a></td>--}}
                            <td>
                            {!! Form::open(array('route' => array('branch.destroy', $gym->id), 'method' => 'delete')) !!}
                            <button class='btn btn-danger btn-xs' type="submit">Delete</button>
                            {!! Form::close() !!}
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
    <script src="{{url('/admin-assets/widgets/button/button.js')}}" type="text/javascript"></script>
    <script src="{{url('/assets/js/inbox.js')}}" type="text/javascript"></script>
@stop