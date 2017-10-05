@extends('muscle-up-app.gym.dashboard.gym-dashboard')

@section('title','Trainee list')

@section('style-sheet')
    <link href="{{url('/admin-assets/applications/mailbox.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/elements/tables.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/icons/iconic/iconic.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/assets/css/inbox.css')}}" rel="stylesheet" type="text/css">
@stop


@section('page-heading')
    <h2>Trainee List</h2>
    <p>List of Trainees Added</p>
@stop


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
                        <th class="email-title">Email</th>
                        <th>Date Added</th>
                        <th>Detail</th>
                    </tr>
                    </thead>
                    <tbody>
                    <?php $counter = 1 ?>
                    @foreach($trainees as $trainee)
                        <tr id="{{$trainee->id}}">
                            <td sty>{{$counter}}</td>
                            <td class="email-title">{{$trainee->user->first_name}}</td>
                            <td class="email-body">{{$trainee->user->email}}</td>
                            <td class="date">{{$trainee->user->updated_at}}</td>
                            <td><a href="{{route('trainee-list-detail',$trainee->id)}}" class="glyph-icon icon-iconic-right-circle"></a></td>
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
    <script src="{{url('/assets/js/trainee-inbox.js')}}" type="text/javascript"></script>
    <script src="{{url('/assets/js/inbox.js')}}" type="text/javascript"></script>
@stop