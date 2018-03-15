@extends('layouts.backend-main')

@section('page-heading')
    <h2>Trainee Detail</h2>
    <p>Details of Trainee</p>
@stop

@section('style-sheet')
    <link href="{{url('/admin-assets/icons/iconic/iconic.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/assets/css/inbox.css')}}" rel="stylesheet" type="text/css">
@stop

@section('content')

    <div class="row mailbox-wrapper">
        <div class="col-md-12">
            <div class="content-box">
                <div class="mail-toolbar clearfix">
                    <div class="float-left">
                        <h4 class="font-primary">Account Detail of trainee {{$trainee->user->first_name}} {{$trainee->user->last_name}} </h4>
                    </div>
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

                            <tr class="address">
                                <th>Address</th>
                                <td>{{$trainee->user->address}}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="button-pane">
                    <a class="btn ra-100 btn-danger accept_request" href="{{route('trainee-list-delete',$trainee->id)}}"><i class="glyph-icon icon-mail-reply"></i> Delete Trainee</a>
                </div>

            </div>
        </div>
    </div>


@stop
