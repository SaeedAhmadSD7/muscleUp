@extends('layouts.backend-main')
@section('title')
    Admin Dashboard
@stop

@section('dashboard_link')
    {{route('admin-dashboard')}}
@stop
@section('user_type')
    Admin
@stop

@section('dashboard_link')
    {{route('admin-dashboard')}}
@stop

@section('sidebar_content')
    <li class="header"><span>Request Box</span></li>
    <li class="menu-element">
        <a href="#"><i class="glyph-icon icon-linecons-tv"></i><span>Requests</span></a>
        <div class="sidebar-submenu">
            <ul>
                <li>
                    <a href="{{route('Admin-Inbox')}}" title="Inbox"><span>Inbox</span></a>
                </li>
            </ul>
        </div>
    </li>


@stop
