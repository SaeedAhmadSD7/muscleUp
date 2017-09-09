@extends('muscle-up-app.gym.dashboard.gym-dashboard')

@section('content')
    <div class="row mailbox-wrapper">

        {{--<div class="col-md-3">--}}
        {{--<div class="content-box nav-list mrg15B">--}}
        {{--<div class="pad10A">--}}
        {{--<a class="btn btn-success btn-lg btn-block" href="#" title="Compose new mail">Compose new mail</a>--}}
        {{--</div>--}}


        {{--<div class="list-group">--}}
        {{--<a class="list-group-item" href="#" title=""><i class="glyph-icon font-gray icon-inbox"></i> Inbox <span class="badge bg-blue">83</span></a> <a class="list-group-item" href="#" title=""><i class="glyph-icon font-gray icon-envelope-o"></i> Sent Mail <span class="badge bg-azure">32</span></a> <a class="list-group-item" href="#" title=""><i class="glyph-icon font-gray icon-certificate"></i> Important <span class="badge bg-azure">32</span></a> <a class="list-group-item" href="#" title=""><i class="glyph-icon font-gray icon-file-text-o"></i> Drafts <span class="badge bg-azure">32</span></a> <a class="list-group-item" href="#" title=""><i class="glyph-icon font-gray icon-trash-o"></i> Trash <span class="badge bg-red">45</span></a>--}}
        {{--</div>--}}
        {{--</div>--}}


        {{--<div class="content-box mrg15B">--}}
        {{--<h3 class="content-box-header clearfix">Chat <small>(Online friends)</small></h3>--}}


        {{--<div class="font-size-11 float-right">--}}
        {{--<h3 class="content-box-header clearfix"><a href="#" title=""><i class="glyph-icon mrg5R opacity-hover icon-plus"></i></a> <a href="#" title=""><i class="glyph-icon opacity-hover icon-cog"></i></a></h3>--}}
        {{--</div>--}}


        {{--<div class="content-box-wrapper text-center clearfix">--}}
        {{--<div class="status-badge mrg10A">--}}
        {{--<img alt="" class="img-circle" src="/admin-assets/image-resources/people/testimonial1.jpg" width="40">--}}

        {{--<div class="small-badge bg-red">--}}
        {{--</div>--}}
        {{--</div>--}}


        {{--<div class="status-badge mrg10A">--}}
        {{--<img alt="" class="img-circle" src="/admin-assets/image-resources/people/testimonial2.jpg" width="40">--}}

        {{--<div class="small-badge bg-orange">--}}
        {{--</div>--}}
        {{--</div>--}}


        {{--<div class="status-badge mrg10A">--}}
        {{--<img alt="" class="img-circle" src="/admin-assets/image-resources/people/testimonial3.jpg" width="40">--}}

        {{--<div class="small-badge bg-red">--}}
        {{--</div>--}}
        {{--</div>--}}


        {{--<div class="status-badge mrg10A">--}}
        {{--<img alt="" class="img-circle" src="/admin-assets/image-resources/people/testimonial4.jpg" width="40">--}}

        {{--<div class="small-badge bg-green">--}}
        {{--</div>--}}
        {{--</div>--}}


        {{--<div class="status-badge mrg10A">--}}
        {{--<img alt="" class="img-circle" src="/admin-assets/image-resources/people/testimonial5.jpg" width="40">--}}

        {{--<div class="small-badge bg-orange">--}}
        {{--</div>--}}
        {{--</div>--}}


        {{--<div class="status-badge mrg10A">--}}
        {{--<img alt="" class="img-circle" src="/admin-assets/image-resources/people/testimonial6.jpg" width="40">--}}

        {{--<div class="small-badge bg-red">--}}
        {{--</div>--}}
        {{--</div>--}}


        {{--<div class="status-badge mrg10A">--}}
        {{--<img alt="" class="img-circle" src="/admin-assets/image-resources/people/testimonial7.jpg" width="40">--}}

        {{--<div class="small-badge bg-green">--}}
        {{--</div>--}}
        {{--</div>--}}


        {{--<div class="status-badge mrg10A">--}}
        {{--<img alt="" class="img-circle" src="/admin-assets/image-resources/people/testimonial8.jpg" width="40">--}}

        {{--<div class="small-badge bg-orange">--}}
        {{--</div>--}}
        {{--</div>--}}
        {{--</div>--}}
        {{--</div>--}}


        {{--<div class="content-box mrg15B">--}}
        {{--<h3 class="content-box-header clearfix">Circles <small>(Available options)</small></h3>--}}


        {{--<div class="font-size-11 float-right">--}}
        {{--<h3 class="content-box-header clearfix"><a href="#" title=""><i class="glyph-icon mrg5R opacity-hover icon-plus"></i></a> <a href="#" title=""><i class="glyph-icon opacity-hover icon-cog"></i></a></h3>--}}
        {{--</div>--}}


        {{--<div class="content-box-wrapper nav-list clearfix">--}}
        {{--<div class="list-group">--}}
        {{--<a class="list-group-item" href="#" title=""><i class="glyph-icon icon-circle-o float-left font-red"></i> Friends</a> <a class="list-group-item" href="#" title=""><i class="glyph-icon icon-circle-o float-left font-green"></i> Family</a> <a class="list-group-item" href="#" title=""><i class="glyph-icon icon-circle-o float-left font-blue"></i> Acquaintances</a> <a class="list-group-item" href="#" title=""><i class="glyph-icon icon-circle-o float-left font-orange"></i> Following</a> <a class="list-group-item" href="#" title=""><i class="glyph-icon icon-circle-o float-left font-gray"></i> Web developers</a>--}}
        {{--</div>--}}
        {{--</div>--}}
        {{--</div>--}}


        {{--<div class="content-box">--}}
        {{--<h3 class="content-box-header clearfix">Tags <small>(Important notes)</small></h3>--}}


        {{--<div class="font-size-11 float-right">--}}
        {{--<h3 class="content-box-header clearfix"><a href="#" title=""><i class="glyph-icon mrg5R opacity-hover icon-plus"></i></a> <a href="#" title=""><i class="glyph-icon opacity-hover icon-cog"></i></a></h3>--}}
        {{--</div>--}}


        {{--<div class="content-box-wrapper nav-list clearfix">--}}
        {{--<div class="list-group">--}}
        {{--<a class="list-group-item" href="#" title="">Important <i class="glyph-icon font-primary icon-chevron-right mrg0R"></i></a> <a class="list-group-item" href="#" title="">Starred <i class="glyph-icon font-primary icon-chevron-right mrg0R"></i></a> <a class="list-group-item" href="#" title="">Forums <i class="glyph-icon font-primary icon-chevron-right mrg0R"></i></a> <a class="list-group-item" href="#" title="">Updates <i class="glyph-icon font-primary icon-chevron-right mrg0R"></i></a>--}}
        {{--</div>--}}
        {{--</div>--}}
        {{--</div>--}}
        {{--</div>--}}


        <div class="col-md-9">
            <div class="content-box">
                <div class="mail-header clearfix">
                    <div class="float-left">
                        <span class="mail-title">View message</span>

                        <div class="btn-group">
                            <a class="btn btn-default btn-small dropdown-toggle" data-toggle="dropdown" href="#"><span class="glyph-icon icon-caret-down"></span></a>

                            <ul class="dropdown-menu">
                                <li>
                                    <a href="#">Action</a>
                                </li>


                                <li>
                                    <a href="#">Another action</a>
                                </li>


                                <li>
                                    <a href="#">Something else here</a>
                                </li>


                                <li class="divider">
                                </li>


                                <li>
                                    <a href="#">Separated link</a>
                                </li>
                            </ul>
                        </div>
                    </div>


                    <div class="float-right col-md-4 pad0A">
                        <div class="input-group">
                            <input class="form-control" type="text">

                            <div class="input-group-btn">
                                <button class="btn btn-default" tabindex="-1" type="button"><i class="glyph-icon icon-search"></i></button>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="divider">
                </div>


                <div class="pad15A clearfix mrg10B">
                    <div class="float-left">
                        <b>{{$Request->name}}</b> ({{$Request->email}}) <i>to</i> <b>me</b>
                    </div>


                    <div class="float-right opacity-80">
                        <i class="glyph-icon icon-clock-o mrg5R"></i> {{$Request->updated_at}}
                    </div>
                </div>


                <div class="mail-toolbar clearfix">
                    <div class="float-left">
                        <h4 class="font-primary">Request By {{$Request->name}} For Joining MuscleUp</h4>
                    </div>


                    <div class="float-right">
                        <a class="btn btn-primary" href="#" title="Reply">Reply <i class="glyph-icon icon-mail-reply"></i></a> <a class="btn btn-default" href="#" title="Print"><i class="glyph-icon icon-print"></i></a> <a class="btn btn-danger mrg10L" href="#" title="Delete"><i class="glyph-icon icon-trash-o"></i></a>
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
                </div>

                <div class="button-pane">
                    <a class="btn btn-blue-alt accept_request" href="{{route('Admin-Message-Accept',$Request->id)}}" title="Accept Request"><i class="glyph-icon icon-mail-reply"></i> Process Request</a> <a class="btn btn-default" href="#" title="Reply">Forward <i class="glyph-icon icon-mail-forward"></i></a>
                </div>
            </div>
        </div>
    </div>
@stop