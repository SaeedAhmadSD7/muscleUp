@extends('muscle-up-app.gym.dashboard.gym-dashboard')

@section('title','Trainee Personal detail')

@section('style-sheet')

@stop

@section('content')


    <div class="pad15A clearfix mrg10B">
        <div class="float-left">
            <b>{{$trainee->user->first_name}}</b> ({{$trainee->user->first_name}})
        </div>


        <div class="float-right opacity-80">
            <i class="glyph-icon icon-clock-o mrg5R"></i> {{$trainee->user->updated_at}}
        </div>
    </div>


    <div class="mail-toolbar clearfix">
        <div class="float-left">
            <h4 class="font-primary">Account Detail of trainee {{$trainee->user->first_name}} {{$trainee->user->last_name}} </h4>
        </div>


        <div class="float-right">
            {!! Form::open(['route' => ['trainee-list-delete',$trainee->id], 'method' => 'DELETE']) !!}
            <button class="btn btn-danger mrg10L" type="button" data-modal="confirmDelete" data-toggle="modal" data-target="#confirmDelete" data-title="Delete trainee" data-message="Are you sure you want to Delete : {{$trainee->first_name}}">
                DELETE</button>
            {!! Form::close() !!}

        </div>
        @include('muscle-up-app.trainee.include.delete-modal')
    </div>


    <div class="email-body">
        <div class="example-box-wrapper">
            <table border="0" cellpadding="0" cellspacing="0" class="table table-striped table-bordered gym_request" id="datatable-example">
                <tr class="name">
                    <th>Trainee Name</th>
                    <td>{{$trainee->user->first_name}} {{$trainee->user->last_name }}</td>
                </tr>

                <tbody>
                <tr class="email">
                    <th>Email Address</th>
                    <td>{{$trainee->user->email}}</td>
                </tr>
                <tr class="birth-date">
                    <th>Birth date</th>
                    <td class="center">{{$trainee->user->dob}}</td>
                </tr>

                <tr class="contact">
                    <th>Contact Number</th>
                    <td>{{$trainee->user->dial_code}}{{$trainee->user->phone_number}}</td>
                </tr>

                <tr class="gender">
                    <th>Gender</th>
                    <td>{{$trainee->user->gender}}</td>
                </tr>

                {{--<tr class="address">--}}
                {{--<th>Address</th>--}}
                {{--<td>{{$trainee->address}}</td>--}}
                {{--</tr>--}}
                </tbody>
            </table>
        </div>
    </div>



@stop

@section('script')
    <script src="/assets/js/delete-trainee.js" type="text/javascript"></script>
    <script src="/assets/plugins/bootstrap-3.3.7/js/bootstrap.js" type="text/javascript"></script>

@stop
