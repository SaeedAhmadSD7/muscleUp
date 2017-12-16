@extends('layouts.backend-main')
@section('title')
    Admin Dashboard
@stop

@section('user-name')
    {{\Auth::user()->first_name}}
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
    <li class="menu-element">
        <a href="#"><i class="glyph-icon icon-linecons-tv"></i><span>Gyms</span></a>
        <div class="sidebar-submenu">
            <ul>
                <li>
                    <a href="{{route('gym-list')}}" title="Inbox"><span>View List</span></a>
                </li>
            </ul>
        </div>
    </li>
    <li class="menu-element">
        <a href="#"><i class="glyph-icon icon-linecons-tv"></i><span>Company</span></a>
        <div class="sidebar-submenu">
            <ul>
                <li>
                    <a href="{{route('company.create')}}" title="Create a New Company"><span>Create</span></a>
                </li>
            </ul>
        </div>
    </li>

@stop
