@extends('muscle-up-app.admin.dashboard.admin-dashboard')

@section('page-heading')
    <h2>Request Detail</h2>
    <p>Request for Registration</p>
@stop

@section('style-sheet')
    <link href="{{url('/admin-assets/applications/mailbox.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/elements/tables.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/icons/iconic/iconic.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/elements/buttons.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/admin-assets/helpers/border-radius.css')}}" rel="stylesheet" type="text/css">
    <link href="{{url('/assets/css/inbox.css')}}" rel="stylesheet" type="text/css">
@stop


@section('content')
    <div class="row mailbox-wrapper">
        <div class="col-md-12">
            <div class="content-box">


                <div class="mail-toolbar clearfix">
                    <div class="float-left">
                        <h4 class="font-primary">Request By {{$Request->name}}</h4>
                    </div>
                </div>


                <div class="email-body">
                    <div class="example-box-wrapper">
                        <table border="0" cellpadding="0" cellspacing="0" class="table table-striped table-bordered gym_request" id="datatable-example">
                            <tr class="name">
                                <th>Gym Name</th>
                                <td>{{$Request->name}}</td>
                            </tr>

                            <tbody>
                            <tr class="email">
                                <th>Email Address</th>
                                <td>{{$Request->email}}</td>
                            </tr>

                            <tr class="country">
                                <th>Country</th>
                                <td>{{$Request->country}}</td>
                            </tr>

                            <tr class="city">
                                <th>City</th>
                                <td>{{$Request->city}}</td>
                            </tr>

                            <tr class="branches">
                                <th>Number of Branches</th>
                                <td class="center">{{$Request->num_branches}}</td>
                            </tr>

                            <tr class="contact">
                                <th>Contact Number</th>
                                <td>{{$Request->dial_code}}{{$Request->phone_number}}</td>
                            </tr>

                            <tr class="co-ordinates">
                                <th>Geological Co-ordinates</th>
                                <td>{{$Request->latitude}},{{$Request->longitude}}</td>
                            </tr>

                            <tr class="address">
                                <th>Address</th>
                                <td>{{$Request->address}}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="button-pane">
                        <a class="btn ra-100 btn-secondary accept_request" href="{{route('process-request',$Request->id)}}"><i class="glyph-icon icon-mail-reply"></i> Process Request</a>
                    </div>
                </div>

            </div>
        </div>
    </div>
@stop