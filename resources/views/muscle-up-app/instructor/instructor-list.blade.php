
@extends('layouts.backend-main')
@section('title')
    Instructor Detail List
@stop

@section('dashboard_link')
    {{route('gym')}}
@stop
@section('user_type')
    Gym
@stop

@section('sidebar_content')

@stop

@section('content')
    <div class="row mailbox-wrapper">
        <div class="col-md-3" style="display: none;">
            <div class="content-box nav-list mrg15B">
                <div class="pad10A">
                    <a class="btn btn-success btn-lg btn-block" href="#"
                       title="Compose new mail">Compose new mail</a>
                </div>
                <div class="list-group">
                    <a class="list-group-item" href="#" title=""><i class="glyph-icon font-gray icon-inbox"></i> Inbox <span class="badge bg-blue">83</span></a>
                    <a class="list-group-item" href="#" title=""><i class="glyph-icon font-gray icon-envelope-o"></i> Sent Mail <span class="badge bg-azure">32</span></a>
                    <a class="list-group-item" href="#" title=""><i class="glyph-icon font-gray icon-certificate"></i> Important <span class="badge bg-azure">32</span></a>
                    <a class="list-group-item" href="#" title=""><i class="glyph-icon font-gray icon-file-text-o"></i> Drafts <span class="badge bg-azure">32</span></a>
                    <a class="list-group-item" href="#" title=""><i class="glyph-icon font-gray icon-trash-o"></i> Trash <span class="badge bg-red">45</span></a>
                </div>
            </div>
            <div class="content-box mrg15B">
                <h3 class="content-box-header clearfix">Chat
                    <small>(Online friends)</small>
                </h3>
                <div class="font-size-11 float-right">
                    <h3 class="content-box-header clearfix"><a href="#" title=""><i
                                    class="glyph-icon mrg5R opacity-hover icon-plus"></i></a> <a href="#"
                                                                                                 title=""><i
                                    class="glyph-icon opacity-hover icon-cog"></i></a></h3>
                </div>
                <div class="content-box-wrapper text-center clearfix">
                    <div class="status-badge mrg10A">
                        <img alt="" class="img-circle"
                             src="{{url('/admin-assets/image-resources/people/testimonial1.jpg')}}"
                             width="40">
                        <div class="small-badge bg-red"></div>
                    </div>
                    <div class="status-badge mrg10A">
                        <img alt="" class="img-circle"
                             src="{{url('/admin-assets/image-resources/people/testimonial2.jpg')}}"
                             width="40">
                        <div class="small-badge bg-orange"></div>
                    </div>
                    <div class="status-badge mrg10A">
                        <img alt="" class="img-circle"
                             src="{{url('/admin-assets/image-resources/people/testimonial3.jpg')}}"
                             width="40">
                        <div class="small-badge bg-red"></div>
                    </div>
                    <div class="status-badge mrg10A">
                        <img alt="" class="img-circle"
                             src="{{url('/admin-assets/image-resources/people/testimonial4.jpg')}}"
                             width="40">
                        <div class="small-badge bg-green"></div>
                    </div>
                    <div class="status-badge mrg10A">
                        <img alt="" class="img-circle"
                             src="{{url('/admin-assets/image-resources/people/testimonial5.jpg')}}"
                             width="40">
                        <div class="small-badge bg-orange"></div>
                    </div>
                    <div class="status-badge mrg10A">
                        <img alt="" class="img-circle"
                             src="{{url('/admin-assets/image-resources/people/testimonial6.jpg')}}"
                             width="40">
                        <div class="small-badge bg-red"></div>
                    </div>
                    <div class="status-badge mrg10A">
                        <img alt="" class="img-circle"
                             src="{{url('/admin-assets/image-resources/people/testimonial7.jpg')}}"
                             width="40">
                        <div class="small-badge bg-green"></div>
                    </div>
                    <div class="status-badge mrg10A">
                        <img alt="" class="img-circle"
                             src="{{url('/admin-assets/image-resources/people/testimonial8.jpg')}}"
                             width="40">
                        <div class="small-badge bg-orange"></div>
                    </div>
                </div>
            </div>
            <div class="content-box mrg15B">
                <h3 class="content-box-header clearfix">Circles
                    <small>(Available options)</small>
                </h3>
                <div class="font-size-11 float-right">
                    <h3 class="content-box-header clearfix"><a href="#" title=""><i class="glyph-icon mrg5R opacity-hover icon-plus"></i></a> <a href="#"
                                                                                                                                                 title=""><i
                                    class="glyph-icon opacity-hover icon-cog"></i></a></h3>
                </div>
                <div class="content-box-wrapper nav-list clearfix">
                    <div class="list-group">
                        <a class="list-group-item" href="#" title=""><i
                                    class="glyph-icon icon-circle-o float-left font-red"></i> Friends</a> <a
                                class="list-group-item" href="#" title=""><i
                                    class="glyph-icon icon-circle-o float-left font-green"></i> Family</a>
                        <a class="list-group-item" href="#" title=""><i
                                    class="glyph-icon icon-circle-o float-left font-blue"></i> Acquaintances</a>
                        <a class="list-group-item" href="#" title=""><i
                                    class="glyph-icon icon-circle-o float-left font-orange"></i> Following</a>
                        <a class="list-group-item" href="#" title=""><i
                                    class="glyph-icon icon-circle-o float-left font-gray"></i> Web developers</a>
                    </div>
                </div>
            </div>
            <div class="content-box">
                <h3 class="content-box-header clearfix">Tags
                    <small>(Important notes)</small>
                </h3>
                <div class="font-size-11 float-right">
                    <h3 class="content-box-header clearfix"><a href="#" title=""><i
                                    class="glyph-icon mrg5R opacity-hover icon-plus"></i></a> <a href="#"
                                                                                                 title=""><i
                                    class="glyph-icon opacity-hover icon-cog"></i></a></h3>
                </div>
                <div class="content-box-wrapper nav-list clearfix">
                    <div class="list-group">
                        <a class="list-group-item" href="#" title="">Important <i
                                    class="glyph-icon font-primary icon-chevron-right mrg0R"></i></a> <a
                                class="list-group-item" href="#" title="">Starred <i
                                    class="glyph-icon font-primary icon-chevron-right mrg0R"></i></a> <a
                                class="list-group-item" href="#" title="">Forums <i
                                    class="glyph-icon font-primary icon-chevron-right mrg0R"></i></a> <a
                                class="list-group-item" href="#" title="">Updates <i
                                    class="glyph-icon font-primary icon-chevron-right mrg0R"></i></a>
                    </div>
                </div>
            </div>
        </div>

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
                    @foreach($instructors as $instructor)
                        <tr id="{{$instructor->id}}">
                            {{--<td><input class="custom-checkbox" id="mail-checkbox-1" type="checkbox"></td>--}}
                            <td><i class="glyph-icon icon-star"></i></td>
                            <a href="{{route('instructor-detail',$instructor->id)}}"></a><td class="email-title">{{$instructor->first_name}}</td>
                            <td class="email-body">{{$instructor->email}}</td>
                            <td><i class="glyph-icon icon-paperclip"></i></td>
                            <td>{{$instructor->updated_at}}</td>
                            <td><a type="submit" href="{{route('instructor-edit',['id'=>$instructor->id])}}"><span class="fa fa-angle-right"></span>Edit</a></td>
                            <td><a type="submit" href="{{route('instructor-delete',['id'=>$instructor->id])}}"><span class="fa fa-angle-right"></span>Delete</a></td>





                        </tr>
                    @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
@stop