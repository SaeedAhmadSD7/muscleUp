@extends('muscle-up-app.layouts.backend-main')
@section('title')
    Admin Dashboard
@stop

@section('user_type')
    Admin
@stop

@section('sidebar_content')
    <li class="header"><span>Request Box</span></li>
    <li class="menu-element">
        <a class="col-md-10 col-md-offset-2" href="#"><i
                    class="glyph-icon icon-linecons-tv"></i><span>Requests</span></a>
        <div class="sidebar-submenu">
            <ul>
                <li>
                    <a href="{{route('Admin-Inbox')}}" title="Inbox"><span>Inbox</span></a>
                </li>
            </ul>
        </div>
    </li>


@stop
