@extends('muscle-up-app.gym.dashboard.gym-dashboard')

@section('title','Trainee List')

@section('style-sheet')

@stop

@section('content')
    <div class="col-md-9">
        <div class="content-box">
            <div class="mail-header clearfix">
                <span class="mail-title">Inbox</span>
                <div class="btn-group">
                    <a class="btn btn-default btn-small dropdown-toggle" data-toggle="dropdown"
                       href="#"><span class="glyph-icon icon-caret-down"></span></a>
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
                        <li class="divider"></li>
                        <li>
                            <a href="#">Separated link</a>
                        </li>
                    </ul>
                </div>
                <div class="float-right col-md-4 pad0A">
                    <div class="input-group">
                        <input class="form-control" type="text">
                        <div class="input-group-btn">
                            <button class="btn btn-default" tabindex="-1" type="button"><i
                                        class="glyph-icon icon-search"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mail-toolbar clearfix">
                <div class="float-left">
                    <a class="btn btn-default mrg5R" href="#" title=""><i
                                class="glyph-icon font-size-11 icon-refresh"></i></a>
                    <div class="dropdown">
                        <a class="btn btn-default" data-toggle="dropdown" href="#" title=""><i
                                    class="glyph-icon icon-cog"></i> <i
                                    class="glyph-icon icon-chevron-down"></i></a>
                        <ul class="dropdown-menu float-right">
                            <li>
                                <a href="#" title=""><i class="glyph-icon icon-edit mrg5R"></i> Edit</a>
                            </li>
                            <li>
                                <a href="#" title=""><i
                                            class="glyph-icon icon-calendar mrg5R"></i> Schedule</a>
                            </li>
                            <li>
                                <a href="#" title=""><i
                                            class="glyph-icon icon-download mrg5R"></i> Download</a>
                            </li>
                            <li class="divider"></li>
                            <li>
                                <a class="font-red" href="#" title=""><i
                                            class="glyph-icon icon-remove mrg5R"></i> Delete</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="float-right">
                    <div class="btn-toolbar">
                        <div class="btn-group">
                            <div class="size-md mrg10R">
                                1 to 11 of 21 entries
                            </div>
                        </div>
                        <div class="btn-group">
                            <a class="btn btn-default" href="#"><i
                                        class="glyph-icon icon-angle-left"></i></a> <a
                                    class="btn btn-default" href="#"><i
                                        class="glyph-icon icon-angle-right"></i></a>
                        </div>
                        <div class="btn-group mrg15L">
                            <a class="btn btn-primary" href="#"><i
                                        class="glyph-icon icon-list opacity-80"></i> <i
                                        class="glyph-icon icon-caret-down"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <table class="table table-hover text-center">
                <tbody>
                @foreach($trainee as $trainee)
                    <tr id="{{$trainee->id}}">
                        <td><input class="custom-checkbox" id="mail-checkbox-1" type="checkbox"></td>
                        <td><i class="glyph-icon icon-star"></i></td>
                        <td class="email-title">{{$trainee->first_name}}</td>
                        <td class="email-body">{{$trainee->email}}</td>
                        <td><i class="glyph-icon icon-paperclip"></i></td>
                        <td>{{$trainee->updated_at}}</td>
                    </tr>
                @endforeach
                </tbody>
            </table>
        </div>
    </div>


@stop

@section('script')

    <script src="{{url('/assets/js/trainee-inbox.js')}}" type="text/javascript"></script>

@stop
