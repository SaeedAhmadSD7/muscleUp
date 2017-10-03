@extends('muscle-up-app.admin.dashboard.admin-dashboard')

@section('style-sheet')
    <link href="{{url('/admin-assets/icons/iconic/iconic.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/assets/css/inbox.css')}}" rel="stylesheet" type="text/css">
@stop


@section('page-heading')
    <h2>RequestBox</h2>
    <p>Request for Registration by Gyms</p>
@stop



@section('content')
    <div class="row mailbox-wrapper">
        <div class="col-md-12">
            <div class="content-box">
                <div class="mail-header clearfix">
                    <span class="mail-title">Inbox</span>
                </div>
                <table class="table table-hover text-center">
                    <thead>
                    <tr>
                        <th class="email-title">Serial</th>
                        <th class="email-title">Email</th>
                        <th class="email-body">Name</th>
                        <th>Date</th>
                        <th>Detail</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    <?php $counter = 1 ?>
                    @foreach($Requests as $Request)
                        <tr id="{{$Request->id}}">
                            <td sty>{{$counter}}</td>
                            <td class="email-title">{{$Request->name}}</td>
                            <td class="email-body">{{$Request->email}}</td>
                            <td class="date">{{$Request->updated_at}}</td>
                            <td><a href="{{route('message-detail',$Request->id)}}" class="glyph-icon icon-iconic-right-circle"></a></td>
                            <td><a href="{{route('message-delete',$Request->id)}}" class="glyph-icon icon-iconic-cancel-circle"></a></td>
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
    <script src="{{url('/assets/js/inbox.js')}}" type="text/javascript"></script>
@stop